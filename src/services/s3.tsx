import { S3 } from "aws-sdk";
import DOMPurify from "isomorphic-dompurify";
import { BlogLightEntry } from "../Blog/BlogList/BlogCard/BlogCard";
import { BlogEntry } from "../Blog/BlogPage/BlogPage";
import { Publication } from "../shared/PublicationsList/Publication/Publication";

const s3Client = new S3({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY ?? "",
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY ?? "",
  },
});

const BUCKET_NAME = "bluis";
const HTTP_PROTOCOL = "https://";
const S3_HOST = ".s3.amazonaws.com/";

const BLOG_ENTRIES_FOLDER = "blog_entries";

const FILE_KEY = "file.pdf";
const DESC_KEY = "desc.txt";
const IMAGE_KEY = "image.png";
const BACKGROUND_KEY = "backgroung.png";
const CONTENT_KEY = "content.html";

const NO_TITLE_MSG = "(No title)";
const NO_CONTENT_MSG = "(No content)";
const NO_DESC_MSG = "(No description)";

const getS3Info = () => HTTP_PROTOCOL + BUCKET_NAME + S3_HOST;

const getObjectFromBucketToString = async (key: string, title: string) => {
  try {
    const obj = await s3Client
      .getObject({
        Bucket: BUCKET_NAME,
        Key: title + key,
      })
      .promise();
    return { content: obj.Body?.toString("utf8"), date: obj.LastModified };
  } catch (err) {
    console.log(err);
  }
};

const convertTitle = (title: string) => {
  return title.split(" ").join("+");
};

export const getLightEntryByTitle = async (title: string) => {
  var entry: BlogLightEntry = { title: title.split("/").at(1) ?? NO_TITLE_MSG };
  const object = await getObjectFromBucketToString(DESC_KEY, title);
  entry.desc = object?.content ?? NO_DESC_MSG;
  entry.date = object?.date ?? new Date();
  entry.image = getS3Info() + convertTitle(title) + IMAGE_KEY;
  return entry;
};

const listObjects = async (folder: string) => {
  return await s3Client
    .listObjectsV2({
      Bucket: BUCKET_NAME,
      Delimiter: "/",
      Prefix: folder + "/",
    })
    .promise();
};

export const getFileLink = (prefix: string) => {
  return getS3Info() + prefix + FILE_KEY;
};

export const listPublications = async (folder: string) => {
  var publications: Publication[] = [];
  const response = await listObjects(folder);
  const prefixes = response.CommonPrefixes?.map(
    (commonPrefix) => commonPrefix.Prefix
  );
  if (prefixes) {
    const values = prefixes?.map(async (prefix) => {
      if (prefix) {
        publications.push({
          title: prefix.split("/").at(1) ?? NO_TITLE_MSG,
          file: getFileLink(convertTitle(prefix)),
          image: getS3Info() + convertTitle(prefix) + IMAGE_KEY,
          desc: (await getObjectFromBucketToString(DESC_KEY, prefix))?.content,
        });
      }
    });
    await Promise.all(values);
  }
  return publications;
};

export const listEntries = async () => {
  var entries: BlogLightEntry[] = [];
  const response = await listObjects(BLOG_ENTRIES_FOLDER);
  const prefixes = response.CommonPrefixes?.map(
    (commonPrefix) => commonPrefix.Prefix
  );
  if (prefixes) {
    const values = prefixes?.map(async (prefix) => {
      if (prefix) {
        entries.push(await getLightEntryByTitle(prefix));
      }
    });
    await Promise.all(values);
  }
  return entries;
};

export const getEntryByTitle = async (title: string) => {
  const composedTitle = BLOG_ENTRIES_FOLDER + "/" + title + "/";
  var entry = await getLightEntryByTitle(composedTitle);
  const content =
    (await getObjectFromBucketToString(CONTENT_KEY, composedTitle))?.content ??
    NO_CONTENT_MSG;
  var fullEntry: BlogEntry = { ...entry, content: DOMPurify.sanitize(content) };
  fullEntry.background =
    getS3Info() + convertTitle(composedTitle) + BACKGROUND_KEY;
  return fullEntry;
};

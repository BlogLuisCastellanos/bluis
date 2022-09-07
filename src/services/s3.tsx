import { S3 } from "@aws-sdk/client-s3";
import DOMPurify from "isomorphic-dompurify";
import { BlogLightEntry } from "../Blog/BlogList/BlogCard/BlogCard";
import stream from "stream";
import { BlogEntry } from "../Blog/BlogPage/BlogPage";

const s3Client = new S3({
  region: "your_region",
  credentials: {
    accessKeyId: "your_accessKeyId",
    secretAccessKey: "your_secretAccessKey",
  },
});

const getObjectFromBucketToString = async (key: string, title: string) => {
    const s3Response = await s3Client.getObject({
        Bucket: "bucket",
        Key: "blog_entries/" + title + key,
      });
      const body: stream.Readable | undefined = s3Response.Body as
        | stream.Readable
        | undefined;
      if (body) {
        const payload = await body.read();
        return Buffer.from(payload).toString();
    }
}

export const getLightEntryByTitle = async (title: string) => {
  var entry: BlogLightEntry = { title };
  const object = await getObjectFromBucketToString("description.txt", title);
  entry.desc = object;
  entry.image = "";
  return entry;
};

export const listEntries = async () => {
  var entries: BlogLightEntry[] = [];

  const response = await s3Client.listObjectsV2({
    Bucket: "bucket",
    Delimiter: "/",
    Prefix: "blog_entries",
  });
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
  var entry = await getLightEntryByTitle(title);
  const content = await getObjectFromBucketToString("content.html", title) ?? '(No content)'
  var fullEntry: BlogEntry = {...entry, content: DOMPurify.sanitize(content)}
  fullEntry.background = "";
  return fullEntry;
};

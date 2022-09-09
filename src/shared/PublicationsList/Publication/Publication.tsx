import React from "react";
import useResponsive from "../../hooks/useResponsive";
import styles from "./Publication.module.css";

export interface Publication {
  file: string;
  desc?: string;
  image: string;
  title: string;
}

interface PublicationProps {
  publication: Publication;
}

function PublicationComponent({ publication }: PublicationProps) {
  const { isMobile } = useResponsive();

  return (
    <>
      {!isMobile && (
        <div className={styles.main}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={publication.image}
              alt={publication.title}
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.title}>{publication.title}</div>
            <div className={styles.text}>
              {publication.desc ?? "(No description)"}
            </div>
            <a href={publication.file} target="_blank" rel="noreferrer">
              Link
            </a>
          </div>
        </div>
      )}
      {isMobile && (
        <div className={styles.mobileMain}>
          <div className={styles.title}>{publication.title}</div>
          <div className={styles.mobileImageContainer}>
            <img
              className={styles.image}
              src={publication.image}
              alt={publication.title}
            />
          </div>
          <div className={styles.mobileText}>
            {publication.desc ?? "(No description)"}
          </div>
          <a href={publication.file} target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      )}
    </>
  );
}

export default PublicationComponent;

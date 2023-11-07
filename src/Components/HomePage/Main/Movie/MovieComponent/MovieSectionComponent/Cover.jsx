import styles from "../../Movies.module.css";

import CoverShadow from "./CoverComponent/CoverShadow";

export default function Cover({ cover }) {
  return (
    <div className={styles.cover}>
      <img
        className={styles.photoCover}
        src={`/images/${cover.section}/${cover.name}/smallcover.webp`}
        alt={cover.name}
      />
      <CoverShadow slide={cover} cover={cover} />
    </div>
  );
}

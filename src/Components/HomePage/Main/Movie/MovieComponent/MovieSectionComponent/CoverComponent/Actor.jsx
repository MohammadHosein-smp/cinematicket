import styles from "../../../Movies.module.css";
export default function Actor({ cover, actor }) {
  return (
    <div className={styles.actor}>
      <img
        className={styles.photoActor}
        src={`images/بازیگران/${actor}.webp`}
        alt={cover.name}
      />
      <span>{actor}</span>
    </div>
  );
}

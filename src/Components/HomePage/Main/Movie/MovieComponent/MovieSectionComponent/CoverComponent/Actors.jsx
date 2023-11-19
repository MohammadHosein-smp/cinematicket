import styles from "../../../Movies.module.css";
import Actor from "./Actor";

export default function Actors({ cover }) {
  return (
    <div className={styles.actors}>
      {cover.actors.slice(0, 3).map((actor) => (
        <Actor cover={cover} key={actor} actor={actor} />
      ))}
    </div>
  );
}

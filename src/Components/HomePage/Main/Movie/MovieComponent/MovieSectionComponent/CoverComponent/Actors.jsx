import styles from "../../../Movies.module.css";
import Actor from "./Actor";

export default function Actors({ cover }) {
  return (
    <div className={styles.actors}>
      <Actor cover={cover} actor={cover.actorName1} />
      <Actor cover={cover} actor={cover.actorName2} />
      <Actor cover={cover} actor={cover.actorName3} />
    </div>
  );
}

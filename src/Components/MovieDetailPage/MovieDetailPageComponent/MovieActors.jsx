import styles from "../MovieDetail.module.css";

export default function MovieActors({ movie, actorsArray }) {
  return (
    <div className={styles.actors}>
      {actorsArray.map((actor, i) => {
        return (
          <div key={actor} className={styles.actor}>
            <img
              className={styles.photoActor}
              src={`/images/بازیگران/${actor}.webp`}
              alt={movie.name}
            />
            <span>{actor}</span>
          </div>
        );
      })}
    </div>
  );
}

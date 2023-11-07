import styles from "../MovieDetail.module.css";
import { cinemaData } from "../../../Data";
import { useState } from "react";
import MovieCinemaSans from "./MovieCinemaSans";
import MovieCinemaSansList from "./MovieCinemaSansList";

export default function MovieCinemaList({ movie }) {
  const [openSans, setOpenSans] = useState(
    new Array(cinemaData.length).fill(false)
  );
  return (
    <div className={styles.cinemaList}>
      {cinemaData.map((cinema, i) => {
        function handleClick() {
          const open = [...openSans];
          open[i] = !open[i];
          setOpenSans(open);
        }
        return (
          <>
            <MovieCinemaSansList
              cinema={cinema}
              openSans={openSans}
              handleClick={handleClick}
              key={i}
              i={i}
            />
            {openSans[i] && (
              <div onClick={handleClick}>
                {cinema.salons.map((salon, i) => {
                  return (
                    <MovieCinemaSans
                      cinema={cinema}
                      movie={movie}
                      key={i}
                      salon={salon}
                    />
                  );
                })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

import styles from "../MovieDetail.module.css";
import { cinemaData } from "../../../Data";
import { useState } from "react";
import MovieCinemaSans from "./MovieCinemaSans";
import MovieCinemaSansList from "./MovieCinemaSansList";
import { useSelector } from "react-redux";

export default function MovieCinemaList({ movie }) {
  const [openSans, setOpenSans] = useState(
    new Array(cinemaData.length).fill(false)
  );
  const city = useSelector((state) => state.customer.city);
  const Cinema = [...cinemaData];
  Cinema.sort((a, b) => {
    if (a.city === city && b.city !== city) {
      return -1;
    } else if (a.city === city && b.city === city) {
      return 0;
    } else {
      return 1;
    }
  });
  return (
    <div className={styles.cinemaList}>
      {Cinema.map((cinema, i) => {
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
              key={cinema.name}
              i={i}
            />
            {openSans[i] && cinema.salons && (
              <div onClick={handleClick}>
                {cinema.salons.map((salon, i) => {
                  return (
                    <MovieCinemaSans
                      cinema={cinema}
                      movie={movie}
                      key={movie.name}
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

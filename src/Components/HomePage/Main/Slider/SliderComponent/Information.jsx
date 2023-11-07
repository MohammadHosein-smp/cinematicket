import styles from "../Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import InfBox from "./InfBox";

export default function Information({ slide }) {
  return (
    <>
      <div className={styles.information}>
        <InfBox display={slide.rate}>
          <FontAwesomeIcon
            style={{ color: "red" }}
            className={styles.icon}
            icon={faHeart}
          />
          <span>{slide.rate}/۵</span>
        </InfBox>
        <InfBox display={slide.time}>
          <FontAwesomeIcon className={styles.icon} icon={faClock} />
          <span>{slide.time}</span>
        </InfBox>
        <InfBox display={slide.genre}>
          <span>{slide.genre}</span>
        </InfBox>
      </div>
    </>
  );
}

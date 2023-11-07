import styles from "../NavBar.module.css";
import { Cities } from "../../../../../Data";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLocationCrosshairs,
  faLocationDot,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectCity } from "../../../../../customerSlice";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function CitiesPopup() {
  const [cityList, setCityList] = useState(Cities);
  const [citiesPopup, setCitiesPopup] = useState(false);
  const city = useSelector((state) => state.customer.city);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setCitiesPopup(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  function handleSearch(e) {
    setCityList(Cities.filter((city) => city.includes(e.target.value)));
  }

  const dispatch = useDispatch();
  return (
    <div ref={menuRef}>
      <Link onClick={() => setCitiesPopup(!citiesPopup)}>
        <Button>
          <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
          <span>{city === "" ? "شهر خود را انتخاب کنید" : city}</span>
          <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
        </Button>
      </Link>

      {citiesPopup && (
        <div className={styles.citiesPopup}>
          <div className={styles.cityHeader}>
            <div className={styles.titleSearch}>
              <span>موقعیت مکانی</span>
              <div className={styles.citySearch}>
                <input
                  onChange={(e) => {
                    handleSearch(e);
                  }}
                  type="text"
                  placeholder="جستجوی نام شهر..."
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                onClick={() => setCitiesPopup(false)}
                className={styles.xmark}
                icon={faXmark}
              />
            </div>
          </div>
          <ul className={styles.cityList}>
            {cityList.map((city) => {
              return (
                <li
                  onClick={() => {
                    dispatch(selectCity(city));
                    setCitiesPopup(false);
                  }}
                  key={city}
                  className={styles.city}
                >
                  {city}
                </li>
              );
            })}
          </ul>
          <div className={styles.cityFooter}>
            <button>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <span>مکان یابی</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

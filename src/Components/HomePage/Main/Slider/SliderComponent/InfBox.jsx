import styles from "../Slider.module.css";
export default function InfBox({ children, display }) {
  return (
    <span
      className={styles.infSec}
      style={{ display: display ? "inline-flex" : "none" }}
    >
      {children}
    </span>
  );
}

import styles from "../../Movie/Movies.module.css";
export default function Director({ slide }) {
  return (
    <div
      className={styles.director}
      style={{
        display: slide.director ? "block" : "none",
      }}
    >
      <span>کارگردان:</span> {slide.director}
    </div>
  );
}

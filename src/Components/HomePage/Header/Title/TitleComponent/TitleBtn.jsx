import styles from "../Title.module.css";
export default function TitleBtn({ children }) {
  return (
    <span
      onClick={() =>
        window.scrollTo(
          0,
          document.getElementById(children).offsetTop -
            (children === "کودک و نوجوان" || children === "فیلم خارجی"
              ? 110
              : 130)
        )
      }
      className={`${styles.titleBtn} active`}
    >
      {children}
    </span>
  );
}

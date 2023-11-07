import styles from "./Title.module.css";
import TitleBtn from "./TitleComponent/TitleBtn";

export default function Title() {
  const titles = [
    "فیلم ایرانی",
    "کودک و نوجوان",
    "تئاتر",
    "هنر و تجربه",
    "تئاتر کمدی",
    "فیلم خارجی",
  ];
  document.addEventListener("scroll", () => {
    if (document.querySelectorAll(".active").length > 0) {
      if (
        window.scrollY <
        document.getElementById("کودک و نوجوان").offsetTop - 300
      ) {
        return (
          document.querySelectorAll(".active").forEach((element) => {
            element.classList.remove(styles.active);
          }),
          document.querySelectorAll(".active")[0].classList.add(styles.active)
        );
      } else if (
        document.getElementById("کودک و نوجوان").offsetTop - 300 <
          window.scrollY &&
        window.scrollY < document.getElementById("تئاتر").offsetTop - 300
      ) {
        return (
          document.querySelectorAll(".active").forEach((element) => {
            element.classList.remove(styles.active);
          }),
          document.querySelectorAll(".active")[1].classList.add(styles.active)
        );
      } else if (
        document.getElementById("تئاتر").offsetTop - 300 < window.scrollY &&
        window.scrollY < document.getElementById("هنر و تجربه").offsetTop - 300
      ) {
        return (
          document.querySelectorAll(".active").forEach((element) => {
            element.classList.remove(styles.active);
          }),
          document.querySelectorAll(".active")[2].classList.add(styles.active)
        );
      } else {
        return (
          document.querySelectorAll(".active").forEach((element) => {
            element.classList.remove(styles.active);
          }),
          document.querySelectorAll(".active")[3].classList.add(styles.active)
        );
      }
    }
  });
  return (
    <title className={styles.title}>
      {titles.map((title) => {
        return <TitleBtn key={title}>{title}</TitleBtn>;
      })}
    </title>
  );
}

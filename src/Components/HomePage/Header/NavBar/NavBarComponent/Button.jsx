import styles from "../NavBar.module.css";
export default function Button({ children }) {
  return <div className={styles.btn}>{children}</div>;
}

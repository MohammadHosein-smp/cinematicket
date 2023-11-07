import styles from "../Authentication.module.css";

export default function FormPart({ lable, placeholder }) {
  return (
    <div className={styles.part}>
      <label>
        {lable} <span>*</span>
      </label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

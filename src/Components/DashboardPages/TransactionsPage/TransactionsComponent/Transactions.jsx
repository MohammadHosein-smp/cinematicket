import styles from "../Transactions.module.css";

export default function Transactions() {
  return (
    <div className={styles.transaction}>
      <img src="/images/dashboard/transaction.svg" alt="transaction" />
      <b>تا به‌حال تراکنشی انجام نداده‌اید!</b>
      <div>در این صفحه تراکنش های شما نمایش داده می‌شود.</div>
    </div>
  );
}

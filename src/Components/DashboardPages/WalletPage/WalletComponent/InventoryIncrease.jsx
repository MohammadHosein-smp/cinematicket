import styles from "../WalletPage.module.css";

export default function InventoryIncrease() {
  return (
    <section className={styles.increase}>
      <label>افزایش موجودی کیف پول</label>
      <span>برای افزایش موجودی کیف پول، مبلغ مورد نظر خود را انتخاب کنید.</span>
      <div className={styles.infReq}>
        <div className={styles.walletInf}>
          <div className={styles.value}>20,000 تومان</div>
          <div className={styles.value}>40,000 تومان</div>
          <div className={styles.value}>60,000 تومان</div>
          <div className={styles.text}>یا</div>
          <input
            className={styles.input}
            type="text"
            placeholder="مبلغ دلخواه شما..."
          />
          <div className={styles.text}>تومان</div>
        </div>
        <button className={styles.request}>افزایش اعتبار</button>
      </div>
    </section>
  );
}

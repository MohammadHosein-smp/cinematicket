import styles from "../WalletPage.module.css";

export default function InventoryDecrease() {
  return (
    <div className={styles.decrease}>
      <label>برداشت از کیف پول</label>
      <span>
        در صورتی که هنگام خرید با مشکل بانکی روبرو شوید یا پس از خرید بلیت خود
        را لغو کنید، مبلغ آن به کیف پول شما در سینماتیکت واریز می‌شود. از طریق
        دکمه زیر می‌توانید مبلغ موجود در کیف پول را به حساب بانکی خود انتقال
        دهید.
      </span>
      <div className={styles.infReq}>
        <div className={styles.walletInf}>
          <div className={styles.label}>موجودی کیف شما</div>
          <div className={styles.value}>0 تومان</div>
        </div>
        <button className={styles.request}>درخواست برداشت از کیف پول </button>
      </div>
    </div>
  );
}

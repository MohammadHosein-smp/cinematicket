import styles from "../WalletPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import InventoryIncrease from "./InventoryIncrease";
import InventoryDecrease from "./InventoryDecrease";

export default function Wallet() {
  return (
    <div className={styles.wallet}>
      <div className={styles.walletInf}>
        <FontAwesomeIcon className={styles.icon} icon={faCircleExclamation} />
        <span>
          موجودی کیف پول شما 0 تومان است. برای انتقال مبالغ بالاتر از 800 هزار
          تومان از کیف پول به حساب بانکی‌، ابتدا باید احراز هویت کنید.
        </span>
      </div>
      <InventoryDecrease />
      <InventoryIncrease />
    </div>
  );
}

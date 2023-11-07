import styles from "./WalletPage.module.css";
import Layout from "../../Layout/Layout";
import Dashboard from "../Dashboard";
import Wallet from "./WalletComponent/Wallet";

export default function WalletPage() {
  return (
    <Layout>
      <div className={styles.walletPage}>
        <Dashboard />
        <Wallet />
      </div>
    </Layout>
  );
}

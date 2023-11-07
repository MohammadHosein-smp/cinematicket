import Layout from "../../Layout/Layout";
import Dashboard from "../Dashboard";
import styles from "./Transactions.module.css";
import Transactions from "./TransactionsComponent/Transactions";

export default function TransactionsPage() {
  return (
    <Layout>
      <div className={styles.transactionsPage}>
        <Dashboard />
        <Transactions />
      </div>
    </Layout>
  );
}

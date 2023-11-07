import styles from "./MyTickets.module.css";
import Layout from "../../Layout/Layout";
import Dashboard from "../Dashboard";
import MyTickets from "./MyTicketsComponent/MyTickets";

export default function MyTicketsPage() {
  return (
    <Layout>
      <div className={styles.MyTicketsPage}>
        <Dashboard />
        <MyTickets />
      </div>
    </Layout>
  );
}

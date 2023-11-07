import styles from "./Authentication.module.css";
import Layout from "../../Layout/Layout";
import Dashboard from "../Dashboard";
import Authentication from "./AuthenticationComponent/Authentication";

export default function AuthenticationPage() {
  return (
    <Layout>
      <div className={styles.authenticationPage}>
        <Dashboard />
        <Authentication />
      </div>
    </Layout>
  );
}

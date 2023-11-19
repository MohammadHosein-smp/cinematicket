import styles from "./ChooseSeatPage.module.css";
import { ChooseSeatPageHeader } from "./ChooseSeatPageComponent/ChooseSeatPageHeader";
import { ChooseSeatPageMain } from "./ChooseSeatPageComponent/ChooseSeatPageMain";
import { ChooseSeatPageFooter } from "./ChooseSeatPageComponent/ChooseSeatPageFooter";

export default function ChooseSeatPage() {
  return (
    <div className={styles.chooseSeatPage}>
      <ChooseSeatPageHeader />
      <div className={styles.mainFooter}>
        <ChooseSeatPageMain />
        <ChooseSeatPageFooter />
      </div>
    </div>
  );
}

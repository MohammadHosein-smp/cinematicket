import styles from "../Movies.module.css";
import { Movie } from "../../../../../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SaleMovie from "./SaleTableSectionComponent/SaleMovie";

export default function SaleTableSection() {
  const Sale = Movie.filter((movie) => {
    return movie.amount;
  })
    .sort((a, b) => {
      return a.amount.length < b.amount.length
        ? 1
        : a.amount.length > b.amount.length
        ? -1
        : b.amount.localeCompare(a.amount);
    })
    .slice(0, 9);
  return (
    <div className={styles.saleTable}>
      <div className={styles.saleTableHeader}>
        <span className={styles.title}>جدول فروش</span>
        <span>به روز رسانی:دیروز</span>
      </div>
      {Sale.map((movie, i) => {
        return <SaleMovie movie={movie} number={i + 1} key={i} />;
      })}

      <div className={styles.saleTableFooter}>
        مشاهده کامل جدول فروش
        <FontAwesomeIcon className="icon" icon={faChevronDown} />
      </div>
    </div>
  );
}

import styles from "../Authentication.module.css";
import FormPart from "./FormPart";

export default function Authentication() {
  return (
    <div className={styles.authentication}>
      <div className={styles.title}>احراز هویت</div>
      <p>
        درصورتی که مجموع تراکنش‌های شما از کیف پول بیشتر از ۸۰۰ هزار تومان شود،
        با توجه به <span>قوانین شفافیت مالی</span> برای ادامه استفاده از کیف پول
        باید اطلاعات زیر را تکمیل کنید.
      </p>
      <p>
        به دلیل غیر فعال بودن سرویس «استعلام کد ملی»
        <span>از ساعت 23 الی 7 صبح</span>، امکان احراز هویت غیر فعال می باشد.
      </p>
      <div className={styles.form}>
        <FormPart lable="نام و نام خانوادگی" placeholder="اصغر فرهادی" />
        <FormPart lable="شماره موبایل" placeholder="989XXXXXXXXX" />
        <FormPart lable="شماره کارت" placeholder="---- ---- ---- ----" />
        <FormPart lable="کد ملی" placeholder="XXXXXXXXXX" />
      </div>
      <button>ویرایش اطلاعات و درخواست بررسی</button>
    </div>
  );
}

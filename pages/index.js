import styles from "../styles/Home.module.css";
import Link from "next/link";
import "./../i18n";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h1>{t("welcome")}</h1>
      <h2>{t("description")}</h2>
      <h3>{t("water")}</h3>
      <h3>{t("laptop")}</h3>
      {/* <h3>{i18n.t("mobile")}</h3>
      <h3>{i18n.t("television")}</h3> */}
      <select onChange={handleChange}>
        <option value="en">english</option>
        <option value="tr">Turkish</option>
        <option value="ar">arabic</option>
      </select>
      <Link href="/blog">
        <a>blog Page</a>
      </Link>
    </div>
  );
}

import styles from "../styles/Home.module.css";
import Link from "next/link";
import "../i18n";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h3>{t("about")}</h3>
      <select onChange={handleChange}>
        <option value="en">english</option>
        <option value="tr">Turkish</option>
        <option value="ar">arabic</option>
      </select>
    </div>
  );
}

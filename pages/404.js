import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";

export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t("404key")}</h1>
      <h1>404 | Page not found</h1>
    </div>
  );
}

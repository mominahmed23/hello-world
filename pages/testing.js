import React from "react";
import { useTranslation } from "react-i18next";
const testing = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t("testing")}</h1>
    </div>
  );
};

export default testing;

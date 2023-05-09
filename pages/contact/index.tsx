import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import { withTranslation, WithTranslation } from "react-i18next";

interface Props extends WithTranslation {};

const ContactPage: NextPage<Props> = ({t}) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1>Contact</h1>
        <p>現在語言: {t("language")}</p>
        <p>{t("myName")}</p>
      </div>
    </>
  );
};

export default withTranslation()(ContactPage);

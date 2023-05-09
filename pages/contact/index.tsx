import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from "react-i18next";
interface Props extends WithTranslation {}

const ContactPage: NextPage<Props> = ({ t: tFn }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.contact.info",
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <p>現在語言: {tFn("language")}</p>
        <p>{tFn("myName")}</p>
        <p>{t("basicInfo")}</p>
      </div>
    </>
  );
};

export default withTranslation()(ContactPage);

import { NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Text } from "@chakra-ui/react";
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from "react-i18next";
interface Props extends WithTranslation {}

const WorksPage: NextPage<Props> = ({ t: tFn }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.works",
  });
  const { t: tSake } = useTranslation("translation", {
    keyPrefix: "pages.works.sakeholic",
  });
  const { t: tKomo } = useTranslation("translation", {
    keyPrefix: "pages.works.komoru",
  });
  const { t: tDen } = useTranslation("translation", {
    keyPrefix: "pages.works.dental",
  });
  const { t: tWow } = useTranslation("translation", {
    keyPrefix: "pages.works.wowtch",
  });
  return (
    <Layout>
      <div className="mx-auto leading-relaxed">
        <section>
          <div className="brand">
            <h2 className="brand__title">Works</h2>
            <h3 className="brand__subtitle">{tSake("title")}</h3>
            <article>
              {Array(3)
                .fill("")
                .map((_, i) => (
                  <Text>{tSake(`content${i + 1}`)}</Text>
                ))}
              <a
                href="https://github.com/aki168/sakeholic"
                target="_blank"
                className="px-1 text-[16px] text-green-600"
              >
                GitHub
              </a>{" "}
              |
              <a
                href="https://aki168.github.io/sakeholic/"
                target="_blank"
                className="px-1 text-[16px] text-green-600"
              >
                DEMO
              </a>
              |
              <a
                href=" https://docs.google.com/presentation/d/1KX3Ik6XWJaW9c_FRWk2a39AL90tJG4WeWA1TQKdTm5Q/edit?usp=sharing"
                target="_blank"
                className="px-1 text-[16px] text-green-600"
              >
                {t("presentation")}
              </a>
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <Image
                  width={700}
                  height={500}
                  src="/point4z.png"
                  alt="brand_img"
                  className="mx-auto"
                />
              </div>
              <div className="brand__photo-list__two-item">
                <Image
                  width={400}
                  height={400}
                  src="/point2.png"
                  alt="brand_img"
                />
                <Image
                  width={400}
                  height={400}
                  src="/point3.png"
                  alt="brand_img"
                />
              </div>
              <div className="brand__photo-list__two-item">
                <Image
                  width={400}
                  height={400}
                  src="/point1.png"
                  alt="brand_img"
                />
                <Image
                  width={400}
                  height={400}
                  src="/skill-s.png"
                  alt="brand_img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="brand--wrap--none">
          <div className="brand">
            <h2 className="brand__title">{t("projectExp")}</h2>
            <h3 className="brand__subtitle">{tKomo("title")}</h3>
            <article>
              {Array(3)
                .fill("")
                .map((_, i) => (
                  <Text>{tKomo(`content${i + 1}`)}</Text>
                ))}
              <a
                href="https://github.com/aki168/komoru"
                target="_blank"
                className="px-1 text-[16px] text-green-600"
              >
                GitHub
              </a>{" "}
              |
              <a
                href="https://docs.google.com/document/d/1YBaLi97KjZeulR4dnGp-7TjwSsYcH7I7/edit?usp=sharing&ouid=101903928695152348684&rtpof=true&sd=true"
                target="_blank"
                className="px-1 text-[16px] text-green-600"
              >
                {t("doc")}
              </a>
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <Image
                  width={700}
                  height={500}
                  src="/komoru01.jpg"
                  alt="brand_img"
                  className="mx-auto"
                />
              </div>
              <div className="brand__photo-list__two-item">
                <Image
                  width={400}
                  height={400}
                  src="/komoru02.jpg"
                  alt="brand_img"
                />
                <Image
                  width={400}
                  height={400}
                  src="/komoru03.jpg"
                  alt="brand_img"
                />
              </div>
              <div className="brand__photo-list__two-item">
                <Image
                  width={400}
                  height={400}
                  src="/home-user.png"
                  alt="brand_img"
                />
                <Image
                  width={400}
                  height={400}
                  src="/skill.jpg"
                  alt="brand_img"
                />
              </div>
            </div>
            <article>
              {Array(6)
                .fill("")
                .map((_, i) => (
                  <Text>{tKomo(`content${i + 4}`)}</Text>
                ))}
            </article>
          </div>
        </section>
        <section className="brand--wrap">
          <div className="brand">
            <h2 className="brand__title">Works</h2>
            <h3 className="brand__subtitle">
              {tDen("title")}
              <br />
              あき歯科クリニック表参道
            </h3>
            <article>
              {Array(3)
                .fill("")
                .map((_, i) => (
                  <Text>{tDen(`content${i + 1}`)}</Text>
                ))}
              <a href="https://aki168.github.io/dental/" target="_blank" className="px-1 text-[16px] text-green-600">
                DEMO
              </a>
              |
              <a
                href="https://www.figma.com/proto/0UWnQgV1nS1f1dSurOV9WO/03-%E9%84%AD%E8%B3%87%E9%A6%A8-%5B%E5%B0%8F%E5%B0%88%5D-%E6%97%A5%E6%9C%AC%E7%89%99%E9%86%AB%E8%A8%BA%E6%89%80%E5%AE%98%E7%B6%B2?node-id=502-22"
                target="_blank"
                className="px-1 text-[16px] text-green-600"
              >
                {t("presentation")}
              </a>
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <Image
                  width={700}
                  height={500}
                  src="/dental2.jpg"
                  alt="brand_img"
                  className="mx-auto"
                />
              </div>
              <div className="brand__photo-list__two-item">
                <Image
                  width={400}
                  height={400}
                  src="/dental1.jpg"
                  alt="brand_img"
                />
                <Image
                  width={400}
                  height={400}
                  src="/dental3.jpg"
                  alt="brand_img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="brand--wrap--none">
          <div className="brand">
            <h2 className="brand__title">{t("projectExp")}</h2>
            <h3 className="brand__subtitle">{tWow("title")}</h3>
            <article>
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <Text>{tWow(`content${i + 1}`)}</Text>
                ))}
            </article>
            <div className="brand__photo-list">
              <div className="brand__photo-list__one-item">
                <Image
                  width={700}
                  height={500}
                  src="/wowtch.jpg"
                  alt="brand_img"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WorksPage;

import { NextPage } from "next";
import Layout from "../../components/Layout";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <section className="about">
          <h2 className="about__title">About</h2>
          <Image src="icon.jpg" alt="aki" className="about__main-pic mx-auto"/>
          <article className="about__content">
            <p className="about__content--profile">
              鄭資馨 AKI
              <br />
            </p>
            <p className="about__content--info">
              現任前端工程師，主力以 React 進行開發
              <br />
              Vue 方面有製作 side project 的經驗
              <br />
              經歷過 遊戲、直播、電子支付 相關專案
              <br />
              <br />
              自主學習、適應力佳
              <br />
              視專案需求使用不同框架，並快速上手
              <br />
              也樂於分享技術知識，與團隊並肩作戰
              <br />
              思考程式系統如何優化
            </p>

            <h2>－我的優勢－</h2>
            <p>
              前端技術專業 Ｘ 營運專案視角
              <br />
              由運營策略構思，到系統開發需求、專案管理
              <br />
              對程式撰寫及前端開發有無比的熱情
            </p>
          </article>
          <ul className="about__list">
            <li>
              <i className="fa-solid fa-circle"></i>
              Frontend Developer -新加坡商必創科技
              <br />
              2022/08 - 現在
            </li>
            <li>
              <i className="fa-solid fa-circle"></i>
              Marketing､ PM -中佑資訊 (BBIN)
              <br />
              2019/12 - 2022/2 (2年3個月)
            </li>
          </ul>
        </section>
        {/* About
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">The perfect latte</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card> */}
      </div>
    </Layout>
  );
};

export default About;

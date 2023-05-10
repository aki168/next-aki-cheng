import { NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Icon } from "@chakra-ui/icons";
import {
  Image as Img,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  Divider,
  ListIcon,
  Circle,
  SimpleGrid,
} from "@chakra-ui/react";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <section className="about">
          <h2 className="about__title">About</h2>
          <article>
            <Img
              className="about__main-pic mx-auto"
              src="/icon.jpg"
              alt="aki"
            />
            <Heading marginBottom={"4"}>鄭資馨 AKI</Heading>
            <Stack spacing={3} marginBottom={"8"}>
              <Text>現任前端工程師，主力以 React 進行開發</Text>
              <Text>經歷過 遊戲、直播、電子支付 相關專案</Text>
              <Text>自主學習、適應力佳</Text>
              <Text>視專案需求使用不同框架，並快速上手</Text>
              <Text>也樂於分享技術知識，與團隊並肩作戰</Text>
              <Text>思考程式系統如何優化</Text>
            </Stack>
            <Stack spacing={3} marginBottom={"4"}>
              <Heading size={"md"}>－ 我的優勢 －</Heading>
              <Text>前端技術專業 Ｘ 營運專案視角</Text>
              <Text>由運營策略構思，到系統開發需求、專案管理</Text>
              <Text>對程式撰寫及前端開發有無比的熱情</Text>
            </Stack>
            <Heading size={"md"} paddingY={"4"}>
              － 具備技術 －
            </Heading>
            <SimpleGrid
              spacing={3}
              marginBottom={"4"}
              maxWidth={"550px"}
              marginX={"auto"}
              columns={[1, 1, 2]}
            >
              <Card>
                <CardHeader
                  bgColor={"twitter.400"}
                  color={"white"}
                  borderTopRadius={"md"}
                >
                  <Heading size="md">程式語言 | 指令</Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src="/ts.png"
                    width={"90"}
                    height={"90"}
                    alt="ts"
                    className="mx-auto mb-1"
                  />
                  <List>
                    <ListItem>TypeScript</ListItem>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>SASS(SCSS)</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader
                  bgColor={"cyan.400"}
                  color={"white"}
                  borderTopRadius={"md"}
                >
                  <Heading size="md">框架 | 元件庫</Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src="/react.png"
                    width={"90"}
                    height={"90"}
                    alt="react"
                    className="mx-auto mb-1"
                  />
                  <List>
                    <ListItem>React</ListItem>
                    <ListItem>Next.js</ListItem>
                    <ListItem>Node.js</ListItem>
                    <ListItem>Vue.js</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader
                  bgColor={"facebook.300"}
                  color={"white"}
                  borderTopRadius={"md"}
                >
                  <Heading size="md">UI 元件庫</Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src="/antd.png"
                    width={"90"}
                    height={"90"}
                    alt="antd"
                    className="mx-auto mb-1"
                  />
                  <List>
                    <ListItem>Ant Design</ListItem>
                    <ListItem>i18n 多語系</ListItem>
                    <ListItem>Tailwind</ListItem>
                    <ListItem>Bootstrap</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader
                  bgColor={"messenger.400"}
                  color={"white"}
                  borderTopRadius={"md"}
                >
                  <Heading size="md">開發工具</Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src="/wp.png"
                    width={"90"}
                    height={"90"}
                    alt="webpack"
                    className="mx-auto mb-1"
                  />
                  <List>
                    <ListItem>Webpack</ListItem>
                    <ListItem>Git</ListItem>
                    <ListItem>Vite</ListItem>
                    <ListItem>Figma</ListItem>
                  </List>
                </CardBody>
              </Card>
            </SimpleGrid>
            <Divider color={"blackAlpha.200"} />
          </article>
          <List spacing={6} paddingY={"4"} marginBottom={"8"}>
            <Heading size={"md"}>－ 工作經驗 －</Heading>
            <ListItem fontSize={"lg"}>
              <Image
                src="/bbin.png"
                width={"100"}
                height={"30"}
                alt="bbin"
                className="mx-auto"
              />
              <Icon viewBox="0 0 200 200" color={"blackAlpha.300"}>
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Project Manager -中佑資訊 (BBIN)
              <br />
              2019/12 - 2022/2 (2年3個月)
            </ListItem>
            <ListItem fontSize={"lg"}>
              <Image
                src="/beCreator.png"
                width={"50"}
                height={"50"}
                alt="beCreator"
                className="mx-auto"
              />
              <Icon viewBox="0 0 200 200" color={"blackAlpha.300"}>
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Frontend Developer -新加坡商必創科技
              <br />
              2022/08 - 現在
            </ListItem>
          </List>
        </section>
      </div>
    </Layout>
  );
};

export default About;

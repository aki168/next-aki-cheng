import { NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Icon } from "@chakra-ui/icons";
import {
  Image as Img,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from "react-i18next";
interface Props extends WithTranslation {}

const About: NextPage = () => {
  const { t: tInfo } = useTranslation("translation", {
    keyPrefix: "pages.about.info",
  });
  const { t: tAdv } = useTranslation("translation", {
    keyPrefix: "pages.about.advantage",
  });
  const { t: tSkill } = useTranslation("translation", {
    keyPrefix: "pages.about.skills",
  });
  const { t: tExp } = useTranslation("translation", {
    keyPrefix: "pages.about.experience",
  });
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
            <Heading marginBottom={"4"} size={"md"}>{tInfo("title")}</Heading>
            <Stack spacing={3} marginBottom={"8"}>
              {Array(6)
                .fill("")
                .map((_, i) => (
                  <Text key={i}>{tInfo(`content${i + 1}`)}</Text>
                ))}
            </Stack>
            <Stack spacing={3} marginBottom={"4"}>
              <Heading size={"md"}>{tAdv("title")}</Heading>
              {Array(3)
                .fill("")
                .map((_, i) => (
                  <Text key={i}>{tAdv(`content${i + 1}`)}</Text>
                ))}
            </Stack>
            
          <List spacing={6} paddingY={"4"} marginBottom={"8"}>
            <Heading size={"md"}>{tExp("title")}</Heading>
            <ListItem fontSize={"lg"}>
              <Image
                src="/bbin.png"
                width={"100"}
                height={"30"}
                alt="bbin"
                className="mx-auto"
              />
              <Text>
                <Icon viewBox="0 0 200 200" color={"blackAlpha.300"} marginEnd={"2"}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Project Manager - {tExp("BBIN")}
              </Text>
              <Text>2019/12 - 2022/2</Text>
            </ListItem>
            <ListItem fontSize={"lg"}>
              <Image
                src="/beCreator.png"
                width={"50"}
                height={"50"}
                alt="beCreator"
                className="mx-auto"
              />
              <Text>
                <Icon viewBox="0 0 200 200" color={"blackAlpha.300"} marginEnd={"2"}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Frontend Developer -{tExp("beCreator")}
              </Text>
              <Text>2022/08 - {tExp("now")}</Text>
            </ListItem>
          </List>
            <Heading size={"md"} paddingY={"4"}>
              {tSkill("title")}
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
                  <Heading size="md">{tSkill("programLanguage")}</Heading>
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
                  <Heading size="md">{tSkill("framework")}</Heading>
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
                    <ListItem>Express(Node)</ListItem>
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
                  <Heading size="md">{tSkill("UILib")}</Heading>
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
                    <ListItem>{tSkill("i18n")}</ListItem>
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
                  <Heading size="md">{tSkill("tool")}</Heading>
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
        </section>
      </div>
    </Layout>
  );
};

export default About;

import cn from "classnames";
import { NextPage } from "next";
import ErrorPage from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";
import { Post } from "../../interfaces/post";
import Layout from "../../components/Layout";
import { getAllPosts, getPostBySlug } from "../../lib/post";
import mkToHtml from "../../lib/markdownToHtml";
import { Container } from "@chakra-ui/react";
import Head from "next/head";

type Props = {
  post: Post;
  morePost: Post[];
};

const PostPage: NextPage<Props> = ({ post, morePost }) => {
  // const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <Layout>
      <Container>
        <article>
          <Head>{/* do some SEO */}</Head>
          <h3>{post.title}</h3>
          <Image
            src={post.coverImage}
            alt={`Cover Image for ${post.title}`}
            className={cn("shadow-sm w-full", {
              "hover:shadow-lg transition-shadow duration-200": post.slug,
            })}
            width={1300}
            height={630}
          />
          <>{post.content}</>
        </article>
      </Container>
    </Layout>
  );
};
export default PostPage;

//////////////////////////////
type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "excerpt",
    "content",
    "coverImage",
  ]);
  const parsedContent = await mkToHtml(post.content || "");

  // console.log({
  //   props: {
  //     post: {
  //       ...post,
  //       content: parsedContent,
  //     },
  //   },
  // });

  return {
    props: {
      post: {
        ...post,
        content: parsedContent,
      },
    },
  };
};

export const getStaticPaths = () => {
  const posts = getAllPosts(["slug"]);

  // console.log(JSON.stringify({
  //   paths: posts.map(post => {
  //     return {
  //       params: {
  //         slug: post.slug
  //       }
  //     }
  //   }),
  //   fallback: false,
  // }))

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

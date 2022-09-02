import type { GetStaticProps, NextPage } from 'next';
import { Article } from '../lib/type';

type IndexPageProps = {
  articles: Article[];
};

const IndexPage: NextPage<IndexPageProps> = ({ articles }) => {
  console.log({ articles });

  return <p>Index Page</p>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/articles/get');
    const articles = await res.json();
    return {
      props: {
        articles: articles,
      },
    };
  } catch (err) {
    console.error({ err });
    throw new Error(`err: ${err}`);
  }
};

export default IndexPage;

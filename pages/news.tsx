import { NextPage } from 'next';
import { axiosInstance } from '../lib/axios';

type NewsPageProps = {
  data: any;
};

const NewsPage: NextPage<NewsPageProps> = ({ data }) => {
  return <p>News Page</p>;
};

export const getStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/news');
    return { props: { data: res.data } };
  } catch (err) {
    throw new Error(`error at news page: ${err}`);
  }
};

export default NewsPage;

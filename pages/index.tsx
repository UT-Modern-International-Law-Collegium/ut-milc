import type { GetStaticProps, NextPage } from 'next';
import { axiosInstance } from '../lib/axios';
import { Article } from '../lib/type';

type TopPageProps = {
  data: any /* TODO: define props type */;
};

const TopPage: NextPage<TopPageProps> = ({ data }) => {
  console.log({ data });
  return <p>Index Page</p>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/top');
    const data = res.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    console.error({ err });
    throw new Error(`err: ${err}`);
  }
};

export default TopPage;

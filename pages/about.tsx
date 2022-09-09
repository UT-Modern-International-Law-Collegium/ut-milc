import { GetStaticProps, NextPage } from 'next';
import { axiosInstance } from '../lib/axios';

type AboutPageProps = { data: any };

const AboutPage: NextPage<AboutPageProps> = ({ data }) => {
  return <p>About Page</p>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/about');
    return { props: { data: res.data } };
  } catch (err) {
    throw new Error(`err at about page: ${err}`);
  }
};

export default AboutPage;

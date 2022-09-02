import { GetStaticProps, NextPage } from 'next';
import { axiosInstance } from '../lib/axios';

type AboutPageProps = {};

const AboutPage: NextPage<AboutPageProps> = () => {
  return <p>About Page</p>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/about');
    return { props: {} };
  } catch (err) {
    throw new Error(`err at about page: ${err}`);
  }
};

export default AboutPage;

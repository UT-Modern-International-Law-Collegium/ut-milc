import { Divider, Heading, Stack } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import PageTitle from '../components/utils/PageTitle';
import { axiosInstance } from '../lib/axios';

type AboutPageProps = { data: any };

const AboutPage: NextPage<AboutPageProps> = ({ data }) => {
  return (
    <Stack>
      <Stack pl={400}>
        <PageTitle minW={192}>団体紹介</PageTitle>
      </Stack>
    </Stack>
  );
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

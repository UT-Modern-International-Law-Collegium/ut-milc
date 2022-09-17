import { Heading, Stack } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Layout from '../../components/layout/Layout';
import { axiosInstance } from '../../lib/axios';
import { fakeData } from '../../lib/fakeData';
import { Award } from '../../lib/type';
import { NextPageWithLayout } from '../_app';

type Props = {
  data: Award[];
};

const AwardPageDividedByYear: NextPageWithLayout<Props> = ({ data }) => {
  return (
    <Stack minH={'100vh'} pl={{ base: 0, md: '30%' }}>
      {data.map((award: Award) => {
        return (
          <Stack key={award.id}>
            <Heading>{award.title}</Heading>
          </Stack>
        );
      })}
    </Stack>
  );
};

AwardPageDividedByYear.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    let paths: { params: { year: string } }[] = [];
    if (process.env.ENV_VAR === 'development') {
      const data: Award[] = fakeData.awards;
      const tmpYears: string[] = data.map((award: Award) =>
        award.year.toString()
      );
      const years: string[] = Array.from(new Set(tmpYears));
      paths = years.map((year) => ({
        params: { year: year },
      }));
    } else {
      const res: AxiosResponse<any, any> = await axiosInstance.get(
        '/api/awards?path=true'
      );
      const data: string[] = res.data;
      paths = data.map((year) => ({
        params: { year: year },
      }));
    }
    return { paths, fallback: false };
  } catch (err) {
    throw new Error(`error at [year],tsx getStaticPaths: ${err}`);
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (process.env.ENV_VAR === 'developmen') {
      return { props: { data: fakeData.awards } };
    } else {
      const res = await axiosInstance.get(`/api/awards/${params!.year}`);
      return { props: { data: res.data } };
    }
  } catch (err) {
    throw new Error(`error at [year].tsx getStaticProps: ${err}`);
  }
};

export default AwardPageDividedByYear;

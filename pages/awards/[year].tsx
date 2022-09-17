import { Heading, Stack } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import YearNavigation from '../../components/awards/YearNavigation';
import Layout from '../../components/layout/Layout';
import { axiosInstance } from '../../lib/axios';
import { fakeData } from '../../lib/fakeData';
import { Award } from '../../lib/type';
import { NextPageWithLayout } from '../_app';

type Props = {
  awards: Award[];
  years: number[];
};

const AwardPageDividedByYear: NextPageWithLayout<Props> = ({
  awards,
  years,
}) => {
  return (
    <Stack minH={'100vh'} pl={{ base: 0, md: '30%' }}>
      <YearNavigation years={years} />
      {awards.map((award: Award) => {
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
    let paths: { params: { [year: string]: string } }[] = [];
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
      const data: { [year: string]: number }[] = res.data;
      paths = data.map((yearObj) => {
        const tmpObj: { [key: string]: string } = {
          year: yearObj.year.toString(),
        };
        return { params: tmpObj };
      });
    }
    return { paths, fallback: false };
  } catch (err) {
    throw new Error(`error at [year],tsx getStaticPaths: ${err}`);
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (process.env.ENV_VAR === 'development') {
      const data: Award[] = fakeData.awards;
      const tmpYears: number[] = data.map((award: Award) => award.year);
      const years: number[] = Array.from(new Set(tmpYears));
      return { props: { awards: fakeData.awards, years: years } };
    } else {
      const awardsRes = await axiosInstance.get(`/api/awards/${params!.year}`);
      const yearsRes: AxiosResponse<any, any> = await axiosInstance.get(
        '/api/awards?path=true'
      );
      const years: number[] = yearsRes.data.map(
        (yearObj: { [key: string]: number }) => yearObj.year
      );
      return {
        props: { awards: awardsRes.data, years: years },
      };
    }
  } catch (err) {
    throw new Error(`error at [year].tsx getStaticProps: ${err}`);
  }
};

export default AwardPageDividedByYear;

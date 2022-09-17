import { Heading, Stack } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import moment from 'moment';
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
      let tmpYears: string[] = data.map((award: Award) =>
        award.year.toString()
      );
      if (!tmpYears.includes(moment().year().toString())) {
        tmpYears.push(moment().year().toString());
      }
      const years: string[] = Array.from(new Set(tmpYears));
      paths = years.map((year) => ({
        params: { year: year },
      }));
    } else {
      const res: AxiosResponse<any, any> = await axiosInstance.get(
        '/api/awards?path=true'
      );
      const data: { [year: string]: number }[] = res.data;
      let tmpYears: number[] = data.map(
        (yearObj: { [key: string]: number }) => yearObj.year
      );
      if (!tmpYears.includes(moment().year())) {
        tmpYears.push(moment().year());
      }
      paths = tmpYears.map((year: number) => ({
        params: { year: year.toString() },
      }));
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
      let years: number[] = Array.from(new Set(tmpYears));
      if (!years.includes(moment().year())) {
        years.push(moment().year());
      }
      return { props: { awards: fakeData.awards, years: years } };
    } else {
      const awardsRes = await axiosInstance.get(`/api/awards/${params!.year}`);
      const yearsRes: AxiosResponse<any, any> = await axiosInstance.get(
        '/api/awards?path=true'
      );
      let years: number[] = yearsRes.data.map(
        (yearObj: { [key: string]: number }) => yearObj.year
      );
      if (!years.includes(moment().year())) {
        years.push(moment().year());
      }
      return {
        props: { awards: awardsRes.data, years: years },
      };
    }
  } catch (err) {
    throw new Error(`error at [year].tsx getStaticProps: ${err}`);
  }
};

export default AwardPageDividedByYear;

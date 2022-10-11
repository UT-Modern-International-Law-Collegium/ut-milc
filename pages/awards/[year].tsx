import React, { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AxiosResponse } from 'axios';
import moment from 'moment';
import {
  Box,
  Divider,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import YearNavigation from '../../components/awards/YearNavigation';
import Layout from '../../components/layout/Layout';
import { axiosInstance } from '../../lib/axios';
import { DynamicRouteObj } from '../../lib/type/api';
import { Award } from '../../lib/type/page';
import { NextPageWithLayout } from '../_app';

type Props = {
  awards: Award[];
  years: number[];
};

const AwardPageDividedByYear: NextPageWithLayout<Props> = ({
  awards,
  years,
}) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  if (awards.length === 0) {
    return (
      <Stack>
        <Text>現在、掲載準備中です。</Text>
      </Stack>
    );
  }
  return (
    <Stack minH={'100vh'} px={{ base: 3, sm: 10, md: 0 }}>
      <YearNavigation years={years} />
      <Box position={{ md: 'relative' }} top={{ md: -260 }}>
        {awards.map((award: Award) => {
          return (
            <Stack
              key={award.id}
              ml={{ base: 0, md: '32%', lg: '30%' }}
              mr={{ md: '10%' }}
              mb={10}
              borderRadius={8}
              boxShadow={{ base: '0px 0px 10px #ccc', md: 'xl' }}
              minH={200}
              pt={6}
              pl={4}
            >
              <Heading
                px={{ base: 2, md: 4 }}
                fontWeight={600}
                size={{ base: 'lg', md: 'xl' }}
              >
                {award.title}
              </Heading>
              <Divider
                borderColor={{ base: 'gray.400', md: 'gray.300' }}
                w={'90%'}
              />
              <Box
                dangerouslySetInnerHTML={{ __html: award.content }}
                px={{ base: 2, md: 8 }}
                pb={{ base: 4, md: 6 }}
                fontSize={18}
                sx={
                  isLargerThan768px
                    ? {
                        h3: { fontSize: 24, fontWeight: 600 },
                        h4: { fontSize: 20, fontWeight: 500 },
                        p: { px: 5 },
                      }
                    : {
                        h3: {
                          fontSize: 20,
                          fontWeight: 600,
                        },
                        h4: { fontSize: 18, fontWeight: 500 },
                        p: { px: 2 },
                      }
                }
              />
            </Stack>
          );
        })}
      </Box>
    </Stack>
  );
};

AwardPageDividedByYear.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res: AxiosResponse<any, any> = await axiosInstance.get(
      '/api/awards?path=true'
    );
    const data: { [key: string]: number }[] = res.data;
    let tmpYears: number[] = data.map(
      (yearObj: { [key: string]: number }) => yearObj.year
    );
    // 今年度が含まれていない場合は、今年度を追加。
    if (!tmpYears.includes(moment().year())) {
      tmpYears.push(moment().year());
    }
    const paths: DynamicRouteObj = tmpYears.map((year: number) => ({
      params: { year: year.toString() },
    }));
    return { paths, fallback: false };
  } catch (err) {
    throw new Error(`error at [year].tsx getStaticPaths: ${err}`);
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const awardsRes: AxiosResponse<any, any> = await axiosInstance.get(
      `/api/awards/${params!.year}`
    );
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
  } catch (err) {
    throw new Error(`error at [year].tsx getStaticProps: ${err}`);
  }
};

export default AwardPageDividedByYear;

import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import {
  Heading,
  HStack,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from '@chakra-ui/react';
import moment from 'moment';
import { IconContext } from 'react-icons/lib';
import { BsFillSquareFill } from 'react-icons/bs';
import PageTitle from '../components/utils/PageTitle';
import { axiosInstance } from '../lib/axios';
import { AboutPageData } from '../lib/type';
import { fakeData } from '../lib/fakeData';
import { NextPageWithLayout } from './_app';
import Layout from '../components/layout/Layout';

type AboutPageProps = { data: AboutPageData };

const AboutPage: NextPageWithLayout<AboutPageProps> = ({ data }) => {
  const { body, members } = data;
  return (
    <Stack
      px={{ base: 10, md: 100 }}
      pb={{ base: 100 }}
      spacing={{ base: 10 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
    >
      <PageTitle minW={200}>団体紹介</PageTitle>
      {body.map((item) => {
        return (
          <Stack key={item.id} w={{ base: '100%' }}>
            <HStack alignItems={'center'} spacing={2}>
              <IconContext.Provider value={{ size: '18', color: '#4A5568' }}>
                <BsFillSquareFill />
                <Heading size={'lg'}>{item.title}</Heading>
              </IconContext.Provider>
            </HStack>
            <HStack spacing={4} borderLeft={'1px solid #ccc'} pl={5}>
              <Text fontSize={18} lineHeight={2}>
                {item.content}
              </Text>
            </HStack>
          </Stack>
        );
      })}
      <HStack alignItems={'center'} spacing={2}>
        <IconContext.Provider value={{ size: '18', color: '#4A5568' }}>
          <BsFillSquareFill />
          <Heading size={'lg'}>{`${moment().year()}年度役員紹介`}</Heading>
        </IconContext.Provider>
      </HStack>
      <TableContainer w={{ base: 'none', md: '80%', lg: '50%' }}>
        <Table>
          <Tbody>
            {members.map((memberInfo: string[], index: number) => {
              return (
                <Tr key={index}>
                  <Th
                    fontSize={18}
                    color={'#000'}
                    bg={'gray.50'}
                    borderColor={'#fff'}
                    borderWidth={4}
                  >
                    {memberInfo[0]}
                  </Th>
                  <Td fontSize={18}>{memberInfo[1]}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    if (process.env.ENV_VAR === 'development') {
      return { props: { data: fakeData.about } };
    } else {
      const res = await axiosInstance.get('/api/about-us');
      return { props: { data: res.data } };
    }
  } catch (err) {
    throw new Error(`err at about page: ${err}`);
  }
};

export default AboutPage;

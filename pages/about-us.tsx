import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import {
  Heading,
  HStack,
  Stack,
  Table,
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
import { NextPageWithLayout } from './_app';
import Layout from '../components/layout/Layout';
import { AboutUsSection, Member } from '../lib/type/page';
import { AxiosResponse } from 'axios';

type AboutPageProps = {
  data: { sections: AboutUsSection[]; members: Member[] };
};

const AboutPage: NextPageWithLayout<AboutPageProps> = ({ data }) => {
  const { sections, members } = data;
  return (
    <Stack
      px={{ base: 4, md: 100 }}
      pb={{ base: 100 }}
      spacing={{ base: 10 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
    >
      <PageTitle>団体紹介</PageTitle>
      {sections.map((section) => {
        return (
          <Stack key={section.id} w={{ base: '100%' }}>
            <HStack alignItems={'center'} spacing={2}>
              <IconContext.Provider value={{ size: '18', color: '#4A5568' }}>
                <BsFillSquareFill />
                <Heading size={'lg'}>{section.title}</Heading>
              </IconContext.Provider>
            </HStack>
            <HStack spacing={4} borderLeft={'1px solid #ccc'} pl={5}>
              <Text fontSize={18} lineHeight={2}>
                {section.content}
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
            {members.map((member: Member, index: number) => {
              return (
                <Tr key={index}>
                  <Th
                    p={3}
                    fontSize={18}
                    color={'#000'}
                    bg={'gray.50'}
                    borderColor={'#fff'}
                    borderWidth={4}
                  >
                    {member.position}
                  </Th>
                  <Td
                    fontSize={18}
                    p={3}
                  >{`${member.name}（${member.grade}年）`}</Td>
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
    const res: AxiosResponse<any, any> = await axiosInstance.get('/about-us');
    return {
      props: {
        data: {
          sections: res.data.sections,
          members: res.data.members,
        },
      },
    };
  } catch (err) {
    throw new Error(`err at about page: ${err}`);
  }
};

export default AboutPage;

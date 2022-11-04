import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import {
  Box,
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
    <Box
      px={{ base: 4, md: 100 }}
      pb={{ base: 100 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
    >
      <PageTitle>団体紹介</PageTitle>
      {sections.map((section, index) => {
        return (
          <Stack key={index} w={{ base: '100%' }} mt={{ base: 10 }}>
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
      <TableContainer
        w={{ base: 'none', md: '80%', lg: '50%' }}
        mt={{ base: 5 }}
      >
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
                    {member[0]}
                  </Th>
                  <Td fontSize={18} p={3}>
                    {member[1]}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
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

import {
  Box,
  Heading,
  Stack,
  VStack,
  Text,
  Center,
  Button,
} from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import Firstview from '../components/top/Firstview';
import { axiosInstance } from '../lib/axios';

type TopPageProps = {
  data: any[];
};

const TopPage: NextPage<TopPageProps> = ({ data }) => {
  console.log({ data });

  return (
    <Stack spacing={4}>
      {/* ファーストビュー */}
      <Firstview />
      {/* ファーストビュー以下 */}
      <Stack pl={500} pt={'100vh'}>
        {data.length !== 0 && (
          <Stack spacing={8} minH={400} w={'48vw'}>
            <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
              About
            </Heading>
            <Text fontSize={18} lineHeight={2}>
              {data[0].about}
            </Text>
            <Center>
              <Button px={5}>団体紹介はこちら</Button>
            </Center>
          </Stack>
        )}
        <Stack minH={300}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            News
          </Heading>
        </Stack>
        <Stack minH={300}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            Join us
          </Heading>
        </Stack>
        <Stack minH={300}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            Contact
          </Heading>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/top');
    const data = res.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    console.error({ err });
    throw new Error(`err: ${err}`);
  }
};

export default TopPage;

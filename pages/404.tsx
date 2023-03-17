import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import NextChakraLink from '../app/components/utils/NextChakraLink';
import { NextPageWithLayout } from './_app';

const Custom404: NextPageWithLayout = () => {
  return (
    <VStack minH={'80vh'} spacing={8} maxW={'84%'} mx={'auto'}>
      <Heading size={'4xl'} pt={{ base: '40%', md: '10%' }}>
        404
      </Heading>
      <Text textAlign={'center'} fontSize={18}>
        お探しのページは、国際法に照らしても存在しないようです。お手数ですが、URLをお確かめの上もう一度アクセスしてください。
      </Text>
      <Button as={NextChakraLink} href={'/'}>
        TOPページへ
      </Button>
    </VStack>
  );
};

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Custom404;

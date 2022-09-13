import { Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import PageTitle from '../components/utils/PageTitle';

type JoinUsPage = {};

const JoinUsPage: NextPage<JoinUsPage> = () => {
  return (
    <Stack>
      <Stack
        pl={{ base: 10, md: 400 }}
        pr={{ base: 10, md: 0 }}
        spacing={{ base: 10 }}
      >
        <PageTitle>入会申し込み</PageTitle>
      </Stack>
    </Stack>
  );
};

export default JoinUsPage;

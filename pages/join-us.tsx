import { Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import PageTitle from '../components/utils/PageTitle';

type JoinUsPage = {};

const JoinUsPage: NextPage<JoinUsPage> = () => {
  return (
    <Stack>
      <Stack pl={400}>
        <PageTitle minW={288}>入会申し込み</PageTitle>
      </Stack>
    </Stack>
  );
};

export default JoinUsPage;

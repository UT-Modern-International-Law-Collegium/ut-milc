import { Stack, useMediaQuery } from '@chakra-ui/react';
import { NextPage } from 'next';
import PageTitle from '../components/utils/PageTitle';

type JoinUsPage = {};

const JoinUsPage: NextPage<JoinUsPage> = () => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack>
      <Stack pl={isLargerThan768px ? 400 : 10} pr={isLargerThan768px ? 0 : 10}>
        <PageTitle minW={300}>入会申し込み</PageTitle>
      </Stack>
    </Stack>
  );
};

export default JoinUsPage;

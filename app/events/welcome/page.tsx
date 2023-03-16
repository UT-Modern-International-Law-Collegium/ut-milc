'use client';

import { useEffect, useState } from 'react';
import { Box, Center, Heading, Spinner } from '@chakra-ui/react';

import { prefix } from '../../../lib/prefix';
import { WelcomeData } from '../../../lib/type/welcomeData';

const Page = () => {
  const [welcome, setWelcome] = useState<WelcomeData>();

  useEffect(() => {
    const f = async () => {
      const res = await fetch(`${prefix()}/events/welcome`);
      const data: { data: WelcomeData } = await res.json();
      setWelcome(data.data);
    };
    f();
  }, []);

  if (!welcome) {
    return (
      <Center>
        <Spinner color={'teal'} h={24} w={24} mt={24} />
      </Center>
    );
  }

  return (
    <Box>
      <Heading dangerouslySetInnerHTML={{ __html: welcome.title }} />
      <Box dangerouslySetInnerHTML={{ __html: welcome.content }} />
    </Box>
  );
};

export default Page;

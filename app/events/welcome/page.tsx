'use client';

import { useEffect, useState } from 'react';
import { Box, Center, Divider, Heading, Spinner, Text } from '@chakra-ui/react';

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
      <Center minH={'100vh'}>
        <Spinner color={'teal'} h={24} w={24} mt={24} />
      </Center>
    );
  }

  return (
    <Box w={{ lg: '64%' }} mx={'auto'} py={20}>
      <Heading
        dangerouslySetInnerHTML={{ __html: welcome.title }}
        textAlign={'center'}
        fontSize={42}
        fontFamily={'serif'}
      />
      <Divider my={8} borderColor={'teal.500'} />
      <Box>
        <Text
          dangerouslySetInnerHTML={{ __html: welcome.content }}
          lineHeight={2}
          sx={{
            h2: { fontSize: 28, my: 4, fontWeight: 'bold' },
            h3: { fontSize: 20, my: 4, fontWeight: 'bold' },
            a: { color: 'teal.600', textDecoration: 'underline' },
            img: {
              h: 200,
              w: 200,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Page;

'use client';

import { useEffect, useState } from 'react';
import { BsFillSquareFill } from 'react-icons/bs';
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
  Icon,
  Center,
  Spinner,
} from '@chakra-ui/react';

import { prefix } from '../../lib/prefix';
import { AboutUsData } from '../../lib/type/aboutUsData';

const Page = () => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData>();

  useEffect(() => {
    const f = async () => {
      const res = await fetch(`${prefix()}/about-us`);
      const data: { data: AboutUsData } = await res.json();
      setAboutUsData(data.data);
    };
    f();
  }, []);

  if (!aboutUsData) {
    return (
      <Center minH={'100vh'}>
        <Spinner color="teal" h={24} w={24} />
      </Center>
    );
  }

  return (
    <Box
      px={{ base: 4, md: 100 }}
      pb={{ base: 100 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pt={{ base: 20, md: 100 }}
        w={{ base: '100%' }}
        spacing={{ base: 0, md: 8 }}
      >
        <Heading
          fontFamily={'serif'}
          size={{ base: 'xl', md: '2xl' }}
          letterSpacing={2}
        >
          団体紹介
        </Heading>
      </Stack>
      {aboutUsData.sections.map((section, index) => {
        return (
          <Stack key={index} w={{ base: '100%' }} mt={{ base: 10 }}>
            <HStack alignItems={'center'} spacing={2}>
              <Heading size={'lg'}>{section.title}</Heading>
              <Icon as={BsFillSquareFill} bg={'#4A5568'} />
            </HStack>
            <Box pl={2} pt={2}>
              <Text
                fontSize={18}
                lineHeight={2}
                borderLeft={'1px solid #ccc'}
                pl={5}
              >
                {section.content}
              </Text>
            </Box>
          </Stack>
        );
      })}
      <TableContainer
        w={{ base: 'none', md: '80%', lg: '50%' }}
        mt={{ base: 5 }}
      >
        <Table>
          <Tbody>
            {aboutUsData.members.map((member: string[], index: number) => {
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

export default Page;

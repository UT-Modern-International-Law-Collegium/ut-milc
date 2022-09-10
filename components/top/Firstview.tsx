import React, { FC } from 'react';
import { CircularProgress, Heading, Stack, Text } from '@chakra-ui/react';
import styled from 'styled-components';

const Firstview: FC = () => {
  return (
    <Stack h={'100vh'} bg={'#020708'} position={'relative'}>
      {/* 内側の円 */}
      <CircularProgress
        thickness={'0.1px'}
        value={100}
        size={'245px'}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
        color={'#C9C9C9'}
      />
      {/* 外側の円 */}
      <CircularProgress
        thickness={'0.01px'}
        value={100}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
        size={'1400px'}
        color={'#C9C9C9'}
      />
      <Stack
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
      >
        <Heading
          style={{ writingMode: 'vertical-rl' }}
          color={'#fff'}
          letterSpacing={36}
          fontSize={68}
          fontWeight={'1'}
          fontFamily={'serif'}
          lineHeight={1.5}
        >
          <Text
            style={{
              writingMode: 'vertical-rl',
            }}
            fontSize={24}
            m={0}
            lineHeight={1.8}
            pt={1}
          >
            東京大学
          </Text>
          現代国際法
          <br />
          <Text pt={300}>研究会</Text>
        </Heading>
      </Stack>
    </Stack>
  );
};

export default Firstview;

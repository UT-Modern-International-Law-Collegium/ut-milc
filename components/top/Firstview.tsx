import React, { FC, useEffect, useState } from 'react';
import {
  CircularProgress,
  Heading,
  Stack,
  StackProps,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

const Firstview: FC<StackProps> = ({ ...rest }) => {
  const [isLargetThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack
      h={'100vh'}
      bg={'#092025'}
      position={'relative'}
      overflow={'hidden'}
      {...rest}
    >
      {/* 内側の円 */}
      <CircularProgress
        thickness={'0.1px'}
        value={100}
        size={isLargetThan768px ? '245px' : '100px'}
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
        size={
          isLargetThan768px ? '1400px' : '400px'
        } /* TODO: resize when mobile. */
        color={'#C9C9C9'}
      />
      <TopTitle />
    </Stack>
  );
};

const TopTitle: FC = () => {
  const [isLargetThan1280px] = useMediaQuery('(min-width:1280px)');
  const [titlePtValue, setTitlePtValue] = useState<number>(0);
  console.log(titlePtValue);

  useEffect(() => {
    if (window.innerHeight > 667) {
      // iPhone SEより大きい
      setTitlePtValue(window.innerHeight * 0.24);
    } else {
      // iPhone SEより小さい
      setTitlePtValue(window.innerHeight * 0.17);
    }
  }, []);

  if (isLargetThan1280px) {
    return (
      <Heading
        h={'100vh'}
        color={'#fff'}
        style={{ writingMode: 'vertical-rl' }}
        letterSpacing={36}
        fontSize={68}
        fontWeight={'normal'}
        fontFamily={'serif'}
        lineHeight={1.5}
        position={'absolute'}
        top={'62%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
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
    );
  } else {
    return (
      <Heading
        style={{ writingMode: 'vertical-rl' }}
        size={'2xl'}
        pt={titlePtValue} /* ヘッダーの高さ分 */
        h={'100vh'}
        fontWeight={'normal'}
        color={'#fff'}
        fontFamily={'serif'}
        letterSpacing={'0.6em'}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
      >
        現代国際法研究会
      </Heading>
    );
  }
};

export default Firstview;

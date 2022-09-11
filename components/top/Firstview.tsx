import React, { FC } from 'react';
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
    <Stack h={'100vh'} bg={'#092025'} position={'relative'} {...rest}>
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
          isLargetThan768px ? '1400px' : '390px'
        } /* TODO: resize when mobile. */
        color={'#C9C9C9'}
      />
      <Stack
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
      >
        <TopTitle />
      </Stack>
    </Stack>
  );
};

const TopTitle: FC = () => {
  const [isLargetThan768px] = useMediaQuery('(min-width:768px)');
  if (isLargetThan768px) {
    return (
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
    );
  } else {
    return (
      <Heading
        style={{ writingMode: 'vertical-rl' }}
        size={'3xl'}
        fontWeight={'normal'}
        color={'#fff'}
        fontFamily={'serif'}
        letterSpacing={36}
      >
        現代国際法研究会
      </Heading>
    );
  }
};

export default Firstview;

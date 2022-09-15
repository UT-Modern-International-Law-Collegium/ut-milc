import React, { FC } from 'react';
import { CircularProgress, Heading, Stack, Text } from '@chakra-ui/react';
import { Award } from '../../lib/type';

type Props = { award: Award };

const AwardPiece: FC<Props> = ({ award }) => {
  return (
    <>
      <CircularProgress
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
        value={100}
        thickness={'0.08px'}
        size={400}
        color={'gray.600'}
      />
      <Stack
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%,-50%)'}
      >
        <Heading size={'lg'}>{award.name}</Heading>
        {award.detail.map((item, index) => {
          return (
            <Text key={index} zIndex={1}>
              {item}
            </Text>
          );
        })}
      </Stack>
    </>
  );
};

export default AwardPiece;

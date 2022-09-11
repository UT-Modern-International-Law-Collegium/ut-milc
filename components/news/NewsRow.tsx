import React, { FC } from 'react';
import NextLink from 'next/link';
import moment from 'moment';
import {
  Badge,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { Article } from '../../lib/type';

type NewsRow = {
  news: Article;
};

const NewsRow: FC<NewsRow> = ({ news }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack
      as={LinkBox}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      w={isLargerThan768px ? '80%' : '100%'}
      maxW={850}
    >
      <HStack spacing={8}>
        <NextLink href={`/news/${news.id}`} passHref>
          <LinkOverlay fontSize={18}>
            {moment(news.created_at).format('YYYY-MM-DD')}
          </LinkOverlay>
        </NextLink>
        <Text>{news.title}</Text>
      </HStack>
      <Badge px={3} py={1} borderRadius={4} colorScheme={'teal'}>
        {news.tag}
      </Badge>
    </Stack>
  );
};

export default NewsRow;

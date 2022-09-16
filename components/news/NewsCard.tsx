import React, { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import {
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react';
import { Article } from '../../lib/type';

type Props = {
  item: Article;
  isLatest?: boolean;
};

const NewsCard: FC<Props> = ({ item, isLatest }) => {
  return (
    <LinkBox
      as={Stack}
      minW={{ base: 300, md: 'unset' }}
      py={{ base: 8, md: 4 }}
      borderRadius={{ base: 8, md: 4 }}
      px={4}
      boxShadow={'xl'}
      sx={{ img: { transition: '0.2s' } }}
      _hover={{
        img: { transform: 'scale(1.1,1.1)' },
        textDecoration: 'underline',
      }}
    >
      <Image
        src={
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        }
        alt={`image of ${item.title}`}
        width={800}
        height={600}
      />
      <NextLink href={`/news/${item.id}`} passHref>
        <LinkOverlay>
          <Text fontSize={18} fontWeight={'bold'}>
            {item.title}
          </Text>
        </LinkOverlay>
      </NextLink>
      <HStack justifyContent={'space-between'}>
        <Text fontSize={16}>
          {moment(item.created_at).format('YYYY-MM-DD')}
        </Text>
        <HStack>
          <Badge fontSize={14}>{item.tag}</Badge>
          {isLatest && (
            <Badge colorScheme={'teal'} fontSize={14}>
              最新記事
            </Badge>
          )}
        </HStack>
      </HStack>
    </LinkBox>
  );
};

export default NewsCard;

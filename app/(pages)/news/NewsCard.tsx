'use client';

import React, { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { MdDateRange } from 'react-icons/md';
import {
  HStack,
  LinkBox,
  Stack,
  Text,
  Badge,
  StackProps,
  Icon,
} from '@chakra-ui/react';

import { restrictStringCount } from '../../../utils/restrictStringCount';
import { NewsData } from '../../../lib/type/newsData';

type Props = {
  item: NewsData;
  isLatest?: boolean;
};

const NewsCard: FC<Props & StackProps> = ({ item, isLatest, ...rest }) => {
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
        img: { transform: 'scale(1.01,1.01)' },
        textDecoration: 'underline',
      }}
      {...rest}
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
        <Text fontSize={18} fontWeight={'bold'} wordBreak={'break-all'}>
          {restrictStringCount(item.title, 24)}
        </Text>
      </NextLink>
      <HStack justifyContent={'space-between'}>
        <HStack spacing={1}>
          <Icon as={MdDateRange} w={4} h={4} />
          <Text fontSize={16}>
            {moment(item.createdAt).format('YYYY-MM-DD')}
          </Text>
        </HStack>
        <HStack>
          {item.tags.map((tag: string, index: number) => (
            <Badge key={index} fontSize={14}>
              {tag}
            </Badge>
          ))}
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

import React, { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import {
  Button,
  Center,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import NextChakraLink from '../utils/NextChakraLink';
import moment from 'moment';

type ContactForm = {
  email: string;
  content: string;
};

const Footer: FC = () => {
  const router: NextRouter = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const doContactFormSubmit = (data: ContactForm): void => {};

  return (
    <Grid
      templateColumns={'repeat(2, 1fr)'}
      py={12}
      px={{ base: 8, lg: 40 }}
      bg={'gray.200'}
      gap={{ base: 8, md: 0 }}
    >
      {/* pages, links */}
      <GridItem colSpan={{ base: 2, md: 1 }}>
        {/* pages */}
        <Stack textAlign={{ base: 'center', md: 'inherit' }} mb={10}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>pages</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <NextChakraLink href={'/'}>Top</NextChakraLink>
          <NextChakraLink href={'/about-us'}>About us</NextChakraLink>
          <NextChakraLink href={`/awards/${moment().year()}`}>
            Awards
          </NextChakraLink>
          <NextChakraLink href={'/news'}>News</NextChakraLink>
          <NextChakraLink href={'/join-us'}>Join us</NextChakraLink>
        </Stack>
        {/* links */}
        <Stack spacing={8} mb={10}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>links</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <HStack spacing={12} justifyContent={'center'}>
            <IconContext.Provider value={{ size: '36px' }}>
              <VStack
                as={NextChakraLink}
                href={'https://www.instagram.com/utmilc/'}
              >
                <BsInstagram />
                <Text>instagram</Text>
              </VStack>
              <VStack
                as={NextChakraLink}
                href={'https://twitter.com/utmilc_2022'}
              >
                <BsTwitter />
                <Text>twitter</Text>
              </VStack>
            </IconContext.Provider>
          </HStack>
        </Stack>
      </GridItem>
      {/* contact */}
      <GridItem colSpan={{ base: 2, md: 1 }} px={{ base: 0, md: 10 }}>
        <Stack spacing={5}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>contact</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <Text>
            ?????????????????????????????????????????????????????????????????????
            <br />
            ????????????????????????????????????????????????
            <NextChakraLink href={'/join-us'} textDecoration={'underline'}>
              ?????????
            </NextChakraLink>
            ??????????????????????????????
          </Text>
          {/* ????????? */}
          <Stack sx={{ span: { color: 'red' } }}>
            <FormLabel>
              ?????????????????????<span>*</span>
            </FormLabel>
            <Input
              bg={'#fff'}
              {...register('email', {
                required: '?????????????????????????????????????????????',
                pattern: {
                  value:
                    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                  message: '????????????????????????????????????????????????',
                },
              })}
            />
            <span>{errors.email?.message}</span>
          </Stack>
          {/* ?????? */}
          <Stack sx={{ span: { color: 'red' } }}>
            <FormLabel fontSize={18} m={0}>
              ????????????????????????<span>*</span>
            </FormLabel>
            <Textarea
              bg={'#fff'}
              minH={200}
              {...register('content', {
                required: '??????????????????????????????????????????????????????',
              })}
            />
            <span>{errors.content?.message}</span>
          </Stack>
          <Center>
            <Button
              w={200}
              bg={'blue.100'}
              onClick={handleSubmit(doContactFormSubmit)}
            >
              ????????????
            </Button>
          </Center>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Footer;

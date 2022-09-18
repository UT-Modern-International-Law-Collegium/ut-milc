import React, { FC, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import NextChakraLink from '../utils/NextChakraLink';
import PageTitle from '../utils/PageTitle';

type Props = { years: number[] };

const YearNavigation: FC<Props> = ({ years }) => {
  const orderedYears: number[] = years.sort((a, b) => b - a);
  const router: NextRouter = useRouter();
  const [selectedYear, setSelectedYear] = useState<string>(
    orderedYears[0].toString()
  );
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCurrentPage = (year: string) => {
    return (router.query['year'] as string) === year;
  };
  if (isLargerThan768px) {
    return (
      <Stack
        position={'sticky'}
        left={0}
        top={0}
        spacing={8}
        pb={100}
        zIndex={2}
      >
        <PageTitle pl={{ md: 18, lg: 100 }}>活動実績</PageTitle>
        <Stack spacing={3}>
          {orderedYears.map((year) => {
            return (
              <HStack key={year}>
                <NextChakraLink
                  href={`/awards/${year}`}
                  fontSize={24}
                  pl={{ md: 25, lg: 110 }}
                  fontWeight={
                    isCurrentPage(year.toString()) ? 'bold' : 'inherit'
                  }
                >
                  {`${year}年度`}
                </NextChakraLink>
              </HStack>
            );
          })}
        </Stack>
      </Stack>
    );
  } else {
    return (
      <Stack pt={20}>
        <Divider />
        <HStack>
          <Button fontSize={18} bg={'teal.100'} onClick={onOpen}>
            年度を選ぶ
          </Button>
        </HStack>
        <Divider />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mx={{ base: 2, sm: 0 }}>
            <ModalHeader>年度を選択してください。</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <RadioGroup onChange={setSelectedYear} value={selectedYear}>
                <Stack spacing={4}>
                  {years.map((year: number) => {
                    return (
                      <Radio
                        key={year}
                        value={year.toString()}
                        fontSize={18}
                        colorScheme={'gray'}
                        _focus={{}}
                      >{`${year}年度`}</Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <ButtonGroup>
                <Button onClick={onClose}>キャンセル</Button>
                <Button
                  bg={'teal.100'}
                  onClick={() => {
                    router.push(`/awards/${selectedYear}`);
                    onClose();
                  }}
                >
                  表示する
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    );
  }
};

export default YearNavigation;

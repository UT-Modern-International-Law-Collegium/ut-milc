import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import {
  chakra,
  Box,
  Center,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NextPageWithLayout } from '../../../pages/_app';
import Layout from '../../../components/layout/Layout';
import { motion, isValidMotionProp } from 'framer-motion';
import { GiScales } from 'react-icons/gi';

type Session = {
  desc: string;
  time: string;
};

type Event = {
  name: string;
  sessions: Session[];
  comment: string;
};

const fakeData = {
  events: [
    {
      name: 'Shinkan-2022-Autumn',
      sessions: [
        {
          desc: 'サークルの概要・説明・質疑応答・交流会',
          time: '9月26日 20:00-',
        },
        {
          desc: '昨年度秋入会者3名によるサークル紹介・交流会',
          time: '10月2日 20:00-',
        },
      ],
      comment: `UTbaseの新歓で目に入りました。国際法研究会といいつつさまざまな企画を実施しているのが魅力です。セメスターおきに企画が変わるので、年度頭に入らなかった人でも馴染みやすいです。イベント等の交流の機会もあるので入会時期を問わず会員とは仲良くできます。

        わたしは一年生の秋からの入会でした。半年遅れで入って知識がない分、勉強会などについていけるか不安でしたが、初心者の私にも参加しやすい企画が多く、とくにハンディキャップを感じることはありませんでした。また、既存メンバーとも親しくなることができ、充実したサークル生活を送ることができています。
        
        セメスター毎に活動が区切られていて、途中から入っても活動や交流がしやすいサークルだと思います。
        活動の内容も量も本当に調整しやすいので、少しでも興味があるならとりあえず入ってみるのがおすすめです。私は国際法という名前しか知らない状態で入りましたが、活動をとおして自分の世界が広がり、知的好奇心が湧いてくるのを感じました。
        予備知識が一切なかった私は、専門的な分会はついていけるかどうかで精一杯だったので、初めて学ぶ方は勉強会にも参加してみるのがいいのではないかと個人的には思います！`,
    },
  ],
};

const ChakraBox = chakra(motion.div, { shouldForwardProp: isValidMotionProp });

type ShinkanPage2022AutumnProps = {
  data: Event;
};

const ShinkanPage2022Autumn: NextPageWithLayout<ShinkanPage2022AutumnProps> = ({
  data,
}) => {
  return (
    <Box
      backgroundColor="black"
      textColor="white"
      overflow="hidden"
      width="100%"
      position="relative"
    >
      <Box marginTop={['45vh', '15vh']} marginBottom={100} fontFamily="serif">
        <Center>
          <Text zIndex={2} fontSize={['3xl', '6xl']} fontWeight="bold">
            ふと、
            <br />
            「世界に<span style={{ color: '#81E6D9' }}>挑</span>んでやろう」
            <br />
            と思ったあなたへ。
          </Text>
        </Center>
        <Center>
          <Text marginTop={10} fontSize="3xl">
            - Zoom説明会 -
          </Text>
        </Center>
        <Center>
          <Box marginTop={6} marginX={10} fontSize={['xl', '2xl']}>
            {data.sessions.map((elem, idx) => (
              <Box key={idx} marginBottom={5}>
                <Center>
                  <Text>{elem.time}</Text>
                </Center>
                <Center>
                  <Text align="center">{elem.desc}</Text>
                </Center>
              </Box>
            ))}
          </Box>
        </Center>
      </Box>
      <UTMilcIcon />
      <Box>
        <Center>
          <Text fontSize="3xl" fontFamily="serif">
            昨年度秋入会者の声
          </Text>
        </Center>
        <Center>
          <Box marginX={10} marginBottom={20}>
            {data.comment.split('\n').map((elem, idx) => (
              <Text key={idx} marginTop={5}>
                {elem}
              </Text>
            ))}
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

const UTMilcIcon: React.FC = () => {
  let icon_size = useBreakpointValue([300, 500]);
  if (icon_size === undefined) {
    icon_size = 300;
  }
  const half_icon_size = icon_size / 2;
  let scale_size = useBreakpointValue([200, 300]);
  if (scale_size === undefined) {
    scale_size = 200;
  }
  const text_string: string =
    'University of Tokyo Modern International Law College ';
  const text_array = Array.from(text_string);
  const text_length = text_array.length;

  return (
    <Box overflowX="hidden">
      <Box
        width={icon_size}
        height={icon_size}
        opacity={[0.8, 0.3]}
        position="absolute"
        left={[
          'calc(50vw - ' + (50 + scale_size / 2) + 'px)',
          'calc(50vw - ' + (100 + scale_size / 2) + 'px)',
        ]}
        top={[
          'calc(15vh - 50px)',
          'calc(-13vh - ' + (100 - scale_size) + 'px)',
        ]}
      >
        <motion.div
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          <Box
            fontSize="2xl"
            width={icon_size}
            height={icon_size}
            textAlign="center"
            textColor="white"
          >
            {text_array.map((elem, idx) => (
              <Box
                position="absolute"
                left=""
                width={icon_size}
                height={half_icon_size}
                transformOrigin="center bottom"
                transform={'rotate(' + (idx * 360) / text_length + 'deg)'}
                key={idx}
              >
                {elem}
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
      <Box
        position="absolute"
        left={'calc(50vw - ' + scale_size / 2 + 'px)'}
        top={['15vh', 'calc(-13vh + ' + scale_size + 'px)']}
        opacity={[0.9, 0.2]}
      >
        <motion.div>
          <GiScales color="white" size={scale_size} />
        </motion.div>
      </Box>
    </Box>
  );
};

const Door: React.FC<{
  onClick: () => void;
  transform: string;
  children: React.ReactNode;
}> = ({ onClick, transform, children }) => {
  return (
    <Box
      onClick={onClick}
      top={0}
      left={0}
      backgroundColor="gray.600"
      width={200}
      height="50vh"
      transformOrigin="left"
      transition={'all 0.5s ease-in-out'}
      transform={transform}
    >
      {children}
    </Box>
  );
};

ShinkanPage2022Autumn.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    return {
      props: {
        data: fakeData.events!.find((e) => e.name === 'Shinkan-2022-Autumn'),
      },
    };
  } catch (err) {
    throw new Error('error at about page: ${err}');
  }
};

export default ShinkanPage2022Autumn;

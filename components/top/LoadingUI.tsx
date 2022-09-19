import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';

const LoadingUI: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  if (isLoading) {
    return (
      <Box
        as={motion.div}
        position={'relative'}
        minH={'100vh'}
        bg={'#092025'}
        zIndex={5}
      ></Box>
    );
  } else {
    return <></>;
  }
};

export default LoadingUI;

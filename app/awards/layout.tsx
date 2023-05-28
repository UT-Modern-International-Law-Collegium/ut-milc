import { pageWrapperStyle } from '@/constants/tailwind/pageWrapperStyle';
import { ReactNode } from 'react';

const AwardsLayout = ({
  children,
  nav,
}: {
  children: ReactNode;
  nav: ReactNode;
}) => {
  return (
    <div className={`${pageWrapperStyle} md:flex md:gap-8 lg:gap-12`}>
      {nav}
      {children}
    </div>
  );
};

export default AwardsLayout;

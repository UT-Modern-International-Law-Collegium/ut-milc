import { pageWrapperStyle } from '@/constants/tailwind/pageWrapperStyle';
import { ReactNode } from 'react';
import { PageTitle } from '../_components/PageTItle';

const AwardsLayout = ({
  children,
  nav,
}: {
  children: ReactNode;
  nav: ReactNode;
}) => {
  return (
    <div className={`${pageWrapperStyle}`}>
      <PageTitle>活動実績</PageTitle>
      <div className=" md:flex md:gap-8 lg:gap-12">
        {nav}
        {children}
      </div>
    </div>
  );
};

export default AwardsLayout;

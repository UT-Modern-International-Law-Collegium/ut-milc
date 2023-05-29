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
    <div className="w-11/12 md:w-[88vw] lg:w-[68vw] mx-auto md:py-24 py-20">
      <PageTitle>活動実績</PageTitle>
      <div className=" md:flex md:gap-8 lg:gap-12">
        {nav}
        {children}
      </div>
    </div>
  );
};

export default AwardsLayout;

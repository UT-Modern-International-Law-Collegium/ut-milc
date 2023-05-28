import { ReactNode } from 'react';

const AwardsLayout = ({
  children,
  nav,
}: {
  children: ReactNode;
  nav: ReactNode;
}) => {
  return (
    <div className="w-11/12 md:w-[88vw] lg:w-[68vw] mx-auto md:py-24 py-20 md:flex md:gap-8 lg:gap-12">
      {nav}
      {children}
    </div>
  );
};

export default AwardsLayout;

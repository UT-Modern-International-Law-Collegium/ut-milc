import { ReactNode } from 'react';

const AwardsLayout = ({
  children,
  nav,
}: {
  children: ReactNode;
  nav: ReactNode;
}) => {
  return (
    <div className="w-11/12 md:w-[60vw] mx-auto md:py-24 py-20">
      {nav}
      {children}
    </div>
  );
};

export default AwardsLayout;

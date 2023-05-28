import { ReactNode } from 'react';

const AwardsLayout = ({
  children,
  nav,
}: {
  children: ReactNode;
  nav: ReactNode;
}) => {
  return (
    <div className="py-20 w-[94vw] mx-auto">
      {nav}
      {children}
    </div>
  );
};

export default AwardsLayout;

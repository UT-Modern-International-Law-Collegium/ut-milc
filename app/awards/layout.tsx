import { ReactNode } from 'react';

const AwardsLayout = ({
  children,
  nav,
}: {
  children: ReactNode;
  nav: ReactNode;
}) => {
  return (
    <div>
      {nav}
      {children}
    </div>
  );
};

export default AwardsLayout;

import { PageTitle } from "@/components/PageTItle";
import { Loader } from "@/components/ui/loader";
import { ReactNode, Suspense } from "react";

const AwardsLayout = ({
  children,
  nav,
}: {
  children: ReactNode;
  nav: ReactNode;
}) => {
  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
      <PageTitle>活動実績</PageTitle>
      <div className="md:flex md:gap-8 lg:gap-12">
        {nav}
        <Suspense
          fallback={
            <div className="flex justify-center md:hidden">
              <Loader />
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
    </div>
  );
};

export default AwardsLayout;

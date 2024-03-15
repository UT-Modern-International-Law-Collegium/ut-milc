"use client";

import { type FC } from "react";
import ImageGallery from "react-image-gallery";

type Props = {
  images: { original: string; thumbnail: string }[];
};

export const CustomImageGallery: FC<Props> = ({ images }) => {
  return (
    <div className="rounded-lg bg-gray-100 md:pb-4 md:pt-8">
      <div className="mx-auto w-full md:w-3/4">
        {/* @ts-ignore */}
        <ImageGallery
          items={images}
          autoPlay
          showPlayButton={false}
          showNav={false}
        />
      </div>
    </div>
  );
};

"use client";

import { type FC } from "react";
import ImageGallery from "react-image-gallery";

type Props = {
  images: { original: string; thumbnail: string }[];
};

export const CustomImageGallery: FC<Props> = ({ images }) => {
  return (
    <div className="rounded-lg bg-gray-100 pb-4 pt-8">
      <div className="mx-auto w-3/4">
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

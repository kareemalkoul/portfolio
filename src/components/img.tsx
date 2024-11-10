import React, { useState } from "react";
import Image from "next/image";

interface ImageFallbackProps extends Omit<React.ComponentProps<typeof Image>, 'src'> {
  src: string;
  fallbackSrc: string;
  alt: string;
}

const ImageFallback = (props: ImageFallbackProps) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(false);
  const [oldSrc, setOldSrc] = useState(src);
  if (oldSrc !== src) {
    setImgSrc(false);
    setOldSrc(src);
  }
  return (
    <Image
      {...rest}
      src={imgSrc ? fallbackSrc : src}
      alt={alt}
      onError={() => {
        setImgSrc(true);
      }}
    />
  );
};

export default ImageFallback;

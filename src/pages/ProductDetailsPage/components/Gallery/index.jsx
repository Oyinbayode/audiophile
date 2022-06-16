import React, { useEffect, useState } from "react";
import {
  GalleryContainer,
  Left,
  ImageOne,
  ImageTwo,
  Right,
  ImageThree,
} from "./Gallery";

const Gallery = ({ Gallery, alt, Params }) => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(() => window.innerWidth);
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [Params]);

  return (
    <GalleryContainer>
      <Left>
        <ImageOne
          src={
            size <= 600
              ? Gallery.One.Mobile
              : size <= 1090
              ? Gallery.One.Tablet
              : Gallery.One.Desktop
          }
          alt={alt}
        />
        <ImageTwo
          src={
            size <= 600
              ? Gallery.Two.Mobile
              : size <= 1090
              ? Gallery.Two.Tablet
              : Gallery.Two.Desktop
          }
          alt={alt}
        />
      </Left>
      <Right>
        <ImageThree
          src={
            size <= 600
              ? Gallery.Three.Mobile
              : size <= 1090
              ? Gallery.Three.Tablet
              : Gallery.Three.Desktop
          }
          alt={alt}
        />
      </Right>
    </GalleryContainer>
  );
};

export default Gallery;

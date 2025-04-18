import React, { useState } from "react";
import Image from "next/image";
import { HlsVideo } from "./Video";
import { useLazyMedia } from "#/hooks/useLazyMedia";

type LazyMediaProps = {
  src: string;
  containerStyle?: React.CSSProperties;
  playerStyle?: React.CSSProperties;
  placeholderColor?: string;
  transitionDuration?: string;
};

export function LazyMedia({
  src,
  containerStyle,
  playerStyle,
  placeholderColor = "#515151",
  transitionDuration = "0.3s",
}: LazyMediaProps) {
  const [isVisible, ref] = useLazyMedia<HTMLDivElement>(0.1, "10%");
  const [isLoaded, setIsLoaded] = useState(false);
  const isVideo = src.endsWith(".m3u8");

  const handleMediaLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: placeholderColor,
        overflow: "hidden",
        ...containerStyle,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: placeholderColor,
          opacity: isLoaded ? 0 : 1,
          transition: `opacity ${transitionDuration} ease-in-out`,
          zIndex: 1,
        }}
      />

      {isVisible &&
        (isVideo ? (
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: `opacity ${transitionDuration} ease-in-out`,
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 0,
            }}
          >
            <HlsVideo
              source={src}
              containerStyle={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                ...containerStyle,
              }}
              playerStyle={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                ...playerStyle,
              }}
              onLoadStart={handleMediaLoaded}
            />
          </div>
        ) : (
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: `opacity ${transitionDuration} ease-in-out`,
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 0,
            }}
          >
            <Image
              src={src}
              alt=""
              fill={true}
              style={{ objectFit: "cover", ...playerStyle }}
              loading="lazy"
              quality={33}
              onLoadingComplete={handleMediaLoaded}
            />
          </div>
        ))}
    </div>
  );
}

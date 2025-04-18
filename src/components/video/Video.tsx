import { PropsWithoutRef, useEffect, useRef, useState } from "react";
import scss from "./video.module.scss";
import HLS from "hls.js";

export interface VideoProps {
  source: string;
  hls?: boolean;
}

export default function Video(props: PropsWithoutRef<VideoProps>) {
  return props.hls ? <HlsVideo {...props} /> : <NativeVideo {...props} />;
}

function NativeVideo(props: React.PropsWithoutRef<VideoProps>) {
  return (
    <div className={scss.player}>
      <video autoPlay loop muted preload="auto">
        <source src={props.source} type="video/mp4" />
      </video>
    </div>
  );
}

function HlsVideo(props: React.PropsWithoutRef<VideoProps>) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (HLS.isSupported()) {
      const hls = new HLS({
        xhrSetup(xhr, _url) {
          xhr.withCredentials = true;
        },
      });
      hls.loadSource(props.source);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = props.source;
    }
  }, [ref]);
  return (
    <div className={scss.player}>
      <video ref={ref} muted autoPlay loop></video>
    </div>
  );
}

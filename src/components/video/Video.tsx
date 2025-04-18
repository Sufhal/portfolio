import {
  CSSProperties,
  PropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import scss from "./video.module.scss";
import HLS, { Events } from "hls.js";

export interface VideoProps {
  source: string;
  hls?: boolean;
}

export default function Video(props: PropsWithoutRef<VideoProps>) {
  return props.hls ? (
    <HlsVideo {...props} containerClassName={scss.player} />
  ) : (
    <NativeVideo {...props} />
  );
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

export function HlsVideo(
  props: React.PropsWithoutRef<
    VideoProps & {
      containerClassName?: string;
      containerStyle?: CSSProperties;
      playerClassName?: string;
      playerStyle?: CSSProperties;
      controls?: boolean;
      onLoadStart?: () => void;
    }
  >
) {
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
      hls.on(Events.MEDIA_ATTACHED, () => {
        if (props.onLoadStart) props.onLoadStart();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = props.source;
      if (props.onLoadStart) props.onLoadStart();
    }
  }, [ref]);
  return (
    <div className={props.containerClassName} style={props.containerStyle}>
      <video
        ref={ref}
        muted
        controls={props.controls}
        loop
        autoPlay
        className={props.playerClassName}
        style={props.playerStyle}
      ></video>
    </div>
  );
}

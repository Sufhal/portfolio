import Image from "next/image";
import Video, { HlsVideo } from "../video/Video";
import scss from "./gallery.module.scss";
import { LazyMedia } from "../video/LazyMedia";

type GalleryProps = {
  content: string[];
};

export function Gallery(props: React.PropsWithoutRef<GalleryProps>) {
  return (
    <div className={scss.container}>
      {props.content.map((v, idx) => (
        <div key={idx} className={scss.item}>
          <LazyMedia src={v} />
        </div>
      ))}
    </div>
  );
}

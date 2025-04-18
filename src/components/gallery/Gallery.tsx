import Image from "next/image";
import Video, { HlsVideo } from "../video/Video";
import scss from "./gallery.module.scss";

type GalleryProps = {
  content: string[];
};

export function Gallery(props: React.PropsWithoutRef<GalleryProps>) {
  return (
    <div className={scss.container}>
      {props.content.map((v, idx) => (
        <div key={idx} className={scss.item}>
          {v.endsWith(".m3u8") ? (
            <HlsVideo
              source={v}
              containerStyle={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              playerStyle={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Image
              src={v}
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
              loading="lazy"
              quality={33}
            />
          )}
        </div>
      ))}
    </div>
  );
}

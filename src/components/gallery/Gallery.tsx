import Image from "next/image";

type GalleryProps = {
  images: string[];
};

export function Gallery(props: React.PropsWithoutRef<GalleryProps>) {
  return (
    <div>
      {props.images.map((v, idx) => (
        <Image key={idx} src={v} alt="" />
      ))}
    </div>
  );
}

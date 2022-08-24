import "./styles.scss";

interface ImageRoundProps {
  file: string;
  sizeImage: {
    axes: number;
    negative: number;
  };
}
export function ImageRound({ file, sizeImage }: ImageRoundProps) {
  return (
    <div className="imageView">
      <img
        src={file}
        alt=""
        style={{
          width: `${sizeImage.axes}%`,
          height: `${sizeImage.axes}%`,
          top: `-${sizeImage.negative}px`,
          left: `-${sizeImage.negative}px`,
        }}
      />
    </div>
  );
}

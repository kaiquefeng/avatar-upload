import { useAvatarFile } from "../../context/useAvatarFile";
import "./styles.scss";

interface ImageRoundProps {
  file: string;
  sizeImage: {
    axes: number;
    negative: number;
  };
}
export function ImageRound({ file, sizeImage }: ImageRoundProps) {
  const { error } = useAvatarFile();

  console.log("error:::", error);

  return (
    <div className="imageView">
      {error !== "" ? (
        <div className="alert">!</div>
      ) : (
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
      )}
    </div>
  );
}

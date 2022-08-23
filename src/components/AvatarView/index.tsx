import { useAvatarFile } from "../../context/useAvatarFile";

import "./styles.scss";

export function AvatarView() {
  const { file, clearFileArchive, resizeImage, sizeImage } = useAvatarFile();

  return (
    <div className="container-view">
      <div className="close" onClick={() => clearFileArchive()}>
        +
      </div>
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
      <div className="content-view">
        <span>CROP</span>
        <input
          id="ranger"
          type="range"
          min="100"
          max="200"
          value={sizeImage.axes}
          onChange={resizeImage}
        />
        <div className="action">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

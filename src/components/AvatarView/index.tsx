import { useAvatarFile } from "../../context/useAvatarFile";
import { ImageRound } from "../ImageRound";

import "./styles.scss";

export function AvatarView() {
  const { file, clearFileArchive, resizeImage, sizeImage, handleDone } =
    useAvatarFile();

  return (
    <div className="container-view">
      <div className="close" onClick={() => clearFileArchive()}>
        +
      </div>
      <ImageRound file={file} sizeImage={sizeImage} />
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
          <button onClick={() => handleDone()}>Save</button>
        </div>
      </div>
    </div>
  );
}

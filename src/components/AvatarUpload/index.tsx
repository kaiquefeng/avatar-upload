import { FiImage } from "react-icons/fi";
import { useAvatarFile } from "../../context/useAvatarFile";
import { ImageRound } from "../ImageRound";

import "./styles.scss";

export function AvatarUpload() {
  const { handleChange, file, sizeImage, status } = useAvatarFile();

  return (
    <div className="container-input">
      <input
        type="file"
        name="file"
        id="file"
        onChange={handleChange}
        placeholder="Upload"
      />
      <label htmlFor="file">
        {status && <ImageRound file={file} sizeImage={sizeImage} />}

        <div
          className="content-upload"
          style={status ? { marginLeft: "3rem" } : {}}
        >
          <span>
            <FiImage /> Organization Logo
          </span>
          <p>Drop the image here or click to browse.</p>
        </div>
      </label>
    </div>
  );
}

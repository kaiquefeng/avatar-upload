import { FiImage } from "react-icons/fi";
import { useAvatarFile } from "../../context/useAvatarFile";

import "./styles.scss";

export function AvatarUpload() {
  const { handleChange, file } = useAvatarFile();

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
        <span>
          <FiImage /> Organization Logo
        </span>
        <p>Drop the image here or click to browse.</p>
      </label>
    </div>
  );
}

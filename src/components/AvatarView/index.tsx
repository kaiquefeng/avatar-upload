import { useAvatarFile } from "../../context/useAvatarFile";
import { ImageRound } from "../ImageRound";

import "./styles.scss";

export function AvatarView() {
  const { file, clearFileArchive, resizeImage, sizeImage, handleDone, error } =
    useAvatarFile();

  return (
    <div className="container-view" data-test-id="container-view">
      <div
        className="close"
        data-test-id="button-close"
        onClick={() => clearFileArchive()}
      >
        +
      </div>
      <ImageRound file={file} sizeImage={sizeImage} />
      <div className="content-view">
        {error !== "" ? (
          <div className="error-message">
            <span>
              Sorry, the upload failed.
              <div className="feedback">
                ?<div className="feedback-message">{error}</div>
              </div>
            </span>
            <a onClick={() => clearFileArchive()} data-test-id="try-again">
              Try again
            </a>
          </div>
        ) : (
          <>
            <span>CROP</span>
            <input
              id="ranger"
              type="range"
              min="100"
              max="200"
              value={sizeImage.axes}
              // @ts-ignore
              onInput={resizeImage}
            />
            <div className="action">
              <button data-test-id="done-button" onClick={() => handleDone()}>
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

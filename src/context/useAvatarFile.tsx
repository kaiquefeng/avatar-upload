import React, { useContext, useState } from "react";

interface AvatarFileContextProps {
  file: string;
  status: boolean;
  error: string;
  sizeImage: {
    axes: number;
    negative: number;
  };
  handleChange: (e) => void;
  resizeImage: (e) => void;
  clearFileArchive: () => void;
  handleDone: () => void;
}

const AvatarFileContext = React.createContext<AvatarFileContextProps>(
  {} as AvatarFileContextProps
);

export const AvatarFileProvider = ({ children }: any) => {
  const [file, setFile] = useState("");
  const [sizeImage, setSizeImage] = useState({
    axes: 100,
    negative: 0,
  });
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  function clearFileArchive() {
    setSizeImage({
      axes: 100,
      negative: 0,
    });
    setFile("");
    setStatus(false);
    setError("");
  }

  function resizeImage(e) {
    const { value } = e.target;
    console.log(value);
    setSizeImage({
      axes: parseInt(value, 10),
      negative: value / 9,
    });
  }

  function handleChange(e) {
    clearFileArchive();
    const archive = e.target.files[0];
    const fileExtension = archive.name.split(".").at(-1);
    console.log("fileExtension", fileExtension);
    const allowedFileTypes = ["jpg", "png", "jpeg", "svg", "webp"];

    if (!allowedFileTypes.includes(fileExtension)) {
      console.log("if:::", fileExtension);
      setError(
        `File does not support. Files type must be ${allowedFileTypes.join(
          ", "
        )}`
      );
    }
    setFile(URL.createObjectURL(archive));
  }

  function handleDone() {
    setStatus(true);
  }

  return (
    <AvatarFileContext.Provider
      value={{
        file,
        status,
        error,
        handleChange,
        clearFileArchive,
        sizeImage,
        resizeImage,
        handleDone,
      }}
    >
      {children}
    </AvatarFileContext.Provider>
  );
};

export const useAvatarFile = () => {
  return useContext(AvatarFileContext);
};

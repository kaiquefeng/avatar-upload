import React, { useContext, useState } from "react";

interface AvatarFileContextProps {
  file: string;
  status: boolean;
  error: string;
  sizeImage: {
    axes: number;
    negative: number;
  };
  handleChange: (e: Event) => void;
  resizeImage: (e: Event) => void;
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

  function resizeImage(e: Event) {
    const { value } = e.target as HTMLInputElement;
    console.log(value);
    setSizeImage({
      axes: parseInt(value, 10),
      negative: Number(value) / 9,
    });
  }

  function handleChange(e: Event) {
    clearFileArchive();
    const target = e.target as HTMLInputElement;
    const archive = (target.files as FileList)[0];
    const fileExtension = archive.name.split(".").at(-1);
    console.log("fileExtension", fileExtension);
    const allowedFileTypes = ["jpg", "png", "jpeg", "svg", "webp"];

    if (!allowedFileTypes.includes(fileExtension as string)) {
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

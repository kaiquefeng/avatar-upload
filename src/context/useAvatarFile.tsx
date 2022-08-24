import React, { useContext, useState } from "react";

interface AvatarFileContextProps {
  file: string;
  status: boolean;
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
  const [status, setStatus] = useState(true);

  function clearFileArchive() {
    setSizeImage({
      axes: 100,
      negative: 0,
    });
    setFile("");
    setStatus(false);
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
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleDone() {
    setStatus(true);
  }

  return (
    <AvatarFileContext.Provider
      value={{
        file,
        status,
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

import React, { useContext, useEffect, useState } from "react";

interface AvatarFileContextProps {
  file: string;
  sizeImage: {
    axes: number;
    negative: number;
  };
  handleChange: (e) => void;
  resizeImage: (e) => void;
  clearFileArchive: () => void;
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

  useEffect(() => {
    console.log(sizeImage);
  }, [sizeImage]);

  function resizeImage(e) {
    const { value } = e.target;
    console.log(value);
    setSizeImage({
      axes: parseInt(value, 10),
      negative: value / 9,
    });
  }

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function clearFileArchive() {
    console.log("jasdjabdjhab");
    setFile("");
  }

  return (
    <AvatarFileContext.Provider
      value={{
        file,
        handleChange,
        clearFileArchive,
        sizeImage,
        resizeImage,
      }}
    >
      {children}
    </AvatarFileContext.Provider>
  );
};

export const useAvatarFile = () => {
  return useContext(AvatarFileContext);
};

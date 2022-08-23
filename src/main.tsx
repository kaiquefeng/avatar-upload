import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AvatarFileProvider } from "./context/useAvatarFile";

import "./global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AvatarFileProvider>
      <App />
    </AvatarFileProvider>
  </React.StrictMode>
);

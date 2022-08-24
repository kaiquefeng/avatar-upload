import "./App.css";
import { AvatarUpload } from "./components/AvatarUpload";
import { AvatarView } from "./components/AvatarView";
import { useAvatarFile } from "./context/useAvatarFile";

function App() {
  const { file, status } = useAvatarFile();

  return (
    <div className="container-app">
      {file && !status ? <AvatarView /> : <AvatarUpload />}
    </div>
  );
}

export default App;

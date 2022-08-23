import "./App.css";
import { AvatarUpload } from "./components/AvatarUpload";
import { AvatarView } from "./components/AvatarView";
import { useAvatarFile } from "./context/useAvatarFile";

function App() {
  const { file } = useAvatarFile();

  return (
    <div className="container-app">
      {file ? <AvatarView /> : <AvatarUpload />}
    </div>
  );
}

export default App;

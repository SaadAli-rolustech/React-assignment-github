import { useState } from "react";
import "./App.css";
import RouteStack from "./routes";
import { AppContext } from "./shared/appContext";

function App() {
  const [appSharedObject, setAppSharedObject] = useState({});

  return (
    <AppContext.Provider value={{ appSharedObject, setAppSharedObject }}>
      <RouteStack></RouteStack>
    </AppContext.Provider>
  );
}

export default App;

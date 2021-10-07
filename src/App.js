import React from "react";
import { Home } from "./components";
import { UserProvider } from "./contexts/User/index"
function App() {
  return (
    <UserProvider>

      <div className="App">
          <Home></Home>
      </div>
    </UserProvider>
  );
}

export default App;
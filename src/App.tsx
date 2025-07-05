import React from "react";
import HelloWorld from "./components/HelloWorld"; // パスが正しいことを確認

function App() {
  return (
    <div className="App">
      <HelloWorld /> {/* nameなしで "World" */}
      <HelloWorld name="TypeScript" /> {/* nameありで "TypeScript" */}
    </div>
  );
}

export default App;

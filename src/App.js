import "./App.css";
import { useState, useRef, createContext, useContext } from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Form from "./components/Form";

export const SharedContext = createContext();

// Create a provider component
function SharedProvider({ children }) {
  const [namef, setnamef] = useState("JANE APPLESEED");
  const [cnumf, setcnumf] = useState("0000 0000 0000 0000");
  const [expmf, setexpmf] = useState("00");
  const [expyf, setexpyf] = useState("00");
  const [cvcf, setcvcf] = useState("000");

  return (
    <SharedContext.Provider
      value={{
        namef,
        setnamef,
        cnumf,
        setcnumf,
        expmf,
        setexpmf,
        expyf,
        setexpyf,
        cvcf,
        setcvcf,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
}

function App() {
  const [sub, setsub] = useState(false);
  return (
    <SharedProvider>
      <div className="App">
        <div className="cards">
          <Card1 />

          <Card2 />
        </div>
        <Form ar={{ sub: sub, setsub: setsub }} />
      </div>
    </SharedProvider>
  );
}

export default App;

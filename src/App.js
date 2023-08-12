import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"

import Page from "./Page"
import { useState } from 'react';


function App() {
  const [page, setPage] = useState(1)
  const pageChanger = () => {
    setPage(page + 1)
  }
  const [mode, setMode] = useState("Light");
  const [navBg, setNavbg] = useState("darkblue")
  const [font, setFont] = useState("black")
  const [quizbg, setQuizbg] = useState("ffffff")
  const [pagebg, setPagebg] = useState("white");
  const [result, setResult] = useState(0);
  const [name, setName] = useState("");
  const setresultMethod = (a) => {
    setResult(a)
  }
  const setNameMethod = (a) => {
    setName(a)

  }
  const modeChanger = () => {
    if (mode == "Light") {
      setNavbg("Black")
      setFont("White")
      setPagebg("silver")
      setQuizbg("#03204f")
      setMode("Dark")
    } else if (mode == "Dark") {
      setNavbg("darkblue")
      setFont("Black")
      setPagebg("white")
      setQuizbg("#ffffff")

      setMode("Light")

    }
  }
  return (
    <>
      <Navbar mode={mode} modeChanger={modeChanger} navBg={navBg} font={font} />
      <Page page={page} pageChanger={pageChanger} mode={mode} modeChanger={modeChanger} font={font} pagebg={pagebg} quizbg={quizbg} setresultMethod={setresultMethod} result={result} setNameMethod={setNameMethod} name={name} />
    </>

  );
}

export default App;

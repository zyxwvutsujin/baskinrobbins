
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main/pages/Main.jsx";
import FomPage from "./components/Fompages/FomPage.jsx";
import FomPage2 from "./components/Event/Fompage2.jsx";
import FomPage3 from "./components/History/Fompage3.jsx";

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/fom'} element={<FomPage/>}/>
                <Route path={'/event'} element={<FomPage2/>}/>
                <Route path={'/history'} element={<FomPage3/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

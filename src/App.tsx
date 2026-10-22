import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/navbar" element={<NavBar/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

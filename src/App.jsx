import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dedicated from "./pages/Dedicated"

function App() {
  return (
    <div className="text-white">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Dedicated/>}/> 
      </Routes>
    </div>
  )
}

export default App

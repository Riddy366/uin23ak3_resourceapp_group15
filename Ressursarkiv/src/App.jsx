import './App.css'
import { resources } from './assets/ressurser.js'
/* Har noen problemer med å hente Layout filen, den funker med å bytte stor 
 bokstav på components eller til stor hvis den er liten fra før*/
import Layout from './Components/Layout.jsx' 
import HTMLResources from './pages/HTMLResources.jsx'
import './style/main.scss'
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <>
    <div>
          <h1>Ressurskategorier</h1>
          <Layout resources={resources} />
          <Routes>
          <Route index path="/HTML" element={<HTMLResources/>}/>
            <Route path="/css" element={<HTMLResources/>}/>
            <Route path="/javascript" element={<HTMLResources/>}/>
            <Route path="/React" element={<HTMLResources/>}/>
            <Route path="/Sanity-and-headless-Cms" element={<HTMLResources/>}/>
          </Routes>
      </div>

    </>
  );
}


export default App
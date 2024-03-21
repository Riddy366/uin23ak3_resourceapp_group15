import './App.css'
import { resources } from './assets/ressurser.js'
import Layout from './components/Layout.jsx'
import HTMLResources from './pages/HTMLResources.jsx'
import './style/main.css'
import {Routes, Route} from 'react-router-dom'



const App = () => {
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
            <Route path="/Sanity and headless Cms" element={<HTMLResources/>}/>
          </Routes>
      </div>

    </>
  );
}


export default App
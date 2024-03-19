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
            <Route path="/html" element={<HTMLResources/>}/>
          </Routes>
      </div>

    </>
  );
}


export default App
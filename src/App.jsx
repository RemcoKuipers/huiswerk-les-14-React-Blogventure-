import './App.css'
import logo from './assets/logo-white.png'
import Homepage from './pages/Homepage/Homepage.jsx'
import Newblogpost from './pages/Newblogpost/Newblogpost.jsx'
import Overview from './pages/Overview/Overview.jsx'
import Error from './pages/Error/Error.jsx'
import {Routes, Route} from 'react-router-dom'

function App() {
    return (
        <>
            <div className="page-container">
                <img src={logo} alt="Company logo"/>

            </div>
            <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="Newblogpost" element={<Newblogpost/>}/>
                <Route path="Overview" element={<Overview/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            </main>
        </>
    )
}

export default App

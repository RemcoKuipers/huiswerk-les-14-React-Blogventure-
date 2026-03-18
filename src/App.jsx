import './App.css'
import logo from './assets/logo-white.png'
import Homepage from './pages/Homepage/Homepage.jsx'
import Newblogpost from './pages/Newblogpost/Newblogpost.jsx'
import blogpostdetail from './pages/blogpostdetail/blogpostdetail.jsx'
import Overview from './pages/Overview/Overview.jsx'
import Error from './pages/Error/Error.jsx'
import {Routes, Route, NavLink} from 'react-router-dom'
import Blogpostdetail from "./pages/blogpostdetail/blogpostdetail.jsx";

function App() {
    return (
        <>
            <nav>
                <ul className="main-navigation-links">
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/">Home</NavLink>
                    </li>
                    <li><NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/overview">Alle posts</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/newblogpost">Nieuwe post maken</NavLink></li>
                </ul>
            </nav>

            <div className="page-container">
                <img src={logo} alt="Company logo"/>

            </div>
            <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/Newblogpost" element={<Newblogpost/>}/>
                <Route path="/Overview" element={<Overview/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/blogpostdetail/:id" element={<Blogpostdetail/>}/>
            </Routes>
            </main>
        </>
    )
}

export default App

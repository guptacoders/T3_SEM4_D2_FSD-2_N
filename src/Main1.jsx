import { BrowserRouter as Router,Route,Routes } from      'react-router-dom'
import {Link} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nopage from './Nopage'

function Main(){
    return(
        <>
        <Router>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
       

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<Nopage/>}/>
        </Routes>

         </Router>
        </>
    )
}

export default Main;
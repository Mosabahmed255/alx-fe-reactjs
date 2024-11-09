import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav  style={{  display: 'flex', justifyContent: 'center',  padding:'10px', backgroundColor:'#f0f0f0'}}>
            <Link to="./Home.jsx" style={{margin:'0 10px'}}>Home</Link>
            <Link to="./About.jsx" style={{margin:'0 10px'}}>About</Link>
            <Link to="./Services.jsx" style={{margin:'0 10px'}}>Services</Link>
            <Link to="./Contact.jsx" style={{margin:'0 10px'}}>Contact</Link>
        </nav>
    );
};

export default Navbar;
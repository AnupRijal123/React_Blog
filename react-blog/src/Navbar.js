import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="navbar-div">
            <Link to="/"> <h2>React Blog</h2></Link>
            <div className="link-div">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>

            </div>
        </div>
    )
}

export default Navbar;
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="navbar-div">
            <h2>navbar component</h2>
            <div className="link-div">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>

            </div>
        </div>
    )
}

export default Navbar;
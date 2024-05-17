import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className="not-found-div">
            <h2>Sorry :( </h2>
            <p>That page cannot be found</p>
            <Link to="/">back to home page</Link>
        </div>
    )
}

export default NotFound;
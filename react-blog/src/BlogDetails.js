import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function BlogDetails() {
    const { id } = useParams();
    const { blogs, showLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleDelete = function (id) {
        console.log(id)
        axios.delete(`http://localhost:8000/blogs/${id}`)
            .then((response) => {
                console.log(response)
                history.push('/');

            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            {showLoading && <p>Loading...</p>}
            {error != null && <p>{error}</p>}
            {blogs &&
                <div className="blog-detail-container">
                    <h2>{blogs.title}</h2>
                    {showLoading === false && <small>Genre:{blogs.genre}</small>}
                    {showLoading === false && <small>Written By:{blogs.author}</small>}
                    <article>
                        <p>{blogs.body}</p>
                    </article>

                    {showLoading === false && <button onClick={function () {
                        handleDelete(blogs.id)
                    }}>Delete</button>}
                </div>
            }

        </div>
    )
}
export default BlogDetails;
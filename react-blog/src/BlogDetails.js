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
            <h2>Blog details component</h2>
            {showLoading && <p>Loading...</p>}
            {error != null && <p>{error}</p>}
            {blogs &&
                <div>
                    <h2>{blogs.title}</h2>
                    {showLoading === false && <small>Written by:{blogs.author}</small>}
                    <article>
                        {blogs.body}
                    </article>
                    <button onClick={function () {
                        handleDelete(blogs.id)
                    }}>Delete</button>
                </div>
            }

        </div>
    )
}
export default BlogDetails;
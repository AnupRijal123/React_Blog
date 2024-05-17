import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function NewBlog() {
    // title:'',
    // body:'',
    // author:'',

    const [blogtitle, setBlogTitle] = useState('');
    const [blogbody, setBlogBody] = useState('');
    const [blogGenre, setBlogGenre] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('hello');
    const history = useHistory();

    const handleClick = async function (e) {
        console.log('hello');
        e.preventDefault();
        await axios.post('http://localhost:8000/blogs', {
            title: blogtitle,
            body: blogbody,
            genre: blogGenre,
            author: blogAuthor
        }).then((response) => {
            console.log(response)
            history.push('/');
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <div className="add-blog-container">
            <form>
                <div className="row">
                    <label>Blog title:</label>
                    <input
                        type="text"
                        required
                        value={blogtitle}
                        onChange={function (e) {
                            setBlogTitle(e.target.value)
                        }}
                    />
                </div>
                <div className="row">
                    <label>Blog body:</label>
                    <textarea
                        required
                        value={blogbody}
                        onChange={(e) => {
                            // console.log(e.target.value)
                            setBlogBody(e.target.value)
                        }}
                    ></textarea>
                </div>
                <div className="row">
                    <label>Author:</label>
                    <input
                        type="text"
                        value={blogAuthor}
                        onChange={function (e) {
                            setBlogAuthor(e.target.value);
                        }}

                    />
                </div>
                <div className="row">
                    <label>Genre:</label>
                    <select
                        value={blogGenre}
                        onChange={function (e) {
                            // console.log(e.target.value)
                            setBlogGenre(e.target.value)
                        }}>
                        <option value="education">education</option>
                        <option value="politics">politics</option>
                        <option value="crime">crime</option>
                    </select>
                </div>
                <button onClick={handleClick}>Add Blog</button>
            </form>
        </div>
    )
}
export default NewBlog;
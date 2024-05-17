import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function NewBlog() {
    // title:'',
    // body:'',
    // author:'',

    const [blogtitle, setBlogTitle] = useState('');
    const [blogbody, setBlogBody] = useState('');
    const [blogauthor, setBlogAuthor] = useState('ram');
    const history = useHistory();

    const handleClick = async function (e) {
        console.log('hello');
        e.preventDefault();
        await axios.post('http://localhost:8000/blogs', {
            title: blogtitle,
            body: blogbody,
            author: blogauthor
        }).then((response) => {
            console.log(response)
            history.push('/');
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <div className="add-blog-container">
            <h2>New Blog Component</h2>
            <form>
                <div className="row">
                    <label>Blog title</label>
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
                    <label>Blog body</label>
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
                    <label>Blog author</label>
                    <select
                        value={blogauthor}
                        onChange={function (e) {
                            // console.log(e.target.value)
                            setBlogAuthor(e.target.value)
                        }}>
                        <option value="ram">Ram</option>
                        <option value="shyam">Shyam</option>
                    </select>
                </div>
                <button onClick={handleClick}>Add Blog</button>
                <p>{blogtitle}</p>
                <p>{blogbody}</p>
                <p>{blogauthor}</p>
            </form>
        </div>
    )
}
export default NewBlog;
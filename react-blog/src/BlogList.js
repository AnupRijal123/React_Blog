import { Link } from 'react-router-dom';
function BlogList(props) {
    const blogs = props.blgs;
    const title = props.pagetitle;
    // console.log(props)
    // or 
    // function BlogList({blgs,pagetitle,makeDelete}){
    //     const blogs=blgs
    //     const title=pagetitle;

    return (
        <div className="blog-container">
            <p>bloglist compoent</p>
            <h2 style={{ margin: 'auto' }}>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-div" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <div className="blog-content">
                            <h2>{blog.title}</h2>
                            <small>Written By: {blog.author}</small>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
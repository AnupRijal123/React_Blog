function BlogList(props){
    const blogs=props.blgs;
    const title=props.pagetitle;
    console.log(props)
// or 
// function BlogList({blgs,pagetitle,makeDelete}){
//     const blogs=blgs
//     const title=pagetitle;
      const handleDelete=function(id){
        console.log(id);
        // console.log(blogs);
        const selectedBlog=blogs.filter((blog)=>(blog.id===id))
        props.makeDelete(selectedBlog);
        console.log(selectedBlog)
    }

    return(
        <div className="blog-container">
         <p>bloglist compoent</p>
         <h2 style={{margin:'auto'}}>{title}</h2>
         {blogs.map((blog)=>(
            <div className="blog-div" key={blog.id}>
            <div className="blog-content">
            <h2>{blog.title}</h2>
            <small>Written By: {blog.author}</small>
            <button onClick={function(){
                handleDelete(blog.id)
            }}>Delete</button>
            <p className="blog-body">{blog.body}</p>
            </div>
          </div>
         ))}
        </div>
    );
}

export default BlogList;
import {useState} from 'react';
import BlogList from './BlogList';  

function Home(){
  // blogs:[],
  const [blogs,setBlogs]=useState([
    {title:'Science',body:'i am science',author:'ram',id:1},
    {title:'Commerce',body:'i am commerce',author:'shyam',id:2},
    {title:'Art',body:'i am art',author:'ram',id:3}

  ]); 
  let newBlogs=[];
  const deleteElement=function(blogSelected){
    console.log(blogSelected[0]);
    console.log(blogSelected[0].id)

    newBlogs=blogs.filter((blog)=>(
      blog.id!==blogSelected[0].id
    ))    
    console.log(newBlogs);
    setBlogs(newBlogs);
  }
  return(
   <div className="home-div">
     <p>Home component</p>

    <BlogList blgs={blogs} pagetitle="All Blogs" makeDelete={deleteElement}/>
    {/* <BlogList blgs={blogs.filter((blog)=>blog.author==='ram')} pagetitle="Ram's Blogs"/> */}
   </div>
  )
}

export default Home;
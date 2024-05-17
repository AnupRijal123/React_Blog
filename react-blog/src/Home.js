import BlogList from "./BlogList";
// import axios from 'axios';
import useFetch from './useFetch';

function Home() {
  // const [blogs, setBlogs] = useState([]);   // blogs:[], jastai
  // const [showLoading, setShowLoading] = useState(true);
  // const [error, setError] = useState(null);   //errors:{},


  /////// yeasri garda ni hunxa or useFetch vanne functio banayer tyo call garda hunxa
  // useEffect(() => {
  //   console.log('use effect hook ran');
  //   setTimeout(() => {
  //     axios.get('http://localhost:8000/blogs').then((response) => {
  //       console.log(response);
  //       if (response.status === 200) {
  //         console.log('success')
  //         setBlogs(response.data);
  //         setShowLoading(false);
  //         setError(null);
  //       } else {
  //         // console.log('failed');

  //         throw Error('failed')
  //       }

  //     }).catch((error) => {
  //       console.log(error.message);
  //       setError(error.message);
  //       setShowLoading(false)
  //     })
  //   }, 2000);
  //   // fetch('http://localhost:8000/blogs').then(response => {
  //   //   return response.json()
  //   // }).then((data) => {
  //   //   console.log(data)
  //   // })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   })

  // }, []);

  const { blogs, showLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home-div">
      <p>Home component</p>

      {showLoading && <div>Loading...</div>}

      <div>{error}</div>
      {blogs.length !== 0 && <BlogList blgs={blogs} pagetitle="All Blogs" />}
      {/* <BlogList blgs={blogs.filter((blog)=>blog.author==='ram')} pagetitle="Ram's Blogs"/> */}
      {/* <button onClick={() => { setName('shyam') }}>Change Name</button> */}
    </div>
  );
}

export default Home;

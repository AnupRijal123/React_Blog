import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [blogs, setBlogs] = useState([]);   // blogs:[], jastai
    const [showLoading, setShowLoading] = useState(true);
    const [error, setError] = useState(null);   //errors:{},


    useEffect(() => {
        console.log('use effect hook ran');
        setTimeout(() => {
            axios.get(url).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log('success')
                    setBlogs(response.data);
                    setShowLoading(false);
                    setError(null);
                } else {
                    // console.log('failed');
                    throw Error('failed')
                }

            }).catch((error) => {
                console.log(error.message);
                setError(error.message);
                setShowLoading(false)
            })
        }, 2000);
        // fetch('http://localhost:8000/blogs').then(response => {
        //   return response.json()
        // }).then((data) => {
        //   console.log(data)
        // })
        //   .catch((error) => {
        //     console.log(error);
        //   })

    }, [url]);

    return { blogs, showLoading, error };
}
export default useFetch;
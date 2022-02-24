import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [name, setName] = useState('Mario');


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
         return   res.json();
        })
        .then((data) => {
            setBlogs(data);
        });
    }, []);

    return ( 
        <div className="home">
            {blogs && <Bloglist blogs={ blogs } title = 'All blogs' />}
        </div>
     );
}
 
export default Home;
import { useState } from "react";


const Home = () => {
    const [blogs, usetBlog] = useState([
        {title: 'One', body: "one one one", author: 'mario', id: 1},
        {title: 'Two', body: "two two two", author: 'yoshi', id: 2},
        {title: 'Three', body: "three three three", author: 'mario', id: 3},
    ])

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;
import React from "react"
import Header from "./components/Header"
import Post from "./components/Post"
import data from "./data"


export default function App() {
     
    const posts = data.map(item => {
    return (
        <Post
            key={item.title}
            {...item}
        />
        )
    })   
    
    return (
        <div>
            <Header />
            <section className="blog-post">
                {posts}
            </section>
        </div>
    )
}
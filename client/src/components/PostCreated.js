import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCreated() {
    return (
        <div className="postcreate">
            <header>
            <Link to="/"><div>CL</div></Link>
            <Link to={`/create-a-posting/`}><p>add post</p></Link>
            </header>
            <h1>Thank you, your post has been created... It's FREE!</h1>
        </div>
    )
}

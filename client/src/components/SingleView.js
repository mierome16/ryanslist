import React, {useEffect} from 'react'
import {getPost} from '../actions/ryanslist.actions'
import {useSelector} from 'react-redux'
import '../styles/singleview.css'
import {Link} from 'react-router-dom'
import moment from 'moment'


export default props => {
    const post = useSelector(appState => appState.post)
    useEffect(() => {
        getPost(props.match.params.id)
    }, [])

    return (
        <div id="svpage">
            <header className="svheader">
            <Link to="/"><div>CL</div></Link>
            <Link to={`/create-a-posting/`}><p>add post</p></Link>
            </header>
            {post.map(item => {
                return (
                <div id="post">
                        <h1>{item.title} (${item.price})</h1>
                        <img src="https://via.placeholder.com/500x500.png" alt=""></img>
                        <p className="postcontent">{item.content}</p>
                        <div id="post-footer">
                            <p className="postid">post id: {item.id}</p><p className="posttime">    
                             posted {moment(item.time_created).fromNow()}
                             </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

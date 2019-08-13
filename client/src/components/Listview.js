import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { getPostings } from '../actions/ryanslist.actions'
import '../styles/listview.css'
import { Link } from 'react-router-dom'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import moment from 'moment'


export default function Listview(props) {
const postings = useSelector(appState => appState.postings)
const [view, setView] = useState('list')
    useEffect(() => {
        getPostings(props.match.params.category)
        console.log(postings)
    }, [])
    function changeView(e) {
        setView(e.target.value)
    }

    return (
        <div className="plpage">
            <header>
            <Link to="/"><div>CL</div></Link>
            <Link to={`/create-a-posting/`}><p>add post</p></Link>
            </header>
            <div className="postlist">
                <div className="searchbar">
                    <p className="arrow">&#8810;</p>
                    <input className="plsearch" type="text" placeholder="search"></input>
                    <button className="plbutton">&#10003;</button>
                    
                </div>
                <div className="viewbuttons">
                    <button onClick={changeView} value="thumbnail" className={view === "thumbnail" ? "thumbnail active" : "thumbnail"}><MaterialIcon id="i" icon="view_list"/>Thumbnail View</button>
                    <button onClick={changeView} value = "gallery" className={view === "gallery" ? "gallery active" : "gallery"}><MaterialIcon id="i" icon="view_module"/>Gallery View</button>
                    <button onClick={changeView} value="list" className={view === "list" ? "list active" : "list"}><MaterialIcon id="i" icon="reorder"/>List View</button>
                </div>
                <div className={'post-' + view}>
            {postings.map(item => {
                if (view === "list") {
                    return (
                        <div className="post">
                    <p>&#9734; <span className="date">{moment(item.time_created).format("MMM Do")}</span> </p><Link to={`/view-post/${item.id}`}><p>{item.title} ${item.price} ({item.city})</p></Link>
                    </div>
                    )
                } else if(view === "thumbnail") {
                    return (
                        <div className="thumbPost">
                            <img src={item.image} alt=""></img>
                            <p>&#9734; <span className="date">{moment(item.time_created).format("MMM Do")}</span> </p><Link to={`/view-post/${item.id}`}>
                                <p>{item.title} ${item.price} ({item.city})</p></Link>
                        </div>
                    )
                } else if(view === "gallery") {
                    return (                        <div className="galleryPost">
                    <img className="itemImage" src={item.image}></img>
                    <div id="postInfos">
                    <p>&#9734; <span className="date">{moment(item.time_created).format("MMM Do")}</span> </p><Link to={`/view-post/${item.id}`}><p>{item.title} ${item.price} ({item.city})</p></Link>                
                    </div>
                    </div>
                    )
                }
            })}
            </div>
            </div>
        </div>
    )
}

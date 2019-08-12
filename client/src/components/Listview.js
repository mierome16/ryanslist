import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getPostings } from '../actions/ryanslist.actions'
import '../styles/listview.css'
import { Link } from 'react-router-dom'
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default function Listview(props) {
const postings = useSelector(appState => appState.postings)
    useEffect(() => {
        getPostings(props.match.params.category)
        console.log(postings)
    }, [])
    return (
        <div className="plpage">
            <header>
            <Link to="/"><div>CL</div></Link>
            <Link to={`/create-a-posting/`}><p>add post</p></Link>
            </header>
            <div className="postlist">
                <div className="searchbar">
                    <p className="arrow">&#8810;</p>
                    <input className="plsearch" type="text" placeholder="search (subcat name)"></input>
                    <button className="plbutton">&#10003;</button>
                    
                </div>
                <div>
                    <select>
                        <option> <MaterialIcon icon="reorder" /> Listing</option>
                        <option> <MaterialIcon icon="view_list" /> Thumbnail</option>
                        <option> <MaterialIcon icon="view_module" /> Gallery</option>
                    </select>
                </div>
                {postings.map(item => {
                    return (
            <div className="listings">
                <span className="star">&#8902;</span>
                <p className="lpname">{item.title}</p>
                <p className="lpprice">${item.price}</p>
                <p className="lpcity">({item.city})</p>
            </div>
                    )
                })}
            </div>
        </div>
    )
}

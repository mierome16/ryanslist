import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import '../styles/createposting.css'
import { Link } from 'react-router-dom'
import { getAllCategories, addPosting } from '../actions/ryanslist.actions';

export default function CreatePosting() {

    const selectCategory = useSelector(appState => appState.allCategories)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [city, setCity] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')



    console.log(category)

useEffect(() => {
    getAllCategories()
}, [])

function handleSubmit(e){
    e.preventDefault()
    console.log(title,price,city,content,category)
addPosting(title, price, city, content, category)
}

    return (
        <div classname="postingpage">
            <header className="ppheader">
            <Link to="/"><div>CL</div></Link>
            <Link to={`/create-a-posting/`}><p>add post</p></Link>
            </header>
            <form className="postinginfo" onSubmit={handleSubmit}>
                <div className="rowone">
                    <div id="top">
                    <label htmlFor="postingtitle">posting title</label>
                    <input type="text" name="postingtitle" id="postingtitle" onChange={e => setTitle(e.target.value)}></input>
                    </div>
                    <div id="top">
                    <label htmlFor="postingprice">price</label>
                    <input type="tel" name="postingprice" id="postingprice" onChange={e => setPrice(e.target.value)}></input>
                    </div>
                    <div id="top">
                    <label htmlFor="postingcity">city or neighborhood</label>
                    <input type="text" name="postingcity" id="postingcity" onChange={e => setCity(e.target.value)}></input>
                    </div>
                </div>
                <div className="rowtwo">
                    <label htmlFor="description">description</label>
                    <textarea onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <label>Choose Category</label>
                <select onChange={e => setCategory(e.target.value)}>
                    <option>Categories</option>
                    {selectCategory.map(item => {
                        return <option>{item.name}</option>
                    })}
                </select>
                {/* <Link to ="/post-created"> */}
                <button className="submitpost" type="submit">SUBMIT POST</button>
                {/* </Link> */}
           </form>
        </div>
    )
}

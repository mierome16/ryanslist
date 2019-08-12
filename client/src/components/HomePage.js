import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css'

import Categories from './Categories'

export default function HomePage() {
  return (
    <div className="container">
      <aside className="clsidenav">
        <h1 className="cltitle">craigslist</h1>
        <div className="groupone">
        <Link to="/create-a-posting"><p className="highlight">create a posting</p></Link>
        <p>my account</p>
        </div>
        <div className="grouptwo">
        <input type="text" placeholder="search craigslist" className="asidesearch"></input>
        <p>event calender</p>
        <input type="date" className="calendar"></input>
        </div>
        <div className="groupthree">
        <p>help, faq, abuse, legal</p>
        <p>avoid scams &amp; fraud</p>
        <p>terms of use</p>
        <p>privacy policy</p>
        <p>system status</p>
        </div>
        <div className="groupfour">
        <p>about craigslist</p>
        <p>craigslist is hiring</p>
        <p>craigslist open source</p>
        <p>craigslist blog</p>
        <p>best-of-craigslist</p>
        <p>craigslist TV</p>
        <p>"craigslist joe"</p>
        <p>craig connects</p>
        </div>
      </aside>
      <main>
        <header className="lvheader">las vegas</header>
        <Categories></Categories>
      </main>
      <div className="citybar">

      </div>
      <footer></footer>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSubcategories, getCategories } from '../actions/ryanslist.actions';
import '../styles/categories.css'

export default function Categories() {
    const categories = useSelector(appState => appState.categories)
    const community = useSelector(appState => appState.community) 
    const housing = useSelector(appState => appState.housing)
    const jobs = useSelector(appState => appState.jobs)
    const services = useSelector(appState => appState.services) 
    const forsale = useSelector(appState => appState.forsale)
    const personals = useSelector(appState => appState.personals)
    const gigs = useSelector(appState => appState.gigs)

    useEffect(() => {
        getCategories()
        getSubcategories()
    }, [])

    return (
        <div className="mpcategories">
            {categories.map(item => {
                if(item.id === 1) {
                return (
                    <div className="community">
                        <h2 className="maincat">{item.name}</h2>
                    <div className="comlist">
                    {community.map(cat => {
                        return <Link to={`/list/${cat.name}`}><li>{cat.name}</li></Link>
                    })}
                    </div>
                    </div>
                )
                } else if(item.id === 2) {
                    return (
                        <div className="housing" key={item.name}>
                            <h2 className="maincat">{item.name}</h2>
                        <div key={item.id} className="housinglist">
                        {housing.map(cat => {
                            return <Link to={`/list/${cat.name}`}><li>{cat.name}</li></Link>
                        })}
                        </div>
                        </div>
                    )
                    } else if(item.id === 3) {
                        return (
                            <div className="jobs" key={item.name}>
                                <h2 className="maincat">{item.name}</h2>
                            <div key={item.id} className="jobslist">
                            {jobs.map(cat => {
                                return <Link to={`/list/${cat.name}`}><li>{cat.name}</li></Link>
                            })}
                            </div>
                            </div>
                        )
                        }else if(item.id === 4) {
                            return (
                                <div className="services" key={item.name}>
                                    <h2 className="maincat">{item.name}</h2>
                                <div key={item.id} className="serviceslist">
                                {services.map(cat => {
                                    return <Link to={`/list/${cat.name}`}><li>{cat.name}</li></Link>
                                })}
                                </div>
                                </div>
                            )
                            } else if(item.id === 5) {
                                return (
                                    <div className="forsale" key={item.name}>
                                        <h2 className="maincat">{item.name}</h2>
                                    <div key={item.id} className="forsalelist">
                                    {forsale.map(cat => {
                                        return <Link to={`/list/${cat.name}`}><li>{cat.name}</li></Link>
                                    })}
                                    </div>
                                    </div>
                                )
                                } else if(item.id === 123) {
                                    return (
                                        <div className="gigs" key={item.name}>
                                            <h2 className="maincat">{item.name}</h2>
                                        <div key={item.id} className="gigslist">
                                        {gigs.map(cat => {
                                            return <Link to={`/list/${cat.name}`}><li>{cat.name}</li></Link>
                                        })}
                                        </div>
                                        </div>
                                    )
                                    } else if(item.id === 122) {
                                        return (
                                            <div className="personals" key={item.name}>
                                                <h2 className="maincat">{item.name}</h2>
                                            <div key={item.id} className="personalslist">
                                            {personals.map(cat => {
                                                return <Link to={`/list/${cat.name}`}><li>{cat.name}</li></Link>
                                            })}
                                            </div>
                                            </div>
                                        )
                                        } else if(item.id === 139) {
                                            return <h2 className="resume">{item.name}</h2>
                                        } else {
                                            //
                                        }
            })}
        </div>
    )
}

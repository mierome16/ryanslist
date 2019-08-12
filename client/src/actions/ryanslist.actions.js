import store from '../store'
import axios from 'axios'
import { Action } from 'rxjs/internal/scheduler/Action';

export function getCategories(){
  axios.get('api/categories').then(resp => {
    store.dispatch({
      type: 'GET_CATEGORIES',
      payload: resp.data
    })
  })
}

export function getSubcategories(){
  const community = []
  const housing = []
  const jobs = []
  const services = []
  const forsale = []
  const personals = []
  const gigs = []

  axios.get('/api/subcategories').then(resp => {
    resp.data.forEach(item => {
        if(item.parent_id === 1){
        community.push(item)
      } else if (item.parent_id === 2){
        housing.push(item)
      } else if (item.parent_id === 3){
        jobs.push(item)
      } else if (item.parent_id === 4){
        services.push(item)
      } else if (item.parent_id === 5){
        forsale.push(item)
      } else if (item.parent_id === 122){
        personals.push(item)
      } else if (item.parent_id === 123){
        gigs.push(item)
      } else {
        // idk
      }
    })
    store.dispatch({
      type: 'GET_SUBCATEGORIES',
      community: community,
      housing: housing,
      jobs: jobs,
      services: services,
      forsale: forsale,
      personals: personals,
      gigs: gigs
    })
  })
}
export function getAllCategories(){
  axios.get('/api/allcat').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_ALL_CATEGORIES',
      payload: resp.data
    })
  })
}
//props.match.params.id 

export function addPosting(title, price, city, content, category){
  axios.get(`/api/addPost/?title=${title}&price=${price}&city=${city}&content=${content}&category=${category}`).then(resp => {
    console.log(resp)
  })
}

export function getPostings(category) {
  axios.get('/api/getPostings/?category=' + category).then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'POSTINGS',
      payload: resp.data
    })
  })
  }


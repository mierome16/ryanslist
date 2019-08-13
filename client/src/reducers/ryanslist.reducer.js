const initialState = {
  categories: [],
  allCategories: [],
  community: [],
  housing: [],
  jobs: [],
  services: [],
  forsale: [],
  personals: [],
  gigs: [],
  postings: [],
  post: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {...state, categories: action.payload}
    case 'GET_SUBCATEGORIES':
      return {...state, community: action.community, housing: action.housing, jobs: action.jobs, services: action.services, forsale: action.forsale, personals: action.personals, gigs: action.gigs}
    case 'GET_ALL_CATEGORIES':
      return {...state, allCategories: action.payload}
    case 'POSTINGS':
      return {...state, postings: action.payload}   
    case 'POST':
      return {...state, post: action.payload}
       
    default:
      return state
  }
}
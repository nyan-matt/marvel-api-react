import fetch from 'isomorphic-fetch'
// sign up for a developer account at developer.marvel.com
// and export it from /src/utils/config.js
import { API_KEY } from './config'
const BASE_URL = 'https://gateway.marvel.com/v1/public'
const PUBLIC_KEY = API_KEY || '__MARVEL_API_PUBLIC_KEY__'
const authParams = `apikey=${PUBLIC_KEY}`

function fetchResponseByURL(relativeURL, queryString) {
  console.log(`call made to ${relativeURL}?${queryString}`)
  console.time('total')
  return fetch(`${BASE_URL}/${relativeURL}?${queryString}`)
    .then(res =>
      res.json()
      .then(console.timeEnd('total'))
    )
    .catch(error => console.error(error))
}

export function fetchObjectById(resource, id) {
  return fetchResponseByURL(`${resource}/${id}`, authParams).then(res => {
    return {
      data: res.data
    }
  })
}

export function fetchObjects(resource, queryParams = {}) {
  queryParams.apikey = PUBLIC_KEY
  const queryString = Object
    .keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&')
  return fetchResponseByURL(resource, queryString).then(res => {
    return {
      data: res.data
    }
  })
}

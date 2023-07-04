import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
const[puppies, setPuppies]=useState(puppyList)
console.log("puppyList: ", puppyList)
const [featPupId, setFeatPupId] = useState(null)
function handleClick() {
  { setFeatPupId(puppy.id)}}

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
      
console.log (featuredPup)

return ( 
  <div>
      
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          </div>
  </div>
  )}
      

export default App

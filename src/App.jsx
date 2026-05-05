
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'
const countriesPromise = fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
.then(res=>res.json())
function App() {

  return (
    <>
<Suspense fallback={<h2>country data ...</h2>}>
<Countries countriesPromise={countriesPromise}></Countries>
</Suspense>

    </>
  )
}

export default App

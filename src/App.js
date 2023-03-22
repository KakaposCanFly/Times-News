import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Article from './components/Article';
import MainScreen from './components/MainScreen';
import Nav from './components/Nav';
import Topics from './components/Topics';
import useNewsSearch from './hooks/useNewsSearch';
import countries from './selections/countries.json';
import languages from './selections/languages.json';

function App() {
  const [languageParam, setLanguageParam] = useState("en")
  const [domainParam, setDomainParam] = useState("")
  const [queryParam, setQueryParam] = useState("")

  const [language, setLanguage] = useState("en")
  const [domain, setDomain] = useState("")
  const [query, setQuery] = useState("")

  const [articles, loading, error] = useNewsSearch(queryParam, domainParam, languageParam)


  return (
    <>
      <Nav />
      <div >
        <form className="form--container "onSubmit={e => {
          e.preventDefault()
          //set search params
          console.log("language in app: ", language)
          setLanguageParam(language)
          setDomainParam(domain)
          setQueryParam(query)

          //reset search params
          setDomain("")
          setQuery("")

          //reset input fields
          document.getElementById("queryInput").value = ""
          document.getElementById("domainInput").value = ""

        }}>
          <div class="input-group mb-3">
  <div class="input-group-prepend ">
          <input className='form-control form--gap' id="queryInput" type='text' placeholder='Search' onChange={e => {
            setQuery(e.target.value)
          }}></input>
          <input className='form-control form--gap'  id="domainInput" type='text' placeholder='Sources' onChange={e => {
            setDomain(e.target.value)
          }}></input>
          <div className="dropdown">
          <select className="form--gap btn btn-secondary dropdown-toggle" onChange={
            e => setLanguage(e.target.value)
          }>
            
            <option  className=" dropdown-menu" value="en" selected>EN</option>
            {languages.map((code, idx) => (
              <option  key={idx} value={code.code}>{(code.code).toUpperCase()}</option>
            ))}
            
          </select>
          </div>
          {/* <select onChange={
            e => setCountry(e.target.value)
          }>
            <option value="us" selected>US</option>
            {countries.map((code, idx) => (
              <option key={idx} value={code.code}>{(code.code).toUpperCase()}</option>
            ))}
          </select> */}
          {/* <Link to="/"> */}
          <button type='submit' className="btn btn-primary">Search</button>
          {/* </Link> */}
          </div>
          </div>
        </form>
      </div>

      {/* Areas of interest */}
      <Topics setQueryParam={setQueryParam} setQuery={setQuery} />

      <Routes>
        <Route index element={<MainScreen articles={articles} loading={loading} error={error} />} />
        <Route path="/article/:title" element={<Article />} />
      </Routes>

    </>
  );
}

export default App;
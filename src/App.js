import { useState } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';

import './App.css';
import Article from './components/Article';
import MainScreen from './components/MainScreen';
import Topics from './components/Topics';
import useNewsSearch from './hooks/useNewsSearch';
import countries from './selections/countries.json';
import languages from './selections/languages.json';

function App() {
  const [languageParam, setLanguageParam] = useState("")
  const [countryParam, setCountryParam] = useState("")
  const [domainParam, setDomainParam] = useState("")
  const [queryParam, setQueryParam] = useState("")
  const [typeParam, setTypeParam] = useState("")

  const [language, setLanguage] = useState("en")
  const [country, setCountry] = useState("us")
  const [domain, setDomain] = useState("")
  const [query, setQuery] = useState("")
  const [type, setType] = useState("everything")

  const [articles, loading, error] = useNewsSearch(queryParam, typeParam, domainParam, countryParam, languageParam)

  return (
    <>
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          //set search params
          console.log("language in app: ", language)
          setLanguageParam(language)
          setCountryParam(country)
          setDomainParam(domain)
          setQueryParam(query)
          setTypeParam(type)

          //reset search params
          setDomain("")
          setQuery("")

          //reset input fields
          document.getElementById("queryInput").value = ""
          document.getElementById("domainInput").value = ""

        }}>
          <input id="queryInput" type='text' placeholder='query' onChange={e => {
            setQuery(e.target.value)
          }}></input>
          <input id="domainInput" type='text' placeholder='domain' onChange={e => {
            setDomain(e.target.value)
          }}></input>
          <select onChange={
            e => setLanguage(e.target.value)
          }>
            <option value="en" selected>EN</option>
            {languages.map((code, idx) => (
              <option key={idx} value={code.code}>{(code.code).toUpperCase()}</option>
            ))}
          </select>
          <select onChange={
            e => setCountry(e.target.value)
          }>
            <option value="us" selected>US</option>
            {countries.map((code, idx) => (
              <option key={idx} value={code.code}>{(code.code).toUpperCase()}</option>
            ))}
          </select>
          <button type='submit'>Search</button>
        </form>
      </div>
    
      {/* Areas of interest */}
      <Topics />

      <Routes>
        <Route index element={<MainScreen articles={articles} loading={loading} error={error} />} />
        <Route path="/article/:title" element={<Article />} />
      </Routes>

    </>
  );
}

export default App;

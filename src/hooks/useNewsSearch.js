import { useEffect, useState } from 'react'

function useNewsSearch(query, type, domain, country, language) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log("query: ", query)
        console.log("type: ", type)
        console.log("domain: ", domain)
        console.log("country: ", country)
        console.log("language: ", language)
        console.log("encodeURIComponent(query): ", encodeURIComponent(query))
        const apiKey = "14f5e11baa7143a997242244a60a16e9"
        let queryString = "https://newsapi.org/v2/"

        //possibly have different combos of api calls here
        if (type === "top-headlines") {
            queryString = `${queryString}top-headlines?country=${country}&`
        } else {
            queryString = `${queryString}everything?language=${language}&`
        }

        if (query !== "") {
            queryString = `${queryString}q=${encodeURIComponent(query)}&`
        }

        if (domain !== "") {
            queryString = `${queryString}domains=${domain}&`
        }

        queryString = `${queryString}apiKey=${apiKey}`
        console.log(queryString)

        // queryString = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`

        let ignore = false
        const controller = new AbortController()
        async function fetchSearchResults() {
            setLoading(true)
            let responseBody = {}
            try {
                const response = await fetch(
                    queryString,
                    { signal: controller.signal }
                )
                if (response.status !== 200) {
                    console.log("== status:", response.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await response.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("HTTP request cancelled")
                } else {
                    setError(true)
                    console.error("Error:", e)
                    throw e
                }
            }

            if (!ignore) {
                setArticles(responseBody.articles || [])
                setLoading(false)
            }
        }
        if (query) {
            fetchSearchResults()
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [query, type, domain, country, language])

    return [articles, loading, error]
}

export default useNewsSearch

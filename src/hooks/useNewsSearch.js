import { useEffect, useState } from 'react'

function useNewsSearch(query) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const apiKey = "c0797e4a2d5f0b8d6bacfe8cbd932827"

        //possibly have different combos of api calls here
        let queryString = ""
        queryString = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`

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
    }, [query])

    return [articles, loading, error]
}

export default useNewsSearch

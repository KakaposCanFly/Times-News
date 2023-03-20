import React from 'react'
import { useLocation } from 'react-router'

function Article() {

    const location = useLocation()
    console.log("from: ", location.state)
    const article = location.state
    return (
        <>
            <h1>{article.title}</h1>

        </>
    )
}

export default Article

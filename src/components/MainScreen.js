import React from 'react'

function MainScreen(props) {
    console.log(props.articles)
    return (
        <>
            {/* <h1>This is the Main Screen!</h1> */}
            {props.articles.map((article, idx) => (
                <div key={idx}>{article.title}</div>
            ))}
        </>
    )
}

export default MainScreen
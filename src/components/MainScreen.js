import styled from '@emotion/styled/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import LandingPage from './LandingPage'

const ArticleList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
`

const ArticleBox = styled.li`
    display: flex;
    flex-direction: column;
    margin: 5px;
    border: solid;
    border-width: 4px;
    border-radius: 10px;

    img {
        width: 200px;
        height: 150px;
    }
`

function MainScreen(props) {
    console.log("These are the articles: ", props.articles)
    return (
        <>

            {props.articles.length === 0 ? <LandingPage /> : <ArticleList>
                {props.articles.map((article, idx) => (
                    <Link key={idx} to={`/article/${article.title}`} state={article}>
                        <ArticleBox>
                            {article.urlToImage ? (
                                <img src={article.urlToImage} alt="poster" />
                            ) : <></>}

                            {article.title}

                        </ArticleBox>
                    </Link>

                ))}
            </ArticleList>}
            {/* <h1>This is the Main Screen!</h1> */}
        </>
    )
}

//{{ pathname: `/article/${article.title}`, param: article }}

export default MainScreen
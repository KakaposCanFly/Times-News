import styled from '@emotion/styled/macro'
import React from 'react'
import { Link } from 'react-router-dom'

const InterestAreas = styled.ul`
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
    padding-top: 20px;
`

const Topic = styled.li`
    &:hover{
        cursor: pointer;
    }
    
    img {
        overflow: hidden;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`

function Topics(props) {
    return (
        <>
            <span>
                <InterestAreas>
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("business")
                            props.setQueryParam("business")
                        }}><img src="https://www.w3schools.com/css/paris.jpg" alt="something" /> <p>Business</p></Topic>
                    </Link>

                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("entertainment")
                            props.setQueryParam("entertainment")
                        }}><img src="https://www.w3schools.com/css/paris.jpg" alt="something" /> <p>Entertainment</p></Topic>
                    </Link>

                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("general")
                            props.setQueryParam("general")
                        }}><img src="https://www.w3schools.com/css/paris.jpg" alt="something" /> <p>General</p></Topic>
                    </Link>

                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("health")
                            props.setQueryParam("health")
                        }}><img src="https://www.w3schools.com/css/paris.jpg" alt="something" /> <p>Health</p></Topic>
                    </Link>

                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("science")
                            props.setQueryParam("science")
                        }}><img src="https://www.w3schools.com/css/paris.jpg" alt="something" /> <p>Science</p></Topic>
                    </Link>

                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("sports")
                            props.setQueryParam("sports")
                        }}><img src="https://www.w3schools.com/css/paris.jpg" alt="something" /> <p>Sports</p></Topic>
                    </Link>

                </InterestAreas>
            </span>
            {/* {props.articles.map((article, idx) => (
                <div key={idx}>{article.title}</div>
            ))} */}
        </>
    )
}

export default Topics
import React from 'react'
import styled from '@emotion/styled/macro'

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
                    <Topic><img src="https://www.w3schools.com/css/paris.jpg" alt="photo"/> <p>All</p></Topic>
                    <Topic><img src="https://www.w3schools.com/css/paris.jpg" alt="photo"/> <p>Business</p></Topic>
                    <Topic><img src="https://www.w3schools.com/css/paris.jpg" alt="photo"/> <p>Entertainment</p></Topic>
                    <Topic><img src="https://www.w3schools.com/css/paris.jpg" alt="photo"/> <p>General</p></Topic>
                    <Topic><img src="https://www.w3schools.com/css/paris.jpg" alt="photo"/> <p>Health</p></Topic>
                    <Topic><img src="https://www.w3schools.com/css/paris.jpg" alt="photo"/> <p>Science</p></Topic>
                    <Topic><img src="https://www.w3schools.com/css/paris.jpg" alt="photo"/> <p>Sports</p></Topic>
                </InterestAreas>
            </span>
            {/* {props.articles.map((article, idx) => (
                <div key={idx}>{article.title}</div>
            ))} */}
        </>
    )
}

export default Topics
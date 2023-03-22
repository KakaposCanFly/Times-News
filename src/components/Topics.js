import styled from '@emotion/styled/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import TopicItem from './TopicItem'

const InterestAreas = styled.ul`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
    padding-top: 20px;
    margin: 20px;
    align-items: center;
    
    border-bottom: 4px double;
    border-top: 2px solid gray;
    height: 50px;
    
`

const Topic = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
color: black;
li {
  text-decoration: none !important;
  color: inherit !important;

  &:hover {
    cursor: pointer;
    text-decoration: none !important;
    color: inherit !important;
  }

  img {
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}
`



function Topics(props) {
    return (
        <>
            <span>
                <InterestAreas>
                    <TopicItem
                        setQuery={props.setQuery}
                        setQueryParam={props.setQueryParam}
                        interest={"business"}
                    />
                    <TopicItem
                        setQuery={props.setQuery}
                        setQueryParam={props.setQueryParam}
                        interest={"entertainment"}
                    />
                    <TopicItem
                        setQuery={props.setQuery}
                        setQueryParam={props.setQueryParam}
                        interest={"general"}
                    />
                    <TopicItem
                        setQuery={props.setQuery}
                        setQueryParam={props.setQueryParam}
                        interest={"health"}
                    />
                    <TopicItem
                        setQuery={props.setQuery}
                        setQueryParam={props.setQueryParam}
                        interest={"science"}
                    />
                    <TopicItem
                        setQuery={props.setQuery}
                        setQueryParam={props.setQueryParam}
                        interest={"sports"}
                    />
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("entertainment")
                            props.setQueryParam("entertainment")
                        }}> <p>Entertainment</p></Topic>
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
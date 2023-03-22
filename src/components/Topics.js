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

    border-bottom: 4px double;
    border-top: 2px solid gray;
    
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
                </InterestAreas>
            </span>
            {/* {props.articles.map((article, idx) => (
                <div key={idx}>{article.title}</div>
            ))} */}
        </>
    )
}

export default Topics
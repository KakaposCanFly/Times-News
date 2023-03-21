import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios'; 
import ReactHtmlParser from 'react-html-parser';
// parse html content using this package
// better than messing with inner html imo

function Article() {
  const location = useLocation();
  const url = location.state.url;

  const [article, setArticle] = useState({
    title: '',
    author: '',
    content: ''
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/scrape?url=${url}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error.message);
      }
    };

    fetchArticle();
  }, [url]);

  return (
    <>
      <h1>{article.title}</h1>
      <h3>{article.byline}</h3>
      <div>{ReactHtmlParser(article.content)}</div>
    </>
  );
}

export default Article;
/*import React from 'react'
import { useLocation } from 'react-router'

// we need axios to make HTTP requests
const axios = require('axios');

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

function Article() {


    
    const location = useLocation()
    let url = location.state.url
    console.log("url: ", url)
    console.log("from: ", location.state)
    const article = location.state

// ...and download the HTML for it, again with axios
    axios.get(url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(article.textContent);
  })


    return (
        <>
            <h1>{article.title}</h1>
            <h3>{article.author}</h3>
            <p>{article.content}</p>
        </>
    )
}

export default Article*/

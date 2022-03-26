import React from 'react';
import './Article.css'

const Article = (props) => {
    const {question, answer} = props.data;
    return (
        <div className='article'>
            <h2>{question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default Article;
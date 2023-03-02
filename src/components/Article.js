import React from "react";

function Article(props) {
    return (
    <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
        <ArticleBody body={props.body} />
        <ArticleActions actions={props.actions} />
        <ArticleAutor author={props.author} />
    </div> 
    );
}

function ArticleBody(props) {
    return (
    <div className="title_block">
        <h2 className="title_state">Article description:</h2>
        <p className="text_state">NVIDIA on Azure is bringing AI, 
        networking, and high-performance computing to the enterprise.</p>
    </div>
    );
}
  
function ArticleActions(props) {
    return (
    <div className="article__actions">
        <button className="article__btn">Read</button>
        <button className="article__btn">Mark as read</button>
        <button className="article__btn">Mark as unread</button>
    </div>
    );
}
  
function ArticleAutor(props) {
    return (
    <div className="article__autor">
        <p className="autor__text">Autor: Mike</p>
        <p className="autor__text">Published: 06.12.2022</p>
        <p className="autor__text">Theme: Video cards</p>
    </div>
    );
}

export default Article;
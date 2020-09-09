import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}
function UserInfo(props){
    return (
        <div>
            <img alt='' src={props.user.avatarUrl}/>
            <div>
                {props.user.name}
            </div>
        </div>
    )
}
function Comment(props){
    return (
        <div className="comment">
            <h1>demo1</h1>
            <UserInfo user={props.author}/>
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
export default Comment;

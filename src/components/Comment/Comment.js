import React from 'react';

const Comment = (props) => {
    const {name , email} = props.comment;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
        </div>
    );
};

export default Comment;
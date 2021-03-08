import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const  showComment =  id => {
        const  url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2>{title}</h2>
            <h4>{id}</h4>
            <h5>{body}</h5>
            <button onClick={() => showComment(id)}>Show comment</button>
        </div>
    );
};

export default Posts;
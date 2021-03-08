import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post,  setPost] = useState([]);
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h3>This is postdetail</h3>
            <h4>{post.title}</h4>
            <h4>{post.body}</h4>
            <br/><br/>
            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;
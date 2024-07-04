import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CreateEditPage() {
    const { post_id } = useParams();
    console.log('post_id: ', post_id);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [keywords, setKeywords] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (post_id) {
            axios.get("http://localhost:5001/post/get-post/" + post_id).then(
                res => {
                    setTitle(res.data.title)
                    setContent(res.data.postcontent)
                    setKeywords(res.data.keywords)
                }
            )
        }
    }, [post_id]);

    const handleSubmit = (e) => {
        const user = JSON.parse(localStorage.getItem("user"))
        e.preventDefault();
        const post = {
            title,
            postcontent: content,
            keywords: keywords,
            userId: user._id
        };
        console.log('Submitting post:', post);
        if (post_id) {

            axios.put("http://localhost:5001/post/update/"+post_id, post).then(res => {
                navigate('/');
            }); return;
        }
        axios.post("http://localhost:5001/post/create", post).then(res => {
            navigate('/');
        })
        // Here you would typically send this data to an API
    };

    return (
        <div className="create-edit-page">
            <h2>{id ? 'Edit Post' : 'Create New Post'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="keywords">Keywords (comma-separated):</label>
                    <input
                        type="text"
                        id="keywords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">
                    {id ? 'Update Post' : 'Create Post'}
                </button>
            </form>
        </div>
    );
}

export default CreateEditPage;
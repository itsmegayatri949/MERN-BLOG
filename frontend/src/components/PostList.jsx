import React from 'react'
import { Link } from 'react-router-dom'

export default function PostList({ posts, onDelete }) {
  if (!posts || posts.length === 0) return <p>No posts yet.</p>

  return (
    <div>
      {posts.map((p) => (
        <div key={p._id} className="card">
          <h3>{p.title}</h3>
          <p className="small">By {p.author || 'Anonymous'} — {new Date(p.createdAt).toLocaleString()}</p>
          <p className="small">{p.body?.slice(0, 200)}{p.body && p.body.length > 200 ? '...' : ''}</p>

          <div className="actions">
            <Link to={`/post/${p._id}`} className="small">View</Link>
            <Link to={`/edit/${p._id}`} className="small">Edit</Link>
            <button onClick={() => onDelete(p._id)} className="secondary small">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
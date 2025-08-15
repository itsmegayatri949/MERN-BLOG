import React from 'react'

export default function PostForm({ initial = { title: '', body: '', author: '' }, onSubmit, submitLabel = 'Save' }) {
  const [title, setTitle] = React.useState(initial.title)
  const [body, setBody] = React.useState(initial.body)
  const [author, setAuthor] = React.useState(initial.author)

  React.useEffect(() => {
    setTitle(initial.title)
    setBody(initial.body)
    setAuthor(initial.author)
  }, [initial])

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({ title, body, author })
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-row">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div className="form-row">
        <label>Body</label>
        <textarea rows={8} value={body} onChange={(e) => setBody(e.target.value)} required />
      </div>

      <div className="form-row">
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <div className="form-row">
        <button type="submit">{submitLabel}</button>
      </div>
    </form>
  )
}
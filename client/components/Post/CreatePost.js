import React from 'react'

export default function (props) {

  const handleSubmit = props.handleSubmit
  const handleTitleChange = props.handleTitleChange
  const handleUrlChange = props.handleUrlChange
  const handleNoteChange = props.handleNoteChange

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Title:
      <input onChange={handleTitleChange} type="text" name="title" />
      </label>
      <label>
      URL:
      <input onChange={handleUrlChange} type="text" name="url" />
      </label>
      <label>
      Note:
      <textarea onChange={handleNoteChange} type="text" name="note" />
      </label>
      <button type="submit" value="Submit">
      Submit
      </button>
    </form>
  )
}

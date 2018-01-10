import React from 'react'

export default function (props) {

  const handleSubmit = props.handleSubmit
  const handleTitleChange = props.handleTitleChange
  const handleUrlChange = props.handleUrlChange
  const handleNoteChange = props.handleNoteChange

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input onChange={handleTitleChange} type="text" name="title" />
      </div>
      <div>
        <label>URL:</label>
        <input onChange={handleUrlChange} type="text" name="url" />
      </div>
      <div>
        <label>Note:</label>
        <textarea onChange={handleNoteChange} type="text" name="note" />
      </div>
      <div>
        <button id="submit" type="submit" value="Submit">Submit</button>
      </div>
    </form>
  )
}

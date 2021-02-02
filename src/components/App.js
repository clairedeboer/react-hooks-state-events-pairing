import React, { useState } from "react"; 
import video from "../data/video.js";

function App() {
  const [upVote, setUpVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes)

  const [hideComments, setHideComments] = useState(true);
  
  const comments = video.comments.map((comment) => {
    return <div key={comment.id}>
      <strong>{comment.user}</strong>
      <div>{comment.comment}</div>
    </div>
  })

  const handleUpVote = () => {
    setUpVote((upVote) => upVote+1)
  }

  const handleDownVote = () => {
    setDownVote((downVote) => downVote-1)
  }

  const handleHideComments = (event) => {
    setHideComments((hideComments) => !hideComments);
    const commentsDiv = document.querySelector(".comments")
    if(commentsDiv.style.display === "none"){
      commentsDiv.style.display = "block";
      // event.target.textContent = 'Hide Comments'
    }else if(commentsDiv.style.display === 'block'){
      commentsDiv.style.display = "none";
      // event.target.textContent = 'Show Comments'
    }
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />

      <h3>{video.title}</h3>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button onClick={handleUpVote}>{upVote}</button>
      <button onClick={handleDownVote}>{downVote}</button>
      <div>
      <button onClick={handleHideComments}>{hideComments ? "Hide Comments" : "Show Comments"}</button>
      </div>
      <div className="comments">
        <h4>{video.comments.length} Comments</h4>
      </div>
        {comments}
    </div>
  );
}

export default App;

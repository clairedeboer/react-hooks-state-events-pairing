import React, { useState } from "react";
import video from "../data/video.js";

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
  const [commentsHidden, setCommentsHidden] = useState(false);

  const comments = video.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <strong>{comment.user}</strong>
        <div>{comment.comment}</div>
      </div>
    );
  });

  const handleUpVotes = () => {
    setUpVotes((upVotes) => upVotes + 1);
  };

  const handleDownVotes = () => {
    setDownVotes((downVotes) => downVotes - 1);
  };

  const handleHideComments = () => {
    setCommentsHidden((prevcommentsHidden) => !prevcommentsHidden);
  };

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
      <button onClick={handleUpVotes}>{upVotes}</button>
      <button onClick={handleDownVotes}>{downVotes}</button>
      <div>
        <button onClick={handleHideComments}>
          {commentsHidden ? "Show Comments" : "Hide Comments"}
        </button>
      </div>
      {!commentsHidden && (
        <div className="comments">
          <h4>{video.comments.length} Comments</h4>
          {comments}
        </div>
      )}
    </div>
  );
}

export default App;

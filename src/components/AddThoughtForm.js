import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "../utilities";

export function AddThoughtForm(props) {
  const { addThought, removeThought } = props;
  const [text, setText] = useState("");

  function handleTextChange({ target }) {
    return setText(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newThought = {
      id: generateId(),
      text,
      expiresAt: getNewExpirationTime(),
    };
    if (newThought.text.length) {
      addThought(newThought);
      setText("");
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

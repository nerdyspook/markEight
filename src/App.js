import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands"
};

let emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will be displayed here");

  function inputChangeHandler(event) {
    let emoji = event.target.value;
    setEmoji(emoji);

    if (emoji in emojiDictionary) {
      setMeaning(emojiDictionary[emoji]);
    } else {
      setMeaning("This emoji is not in our Dictionary");
    }
  }

  function changeHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#1F2937" }}>Know Sign Emojis</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Search your emoji"
      ></input>
      <div style={{ fontSize: "2rem" }}>{emoji}</div>
      <div style={{ fontSize: "1.5rem" }}>{meaning}</div>

      <div id="signs" style={{ color: "#1F2937" }}>
        {emojis.map((emoji) => (
          <span onClick={() => changeHandler(emoji)}>{emoji}</span>
        ))}
      </div>
    </div>
  );
}

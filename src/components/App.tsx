import React from "react";
import emojiList from "../models/emoji-list";
import Entry from "./Entry";

const title = 'Emojipedia';

function App() {
    return (
        <div>
            <h1>
                <span>{title}</span>
            </h1>
            <dl className="dictionary">
                {emojiList.map(emoji => (
                    <Entry
                    key={emoji.id}
                    id={emoji.id}
                    emoji={emoji.emoji}
                    name={emoji.name}
                    meaning={emoji.meaning}
                />
                ))}
            </dl>
        </div>
    );
}

export default App;
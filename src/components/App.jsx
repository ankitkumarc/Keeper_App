import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(note) {
    setNotes((prevnote) => {
      return [...prevnote, note];
    });
  }

  function deleteItem(id) {
    setNotes((prevItems) => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((Noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={Noteitem.title}
            content={Noteitem.content}
            ondelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

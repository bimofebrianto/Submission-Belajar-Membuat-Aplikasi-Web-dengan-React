import React from "react";
import ItemNote from "./NoteItem";

function ListMyNote({ catatan, onDelete }) {
  return (
    <div className="note-list">
      {catatan.map((catatan) => (
        <ItemNote key={catatan.id} id={catatan.id} onDelete={onDelete} {...catatan} />
      ))}
    </div>
  );
}
export default ListMyNote;

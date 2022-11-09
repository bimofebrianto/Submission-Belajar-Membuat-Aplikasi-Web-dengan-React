import React from "react";
import MyNoteItemBody from "./MyNoteItemBody";
import ButtonNoteDelete from "./ButtonNoteDelete";

function ItemNote({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <MyNoteItemBody title={title} body={body} createdAt={createdAt} />
      <ButtonNoteDelete id={id} onDelete={onDelete} />
    </div>
  );
}
export default ItemNote;

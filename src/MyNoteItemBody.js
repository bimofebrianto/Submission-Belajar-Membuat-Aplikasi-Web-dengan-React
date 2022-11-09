import React from "react";

function MyNoteItemBody({ title, body, createdAt }) {
  return (
    <div className="mynote-item__body">
      <h2 className="mynote-item__judul">{title}</h2>
      <p className="mynote-item__catatan">{body}</p>
      <h5 className="mynote-item___tanggalcacatan">{createdAt}</h5>
    </div>
  );
}
export default MyNoteItemBody;

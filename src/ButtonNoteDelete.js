import React from "react";

function ButtonNoteDelete({ id, onDelete }) {
  return (
    // tombol untuk menghapus catatan
    <button className="note-item__deletenote" onClick={() => onDelete(id)}>
      HAPUS
    </button>
  );
}
export default ButtonNoteDelete;

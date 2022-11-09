import React from "react";
import InputMyNote from "./InputMyNote";
import ListMyNote from "./ListMyNote";
import { getData } from "./DataNote";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatan: getData(),
    };
    this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddCatatanHandler({ title, body, createdAt }) {
    this.setState((prevState) => {
      return {
        catatan: [
          ...prevState.catatan,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const catatan = this.state.catatan.filter((catatan) => catatan.id !== id);
    this.setState({ catatan });
  }

  render() {
    if (this.state.catatan == 0) {
      return (
        <div className="note-app">
          <h1>Tambah Catatan</h1>
          <InputMyNote addCatatan={this.onAddCatatanHandler} />
          {/* untuk menampilkan pesan jika tidak ada catatan */}
          <h2>Tidak Ada Catatan</h2>
        </div>
      );
    } else {
      return (
        <div className="note-app">
          <h1>Tulis Catatanmu</h1>
          <InputMyNote addCatatan={this.onAddCatatanHandler} />
          <h2>Daftar Catatan Yang Sudah Di Buat</h2>
          <ListMyNote catatan={this.state.catatan} onDelete={this.onDeleteHandler} />
        </div>
      );
    }
  }
}
export default NoteApp;

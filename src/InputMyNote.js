import React from "react";

class InputMyNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onCreatedAtChangeEventHandler = this.onCreatedAtChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onCreatedAtChangeEventHandler(event) {
    this.setState(() => {
      return {
        createdAt: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <input type="text" placeholder="Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}
export default InputMyNote;

import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    short_name: "",
    long_name: "",
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { short_name, long_name } = this.state;
    const record = { short_name, long_name };
    const conf = {
      method: "post",
      body: JSON.stringify(record),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };
  render() {
    const { short_name, long_name } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">short_name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="short_name"
                onChange={this.handleChange}
                value={short_name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">long_name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="long_name"
                onChange={this.handleChange}
                value={long_name}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Send message
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
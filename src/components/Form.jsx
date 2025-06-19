import axios from "axios";
import { useState } from "react";

export default function Form({ id }) {
  const formInitialData = {
    name: "",
    text: "",
    vote: 1,
  };

  const [formData, setFormData] = useState(formInitialData);

  function postReview() {
    axios
      .post("http://localhost:3000/movies/" + id + "/review", formData)
      .then((res) => {
        console.log(res);
      });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    postReview();
  }

  function handleFormData(event) {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleFormSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="input-name" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleFormData}
              type="text"
              className="form-control"
              id="input-name"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="input-feedback" className="form-label">
              Feedback
            </label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleFormData}
              type="text"
              className="form-control"
              id="input-feedback"
              placeholder="Write your feedback here..."
              required
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="input-vote" className="form-label">
              Vote
            </label>
            <input
              name="vote"
              value={formData.vote}
              onChange={handleFormData}
              type="number"
              className="form-control"
              id="input-vote"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

import React, { Fragment, useState } from "react";

const InputBook = () => {
    const [book_name, setBook_name] = useState("");
    const [author, setAuthor] = useState("");
    const [borrowed_by, setBorrowed_by] = useState("");
    const [borrow_date, setBorrowed_date] = useState("");
    const [expected_return_date, setExpected_return_date] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = [book_name, author, borrowed_by, borrow_date, expected_return_date];
      const response = await fetch("http://localhost:5000/allbooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">All Books List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={book_name}
          value1={author}
          value2={borrowed_by}
          value3={borrow_date}
          value4={expected_return_date}
          onChange={(e) => setBook_name(e.target.value), setAuthor(e.target.value1), 
          setBorrowed_by(e.target.value2), setBorrowed_date(e.target.value3), setExpected_return_date(e.target.value4)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputBook;
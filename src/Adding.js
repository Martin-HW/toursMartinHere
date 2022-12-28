import React from "react";

const Adding = ({ tours, setTours }) => {
  const [showForm, setShowForm] = React.useState(false);
  const [element, setElement] = React.useState({
    id: "",
    name: "",
    info: "",
    image: "",
    price: "",
  });
  const addingElement = (e) => {
    e.preventDefault();
    element.id = tours[tours.length - 1].id + 1;
    element.image =
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg";
    console.log({ element });
    setTours(tours.concat(element));
    setElement("");
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {!showForm && (
        <button
          className="btn-add"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Adding a Tour
        </button>
      )}
      {showForm && (
        <form className="addForm" onSubmit={addingElement}>
          {/* <label htmlFor="id">ID:</label>
          <input
            readOnly
            type="text"
            id="id"
            name="id"
            value={tours && tours[tours.length - 1].id + 1}
          /> */}
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={element && element.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="info">INFO:</label>
          <input
            type="text"
            id="info"
            name="info"
            value={element && element.info}
            onChange={handleChange}
            required
          />
          {/* <label htmlFor="image">IMAGE:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={element && element.image}
            onChange={handleChange}
            required
          /> */}
          <label htmlFor="price">PRICE:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={element && element.price}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-add">
            Adding a Tour
          </button>
        </form>
      )}
    </>
  );
};

export default Adding;

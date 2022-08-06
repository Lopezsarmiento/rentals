import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddRental = () => {
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState(["Parking", "Wifi", "Pet friendly"]);

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const rental = { city, address, rooms, price: "$" + price, tags };

    setIsPending(true);

    fetch("http://localhost:9000/rentals", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(rental),
    }).then(() => {
      console.log("new rental added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="AddRental">
      <h2>Add New Apartment</h2>
      <form onSubmit={handleSubmit}>
        <label>City: </label>
        <input
          type="text"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Address: </label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Rooms: </label>
				<input
          type="number"
          min="1"
          step="any"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          min="1"
          step="any"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {isPending && <button>Adding rental...</button>}
        {!isPending && <button>Add rental</button>}
      </form>
    </div>
  );
};

export default AddRental;

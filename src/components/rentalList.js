import { Link } from "react-router-dom";

const RentalList = ({ rentals }) => {
  const noRentals = rentals.length === 0;
  const handleDelete = (id) => {
    fetch(`http://localhost:9000/rentals/${id}`, {
      method: "DELETE",
    }).then(() => {
      // redirect to list
      window.location.reload(false);
    });
  };

  return (
    <div className="rental-list">
      {noRentals && <h2>No rentals found</h2>}
      {!noRentals && (
        <>
          <h2>Rentals Available</h2>
          {rentals.map((rental) => (
            <div className="rental-preview" key={rental.id}>
              <div>
                <Link to={`/rentals/${rental.id}`}>
                  <h2>{rental.city}</h2>
                  <p>
                    Address: <strong>{rental.address}</strong>
                  </p>
                </Link>
              </div>
              <div>
                <Link to={`/rentals/${rental.id}`}>
                  <p>
                    Rooms: <strong>{rental.rooms}</strong>
                  </p>
                  <p>
                    Price: <strong>{rental.price}</strong>
                  </p>
                </Link>
              </div>
              <div className="rental-tags">
                <Link to={`/rentals/${rental.id}`}>
                  {rental.tags.map((tag) => (
                    <h5 key={tag}>{tag}</h5>
                  ))}
                </Link>
              </div>
              <button onClick={() => handleDelete(rental.id)}>remove</button>
            </div>
          ))}
          <p>
            Match results: <strong>{rentals.length}</strong>
          </p>
        </>
      )}
    </div>
  );
};

export default RentalList;

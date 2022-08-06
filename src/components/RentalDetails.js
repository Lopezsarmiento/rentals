import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./customHooks/useFetch";

const RentalDetails = () => {
  const { id } = useParams();
  const {
    data: rental,
    error,
    isLoading,
  } = useFetch(`http://localhost:9000/rentals/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:9000/rentals/${rental.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="rental-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {rental && (
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
      )}
    </div>
  );
};

export default RentalDetails;

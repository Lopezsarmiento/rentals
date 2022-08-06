import { useState } from "react";

import UseFetch from "./customHooks/useFetch";
import RentalList from "./rentalList";
import Search from "./Search";

const Client = () => {
  // call to mocked server
  const { data, isLoading, error } = UseFetch("http://localhost:9000/rentals");
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
  };

  const search = (rows) => {
    // validate there is data and it has keys
    const columns = rows[0] && Object.keys(rows[0]);

    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  return (
    <div className="client">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <Search handleSearch={handleSearch}></Search>
          <RentalList rentals={search(data)}></RentalList>
        </>
      )}
    </div>
  );
};

export default Client;

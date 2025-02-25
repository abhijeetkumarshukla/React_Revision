import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.error("Error fetching contact details:", error));
  }, [id]);

  return (
    <div>
      <h2>Contact Details</h2>
      <img src={data?.avatar} alt={data?.first_name || "User"} width="100" />
      <p><strong>Name:</strong> {data?.first_name} {data?.last_name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
      <Link to="/contact">Back to Contacts</Link>
    </div>
  );
};

export default Details;

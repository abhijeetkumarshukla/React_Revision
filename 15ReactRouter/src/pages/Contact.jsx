import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []); // Fixed dependency to prevent infinite re-renders

  return (
    <div>
      {data.map((ele) => (
        <div key={ele.id}>
          <h2>{ele.id}</h2>
          <h2>{ele.first_name} {ele.last_name}</h2> 
          <Link to={`/detail/${ele.id}`}>
            <h2>{ele.email}</h2>
          </Link>
          <img src={ele.avatar} alt={ele.first_name} width="50" />
        </div>
      ))}
    </div>
  );
};

export default Contact;

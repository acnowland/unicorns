import "./App.css";
import { useState, useEffect } from "react";
import DisplayUnicorns from "./Components/DisplayUnicorns";
import Form from "./Components/Form";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/fb6e0fd41b5240949f53cf86c6fa363f/unicorns"
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitData = async (newUnicorn) => {
    setData([...data, newUnicorn]);

    const options = {
      method: "POST",
      headers: {
        Accept: "application-json",
        "Content-Type": "application-json",
      },
      body: JSON.stringify(newUnicorn),
    };

    const post = await fetch(
      "https://crudcrud.com/api/fb6e0fd41b5240949f53cf86c6fa363f/unicorns",
      options
    );
    const response = await post.json();
    console.log(response);
  };

  return (
    <div className="App">
      <Form addUnicorn={submitData} />
      <DisplayUnicorns unicorns={data} />
    </div>
  );
}

export default App;

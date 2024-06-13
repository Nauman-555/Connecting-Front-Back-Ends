import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        // axios library has handled all the data therefore, we didn't use res.json etc
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div>
        <h2>hello</h2>
        <p>Jokes:{jokes.length}</p>
        {/*as jokes are in array, that's why we used .length*/}
        {jokes.map((joke, index) => (
          // as we are loopiing jokes, therefore using .map filter
          <div key={joke.id}>
            {/* as we are looping, therefore it's necessary to use keys otherwise how would react knows that rather i will make a repeat loop on all element or same element again and again */}
            <h2>{joke.title}</h2>
            <h2>{joke.Content}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

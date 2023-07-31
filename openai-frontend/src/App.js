import React, { useState, useEffect } from "react";
import "./App.css";
import Results from "./components/Results";
import TextBox from "./components/TextBox";
import axios from "axios";

export const getHeaders = () => {
  const csrfToken = 'MOPfkmTwnrTQVJdsXq5EeQ0ACPexQbylxQvxs20TnYedr6B8anj53AA1IWmA0CLp'; // You can generate or fetch this token dynamically

  return {
    'Content-Type': 'application/json',
    'Cookie': `csrftoken=${csrfToken}`,
  };
};

function App() {
  const [response, setResponse] = useState(null);
  const [savedMessages, setSavedMessages] = useState([]);

  useEffect(() => {
    // Fetch saved messages when the component mounts
    axios
      .get('http://localhost:8000/openai/', {
        headers: getHeaders(),
      })
      .then((res) => setSavedMessages(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-bgcolor h-screen flex flex-col justify-between overflow-y-hidden">
      <div className="pt-10 flex-grow overflow-y-auto">
        <div className="container mx-auto font-normal text-textcolor flex flex-col h-full overflow-y-auto">
          <div className="border border-bordercolor flex-grow overflow-y-auto">
            {/* chat section  */}
            <div className="flex justify-between w-10/12 overflow-y-auto">
              {/* log section  */}
              <Results response={response} savedMessages={savedMessages} />
            </div>
          </div>
        </div>
      </div>
      {/* send message  */}
      <div className="flex justify-between w-10/12 mx-auto">
        <TextBox setResponse={setResponse} />
      </div>
    </div>
  );
}

export default App;
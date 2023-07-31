import React, { useState, useEffect } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import axios from "axios";
import { getHeaders } from "../App";

const TextBox = ({ setResponse }) => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // Added state for error message
  const [fade, setFade] = useState(false);


  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setFade(true);
      }, 3000); // Start fading out after 3 seconds

      setTimeout(() => {
        setErrorMessage(null);
        setFade(false);
      }, 5000); // Remove the error message after 5 seconds
    }
  }, [errorMessage]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      headers: getHeaders(),
    };

    try {
      const response = await axios.post('http://localhost:8000/openai/', { message }, config);
      console.log(response.data);
      setResponse(response.data.message);
      setMessage("");
      setErrorMessage(null); // Clearing error message on successful response
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Setting actual error message
      } else {
        setErrorMessage("An error occurred while sending the message!"); // Generic error message
      }
    }
  };

  return (
    <div className="w-full">
    {errorMessage && (
      <div className={`text-red-500 mb-2 ${fade ? "fade-out" : ""} text-center`}>
        {errorMessage}
      </div>
    )}
    <form className="flex justify-between my-3 border border-bordercolor items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        id="message"
        placeholder="Send a message"
        className="flex-grow p-2.5 text-sm text-textcolor2 bg-bgcolor rounded-lg focus:ring-blue-500 focus:border-blue-500"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button className="w-20 p-2 flex justify-center items-center bg-blue-500 text-white rounded-lg ml-4" type="submit">
        Send
        <RiSendPlaneLine size={20} className="ml-2" />
      </button>
    </form>
  </div>
  );
};

export default TextBox;

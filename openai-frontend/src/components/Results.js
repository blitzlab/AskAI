import React from "react";
import ReactMarkdown from "react-markdown";

const Results = ({ response, savedMessages }) => {
    return (
        <div className="w-full h-full overflow-y-auto">
          <div className="pl-3">
            Saved Messages
            {savedMessages.map((message) => (
              <div key={message.id} className="mb-4">
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}
            <div className="mt-4"> {/* Added margin-top here */}
              Response
              <div className="pl-3">
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Results;

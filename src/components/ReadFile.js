import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReadFile = ({ content, setContent }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getTextFile = async () => {
      try {
        const response = await fetch("./test.txt");
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        console.log(response);
        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.startsWith("text/plain")) {
          throw new Error("Fetched file is not a plain text file");
        }

        const text = await response.text();

        if (text.includes("/*") && !text.includes("*/")) {
          throw new Error("Unmatched comment markers.");
        }

        setContent(text);
      } catch (error) {
        console.log("Error fetching file", error);
      }
    };
    getTextFile();
  }, []);

  const handleClick = () => {
    navigate("/output");
  };

  return (
    <>
      <h1 className="content">Read file</h1>
      <pre className="content">{content}</pre>
      <button className="button" onClick={handleClick}>
        Move to Output page
      </button>
    </>
  );
};

export default ReadFile;

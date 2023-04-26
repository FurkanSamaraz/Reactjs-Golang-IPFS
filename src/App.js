import React, { useState } from "react";
import "./App.css";
function App() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const [zipname, setZipname] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      token,
      url,
      key,
      zipname
    };
    const apiUrl = isPrivate
      ? "http://localhost:8080/ipfsprivate"
      : "http://localhost:8080/ipfspublic";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setResponse(data);
    })
    .catch((error) => console.error(error));
  };

      return (
      <div className="container mt-5">
             <h2>IPFS</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="username" style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} className="col-sm-2 col-form-label">Username:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              style={{ width: '200px' , height: '20px', fontSize: '10px', fontWeight: 'bold',
              color: 'black', backgroundColor: 'white', border: '2px solid black',
              borderRadius: '5px', padding: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              outline: 'none',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              WebkitBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="token" style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} className="col-sm-2 col-form-label">Token:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="token"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              style={{ width: '200px' , height: '20px', fontSize: '10px', fontWeight: 'bold',
              color: 'black', backgroundColor: 'white', border: '2px solid black',
              borderRadius: '5px', padding: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              outline: 'none',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              WebkitBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="url" style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} className="col-sm-2 col-form-label">URL:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              style={{ width: '200px' , height: '20px', fontSize: '10px', fontWeight: 'bold',
              color: 'black', backgroundColor: 'white', border: '2px solid black',
              borderRadius: '5px', padding: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              outline: 'none',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              WebkitBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="key" style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} className="col-sm-2 col-form-label">Key:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="key"
              value={key}
              onChange={(event) => setKey(event.target.value)}
              style={{ width: '200px' , height: '20px', fontSize: '10px', fontWeight: 'bold',
              color: 'black', backgroundColor: 'white', border: '2px solid black',
              borderRadius: '5px', padding: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              outline: 'none',
              transition: 'all 0.5s ease-in-out',
              cursor: 'pointer',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              WebkitBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="zipname" style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} className="col-sm-2 col-form-label">Zip Name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="zipname"
              value={zipname}
              onChange={(event) => setZipname(event.target.value)}
              style={{ width: '200px' , height: '20px', fontSize: '10px', fontWeight: 'bold',
                color: 'black', backgroundColor: 'white', border: '2px solid black',
                borderRadius: '5px', padding: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                outline: 'none',
                transition: 'all 0.5s ease-in-out',
                cursor: 'pointer',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                WebkitBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                MozBoxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
            />
          </div>
        </div>
        <div className="form-group row">
          <legend style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} className="col-form-label col-sm-2 pt-0">Privacy:</legend>
          <div className="col-sm-10">
            <div className="form-check">
                
              <input
              
                className="form-check-input"
                type="radio"
                name="privacy"
                id="public"
                checked={!isPrivate}
                onChange={() => setIsPrivate(false)}
               
              />
              <label className="form-check-label" style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} htmlFor="public">
                Public
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="privacy"
                id="private"
                checked={isPrivate}
                onChange={() => setIsPrivate(true)}
               
              />
              <label className="form-check-label" style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            WebkitTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            MozTextShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
           }} htmlFor="private">
                Private
              </label>
            </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Submit</button>
            {response && (
  <div className="mt-3">
    <h3>Server Response:</h3>
    <pre href={JSON.stringify(response, null, 2)}> {JSON.stringify(response, null, 2)}</pre>
  </div>
)}
            </div>
          </div>
 
        </form>
        
      </div>
    
        );
    
    }
    
    export default App;



    
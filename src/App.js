import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    frontend: false,
    backend: false,
    devops: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (e) => {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getSelectedInterests = () => {
    return Object.entries(interests)
      .filter(([_, value]) => value)
      .map(([key, _]) => key);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <fieldset>
          <legend>Areas of Interest:</legend>
          <label>
            <input 
              type="checkbox" 
              name="frontend" 
              checked={interests.frontend} 
              onChange={handleInterestChange} 
            />
            Frontend
          </label>
          <label>
            <input 
              type="checkbox" 
              name="backend" 
              checked={interests.backend} 
              onChange={handleInterestChange} 
            />
            Backend
          </label>
          <label>
            <input 
              type="checkbox" 
              name="devops" 
              checked={interests.devops} 
              onChange={handleInterestChange} 
            />
            DevOps
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>Thank you for signing up, {name}!</p>
          <p>Your selected interests: {getSelectedInterests().join(', ') || 'None'}</p>
        </div>
      )}
    </main>
  );
}

export default App;
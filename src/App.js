import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollDirection = window.scrollY > 0 ? 'down' : 'up';
      console.log(`User has scrolled ${scrollDirection}`);
      
      // Assuming there's a Twitter feed on the page
      const tweetUsernames = document.querySelectorAll('div[data-testid="tweet"] [data-testid="tweetAuthor"]');
      tweetUsernames.forEach(username => {
        console.log(`Read the username: ${username.innerText}`);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Your React app content */}
    </div>
  );
}

export default App;

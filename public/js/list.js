function addToWishlist(gameId) {
    fetch('/wishlist/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gameId })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      
    })
    .catch(error => console.error('Error:', error));
  }
  
  
  function removeFromWishlist(gameId) {
    fetch('/wishlist/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gameId })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
    })
    .catch(error => console.error('Error:', error));
  }
  
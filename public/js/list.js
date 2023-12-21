const addToWishlist = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);

    const response = await fetch('/wishlist/add', {
      method: 'POST',
      body: JSON.stringify({ gameId: id }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete project');
    }
  }
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
  
  document
  .querySelector('.btn-danger')
  .addEventListener('click', addToWishlist);
async function formHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    const userResponse = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (userResponse.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(userResponse.statusText);
    }
  };
  
document.querySelector('#new-post-form').addEventListener('submit', formHandler);
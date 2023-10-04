const button = document.getElementById('button');

button.addEventListener('click', () => {
  button.disabled = true;

  fetch('http://localhost:3200/vote')
    .then(res => res.json())
    .then((data) => {
      const date = new Date(data.timestamp);
      button.textContent = `Your vote is accepted: ${date}`
    })
    .finally(() => button.disabled = false)
})
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const code = button.previousElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  });
});

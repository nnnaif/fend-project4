function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById('articleURL').value;

  // Invalid url => return, otherwise continue
  if (Client.validateInput(formText) === false) {
    return alert('URL Invalid, should be formatted as http://examle.com');
  }

  fetch('http://localhost:8080/check-article', {
    method: 'POST',
    body: JSON.stringify({ articleURL: formText }),
  })
    .then((res) => res.json())
    .then((jsonRes) => {
      document.getElementById(
        'result',
      ).innerHTML = `<p>Response Messsage: ${jsonRes.status.msg}</p>
                    <p>Article Agreement: ${jsonRes.agreement}</p>
                    <p>Article Subjectivity: ${jsonRes.subjectivity}`;
    });
}

export { handleSubmit };

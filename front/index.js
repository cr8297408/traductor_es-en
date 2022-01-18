const button = document.getElementById('enviar')
button.addEventListener('click', () => {
    const text = (document.getElementById('text').value)
    const data = {texto: text}

    let url = 'http://127.0.0.1:3000'

    let ouput = document.getElementById('output');

    fetch(`${url}/translate`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data.translation);
        alert(`TRADUCCIÓN: ${data.translation}`)
      });
    
    // console.log('click');

})
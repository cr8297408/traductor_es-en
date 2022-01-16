const button = document.getElementById('enviar')
button.addEventListener('click', () => {
    const data = document.getElementById('text').value
    var xhr = new XMLHttpRequest();

    let url = 'http://127.0.0.1:3000'

    let ouput = document.getElementById('output');

    fetch(`${url}/translate`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: { data },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // output += data
      });

    // console.log('click');

})
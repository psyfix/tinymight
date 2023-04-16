const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    // Prevents HTML handling submission
    const files = document.getElementById("files");
    // Creates empty formData object
    const formData = new FormData();
    // Appends value(s) of file input
    for(let i =0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
    }
    // Post data to Node and Express server:
    fetch('http://localhost/api', {
        method: 'POST',
        body: formData, // Payload is formData object
    })
    .then(res => res.json())
    .then(data => console.log(data));
})
document.getElementById('buttonText').addEventListener('click', function() {    
    const inputValue = document.getElementById('inputText').value;
    localStorage.setItem('inputValue', inputValue);
    document.getElementById('inputText').value = '';
})
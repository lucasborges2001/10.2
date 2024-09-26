document.addEventListener('DOMContentLoaded', function() {
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue) {
        document.getElementById('data').textContent = storedValue;
    } else {
        document.getElementById('data').textContent = 'No hay datos almacenados';
    }
});

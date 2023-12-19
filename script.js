document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            // Activar modo oscuro
            document.body.classList.add('dark-mode');
        } else {
            // Desactivar modo oscuro
            document.body.classList.remove('dark-mode');
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-icon').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('menu').style.display = 'block';
    });

    document.getElementById('overlay').addEventListener('click', function() {
        this.style.display = 'none';
        document.getElementById('menu').style.display = 'none';
    });

    document.querySelectorAll('.menuLink').forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('menu').style.display = 'none';
        });
    });
});

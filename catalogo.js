document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('creatina');
    if (infoButton) {
        infoButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = './index.html#creatina';
        });
    }
});

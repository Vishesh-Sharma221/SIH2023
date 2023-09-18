document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.get-started');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open('sih/index.html', '_blank');
        });
    });
});

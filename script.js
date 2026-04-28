// HTML elements ko select karna
const btn = document.getElementById('modeBtn');

// Click event add karna
btn.addEventListener('click', () => {
    // Body par 'dark-theme' class ko toggle (add/remove) karna
    document.body.classList.toggle('dark-theme');
    
    // Button ka text badalna
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});

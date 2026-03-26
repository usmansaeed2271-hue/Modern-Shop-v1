const themeBtn = document.querySelector('#theme-toggle');
const html = document.documentElement; // Better than querySelector('html')

themeBtn.addEventListener('click', () => {
    // 1. Toggle the class
    html.classList.toggle('dark');
    
    // 2. Save the new state to localStorage
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
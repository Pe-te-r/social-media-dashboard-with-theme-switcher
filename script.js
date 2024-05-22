function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const theme=document.getElementById('theme');
    if(document.body.classList.contains('dark-mode')){
        theme.innerText='Dark Mode';
    }else{
        theme.innerText='Light Mode';
    }
       
}

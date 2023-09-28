function clickMenu() {
    if (Menu.style.display == 'flex') {
        Menu.style.display = 'none'
        document.getElementById('button').innerHTML = "menu"
    } else {
        Menu.style.display = 'flex'
        document.getElementById('button').innerHTML = "close"
        
    }}
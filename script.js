function clickMenu() {
    if (Menu.style.display == 'block') {
        Menu.style.display = 'none'
        document.getElementById('button').innerHTML = "menu"
    } else {
        Menu.style.display = 'block'
        document.getElementById('button').innerHTML = "close"
        
    }}
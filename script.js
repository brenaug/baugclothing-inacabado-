

window.onload = function(){
    var icon = document.getElementById('icon');
    var headerdownbar = document.getElementById('headerdownbar');
    var navItem1 = document.getElementById('nav-item1');
    var navItem2 = document.getElementById('nav-item2');
    var navItem3 = document.getElementById('nav-item3');
    var navItem4 = document.getElementById('nav-item4');

    icon.onclick = function(){
        headerdownbar.classList.add('pushAnimation');
        icon.classList.add('disappearAnimation');
        navItem1.classList.add('showElementsAnimation');
        navItem2.classList.add('showElementsAnimation');
        navItem3.classList.add('showElementsAnimation');
        navItem4.classList.add('showElementsAnimation');

    }
}

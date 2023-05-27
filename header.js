function showCroll(){

    let scroll = document.documentElement.scrollTop;
    let divHeader = document.getElementById("divHeader");
    let logo = document.getElementById("logo");
    console.log(scroll);

    if(scroll > 0)
    {
        divHeader.classList.add('minus'); 
        logo.classList.add('minus'); 
    }
    else
    {
        divHeader.classList.remove('minus'); 
        logo.classList.remove('minus'); 
    }
}

window.addEventListener('scroll',showCroll)
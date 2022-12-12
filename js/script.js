
document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}   
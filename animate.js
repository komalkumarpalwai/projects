import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    body: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function scrolls()
{
    window.addEventListener("mousemove",function(dets)
    {
document.querySelector(".scrool").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
functionscrolls();
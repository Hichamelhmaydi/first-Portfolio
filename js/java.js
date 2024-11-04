document.addEventListener('DOMContentLoaded',() => {
    const boutton=document.getElementById('butt');
    const imgbur=document.getElementById('img-bur');
    const burgercontent=document.getElementById('burger-content-id');

    boutton.addEventListener('click',show);
    burgercontent.style.display = "none"; 
    function show(){
        if (burgercontent.style.display === "none") {
            burgercontent.style.display = "block"; 
        } else if (burgercontent.style.display === "block") {
            burgercontent.style.display = "none";
        }
    }
});

const randamColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
        color+=hex[Math.floor(Math.random()*16)];
    return color;
};
let setID;
const startchangingcolor=function(){
    if(!setID)
    setID=setInterval(changebacgroundcolor,1000);
    function changebacgroundcolor(){
    document.body.style.backgroundColor=randamColor();
}};
const stopchangingcolor=function(){
    clearInterval(setID);
   setID=null;
};
document.getElementById('start').addEventListener('click',startchangingcolor);
document.getElementById('stop').addEventListener('click',stopchangingcolor);
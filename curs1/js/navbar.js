document.addEventListener("DOMContentLoaded",function(){
    window.addEventListener('scroll',function(){
        if(window.scrollY>400){
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height=document.querySelector('.navbar').offsetHeight;
            this.document.body.style.paddingTop=navbar_height+'px';
        } else{
            document.getElementById('navbar_top').classList.remove('fixed-top');
            this.document.body.style.paddingTop='0';
        }
    });
});
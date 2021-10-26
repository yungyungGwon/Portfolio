/*document.querySelectorAll('burger_icon').forEach((burgericon)=>{
    burgericon.addEventListener('click',function(){
        alert("success");
    });
});
*/
/*
https://fennecfox-dev.tistory.com/5 참고 블로그
*/
window.onload = function(){
    var burgerIcon = document.getElementById('burger_icon');
    var closeIcon = document.getElementById('close_icon');
    var hamburger_slide = document.getElementById('hamburger_slide');
    
    burgerIcon.addEventListener('click', function(){
        burgerIcon.style.display = "none";
        closeIcon.style.display = "block";
        hamburger_slide.style.display = "block";
    });
    closeIcon.addEventListener('click', function(){
        burgerIcon.style.display = "block";
        closeIcon.style.display = "none";
        hamburger_slide.style.display = "none";
    })
}
/*
(function($){
    $(document).ready(function(){

    });
})
*/
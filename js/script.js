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
    const hamburger_btn = document.getElementById('burger_icon');
    const close_btn = document.getElementById('close_icon');
    const gnb_menu = document.querySelector('.gnb');

    hamburger_btn.addEventListener('click', function(){
        gnb_menu.classList.toggle('active');
        hamburger_btn.classList.toggle('active');
        close_btn.classList.toggle('active'); 
    });
   close_btn.addEventListener('click', function(){
        gnb_menu.classList.toggle('active'); 
        hamburger_btn.classList.toggle('active');
        close_btn.classList.toggle('active');
    });

    const tabList = document.querySelectorAll('.gnb_list li');

    Array.prototype.forEach.call(tabList, function(list){
        list.children[0].addEventListener('click', function(e){
            e.preventDefault();
            const tabContent = document.querySelectorAll('.content-class .content');
            const tabNum = this.getAttribute('data-tabnum');

            Array.prototype.forEach.call(tabContent, function(cont, i){
                cont.style.display = 'none';
                tabList[i].className = 'btn'; 
            });
            tabContent[tabNum].style.display = 'block';

            if(list.className.indexOf('checked')== -1){
                list.className = 'btn checked';
            }
        });
    });

}
/*
window.onload = function(){
    var burgerIcon = document.getElementById('burger_icon');
    var closeIcon = document.getElementById('close_icon');
    var hamburger_slide = document.getElementById('hamburger_slide');
    var windoWidth = window.innerWidth;
    
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
}*/
/*
(function($){
    $(document).ready(function(){

    });
})
*/
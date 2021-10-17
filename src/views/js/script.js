const menuList = document.querySelectorAll('.gnb_menu li');
//querySelectAll : 특정 css선택자를 가진 모든 요소를 배열로 가져오는 method


Array.prototype.forEach.call(menuList, function(list){
    list.children[0].addEventListener('click', function(e){
        
    })
})
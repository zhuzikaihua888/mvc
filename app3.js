$Square=$('#app3 .square')

$Square.on('click',()=>{
    //如果有则加上 没有加删除
    $Square.toggleClass('active')
})
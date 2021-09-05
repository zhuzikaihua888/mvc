  //实现第二个功能
  const $tab=$('#app2 .tab');
  const $content=$('#app2 .content');
  $tab.on('click','li',(e)=>{
 //li元素
  const $li=$(e.currentTarget)
 //$li.addClass('selected');
 const index=$li.index()
 $content.children()
 .eq(index).addClass('active')
 .siblings().removeClass('active')
 })

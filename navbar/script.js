 const barBtn= document.querySelector('.sidebar-toggle')
 const CloseBtn= document.querySelector('.close-btn')
 const sidebar=document.querySelector('.sidebar')
 barBtn.addEventListener('click',toggleSidebar)
 CloseBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
 })
 function toggleSidebar(){
    sidebar.classList.toggle('show-sidebar')
 }
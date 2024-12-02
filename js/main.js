document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.add('sidebar--active');
  document.querySelector('.sidebarOverlay').classList.add('sidebarOverlay--active')
})

document.querySelector('.sidebarOverlay').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('sidebar--active');
  document.querySelector('.sidebarOverlay').classList.remove('sidebarOverlay--active')
})

const mainHeader = document.querySelector('.main__header');

document.addEventListener('DOMContentLoaded', contentHeight)
window.addEventListener('resize', contentHeight)


function contentHeight() {
  if(mainHeader) {
    const mainHeaderHeight = mainHeader.clientHeight;
    const mainContent = document.querySelector('.main-content');
  
    mainContent.style.height = `calc(100% - ${mainHeaderHeight}px)`;
  } else {
    mainContent.style.height = '100%'
  }
}
const W = window
export default function scrollTop(scrolltop) {
  function cb() {
    if(this.scrollY >= 200) {
      scrolltop.classList.add('show-scroll')
    } else {
      scrolltop.classList.remove('show-scroll')
   } 
  }
  
  W.addEventListener('scroll', cb)
}
export default function hideLastLine(...items) {
  items.forEach( el => {
    el.forEach( (item, index) => {
      index === el.length -1
       ? item.querySelector(".line").style.display = "none"
       : item.querySelector(".line").style.display = "block"
    })
  })
}
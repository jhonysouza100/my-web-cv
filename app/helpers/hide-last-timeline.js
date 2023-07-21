export default function hideLastTimeline(...items) {
  // console.log(items)
  items.forEach( el => {
    el.forEach( (item, index) => {
      index === el.length -1
       ? item.querySelector(".line").style.display = "none"
       : item.querySelector(".line").style.display = "block"
    })
  })
}
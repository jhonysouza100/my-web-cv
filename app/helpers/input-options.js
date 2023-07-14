export default function inputOptions(inputs) {
  for(let el of inputs) {
    el.setAttribute("maxlength", "30")
    el.addEventListener('submit', e => e.preventDefault())
  }
}
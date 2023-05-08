export default function formInputMaxLenght(inputs) {
  for(let el of inputs) {
    el.setAttribute("maxlength", "38")
  }
}
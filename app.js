const labels = document.querySelectorAll('.form-control label')

// create a new array and the items within the new array are going to come from the function inside the map method. and the function will grab from the array that the function calls

// map ---> defined function ---> defined array  ---> defined function grabs items from the defined array ---> map() creates a new array with those items

labels.forEach(function(label) {
    label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms" >${letter}</span>`)
    .join("");
})

const isSquare = function(n) {
    if(Number.isInteger(Math.sqrt(n))) {
      return true;
    } else {
      return false
    }
}
console.log(isSquare(25))
  
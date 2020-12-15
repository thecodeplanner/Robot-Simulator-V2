document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  let ul = document.querySelector('#moves-container')

  document.addEventListener('keydown', function(event) {
    console.log(event.key)
    let arrowKey = document.createElement('li')
    if (event.key === "ArrowDown") {
        arrowKey.textContent = "down"
        ul.append(arrowKey)
    }
    else if (event.key === "ArrowUp") {
      arrowKey.textContent = "up"
      ul.append(arrowKey)
    }
    else if (event.key === "ArrowLeft") {
      arrowKey.textContent = "left"
      ul.append(arrowKey)
    }
    else if (event.key === "ArrowRight") {
      arrowKey.textContent = "right"
      ul.append(arrowKey)
    }
    
  })

  const button = document.querySelector("#move-button")

  // button.addEventListener("click", function(event){
  //  let first = ul.querySelector("li")
  //   move(first.textContent)
  //   first.remove()
  // })
  
  ul.addEventListener("click", function(event){
    if (event.target.tagName === "LI"){
      event.target.remove()
    }
  })

  button.addEventListener("click", function(event){
    
    const interval = setInterval(function(){
      let first = ul.querySelector("li")
      if (first){
        move(first.textContent)
        first.remove()
      }
      else {
        clearInterval(interval)
      }
    }, 500)
     
   
   })

});

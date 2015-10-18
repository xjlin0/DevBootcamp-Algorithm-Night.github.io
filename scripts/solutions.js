// wait for page load
document.addEventListener('DOMContentLoaded', function() {
  var main = new Main()
})

function Main() {
  var self = this
  this.click = document.addEventListener('click', function(e) {
    self.handleClick(e)
  })

  this.handleClick = function( e ) {
    if (e.target.className == 'person') {
      e.target.nextElementSibling.style.display = 'block'
    } else if (e.target.className == 'hide-answer') {
      console.log(e.target.parentElement.style.display = 'none')
    }
  }
}
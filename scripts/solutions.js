// wait for page load
document.addEventListener('DOMContentLoaded', function() {
  var main = new Main()
})

function Main() {
  var self = this
  this.click = document.addEventListener('click', function(e) {
    self.handleClick(e)
  })

  //
  this.handleClick = function(e) {
    if (e.target.className == 'person') {
      e.target.nextElementSibling.style.display = 'block'
    } else if (e.target.className == 'hide-answer') {
      console.log(e.target.parentElement.style.display = 'none')
    } else if (e.target.id) {
      if (e.target.id == 'all') {
        self.showQuestions()
      } else {
        self.hideAllExcept(e.target.id)
      }
    }
  }

  this.showQuestions = function() {
    var questions = document.querySelectorAll('.question')
    for (var i = 0; i < questions.length; i++) {
      questions[i].style.display = 'block'
    }
  }

  this.hideAllExcept = function(className) {
    var questions = document.querySelectorAll('.question')
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].classList.contains(className)) {
        questions[i].style.display = 'block'
      } else {
        questions[i].style.display = 'none'
      }
    }
  }

}
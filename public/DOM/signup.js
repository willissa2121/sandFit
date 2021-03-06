// console.log('looping')



$("#signup-button").on('click', function () {
  let username = $("#userEmail").val().trim()
  let userFirstName = $("#firstName").val().trim()
  localStorage.setItem('username', username)
  localStorage.setItem('userFirstName', userFirstName)
})

$("#login-button").on('click', function () {
  console.log('checked')
  let username = $("#loginEmail").val().trim()
  localStorage.setItem('username', username)
})

$("#login-fail-button").on('click', function () {
  console.log('checked')
  let username = $("#loginEmail").val().trim()
  localStorage.setItem('username', username)
})

$("#surveyForm").on('submit', function (e) {
  e.preventDefault()
  let bigData = {
    username: localStorage.getItem('username'),
    weight: $("#weight").val().trim(),
    height: $("#height").val().trim(),
    age: $("#age").val().trim(),
    gender: $("#gender").val().trim(),
    goal: $("#goalWeight").val().trim()
  }
  console.log(localStorage.getItem('username'))

  $.post('/survey', bigData, function (data) {
    location.href = "/dashboard"
  })
})

$("#password-redirect").on('click', function () {
  $.post('/password', function (data) {
    location.href = "/password"
  })
})





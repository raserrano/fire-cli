const { exec } = require('child_process')
const { Given, When, Then } = require('@cucumber/cucumber')

Given('user executes tool', function () {
  const out = exec('fire-cli')
  console.log(out)
})

Given('add an income', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Given('a category', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When('the command is processed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('output is {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

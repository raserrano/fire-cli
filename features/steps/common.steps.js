import { Given, When, Then, World } from '@cucumber/cucumber'
import { assert } from 'chai'

import { promisify } from 'node:util'
import child_process from 'node:child_process'

import { Expense, Income } from '#models/money_event.js'
const exec = promisify(child_process.exec)

Given(/user executes tool with (.*?) option/, async function (action) {
  let cmd
  switch (action) {
    case 'add':{
      cmd = (this.category === null) ?
        `fire-cli add "${this.amount}"` :
        `fire-cli add "${this.amount}" -c ${this.category}`
      const resp = await exec(cmd)
      break
    }
    default:{

    }
  }
})

Given(/user wants to add an (income|expense)/, function (type) {
  this.amount = type === 'income' ? 100 : -100
  this.isIncome = type === 'income'
})

Given('a the category is {string}', function (category) {
  this.category = category
})

When('the command is processed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then(/output is "(.*?)"/, function (match) {
  const event = this.isIncome ? new Income(this.amount, this.category) : new Expense(this.amount, this.category)
  assert(event.save() === match, `There was a problem saving the event ${JSON.stringify(event)}`)
})

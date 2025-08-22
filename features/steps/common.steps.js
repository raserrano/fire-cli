import { Given, When, Then, world } from '@cucumber/cucumber'

import { promisify } from 'node:util'
import child_process from 'node:child_process'

import { Expense } from '#models/money_event.js'
const exec = promisify(child_process.exec)

Given(/user executes tool with (.*?) option/, async (action) => {
  const income = world.income
  switch (action) {
    case 'add':{
      await exec(`fire-cli add ${income.getAmount()}`)
      break
    }
    default:{

    }
  }
  console.log(await exec(`fire-cli ${action}`))
})

Given('user wants to add an income', async () => {
  const income = new Expense(100)
  world.income = income
})

Given('a the category is {string}', async (category) => {
  const income = world.income
  income.setCategory(category)
})

When('the command is processed', async () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('output is {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

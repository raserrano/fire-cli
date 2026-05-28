import { Given, When, Then } from '@cucumber/cucumber'
import { assert } from 'chai'

import { promisify } from 'node:util'
import child_process from 'node:child_process'
import * as readline from 'node:readline'

import { Expense, Income } from '#models/money_event.js'
import * as encrypt from '#utils/encrypt.js'
const exec = promisify(child_process.exec)

Given(/user executes tool with "(.*?)" option/, async function (action) {
  let cmd
  switch (action) {
    case 'add':{
      cmd = (this.category === null)
        ? `fire-cli add "${this.amount}"`
        : `fire-cli add "${this.amount}" -c ${this.category}`
      this.resp = await exec(cmd)
      break
    }
    case '--version':{
      cmd = `fire-cli ${action}`
      this.resp = await exec(cmd)
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

When('version is printed in the stdout', function () {
  assert(this.resp.stdout, 'There was a problem getting version')
})

Then(/output is "(.*?)"/, function (match) {
  const event = this.isIncome ? new Income(this.amount, this.category) : new Expense(this.amount, this.category)
  assert(event.save() === match, `There was a problem saving the event ${JSON.stringify(event)}`)
})

Then(/version is "(.*?)"/, function (version) {
  assert(this.resp.stdout.replace('\n', '') == version, 'There was a problem getting version')
})

Given(/user wants to (encrypt|decrypt) data file/, function (action) {
  console.log(`I'm going to ${action} the data file`)
})

Then(/user is asked for password to (encrypt|decrypt) file/, function (action) {
  this.password = 'secret123'
})

Then(/the file is (encrypted|decrypted) with the given password/, function (action) {
  console.log(`The password is ${this.password}`)
  encrypt.encryptFile('./data/test.enc', this.password)
})

Then('data is loaded into memory\\/session', function () {
  this.data = encrypt.decryptFile('./data/test.enc.enc', this.password)
})

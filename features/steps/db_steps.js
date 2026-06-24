import { Given, When, Then } from '@cucumber/cucumber'
import { assert } from 'chai'

import { JSONFilePreset } from 'lowdb/node'
import { Expense, Income } from '#models/money_event.js'

Given('there is no file present', async function () {
  this.obj = new Income(this.amount, this.category, 'data/does-not-exist.json', { events: []})
});

Given('existing file is empty', async function () {
  this.obj = new Income(this.amount, this.category, 'data/does-exist.json', {})
  console.log(this.obj)
});

Given('file has incorrect structure', async function () {
  this.obj = new Income(this.amount, this.category, 'data/does-exist.json', { transactions: []})
});

Given(/user wants to add a transaction/, async function () {
  this.result = await this.obj.save()
})

Given(/error is displayed/, async function () {
  console.log(this.result, JSON.stringify(this.obj))
})
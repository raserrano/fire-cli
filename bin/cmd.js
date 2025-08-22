#!/usr/bin/env node
import { Command } from 'commander'
// import { update, add, listCategories, listCategoryItems } from "../src/utils.js";
import { Expense } from '#models/money_event.js'

// Create a new Command Program
const program = new Command()
const description = 'Tool to track income/spending for FIRE chart'
// TODO: see if I cn read package.json to read app name and version

// Log the usage of the command to the console
const usage = (msg = description) => {
  console.log(`\n${msg}\n`)
}

const addEvent = (options) => {
  const event = new Expense(options.amount)
}

// Create a new Program
program
  .name('fire-cli') // Set the name of the program
  .description(description) // Set the description
  .version('1.0.0') // Set the version

// Create a command for listing categories by IDs
program
  .command('add')
  .description('Add money income/spend and category')
  .option('-a, --amount', 'Amount')
  .option('-c, --category', 'Category')
  .action(addEvent(program.opts()))

// Parse the arguments from process.argv
program.parse()

const options = program.opts()

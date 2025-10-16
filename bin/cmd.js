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

// Create a new Program
program
  .name('fire-cli') // Set the name of the program
  .description(description) // Set the description
  .version('0.0.1', '-v, --version', 'output the current version');

program
  .command('add')
  .description('Add money income/spend and category')
  .argument('<number>', 'Amount to add as income')
  .option('-c, --category <string>', 'Category')
  .action((amount, options) => {
    const event = (options.category !== null)
      ? new Expense(amount, options.category)
      : new Expense(amount)
    event.save()
  })

program
  .command('report')
  .description('Generate report')
  .option('-t, --type "<string>"', 'Type cli/html')
  .action((amount, options) => {
    const event = (options.type !== 'cli')
    event.report()
  })

// Parse the arguments from process.argv
program.parse()

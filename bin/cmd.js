#!/usr/bin/env node
import { Command } from 'commander'
// import { update, add, listCategories, listCategoryItems } from "../src/utils.js";

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
  .version('1.0.0') // Set the version

// Create a command for listing categories by IDs
program
  // Set the command name
  .command('add')
  // Set the command description
  .description('Add money income/spend and category')
  // Set the category to be required
  .argument('<CATEGORY>', 'Product Category')
  // Set the argument AMOUNT to be required
  .argument('<AMOUNT>', 'Money')
  // Set the action to be executed when the command is run
  .action(
    console.log('income registed for category')
  )

// Parse the arguments from process.argv
program.parse()

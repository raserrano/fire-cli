@db @list
Feature: User can see list of transactions
  There is a working data file with proper structure
  Need to verify the file is present, is not empty.
  Data file follows expected structure.

Scenario: Use execute tool to see list
  Given user executes tool with "list" option
  Then output is "[]"

Scenario: Use execute tool to see list
  Given there is an expense of 20
  When user executes tool with "list" option
  Then output is "[ 'Default | Expense | -20' ]"

Scenario: Use execute tool to see list
  Given there is an income of 25
  When user executes tool with "list" option
  Then output is "[ 'Default | Income | 25' ]"

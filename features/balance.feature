@db @balance
Feature: User can see balance
  There is a working data file with proper structure
  Need to verify the file is present, is not empty.
  Data file follows expected structure.

Scenario: Use execute tool to see balance
  Given user wants to see balance
  When user executes tool with "balance" option
  Then output is "Account balance is 0"

Scenario: Use execute tool to see balance
  Given user wants to see balance
  And there is an expense of 20
  When user executes tool with "balance" option
  Then output is "Account balance is -20"

Scenario: Use execute tool to see balance
  Given user wants to see balance
  And there is an income of 25
  When user executes tool with "balance" option
  Then output is "Account balance is 25"

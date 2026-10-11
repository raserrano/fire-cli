@db @clean
Feature: User can see list of transactions
  There is a working data file with proper structure
  Need to verify the file is present, is not empty.
  Data file follows expected structure.

Scenario: Use execute tool to see 1 transaction details
  Given there is an income of 20
  When user executes tool with "clean" option
  Then output is "All records removed"
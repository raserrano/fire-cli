@db @visuals
Feature: User can see list of transactions
  There is a working data file with proper structure
  Need to verify the file is present, is not empty.
  Data file follows expected structure.

Scenario: Use execute tool to see 1 transaction details
  Given there is an expense of 20
  When user executes tool with "list" option
  And selects the 1 option of the list
  Then output should match
  """
┌─────────┬───────────┬───────────┬────────┬──────┐
│ (index) │ category  │ type      │ amount │ tags │
├─────────┼───────────┼───────────┼────────┼──────┤
│ 0       │ 'Default' │ 'Expense' │ '-20'  │ []   │
└─────────┴───────────┴───────────┴────────┴──────┘
  """
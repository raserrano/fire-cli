@db @visuals
Feature: User can see list of transactions
  There is a working data file with proper structure
  Need to verify the file is present, is not empty.
  Data file follows expected structure.

Scenario: Use execute tool to see 1 transaction details
  Given there is an income of 20
  And the category is "Food"
  When selects the 0 option of the list
  Then output should match
  """
  ┌──────────┬───────────┐
  │ (index)  │ Values    │
  ├──────────┼───────────┤
  │ category │ 'Default' │
  │ type     │ 'Income'  │
  │ amount   │ '20'      │
  │ tags     │           │
  └──────────┴───────────┘
  """
Feature: User can add income
	There is a working data file with proper structure
	Need to verify the file is present, is not empty.
	Data file follows expected structure.

@mvp @file
Scenario: Use execute tool to add income
	Given user wants to add an income
	And a the category is "Food"
	When user executes tool with "add" option
	Then output is "income registered for category 'Food'"

@mvp @file
Scenario: Use execute tool to add expense
	Given user wants to add an expense
	And a the category is "Credit"
	When user executes tool with "add" option
	Then output is "expense registered for category 'Credit'"
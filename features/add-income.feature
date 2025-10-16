Feature: User can add income

@mvp
Scenario: Use execute tool to add income
	Given user wants to add an income
	And a the category is "Food"
	When user executes tool with add option
	Then output is "income registered for category 'Food'"

@mvp
Scenario: Use execute tool to add expense
	Given user wants to add an expense
	And a the category is "Credit"
	When user executes tool with add option
	Then output is "expense registered for category 'Credit'"
Feature: User can add income

@mvp
Scenario: Use execute tool to add income
	Given user wants to add an income
	And a the category is "Food"
	When user executes tool with add option
	Then output is "income registed for category"
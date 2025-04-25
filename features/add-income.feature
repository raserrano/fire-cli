Feature: User can add income

Scenario: Use execute tool to add income
	Given user executes tool
	And add an income
	And a category
	When the command is processed
	Then output is "income registed for category"
	

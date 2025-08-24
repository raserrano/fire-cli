Feature: User runs application for the first time

Scenario: User initializes the tool
	Given user executes tool with "report" option
	When there is no configuration
	Then user is promted for initialization wizard

Scenario: User checks version of the tool
	Given user executes tool with "--version" option
	When version is printed in the stdout
	Then output is "0.0.1"
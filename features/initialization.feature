Feature: User runs application for the first time

Scenario: User initializes the tool
	Given user executes tool
	When there is no configuration
	Then user is promted for initialization wizard

Scenario: User checks version of the tool
	Given user executes tool with "-V" option
	When version is printed in the stdout
	Then version matches the released version
@skip
Feature: User can read and write to DB
	There is a working data file with proper structure
	Need to verify the file is present, is not empty.
	Data file follows expected structure.

@mvp @file @db
Scenario: Use execute tool to add income when there is no file
	Given there is no file present
	When user wants to add a transaction
	Then error is displayed

@mvp @file @db
Scenario: Use execute tool to add income when there is an empty file
	Given existing file is empty
	When user wants to add a transaction
	Then error is displayed

@mvp @file @db
Scenario: Use execute tool to add income when there is a file with incorrect structure
	Given file has incorrect structure
	When user wants to add a transaction
	Then error is displayed

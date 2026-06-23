Feature: User can encrypt file

@skip
Scenario: Use encrypts data file
	Given user executes tool with "encrypt" option
	When user is asked for password to encrypt file
	Then the file is encrypted with the given password

@skip
Scenario: Use decrypts data file
	Given user executes tool with "decrypt" option
	When user is asked for password to decrypt file
	Then the file is decrypted with the given password
	And data is loaded into memory/session
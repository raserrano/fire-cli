Feature: User can encrypt file

@mvp
Scenario: Use encrypts data file
	Given user wants to encrypt data file
	When user executes tool with "encrypt" option
	Then user is asked for password to encrypt file
	And the file is encrypted with the given password

@mvp
Scenario: Use decrypts data file
	Given user wants to decrypt data file
	When user executes tool with "decrypt" option
	Then user is asked for password to decrypt file
	And the file is decrypted with the given password
	And data is loaded into memory/session
Feature: NewTour Automation

Description: Automation of New tours Website. 

Scenario: NewTours Website validation
Given User Opens Browser
When User goes to newtours website
Then NewTours website loads

Scenario: User able to login 
Given User on Webpage 
When User enters username 
And User enters password
And User clicks login
Then User is logged in 

Scenario Outline: User unable to login with invalid credentials 
Given User on Webpage for negative testing
When User enters invalid <username> 
And User enters invalid <password>
And User clicks login for negative testing
Then user is unable to login

Examples:
 | username  | password   |
 | selenium  | nonsense   |
 | java      | abcde      |
 | shomir    | uddin      |
 | eclipse   | zyxcfe     |
 
Scenario: User chooses One Way
Given User is logged in to choose one way 
When User Clicks One Way
Then One Way is selected

Scenario: User Selects four passengers 
Given User is logged in to choose four passengers
When User selects number of passengers as four
Then four passengers is selected 


 
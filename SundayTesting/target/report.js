$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/newtours.feature");
formatter.feature({
  "name": "NewTour Automation",
  "description": "Description: Automation of New tours Website. ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "NewTours Website validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Opens Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_Opens_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User goes to newtours website",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_goes_to_newtours_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NewTours website loads",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.newtours_website_loads()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User on Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_on_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_enters_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_enters_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_clicks_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User unable to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on Webpage for negative testing",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters invalid \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User enters invalid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks login for negative testing",
  "keyword": "And "
});
formatter.step({
  "name": "user is unable to login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "selenium",
        "nonsense"
      ]
    },
    {
      "cells": [
        "java",
        "abcde"
      ]
    },
    {
      "cells": [
        "shomir",
        "uddin"
      ]
    },
    {
      "cells": [
        "eclipse",
        "zyxcfe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User unable to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on Webpage for negative testing",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_on_Webpage_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid selenium",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_selenium()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid nonsense",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_nonsense()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login for negative testing",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_clicks_login_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is unable to login",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.user_is_unable_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User unable to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on Webpage for negative testing",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_on_Webpage_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid java",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_java()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid abcde",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_abcde()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login for negative testing",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_clicks_login_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is unable to login",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.user_is_unable_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User unable to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on Webpage for negative testing",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_on_Webpage_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid shomir",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_shomir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid uddin",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_uddin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login for negative testing",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_clicks_login_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is unable to login",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.user_is_unable_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User unable to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on Webpage for negative testing",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_on_Webpage_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid eclipse",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_eclipse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid zyxcfe",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_enters_invalid_zyxcfe()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login for negative testing",
  "keyword": "And "
});
formatter.match({
  "location": "NewTours.user_clicks_login_for_negative_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is unable to login",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.user_is_unable_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User chooses One Way",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is logged in to choose one way",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_is_logged_in_to_choose_one_way()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks One Way",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_Clicks_One_Way()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "One Way is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.one_Way_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Selects four passengers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is logged in to choose four passengers",
  "keyword": "Given "
});
formatter.match({
  "location": "NewTours.user_is_logged_in_to_choose_four_passengers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects number of passengers as four",
  "keyword": "When "
});
formatter.match({
  "location": "NewTours.user_selects_number_of_passengers_as_four()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "four passengers is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTours.four_passengers_is_selected()"
});
formatter.result({
  "status": "passed"
});
});
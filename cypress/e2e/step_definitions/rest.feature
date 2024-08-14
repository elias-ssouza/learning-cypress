Feature: API Testing

  Scenario: Successful GET request
    Given I make a GET request to "https://jsonplaceholder.typicode.com/posts"
    Then the response status should be 200

  Scenario: Unsuccessful GET request with 404
    Given I make a GET request to "https://jsonplaceholder.typicode.com/comments/501"
    Then the response status should be 404

  Scenario: Successful POST request
    Given I make a POST request to "https://jsonplaceholder.typicode.com/posts" with the following data:
      | userId | id  | title    | body                                |
      | 11     | 101 | testing  | just testing but I will delete it soon |
    Then the response status should be 201

  Scenario: Successful PUT request
    Given I make a PUT request to "https://jsonplaceholder.typicode.com/posts/100" with the following data:
      | title   | body                                |
      | testing | just testing but I will delete it soon |
    Then the response status should be 200

  Scenario: Successful DELETE request
    Given I make a DELETE request to "https://jsonplaceholder.typicode.com/posts/100"
    Then the response status should be 200
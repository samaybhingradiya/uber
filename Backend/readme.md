# /user/register Endpoint

## Description
Registers a new user by storing their personal and login details.

## Method
POST

## Required Data
• fullname.firstname  
  • Must be a string  
  • Must be at least 3 characters long  
• fullname.lastname  
  • Optional string  
  • Must be at least 3 characters if provided  
• email  
  • Must be a valid email format  
  • Must be unique  
• password  
  • Must be at least 6 characters long

## Request Body Example
POST /user/register
Content-Type: application/json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secret123"
}

## Response
• 201 (Created)  
  • Returns a JWT token and user object on success  
• 400 (Bad Request)  
  • Returns validation errors if required fields are missing or invalid

## Detailed Steps
1. Validate the request fields.  
2. Hash the user password.  
3. Save the user in the database.  
4. Generate an authentication token upon successful creation.  

## Error Handling
• If validation fails or any required field is missing, a 400 response is sent with an errors array.  
• During database interactions, an error might occur which should be handled appropriately by the server.

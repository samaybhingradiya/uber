# /user/register Endpoint

## Description
Registers a new user by storing their personal and login details.

## Method
POST

## Required Data
- **fullname.firstname**  
  - Must be a string  
  - Must be at least 3 characters long  
- **fullname.lastname**  
  - Optional string  
  - Must be at least 3 characters if provided  
- **email**  
  - Must be a valid email format  
  - Must be unique  
- **password**  
  - Must be at least 6 characters long

## Request Body Example
```json
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
```

## Response
• 201 (Created)  
  • Returns a JWT token and user object on success  
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "12345",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john@example.com"
    }
  }
  ```
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

# /user/login Endpoint

## Description
Logs in an existing user.

## Method
POST

## Required Data
- **email**  
  - Must be a valid email format  
- **password**  
  - Must be at least 6 characters long  

## Request Body Example
```json
POST /user/login
Content-Type: application/json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

## Response
• 200 (OK)  
  • Returns a JWT token and user object on success  
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "12345",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john@example.com"
    }
  }
  ```
• 401 (Unauthorized)  
  • Returns an error message if the email or password is invalid  

## Detailed Steps
1. Validate the request fields.  
2. Verify email and password.  
3. Return a status of 200 and a token if valid.  

## Error Handling
• If validation fails or credentials are invalid, a 401 response is returned.

# /user/profile Endpoint

## Description
Retrieves the user's profile.

## Method
GET

## Required Data
• None

## Response
• 200 (OK)  
  • Returns the user's profile  
• 401 (Unauthorized)  
  • If the user is not authenticated  

## Example Response
```json
{
  "id": "12345",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com"
}
```

# /user/logout Endpoint

## Description
Logs out the user by invalidating their token.

## Method
GET

## Required Data
• None

## Response
• 200 (OK)  
  • User is successfully logged out  
• 401 (Unauthorized)  
  • If the user is not authenticated  

## Example Response
```json
{
  "message": "Logged out"
}
```

Standard Format for Request and Respond

 API Endpoints
    Create User
    URL: /api/
    Method: POST
    https://bernard-b1fq.onrender.com/api/
    Request Body: JSON object with name and email fields.
    {
    "name":"Dad"
    }
    Response: JSON object with the created user's name and email.
    {
    "name": "Dad",
    "id": "6504c9e347c5a35030bc0b3f"
     }
  
    

    Retrieve User
    URL: /api/:id
    Method: GET
    Response: JSON object with user details based on the provided name.

    Update User
    URL: /api/:id
    Method: PUT
    Request Body: JSON object with updated email field.
    Response: JSON object with a success message and the updated user's name.

    Delete User
    URL: /api/:id
    Method: DELETE
    Response: No content (204) on successful deletion.


Sample useage
get all person
https://hng2a.onrender.com/api
{"id":1,"name":"bernard","email":"bernard@gmail.com"},{"id":2,"name":"Ese","email":"ese@gmail.com"},{"id":3,"name":"Ejiro","email":"ejiro@gmail.com"}

get person by name
https://hng2a.onrender.com/api/Ese

{
    "id": 2,
    "name": "Ese",
    "email": "ese@gmail.com"
}



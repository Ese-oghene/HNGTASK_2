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
   https://bernard-b1fq.onrender.com/api/6504c9e347c5a35030bc0b3f
    Response: JSON object with user details based on the provided id.
      {
      "_id": "6504c9e347c5a35030bc0b3f",
      "name": "Dad",
      "__v": 0
     }
    

    Update User
    URL: /api/:id
    Method: PUT
    https://bernard-b1fq.onrender.com/api/6504c9e347c5a35030bc0b3f
   
    Request Body: JSON object with updated id field.
     {
    "name":"Dada"
     }
    Response: JSON object with a success message and the updated user's name.
     {
      "_id": "6504c9e347c5a35030bc0b3f",
      "name": "Dada",
      "__v": 0
     }
    

    Delete User
    URL: /api/:id
    Method: DELETE
    https://bernard-b1fq.onrender.com/api/6504c9e347c5a35030bc0b3f
    Response: No content (204) on successful deletion.
    User deleted



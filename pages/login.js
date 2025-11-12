export default function login(){
    return(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Data Form</title>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        form {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        div {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 8px;
            box-sizing: border-box; /* This makes padding part of the width */
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #007BFF;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <h2>Simple Data Submission Form</h2>
    <p>This is a basic HTML form.</p>

    <form action="/submit" method="POST">

        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" required>
        </div>

        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="user_email" required>
        </div>

        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="user_password" required>
        </div>

        <div>
            <button type="submit">Submit Data</button>
        </div>

    </form>

</body>
</html>`)
}
# Auth + Role-Based Dashboard

I built this project to understand how login systems actually work in a MERN app: how passwords are stored safely, how JWT tokens work, and how admins get access that normal users don't.

**Live API:** https://auth-role-dashboard.onrender.com

(It's on Render's free plan, so the first request after some idle time can take around a minute to wake up.)

## What it does

- Users can register and log in
- Passwords are hashed with bcrypt before saving, never stored as plain text
- On login, the server returns a JWT token (valid for 7 days)
- Protected routes need this token, otherwise they return 401
- Admin-only routes check the role from the database, so a normal user gets 403
- Admin can see all users and delete a user

## Tech used

Node.js, Express, MongoDB Atlas (Mongoose), JWT, bcryptjs. Deployed on Render. Frontend will be in React (working on it now).

## API routes

| Method | Route | Who can use it |
|---|---|---|
| POST | /api/auth/register | Anyone |
| POST | /api/auth/login | Anyone |
| GET | /api/auth/profile | Logged-in user |
| GET | /api/auth/admin | Admin |
| GET | /api/auth/users | Admin |
| DELETE | /api/auth/users/:id | Admin |

For protected routes, send the token like this: `Authorization: Bearer <token>`

## Things I handled

- Missing fields, fields with only spaces, or wrong types (like a number instead of text) return 400
- Password shorter than 6 characters returns 400
- Email is trimmed and lowercased, so "Kapil@Gmail.com" and "kapil@gmail.com" don't become two accounts
- An invalid MongoDB id returns 400 instead of a server error
- Every controller has try/catch, so unexpected errors return a clean JSON message and the real error only shows in the server logs

## Problems I ran into

- My ISP's DNS couldn't resolve the `mongodb+srv://` connection string, so I switched to the standard `mongodb://` format
- I once forgot `await` before `findOne`, got a Promise instead of the user, and the duplicate email check always passed
- `minlength: 6` in the schema didn't work for passwords because it was checking the hashed password (always 60 characters), so I moved the length check to the controller

## Run it locally

```
git clone https://github.com/kapil-2025/auth-role-dashboard.git
cd auth-role-dashboard/server
npm install
```

Create a `.env` file inside the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Then run:

```
npm start
```

## Status

Backend is done and deployed. Working on the React frontend next.
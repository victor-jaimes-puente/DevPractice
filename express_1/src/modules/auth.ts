import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

// This function compares a plain text password to a hashed password
export const comparePasswords = (password, hash) => {
  // Use bcrypt to compare the plain text password to the hashed password
  return bcrypt.compare(password, hash);
};

// This function hashes a plain text password
export const hashPassword = (password) => {
  // Use bcrypt to hash the plain text password with a salt of 5 rounds
  return bcrypt.hash(password, 5);
};

//creates jwt token
export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

//MIDDLEWARE TO PROTECT API
// This function acts as a middleware to protect certain routes by requiring a valid JWT token.
export const protect = (req, res, next) => {
  // Extract the Authorization header from the request.
  const bearer = req.headers.authorization;

  // If there is no Authorization header, respond with a 401 status and an error message.
  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }
  // If the Authorization header is present, split it into two parts (the "Bearer" prefix and the token itself).
  const [, token] = bearer.split(" ");
  // If the token is not present, log a message and respond with a 401 status and an error message.
  if (!token) {
    console.log("here");
    res.status(401);
    res.send("Not authorized");
    return;
  }
  try {
    // Verify the token using the JWT_SECRET environment variable.
    // If the token is valid, the payload is returned.
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the payload to the request object so that other middleware or route handlers can access it.
    req.user = payload;

    // Log the payload for debugging purposes.
    console.log(payload);
    // Proceed to the next middleware or route handler.
    next();
    return;
  } catch (e) {
    // If an error occurs during token verification, log the error and respond with a 401 status and an error message.
    console.error(e);
    res.status(401);
    res.send("Invalid Token");
    return;
  }
};

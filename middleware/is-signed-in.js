//* When writing a custom middleware function, recall that we want three parameters instead of the usual two parameters our route handlers have been using:

//* req is the request object.
//* res is the response object.
//* next is the third parameter, representing the next function in the long line of middleware and route handlers that a request is processed through.
//* This function’s purpose is to check if a user is signed in and authorized to access certain routes or resources


const isSIgnedIn = (req, res, next) => {
    if (req.session.user) return next();
    res.redirect("/auth/sign-in")
};

module.exports = isSIgnedIn

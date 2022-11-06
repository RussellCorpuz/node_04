require("dotenv").config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`
});

console.log(`${__dirname}/.env.${process.env.NODE_ENV}`);
console.log( "I am " + process.env.MY_NAME, "wilder in " + process.env.MY_CITY, "and I Love " + process.env.MY_LANGUAGE);



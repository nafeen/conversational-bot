/*********************************************************************************************
 *
 * This is where the routeFunction holds the logic of 404 Page render
 *
 ********************************************************************************************* */


/* ============================================================================================
 *
 * TO-DO
 * -----
 * 1 -
 *
/* ============================================================================================ */


// creating an empty array of functions object that will hold all UDF
var functions = {};


// ADDING middlewares and other dependencies
var request         = require('request'); // to capture HTTP requests


// INITIALISING user-defined variables


// ADDING user-defined dependencies


/* ============================================================================================ */
/* Render function definition */
/* ============================================================================================ */

functions.routeFunction  = function (req, res, next) {
  res.render('page404/index.ejs', {
		pageName : '404 Page'
  });
}


/* ============================================================================================ */
/* MODULE.EXPORTS is the object that is returned as a result of a 'require' call */
/* ============================================================================================ */

module.exports = functions;

/*********************************************************************************************/
/*********************************************************************************************/
/**********************************************************************************************
 *
 * THIS SCRIPT HANDLES ROUTING OF DEFAULT APP
 * ------------------------------------------
 * 							Author | Nafeen
 *
 ********************************************************************************************** */


/* ============================================================================================
 *
 * TO-DO
 * -----
 * 1 -	Handle errors conditions
 *
/* ============================================================================================ */


// ADDING middlewares and other dependencies
var express = require('express');
var router 	= express.Router();


// ADDING sub-route functions that render respective views
var defaultView	= require('./routeFunctions/defaultView');
var page404			= require('./routeFunctions/page404');


// ADDING user-defined dependencies


// INITIALISING user-defined variables


/* ============================================================================================ */
/* DEFAULT VIEW */
/* ============================================================================================ */

// capturing the root URL request and routing to default view render function
router.get('/', defaultView.routeFunction);


/* ============================================================================================ */
/* 404 PAGE */
/* ============================================================================================ */

router.get('/*', page404.routeFunction);


/* ============================================================================================ */
/* MODULE.EXPORTS is the object that is returned as a result of a 'require' call */
/* ============================================================================================ */

module.exports = router;

/*********************************************************************************************/
/*********************************************************************************************/
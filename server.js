/**********************************************************************************************
 *
 * THIS SCRIPT CREATES SERVER AND HANDLES ROUTING
 * ----------------------------------------------
 * 								Author | Nafeen
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
var express            =   require('express');
var app                =   express();


app.use('/public', express.static('./apps/default/public'));

// ROUTING for root path 
app.get('/*', require('./apps/default/route.js'))


// ROUTING for views 
app.set('views', [__dirname + '/apps/default/views']);


/* ============================================================================================ */
/* CREATES Server listening on port 3000 and logs message on console */
/* ============================================================================================ */

app.listen(3000, function () {
  console.log('Conversational App listening on port 3000!')
});

/*********************************************************************************************/
/*********************************************************************************************/
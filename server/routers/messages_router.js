let express = require('express');


//Make a new Router
let router = express.Router();

//setup our global messages array
let messages = [];

//we'll use 'router here to configure things much like we use 'app' in server.js


router.delete( '/:index', ( req, res )=>{
    console.log( 'in /messages delete:', req.params.index );
    res.send( 'squeak' );
}) //end delete

router.get( '/', ( req, res )=>{
    console.log( 'in /messages GET' );
    res.send( messages );
}) // end essages

router.post( '/', ( req, res )=>{
    console.log( 'in /messages POST:', req.body );
    messages.push( req.body );
    console.log( messages );
    res.sendStatus( 200 );
}) // end messages POST

module.exports = router;
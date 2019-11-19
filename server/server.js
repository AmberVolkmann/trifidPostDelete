// requires
const express = require( 'express' );
const app = express();
// NEEDED FOR A POST (req.body)
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
// also needed for POST
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
//look for a PORT from the running process,
//if there isn't one (it's underfined or falsey)
//then use our port 5000
const port = process.env.PORT || 5000;

// server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up



// Setup our routers

//When requests come in for /messages send to messagesRouter
const messagesRouter = require('./routers/messages_router');
app.use('/messages', messagesRouter);


const testRouter = require('./routers/test_router');
app.use('/test', testRouter);
var time = require( 'time' );

exports.handler = ( event, context, callback ) => {
    var currentTime = new time.Date();
    currentTime.setTimezone( 'Europe/Amsterdam' );
    console.log( ( currentTime.toString() ) );
    callback( null, {
        statusCode: '200',
        body: 'The time in Zurich is: ' + currentTime.toString()
    } );
};
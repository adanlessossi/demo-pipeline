
exports.handler = (event, context, callback) => {    
    var currentTime = ( new Date() ).toJSON().slice( 0, 19 ).replace( /[-T]/g, ':' );
    console.log('Time is: ==> ', currentTime.toString() );
    callback( null, {
        statusCode: '200',
        body: 'The time in Zurich is: ' + currentTime.toString()
    } );
};
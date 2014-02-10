var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüû";
var to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuu";
var mapping = {};

for(var i = 0, j = from.length; i < j; i++ ) {
    mapping[ from.charAt( i ) ] = to.charAt( i );
}

var normalizeText = function( text ) {

    var array = [];

    for( var i = 0, j = text.length; i < j; i++ ) {

        var c = text.charAt( i );

        if( mapping.hasOwnProperty( text.charAt( i ) ) ) {

            array.push( mapping[ c ] );

        } else {

            array.push( c );
        }
    }

    var textNormalized = array.join( '' );
    
    return textNormalized.toLowerCase();
};
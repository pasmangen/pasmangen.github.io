var GENERATED_PASSWORD_LENGTH = 24; // max 88
var CODES_CARD_CELLS = 40;

var ls = localStorage;

var sumCharCode = function(str) {
    
    var s = 0;
    for( var i = 0; i < str.length; i++ ) {
        s += str.charCodeAt(i);
    }
    return s;
}

var calculateCoordenates = function(e) {
    e.preventDefault();

    if(!ls.account) { 
        var account = $('#account').val();
        console.log('account='+account);
    } else {
        var account = ls.account;
    }
    
    var user = $('#user').val();
    console.log('user='+user);
    
    var data = account+user;
    data = data.toLocaleLowerCase();
    console.log('data='+data);
    
    var dataCode = sumCharCode(data);
    console.log('dataCode='+dataCode);
    
    var coordenate = dataCode % CODES_CARD_CELLS;
    console.log('coordenate='+coordenate);
    
    $('#calculateCoordenates').slideUp('slow', function() {
        $('#generatePassword').slideDown('slow');
    });
    
    $('#codeLabel').append('[<strong style="color: #00A352">'+coordenate+'</strong>]:');
};

var generatePassword = function(e) {
    e.preventDefault();

    var account = $('#account').val();
    console.log('account='+account);

    var user = $('#user').val();
    console.log('user='+user);

    var password = $('#password').val();
    console.log('password='+password);

    var code = $('#code').val();
    console.log('code='+code);

    var data = account+user+password+code;
    data = data.toLocaleLowerCase();
    console.log('data='+data);

    var hash = hashWrapper(data);
    console.log('hash='+hash);

    var generatedPassword = hash.substr(0, GENERATED_PASSWORD_LENGTH);
    console.log('generatedPassword='+generatedPassword);
    
    $('#generatePassword').slideUp('slow', function() {
        $('#viewPassword').slideDown('slow');
    });

    $('#genpass')
      .text(generatedPassword);
};

var updateCopyButton = function() {

    $("#copy-button").clipboard({
        path: "lib/jquery.clipboard/jquery.clipboard.swf",
        copy: function() {
            var toCopy = $('#genpass').text();
            console.log('toCopy='+toCopy);
            return toCopy;
        }
    });
}

// Document OnLoad
$(function() {

    $('#coordenates').on('click', calculateCoordenates);
    $('#generate').on('click', generatePassword);
    //updateCopyButton();
});
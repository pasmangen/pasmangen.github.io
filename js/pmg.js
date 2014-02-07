var GENERATED_PASSWORD_LENGTH = 32; // max 32
var CODES_CARD_CELLS = 40;

var sumCharCode = function(str) {
    
    var s = 0;
    for( var i = 0; i < str.length; i++ ) {
        s += str.charCodeAt(i);
    }
    return s;
}

var calculateCoordenates = function(e) {
    e.preventDefault();

    var account = $('#account').val();
    console.log('account='+account);
    
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
    
    $('#codeLabel').html('Code of cell <strong>['+coordenate+']</strong>:');
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

    var dataMd5 = md5(data);
    dataMd5 = md5(dataMd5+'PASWORD-MANGER-GENERATOR'+dataMd5);
    console.log('dataMd5='+dataMd5);
    

    var generatedPassword = dataMd5.substr(0, GENERATED_PASSWORD_LENGTH);
    console.log('generatedPassword='+generatedPassword);
    
    $('#generatePassword').slideUp('slow', function() {
        $('#viewPassword').slideDown('slow');
    });

    $('#genpass')
      .text(generatedPassword);
};

// Document OnLoad
$(function() {

    $('#generatePassword').hide();
    $('#viewPassword').hide();

    $('#coordenates').on('click', calculateCoordenates);
    $('#generate').on('click', generatePassword);
});

// Copy button
$("#copy-button").clipboard({
    path: "lib/jquery.clipboard/jquery.clipboard.swf",
    copy: function() {
        var toCopy = $('#genpass').text();
        console.log('toCopy='+toCopy);
       	return toCopy;
    }
});

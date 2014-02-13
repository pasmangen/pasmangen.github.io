var GENERATED_PASSWORD_LENGTH = 24; // max 88
var CODES_CARD_CELLS = 40;

var removeLocalStorage = function() {

    Object.keys(localStorage).forEach(function(key){
       localStorage.removeItem(key);
    });
};

//removeLocalStorage();

var getObjectFromLocalStorage = function(objName) {
    
    var obj = localStorage.getItem(objName);
    if ( obj ) {
        obj = JSON.parse(obj);
    }
    return obj;
};

var setObjectToLocalStorage = function(objName, obj) {
    
    localStorage.setItem(objName, JSON.stringify(obj));
};

var accounts = getObjectFromLocalStorage('accounts') || [];
console.log('accounts=', accounts);

var users = getObjectFromLocalStorage('users') || [];
console.log('users=', users);

var sumCharCode = function(str) {
    
    var s = 0;
    for( var i = 0; i < str.length; i++ ) {
        s += str.charCodeAt(i);
    }
    return s;
};

var addAccount = function(account) {
    
    if ( $.inArray(account, accounts) === -1 ) {
        accounts.push(account);
        accounts.sort();
    }
    setObjectToLocalStorage('accounts', accounts);
};

var addUser = function(user) {
    
    if ( $.inArray(user, users) === -1 ) {
        users.push(user);
        users.sort();
    }
    setObjectToLocalStorage('users', users);
};

var calculateCoordenates = function(e) {
    e.preventDefault();

    var account     = normalizeText( $('#account').val() );
    addAccount(account);
    
    var user        = normalizeText( $('#user').val() );
    addUser(user);
    
    var data        = account + user;
    var dataCode    = sumCharCode(data);
    var coordenate  = dataCode % CODES_CARD_CELLS;
    
    $('#calculateCoordenates').slideUp('slow', function() {
        $('#generatePassword').slideDown('slow');
    });
    
    $('#codeLabel').append('[<strong style="color: #00A352">'+coordenate+'</strong>]:');
};

var generatePassword = function(e) {
    e.preventDefault();

    var account             = $('#account').val();
    var user                = $('#user').val();
    var password            = $('#password').val();
    var code                = $('#code').val();
    var data                = normalizeText(account+user) + code + password;
    var hash                = hashWrapper(data);
    var generatedPassword   = hash.substr(0, GENERATED_PASSWORD_LENGTH);
    
    $('#generatePassword').slideUp('slow', function() {
        $('#viewPassword').slideDown('slow');
    });

    $('#genpass').text(generatedPassword);
};

var updateCopyButton = function() {

    $("#copy-button").clipboard({
        path: "lib/jquery.clipboard/jquery.clipboard.swf",
        copy: function() {
            var toCopy = $('#genpass').text();
            return toCopy;
        }
    });
}

// Document OnLoad
$(function() {


    $('#coordenates').on('click', calculateCoordenates);
    $('#generate').on('click', generatePassword);
    $('#account').autocomplete({
      source: accounts
    });
    $('#user').autocomplete({
      source: users
    });
    //updateCopyButton();
});
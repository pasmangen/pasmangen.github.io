var hashWrapper = function(text) {
    
    var shaObj = new jsSHA(text, "TEXT");
    var hash = shaObj.getHash("SHA-512", "B64");
    
    return hash;
};
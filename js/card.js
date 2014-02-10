var NUM_COLUMNS = 4;
var NUM_ROWS = 10;

var getHash = function() {

    var birthplace      = normalizeText( $('#birthplace').val() );
    var childhoodFriend = normalizeText( $('#childhoodFriend').val() );
    var schoolName      = normalizeText( $('#schoolName').val() );
    var cardName        = normalizeText( $('#cardName').val() );
    
    var data1   = birthplace+childhoodFriend+schoolName+cardName;
    var data2   = schoolName+cardName+birthplace+childhoodFriend;
    var hash    = hashWrapper(data1)+hashWrapper(data2);
    
    return hash;
};

var generateCodesCard = function() {
    
    var codesCard = '';
    codesCard += '<table>';

    var cardName = $('#cardName').val() || 'PMG';
    codesCard += '<th colspan="'+(NUM_COLUMNS*2)+'">'+cardName.toUpperCase()+'</th>';
    
    var hash = getHash();
    
    var cel = 1;
    for ( var row = 0; row < NUM_ROWS; row++) {
        codesCard += '<tr>';
            for ( var col = 0; col < NUM_COLUMNS; col++) {
                codesCard += '<td class="cel"><strong>'+cel+'</strong></td>';
                var init = (cel-1)*4;
                var subHash = hash.substr(init, 4);
                codesCard += '<td>'+subHash+'</td>';
                cel++;
            }
        codesCard += '</tr>';
    }
    
    codesCard += '</table>';
    
    $('#viewCodesCard').html(codesCard);
    
    $('.hiddenWithCodesCard').slideUp('slow')
    $('#viewCodesCard').slideDown('slow', function() {
        window.print();
    });
};

// Document OnLoad
$(function() {

    $('#generate').on('click', generateCodesCard);
});

var NUM_COLUMNS = 4;
var NUM_ROWS = 10;

var getHash = function() {

    var birthplace = $('#birthplace').val().toLocaleLowerCase();
    console.log('birthplace='+birthplace);
    
    var childhoodFriend = $('#childhoodFriend').val().toLocaleLowerCase();
    console.log('childhoodFriend='+childhoodFriend);

    var schoolName = $('#schoolName').val().toLocaleLowerCase();
    console.log('schoolName='+schoolName);
    
    var cardName = $('#cardName').val().toLocaleLowerCase();
    console.log('cardName='+cardName);
    
    var data1 = birthplace+childhoodFriend+schoolName+cardName;
    data1 = data1.toLocaleLowerCase();
    console.log('data1='+data1);

    var data2 = schoolName+cardName+birthplace+childhoodFriend;
    data2 = data2.toLocaleLowerCase();
    console.log('data2='+data2);
    
    var hash = hashWrapper(data1)+hashWrapper(data2);
    console.log('hash='+hash);
    
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
                console.log('init='+init);
                
                var subHash = hash.substr(init, 4);
                console.log('subHash='+subHash);
                
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

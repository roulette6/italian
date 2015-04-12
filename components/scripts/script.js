function insertData(template, data, location) {
    $(data).each(function() {
        var html = Mustache.to_html(template, this);
        $(location).append(html);
    });
}

var template = $('#template').html();

function populateHome() {
    $.getJSON('js/intro.json', function(data) {
        insertData(template, data.greetings, '#greetings');
        insertData(template, data.replies_to_greetings, '#replies');
        insertData(template, data.specifying_reunion, '#reunion');
        insertData(template, data.introducing_yourself, '#introducing');
        insertData(template, data.greetings, '#greetings');
        insertData(template, data.invitations, '#invitations');
    });
}

function populateTime() {
    $.getJSON('js/time.json', function(data) {
        insertData(template, data.numbers, '#numbers');
        insertData(template, data.ordinals, '#ordinals');
        insertData(template, data.months, '#months');
        insertData(template, data.seasons, '#seasons');
        insertData(template, data.time, '#time');
    });
}

function populateVerbs() {
    $.getJSON('js/verbs.json', function(data) {
        insertData(template, data.dare, '#dare');
        insertData(template, data.fare, '#fare');
        insertData(template, data.stare, '#stare');
        insertData(template, data.venire, '#venire');
        insertData(template, data.andare, '#andare');
        insertData(template, data.volere, '#volere');
        insertData(template, data.dovere, '#dovere');
        insertData(template, data.potere, '#potere');
    });
}
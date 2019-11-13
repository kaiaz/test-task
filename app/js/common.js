$(function() {
    $('#search_btn').click( function () {
        var word = '';
        var count = 0;
        $('body').unhighlight();
        $("p.result").hide().empty();

        word = $('#word').val();

        if( $('#word').val() == "" ) {
            $("p.result").fadeIn().append("Вы не ввели текст");
            return false;

        } else {

            $('.content').highlight(word);


            count = $("span.highlight").length;


            if (count == 0) {
                $("p.result").fadeIn().append("Нет совпадений в тексте");

            } else {
                $("p.result").fadeIn().append('Найдено совпадений: ' + count);
            }
            return false;
        }
    })

});


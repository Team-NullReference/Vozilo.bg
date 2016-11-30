/* globals $ window */

$(() => {
    const WEEK_DAYS = 7;
    let pricePerDay = $('#price-per-day').html(),
        pricePerWeek = $('#price-per-week').html(),
        startDate = new Date($('#start-date').val()),
        endDate = new Date($('#end-date').val());

    function countDates(start, end) {
        let oneDay = 24 * 60 * 60 * 1000,
            days = Math.round((end.getTime() - start.getTime()) / oneDay) + 1,
            sum;

        if (days > 0) {
            if (days === WEEK_DAYS) {
                sum = pricePerWeek;
            } else if (days > WEEK_DAYS) {
                let weeks = Math.floor(days / WEEK_DAYS);
                let restDays = days - weeks * WEEK_DAYS;
                sum = restDays * parseInt(pricePerDay, 10) + weeks * parseInt(pricePerWeek, 10);
            } else {
                sum = days * parseInt(pricePerDay, 10);
            }

            $('#total-sum').text(`${sum} лв`);
        } else {
            $('#total-sum').text('0 лв');
        }
    }

    countDates(startDate, endDate);

    $('#start-date').on('change', () => {
        startDate = new Date($('select[name=start-date]').val());
        countDates(startDate, endDate);
    });

    $('#end-date').on('change', () => {
        endDate = new Date($('select[name=end-date]').val());
        countDates(startDate, endDate);
    });

    $('#send-message').on('click', () => {
        console.log('clicked');
    });

    let calendar = $('#calendar-container');
    let url = window.location.href;
    let index = url.lastIndexOf('/');
    let id = url.substr(index + 1);

    $.getJSON(`/car/${id}/calendar`, (resp) => {
        var $table = $('<table>')
            .addId('calendar');

            
        // var $list = $('<ul/>')
        //     .addClass('list-newest-superheroes')
        //     .addClass('list');

        // resp.result.forEach(function (superhero) {
        //     $('<li/>')
        //         .addClass('text-center')
        //         .append(
        //             $('<a/>')
        //             .attr('href', '/superheroes/' + superhero._id)
        //             .html(superhero.name)
        //         )
        //         .append('<br/>')
        //         .append(
        //             $('<img/>')
        //             .attr('src', superhero.imageUrl)
        //         )
        //         .appendTo($list);
        // });
        // $list.appendTo('.newest-superheroes-container');
    });
});
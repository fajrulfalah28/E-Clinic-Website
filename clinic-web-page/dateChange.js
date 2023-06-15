$(document).ready(function () {
    $('.date-input').on('focus', function () {
        $(this).prop('type', 'date');
    }).on('blur', function () {
        if ($(this).val() === '') {
            $(this).prop('type', 'text');
        }
    });
});
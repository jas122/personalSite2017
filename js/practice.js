/**
 * Created by jaspersim on 6/25/17.
 */
$(document).ready(function () {
    $('.descrip').hide();
    $('.labels').css('text-align', 'right')
    $('.labels').click(function () {
        $(this).next().toggle();
    })
});
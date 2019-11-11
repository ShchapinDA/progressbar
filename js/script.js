let vProgress = 0;

$('#plus1').click(function () {
	vProgress = vProgress+1;
    $("#my-progress-bar").width(vProgress+"%");
    $("#my-progress-bar").text(vProgress+"%")
    console.log(vProgress);
});

$('#plus3').click(function () {
	vProgress = vProgress+3;
    $("#my-progress-bar").width(vProgress+"%");
    $("#my-progress-bar").text(vProgress+"%")
    console.log(vProgress);
});

$('#plus7').click(function () {
	vProgress = vProgress+7;
    $("#my-progress-bar").width(vProgress+"%");
    $("#my-progress-bar").text(vProgress+"%")
    console.log(vProgress);
});

console.log("скрипт подгрузился");

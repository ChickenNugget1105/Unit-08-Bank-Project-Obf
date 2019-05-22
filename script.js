var deposit;
var name;

$(".newDeposit").click(function() {
deposit = $('.accountDeposit').val();
name= $(".accountName").val();
$("ledgr").append("<p>"+name+"</p> <p>"+"$"+deposit+"</p>");
});
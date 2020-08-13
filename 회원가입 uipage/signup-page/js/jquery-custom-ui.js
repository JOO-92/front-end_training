function init(){
  $("input[name='birth']").datepicker({
    showButtonPanel: true,
    changeYear: true,
    yearRange: "1980:2010",
    closeText: "Close"
  });
  $( "select" ).selectmenu({
    width: 240,
  });
  $( "input[type='radio']").checkboxradio().buttonset().parent().css({'fontSize': 25.4,'fontFamily': 'nanumpen'})
  $(".btn").button();
  $(".btn").button().css('fontFamily', 'nanumpen');
  $(document).tooltip();
}


$(document).ready(function(){
  init();
})
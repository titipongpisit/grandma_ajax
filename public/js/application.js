$(document).ready(function() {
  $('form').submit(function (event){ // 1. This is when AJAX starts to work - waiting for submit
    event.preventDefault(); //5. prvent default submission (webcrawler, etc.)
    var url = $(this).attr('action'); // 'this' calls on the form='action' in index.erb, gets that URL                                 //-  which is var url = /grandma --this is the AJAX submitting the form 
    var data = $(this).serialize();
  $.post(url, data, function(respond){
    $('div').append(respond);
    });   
  });
});



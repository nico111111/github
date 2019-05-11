$(function() {
    afficheConversation();

    $('#submit').submit( function(e) {
        var message = $('#msg').val();

        e.preventDefault();
        $.post('./htbin/chatsend.py', {

            'username': nom,

            'msg': message


        }, afficheConversation);
    });


    function afficheConversation() {
      $.get("./htbin/chatget.py", function (json) {
        var text = "";
        for (var i = 0; i < json.length; i++){
            text += "<li class='leChat'><span class='date'>(" +json[i].date + " " + json[i].time + ")</span><span class='message'> &nbsp" + json[i].user + " : " + json[i].msg  + "</span></li>";
        }
        $('#affiche').html(text);
      });
    }

    setInterval(afficheConversation, 400000000);
  });

$(document).ready(function() {

  function loginOr() {
    if ($('#login>a').text() == '登录') {
      var name = getCookie('name');
      var pwd = getCookie('pwd');
      if (name == 'aabbcc' && pwd == 'qwertyuiop') {
        $('#login>a').text('已登录');
      }else {
        $('#login').click( function () {
          $('#logIn').modal('show');
        });      }
    }else if ($('#login>a').text() == '已登录') {
      $('#login').click( function () {
        alert('退出登录');
        location.reload(true);
        $('#logIn').modal('hide');
        clearCookie();
        $('#login>a').text('登录');
      });
    }
  }

  $('#goS').on('click', function(){
    loginOr();
  })

  $('#sendLogin').click(function() {
    var userName = $('#recipient-name').val();
    userName = $.trim(userName);
    var userPwd = $('#message-text').val();
    userPwd = $.trim(userPwd);
    if (userName == 'aabbcc' && userPwd == 'qwertyuiop') {
      setCookie('name', userName, 2);
      setCookie('pwd', userPwd, 2);
      alert('登陆成功');
      $('#login>a').text('已登录');
      $('#logIn').modal('hide');
      $('#recipient-name').val('');
      $('#message-text').val('');
      location.reload(true);
    }else {
      alert('请输入正确的账号密码');
      $('#recipient-name').val('');
      $('#message-text').val('');
    }
  });

  var flag = true;
  $('#headerNav').click(function() {
      if (flag) {
        $('#shopping').addClass('hiddeed');
        $('.aside-pos').addClass('hiddeed');
        $(document.body).css('overflow-y','hidden');
        flag = false;
      }else {
        $('#shopping').removeClass('hiddeed');
        $('.aside-pos').removeClass('hiddeed');
        $(document.body).css('overflow','auto');
        flag = true;
      }
  });

  $('#shopping').on('touchstart', function(event) {
    if ($('#logina>a').text() == '登录') {
      var name = getCookie('name');
      var pwd = getCookie('pwd');
      if (name == 'aabbcc' && pwd == 'qwertyuiop') {
        $('#logina>a').text('已登录');
      }else {
        $('#logina').on('touchstart', function () {
          $('#logIn').modal('show');
        });
      }
    }else if ($('#logina>a').text() == '已登录') {
      $('#logina').on('touchstart', function () {
        alert('退出登录');
        location.reload(true);
        $('#logIn').modal('hide');
        clearCookie();
        $('#logina>a').text('登录');
      });
    }
  });
});

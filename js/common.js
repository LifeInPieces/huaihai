$(function () {
    $(".rever_password").click(function () {
        $(".mengban_over").show()
        $(".outline_time").show()
    })
    $(".errorHide ,.formSubmit").click(function () {
        $(".mengban_over").hide()
        $(".outline_time").hide()
    })
    // 点击提交修改密码按钮
    $(".formSubmit").click(function () {
        // 密码控制长度
        var password = $("#password").val()
        var reg = /^\d{0,21}$/;
        if (!reg.test(password)) {
            $("#password").val("")
            $("#username").val("")
            return;
        }
        $("#password").val("")
        $("#username").val("")
    })
    // 修改密码
    $(".rever_password").mouseover(function () {
        $(".suopassword img").attr("src", "images/click.png")
        $(".suopassword img").css("width", "19px")
    })
    $(".rever_password").mouseout(function () {
        $(".suopassword img").attr("src", "images/suo.png")
        $(".suopassword img").css("width", "19px")
    })
    // 点击退出
    $(".outline").mouseover(function () {
        $(".openoutline img").attr("src", "images/openhover.png")
        $(".openoutline img").css("width", "19px")
    })
    $(".outline").mouseout(function () {
        $(".openoutline img").attr("src", "images/open.png")
        $(".openoutline img").css("width", "19px")
    })
    // 登录页面的密码显示
    $(".show_hide").click(function () {
        if ($("#Password").attr("type") == "password") {
            $(".show_hide img").attr("src", "images/show.png");
            $("#Password").attr("type", "text");
        } else {
            $(".show_hide img").attr("src", "images/eye.png");
            $("#Password").attr("type", "password");
        }
    })

    // 控制密码输入最大长度
    $("#Password").attr({maxlength:"21"});

    $(".btn-block").click(function () {
        // 密码控制长度
        var password = $("#Password").val()
        var reg = /^\d{0,21}$/;
        if (!reg.test(password)) {
            return;
        } else if ($("#username").val() != "" && $("#Password").val() != "") {
            $(this).attr("type", "button")
            location.href = "index.html"
        }
        if(password>21){
            return;
        }
    })

    // 通过form表单提交实现下载内容现象
    $(".download").click(function () {
        var $eleForm = $("<form method='get'></form>");

        $eleForm.attr("action", "https://codeload.github.com/douban/douban-client/legacy.zip/master");

        $(document.body).append($eleForm);

        //提交表单，实现下载
        $eleForm.submit();
    });

})
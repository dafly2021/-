//登录和注册切换
$(function() {
    //点击“注册账号”
    $('#link_reg').on('click', function() {
        $('.log-box').hide();
        $('.reg-box').show();
    })
})
$('#link_log').on('click', function() {
        $('.reg-box').hide();
        $('.log-box').show();
    })
    //登录注册表单验证
    //从layui中获取form对象
var form = layui.form;
form.verify({
    //自定义密码校验规则pwd
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    //校验两次密码是否一致
    repwd: function(value) {
        //通过形参拿到的时确认密码框中的值
        //再拿到密码框中的值
        //进行一次等于的判断
        //如果判断失败，return一个提示消息
        var pwd = $('.reg-box [name=password]').val();
        console.log($('.reg-box [name=password]'));
        if (pwd !== value) {
            return '两次密码不一致';
        }
    }
})
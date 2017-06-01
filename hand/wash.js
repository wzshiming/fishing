// 数据
var d = ""

var setCookie = function(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

if (d.indexOf("%20") != -1) {
    d = decodeURIComponent(d)
}

var m = d.split("; ")

// 设置cookie
for (var i in m) {
    var v = m[i]
    var kv = v.split("=", 2)
    setCookie(kv[0], kv[1])
}

// 成功后跳转
// location.href = ""
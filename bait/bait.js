;
(function(window) {
    console.log('hello');

    // var basePath = (function() {
    //     var tags = document.getElementsByTagName("script");
    //     var path = tags[tags.length - 1].getAttribute("src");
    //     var basePath = path.substring(0, path.lastIndexOf("/") + 1);
    //     console.log(basePath)
    //     return basePath
    // })()

    // var loadScript = function(url) {
    //     var oScript = document.createElement('script');
    //     oScript.src = url;
    //     document.getElementsByTagName('BODY').item(0).appendChild(oScript);
    // }

    // $ || loadScript("//cdn.bootcss.com/jquery/3.2.1/jquery.min.js")

    // var appendScript = function(url) {
    //     var oScript = document.createElement('script');
    //     oScript.src = basePath + url;
    //     oScript.event = "onload";
    //     document.getElementsByTagName('BODY').item(0).appendChild(oScript);
    // }


    // console.log('content');
    // data = document.getElementsByTagName('html')[0].innerHTML;
    // appendScript("content.js?content=" + data);
})(window);
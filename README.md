# 说明
.
|____hook_applist.js
|____hook_log.js
|____README.md
|____hook_mac.js

hook_applist.js hook应用列表接口java.lang.Runtime.exec
hook_log.js hook Log类
hook_mac.js hook mac地址

## 使用
frida -U -f com.xx.xx --no-pause -l hook_log.js > out.log
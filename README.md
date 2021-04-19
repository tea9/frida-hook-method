# 说明
```
.  
|____hook_applist.js 
|____hook_log.js  
|____README.md
|____hook_mac.js
|____hook_permission.js

```
hook_applist.js hook应用列表接口java.lang.Runtime.exec  
hook_log.js hook Log类  
hook_mac.js hook mac地址  

源码搜索：http://androidxref.com/
frida代码提示 `npm install --save @types/frida-gum`

## 使用
frida -U -f com.xx.xx --no-pause -l hook_log.js > out.log
```
frida -U -f com.xx.xx --no-pause -l hook_mac.js
     ____
    / _  |   Frida 12.8.0 - A world-class dynamic instrumentation toolkit
   | (_| |
    > _  |   Commands:
   /_/ |_|       help      -> Displays the help system
   . . . .       object?   -> Display information about 'object'
   . . . .       exit/quit -> Exit
   . . . .
   . . . .   More info at https://www.frida.re/docs/home/
Spawned `com.xx.xx`. Resuming main thread!                   
[Google Pixel XL::com.xx.xx]-> /proc/2826/cmdline
/proc/meminfo
2021-04-15 18:10:9[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
/proc/cpuinfo
2021-04-15 18:10:9[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:9[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:[18,-125,82,85,-116,-124],[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:[66,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:[46,-128,34,-111,26,-119],[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:[18,-125,82,85,-116,-124],[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:10[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
/proc/meminfo
/proc/cpuinfo
/proc/cpuinfo
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[18,-125,82,85,-116,-124],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[64,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[66,78,54,59,99,-108],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:[46,-128,34,-111,26,-119],[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:11[methodname]:getHardwareAddress,[return]:null,[arg]undefined
2021-04-15 18:10:16[methodname]:getMacAddress,[return]:02:00:00:00:00:00,[arg]undefined
2021-04-15 18:10:17[methodname]:getMacAddress,[return]:02:00:00:00:00:00,[arg]undefined
/proc/cpuinfo
[Google Pixel XL::com.xx.xx]-> exit 
```
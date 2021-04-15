//hook app列表方法
// link https://www.jianshu.com/p/0fba8fd4a1e2
function hook_applist(){
    Java.perform(function(){
        Java.use("java.lang.Runtime").exec.overload('java.lang.String').implementation=function(arg){
            var ret=this.exec(arg);
            console.log(ret);
            return ret;
        }
    })
}
function main() {
    //frida -U -f com.xx.xx --no-pause -l hook_applist.js > out.log
    //frida -U -f com.xx.xx --no-pause -l hook_applist.js
    hook_applist();
}
setImmediate(main);
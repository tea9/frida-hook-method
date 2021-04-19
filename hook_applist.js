//hook app列表方法
// link https://www.jianshu.com/p/0fba8fd4a1e2 
function hook_applist(){
    Java.perform(function(){
        Java.use("java.lang.Runtime").exec.overload('java.lang.String').implementation=function(arg){
            var ret=this.exec(arg);
            //arg=pm list packages 才是获取应用列表
            console.log("[Runtime]"+ret+arg);
            return ret;
        }
        //android.content.pm.PackageManager
        Java.use("android.content.pm.PackageManager").getInstalledPackages.implementation=function(arg){
            console.log("[PackageManager]"+arg);
        }
        //https://blog.csdn.net/q384415054/article/details/72972405/ 方案三
        // 虚方法hook不到  最简单的办法是你直接getPackageManager().queryxxxx.implement
        // Java.use("android.content.pm.PackageManager").queryIntentActivities.implementation=function(arg,arg1){
        //     console.log("[queryIntentActivities]"+arg,arg1);
        // }
        
        // var Context=Java.use("android.content.Context");
        // //console.log(Context.getPackageManager());
        // //console.log(Context.getPackageManager().getInstalledPackages());
        // // Java.use(Context).getPackageManager.getInstalledPackages.implementation=function(arg){
        // //     //var ret =this.getPackageManager();
        // //     console.log("[getPackageManager]"+arg);
        // // }
        // Context.getPackageName.implementation=function(){
        //     var ret =this.getPackageName();
        //     console.log("[getPackageName]"+ret);
        // }

    })
}
function main() {
    //frida -U -f com.xx.xx --no-pause -l hook_applist.js > out.log
    //frida -U -f com.xx.xx --no-pause -l hook_applist.js
    hook_applist();
}
setImmediate(main);
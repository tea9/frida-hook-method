function hook_permission(){
    console.log("[aaa]")
    //https://blog.csdn.net/u013144287/article/details/79298358
    Java.perform(function(){
        Java.use("androidx.core.content.ContextCompat").checkSelfPermission.implementation=function(arg,arg1){
            console.log("[checkSelfPermission]")

        }
        Java.use("androidx.core.app.ActivityCompat").requestPermissions.implementation=function(arg,arg1,arg2){
            console.log("[requestPermissions]")

        }
        Java.use("android.app.Activity").onActivityResult.implementation=function(arg,arg1,arg2){
            console.log("[onActivityResult]")

        }
    })
}
function main() {
    //frida -U -f com.xx.xx --no-pause -l hook_permission.js > out.log
    //frida -U -f com.xx.xx --no-pause -l hook_permission.js
    hook_permission();
}
setImmediate(main);
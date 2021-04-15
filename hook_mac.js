//hook mac地址
//link https://www.jb51.net/article/156741.htm
function hook_mac(){
	Java.perform(function(){
        //http://androidxref.com/8.1.0_r33/xref/frameworks/base/wifi/java/android/net/wifi/WifiInfo.java
        //android.net.wifi.WifiInfo  getMacAddress
        Java.use("android.net.wifi.WifiInfo").getMacAddress.implementation=function(){
            var ret = this.getMacAddress();
            method_log("getMacAddress",ret);
            //print_stack();
            return ret;
        }

        Java.use("java.net.NetworkInterface").getHardwareAddress.implementation=function(){
            var ret = this.getHardwareAddress();
            method_log("getHardwareAddress",JSON.stringify(ret));
            //print_stack();
            return ret;
        }
        //link https://blog.csdn.net/weixin_34364135/article/details/85594129
        var FileReader=Java.use("java.io.FileReader");
        FileReader.$init.overload('java.lang.String').implementation=function(arg){
            //var ret = this.$init();
            //method_log("FileReader",ret);
            //print_stack();
            console.log(arg)
            if(arg=="/proc/net/arp"){
                method_log("java.io.FileReader","",arg)
            }
            
        }
        // FileReader.$init.overload('java.io.File').implementation=function(arg){
        //     var ret = this.$init();
        //     method_log("FileReader",ret);
        //     //print_stack();
        //     return ret;
        // }
        // FileReader.$init.overload('java.io.FileDescriptor').implementation=function(arg){
        //     var ret = this.$init();
        //     method_log("FileReader",ret);
        //     //print_stack();
        //     return ret;
        // }



    })
}
//frida 打印调用堆栈
function print_stack() {

  Java.perform(function () {
    var Exception = Java.use("java.lang.Exception");
    var instance = Exception.$new("print_stack");
    var stack = instance.getStackTrace();
    console.log(stack);
    instance.$dispose();
  });

}
function method_log(methodname,ret){
    console.log(getCurrentDate()+"[methodname]:"+methodname+",[return]:"+ret);
}
function method_log(methodname,ret,arg){
    console.log(getCurrentDate()+"[methodname]:"+methodname+",[return]:"+ret+",[arg]"+arg);
}
//获取当前日期时间 格式 yyyy-MM-dd HH:MM:SS
function getCurrentDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
    month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + date.getHours() + seperator2 + date.getMinutes()
    + seperator2 + date.getSeconds();
    return currentdate;
}
function main() {
    //frida -U -f com.xx.xx --no-pause -l hook_mac.js > out.log
    //frida -U -f com.xx.xx --no-pause -l hook_mac.js
    hook_mac();
}
setImmediate(main);
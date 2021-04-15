//hook类下所有方法
// links https://www.anquanke.com/post/id/169315 https://www.jianshu.com/p/1223dd381081 https://www.52pojie.cn/thread-1196917-1-1.html
/**
objection
objection -g com.xx.xx explore
查看所有方法
objection android hooking watch class android.util.Log                                            
*/
//hook android.util.Log 类
function hook_all_method(targetClass,a){

	Java.perform(function(){
		//var targetClass="android.util.Log";
		//目标类
		var hook = Java.use(targetClass);
		var mhd_array = hook.class.getDeclaredMethods();
		for (var f = 0; f < mhd_array.length; f++) {
			 var mhd_cur = mhd_array[f]; //当前方法
	        var targetMethod = mhd_cur.getName(); //当前方法名
	        console.log("[targetMethod]："+targetMethod);
	        
			//重载次数
			var overloadCount = hook[targetMethod].overloads.length;
			//打印日志：追踪的方法有多少个重载
			//console.log("Tracing " + targetClassMethod + " [" + overloadCount + " overload(s)]");
			//var a=["d","e","i","v","w"];
			if(a!=null){
				for(var k=0;k<a.length;k++){
					if(targetMethod==a[k]){
						overload_hook(overloadCount,targetMethod,hook);	
					}
				}
			}else{
				overload_hook(overloadCount,targetMethod,hook);	
			}
			

		}
		
	});
}
function overload_hook(overloadCount,targetMethod,hook){
	//每个重载都进入一次
			for (var i = 0; i < overloadCount; i++) {
				//hook每一个重载
			    hook[targetMethod].overloads[i].implementation = function() {
			        //console.warn("n*** entered " + targetClassMethod);

			        //可以打印每个重载的调用栈，对调试有巨大的帮助，当然，信息也很多，尽量不要打印，除非分析陷入僵局
			        Java.perform(function() {
			             var bt = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
			                //console.log("nBacktrace:n" + bt);
			        });   

			        // 打印参数
			        if (arguments.length) console.log();
			        for (var j = 0; j < arguments.length; j++) {
			            console.log("[methodname]:"+targetMethod+",arg[" + j + "]: " + arguments[j]);
			        }

			        //打印返回值
			        var retval = this[targetMethod].apply(this, arguments); // rare crash (Frida bug?)
			        console.log("nretval: " + retval);
			        //console.warn("n*** exiting " + targetClassMethod);
			        return retval;
			    }
			}
}

function hookAllOverloads(targetClass, targetMethod) {
    Java.perform(function () {
         var targetClassMethod = targetClass + '.' + targetMethod;
         var hook = Java.use(targetClass);
         var overloadCount = hook[targetMethod].overloads.length;
         for (var i = 0; i < overloadCount; i++) {
                hook[targetMethod].overloads[i].implementation = function() {
                     var retval = this[targetMethod].apply(this, arguments);
                     //这里可以打印结果和参数
                    console.log(arguments[0],arguments[1]);
                     console.log("retval"+retval);
                     return retval;
                 }
              }
   });
 }

function main() {
    //frida -U -f com.xx.xx --no-pause -l hook_log.js > out.log
    var targetClass="android.util.Log";
    var a=["d","e","i","v","w"];
    hook_all_method(targetClass);
    //hookAllOverloads("android.util.Log","e");
}
setImmediate(main);
# ElecServer



##创建环境 
####运行环境 node.js
####插件*babel6 webpack react ES6*  
[前后台搭建](http://www.cnblogs.com/Leo_wl/p/4883647.html)   
[5分钟搭建](http://www.tuicool.com/articles/EbeiuyN)
[react&es6+](http://egorsmirnov.me/2015/05/22/react-and-es6-part1.html)
####编辑器 sublime text3 用babel插件

>2016.1.8
>>* babel6 有了preset的功能呢    默认是没有es6和rect支持的
>>* webpack打包后的文件默认还是在服务端运行的 本地运行还需加本地路径。例如./xxx.js
>>* react有了ES6的写法后，import 等用法可以随意用了,更倾向于传统语言了;  
>>* express 有自带的创建工程结构的方法  exxpress -t xxxx;  
>>* sublime text3 用babel插件可以生成react的ES6写法非常方便;  
>2016.1.10
>>* babel6 提供了解析jxs的语法，取决于这个*babel-preset-react*这句话在babel.rc里面。简单来说就是你的后缀名是js 也能解析jxs的语法了。
>>* react里的构造函数和静态属性是ES7的写法，所以必须在babel中按照插件stage_0.       
>>* react ES7中state的定义要在构造函数之前进行定义（可以使用默认的props).




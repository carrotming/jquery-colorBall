# jquery-colorBall
[jquery插件五彩小球](http://carrotming.cn/jquery-colorBall/)

使用方法

导入css文件 

link rel="stylesheet" href="css/index.css"

导入js文件  

<script src="js/jquery-3.1.1.js"></script>
<script src="js/Underscore-min.js"></script>
<script src="js/index.js"></script>

调用方法

  $(function () {
        $('#oBody').ColorBall({
            /*
             r:60,  小球半径大小
             dx: _.random(-10,10),  //小球x轴偏移量
             dy:_.random(-10,10),   //小球y轴偏移量
             dr:_.random(5,10),     //小球变小偏移量
             time:30                //时间
             * */
            r: 100,
            dx: _.random(-20, 20),
            dy: _.random(-20, 20),
            dr: _.random(1, 10),
            time: 20
        });
    })

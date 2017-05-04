(function ($,window,undefined) {

    $.fn.ColorBall=function (options) {
        var getRandomColor=function () {
            return 'rgba('+ _.random(0,255)+','+ _.random(0,255)+','+ _.random(0,255)+','+Math.random()+')';
        };
        var settings=$.extend({
            r:60,
            dx: _.random(-10,10),
            dy:_.random(-10,10),
            dr:_.random(5,10),
            time:30
        },options)
        var $body=$(this);
        var ballArr=[];
        function Round(option) {
            this._init(option);
        }
        Round.prototype={
            _init:function (json) {
                var json=json||{};
                this.x=json.x;
                this.y=json.y;
                this.r=settings.r;
                this.dx=settings.dx;
                this.dy=settings.dy;
                this.dr=settings.dr;
                this.color=json.color;
                this.r=settings.r;
                ballArr.push(this);
            },
            create:function () {
                var $div=document.createElement('div');
                $body.append($($div));
                $($div).css({
                    left:this.x+'px',
                    top:this.y+'px',
                    position:'absolute',
                    borderRadius:'50%',
                    backgroundColor:this.color,
                    width:this.r+'px',
                    height:this.r+'px'
                })
            },
            update:function () {
                this.x+=this.dx;
                this.y+=this.dy;
                this.r-=this.dr;
                if(this.r<0){
                    this.r=0;
                    ballArr= _.without(ballArr,this);
                }
            },

        };
        $body.mousemove(function (ev) {
            new Round({x:ev.clientX,y:ev.clientY,color:getRandomColor()});
            console.log(ballArr);
        })
        setInterval(function (){
            for(var i=0;i<$body.children().length;i++){
                $body.empty();
            }
            for(var j=0;j<ballArr.length;j++){
                ballArr[j].create();
                ballArr[j].update();
            }
        },settings.time);
    };
})(jQuery,window.document)
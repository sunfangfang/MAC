$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<730){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
            $(".footer1").css("display","none");
            $(".footer2").css("display","block");
        }else {
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".footer1").css("display","block");
            $(".footer2").css("display","none");
        }
    })
    $(window).resize();
    $(".menubtn").click(function(){
        $(".son").finish();
        $(this).find($(".son")).slideToggle(200);
    });
    $(".row2").click(function(){
       $(".son1").finish();
        $(this).find($ (".son1")).slideToggle(200);
    });
    var num=0;
    var lunbo=function(){
        num++;
        if(num==$(".box .list").length-1){
            $(".box").animate({marginLeft:-num*100+"%"},function(){
                $(".box").css('marginLeft','0px');
                num=0;
            })
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }
        $(".btn li").css({border:'none',background:'#888'});
        $(".btn li").eq(num).css({border:'1px solid #08c',background:'none'});

    }
    var t=setInterval(lunbo,4000);
    $(".banner").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(lunbo,4000);
    });

    $(".btn li").click(function(){
        clearInterval(t);
        var index=$(this).index(".btn li");
        num=index;
        $(".box").animate({marginLeft:-num*100+"%"});
        $(".btn li").css({border:'none',background:'#888'});
        $(this).css({border:'1px solid #08c',background:'none'});
    })
    var margin;
    touch.on(".box","dragstart",function(e){
        margin=$(".box")[0].offsetLeft;
    })
    touch.on(".box","drag",function(e){
        $(".box").css('marginLeft',margin+ e.x);
    })
    touch.on(".box","dragend",function(e){
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=="left"){
                num++;
                if(num==$(".box .list").length-1){
                    $(".box").animate({marginLeft:-num*100+"%"},function(){
                        $(".box").css('marginLeft','0px');
                        num=0;
                    })
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                    $(".box").animate({marginLeft:-num*100+"%"});
                    return;
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
            }
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }
        $(".btn li").css({border:'none',background:'#888'});
        $(".btn li").eq(num).css({border:'1px solid #08c',background:'none'});
    })
    $(".box").mousedown(function(e){
        e.preventDefault();
    })

    touch.on(".rotate","rotate")
})
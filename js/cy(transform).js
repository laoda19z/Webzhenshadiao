 var img = document.getElementsByClassName("i1");
 var temp1;
 var src1;
 var time1;

 var temp2;
 var src2;
 var time2;

 var temp3;
 var src3;
 var time3;

 var temp4;
 var src4;
 var time4;

 var temp5;
 var src5;
 var time5;

 var temp6;
 var src6;
 var time6;

 var temp7;
 var src7;
 var time7;

 var temp8;
 var src8;
 var time8;

 var temp9;
 var src9;
 var time9;

 var temp10;
 var src10;
 var time10;

 var temp11;
 var src11;
 var time11;

 var temp12;
 var src12;
 var time12;

img[0].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp1 = temp;
    src1 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        },time1 = 540);
    }, 500);
}
img[0].onmouseout = function(){
    if(time1 != 540) return;
    if(this.attributes["index"].nodeValue == temp1) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src1;
                that.setAttribute("index",temp1);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }  
    }, 20)
}
img[1].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp2 = temp;
    src2 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time2=540);
    }, 500);
}
img[1].onmouseout = function(){
    if(time2!=540) return;
    if(this.attributes["index"].nodeValue == temp2) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src2;
                that.setAttribute("index",temp2);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
    }, 20)
}
img[2].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp3 = temp;
    src3 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time3 = 540);
         
    }, 500);
        
}
img[2].onmouseout = function(){
    if(time3 != 540) return;
    if(this.attributes["index"].nodeValue == temp3) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src3;
                that.setAttribute("index",temp3);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
    }, 20)
       
}
img[3].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp4 = temp;
    src4 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time4 = 540);
         
    }, 500);
        
}
img[3].onmouseout = function(){
    if(time4 != 540) return;
    if(this.attributes["index"].nodeValue == temp4) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src4;
                that.setAttribute("index",temp4);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
img[4].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp5 = temp;
    src5 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time5 = 540);
    }, 500);
}
img[4].onmouseout = function(){
    if(time5 != 540) return;
    if(this.attributes["index"].nodeValue == temp5) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src5;
                that.setAttribute("index",temp5);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
img[5].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp6 = temp;
    src6 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time6 = 540);
         
    }, 500);
        
}
img[5].onmouseout = function(){
    if(time6 != 540) return;
    if(this.attributes["index"].nodeValue == temp6) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src6;
                that.setAttribute("index",temp6);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
img[6].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp7 = temp;
    src7 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time7 = 540);
         
    }, 500);
        
}
img[6].onmouseout = function(){
    if(time7 != 540) return;
    if(this.attributes["index"].nodeValue == temp7) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src7;
                that.setAttribute("index",temp7);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
img[7].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp8 = temp;
    src8 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time8 = 540);
         
    }, 500);
        
}
img[7].onmouseout = function(){
    if(time8 != 540) return;
    if(this.attributes["index"].nodeValue == temp8) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src8;
                that.setAttribute("index",temp8);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
img[8].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp9 = temp;
    src9 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time9 = 540);
         
    }, 500);
        
}
img[8].onmouseout = function(){
    if(time9 != 540) return;
    if(this.attributes["index"].nodeValue == temp9) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src9;
                that.setAttribute("index",temp9);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
img[9].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp10 = temp;
    src10 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time10 = 540);
         
    }, 500);
        
}
img[9].onmouseout = function(){
    if(time10 != 540) return;
    if(this.attributes["index"].nodeValue == temp10) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src10;
                that.setAttribute("index",temp10);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
}
img[10].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp11 = temp;
    src11 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time11 = 540);
         
    }, 500);
        
}
img[10].onmouseout = function(){
    if(time11 != 540) return;
    if(this.attributes["index"].nodeValue == temp11) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src11;
                that.setAttribute("index",temp11);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
img[11].onmouseover = function(){
    var temp = this.attributes["index"].nodeValue;
    var src = this.attributes["src"].nodeValue;
    if(this.attributes["index"].nodeValue == "0") return;
    temp12 = temp;
    src12 = src;
    var that = this;
    setTimeout(function(){
        var width = 180;
         var intervalId = setInterval(function () {
            width-=10;
            that.style.width = width+"px";
            if(width==0) clearTimeout(intervalId);
        }, 30);
        setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
        }, time12 = 540);
         
    }, 500);
        
}
img[11].onmouseout = function(){
    if(time12 != 540) return;
    if(this.attributes["index"].nodeValue == temp12) return;
        var that = this;
        var width = 180;
        var intervalId = setInterval(function () {
             width-=10;
            that.style.width = width+"px";
            if(width==0) {clearTimeout(intervalId);
                that.src = src12;
                that.setAttribute("index",temp12);
                var intervalId1 = setInterval(function(){
                    width+=10;
                    that.style.width = width+"px";
                    if(width==180) clearTimeout(intervalId1);
                }, 20);
            }
               
    }, 20)
       
}
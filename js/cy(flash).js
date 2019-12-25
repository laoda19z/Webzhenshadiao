    var img = document.getElementById("img");
    var box = document.getElementById("box");
    var li = document.getElementsByTagName("li");
    var i = 0;
    var c1 = 0;
    var c2 = 1;
    var intervalId1 = setInterval(function(){
        if(i==li.length-1) clearInterval(intervalId1);
        li[i].setAttribute("id","star"+(i+1));
        i++;
    },200)
    setTimeout(function(){
        var intervalId2 = setInterval(function(){
            c1+=0.25;
            img.style.opacity = c1;
            if(c1==1) clearInterval(intervalId2);
        },300)
        var intervalId3 = setInterval(function(){
            c2-=0.5;
            box.style.opacity = c2;
            if(c2==0) clearInterval(intervalId3);
        },400)
    },200*li.length+400);
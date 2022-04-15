var Links = {
    setColor:function(color){ // color 매개변수
/*     var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i++;
        } */
        $('a').css("color", color); // jQuery가 반복문을 대신 처리
    }
}

var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css("color", color);
    }, // 객체의 프로퍼티와 프로퍼티를 구분할때 콤마
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css("backgroundColor", color);
    }
}

function darkModeHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        self.value = 'day';
        Links.setColor('powderblue');
    } else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        self.value = 'night';
        Links.setColor('blue');
        }
    }
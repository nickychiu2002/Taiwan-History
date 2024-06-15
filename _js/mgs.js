$(document).ready(function(){
    //mgs
    var btn = document.getElementById('mgs_btn');
    var list = document.querySelector('.mgs_list');
    var text = document.getElementById('mgs_text');
    var name = document.getElementById('mgs_name');

    btn.onclick = function(){
        if (text.value == ''){
            alert('你沒有輸入內容!')
        }else if(name.value == ''){
            alert('你沒有輸入你的大名!')
        }else{
            var li = document.createElement('li');
            var time = new Date();

            var mytime = time.getFullYear() + ' / ' + (time.getMonth() + 1) + ' / ' + time.getDate() + ' / ' + time.getHours() + 'hr' + ' : ' + time.getMinutes() + 'min';

            li.innerHTML = 
            '<div class="mgs_text_box">' + 
                '<div class="mgs_name_text_box">' +
                    '<div class="mgs_name_box">' + name.value + '</div>'+ 
                    '<div class="mgs_text_left">' + text.value + '</div>' + 
                '</div>' + 
                '<div class="mgs_time_right">' + mytime + '</div>' + 
                '<div class="mgs_heart">'+
                    '<img class="mgs_heart_img" src="../../_image/logo/heart.png" alt="">'+'<div class="mgs_heart_num">0</div>'+
                '</div>'+
            '</div>'
            // + "<button>刪除</button>"
            text.value = '';
            name.value = '';
            list.insertBefore(li, list.children[0]);
            $('.mgs_list').append(li);
            
        }

        $('.mgs_heart_img').click(function(){
            var $pa = $(this).parent();
            var $count = $pa.find('.mgs_heart_num');
            $count.text(parseInt($count.text()) + 1 );
    
        });
    };//mgs

    
});
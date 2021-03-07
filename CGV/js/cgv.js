$(function(){
	
	var current=0;
	var $slides=$(".slide");
	$slides.css({"display":"none"});
	$slides.eq(0).css({"display":"block"});

	function fnFade(idx){
		$slides.fadeOut(1000);//일단 다 감춰
		$slides.eq(idx).fadeIn(1000);//idx번호에 해당하는 슬라이드 보임
		current=idx;//이미 보여진 슬라이드(idx)는 현재슬라이드 번호로 갱신
	}
	
	//setInterval함수한테 줄 함수 만들기 - var current만들어줬다.
	function setSlide(){//슬라이드 번호 넘겨줌
		//마지막 슬라이드라면 다시 첫번째 슬라이드 번호 넘겨줌
		if(current==3){
			fnFade(0);
		}else{
			fnFade(current+1);//보여주는 함수에 그 다음 슬라이드 번호 넘겨줌
		}
	}

	setInterval(setSlide,4000);

	//왜 속도가 일정치 않지?
	//event 공지사항______________________________
	var timer;
	var current=0;
	var $info=$(".info-move");
	$info.css({"top":"30px"});
	$info.eq(0).css({"top":"0"});

	function fnMove(idx){
		$info.eq(current).animate({
			top:"-30px"
		},{
			duration:1000,
			start:function(){
				$info.eq(idx).css({"top":"30px"});
				$info.eq(idx).animate({top:"0px"},1000);
			}
		});
		current=idx;
	}

	function setSlide(){
		if(current==2){
			fnMove(0);
		}else{
			fnMove(current+1);
		}
	}
	timer=setInterval(setSlide,3000);

	$(window).blur(function(){
		clearInterval(timer);
		timer = 0;
	});

	$(window).focus(function(){
		timer=setInterval(setSlide,3000);
	});

});
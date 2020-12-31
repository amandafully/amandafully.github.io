$(function(){
	var imagens = document.querySelectorAll(".m1");
	var modal = document.querySelector('.modal');
	var srcVal="";
	var bt = 0;
	var cont1;
	var cont2 = 1;
	
	$(".s1").click(function(){
		cont1 = 8;
		modal = document.querySelector(".modal.m1");
		$.each(imagens, function(idx, imagem){
			modal.classList.toggle('modal_active');
		});
	});
	
	$(".s2").click(function(){
		cont1 = 6;
		modal = document.querySelector(".modal.m2");
		$.each(imagens, function(idx, imagem){
			modal.classList.toggle('modal_active');
		});
	});
	
	$(".s3").click(function(){
		cont1 = 3;
		modal = document.querySelector(".modal.m3");
		$.each(imagens, function(idx, imagem){
			modal.classList.toggle('modal_active');
		});
	});
	
	$(".bt_close").click(function(){
		bt = 0;
		cont2 = 1;
		$(".modal_img").css("margin-left", "0%");
		modal.classList.toggle('modal_active');
		$(".bt_prox").css("display","block");
		$(".bt_ant").css("display","none");
	});
	
	$(".bt_ant").click(function(){
		if(cont2 <= 2){
			$(".bt_ant").css("display","none");
			bt = -100;
			cont2 = 2;
		}
		bt += 100;
		$(".modal_img").css("margin-left", bt+"%");
		cont2--;
		$(".bt_prox").css("display","block");
		
	})
	
	$(".bt_prox").click(function(){
		if(cont2 == cont1-1){
			$(".bt_prox").css("display","none");
		}
		bt -= 100;
		$(".modal_img").css("margin-left", bt+"%");
		cont2++;
		$(".bt_ant").css("display","block");
	})
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 500){
			$(".cabecalho_menu").addClass("parte_fixa");
		}else{
			$(".cabecalho_menu").removeClass("parte_fixa");
		}
	});
});

var contador = 1;
$(function(){
	setInterval(function(){
		document.getElementById('a' + contador).checked = true;
		contador++;
		if(contador > 6){
			contador = 1;
		}
	}, 6000);
});
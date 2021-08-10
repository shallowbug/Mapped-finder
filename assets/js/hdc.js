	$(navBar);
	$(hdcStep1);
    $(hdcstep3);
    $(hdcstep4);
    $(hdcstep5);
    $(navBar);

	var but_id;



function navBar(){
	$(".trk-item.trk-used").click(function(){

		console.log($(this).attr('class'));

		if ($(this).attr('class') == "trk-item trk-active") {
			return;
		}
				if ($(this).attr('class') == "trk-item trk-new") {
			return;
		}

		var nav_id = $(this).attr('data-stp');

		console.log(nav_id);

		$(".stp-cont").removeClass("act-blk");
		$(".stp-cont").removeClass("act-flx");
		$("#"+nav_id).addClass('act-blk');

		$(".trk-item").removeClass("trk-active");
		$(this).nextAll(".trk-item").removeClass("trk-used");
		$(this).nextAll(".trk-item").addClass("trk-new");
		$(this).removeClass("trk-used");
		$(this).addClass("trk-active");
		$(navBar);
	});
};

function hdcStep1(){
	$(navBar);
	//display the problem
	$('.hdcblock').click(function(){
		var qu_id = $(this).attr('data-qu');
		$("#"+qu_id).toggle(150);
	});

	$(".hdcblock").on({
    mouseenter: function(){
    	var qu_id = $(this).attr('data-qu');
        $("#"+qu_id).css("display", "block");
        $(this).css("filter", "grayscale(100%)");
    }, 
    mouseleave: function(){
    	var qu_id = $(this).attr('data-qu');
        $("#"+qu_id).css("display", "none");
        $(this).css("filter", "none");
    }
	});

	$(".popup-blk").on({
    mouseenter: function(){
    	var qu_id = $(this).attr('data-qu');
        $("#"+qu_id).css("display", "block");
    }, 
    mouseleave: function(){
    	var qu_id = $(this).attr('data-qu');
        $("#"+qu_id).css("display", "none");
    }
	});
	//display the problem

	//transition to step 2
	$(".pbbut").click(function() {
		$("#trk1").removeClass("trk-active");
		$("#trk1").addClass("trk-used");
		$(navBar);

		$("#trk2").removeClass("trk-new");
		$("#trk2").addClass("trk-active");
	});

	$(".popup-blk .pbbut").click(function(){
		but_id = $(this).attr('data-qbut');

		$("#stp1-cont").removeClass("act-blk");

		$("#stp2-cont").addClass("act-blk");
		$(".stp2-elem").removeClass("act-flx");
		$("#"+but_id).addClass("act-flx");
		hdcstep2();
	});
	//transition to step 2
};

function hdcstep2(){


	$('.stp2-tb').click(function(){
		var cap_id = $(this).attr('data-cap');

		$("#"+but_id).children(".stp2-wrap").children('.stp2-tb-cont').removeClass('stp2-act');
		$("#"+but_id).children(".stp2-wrap").children(".stp2-tb-wrap").children('.stp2-tb').removeClass('active-tb');
		$("#"+but_id).children('.p2-img').removeClass('stp2-act');

		$("#"+cap_id).addClass('stp2-act');
		$("#"+cap_id+"-img").addClass('stp2-act');
		$(this).addClass('active-tb');
	});

	//transition to step 3
	$(".stp2but").click(function() {
		$("#trk2").removeClass("trk-active");
		$("#trk2").addClass("trk-used");

		$("#trk3").removeClass("trk-new");
		$("#trk3").addClass("trk-active");
	});

	$(".stp2but").click(function(){
		var cap_next = $(this).attr('data-cap');

		$("#stp2-cont").removeClass("act-blk");
		$(".stp3-elem").removeClass("act-flx")
		$("#stp3-cont").addClass("act-blk");
		$("#"+cap_next).addClass("act-flx");
		$(navBar);
	});
	
};

function hdcstep3(){

	$("#stp3-cont .forwardstep").click(function() {
		$("#trk3").removeClass("trk-active");
		$("#trk3").addClass("trk-used");

		$("#trk4").removeClass("trk-new");
		$("#trk4").addClass("trk-active");
		$(navBar);
		var dat_next = $(this).attr('data-stp');

		$("#stp3-cont").removeClass("act-blk");
		$(".stp4-elem").removeClass("act-flx");
		$("#stp4-cont").addClass("act-flx");
		$("#"+dat_next).addClass("act-flx");
	});

	//back transition to step 2
	$("#stp3-cont .backstep").click(function() {
		$("#trk3").removeClass("trk-active");
		$("#trk3").addClass("trk-new");

		$("#trk2").removeClass("trk-used");
		$("#trk2").addClass("trk-active");

		var cap_back = $(this).attr('data-pb');

		$(".stp3-elem").removeClass("act-blk");
		$("#stp3-cont").removeClass("act-blk");
		$("#stp2-cont").addClass("act-blk");
		$("#"+cap_back).addClass("act-flx");
		hdcStep2();

	});
	//back transition to step 2

};

function hdcstep4(){

	$('.stps-tabs-inst').click(function(){
		var tab_id = $(this).attr('data-tab');
		var p_id = $(this).attr('data-where');


		$("."+p_id).removeClass('stps-act1');
		$("."+p_id).removeClass('stps-act2');


		$("."+p_id).children('.stps-instl-cont').removeClass('stps-crnt');

		$('.stps-num', this).addClass('stps-act1');
		$('.stps-nm', this).addClass('stps-act2');
		$("."+p_id).children("."+tab_id).addClass('stps-crnt');
	});

		$("#stp4-cont .forwardstep").click(function() {
		$("#trk4").removeClass("trk-active");
		$("#trk4").addClass("trk-used");

		$("#trk5").removeClass("trk-new");
		$("#trk5").addClass("trk-active");
		$(navBar);
		
		var shop_cart = $(this).attr('data-shop');

		$("#stp4-cont").removeClass("act-flx");
		$(".stp5-elem").removeClass("act-blk");
		$("#stp5-cont").addClass("act-blk");
		$("#"+shop_cart).addClass("act-blk"); //update
	});

	//back transition to step 3
	$("#stp4-cont .backstep").click(function() {
		$("#trk4").removeClass("trk-active");
		$("#trk4").addClass("trk-new");

		$("#trk3").removeClass("trk-used");
		$("#trk3").addClass("trk-active");

		var cap_back = $(this).attr('data-pb');

		$(".stp4-elem").removeClass("act-flx");
		$("#stp4-cont").removeClass("act-flx");
		$("#stp3-cont").addClass("act-blk");
		$("#"+cap_back).addClass("act-flx");
		hdcStep3();

	});
	//back transition to step 3
};
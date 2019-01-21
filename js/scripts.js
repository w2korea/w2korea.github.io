$(function(){
	/*===========================================Javascript code for form validation================================================*/

	$('#myForm').validator({
		feedback: {
			success: "fas fa-check-circle", /*to change icon of span*/
			error: "fas fa-times-circle"
		}
	});
	/*===========================================Javascript code for Places================================================*/
	var articleName;

	$('#1').click(function(){
		articleName="palace";
		console.log(articleName);
		sessionStorage.setItem("articleName", articleName);         /* browser will remember this variable and can pass it to other js files */
	});

	$('#2').click(function(){
		articleName="tower";
		sessionStorage.setItem("articleName", articleName);
	});

	$('#3').click(function(){
		articleName="village";
		sessionStorage.setItem("articleName", articleName);
	});

	$('#4').click(function(){
		articleName="island";
		sessionStorage.setItem("articleName", articleName);
	});



	/*===========================================Javascript code for Form================================================*/

	$('#myForm').submit(function(){
		
	});

	/*===========================================Javascript code for QUIZ================================================*/
	$('#check').click(function(){
		var i=Math.round(Math.random()*10);
		if (i>=5) {
			$('#check').attr('href','https://goo.gl/forms/kbw1S9LKUTOKRriY2');
		}
		else{
			$('#check').attr('href','https://goo.gl/forms/u0SCAE8E8M3jbyWU2');
		}
	});




});



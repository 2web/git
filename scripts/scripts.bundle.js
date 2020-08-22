$(function() {
	var $menu_popup = $('.menu-popup');
	
	$(".menu-triger, .menu-close").click(function(){
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu').length){
			$('body').removeClass('body_pointer');
			$menu_popup.slideUp(300);
		}
	});
	
	$(".href-showhide-pass").click(function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$('#InputPassword1').attr('type','text');
		}else{
			$('#InputPassword1').attr('type','password');
		}
		return false;
	});
	
	$("input[name='radiogetstart']").click(function(){
		var radioValue = $("input[name='radiogetstart']:checked").val();
		if(radioValue){
			$('.buttonAccept').removeAttr('disabled');
		}
	});
	$(".buttonAccept").click(function(){
		var radioValue = $("input[name='radiogetstart']:checked").val();
		if(radioValue=='worker'){
			$('.main-getstart-col-center').hide();
			$('.main-getstart-col-worker-step1').show();
		}else if(radioValue=='client'){
			$('.main-getstart-col-center').hide();
			$('.main-getstart-col-client-step1').show();
		}
		$('body').f_resize();
		return false;
	});
	$(".buttonAcceptFinish").click(function(){
		var radioValue = $("input[name='radiogetstart']:checked").val();
		if(radioValue=='worker'){
			$('.main-getstart-col-worker-step1').hide();
			$('.main-getstart-col-worker-finish').show();
			$('.flexslider').resize();
		}else if(radioValue=='client'){
			$('.main-getstart-col-client-step1').hide();
			$('.main-getstart-col-client-finish').show();
			$('.flexslider').resize();
		}
		$('body').f_resize();
		return false;
	});
	$(".href-back.to-start").click(function(){
		$('.main-getstart-col-center').show();
		$('.main-getstart-col-client-step1').hide();
		$('.main-getstart-col-worker-step1').hide();
		$('body').f_resize();
		return false;
	});
	$.fn.f_resize = function() {
		if(($('.main-getstart').outerHeight(true))<($('.main-getstart > :visible').outerHeight(true))+$('.header.fixed-top').outerHeight(true)+2){
			  $('.main-getstart').css('min-height',$('.main-getstart > :visible').outerHeight(true)+$('.header.fixed-top').outerHeight(true));
		}
		else{
			$('.main-getstart').css('min-height','auto');
		}
		  return true;
	 };
	
	
	$('body').f_resize();
	$(window).on('resize', function(){
		$('body').f_resize();
		
	});
	
	$("ul.check-stars li").click(function(){
		
		//$("ul.check-stars[data-val='"+$(this).parent().attr('data-val')+"'] li").removeClass("full");
		var cur = $(this).index();
		$( "ul.check-stars[data-val='"+$(this).parent().attr('data-val')+"'] li" ).each(function( index ) {
		  if(index <= cur){
			  $(this).addClass("full");
		  }else{
			  $(this).removeClass("full");
		  }
		});
		return false;
	});
	
	$("a.fancybox").fancybox();
	
	$("a.close-lp").click(function(){
		$(this).parent().remove();
		return false;
	});
	
	$("#inputBirth,#inputBirthMaster").mask("99/99/9999");
	$("#inputPhone,#inputPhoneCompany,#inputPhoneMaster").mask("+7 (999) 999 9999");
	$("#inputEmail,#inputEmailCompany,#inputEmailMaster").inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
		greedy: false,
		onBeforePaste: function (pastedValue, opts) {
		  pastedValue = pastedValue.toLowerCase();
		  return pastedValue.replace("mailto:", "");
		},
		definitions: {
		  '*': {
			validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
			cardinality: 1,
			casing: "lower"
		  }
		}
	});
	$( "#signupFormClient" ).validate( {
		rules: {
			inputName: "required",
			inputFamily: "required",
			inputPhone: "required",
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			inputEmail: {
				required: true,
				email: true
			}
		},
		messages: {
			inputName: "Пожалуйста, укажите имя",
			inputFamily: "Пожалуйста, укажите фамилию",
			password: {
				required: "Пожалуйста, укажите пароль",
				minlength: "Пароль должен быть больше 5 симв."
			},
			confirm_password: {
				required: "Пожалуйста, укажите пароль",
				minlength: "Пароль должен быть больше 5 симв.",
				equalTo: "Пароли должны совпадать"
			},
			inputPhone: "Введите номер телефона",
			inputEmail: "Введите email"
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "invalid-feedback" );

			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".col-xs-12" ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).parents( ".col-xs-12" ).addClass( "has-success" ).removeClass( "has-error" );
		}
	} );
	$( "#signupFormCompany" ).validate( {
		rules: {
			inputNameCompany: "required",
			inputPhoneCompany: "required",
			inputpasscompany: {
				required: true,
				minlength: 5
			},
			inputpasscompany_confirm: {
				required: true,
				minlength: 5,
				equalTo: "#inputpasscompany"
			},
			inputEmailCompany: {
				required: true,
				email: true
			}
		},
		messages: {
			inputNameCompany: "Пожалуйста, укажите название",
			inputpasscompany: {
				required: "Пожалуйста, укажите пароль",
				minlength: "Пароль должен быть больше 5 симв."
			},
			inputpasscompany_confirm: {
				required: "Пожалуйста, укажите пароль",
				minlength: "Пароль должен быть больше 5 симв.",
				equalTo: "Пароли должны совпадать"
			},
			inputPhoneCompany: "Введите номер телефона",
			inputEmailCompany: "Введите email"
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "invalid-feedback" );

			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".col-xs-12" ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).parents( ".col-xs-12" ).addClass( "has-success" ).removeClass( "has-error" );
		}
	} );
	$( "#signupFormMaster" ).validate( {
		rules: {
			inputNameMaster: "required",
			inputNameFamily: "required",
			inputPhoneMaster: "required",
			inputpassmaster: {
				required: true,
				minlength: 5
			},
			inputpassmaster_confirm: {
				required: true,
				minlength: 5,
				equalTo: "#inputpassmaster"
			},
			inputEmailMaster: {
				required: true,
				email: true
			}
		},
		messages: {
			inputNameMaster: "Пожалуйста, укажите имя",
			inputNameFamily: "Пожалуйста, укажите фамилию",
			inputpassmaster: {
				required: "Пожалуйста, укажите пароль",
				minlength: "Пароль должен быть больше 5 симв."
			},
			inputpassmaster_confirm: {
				required: "Пожалуйста, укажите пароль",
				minlength: "Пароль должен быть больше 5 симв.",
				equalTo: "Пароли должны совпадать"
			},
			inputPhoneMaster: "Введите номер телефона",
			inputEmailMaster: "Введите email"
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "invalid-feedback" );

			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".col-xs-12" ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).parents( ".col-xs-12" ).addClass( "has-success" ).removeClass( "has-error" );
		}
	} );
	$( "#loginForm" ).validate( {
		rules: {
			CustomUsername: "required",
			InputPassword1: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			CustomUsername: "Введите логин",
			InputPassword1: {
				required: "Введите пароль",
				minlength: "Пароль больше 5 симв."
			}
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "invalid-feedback" );
			error.insertAfter( element );
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
		}
	} );
});

$(document).ready(function(){
	$('#slider').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: false,
		animationLoop: false,
		slideshow: false, 
		start: function(slider){
			
		}
	});
	$('#slider2').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: false,
		animationLoop: false,
		slideshow: false, 
		start: function(slider){
			
		}
	});
});




// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(function($) {
	function setChecked(target) {
		var checked = $(target).find("input[type='checkbox']:checked").length;
		if (checked) {
			$(target).find('select option:first').html('Выбрано: ' + checked);
		} else {
			$(target).find('select option:first').html('Выберите из списка');
		}
	}

	$.fn.checkselect = function() {
		this.wrapInner('<div class="checkselect-popup"></div>');
		this.prepend(
			'<div class="checkselect-control">' +
				'<select class="form-control"><option></option></select>' +
				'<div class="checkselect-over"></div>' +
			'</div>'
		);	

		this.each(function(){
			setChecked(this);
		});		
		this.find('input[type="checkbox"]').click(function(){
			setChecked($(this).parents('.checkselect'));
		});

		this.parent().find('.checkselect-control').on('click', function(){
			$popup = $(this).next();
			$('.checkselect-popup').not($popup).css('display', 'none');
			if ($popup.is(':hidden')) {
				$popup.css('display', 'block');
				$(this).find('select').focus();
			} else {
				$popup.css('display', 'none');
			}
		});

		$('html, body').on('click', function(e){
			if ($(e.target).closest('.checkselect').length == 0){
				$('.checkselect-popup').css('display', 'none');
			}
		});
	};
})(jQuery);	

$('.checkselect').checkselect();
 $(document).ready(function() {



/*************************  Contact Form  *****************************/
	$("#contact").submit(function() {
		var elem = $(this);
		var urlTarget = $(this).attr("action");
		$.ajax({
			type : "POST",
			url : urlTarget,
			dataType : "html",
			data : $(this).serialize(),
			beforeSend : function() {
				elem.prepend("<div class='loading alert'>" + "<a class='close' data-dismiss='alert'>×</a>" + "Loading" + "</div>");
				//elem.find(".loading").show();
			},
			success : function(response) {
				elem.prepend(response);
				//elem.find(".response").html(response);
				elem.find(".loading").hide();
				elem.find("input[type='text'],input[type='email'],textarea").val("");
			}
		});
		return false;
	});


/*************************  One Page Navigation  *****************************/
	$('.nav').onePageNav({
	filter: ':not(.external)',
	scrollThreshold: 0.25,
	scrollOffset: 90,
	});


 


/******************************  ScrollUp  *********************************/
	 $(window).scroll(function(){
		 if ($(this).scrollTop() > 100) {
			 $('.scrollup').fadeIn();
		 } else {
			 $('.scrollup').fadeOut();
		 }
	 }); 
 
	 $('.scrollup').click(function(){
		 $("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	 });



/*************************  Slider Revolution  *****************************/
	if($('.fullwidthbanner').length) {

		$('.fullwidthbanner').revolution({
			hideThumbs:1,
			startwidth:1140,
			startheight:370,
			shadow:0,
			touchenabled:"on",
			navigationType: "bullet",
			navigationStyle: "round-old",
			hideAllCaptionAtLimit: 350,
		});
	}



/*******************************  gMaps  ***********************************/

	if ($('#map').length) {
		var map;
		map = new GMaps({
			div: '#map',
			lat: 30.501821,
			lng: -87.6414477,
			zoom: 12
		});
		map.addMarker({
			lat: 30.501821,
			lng: -87.6414477,
			title: 'Contact',
			infoWindow: {
				content: '15rd Avenue, New York,<br /> 156408, US<br /> <br /> Email: info@company.com <br /> Web: company.com'
			}
		});
	}




/******************************  jPlayer  **********************************/
// http://www.jplayer.org/ 

    $("#jquery_jplayer_1").jPlayer({
        ready: function(event) {
			console.log(event);
            $(this).jPlayer("setMedia", {
				// m4a: "https://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
				// oga: "https://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
				mp3: "sermons/GCCC17may2015.mp3",
				poster: "img/player/player1.jpg"
			});
        },
        swfPath: "../jPlayer",
        supplied: "mp3",
        size: {
			width: $('.player-container').width()+"px",
			height: $('.player-container').height()+"px",
			cssClass: "jp-video-360p"
		},
		smoothPlayBar: true,
		keyEnabled: true
    });



/*****************************  Playlist  **********************************/
	if( $('.sermons .playlist li a').length ) {
		$('.sermons .playlist li a').click(function(e){
			e.preventDefault();

			$('#jquery_jplayer_1').jPlayer('stop');
			
			$('.sermons .playlist li a').removeClass('active');
			$(this).addClass('active');

			$('.sermons .playlist li a i.icon-pause').removeClass('icon-pause').addClass('icon-play');
			$(this).children('i').removeClass('icon-play').addClass('icon-pause');

			$('.jp-title').html('<strong>' + $(this).data('title') + '</strong> ' + $(this).data('by'))

			$('#jquery_jplayer_1').jPlayer('setMedia', {
				mp3: $(this).data('url'),
				// m4a: $(this).data('url'),
				// ogv: $(this).data('url'),
				// webmv: $(this).data('url'),
				poster: $(this).data('poster')
			}) 
		});
    }



/***************************  prettyPhoto  ********************************/

	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});

    $("a[rel^='prettyPhoto']").prettyPhoto();



}); //end document ready
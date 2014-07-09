$(function() {
  // Scroll functions arrow 
	$(".arrow").click(function(e){
    $('html, body').animate({scrollTop:$('#about').offset().top +1}, 'slow');
	});

	// Typing in header
  $(".element").typed({
    strings: [
    	"design experiences.",  
    	"create beautiful User Interfaces.", 
    	"develop web applications.",
    	"make games.",
    	"design experiences."],
    typeSpeed: 75,
    backDelay: 1500 // 1500 - 2500 
  });
  
  // Slider section for portfolio
  var owl = $("#owl-demo");
  
  owl.owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    transitionStyle: 'goDown'
  });

  //Custom slider navigation events
  $('#lefty').click(function(){
   owl.trigger("owl.prev");  
  });

  $('#righty').click(function(){
    owl.trigger("owl.next");
  });

  //Functions hit by scroll position
  $(window).scroll(function() {
    // Scroll to experience section bars animations
    if($(this).scrollTop() >= $('#experience').position().top){ 
      var $span = $('.progress span');
      $span.each(function(index) {
        //animate each here
        $(this).stop().animate({width: $(this).data('width')}, 'slow');
      });
    }

    //Console append animation class on scroll to #contact 
    if($(window).width() >= 640) {
      if($(this).scrollTop() >= $('#contact').position().top){ 
       $('.push').stop().animate({marginTop: 250}, 'slow');
       $('input').focus();
      }
    }
  });

  //Form input console interactivity
  $('form').bind('submit', function(e){
    e.preventDefault();
    var cmd = $('input').val();
    var output = $('#output');
    cmd = cmd.toLowerCase();
    
    if(cmd == "email") { 
      //Figure out how to call email function.
      $('#email button').click();
      output.html("<span class='greeting'>I look forward to hearing from you =). </span>");
    }else if(cmd == "resume"){
      //Figure out how to call PDF resume tab
      $('#resume button').click();
      output.html("<pre> resume: { \n'company': ['Cafe.com','HackNy Fellowship Program'],\n'description': 'Contact me for hire or freelance design and development',\n'email': 'kylejson@mail.com',\n'experience': ['Grooveshark Front-End Engineer', 'Tapshield Web Developer', 'Freelance Developer and Designer', 'Rutgers Student Life Web Developer'],\n'frameworks': ['Backbone', 'Meteor', 'Flask', 'Rails', 'Angular'],\n'phone': '856-745-0208',\n'name': 'Kyle Johnson',\n'skills': ['Html/Css', 'Javascript', 'Ux/UI', 'MongoDb', 'Sql', 'Photoshop/Sketch', 'Ruby', 'Python']\n } \n <span class='greeting'>Thanks for checking out my resume!</span> </pre>");
    }else{
      output.html("<span class='warning'>Please only use 'email' and 'resume' commands =). </span>");
    }
    // return false;
  });

});

//Position the arrows dynamically
$(function(){
  $('#lefty, #righty').css('top', ($('#owl-demo').height()/2) - 75);
  $('#lefty').css('left', 0);
  $('#righty').css('right', 0);
});
function dentistslider(){
    $('.dentist_slides').slick({
  dots: false,
  arrows:true,  
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
}
function provider_slide(){
   $('.provider_dentist_slides').slick({
    dots: true,
  arrows:true,  
  infinite: true,
  speed: 300,
  autoplay:false,    
  slidesToShow: 1,
  slidesToScroll: 1,
     adaptiveHeight: true
  
});
}
function provider_slide(){
   $('.provider_dentist_slides').slick({
    dots: true,
  arrows:true,  
  infinite: true,
  speed: 300,
  autoplay:false,    
  slidesToShow: 1,
  slidesToScroll: 1,
     adaptiveHeight: true
  
});
}
function testimonial_slider() {
  $('.testimonial_slides').slick({
    dots: true,
  arrows:false,  
  infinite: true,
  speed: 300,
  autoplay:true,    
  slidesToShow: 1,
  slidesToScroll: 1,
    
});
}
function mb_slider() {
  $('.providers_sec .mbslides').slick({
    dots: true,
  arrows:false,  
  infinite: true,
  speed: 300,
  autoplay:true,    
  slidesToShow: 1,
  slidesToScroll: 1,
    
});
}
 $('.providers_sec .mbslides').slick({
    dots: true,
  arrows:false,  
  infinite: true,
  speed: 300,
  autoplay:true,    
  slidesToShow: 1,
  slidesToScroll: 1,
    
});
$(function () {
dentistslider();
  provider_slide();
  testimonial_slider();
  if ($(window).width() < 769) {
    mb_slider();
     $('.prov_sec .acctitle').on('click', function(e){
    e.preventDefault();
    $(this).parents('.prov_sec').toggleClass('active');
  });
  }
});
$(window).on('resize',function (){
  dentistslider();
  provider_slide();
  testimonial_slider();
  if ($(window).width() < 769) {
mb_slider();
  }
});


function sub_prod(){
  var leng = $('#freq').length;
  if(leng == 0){
   $( "<p class='del'>Delivery Frequency</p><div id='freq'></div>" ).insertAfter( ".rc-selling-plans-dropdown__select" );
      $(".rc-selling-plans-dropdown__select option").each(function(i, e) {
        var str1 = '';
        var str2 = '';
        if(i == 0){
          str1 = "4 tests per year";
          str2 = "One test shipped every 3 months";
        }
        else{
         str1 = "2 tests per year"; 
         str2 = "One test shipped every 6 months" 
        }
        $("<input type='radio' name='freq' id='val"+i+"'>")
        .attr("value", $(this).val())
        .attr("checked", i == 0)
        .click(function () {
          var t=  $(this).val();
          var select = document.querySelector('.rc-selling-plans-dropdown__select');
          select.value = t;
          select.dispatchEvent(new Event('change'));
        }).add($("<label class='interval' for='val"+i+"'><p>"+str1+"</p><span>"+str2+"</span></label>"))
        .appendTo("#freq");
       
      });
     $('#freq > input').each(function(num){
        $(this).next('label').addBack().wrapAll('<div class="interval-wrap num num'+num+'"/>');
      });
 
  }
}
$(window).on('load',function(){
    sub_prod();
});
$(document).on('click','.subscription-radio',function () {
  setTimeout(function(){
    sub_prod();
  },100);
  
})

// MUSTAJAB

$(function(){
  $(".jdgm-carousel-item__product-title").text("read more");

    if ($("form[data-productid='7648774258845'] .pf-option-swatches div[data-option-name='PFCombined'] label:contains(One-time Oral Microbiome Test)")){
       $("form[data-productid='7648774258845'] .pf-option-swatches div[data-option-name='PFCombined']:contains(One-time Oral Microbiome Test)").append('<p>1X Oral Microbiome Test <br>1X Personalized Care Plan</p>')
    }
      
    if ($("form[data-productid='7648774258845'] .pf-option-swatches div[data-option-name='PFCombined'] label:contains(Oral Microbiome Reset Program)")){
       $("form[data-productid='7648774258845'] .pf-option-swatches div[data-option-name='PFCombined']:contains(Oral Microbiome Reset Program)").append('<p>2X Oral Microbiome Tests<br>2X Personalized Care Plan<br>2X Coaching calls<br>Ongoing accountability, advice &amp; support</p>')
    }
  
});



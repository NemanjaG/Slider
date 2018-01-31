$(function() {

  //declaring variables.
  var slideWrap = $('#slide');
  var item = $('.img-slide');
  var slideItem = slideWrap.find(item);
  var activeItem = slideWrap.find('.active-slide');
  var controller = $('#controller');
  var prev = controller.find('.prev');
  var next = controller.find('.next');

  //set timer on slider.
  timer = setInterval(function(){
    var nextItem = $('.img-slide.active-slide').removeClass('active-slide').next(item);
    if (nextItem.length === 0) {
       nextItem = item.first();
    }
    nextItem.addClass('active-slide');
  }, 3000);

  //previous slide on prev button click.
  prev.on('click', function() {
    var nextItem = $('.img-slide.active-slide').removeClass('active-slide').prev(item);
    if (nextItem.length === 0) {
       nextItem = item.first();
    }
    nextItem.addClass('active-slide');
  });

  //next slide on next button click.
  next.on('click', function() {
    var nextItem = $('.img-slide.active-slide').removeClass('active-slide').next(item);
    if (nextItem.length === 0) {
       nextItem = item.last();
    }
    nextItem.addClass('active-slide');
  });

  //mouse enter and leave events.
  controller.mouseenter(function () {
    clearInterval(timer);
  });

  controller.mouseleave(function () {
    setInterval(timer, 3000);
  });

  slideWrap.mouseenter(function () {
    clearInterval(timer);
  });

  slideWrap.mouseleave(function () {
    setInterval(timer, 3000);
  });

});

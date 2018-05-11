var bg_tween = TweenMax.to('#cut02', 1, {
  backgroundColor: '#FFA500',
  // ease: Linear.easeNone
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: '#cut01',
	duration: 1000,
	offset: 100
})
.setPin('#cut01')
.setClassToggle('.phrase','red');

var bg_transparent_scene = new ScrollMagic.Scene({
	triggerElement: '#cut02'
})
.setTween(bg_tween);

controller.addScene([scene, bg_transparent_scene]);
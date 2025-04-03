import {init, olg, size} from '../../_common/js/common.js'


function stag(vh){
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}

function start(vh={x:-size.w}){
	const tl = init()		
	
	
	
	tl.from('.t1', stag(vh), "+=.2");		
	tl.to('.frame1', {duration:.3, opacity:0}, `+=2`);		

	
	
	

	tl.to('.frame2', {opacity:1, duration:.2} );		


	tl.from('.end_logo', {duration:.3, opacity:0});	

	tl.from('.end_txt1', {duration:.3, opacity:0});	
	tl.from('.end_txt2', {duration:.3, opacity:0}, "+=.3");	

	tl.from([".end_cta", ".end_smart"], {duration:.3, opacity:0});	


	
 
	
	
	tl.add(olg())
}


start()





module.exports = {};


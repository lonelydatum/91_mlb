import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

const LEGAL_RETAIL = "Individuals must be 18 years of age or older to participate in in-store sports betting with PROLINE. Individuals must be a resident of Ontario. Terms and Conditions apply."
const LEGAL_PLUS =   "Individuals must be 19 years of age or older to participate in online sports betting with PROLINE+. Individuals must be a resident of Ontario. Terms and Conditions apply. "
const legalString = (universalBanner.name.includes("plus")) ? LEGAL_PLUS:LEGAL_RETAIL

document.getElementById("legalContent").innerHTML = legalString



gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const nhl = {
	t1: 2.2,
	t2: 1.2,
	t3: 1,
}

const  nba = {
	t1: 3,
	t2: 1.2,
	t3: 1,
}


const nhl_plus = {
	t1: 2.2,
	t2: 1.2,
	t3: 1,
}

const  nba_plus = {
	t1: 2.3,
	t2: 1.9,
	t3: 1,
}


let READ = {
nhl,nba
}
READ["nba-plus"] = nba_plus
READ["nhl-plus"] = nhl_plus


READ = READ[universalBanner.name]
console.log(READ);



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}



function stag(vh){
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}



function start_landscape(vh={x:-size.w}){
	const tl = init()	
	tl.add("start")

	 
	tl.from('.t1', stag(vh), "start+=.3");	
	tl.from('.logo', {opacity:0, duration:.3});	
	
	
	if(universalBanner.name==="nhl-plus"){
		tl.to([".t1"], {duration:.3, opacity:0}, `+=${READ.t1}`)
		tl.from('.t2', stag(vh), "+=.3");	
		tl.to([".t2", ".bars", ".logo"], {duration:.3, opacity:0}, `+=${READ.t1}`)
	}else{
		tl.to([".t1", ".bars", ".logo"], {duration:.3, opacity:0}, `+=${READ.t1}`)
	}
	

	tl.from(".end_txt1", {duration:.2, opacity:0})

	
 

	tl.from([".end_cta", ".legalBtn",  ".end_logo", ".end_smart"], {duration:.3, opacity:0})
	
	tl.add(olg())
}

function start(boo=true, vh={x:-size.w}){
	const tl = init()		
	
	if(boo){
		TweenLite.from(".hero img", {duration:2.5, x:0, y:0, scale:.5, delay:.2, ease:"power2.in"})	
	}
	
	tl.from('.t1', stag(vh), "start");		
	tl.to('.t1', {duration:.3, opacity:0}, `+=${READ.t1}`);		

	
	tl.from('.t2', stag(vh));	
	

	tl.to('.frame2', {opacity:1, duration:.3}, `+=${READ.t2}` );		


	tl.from('.end_logo', {duration:.3, opacity:0});	

	tl.from('.end_txt1', {duration:.3, opacity:0});	
	tl.from('.end_txt2', {duration:.3, opacity:0}, "+=.3");	

	tl.from([".end_cta", ".end_smart"], {duration:.3, opacity:0});	


	
 
	
	
	tl.add(olg())
}




export {size, init, start, start_landscape, olg}




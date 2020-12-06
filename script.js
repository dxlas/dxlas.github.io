function popup(){
    const popup = document.querySelector('.popup');
const button = popup.querySelector('.btn');

button.addEventListener('click', function(){
    document.getElementById('username').value = "";
    document.getElementById('inst').value = "";
    document.getElementById('sugg').value = "";
    
})
}
 

    function init(){  
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            
            zoom: 7
        });
    }
    function change(element){
    	var a = element.innerHTML;
    	switch(a){
    		case "INSPO":
    		break;
}

    		$("#img1").animate({ opacity:'0'}, "slow");
	$("#img1").animate({ opacity: '1'}, "slow");

    }
    const button = document.querySelector('#inspo');
    			button.addEventListener('click', function{ document.querySelector('.create').style.background = none;
    			
    function big(element) {
		element.style.fontSize = "21px";
	}
	function small(element){
		element.style.fontSize = "19px";
	}
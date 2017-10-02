$(document).ready(function(){ 
	$('#sideNav').height($('#beforePictureGallery').height());
	$("#header").affix({offset: {top: $("#beforePictureGallery").outerHeight(true)} });
	showPictures('london');
}) 

var countryName = ['hongkong','boston','london','italy','greece','japan'];
var countryCount = ['10','10','36','10','50','10'];
var countrySeen = ['0','0','0','0','0','0'];
var lastCountry = "london";

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";        
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";    
}

function showPictures(country) {
	//$('#'+country+'Container').append("Hello World");
	$('#'+lastCountry+'Container').hide();
	lastCountry = country;
	var pos = countryName.indexOf(country);
	var max = countryCount[pos];
	console.log(max);
	console.log(countrySeen[pos]);
	if (countrySeen[pos] == 0) { 
		for (i = 1; i < max; i++ ) {
			$('#'+country+'Container').append('<div class="col-md-4 col-sm-6 co-xs-12 gal-item"> <div class="box"> <a href="#" data-toggle="modal" data-target="#8"> <img src=pictures/photography/'+country+'/'+i+'.jpg> </a> <div class="modal fade" id="8" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> <div class="modal-body"> <img src=pictures/photography/'+country+'/'+i+'.jpg> </div> <div class="col-md-12 description"> <h4>'+country+'</h4> </div> </div> </div> </div> </div> </div>');
		}
	}
	$('#'+country+'Container').show();
	countrySeen[pos] = 1;
}

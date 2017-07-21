function loadBlog(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var post ="&nbsp;";
  var lastpost ="&nbsp;";
  var listpost ="&nbsp;";
  var x = xmlDoc.getElementsByTagName("POSTS");
  for (i = 0; i <x.length; i++) { 
  	post += '<div class=\"post\"id=\"'+
  	'POST'+[i]+
	'\" ><h1>' +
  	x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  	'</h1><h2 class=\"clearfix\">' +
  	x[i].getElementsByTagName("DATE")[0].childNodes[0].nodeValue +
  	'</h2><a href=\"'+
  	x[i].getElementsByTagName("IMAGELINK")[0].childNodes[0].nodeValue +
  	'\" class=\"clearfix\"><img class=\"imgthumb\" src=\"' +
  	x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +
  	'\"></a><h2  id="desc">' +
  	x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue + 
  	'</h2>' +
  	x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue + 
  	'</div><hr>';
  	 listpost+= '<a href=\"'+
  	 '#POST'+[i]+
  	 '\"><li>'+
  	 x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  	 ' &mdash; '
  	 +x[i].getElementsByTagName("DATE")[0].childNodes[0].nodeValue
  	 +
  	 '</li></a>';
  }
  document.getElementById("postloc").innerHTML = post;
  document.getElementById("list").innerHTML = listpost;
  for (i =0; i < 1; i++) {
  lastpost += '<a href=\"'+
  '#POST'+[i]+
  '\"><div id="latest" class="latest"><h1>'+x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+'</h1><h2>' +
  x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue +
  '</h2></div></a><hr>';
  document.getElementById("latestloc").innerHTML = lastpost;
  $('#latest').css('background-image', 'url("' + x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue + '")');
  }
  $("body").html($("body").html().replace(/[p]/g,'<p>'));
  $("body").html($("body").html().replace(/[/p]/g,'</p>'));
}
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadBlog(this);
    }
  };
  xhttp.open("GET", "/blog.xml", true);
  xhttp.send();
}

function loadBlogx() {
	// if ($("#gallery").css('display') == "block") {
	// 	$("#blog").css("display","block");
	// 	} else {
	// 		$("#gallery").css("display","none");
	// 	}
	console.log("reeeeeeeeeeeeeeee");
	$("#blog").css("display","block");
	$("#gallery").css("display","none");
	
}
function loadGallx() {
	// if ($('#blog').css('display') !== "block") {
	// 	$('#gallery').css("display","block");
	// 	} else {
	// 		$('#gallery').css("display","none");
	// 	}
	console.log("roooooooooo");
	
	$("#gallery").css("display","block");
	$("#blog").css("display","none");
	
}

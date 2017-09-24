var clockvar = {};

var za1 = " pierwsza"; var po1 = " po pierwszej"; var half1 = " pierwszej";
var za2 = " druga"; var po2 = " po drugiej"; var half2 = " drugiej";
var za3 = " trzecia"; var po3 = " po trzeciej"; var half3 = " trzeciej";
var za4 = " czwarta"; var po4 = " po czwartej"; var half4 = " czwartej";
var za5 = " piąta"; var po5 = " po piątej"; var half5 = " piątej";
var za6 = " szósta"; var po6 = " po szóstej"; var half6 = " szóstej";
var za7 = " siódma"; var po7 = " po siódmej"; var half7 = " siódmej";
var za8 = " ósma"; var po8 = " po ósmej"; var half8 = " ósmej";
var za9 = " dziewiąta"; var po9 = " po dziewiątej"; var half9 = " dziewiątej";
var za10 = " dziesiąta"; var po10 = " po dziesiątej"; var half10 = " dziesiątej";
var za11 = " jedenasta"; var po11 = " po jedenastej"; var half11 = " jedenastej";
var za12 = " dwunasta"; var po12 = " po dwunastej"; var half12 = " dwunastej";

function clock() {	
	var d = new Date();
	clockvar.h = d.getHours();
	clockvar.m = d.getMinutes();
	var h = clockvar.h;
	var m = clockvar.m;
	var s = d.getSeconds();
	document.getElementById("par").innerHTML = h + ":" + m + ":" + s;
	 
	var hour1 = clockvar.hour1;
	var hour2 = clockvar.hour2;
	var hour3 = clockvar.hour3;
	var txt_min = clockvar.txt_min;
	
	//console.log(h + ":" + m + ":" + s);
	console.log(hour1 + "," + hour2 + "," + txt_min);
	
	par2 = document.getElementById("par2");
	//par2.innerHTML = "Jest " + m + hour1;
	
	if (m == 0) {clock_text = "Jest" + hour2;
	} else if (m == 1) {clock_text = "Jest " + txt_min + hour1;
	} else if (m == 30) {clock_text = "Jest wpół do" + hour3;
	} else if (m > 30) {clock_text = "Jest za " + txt_min + hour2;
	} else if (m < 5) {clock_text = "Są " + txt_min + hour1;
	} else if (m > 4) {clock_text = "Jest " + txt_min + hour1;}
	par2.innerHTML = clock_text;
}

function check_for_hours() {
	var h = clockvar.h;
	if (h == 1) {var hour1 = po1; var hour2 = za2; var hour3 = half2;} if (h == 13) {var hour1 = po2; var hour2 = za1; var hour3 = half2;}
	if (h == 2) {var hour1 = po2; var hour2 = za3; var hour3 = half3;} if (h == 14) {var hour1 = po3; var hour2 = za1; var hour3 = half3;}
	if (h == 3) {var hour1 = po3; var hour2 = za4; var hour3 = half4;} if (h == 15) {var hour1 = po4; var hour2 = za1; var hour3 = half4;}
	if (h == 4) {var hour1 = po4; var hour2 = za5; var hour3 = half5;} if (h == 16) {var hour1 = po5; var hour2 = za1; var hour3 = half5;}
	if (h == 5) {var hour1 = po5; var hour2 = za6; var hour3 = half6;} if (h == 17) {var hour1 = po5; var hour2 = za6; var hour3 = half6;}
	if (h == 6) {var hour1 = po6; var hour2 = za7; var hour3 = half7;} if (h == 18) {var hour1 = po6; var hour2 = za7; var hour3 = half7;}
	if (h == 7) {var hour1 = po7; var hour2 = za8; var hour3 = half8;} if (h == 19) {var hour1 = po7; var hour2 = za8; var hour3 = half8;}
	if (h == 8) {var hour1 = po8; var hour2 = za9; var hour3 = half9;} if (h == 20) {var hour1 = po8; var hour2 = za9; var hour3 = half9;}
	if (h == 9) {var hour1 = po9; var hour2 = za10; var hour3 = half10;} if (h == 21) {var hour1 = po9; var hour2 = za10; var hour3 = half10;}
	if (h == 10) {var hour1 = po10; var hour2 = za11; var hour3 = half11;} if (h == 22) {var hour1 = po10; var hour2 = za11; var hour3 = half11;}
	if (h == 11) {var hour1 = po11; var hour2 = za12; var hour3 = half12;} if (h == 23) {var hour1 = po11; var hour2 = za12; var hour3 = half12;}
	if (h == 12) {var hour1 = po12; var hour2 = za1; var hour3 = half1;} if (h == 00) {var hour1 = po12; var hour2 = za1; var hour3 = half1;}
	clockvar.hour1 = hour1;
	clockvar.hour2 = hour2;
	clockvar.hour3 = hour3;
	
	//console.log(h + ":" + m);
}

function check_for_minutes() {
	var m = clockvar.m;
	if (m == 1) {var txt_min = "jedna";} if (m == 59) {var txt_min = "jedna";}
	if (m == 2) {var txt_min = "dwie";} if (m == 58) {var txt_min = "dwie";}
	if (m == 3) {var txt_min = "trzy";} if (m == 57) {var txt_min = "trzy";}
	if (m == 4) {var txt_min = "cztery";} if (m == 56) {var txt_min = "cztery";}
	if (m == 5) {var txt_min = "pięć";} if (m == 55) {var txt_min = "pięć";}
	if (m == 6) {var txt_min = "sześć";} if (m == 54) {var txt_min = "sześć";}
	if (m == 7) {var txt_min = "siedem";} if (m == 53) {var txt_min = "siedem";}
	if (m == 8) {var txt_min = "osiem";} if (m == 52) {var txt_min = "osiem";}
	if (m == 9) {var txt_min = "dziewięć";} if (m == 51) {var txt_min = "dziewięć";}
	if (m == 10) {var txt_min = "dziesięć";} if (m == 50) {var txt_min = "dziesięć";}
	if (m == 11) {var txt_min = "jedenaście";} if (m == 49) {var txt_min = "jedenaście";}
	if (m == 12) {var txt_min = "dwanaście";} if (m == 48) {var txt_min = "dwanaście";}
	if (m == 13) {var txt_min = "trzynaście";} if (m == 47) {var txt_min = "trzynaście";}
	if (m == 14) {var txt_min = "czternaście";} if (m == 46) {var txt_min = "czternaście";}
	if (m == 15) {var txt_min = "kwadrans";} if (m == 45) {var txt_min = "kwadrans";}
	if (m == 16) {var txt_min = "szesnaście";} if (m == 44) {var txt_min = "szesnaście";}
	if (m == 17) {var txt_min = "siedemnaście";} if (m == 43) {var txt_min = "siedemnaście";}
	if (m == 18) {var txt_min = "osiemnaście";} if (m == 42) {var txt_min = "osiemnaście";}
	if (m == 19) {var txt_min = "dziewiętnaście";} if (m == 41) {var txt_min = "dziewiętnaście";}
	if (m == 20) {var txt_min = "dwadzieścia";} if (m == 40) {var txt_min = "dwadzieścia";}
	if (m == 21) {var txt_min = "dwadzieścia jeden";} if (m == 39) {var txt_min = "dwadzieścia jeden";}
	if (m == 22) {var txt_min = "dwadzieścia dwa";} if (m == 38) {var txt_min = "dwadzieścia dwa";}
	if (m == 23) {var txt_min = "dwadzieścia trzy";} if (m == 37) {var txt_min = "dwadzieścia trzy";}
	if (m == 24) {var txt_min = "dwadzieścia cztery";} if (m == 36) {var txt_min = "dwadzieścia cztery";}
	if (m == 25) {var txt_min = "dwadzieścia pięć";} if (m == 35) {var txt_min = "dwadzieścia pięć";}
	if (m == 26) {var txt_min = "dwadzieścia sześc";} if (m == 34) {var txt_min = "dwadzieścia sześc";}
	if (m == 27) {var txt_min = "dwadzieścia siedem";} if (m == 33) {var txt_min = "dwadzieścia siedem";}
	if (m == 28) {var txt_min = "dwadzieścia osiem";} if (m == 32) {var txt_min = "dwadzieścia osiem";}
	if (m == 29) {var txt_min = "dwadzieścia dziewięć";} if (m == 31) {var txt_min = "dwadzieścia dziewięć";}
	if (m == 30) {var txt_min = "wpół do";}
	clockvar.txt_min = txt_min;
}

setInterval(clock, 1000);
setInterval(check_for_hours, 1000);
setInterval(check_for_minutes, 1000);
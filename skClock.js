var text_visible = "#3030dc";
var text_hidden = "#070707";

function loaded() {
	document.getElementById("header").style.color = text_hidden;
}

function clock() {
	var teksty = document.getElementsByClassName("tekst");
	for (var i in teksty) {
  		if (teksty.hasOwnProperty(i)) {
    		teksty[i].style.color = text_hidden;
  		}
	}
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
		
	clb("txt_jest");
	if ((m == 1)||(m == 59)) {clb("txt_1")}
	if ((m == 2)||(m == 58)) {clb("txt_2")}
	if ((m == 3)||(m == 57)) {clb("txt_3")}
	if ((m == 4)||(m == 56)) {clb("txt_4")}
	if ((m == 5)||(m == 55)) {clb("txt_5")}
	if ((m == 6)||(m == 54)) {clb("txt_6")}
	if ((m == 7)||(m == 53)) {clb("txt_7")}
	if ((m == 8)||(m == 52)) {clb("txt_8")}
	if ((m == 9)||(m == 51)) {clb("txt_9")}
	if ((m == 10)||(m == 50)) {clb("txt_10")}
	if ((m == 11)||(m == 49)) {clb("txt_11"); clb("txt_nascie")}
	if ((m == 12)||(m == 48)) {clb("txt_2"); clb("txt_nascie")}
	if ((m == 13)||(m == 47)) {clb("txt_3"); clb("txt_nascie")}
	if ((m == 14)||(m == 46)) {clb("txt_14"); clb("txt_nascie")}
	if ((m == 15)||(m == 45)) {clb("txt_15"); clb("txt_nascie")}
	if ((m == 16)||(m == 44)) {clb("txt_16"); clb("txt_nascie")}
	if ((m == 17)||(m == 43)) {clb("txt_7"); clb("txt_nascie")}
	if ((m == 18)||(m == 42)) {clb("txt_8"); clb("txt_nascie")}
	if ((m == 19)||(m == 41)) {clb("txt_19"); clb("txt_nascie")}
	if ((m == 20)||(m == 40)) {clb("txt_20")}
	if ((m == 21)||(m == 39)) {clb("txt_20"); clb("txt_1")}
	if ((m == 22)||(m == 38)) {clb("txt_20"); clb("txt_2")}
	if ((m == 23)||(m == 37)) {clb("txt_20"); clb("txt_3")}
	if ((m == 24)||(m == 36)) {clb("txt_20"); clb("txt_4")}
	if ((m == 25)||(m == 35)) {clb("txt_20"); clb("txt_5")}
	if ((m == 26)||(m == 34)) {clb("txt_20"); clb("txt_6")}
	if ((m == 27)||(m == 33)) {clb("txt_20"); clb("txt_7")}
	if ((m == 28)||(m == 32)) {clb("txt_20"); clb("txt_8")}
	if ((m == 29)||(m == 31)) {clb("txt_20"); clb("txt_9")}
	if (m == 30) {clb("txt_30_2"); clb("txt_a")}
	
	if (m <= 30) {
		if ((h == 1)|| (h == 13)) {clb("txt_pierwsz")}	
		if ((h == 2)|| (h == 14)) {clb("txt_drug")}	
		if ((h == 3)|| (h == 15)) {clb("txt_trzeci")}	
		if ((h == 4)|| (h == 16)) {clb("txt_czwart")}	
		if ((h == 5)|| (h == 17)) {clb("txt_piat")}	
		if ((h == 6)|| (h == 18)) {clb("txt_szost")}	
		if ((h == 7)|| (h == 19)) {clb("txt_siodm")}	
		if ((h == 8)|| (h == 20)) {clb("txt_osm")}	
		if ((h == 9)|| (h == 21)) {clb("txt_dziewiat")}	
		if ((h == 10)|| (h == 22)) {clb("txt_dziesiat")}	
		if ((h == 11)|| (h == 23)) {clb("txt_jedenast")}	
		if ((h == 12)|| (h == 0)) {clb("txt_dwunast")}
		clb("txt_ej"); clb("txt_po");
	}
	if (m > 30) {
		if ((h == 1)|| (h == 13)) {clb("txt_drug")}	
		if ((h == 2)|| (h == 14)) {clb("txt_trzeci")}	
		if ((h == 3)|| (h == 15)) {clb("txt_czwart")}	
		if ((h == 4)|| (h == 16)) {clb("txt_piat")}	
		if ((h == 5)|| (h == 17)) {clb("txt_szost")}	
		if ((h == 6)|| (h == 18)) {clb("txt_siodm")}	
		if ((h == 7)|| (h == 19)) {clb("txt_osm")}	
		if ((h == 8)|| (h == 20)) {clb("txt_dziewiat")}	
		if ((h == 9)|| (h == 21)) {clb("txt_dziesiat")}	
		if ((h == 10)|| (h == 22)) {clb("txt_jedenast")}	
		if ((h == 11)|| (h == 23)) {clb("txt_dwunast")}	
		if ((h == 12)|| (h == 0)) {clb("txt_pierwsz")}
		clb("txt_za"); clb("txt_a");
	}
	if ((m == 0)|| (m == 30)) {document.getElementById("txt_ej").style.color = text_hidden; document.getElementById("txt_po").style.color = text_hidden; clb("txt_a")}
}

function clb(markup) {document.getElementById(markup).style.color = text_visible}

setInterval(clock, 1000);
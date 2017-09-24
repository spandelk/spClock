var text_visible = "#3030dc";	//Kolor tekstu na pierwszym planie
var text_hidden = "#070707";	//Kolor tekstu "w tle"

function loaded() {
	document.getElementById("header").style.color = text_hidden;
}
//Główna funkcja odpowiedzialna za zegar
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
	
	//Pokazuje odpowiednią liczbę w zależności od minuty
	chcl("txt_jest");
	if ((m == 1)||(m == 59)) {chcl("txt_1")}
	if ((m == 2)||(m == 58)) {chcl("txt_2")}
	if ((m == 3)||(m == 57)) {chcl("txt_3")}
	if ((m == 4)||(m == 56)) {chcl("txt_4")}
	if ((m == 5)||(m == 55)) {chcl("txt_5")}
	if ((m == 6)||(m == 54)) {chcl("txt_6")}
	if ((m == 7)||(m == 53)) {chcl("txt_7")}
	if ((m == 8)||(m == 52)) {chcl("txt_8")}
	if ((m == 9)||(m == 51)) {chcl("txt_9")}
	if ((m == 10)||(m == 50)) {chcl("txt_10")}
	if ((m == 11)||(m == 49)) {chcl("txt_11"); chcl("txt_nascie")}
	if ((m == 12)||(m == 48)) {chcl("txt_2"); chcl("txt_nascie")}
	if ((m == 13)||(m == 47)) {chcl("txt_3"); chcl("txt_nascie")}
	if ((m == 14)||(m == 46)) {chcl("txt_14"); chcl("txt_nascie")}
	if ((m == 15)||(m == 45)) {chcl("txt_15"); chcl("txt_nascie")}
	if ((m == 16)||(m == 44)) {chcl("txt_16"); chcl("txt_nascie")}
	if ((m == 17)||(m == 43)) {chcl("txt_7"); chcl("txt_nascie")}
	if ((m == 18)||(m == 42)) {chcl("txt_8"); chcl("txt_nascie")}
	if ((m == 19)||(m == 41)) {chcl("txt_19"); chcl("txt_nascie")}
	if ((m == 20)||(m == 40)) {chcl("txt_20")}
	if ((m == 21)||(m == 39)) {chcl("txt_20"); chcl("txt_1")}
	if ((m == 22)||(m == 38)) {chcl("txt_20"); chcl("txt_2")}
	if ((m == 23)||(m == 37)) {chcl("txt_20"); chcl("txt_3")}
	if ((m == 24)||(m == 36)) {chcl("txt_20"); chcl("txt_4")}
	if ((m == 25)||(m == 35)) {chcl("txt_20"); chcl("txt_5")}
	if ((m == 26)||(m == 34)) {chcl("txt_20"); chcl("txt_6")}
	if ((m == 27)||(m == 33)) {chcl("txt_20"); chcl("txt_7")}
	if ((m == 28)||(m == 32)) {chcl("txt_20"); chcl("txt_8")}
	if ((m == 29)||(m == 31)) {chcl("txt_20"); chcl("txt_9")}
	if (m == 30) {chcl("txt_30_2"); chcl("txt_a")}
	
	//Pokazuje odpowiednią liczbę w zależności od godziny (i minuty)
	if (m <= 30) {
		if ((h == 1)|| (h == 13)) {chcl("txt_pierwsz")}	
		if ((h == 2)|| (h == 14)) {chcl("txt_drug")}	
		if ((h == 3)|| (h == 15)) {chcl("txt_trzeci")}	
		if ((h == 4)|| (h == 16)) {chcl("txt_czwart")}	
		if ((h == 5)|| (h == 17)) {chcl("txt_piat")}	
		if ((h == 6)|| (h == 18)) {chcl("txt_szost")}	
		if ((h == 7)|| (h == 19)) {chcl("txt_siodm")}	
		if ((h == 8)|| (h == 20)) {chcl("txt_osm")}	
		if ((h == 9)|| (h == 21)) {chcl("txt_dziewiat")}	
		if ((h == 10)|| (h == 22)) {chcl("txt_dziesiat")}	
		if ((h == 11)|| (h == 23)) {chcl("txt_jedenast")}	
		if ((h == 12)|| (h == 0)) {chcl("txt_dwunast")}
		chcl("txt_ej"); chcl("txt_po");
	}
	if (m > 30) {
		if ((h == 1)|| (h == 13)) {chcl("txt_drug")}	
		if ((h == 2)|| (h == 14)) {chcl("txt_trzeci")}	
		if ((h == 3)|| (h == 15)) {chcl("txt_czwart")}	
		if ((h == 4)|| (h == 16)) {chcl("txt_piat")}	
		if ((h == 5)|| (h == 17)) {chcl("txt_szost")}	
		if ((h == 6)|| (h == 18)) {chcl("txt_siodm")}	
		if ((h == 7)|| (h == 19)) {chcl("txt_osm")}	
		if ((h == 8)|| (h == 20)) {chcl("txt_dziewiat")}	
		if ((h == 9)|| (h == 21)) {chcl("txt_dziesiat")}	
		if ((h == 10)|| (h == 22)) {chcl("txt_jedenast")}	
		if ((h == 11)|| (h == 23)) {chcl("txt_dwunast")}	
		if ((h == 12)|| (h == 0)) {chcl("txt_pierwsz")}
		chcl("txt_za"); chcl("txt_a");
	}
	if ((m == 0)|| (m == 30)) {
		document.getElementById("txt_ej").style.color = text_hidden;
		document.getElementById("txt_po").style.color = text_hidden;
		chcl("txt_a");
	}
}
//Funkcja zmieniająca kolor tekstu
function chcl(markup) {document.getElementById(markup).style.color = text_visible}
setInterval(clock, 1000);
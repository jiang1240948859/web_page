
var plants = new Array();
function plant(id,name, distribution, symptom, safety, traditional_use, research,link,pic){
    this.id = id;
    this.name = name;
    this.distribution = distribution;
    this.symptom = symptom;
    this.safety = safety;
    this.traditional_use = traditional_use;
    this.research = research;
    this.link = link;
    this.pic = pic;

}
plants[0] = new plant(0,'Yarrow',['global'],['colds','flu','fever'],3,5,1,'Yarrow.html','image/yarrow.jpg');
plants[1] = new plant(1,'Chiretta',['India'],['poor immune system', 'liver and digestive problems'],4,4,3,'Chiretta.html','image/chiretta.jpg');
plants[2] = new plant(2,'Horse chestnut',['Europe','Aisa'],['venous circulatory problems'],3,4,4,'Horse_chestnut.html','image/Horse_chestnut.jpg');
plants[3] = new plant(3,'Garlic',['global'],['infections'],4,5,5,'Garlic.html','garlic.jpg');
plants[4] = new plant(4,'Aloe vera',['tropics'],['skin conditions','wounds','burns'],4,5,4,'Aloe_vera.html','image/Aloe_vera.jpg');
plants[5] = new plant(5, 'Marshmallow',['Europe'],['inflamed mucuous membranes'],5,4,3,'Marshmallow.html','image/Marshmallow.jpg');
plants[6] = new plant(6,'Celery',['global'],['athritics problems','rheumatic problems'],4,4,2,'Celery.html','image/celery.jpg');
plants[7] = new plant(7,'Burdock',['Europe', 'America','China'],['blood cleanser'],4,4,1,'Burdock.html','image/Burdock.jpg');
plants[8] = new plant(8,'Austragalus',['China'],['low endurance', 'weak immune resistance'],4,5,3,'Austragalus.html','image/Austragalus.jpg');
plants[9] = new plant(9,'Echinacea',['North America'],['colds','flu','viral infection', 'bacterial infection'],4,4,3,'Echinacea.html','image/echinacea.jpg');
plants[10] = new plant(10,'Black cohosh',['America'],['menopause'],4,4,3,'cohosh.html','image/cohosh.jpg');
plants[11] = new plant(11,'German Chamomile',['Europe'],['digestive and inflammatory condition'],4,5,4,'German_Chamomile.html','image/chamomile.jpg');

function showContent(){
    var htmltext = "<tbody>";
    for(var i = 0; i < plants.length; i++){
        htmltext +="<tr><td>";
        htmltext +="<a href = \'";
        htmltext +=plants[i].link;
        htmltext +="\'>";
        htmltext +=plants[i].name;
        htmltext +="<a>";
        htmltext +="</td></tr>\n";
    }
    htmltext += '</tbody>';
    document.getElementById('quickvisit').innerHTML += htmltext;

}
function showOptions(){
    var list = new Array();
    var text = window.opener.document.getElementById('search').value;
    var type = window.opener.document.querySelector('select').value;
    var expr = new RegExp(text, 'i');
    if (text ==''){}
    else if (type == 'herbs'){
        for (var i = 0; i < plants.length; i++){
            if (expr.test(plants[i].name)){
                list.push(plants[i].id);
            }
        }
    }
    else if(type=='symptoms'){
        for (var i = 0; i<plants.length;i++){
            for (var j = 0; j<plants[i].symptom.length;j++){
                if (expr.test(plants[i].symptom[j])){
                    list.push(i);
                    break;
                }
            }
        }
    }
    else if (type == 'distribution areas'){
        for (var i = 0; i<plants.length;i++){
            for (var j = 0; j<plants[i].distribution.length;j++){
                if (expr.test(plants[i].distribution[j])){
                    list.push(i);
                    break;
                }
            }
        }
    }
    if (list.length==0)
        pasteNotice();
    for (var i = 0; i<list.length;i++)
        pasteOptions(list[i]);
}

function pasteOptions(num){
    var text = '<tr> <td width="600"> <img src="';
    text += plants[num].pic;
    text += '" class="image" /> <a href = "';
    text += plants[num].link;
    text += '" class="link">';
    text += plants[num].name;
    text += '</a><p>Symptoms:';
    for (var i = 0; i<plants[num].symptom.length; i++){
        text += plants[num].symptom[i];
        if (i != plants[num].symptom.length - 1){
            text += ', ';
        }
    }
    text += '</p><p>Distribution areas:';
    for (var i = 0; i<plants[num].distribution.length;i++){
        text += plants[num].distribution[i];
        if (i != plants[num].distribution.length - 1)
            text += ', ';
    }
    text += '</p></td></tr>'
    document.getElementById('optionbox').innerHTML += text;

}
function pasteNotice(){
    var text = '<p>Nothing found </p>';
    document.getElementById('optionbox').innerHTML += text;
}
/*function showStar(herb){

    document.getElementById('safety').innerText = getStars(1);
    document.getElementById('traditional_use').innerHTML = getStars(plants[herb].traditional_use);
    document.getElementById('research').innerHTML = getStars(plants[herb].research);
}
function getStars(n){
    var text = '';
    for(var i = 1; 1<n+1;i++){
        text += ' &#9733 ';
    }
    return text;
}*/

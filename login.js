var code=[10,10,10,10];
function showCode(){
    for (var i = 0; i < 4; i++){
        code[i] = Math.floor(Math.random()*10);
    }
    var htmltext = '';
    for (var i = 0; i<4;i++) {
        var num = Math.floor(Math.random()*10);
        htmltext += "<img src = 'digit/"  + code[i].toString() + "/"+ num.toString() + ".jpg' class = 'inline' />  \n"
    }
    document.getElementById('codeholder').innerHTML = htmltext;
}
var times = false;
function showCode_1() {
    if (times)
        return 0;
    for (var i = 0; i < 4; i++) {
        code[i] = Math.floor(Math.random() * 10);
    }
    var htmltext = '';
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 10);
        htmltext += "<img src = 'digit/" + code[i].toString() + "/" + num.toString() + ".jpg' class = 'inline' />  \n"
    }
    document.getElementById('codeholder').innerHTML = htmltext;
    times = true;
}
function verify(){
    var text = document.getElementById('verycode').value;
    var isvalid = true;
    if (text.length==4){
        for(var i = 0; i<4;i++){
            if (parseInt(text[i])!=code[i])
                isvalid = false;
        }
        if (document.getElementById('user-name').value =='')
            isvalid = false;
        if (document.getElementById('user-pass').value =='')
            isvalid = false;
        if (isvalid){
            document.getElementById('message').innerText = 'Log in successfully';
            return 0;
        }
    }
    document.getElementById('message').innerText = 'Invalid information';
}
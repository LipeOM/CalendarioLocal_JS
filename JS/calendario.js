now = new Date;
var y = (now.getFullYear());
var m = (now.getMonth());
var d = (now.getDate());

window.onload = function start(){
 	
 	mostra();
    //variaveis 
	var mes = document.getElementById("mes");
	var dia = document.getElementById("dias");
	var bo = false;
	var bo2 = false;

	//Arrays
	monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

	//insere HTML
	mes.innerHTML = "<h2> "+ monName[now.getMonth()]+"</h2>";
	mes.innerHTML += "<p>" + now.getFullYear() + "</p>";

		if(diaDaSemana(now.getFullYear(), now.getMonth()) == 0) {
			dia.innerHTML += '<div class=""></div>';

		} else if(diaDaSemana(now.getFullYear(), now.getMonth()) == 1){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';

		} else if(diaDaSemana(now.getFullYear(), now.getMonth()) == 2){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';

		} else if(diaDaSemana(now.getFullYear(), now.getMonth()) == 3){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			
		} else if(diaDaSemana(now.getFullYear(), now.getMonth()) == 4){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			
		} else if(diaDaSemana(now.getFullYear(), now.getMonth()) == 5){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			
		}


	for(var i = 1; i <= diasNoMesAtual(); i++){


		criarEvento().forEach(valorAtual =>{
 		
			if((valorAtual == (now.getFullYear()+"-0"+(now.getMonth()+1)+"-"+i)) || (valorAtual == (now.getFullYear()+"-"+(now.getMonth()+1)+"-"+i)) ||
				(valorAtual == (now.getFullYear()+"-0"+(now.getMonth()+1)+"-0"+i)) || (valorAtual == (now.getFullYear()+"-"+(now.getMonth()+1)+"-0"+i))) { 
				if(i == now.getDate()){
					dia.innerHTML += '<div class="hojeEvento">'+ i +'</div>';
					bo2 = true;
				} else {
					dia.innerHTML += '<div class="evento">'+ i +'</div>';
				}
				bo = true;

			}
		})
		if(i == now.getDate() && bo2 == false){
			dia.innerHTML += '<div class="hoje" onclick="preencher('+i+')"> '+ i +'</div>';
		} else if(bo == false){
			dia.innerHTML += "<div onclick='preencher("+i+")'> "+ i +"</div>";
		}
		bo = false;
		bo2= false;
	}
	bo3 = false;
}

function next(){

	m++;

	if(m==13){
		m = 1;
		y++;

	}
	data = new Date(y, m);

	atualizaCalendario();
}

function prev(){

	m--;

	if(m==0){
		m = 12;
		y--;

	}
	data = new Date(y, m);

	atualizaCalendario();
}

function atualizaCalendario(){
	var mes = document.getElementById("mes");
	var dia = document.getElementById("dias");
	var bo = false;
	var bo2 = false;

	//Apaga HTML
	mes.innerHTML = "";
	dia.innerHTML = "";


	//Insere HTML
	mes.innerHTML = "<h2> "+ monName [data.getMonth() ]+"</h2>";
	mes.innerHTML += "<p>" + data.getFullYear() + "</p>";

	
		if(diaDaSemana(data.getFullYear(), data.getMonth()) == 0) {
			dia.innerHTML += '<div class=""></div>';

		} else if(diaDaSemana(data.getFullYear(), data.getMonth()) == 1){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';

		} else if(diaDaSemana(data.getFullYear(), data.getMonth()) == 2){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';

		} else if(diaDaSemana(data.getFullYear(), data.getMonth()) == 3){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			
		} else if(diaDaSemana(data.getFullYear(), data.getMonth()) == 4){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			
		} else if(diaDaSemana(data.getFullYear(), data.getMonth()) == 5){
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			dia.innerHTML += '<div class=""></div>';
			
		}

	for(var i = 1; i <= diasNoMes(data.getFullYear(), data.getMonth()); i++){

		
		

		criarEvento().forEach(valorAtual =>{
 		
			if((valorAtual == (data.getFullYear()+"-0"+(data.getMonth()+1)+"-"+i)) || (valorAtual == (data.getFullYear()+"-"+(data.getMonth()+1)+"-"+i)) ||
				(valorAtual == (data.getFullYear()+"-0"+(data.getMonth()+1)+"-0"+i)) || (valorAtual == (data.getFullYear()+"-"+(data.getMonth()+1)+"-0"+i))){ 
				if(i == now.getDate() && now.getFullYear() == data.getFullYear() && now.getMonth() == data.getMonth()){
					dia.innerHTML += '<div class="hojeEvento">'+ i +'</div>';
					bo2 = true;
				} else {
					dia.innerHTML += '<div class="evento">'+ i +'</div>';
				}
				bo = true;

			}
		})
		if(i == now.getDate() && now.getFullYear() == data.getFullYear() && now.getMonth() == data.getMonth() && bo2 == false){

			dia.innerHTML += '<div class="hoje" onclick="preencher('+i+')"> '+ i +'</div>';
		} else if(bo == false){
			dia.innerHTML += "<div onclick='preencher("+i+")'> "+ i +"</div>";
		}
		bo = false;
		bo2 = false;
	}
}

function diaDaSemana(ano, mes){
	var d = new Date(ano, (mes), 0);
	return d.getDay();
}


function diasNoMesAtual() {
	var data = new Date(now.getFullYear (),(now.getMonth()+1), 0);
	return data.getDate();
}


function diasNoMes(ano, mes) {
	var data = new Date(ano,(mes+1), 0);
	return data.getDate();
}

function criarEvento(){
	
  	var arrayStr = []; 
  	var xd = 0;
    for(var i=1 ; i<=localStorage.cont; i++ ){

        var chave = i;
        
        var cadastro = localStorage.getItem(chave);

        cadastro = JSON.parse(cadastro);

	    if(cadastro != null && xd!=localStorage.length){
			arrayStr.push(cadastro.data);
			xd++;
		}
    }

    return arrayStr;
}

//SEGUNDA PART

function salvar(){
    var tabela = document.getElementById("lista");
    var form1 = document.getElementById("form1");

    var cadastro = objeto(form1);
    var cadastroJSON = JSON.stringify(cadastro);

    if (localStorage.cont) {
        localStorage.cont = Number(localStorage.cont)+1;
    } else {
      localStorage.cont = 1;
    }
       
    var chave = localStorage.cont;

    localStorage.setItem(chave, cadastroJSON);
    
}

function objeto(form1){

    var cadastro = {
        data: form1.data.value,
        descricao: form1.descricao.value,
    }

    return cadastro;
}


function HTMLcadastro(cadastro, id){

    var cadastrosHTML = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var tdBut = document.createElement("td");
    var but = document.createElement("button");

    but.textContent = 'X';
    td.textContent = cadastro.data;
    td2.textContent = cadastro.descricao;
    
    but["id"] = id;
    but.onclick = remover;

    tdBut.appendChild(but);
    cadastrosHTML.appendChild(td);
    cadastrosHTML.appendChild(td2);
    cadastrosHTML.appendChild(tdBut);
    
    return cadastrosHTML;
}


function mostra(){

    var tabela = document.getElementById("lista");
    
    for(var i=1 ; i<=localStorage.cont; i++ ){

        var chave = i;
        
        var cadastro = localStorage.getItem(chave);

        cadastro = JSON.parse(cadastro);

        if(chave != "cont" && cadastro != null){
            var cadastrosHTML = HTMLcadastro(cadastro, chave);

            tabela.appendChild(cadastrosHTML);
        }
    }
}

function remover(evento){

    var rel = window.confirm("Deseja apagar?");

    if(rel == true){

        var chave = evento.target["id"];


        localStorage.removeItem(chave);


        evento.target.parentNode.parentNode.remove();
       	window.location.reload();
    } 
}

function preencher(dia){
	data = new Date(y, m);
	if(dia > 9 && (data.getMonth()+1)>9){
		document.getElementById('data').value=data.getFullYear()+"-"+(data.getMonth()+1)+"-"+dia;

	} else if(dia > 9 && (data.getMonth()+1)<10){
		document.getElementById('data').value=data.getFullYear()+"-0"+(data.getMonth()+1)+"-"+dia;

	} else if(dia < 10 && (data.getMonth()+1)>9){
		document.getElementById('data').value=data.getFullYear()+"-"+(data.getMonth()+1)+"-0"+dia;

	} else if(dia < 10 && (data.getMonth()+1)<10){
		document.getElementById('data').value=data.getFullYear()+"-0"+(data.getMonth()+1)+"-0"+dia;
	}

}
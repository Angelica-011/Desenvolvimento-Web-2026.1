nome = document.getElementById("username");
nome.innerText = "Angel";

 json = {"frase" : "Acesse o meu curso",
  "link1" : "https://landing.ages.edu.br/cursos?modalidades=Semipresencial&utm_source=google&utm_medium=cpc&utm_campaign=AGES_GRAD_SEMI_PERFORMANCE_GOOGLE_SEARCH_EDUCACAO_262&utm_content=SEMI_SEMI_SEMI_V1_262&gclsrc=aw.ds&gad_source=1&gad_campaignid=23701045584&gclid=EAIaIQobChMI8Pe73KT7lAMV7WFIAB3SYD2EEAAYASAAEgKMQ_D_BwE"
 };

 container = document.getElementById("container_link");

 for (var i = 0; i< json.length; i++) 
    container.innerHTML = container.innerHTML + 'div class="°°°"> '+json[i].frase+' </div>';
  
 /* link1 = document.getElementById("link1");
  link1.innerText = json.frase;
  link1.setAttribute("ref", json.link1);

  link1.addEventListener("click", function() {
    window.location = link1.getAttribute("ref");
    });*/ 
      
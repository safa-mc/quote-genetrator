// quote api:

quotes = [
    {"quote": "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "author": "Gandhi", "ramarque":"can-save"},
    {"quote": "Le succès, c’est tomber sept fois, se relever huit.", "author": "Proverbe japonais", "ramarque":"can-save"},
    {"quote": "L'imagination est plus importante que le savoir.", "author": "Albert Einstein", "ramarque":"can-save"},
    {"quote": "La seule façon de faire du bon travail, c’est d’aimer ce que vous faites.", "author": "Steve Jobs", "ramarque":"can-save"},
    {"quote": "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.", "author": "Mark Twain", "ramarque":"can-save"},
    {"quote": "Le bonheur n'est réel que lorsqu'il est partagé.", "author": "Christopher McCandless", "ramarque":"can-save"},
    {"quote": "Sois le changement que tu veux voir dans le monde.", "author": "Gandhi", "ramarque":"can-save"},
    {"quote": "Notre plus grande peur n’est pas d’être inadéquats. Notre plus grande peur est que nous soyons puissants au-delà de toute mesure.", "author": "Marianne Williamson", "ramarque":"can-save"},
    {"quote": "Celui qui déplace une montagne commence par déplacer de petites pierres.", "author": "Confucius", "ramarque":"can-save"},
    {"quote": "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.", "author": "Nelson Mandela", "ramarque":"can-save"},
    {"quote": "Le monde est rempli de belles choses, il suffit de savoir les regarder.", "author": "Inconnu", "ramarque":"can-save"},
    {"quote": "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.", "author": "Nelson Mandela", "ramarque":"can-save"},
    {"quote": "Rêve comme si tu vivais pour toujours, vis comme si tu allais mourir aujourd’hui.", "author": "James Dean", "ramarque":"can-save"},
    {"quote": "Ce que vous faites aujourd’hui peut améliorer tous vos lendemains.", "author": "Ralph Marston", "ramarque":"can-save"},
    {"quote": "La meilleure façon de prédire l’avenir, c’est de le créer.", "author": "Peter Drucker", "ramarque":"can-save"},
    {"quote": "La connaissance parle, mais la sagesse écoute.", "author": "Jimi Hendrix", "ramarque":"can-save"},
    {"quote": "L'expérience est le nom que chacun donne à ses erreurs.", "author": "Oscar Wilde", "ramarque":"can-save"},
    {"quote": "Il n’y a pas de raccourci vers n’importe où qui en vaille la peine.", "author": "Beverly Sills", "ramarque":"can-save"},
    {"quote": "Fais de ta vie un rêve, et d’un rêve, une réalité.", "author": "Antoine de Saint-Exupéry", "ramarque":"can-save"},
    {"quote": "La créativité, c’est l’intelligence qui s’amuse.", "author": "Albert Einstein", "ramarque":"can-save"}
]

// new quote button :

let quote=document.getElementById("quote");
let quotebutton=document.getElementById("new-quote-button");
let autors=document.getElementById("autors");

quotebutton.addEventListener("click" , quotebuttonfunction);
       
        
let texte1=document.getElementById("texte1");
let texte2=document.getElementById("texte2");


let i=0;
function quotebuttonfunction(){
        if(i<quotes.length){
            if(quotes[i].quote!=""){

                // quotes
                quote.innerHTML=quotes[i].quote;
                // autor:
                autors.innerHTML=quotes[i].author;
                
                    
            }else{
                i++;
                quote.innerHTML=quotes[i].quote;   
                autors.innerHTML=quotes[i].author;
            }
                
        }else{
            i=0;
            if(quotes[i].quote!=""){
                // quotes:
                quote.innerHTML=quotes[i].quote;
                // autor:
                autors.innerHTML=quotes[i].author;
            }else{
                i++;
                quote.innerHTML=quotes[i].quote;   
                autors.innerHTML=quotes[i].author;
            }
        }   
        i++;


  
        

}
quotebuttonfunction();


// voice button : 

let voicebutton=document.getElementById("voicebutton");
voicebutton.addEventListener("click" , textealirefunction);

function textealirefunction(){

    let textealire=quote.innerText + " " + autors.innerText;

    responsiveVoice.speak(textealire , "French Female" , {
                rate: 1,
                pitch: 1,
                volume: 0.3,
            });

}

// delete function ici: 

let deleter=document.getElementById("delete");
deleter.addEventListener("click" , deleterfunction);

function deleterfunction(){
    for(let t = 0; t < quotes.length; t++){
        if(quote.innerText == quotes[t].quote){
            quotes.splice(t, 1); // supprime la citation
            // Réajuster l'index pour éviter "saut" de citation
            if (i > t) {
                i--; 
            }

            // Afficher la prochaine citation si disponible
            if (quotes.length > 0) {
                quote.innerHTML = quotes[i].quote;
                autors.innerHTML = quotes[i].author;
                i++; 
            } else {
                // S'il n'y a plus de citations
                quote.innerHTML = "Aucune citation disponible.";
                autors.innerHTML = "";
            }
             // très important : arrêter la boucle après suppression
        }
    }
}
      

// save button:

let save=document.getElementById("save");
let page2centre=document.getElementsByClassName("page2-center-center-center-center")[0];

save.addEventListener("click" , savefunction);

function savefunction(){

    // array:
    let g=0;
    let can=false;

    do{
        if(quotes[g].quote.trim()==quote.innerText.trim() && quotes[g].ramarque=="can-save"){
            can=true;
        }
        g++;
    }while(g<quotes.length && can==false)
        
    if(can==true){
         
            // creer la liste : 
            let mylist=document.createElement("div");
            mylist.classList.add("page2-center-center-center-center-list");
            page2centre.appendChild(mylist);

            // creer list left : 
            let mylistleft=document.createElement("div");
            mylistleft.classList.add("page2-center-center-center-center-list-left");
            mylist.appendChild(mylistleft);

            let listtexte=document.createElement("p");
            listtexte.classList.add("list-content");
            mylistleft.appendChild(listtexte);
            listtexte.innerHTML=quote.innerText;

            // creer list right : 
            let mylistright=document.createElement("div");
            mylistright.classList.add("page2-center-center-center-center-list-right");
            mylist.appendChild(mylistright);

            let deletespan=document.createElement("span");
            deletespan.classList.add("material-icons-outlined");
            deletespan.classList.add("deletepage2");
            deletespan.innerHTML="delete";
            mylistright.appendChild(deletespan); 

            quotes[g-1].ramarque = "cant-save"; // évite le double save

    }
      

           


            
}


// page2 : 

// DELETE PAGE2 : 

let deletepage2=document.getElementsByClassName("deletepage2")[0];
let page3center=document.getElementsByClassName("page3-center-center-center-center")[0];


page2centre.addEventListener("click" , deletationfunction);

function deletationfunction(evente) {
    if(evente.target.classList.contains("deletepage2")){
        // transferer from page2 to page 3 :
        let mylist2=document.createElement("div");
        mylist2.classList.add("page3-center-center-center-center-list");
        page3center.appendChild(mylist2);

        let mylist2left=document.createElement("div");
        mylist2left.classList.add("page3-center-center-center-center-list-left");
        mylist2.appendChild(mylist2left);

        let mylist2lefttexte=document.createElement("p");
        mylist2lefttexte.classList.add("list-content" , "montexte");
        mylist2left.appendChild(mylist2lefttexte);
        let result=evente.target.parentElement.parentElement.querySelector(".list-content").innerText;
        mylist2lefttexte.innerHTML=result;


        let mylist2right=document.createElement("div");
        mylist2right.classList.add("page3-center-center-center-center-list-right");
        mylist2.appendChild(mylist2right);

        let mylist2rightspan1=document.createElement("span");
        mylist2rightspan1.classList.add("material-icons-outlined" , "refresh3");
        mylist2rightspan1.innerHTML="refresh";
        mylist2right.appendChild(mylist2rightspan1);

        let mylistrightspan2=document.createElement("span");
        mylistrightspan2.classList.add("material-icons-outlined" , "deletpage3");
        mylistrightspan2.innerHTML="delete";
        mylist2right.appendChild(mylistrightspan2);



        // effacer dans page2 :
        evente.target.parentElement.parentElement.remove();
    }
}

// clear all page2 :


// supression:      

let clearalls=document.getElementById("clearall");
let liste2=document.getElementsByClassName("page2-center-center-center-center-list");

clearalls.addEventListener("click" , clearallsfunction);

function clearallsfunction(){
    // transfer a chager : 
    // let elem=document.getElementsByClassName("page3-center-center-center");
    // let listeofpage2=document.getElementsByClassName("list-content");
    let ancien=document.getElementsByClassName("page2-center-center-center-center-list");


    for(let v=0 ; v<liste2.length ; v++){
        // elem[v].innerHTML=page2centre.innerHTML;

        let listesofpage3=document.createElement("div");
        listesofpage3.classList.add("page3-center-center-center-center-list");
        page3center.appendChild(listesofpage3);

        let listesofpage3left=document.createElement("div");
        listesofpage3left.classList.add("page3-center-center-center-center-list-left");
        listesofpage3.appendChild(listesofpage3left);

        let listesofpage3lefttexte=document.createElement("p");
        listesofpage3lefttexte.classList.add("list-content" , "montexte");
        listesofpage3left.appendChild(listesofpage3lefttexte);
        listesofpage3lefttexte.innerText=ancien[v].querySelector(".list-content").innerText; 

        let listesofpage3right=document.createElement("div");
        listesofpage3right.classList.add("page3-center-center-center-center-list-right");
        listesofpage3.appendChild(listesofpage3right);

        let listesofpage3rightrefresh=document.createElement("span");
        listesofpage3rightrefresh.classList.add("material-icons-outlined" , "refresh3");
        listesofpage3rightrefresh.innerHTML="refresh";
        listesofpage3right.appendChild(listesofpage3rightrefresh);

        let listesofpage3rightdelete=document.createElement("span");
        listesofpage3rightdelete.classList.add("material-icons-outlined" , "deletpage3");
        listesofpage3rightdelete.innerHTML="delete";
        listesofpage3right.appendChild(listesofpage3rightdelete);



        // supprimer tous :
       
    }
     page2centre.innerHTML="";
}



// clear all page3 :

let clearall3=document.getElementById("clearall3");

clearall3.addEventListener("click" , clearallfunction);

function clearallfunction(){


    // supression :
    let touslistes=document.getElementsByClassName("page3-center-center-center-center-list");
    
    for(let f=touslistes.length-1 ; f>=0 ; f--){
        
        // from cant-save to can-save :

        let g=0;
        // let wh=evenn.target.parentElement.parentElement.querySelector(".list-content").innerText;
        let wh=document.getElementsByClassName("page3-center-center-center-center-list-left")[f].querySelector(".list-content").innerText;

        do{
            if(wh==quotes[g].quote && quotes[g].ramarque=="cant-save"){
                quotes[g].ramarque="can-save"
            }
            g++;
        }while(g<quotes.length) 

        // la suppression :

        touslistes[f].remove();

    }
}


// delete page3 :

let deletbutton=document.getElementsByClassName("deletpage3")[0];

page3center.addEventListener("click" , deletepage3);

function deletepage3(evenn)  {
    if(evenn.target.classList.contains("deletpage3")){
       

        // from cant-save to can-save :

        let g=0;
        let wh=evenn.target.parentElement.parentElement.querySelector(".list-content").innerText;

        do{
            if(wh==quotes[g].quote && quotes[g].ramarque=="cant-save"){
                quotes[g].ramarque="can-save"
            }
            g++;
        }while(g<quotes.length)

        // la supression :

        evenn.target.parentElement.parentElement.remove();

    }
}

// refresh :

let refreshbutton=document.getElementsByClassName("refresh3")[0];
// page2centre
page3center.addEventListener("click" , (aven) => {

    if(aven.target.classList.contains("refresh3")){
        // creation:
        let refreshpage2list=document.createElement("div");
        refreshpage2list.classList.add("page2-center-center-center-center-list");
        page2centre.appendChild(refreshpage2list);

        let refreshpage2listleft=document.createElement("div");
        refreshpage2listleft.classList.add("page2-center-center-center-center-list-left");
        refreshpage2list.appendChild(refreshpage2listleft);

        let refreshpage2listlefttexte=document.createElement("p");
        refreshpage2listlefttexte.classList.add("list-content");
        refreshpage2listleft.appendChild(refreshpage2listlefttexte);
        refreshpage2listlefttexte.innerHTML=aven.target.parentElement.parentElement.querySelector(".list-content").innerText;  //icihhhhhhhhhhhhhhhhhh

        let refreshpage2listright=document.createElement("div");
        refreshpage2listright.classList.add("page2-center-center-center-center-list-right");
        refreshpage2list.appendChild(refreshpage2listright);

        let refreshpage2listrightdelete=document.createElement("span");
        refreshpage2listrightdelete.classList.add("material-icons-outlined" , "deletpage3" , "deletepage2"); //iciiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        refreshpage2listrightdelete.innerHTML="delete";
        refreshpage2listright.appendChild(refreshpage2listrightdelete);

        // supression : 
        if(aven.target.classList.contains("refresh3")){
            aven.target.parentElement.parentElement.remove();
        }
    }
        
})
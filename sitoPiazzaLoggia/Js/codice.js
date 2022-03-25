var foto=new Array('Foto/skillet.jpg','Foto/loveyoursoul.jpg','Foto/invincible.jpg','Foto/alien.jpg',
'Foto/collide.jpg','Foto/comatose.jpg','Foto/comatoseforlife.jpg','Foto/awake.jpg','Foto/remix.jpg',
'Foto/rise.jpg','Foto/victoriuos.jpg','Foto/unleashed.jpg','Foto/dominion.jpg');
var titolo=new Array("Skillet","Love your soul","Invincible",'Alien','Collide',
'Comatose','Comatose for life','Awake','Remix','Rise','Victoriuos','Unleashed',
'Dominion');
var strutture=new Array("Budokan","Eventim Apollo","Bank Stadium",'Hollywood Bowl','Red Rocks');
var i=0;
function indietro()
{
    if(i==0)
        i=foto.length-1;
    else
        i--;
        document.getElementById("titolo").textContent=titolo[i];
    document.foto.src=foto[i];
}

function avanti() 
{
    {
        if(i==foto.length-1)
            i=0;
        else
            i++;
        document.getElementById("titolo").textContent=titolo[i];
        document.foto.src=foto[i];
    }
}

function controllo()
{
    if (document.form.nome.value.length==0 || document.form.cognome.value.length==0)
    {
        alert("Non sono stati inseriti i riferimenti necessari");
        document.form.nome.focus();
    }
    else
    {
        alert("Richiesta inviata con successo");
    }
}

function informazioniAggiuntive(id)
{
    if(id=="-1")
        alert("Nessun evento in programma");
    else
    {
        alert("L'evento si terra: "+strutture[id]);
    }
}
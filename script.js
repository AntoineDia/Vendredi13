(function() {

    var mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
    var nombre = new Array("un", "deux", "trois")

    document.getElementById("run").addEventListener("click", function() {

        vdd = 0; //OPTIONEL contient le nombre de vendredi 13, comme il y en a maximum 3 par années (merci google) elle servira a transformer le nombre en texte avec l'array plus haut
        cetteannee = document.getElementById("year").value; //OPTIONEL récupère l'année pour l'afficher dans rep
        annee = new Date(+document.getElementById("year").value, 0); //récupère l'année en la mettant dans une variable date, le mois est mit à 0 car on est obligé d'indiquer au mois une année et un mois
        auj = new Date(); //OPTIONEL date du jour pour le temps du verbe

        rep = "";   //contient la chaine de caractères qui sera affiché
        s = "";     //OPTIONEL contient le pluriel
        x = "";     //OPTIONEL contient le pluriel
        temps = ""; //OPTIONEL contient le temps du verbe (passé présent ou futur)

        for (i = 0; i < 12; i++) { //boucle qui fait 12 tours de boucle, une par mois

            annee.setMonth(i, 13);  //défni le mois sur la valeur de i et le jour sur le 13ème du mois

            if (annee.getDay() == 5) {  //si le jour est le 5ème de la semaine (ne pas confondre DATE et DAY!!!) alors c'est un vendredi
                rep = rep + "<br/>" + mois[i]; //écrit dans rep le nom du mois grace à l'array contenant tout les mois
                vdd = vdd + 1; //OPTIONEL compte le nombre de vendredi
            }
        }
        if (vdd != 1) { //OPTIONEL met au pluriel si il n'y a plus de 1 vendredi 13
            s = "s";
            x = "x";
        }

        if (annee.getFullYear() < auj.getFullYear()) { //OPTIONEL met le verbe au temps en fonction de l'année choisie
            temps = "a eu";
        }
        if (annee.getFullYear() > auj.getFullYear()) {
            temps = "aura";
        }
        if (annee.getFullYear() == auj.getFullYear()) {
            temps = "a";
        }

        vdd = nombre[vdd - 1]; //OPTIONEL transforme le nombre en sa valeur écrite, les tableaux commensant à 0 il faut lui retirer 1

        rep = "En " + cetteannee + ", il y " + temps + " " + vdd + " vendredi" + s + " 13 au" + x + " mois suivant" + s + ":<br/>" + rep; //création de la chaine de caractères qui sera la réponse
        document.getElementById("target").innerHTML = rep; //Affiche la réponsse. J'ai ajouté la section contenant un le target d'une autre page du cours afin d'afficher dans la page
    })

})();

// ETAPE 1: DECLARATION DES VARIABLES
// dab est un objet vide qui va contenir mon code
var dab 	= {};
dab.somme 	= 0;

// TABLEAU DES VALEURS DES BILLETS
// ON LES TRIE DU PLUS GRAND AU PLUS PETIT
dab.tableauBillets = [ 
	500, 
	200, 
	100, 
	50, 
	20, 
	10, 
	5 ];
dab.tableauImages  = [
	'<img src="media/images/euros-500.jpg">',	
	'<img src="media/images/euros-200.jpg">',	
	'<img src="media/images/euros-100.jpg">',	
	'<img src="media/images/euros-50.jpg">',	
	'<img src="media/images/euros-20.jpg">',	
	'<img src="media/images/euros-10.jpg">',	
	'<img src="media/images/euros-5.jpg">'
];

// ETAPE 2: DECLARATION DES FONCTIONS
dab.demarrage = function ()
{
	h = jQuery(window).height();
	w = jQuery(window).width();
	alert("TAILLE " + w + "x" + h);
	
	//alert("PAGE PRETE");
	// INSTALLATION DES EVENEMENTS ("click", etc...)
	jQuery("#boutonRetrait").on("click", dab.retirerBillets);
}

dab.retirerBillets = function ()
{
	//alert("tu as clique");
	// RECUPERE LA VALEUR DU CHAMP INPUT
	// http://api.jquery.com/val/
	dab.somme = jQuery("input#retrait").val();
	alert(dab.somme);
	
	// IL FAUT DISTRIBUER LES BILLETS
	// BOUCLE POUR PARCOURIR LE TABLEAU DES BILLETS
	// REMISE A ZERO
	compteur = 0;
	jQuery("#resultat").html("");
	
	while (compteur < dab.tableauBillets.length)
	{
		billetEnCours = dab.tableauBillets[compteur];
		imageEnCours  = dab.tableauImages[compteur];
		
		//alert("COMBIEN DE BILLETS DE " + billetEnCours);
		// Math.round arrondi au plus proche
		// Math.ceil arrondi supérieur
		// Math.floor arrondi inférieur
		nbBillets = Math.floor(dab.somme / billetEnCours);
		//alert(nbBillets);
		compteurBillet = 0;
		while (compteurBillet < nbBillets)
		{
			// AFFICHER LE BILLET
			jQuery("#resultat").append(imageEnCours);
			// AJOUTER UN AU COMPTEUR
			compteurBillet = compteurBillet + 1;
		}
		// ENLEVER LA SOMME DISTRIBUEE
		//dab.somme = dab.somme - nbBillets * billetEnCours;
		dab.somme  = dab.somme % billetEnCours;
		
		// AJOUTER UN AU COMPTEUR
		compteur = compteur + 1;
	}	
}

// ETAPE 3: ACTIVATION DU CODE
jQuery(dab.demarrage);
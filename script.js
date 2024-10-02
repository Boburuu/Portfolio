function openTab(evt, tabName) {
    // Cache tous les contenus des onglets
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Retirer la classe "active" de tous les onglets
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Afficher le contenu de l'onglet cliqué et ajouter la classe "active" à l'onglet
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

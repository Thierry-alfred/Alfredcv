'use strict';

app.controller('HomeController', function ($scope)
{
    this.profil = [
        {img : 'cake', desc : '06 - Janv. - 1992'},
        {img : 'phone', desc : '+237 697918649'},
        {img : 'place', desc : 'Douala - Bonamoussadi'},
        {img : 'email', desc : 'Thierrykweni@gmail.com'},
    ]
    this.formation = [
        {nom:'LICENCE PRO',date:'2015 - 2016',ecole:'IUC(Institut Universitaire de la cote)',option:'Option : Genie Logiciel'},
        {nom:'BACCALAUREAT C',date:'2013 - 2014',ecole:'IUC(Institut Universitaire de la cote)',option:'Option : Programmation et Analyse'},
        {nom:'BACCALAUREAT C',date:'2012 - 2013',ecole:'LYBIMIM(Lycée bilingue de Mimboman)',option:'Mention : Assez - Bien'},
        {nom:'PROBATOIRE C',date:'2010 - 2011',ecole:'LYDANO(Lycée D Akwa Nord)',option:''}
    ]
    this.experience = [
        {role:'ANALYSTE PROGRAMMEUR', entreprise:'AGFC Web Studio', date:'Octobre 2015'},
        {role:'STAGE ACADEMIQUE', entreprise:'IINETDEV', date:'Juin 2015 - Août 2015'}
    ]
    this.competence = [
        {nom : 'LANGAGES DE PROGRAMMATION', valeur : 'JAVA, VB.NET, C#, PHP'},
        {nom : 'TECHNOLOGIES WEB', valeur : 'HTML, CSS, JAVASCRIPT, SASS, AJAX,MATERIAL'},
        {nom : 'FRAMEWORK', valeur : 'ANGULARJS,FOUNDATION,SYMFONY,EXTJS,JQUERY,BOOTSTRAP'},
        {nom : "METHODES D'ANALYSE", valeur : 'MERISE,UML'},
        {nom : "SERVEURS", valeur : 'IIS, APACHE, NODE'},
        {nom : "OUTILS", valeur : 'PHOTOSHOP, GIT, VISUAL PARADIGM, SUITE OFFICE, DRUPAL'},
    ]
     
     
});
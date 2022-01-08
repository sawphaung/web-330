/*
============================================
Title: Global CSS for Web 330
File Name: Theme.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 07, 2021
===========================================
*/

function setDefaultTheme () {
    localStorage.clear();
    const theme = localStorage.getItem( 'mode' ) || 'light-theme';
    const iconMode = localStorage.getItem( 'iconMode' ) || 'fa-toggle-off';
    const iconText = localStorage.getItem( 'iconText' ) || 'Light Mode';

    document.body.classList = theme;
    document.getElementById( 'icon-mode' ).classList.add( iconMode );
    document.getElementById( 'icon-text' ).innerHTML = iconText;
}

function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}
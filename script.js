document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la page de se recharger
    
    // Affiche le message de confirmation
    document.getElementById('confirmation').style.display = 'block';
    
    // Vide le formulaire
    this.reset();
    
    alert("Merci pour votre message !");
});
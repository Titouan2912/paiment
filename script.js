document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Simulation du traitement du paiement
  setTimeout(() => {
    document.getElementById("confirmation").classList.remove("hidden");
  }, 1000); // délai de 1 seconde
});

// SWEET SOUR JUICY BUBBLY STRONG JAPANESE
const cocktails = [
    { name: "Margarita", attributes: ["sweet", "sour", "strong", "juicy"] },
    { name: "Martini", attributes: ["strong", "sour"] },
    { name: "Piña Colada", attributes: ["sweet", "juicy"] },
    { name: "Salty Dog", attributes: ["sour", "strong"] },
    { name: "CHUHAI", attributes: ["sweet", "japanese", "bubbly"] },
    { name: "Sakura fizz", attributes: ["sweet", "japanese", "bubbly"] },
    { name: "Stones Buck", attributes: ["sweet", "bubbly"] },
    // Add more cocktails here
  ];
  
  // Function to get random cocktail based on selected attributes
  function getRandomCocktail(selectedAttributes) {
    // Filter cocktails based on selected attributes
    const filteredCocktails = cocktails.filter(cocktail => {
      return selectedAttributes.every(attribute => cocktail.attributes.includes(attribute));
    });
  
    // If no cocktails match the selected attributes, return null
    if (filteredCocktails.length === 0) {
      return null;
    }
  
    // Select a random cocktail from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredCocktails.length);
    return filteredCocktails[randomIndex].name;
  }
  
  // Get references to DOM elements
  const generateBtn = document.getElementById("generateBtn");
  const tryAgainBtn = document.getElementById("tryAgainBtn");
  const cocktailResult = document.getElementById("cocktailResult");
  const checkboxes = document.querySelectorAll("#attributeCheckboxes input[type='checkbox']");
  
  // Event listener for Generate Random Cocktail button
  generateBtn.addEventListener("click", function() {
    const selectedAttributes = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    const randomCocktail = getRandomCocktail(selectedAttributes);
    if (randomCocktail) {
      cocktailResult.textContent = `${randomCocktail}`;
      generateBtn.style.display = "none";
      tryAgainBtn.style.display = "block";
    } else {
      cocktailResult.textContent = "No cocktails for you :(";
    }
  });
  
  // Event listener for Try Again button
  tryAgainBtn.addEventListener("click", function() {
    cocktailResult.textContent = "";
    generateBtn.style.display = "block";
    tryAgainBtn.style.display = "none";
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  });
  
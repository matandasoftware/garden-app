// Get user input for season and plant type
let season = prompt("Enter the season (summer, winter, spring, autumn):"); // User input for season
let plantType = prompt("Enter the plant type (flower, vegetable):"); // User input for plant type

/**
 * Get gardening advice based on the season
 * @param {string} season - The current season
 * @returns {string} - Advice for the given season
 */
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

/**
 * Get gardening advice based on the plant type
 * @param {string} plantType - The type of plant
 * @returns {string} - Advice for the given plant type
 */
function getPlantTypeAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

/**
 * Display the complete gardening advice
 * @param {string} seasonAdvice - Advice based on season
 * @param {string} plantAdvice - Advice based on plant type
 */
function displayAdvice(seasonAdvice, plantAdvice) {
    const completeAdvice = seasonAdvice + plantAdvice;
    console.log(completeAdvice);
}

// Generate and display advice
const seasonAdvice = getSeasonAdvice(season);
const plantAdvice = getPlantTypeAdvice(plantType);
displayAdvice(seasonAdvice, plantAdvice);
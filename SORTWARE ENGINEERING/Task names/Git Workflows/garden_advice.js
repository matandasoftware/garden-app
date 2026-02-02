/**
 * Garden Advice App
 * Provides gardening tips based on month and season
 */

// TODO: Replace hardcoded values with constants or configuration object
let currentMonth = 5; // May

/**
 * Determines the season based on the month number (Northern Hemisphere)
 * @param {number} month - The month number (1-12, where 1 is January)
 * @returns {string} The season name ("Spring", "Summer", "Autumn", or "Winter")
 */
function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}

/**
 * Displays gardening tips for a given season
 * @param {string} season - The season name ("Spring", "Summer", "Autumn", or "Winter")
 */
function displayGardeningTips(season) {
    console.log(`Season: ${season}`);
    console.log("Gardening Tips:");
    
    if (season === "Spring") {
        console.log("- Plant tomatoes, peppers, and cucumbers");
        console.log("- Prepare soil with compost");
        console.log("- Start weeding regularly");
    } else if (season === "Summer") {
        console.log("- Water plants early morning or evening");
        console.log("- Mulch to retain moisture");
        console.log("- Harvest vegetables regularly");
    } else if (season === "Autumn") {
        console.log("- Plant spring bulbs");
        console.log("- Rake leaves for compost");
        console.log("- Protect tender plants from frost");
    } else {
        console.log("- Plan next year's garden");
        console.log("- Prune dormant trees");
        console.log("- Protect plants from harsh weather");
    }
}

let currentSeason = getSeason(currentMonth);
displayGardeningTips(currentSeason);

// TODO: Create separate functions for different regions (Northern/Southern hemisphere)
// TODO: Add user input functionality to get current month instead of hardcoded value
// TODO: Create a data structure to store tips instead of hardcoded strings

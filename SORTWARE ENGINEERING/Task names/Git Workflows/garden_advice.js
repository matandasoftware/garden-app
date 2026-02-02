// Garden Advice App
// Provides gardening tips based on month and season

// TODO: Replace hardcoded values with constants or configuration object
let currentMonth = 5; // May

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

let currentSeason = getSeason(currentMonth);

if (currentSeason === "Spring") {
    console.log("Season: Spring");
    console.log("Gardening Tips:");
    console.log("- Plant tomatoes, peppers, and cucumbers");
    console.log("- Prepare soil with compost");
    console.log("- Start weeding regularly");
} else if (currentSeason === "Summer") {
    console.log("Season: Summer");
    console.log("Gardening Tips:");
    console.log("- Water plants early morning or evening");
    console.log("- Mulch to retain moisture");
    console.log("- Harvest vegetables regularly");
} else if (currentSeason === "Autumn") {
    console.log("Season: Autumn");
    console.log("Gardening Tips:");
    console.log("- Plant spring bulbs");
    console.log("- Rake leaves for compost");
    console.log("- Protect tender plants from frost");
} else {
    console.log("Season: Winter");
    console.log("Gardening Tips:");
    console.log("- Plan next year's garden");
    console.log("- Prune dormant trees");
    console.log("- Protect plants from harsh weather");
}

// TODO: Add function documentation (JSDoc comments)
// TODO: Create separate functions for different regions (Northern/Southern hemisphere)
// TODO: Add user input functionality to get current month instead of hardcoded value
// TODO: Create a data structure to store tips instead of hardcoded strings

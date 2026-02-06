def get_season_advice(season):
    """
    Returns gardening advice based on the season.
    
    Args:
        season (str): The current season (summer/winter)
    
    Returns:
        str: Advice specific to the season
    """
    if season == "summer":
        return "Water your plants regularly and provide some shade.\n"
    elif season == "winter":
        return "Protect your plants from frost with covers.\n"
    else:
        return "No advice for this season.\n"


def get_plant_advice(plant_type):
    """
    Returns gardening advice based on the plant type.
    
    Args:
        plant_type (str): The type of plant (flower/vegetable)
    
    Returns:
        str: Advice specific to the plant type
    """
    if plant_type == "flower":
        return "Use fertiliser to encourage blooms."
    elif plant_type == "vegetable":
        return "Keep an eye out for pests!"
    else:
        return "No advice for this type of plant."


def get_user_input():
    """
    Prompts the user for season and plant type information.
    
    Returns:
        tuple: A tuple containing (season, plant_type)
    """
    season = input("Enter the season (summer/winter): ").lower()
    plant_type = input("Enter the plant type (flower/vegetable): ").lower()
    return season, plant_type


def main():
    """
    Main function to run the garden advice application.
    Collects user input and displays personalized gardening advice.
    """
    season, plant_type = get_user_input()
    
    advice = get_season_advice(season)
    advice += get_plant_advice(plant_type)
    
    print("\n--- Gardening Advice ---")
    print(advice)


if __name__ == "__main__":
    main()

# TODO: Examples of possible features to add:
# - Add detailed comments explaining each block of code.
# - Refactor the code into functions for better readability and modularity.
# - Store advice in a dictionary for multiple plants and seasons.
# - Recommend plants based on the entered season.

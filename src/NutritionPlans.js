const nutritionPlans = [
    {
      "name": "Paneer Butter Masala",
      "category": "Veg",
      "ingredients": ["paneer", "butter", "cream", "tomato", "cashews", "spices"],
      "nutritionalValue": {"fat": 25, "carbs": 12, "protein": 15},
      "calories": 320,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Chicken Curry",
      "category": "Non-Veg",
      "ingredients": ["chicken", "onion", "tomato", "ginger-garlic paste", "spices"],
      "nutritionalValue": {"fat": 15, "carbs": 6, "protein": 30},
      "calories": 270,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Aloo Paratha",
      "category": "Veg",
      "ingredients": ["whole wheat flour", "potatoes", "ghee", "spices"],
      "nutritionalValue": {"fat": 10, "carbs": 40, "protein": 7},
      "calories": 250,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Egg Bhurji",
      "category": "Non-Veg",
      "ingredients": ["eggs", "onion", "tomato", "green chilies", "spices"],
      "nutritionalValue": {"fat": 12, "carbs": 4, "protein": 14},
      "calories": 160,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Chana Masala",
      "category": "Veg",
      "ingredients": ["chickpeas", "onion", "tomato", "ginger-garlic paste", "spices"],
      "nutritionalValue": {"fat": 6, "carbs": 25, "protein": 10},
      "calories": 180,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Fish Fry",
      "category": "Non-Veg",
      "ingredients": ["fish fillets", "turmeric", "chili powder", "salt", "lemon juice"],
      "nutritionalValue": {"fat": 8, "carbs": 3, "protein": 25},
      "calories": 180,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Vegetable Pulao",
      "category": "Veg",
      "ingredients": ["basmati rice", "mixed vegetables", "spices", "ghee"],
      "nutritionalValue": {"fat": 10, "carbs": 40, "protein": 8},
      "calories": 220,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Mutton Rogan Josh",
      "category": "Non-Veg",
      "ingredients": ["mutton", "yogurt", "onion", "tomato", "spices"],
      "nutritionalValue": {"fat": 18, "carbs": 5, "protein": 28},
      "calories": 290,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Baingan Bharta",
      "category": "Veg",
      "ingredients": ["eggplant", "onion", "tomato", "garlic", "spices"],
      "nutritionalValue": {"fat": 5, "carbs": 10, "protein": 3},
      "calories": 90,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Prawns Masala",
      "category": "Non-Veg",
      "ingredients": ["prawns", "coconut milk", "onion", "tomato", "spices"],
      "nutritionalValue": {"fat": 14, "carbs": 6, "protein": 22},
      "calories": 210,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Dal Tadka",
      "category": "Veg",
      "ingredients": ["toor dal", "ghee", "garlic", "onion", "spices"],
      "nutritionalValue": {"fat": 8, "carbs": 22, "protein": 10},
      "calories": 170,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Tandoori Chicken",
      "category": "Non-Veg",
      "ingredients": ["chicken", "yogurt", "lemon juice", "tandoori masala"],
      "nutritionalValue": {"fat": 10, "carbs": 3, "protein": 30},
      "calories": 220,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Palak Paneer",
      "category": "Veg",
      "ingredients": ["spinach", "paneer", "cream", "onion", "spices"],
      "nutritionalValue": {"fat": 15, "carbs": 8, "protein": 12},
      "calories": 180,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Keema Curry",
      "category": "Non-Veg",
      "ingredients": ["minced mutton", "onion", "tomato", "spices"],
      "nutritionalValue": {"fat": 20, "carbs": 5, "protein": 25},
      "calories": 280,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Masala Dosa",
      "category": "Veg",
      "ingredients": ["dosa batter", "potatoes", "onion", "spices"],
      "nutritionalValue": {"fat": 6, "carbs": 35, "protein": 5},
      "calories": 200,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Butter Chicken",
      "category": "Non-Veg",
      "ingredients": ["chicken", "butter", "cream", "tomato", "spices"],
      "nutritionalValue": {"fat": 25, "carbs": 10, "protein": 30},
      "calories": 320,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Mixed Vegetable Curry",
      "category": "Veg",
      "ingredients": ["carrot", "beans", "peas", "potatoes", "spices"],
      "nutritionalValue": {"fat": 5, "carbs": 20, "protein": 6},
      "calories": 120,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Egg Curry",
      "category": "Non-Veg",
      "ingredients": ["eggs", "onion", "tomato", "spices"],
      "nutritionalValue": {"fat": 10, "carbs": 6, "protein": 12},
      "calories": 150,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Rajma Chawal",
      "category": "Veg",
      "ingredients": ["rajma", "basmati rice", "onion", "tomato", "spices"],
      "nutritionalValue": {"fat": 5, "carbs": 35, "protein": 10},
      "calories": 230,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Chicken Biryani",
      "category": "Non-Veg",
      "ingredients": ["chicken", "basmati rice", "yogurt", "onion", "spices"],
      "nutritionalValue": {"fat": 15, "carbs": 40, "protein": 25},
      "calories": 350,
      "thumbnail": "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Greek Salad",
      "category": "Veg",
      "ingredients": ["cucumber", "tomato", "feta cheese", "olives", "olive oil"],
      "nutritionalValue": {"fat": 10, "carbs": 6, "protein": 5},
      "calories": 110,
      "thumbnail": "url_"
    },
    {
      "name": "Paneer Tikka",
      "category": "Veg",
      "ingredients": ["paneer", "yogurt", "spices", "capsicum", "onion"],
      "nutritionalValue": {"fat": 15, "carbs": 6, "protein": 12},
      "calories": 200,
      "thumbnail": "url_"
    },
    {
      "name": "Chicken Tikka",
      "category": "Non-Veg",
      "ingredients": ["chicken", "yogurt", "spices", "lemon juice"],
      "nutritionalValue": {"fat": 10, "carbs": 4, "protein": 25},
      "calories": 180,
      "thumbnail": "url_"
    },
    {
      "name": "Caesar Salad",
      "category": "Veg",
      "ingredients": ["lettuce", "parmesan", "croutons", "caesar dressing"],
      "nutritionalValue": {"fat": 12, "carbs": 8, "protein": 6},
      "calories": 130,
      "thumbnail": "url_"
    },
    {
      "name": "Shahi Paneer",
      "category": "Veg",
      "ingredients": ["paneer", "cream", "tomato", "cashew paste", "spices"],
      "nutritionalValue": {"fat": 20, "carbs": 10, "protein": 15},
      "calories": 270,
      "thumbnail": "url_"
    },
    {
      "name": "Vegetable Soup",
      "category": "Veg",
      "ingredients": ["carrots", "beans", "peas", "onion", "spices"],
      "nutritionalValue": {"fat": 2, "carbs": 10, "protein": 3},
      "calories": 80,
      "thumbnail": "url_"
    },
    {
      "name": "Grilled Fish",
      "category": "Non-Veg",
      "ingredients": ["fish fillets", "lemon", "garlic", "olive oil"],
      "nutritionalValue": {"fat": 8, "carbs": 0, "protein": 25},
      "calories": 150,
      "thumbnail": "url_"
    },
    {
      "name": "Mushroom Tikka",
      "category": "Veg",
      "ingredients": ["mushrooms", "yogurt", "spices"],
      "nutritionalValue": {"fat": 8, "carbs": 4, "protein": 5},
      "calories": 90,
      "thumbnail": "url_"
    },
    {
      "name": "Chicken Shawarma",
      "category": "Non-Veg",
      "ingredients": ["chicken", "pita bread", "hummus", "salad"],
      "nutritionalValue": {"fat": 15, "carbs": 20, "protein": 22},
      "calories": 280,
      "thumbnail": "url_"
    },
    {
      "name": "Pasta Salad",
      "category": "Veg",
      "ingredients": ["pasta", "vegetables", "olive oil", "feta cheese"],
      "nutritionalValue": {"fat": 10, "carbs": 30, "protein": 8},
      "calories": 240,
      "thumbnail": "url_"
    },
    {
      "name": "Veg Hakka Noodles",
      "category": "Veg",
      "ingredients": ["noodles", "mixed vegetables", "soy sauce"],
      "nutritionalValue": {"fat": 6, "carbs": 35, "protein": 5},
      "calories": 210,
      "thumbnail": "url_"
    },
    {
      "name": "Chicken Soup",
      "category": "Non-Veg",
      "ingredients": ["chicken", "carrots", "celery", "onion"],
      "nutritionalValue": {"fat": 6, "carbs": 8, "protein": 12},
      "calories": 120,
      "thumbnail": "url_"
    },
    {
      "name": "Falafel Wrap",
      "category": "Veg",
      "ingredients": ["falafel", "pita bread", "salad", "tahini"],
      "nutritionalValue": {"fat": 12, "carbs": 30, "protein": 10},
      "calories": 250,
      "thumbnail": "url_"
    },
    {
      "name": "Tuna Salad",
      "category": "Non-Veg",
      "ingredients": ["tuna", "lettuce", "onion", "olive oil"],
      "nutritionalValue": {"fat": 10, "carbs": 3, "protein": 25},
      "calories": 180,
      "thumbnail": "url_"
    },
    {
      "name": "Vegetable Kebab",
      "category": "Veg",
      "ingredients": ["potatoes", "carrots", "peas", "spices"],
      "nutritionalValue": {"fat": 8, "carbs": 20, "protein": 5},
      "calories": 180,
      "thumbnail": "url_"
    },
    {
      "name": "Prawn Fried Rice",
      "category": "Non-Veg",
      "ingredients": ["rice", "prawns", "vegetables", "soy sauce"],
      "nutritionalValue": {"fat": 10, "carbs": 40, "protein": 15},
      "calories": 280,
      "thumbnail": "url_"
    },
    {
      "name": "Spinach Salad",
      "category": "Veg",
      "ingredients": ["spinach", "almonds", "cranberries", "vinaigrette"],
      "nutritionalValue": {"fat": 8, "carbs": 10, "protein": 5},
      "calories": 100,
      "thumbnail": "url_"
    },
    {
      "name": "Lentil Soup",
      "category": "Veg",
      "ingredients": ["lentils", "onion", "tomato", "spices"],
      "nutritionalValue": {"fat": 4, "carbs": 20, "protein": 10},
      "calories": 150,
      "thumbnail": "url_"
    },
    {
      "name": "Grilled Chicken",
      "category": "Non-Veg",
      "ingredients": ["chicken", "olive oil", "lemon", "herbs"],
      "nutritionalValue": {"fat": 8, "carbs": 0, "protein": 28},
      "calories": 180,
      "thumbnail": "url_"
    },
    {
      "name": "Beetroot Salad",
      "category": "Veg",
      "ingredients": ["beetroot", "yogurt", "walnuts"],
      "nutritionalValue": {"fat": 6, "carbs": 15, "protein": 4},
      "calories": 110,
      "thumbnail": "url_"
    },
    {
        "name": "Quinoa Salad",
        "category": "Veg",
        "ingredients": ["quinoa", "cucumber", "tomato", "lemon juice", "olive oil"],
        "nutritionalValue": {"fat": 8, "carbs": 34, "protein": 9},
        "calories": 220,
        "thumbnail": "url_"
      },
      {
        "name": "Hummus with Pita Bread",
        "category": "Veg",
        "ingredients": ["chickpeas", "tahini", "olive oil", "garlic", "lemon juice", "pita bread"],
        "nutritionalValue": {"fat": 10, "carbs": 25, "protein": 8},
        "calories": 240,
        "thumbnail": "url_"
      },
      {
        "name": "Grilled Paneer Tikka",
        "category": "Veg",
        "ingredients": ["paneer", "yogurt", "spices", "bell peppers", "onion"],
        "nutritionalValue": {"fat": 15, "carbs": 5, "protein": 14},
        "calories": 200,
        "thumbnail": "url_"
      },
      {
        "name": "Avocado Toast",
        "category": "Veg",
        "ingredients": ["avocado", "whole grain bread", "lemon juice", "salt", "pepper"],
        "nutritionalValue": {"fat": 14, "carbs": 20, "protein": 5},
        "calories": 190,
        "thumbnail": "url_"
      },
      {
        "name": "Greek Salad",
        "category": "Veg",
        "ingredients": ["cucumber", "tomato", "feta cheese", "olive oil", "olives"],
        "nutritionalValue": {"fat": 12, "carbs": 8, "protein": 5},
        "calories": 130,
        "thumbnail": "url_"
      },
      {
        "name": "Falafel Wrap",
        "category": "Veg",
        "ingredients": ["falafel", "tortilla", "lettuce", "hummus", "tomato"],
        "nutritionalValue": {"fat": 10, "carbs": 30, "protein": 10},
        "calories": 260,
        "thumbnail": "url_"
      },
      {
        "name": "Pumpkin Soup",
        "category": "Veg",
        "ingredients": ["pumpkin", "cream", "onion", "garlic", "spices"],
        "nutritionalValue": {"fat": 6, "carbs": 18, "protein": 3},
        "calories": 120,
        "thumbnail": "url_"
      },
      {
        "name": "Zucchini Noodles",
        "category": "Veg",
        "ingredients": ["zucchini", "olive oil", "garlic", "cherry tomatoes", "parmesan"],
        "nutritionalValue": {"fat": 8, "carbs": 10, "protein": 5},
        "calories": 100,
        "thumbnail": "url_"
      },
      {
        "name": "Grilled Fish with Lemon Butter",
        "category": "Non-Veg",
        "ingredients": ["fish fillet", "lemon", "butter", "spices"],
        "nutritionalValue": {"fat": 12, "carbs": 2, "protein": 22},
        "calories": 180,
        "thumbnail": "url_"
      },
      {
        "name": "Chicken Caesar Salad",
        "category": "Non-Veg",
        "ingredients": ["chicken", "lettuce", "parmesan", "croutons", "caesar dressing"],
        "nutritionalValue": {"fat": 14, "carbs": 10, "protein": 20},
        "calories": 220,
        "thumbnail": "url_"
      },
      {
        "name": "Shrimp Scampi",
        "category": "Non-Veg",
        "ingredients": ["shrimp", "garlic", "olive oil", "parsley", "lemon juice"],
        "nutritionalValue": {"fat": 10, "carbs": 5, "protein": 15},
        "calories": 150,
        "thumbnail": "url_"
      },
      {
        "name": "Spaghetti Aglio e Olio",
        "category": "Veg",
        "ingredients": ["spaghetti", "olive oil", "garlic", "red chili flakes", "parsley"],
        "nutritionalValue": {"fat": 10, "carbs": 40, "protein": 8},
        "calories": 280,
        "thumbnail": "url_"
      },
      {
        "name": "Caprese Salad",
        "category": "Veg",
        "ingredients": ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar"],
        "nutritionalValue": {"fat": 10, "carbs": 6, "protein": 8},
        "calories": 120,
        "thumbnail": "url_"
      },
      {
        "name": "Buddha Bowl",
        "category": "Veg",
        "ingredients": ["quinoa", "sweet potato", "chickpeas", "spinach", "avocado"],
        "nutritionalValue": {"fat": 10, "carbs": 40, "protein": 12},
        "calories": 300,
        "thumbnail": "url_"
      },
      {
        "name": "Eggplant Parmesan",
        "category": "Veg",
        "ingredients": ["eggplant", "mozzarella", "tomato sauce", "parmesan", "breadcrumbs"],
        "nutritionalValue": {"fat": 14, "carbs": 25, "protein": 12},
        "calories": 240,
        "thumbnail": "url_"
      },
      {
        "name": "Stuffed Bell Peppers",
        "category": "Veg",
        "ingredients": ["bell peppers", "rice", "onion", "tomato", "spices"],
        "nutritionalValue": {"fat": 5, "carbs": 30, "protein": 6},
        "calories": 180,
        "thumbnail": "url_"
      },
      {
        "name": "Chicken Shawarma Wrap",
        "category": "Non-Veg",
        "ingredients": ["chicken", "pita bread", "yogurt", "spices", "lettuce"],
        "nutritionalValue": {"fat": 12, "carbs": 25, "protein": 18},
        "calories": 260,
        "thumbnail": "url_"
      },
      {
        "name": "Vegetable Stir-Fry",
        "category": "Veg",
        "ingredients": ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic"],
        "nutritionalValue": {"fat": 6, "carbs": 20, "protein": 5},
        "calories": 150,
        "thumbnail": "url_"
      },
      {
        "name": "Baked Salmon",
        "category": "Non-Veg",
        "ingredients": ["salmon fillet", "lemon", "olive oil", "dill", "spices"],
        "nutritionalValue": {"fat": 15, "carbs": 2, "protein": 25},
        "calories": 200,
        "thumbnail": "url_"
      },
      {
        "name": "Paneer Bhurji",
        "category": "Veg",
        "ingredients": ["paneer", "onion", "tomato", "green chilies", "spices"],
        "nutritionalValue": {"fat": 10, "carbs": 6, "protein": 12},
        "calories": 160,
        "thumbnail": "url_"
      },
      {
        "name": "Vegetable Lasagna",
        "category": "Veg",
        "ingredients": ["pasta sheets", "zucchini", "tomato sauce", "cheese", "spinach"],
        "nutritionalValue": {"fat": 12, "carbs": 35, "protein": 10},
        "calories": 280,
        "thumbnail": "url_"
      },
      {
        "name": "Chickpea Curry",
        "category": "Veg",
        "ingredients": ["chickpeas", "coconut milk", "onion", "spices"],
        "nutritionalValue": {"fat": 8, "carbs": 22, "protein": 9},
        "calories": 180,
        "thumbnail": "url_"
      },
      {
        "name": "Tuna Salad",
        "category": "Non-Veg",
        "ingredients": ["tuna", "mayonnaise", "celery", "lettuce", "pepper"],
        "nutritionalValue": {"fat": 12, "carbs": 2, "protein": 22},
        "calories": 180,
        "thumbnail": "url_"
      },
      {
        "name": "Upma",
        "category": "Veg",
        "ingredients": ["semolina", "onion", "green chilies", "curry leaves", "mustard seeds"],
        "nutritionalValue": {"fat": 5, "carbs": 28, "protein": 4},
        "calories": 170,
        "thumbnail": "url_"
      },
      {
        "name": "Poha",
        "category": "Veg", 
        "ingredients": ["flattened rice", "peanuts", "onion", "curry leaves", "spices"],
        "nutritionalValue": {"fat": 6, "carbs": 30, "protein": 5},
        "calories": 165,
        "thumbnail": "url_"
      },
      {
        "name": "Idli Sambar",
        "category": "Veg",
        "ingredients": ["rice", "urad dal", "toor dal", "vegetables", "spices"],
        "nutritionalValue": {"fat": 2, "carbs": 25, "protein": 8},
        "calories": 145,
        "thumbnail": "url_"
      },
      {
        "name": "Sabudana Khichdi",
        "category": "Veg",
        "ingredients": ["sago pearls", "peanuts", "potato", "cumin seeds", "green chilies"],
        "nutritionalValue": {"fat": 8, "carbs": 45, "protein": 4},
        "calories": 220,
        "thumbnail": "url_"
      },
      {
        "name": "Fish Curry (Bengali Style)",
        "category": "Non-Veg",
        "ingredients": ["rohu fish", "mustard paste", "turmeric", "green chilies", "mustard oil"],
        "nutritionalValue": {"fat": 12, "carbs": 5, "protein": 22},
        "calories": 210,
        "thumbnail": "url_"
      },
      {
        "name": "Vermicelli Upma",
        "category": "Veg",
        "ingredients": ["vermicelli", "onion", "carrot", "peas", "mustard seeds"],
        "nutritionalValue": {"fat": 4, "carbs": 32, "protein": 6},
        "calories": 180,
        "thumbnail": "url_"
      },
      {
        "name": "Chicken Sandwich",
        "category": "Non-Veg",
        "ingredients": ["chicken breast", "whole grain bread", "lettuce", "tomato", "mayonnaise"],
        "nutritionalValue": {"fat": 12, "carbs": 28, "protein": 24},
        "calories": 320,
        "thumbnail": "url_"
      },
      {
        "name": "Sprouts Salad",
        "category": "Veg",
        "ingredients": ["moong sprouts", "cucumber", "tomato", "lemon juice", "chaat masala"],
        "nutritionalValue": {"fat": 2, "carbs": 15, "protein": 8},
        "calories": 110,
        "thumbnail": "url_"
      },
      {
        "name": "Sardine Curry",
        "category": "Non-Veg",
        "ingredients": ["sardines", "kokum", "coconut", "red chilies", "tamarind"],
        "nutritionalValue": {"fat": 14, "carbs": 6, "protein": 20},
        "calories": 220,
        "thumbnail": "url_"
      },
      {
        "name": "Ragi Dosa",
        "category": "Veg",
        "ingredients": ["ragi flour", "rice flour", "urad dal", "onion", "spices"],
        "nutritionalValue": {"fat": 3, "carbs": 25, "protein": 6},
        "calories": 150,
        "thumbnail": "url_"
      },
      {
        "name": "Oats Uttapam",
        "category": "Veg",
        "ingredients": ["oats", "onion", "tomato", "carrot", "curd"],
        "nutritionalValue": {"fat": 4, "carbs": 28, "protein": 8},
        "calories": 180,
        "thumbnail": "url_"
      },
      {
        "name": "Egg White Omelette",
        "category": "Non-Veg",
        "ingredients": ["egg whites", "spinach", "mushroom", "bell peppers", "cheese"],
        "nutritionalValue": {"fat": 6, "carbs": 4, "protein": 18},
        "calories": 140,
        "thumbnail": "url_"
      },
      {
        "name": "Mixed Sprouts Poha",
        "category": "Veg",
        "ingredients": ["flattened rice", "mixed sprouts", "peanuts", "onion", "spices"],
        "nutritionalValue": {"fat": 5, "carbs": 32, "protein": 8},
        "calories": 190,
        "thumbnail": "url_"
      },
      {
        "name": "Chicken Lettuce Wraps",
        "category": "Non-Veg",
        "ingredients": ["minced chicken", "lettuce leaves", "carrots", "spring onions", "hoisin sauce"],
        "nutritionalValue": {"fat": 8, "carbs": 10, "protein": 20},
        "calories": 190,
        "thumbnail": "url_"
      },
      {
        "name": "Broken Wheat Upma",
        "category": "Veg",
        "ingredients": ["broken wheat", "onion", "carrot", "green peas", "mustard seeds"],
        "nutritionalValue": {"fat": 3, "carbs": 30, "protein": 6},
        "calories": 170,
        "thumbnail": "url_"
      },
      {
        "name": "Quinoa Bowl",
        "category": "Veg",
        "ingredients": ["quinoa", "black beans", "corn", "avocado", "lime juice"],
        "nutritionalValue": {"fat": 12, "carbs": 45, "protein": 14},
        "calories": 340,
        "thumbnail": "url_"
      },
      {
        "name": "Steamed Fish with Herbs",
        "category": "Non-Veg",
        "ingredients": ["fish fillet", "lemon", "garlic", "fresh herbs", "olive oil"],
        "nutritionalValue": {"fat": 8, "carbs": 2, "protein": 24},
        "calories": 175,
        "thumbnail": "url_"
      },
      {
        "name": "Moong Dal Cheela",
        "category": "Veg",
        "ingredients": ["moong dal", "onion", "tomato", "green chilies", "spices"],
        "nutritionalValue": {"fat": 4, "carbs": 20, "protein": 12},
        "calories": 165,
        "thumbnail": "url_"
      },
      {
        "name": "Vegetable Rava Uttapam",
        "category": "Veg",
        "ingredients": ["semolina", "onion", "tomato", "carrot", "curd"],
        "nutritionalValue": {"fat": 5, "carbs": 35, "protein": 7},
        "calories": 210,
        "thumbnail": "url_"
      },
      {
        "name": "Grilled Turkey Breast",
        "category": "Non-Veg",
        "ingredients": ["turkey breast", "herbs", "garlic", "lemon", "olive oil"],
        "nutritionalValue": {"fat": 4, "carbs": 1, "protein": 30},
        "calories": 160,
        "thumbnail": "url_"
      },
      {
        "name": "Ragi Dosa",
        "category": "Veg",
        "ingredients": ["ragi flour", "rice flour", "onion", "curry leaves", "oil"],
        "nutritionalValue": {"fat": 4, "carbs": 28, "protein": 8},
        "calories": 180,
        "thumbnail": "url_"
      },
      {
        "name": "Oats Idli",
        "category": "Veg", 
        "ingredients": ["oats", "curd", "carrot", "green chillies", "mustard seeds"],
        "nutritionalValue": {"fat": 3, "carbs": 25, "protein": 9},
        "calories": 165,
        "thumbnail": "url_"
      },
      {
        "name": "Jowar Roti",
        "category": "Veg",
        "ingredients": ["jowar flour", "water", "salt", "ghee"],
        "nutritionalValue": {"fat": 2, "carbs": 32, "protein": 6},
        "calories": 170,
        "thumbnail": "url_"
      },
      {
        "name": "Sattu Paratha",
        "category": "Veg",
        "ingredients": ["sattu", "wheat flour", "onion", "spices", "oil"],
        "nutritionalValue": {"fat": 7, "carbs": 30, "protein": 12},
        "calories": 230,
        "thumbnail": "url_"
      },
      {
        "name": "Moong Sprouts Salad",
        "category": "Veg",
        "ingredients": ["moong sprouts", "cucumber", "tomato", "lemon", "chaat masala"],
        "nutritionalValue": {"fat": 2, "carbs": 15, "protein": 8},
        "calories": 110,
        "thumbnail": "url_"
      },
      {
        "name": "Methi Thepla",
        "category": "Veg",
        "ingredients": ["wheat flour", "fenugreek leaves", "spices", "oil"],
        "nutritionalValue": {"fat": 6, "carbs": 25, "protein": 5},
        "calories": 175,
        "thumbnail": "url_"
      },
      {
        "name": "Fish Curry with Coconut",
        "category": "Non-Veg",
        "ingredients": ["fish", "coconut", "curry leaves", "tamarind", "spices"],
        "nutritionalValue": {"fat": 12, "carbs": 8, "protein": 22},
        "calories": 225,
        "thumbnail": "url_"
      },
      {
        "name": "Vermicelli Upma",
        "category": "Veg",
        "ingredients": ["vermicelli", "onion", "peanuts", "curry leaves", "spices"],
        "nutritionalValue": {"fat": 5, "carbs": 35, "protein": 6},
        "calories": 210,
        "thumbnail": "url_"
      },
      {
        "name": "Lauki Kofta",
        "category": "Veg",
        "ingredients": ["bottle gourd", "gram flour", "spices", "oil"],
        "nutritionalValue": {"fat": 8, "carbs": 18, "protein": 5},
        "calories": 165,
        "thumbnail": "url_"
      },
      {
        "name": "Chicken Tikka Roll",
        "category": "Non-Veg",
        "ingredients": ["chicken tikka", "roti", "onion", "mint chutney", "spices"],
        "nutritionalValue": {"fat": 12, "carbs": 25, "protein": 20},
        "calories": 290,
        "thumbnail": "url_"
      },
      {
        "name": "Sabudana Khichdi",
        "category": "Veg",
        "ingredients": ["sabudana", "peanuts", "potato", "cumin seeds", "ghee"],
        "nutritionalValue": {"fat": 9, "carbs": 45, "protein": 5},
        "calories": 280,
        "thumbnail": "url_"
      },
      {
        "name": "Drumstick Sambar",
        "category": "Veg",
        "ingredients": ["drumsticks", "toor dal", "sambar powder", "tamarind", "vegetables"],
        "nutritionalValue": {"fat": 3, "carbs": 22, "protein": 8},
        "calories": 145,
        "thumbnail": "url_"
      },
      {
        "name": "Egg Bhurji Paratha",
        "category": "Non-Veg",
        "ingredients": ["eggs", "wheat flour", "onion", "spices", "oil"],
        "nutritionalValue": {"fat": 11, "carbs": 28, "protein": 14},
        "calories": 265,
        "thumbnail": "url_"
      },
      {
        "name": "Poha Cutlet",
        "category": "Veg",
        "ingredients": ["flattened rice", "potato", "peanuts", "spices", "oil"],
        "nutritionalValue": {"fat": 7, "carbs": 30, "protein": 5},
        "calories": 200,
        "thumbnail": "url_"
      },
      {
        "name": "Matar Paneer",
        "category": "Veg",
        "ingredients": ["green peas", "paneer", "onion", "tomato", "spices"],
        "nutritionalValue": {"fat": 14, "carbs": 15, "protein": 12},
        "calories": 230,
        "thumbnail": "url_"
      },
      {
        "name": "Chicken Malai Tikka",
        "category": "Non-Veg",
        "ingredients": ["chicken", "cream", "cheese", "cashew paste", "spices"],
        "nutritionalValue": {"fat": 18, "carbs": 5, "protein": 25},
        "calories": 280,
        "thumbnail": "url_"
      },
      {
        "name": "Kanda Poha",
        "category": "Veg",
        "ingredients": ["flattened rice", "onion", "potato", "peanuts", "curry leaves"],
        "nutritionalValue": {"fat": 5, "carbs": 32, "protein": 4},
        "calories": 190,
        "thumbnail": "url_"
      },
      {
        "name": "Masoor Dal Khichdi",
        "category": "Veg",
        "ingredients": ["masoor dal", "rice", "ghee", "cumin", "turmeric"],
        "nutritionalValue": {"fat": 6, "carbs": 35, "protein": 10},
        "calories": 235,
        "thumbnail": "url_"
      },
      {
        "name": "Prawn Curry",
        "category": "Non-Veg",
        "ingredients": ["prawns", "coconut milk", "curry leaves", "tomato", "spices"],
        "nutritionalValue": {"fat": 12, "carbs": 8, "protein": 20},
        "calories": 220,
        "thumbnail": "url_"
      },
      {
        "name": "Besan Chilla",
        "category": "Veg",
        "ingredients": ["gram flour", "onion", "tomato", "green chilies", "spices"],
        "nutritionalValue": {"fat": 5, "carbs": 20, "protein": 10},
        "calories": 165,
        "thumbnail": "url_"
      }
  ]

export default nutritionPlans;
  
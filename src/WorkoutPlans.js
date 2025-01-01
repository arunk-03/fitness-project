const workoutPlans = {
    "workouts": [
      {
        "category": "Chest",
        "exercises": [
          {
            "name": "Push-Ups",
            "caloriesBurnt": 0.5, // Approx 0.5 calories per push-up
            "description": "Classic bodyweight exercise. Keep body straight, lower chest to ground and push up.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Incline Push-Ups",
            "caloriesBurnt": 0.4, // Slightly less effort per rep
            "description": "Perform push-ups with your hands elevated on a surface like a chair or bench.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Wide Push-Ups",
            "caloriesBurnt": 0.6, // Targets more muscles, burns slightly more
            "description": "Perform push-ups with your hands wider than shoulder-width apart.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Chest Dips on Chair",
            "caloriesBurnt": 0.8, // Performed using body weight only
            "description": "Use two sturdy chairs to lower and raise your body between them.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ]
      },
      {
        "category": "Back",
        "exercises": [
          {
            "name": "Superman Hold",
            "caloriesBurnt": 0.2, // Per second of hold
            "description": "Lie face down and lift arms and legs off the ground, holding the position.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Reverse Snow Angels",
            "caloriesBurnt": 0.3, // Small controlled movements burn less
            "description": "Move your arms in a wide arc while lying face down.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Bird Dog",
            "caloriesBurnt": 0.4, // Simple but engages core and back
            "description": "From a hands-and-knees position, extend one arm and opposite leg simultaneously.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ]
      },
      {
        "category": "Shoulders",
        "exercises": [
          {
            "name": "Pike Push-Ups",
            "caloriesBurnt": 0.7, // High exertion for shoulders
            "description": "Perform a push-up with your hips raised to focus on shoulder muscles.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Arm Circles",
            "caloriesBurnt": 0.1, // Per rotation
            "description": "Extend your arms and make small, controlled circles in the air.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Wall Handstand Hold",
            "caloriesBurnt": 0.5, // Per second
            "description": "Hold a handstand position against a wall for as long as possible.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ]
      },
      {
        "category": "Legs",
        "exercises": [
          {
            "name": "Bodyweight Squats",
            "caloriesBurnt": 0.4, // Moderate burn per rep
            "description": "Lower your body until your thighs are parallel to the ground and push back up.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Lunges",
            "caloriesBurnt": 0.5, // Per lunge
            "description": "Step forward and lower back knee toward ground. Works legs unilaterally.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Wall Sit",
            "caloriesBurnt": 0.2, // Per second of hold
            "description": "Sit against a wall with thighs parallel to the floor and hold the position.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ]
      },
      {
        "category": "Abs",
        "exercises": [
          {
            "name": "Crunches",
            "caloriesBurnt": 0.3, // Moderate effort
            "description": "Basic ab exercise. Curl upper body toward legs while lying down.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Planks",
            "caloriesBurnt": 0.1, // Per second
            "description": "Hold push-up position on forearms. Great for core stability.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Mountain Climbers",
            "caloriesBurnt": 0.2, // Per repetition
            "description": "Alternate bringing knees to chest in plank position. Dynamic core exercise.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ]
      },
      {
        "category": "Arms",
        "exercises": [
          {
            "name": "Tricep Dips on Chair",
            "caloriesBurnt": 0.6, // Per repetition
            "description": "Lower your body off a chair using your arms and push back up.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            "name": "Bicep Curls with Water Bottles",
            "caloriesBurnt": 0.3, // Per repetition
            "description": "Use household items like water bottles to perform bicep curls.",
            "thumbnail": "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ]
      }
    ]
  };
  
  export default workoutPlans;
  
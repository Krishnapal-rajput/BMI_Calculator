// Add an event listener to the button that listens for the 'click' event
document.querySelector("button").addEventListener("click", function () {
    // Get the user input for weight (first number input field) and height (last number input field)
    const weightInput = document.querySelector(
      'input[type="number"]:first-of-type'
    );
    const heightInput = document.querySelector(
      'input[type="number"]:last-of-type'
    );
  
    // Convert the input values to floating point numbers
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
  
    // Validate if the inputs are valid numbers and greater than 0
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
      // If not, display an alert and stop further execution
      alert("Please enter valid positive values for both weight and height.");
      return;
    }
  
    // Calculate BMI using the formula: BMI = weight / (height^2)
    const bmi = weight / (height * height);
  
    // Determine the BMI category based on the calculated BMI
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight"; // BMI less than 18.5 is underweight
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight"; // BMI between 18.5 and 24.9 is normal weight
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight"; // BMI between 25 and 29.9 is overweight
    } else {
      category = "Obese"; // BMI 30 or above is considered obese
    }
  
    // Display the calculated BMI (rounded to 2 decimal places) and the corresponding category
    document.getElementById("bmi").textContent = bmi.toFixed(2);
    document.getElementById("rate").textContent = category;
  
    // Make the result div visible (in case it was hidden)
    document.querySelector("div").style.display = "block";
  });
  
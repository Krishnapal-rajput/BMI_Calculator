document.querySelector("button").addEventListener("click", function () {
  // Get user inputs
  const weightInput = document.querySelector(
    'input[type="number"]:first-of-type'
  );
  const heightInput = document.querySelector(
    'input[type="number"]:last-of-type'
  );

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  // Check if inputs are valid numbers and greater than 0
  if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    alert("Please enter valid positive values for both weight and height.");
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Get BMI category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Display the result
  document.getElementById("bmi").textContent = bmi.toFixed(2);
  document.getElementById("rate").textContent = category;

  // Make the result div visible
  document.querySelector("div").style.display = "block";
});

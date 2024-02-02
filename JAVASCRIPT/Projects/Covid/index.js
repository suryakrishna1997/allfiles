// app.js

document.addEventListener("DOMContentLoaded", function () {
  // Mock data for daily cases
  const dailyCasesData = [10, 15, 20, 25, 30, 35, 40];

  // Registration form submission
  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration successful!"); // Add your backend logic here for registration
  });

  // Display daily cases chart
  const ctx = document.getElementById("dailyCasesChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: Array.from(
        { length: dailyCasesData.length },
        (_, i) => `Day ${i + 1}`
      ),
      datasets: [
        {
          label: "Daily Cases",
          data: dailyCasesData,
          borderColor: "blue",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});

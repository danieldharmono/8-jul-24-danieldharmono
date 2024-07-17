document.addEventListener("DOMContentLoaded", function() {
  const calculateBtn = document.getElementById("calculate");
  const resetBtn = document.getElementById("reset");

  calculateBtn.addEventListener("click", function() {
      // Mengambil nilai input
      let age = parseInt(document.getElementById("Age").value);
      let height = parseFloat(document.getElementById("Height").value);
      let weight = parseFloat(document.getElementById("Weight").value);

      // Validasi input
      if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
          alert("Please fill out all fields with valid numbers.");
          return;
      }

      // Menghitung BMI
      height = height / 100; // Konversi tinggi dari cm ke meter
      let BMI = weight / (height * height);

      // Menampilkan BMI dengan 2 desimal
      document.getElementById("result").textContent = BMI.toFixed(2);

      // Menentukan status BMI
      let status = "";
      if (BMI < 18.5) {
          status = "Underweight";
      } else if (BMI >= 18.5 && BMI < 25) {
          status = "Healthy";
      } else if (BMI >= 25 && BMI < 30) {
          status = "Overweight";
      } else {
          status = "Obese";
      }

      // Menampilkan status BMI
      document.getElementById("comment").textContent = status;
  });

  resetBtn.addEventListener("click", function() {
      // Mereset nilai input dan hasil
      document.getElementById("Age").value = "";
      document.getElementById("Height").value = "";
      document.getElementById("Weight").value = "";
      document.getElementById("result").textContent = "00.00";
      document.getElementById("comment").textContent = "Overweight";
    });
});
// Get inputs, button, and message HTMl
const calculateButton = document.querySelector("#calculate");
const resultDiv = document.querySelector(".result");
const messageH1 = document.querySelector(".result__message");
const principalInput = document.getElementById("principal");
const yearsInput = document.getElementById("years");
const compoundInput = document.getElementById("compound");
const ratesInput = document.getElementById("rates");

// Variables to display bar graph
const context = document.getElementById("result__graph").getContext("2d");
let barChart = new Chart(context, {});
let data = [];
let labels = [];

calculateButton.addEventListener("click", calculate);
/*Code Credit: some parts of the code idea got from Tadnology Youtube Channel, the link to the video is https://youtu.be//Uo9xkguefJM*/
function calculate(e) {
  e.preventDefault();
  // Reset all the data
  data = [];
  labels = [];

  // Get value of the input from HTML
  const principal = Number(principalInput.value);
  const years = Number(yearsInput.value);
  const rates = Number(ratesInput.value);
  const compound = Number(compoundInput.value);

  // Check if any input is Nan and input has to be an number
  if (principal === 0 || years === 0 || rates === 0) {
    alert("Please fill up all the input steps and only input number");
  } else {
    // Get the compound interest value per year
    for (let year = 0; year < years; year++) {
      const compoundInterest =
        principal * Math.pow(1 + rates / 100 / compound, compound * year);
      data.push(compoundInterest.toFixed(2));
      labels.push(`Year ${year}`);
    }

    // Display result and bar chart
    const profit = data[years - 1] - principal;
    messageH1.textContent = `After ${years} years, the final amount of money you can get is $${
      data[years - 1]
    }, which mean you earned $${profit.toFixed(2)}`;
    drawGraph();
    resultDiv.classList.remove("hidden");
  }
}

function drawGraph() {
  barChart.destroy();
  barChart = new Chart(context, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "$Total money of each year",
          data,
          backgroundColor: "palegoldenrod"
        }
      ]
    }
  });
}

document
  .getElementById("track-report-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const reportId = document.getElementById("report-id").value;

    if (reportId === "") {
      alert("Please enter a valid Report ID.");
      return;
    }

    // Show the progress tracker
    document.getElementById("progress-tracker").classList.remove("hidden");

    // Simulating report tracking steps (you will replace this with real data from the server)
    const progressSteps = [
      { step: 1, status: "active" }, // Report Submitted
      { step: 2, status: "active" }, // Under Review
      { step: 3, status: "inactive" }, // Investigation
      { step: 4, status: "inactive" }, // Resolved
    ];

    // Update the progress tracker based on the simulated report data
    updateProgress(progressSteps);
  });

function updateProgress(steps) {
  steps.forEach((stepInfo) => {
    const stepElement = document.getElementById(`step${stepInfo.step}`);

    if (stepInfo.status === "active") {
      stepElement.classList.add("active");
    } else {
      stepElement.classList.remove("active");
    }
  });
}

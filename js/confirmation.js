// Function to generate a unique report ID
function generateReportID() {
  const timestamp = Date.now(); // Current time in milliseconds
  const randomNum = Math.floor(Math.random() * 100); // Random number
  return `CAIRS-${timestamp}-${randomNum}`;
}

// Display the generated Report ID on the page
window.onload = () => {
  const reportID = generateReportID();
  document.getElementById("report-id-container").textContent = reportID;
};

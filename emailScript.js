// Initialize email.js with your user ID
emailjs.init("sEle-I2tdJ1MuIFYw");

// Replace with your template ID and service ID
const templateId = "template_jbhty33";
const serviceId = "service_4kjseoi";

// Function to send the email
function sendEmail() {
  // Get the name from the input field
  const recipientName = document.getElementById("name").value;

  // Get the user agent
  const userAgent = navigator.userAgent;
  // Get the device name using the provided DeviceCtrl
  const deviceName = DeviceCtrl.getDeviceName();

  // Data to populate the email template
  const templateParams = {
    to_name: recipientName,
    from_name: "Your Name",
    message: "Hellooo, this is a test email!",
    device_name: deviceName, // Use the device name from DeviceCtrl
  };

  // Send the email
  emailjs.send(serviceId, templateId, templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

// Call the initializeHandheldScanners method
DeviceCtrl.initializeHandheldScanners();

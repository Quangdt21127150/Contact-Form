const first_name_input = document.querySelector("#first_name_input");
const first_name_error_text = document.querySelector("#first_name_error_text");
const last_name_input = document.querySelector("#last_name_input");
const last_name_error_text = document.querySelector("#last_name_error_text");
const email_input = document.querySelector("#email_input");
const email_error_text = document.querySelector("#email_error_text");
const enquiry_radio = document.querySelector("#enquiry_radio");
const enquiry = document.querySelector("#enquiry");
const request_radio = document.querySelector("#request_radio");
const request = document.querySelector("#request");
const radio_error_text = document.querySelector("#radio_error_text");
const message_input = document.querySelector("#message_input");
const message_error_text = document.querySelector("#message_error_text");
const checkbox_input = document.querySelector("#checkbox_input");
const consent_error_text = document.querySelector("#consent_error_text");
const success_modal = document.querySelector("#success");

function submitForm() {
  if (!first_name_input.value) {
    first_name_input.style.border = "1px solid hsl(0, 66%, 56%)";
    first_name_error_text.style.display = "block";
  } else {
    first_name_input.style.border = "1px solid hsl(186, 15%, 59%)";
    first_name_error_text.style.display = "none";
  }

  if (!last_name_input.value) {
    last_name_input.style.border = "1px solid hsl(0, 66%, 56%)";
    last_name_error_text.style.display = "block";
  } else {
    last_name_input.style.border = "1px solid hsl(186, 15%, 59%)";
    last_name_error_text.style.display = "none";
  }

  if (!email_input.value) {
    email_input.style.border = "1px solid hsl(0, 66%, 56%)";
    email_error_text.style.display = "block";
  } else {
    first_name_input.style.border = "1px solid hsl(186, 15%, 59%)";
    email_error_text.style.display = "none";
  }

  if (!message_input.value) {
    message_input.style.border = "1px solid hsl(0, 66%, 56%)";
    message_error_text.style.display = "block";
  } else {
    message_input.style.border = "1px solid hsl(186, 15%, 59%)";
    message_error_text.style.display = "none";
  }

  if (!checkbox_input.checked) {
    consent_error_text.style.display = "block";
  } else {
    consent_error_text.style.display = "none";
  }
}

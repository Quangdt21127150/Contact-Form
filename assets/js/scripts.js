const first_name_input = document.querySelector("#first-name-input");
const first_name_error_text = document.querySelector("#first-name-error-text");
const last_name_input = document.querySelector("#last-name-input");
const last_name_error_text = document.querySelector("#last-name-error-text");
const email_input = document.querySelector("#email-input");
const email_error_text = document.querySelector("#email-error-text");
const enquiry = document.querySelector("#enquiry");
const request = document.querySelector("#request");
const enquiry_radio = document.querySelector("#enquiry-radio");
const request_radio = document.querySelector("#request-radio");
const radio_error_text = document.querySelector("#radio-error-text");
const message_input = document.querySelector("#message-input");
const message_error_text = document.querySelector("#message-error-text");
const checkbox_input = document.querySelector("#checkbox-input");
const consent_error_text = document.querySelector("#consent-error-text");
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
    email_input.style.border = "1px solid hsl(186, 15%, 59%)";
    email_error_text.style.display = "none";
  }

  if (!enquiry_radio.checked && !request_radio.checked) {
    enquiry.style.border = "1px solid hsl(0, 66%, 56%)";
    request.style.border = "1px solid hsl(0, 66%, 56%)";
    radio_error_text.style.display = "block";
  } else {
    enquiry.style.border = "1px solid hsl(186, 15%, 59%)";
    request.style.border = "1px solid hsl(186, 15%, 59%)";
    radio_error_text.style.display = "none";
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

// ^ For Testing, script is hosted on Google Scripts App API. 
const ADMIN_EMAIL = 'silas@farmhousefizz.com';

function doPost(e) {
  try {
    const data = e?.parameter || {};
    const sanitize = (v) => {
      if (typeof v !== 'string') return '';
      return v
        .replace(/[\r\n]+/g, ' ')
        .replace(/[^\P{C}]+/gu, '')
        .trim();
    };

    if (data.honeypot && data.honeypot.trim() !== '') {
      return jsonOk({ message: 'Ignored' });
    }

    const errors = [];

    const hasMinLen = (v, len = 3) =>
      typeof v === 'string' && v.trim().length >= len;

    const isChecked = (v) => v === 'on' || v === 'true';

    const requireField = (key, min = 3) => {
      if (!hasMinLen(data[key], min)) {
        console.log(key, data[key])
        errors.push(`${key} is required and must be at least ${min} characters`);
      }
    };

    // -----------------------------
    // Required base fields
    // -----------------------------
    requireField('firstName');
    requireField('email');
    requireField('inquiryType');

    if (
      data.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
      errors.push('email must be a valid email address');
    }

    // -----------------------------
    // Required checkboxes (always)
    // -----------------------------
    if (!isChecked(data.agreeTerms)) {
      errors.push('agreeTerms must be accepted');
    }
    if (!isChecked(data.confirmContact)) {
      errors.push('confirmContact must be accepted');
    }

    // -----------------------------
    // Inquiry-specific rules
    // -----------------------------
    if (data.inquiryType === 'Booking Events') {
      requireField('eventLocation');
      requireField('eventDate', 1);
      requireField('startTime', 1);
      requireField('endTime', 1);
      requireField('eventType', 1);
      requireField('serviceType', 1)

      if (!data.guestsMin || Number(data.guests) < 1) {
        errors.push('guests must be at least 1');
      }

      if (!data.guestsMax || Number(data.guests) < 1) {
        errors.push('guests must be at least 1');
      }

      if (!isChecked(data.understandQuote)) {
        errors.push('understandQuote must be accepted for event bookings');
      }
    } else {
      requireField('message', 5);
    }

    // -----------------------------
    // Validation failure
    // -----------------------------
    if (errors.length > 0) {
      return jsonOk({
        ok: false,
        error: 'Validation failed',
        status: 501,
        errors: errors,
      });
    }

    // -----------------------------
    // Build email body (only non-empty)
    // -----------------------------
    const lines = [];

    const add = (label, value) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        lines.push(`${label}: ${value}`);
      }
    };

    add('First Name', data.firstName);
    add('Last Name', data.lastName);
    add('Email', data.email);
    add('Phone', data.phone);
    add('Inquiry Type', data.inquiryType);

    if (data.inquiryType === 'Booking Events') {
      add('Event Location', data.eventLocation);
      add('Event Data', new Date(data.eventDate).toLocaleDateString('en-US'))
      add('Start Time', convert24to12(data.startTime));
      add('End Time', convert24to12(data.endTime));
      add('Service Type', data.serviceType);
      add('Guests', `${data.guestsMin} - ${data.guestsMax}`);
      add('Event Type', data.eventType);
      add('Additional Details', data.additionalDetails);
    } else {
      add('Message', data.message);
    }

    lines.push('');
    lines.push(`Agreed to Terms: ${isChecked(data.agreeTerms) ? 'YES' : 'NO'}`);
    lines.push(`Confirm Contact: ${isChecked(data.confirmContact) ? 'YES' : 'NO'}`);
    if (data.inquiryType === 'Booking Events') {
      lines.push(`Understand Quote: ${isChecked(data.understandQuote) ? 'YES' : 'NO'}`);
    }

    const subject =
      `[Farmhouse Fizz] ${data.inquiryType} — ${data.firstName}` +
      (data.lastName ? ` ${data.lastName}` : '');

    // -----------------------------
    // Send email
    // -----------------------------
    console.log(lines)
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject,
      body: lines.join('\n'),
      replyTo: data.email,
      name: 'Farmhouse Fizz Website',
    });

    return jsonOk({ 
      ok: true,
      message: 'Sent' ,
      status: 200
    });

  } catch (err) {
    console.error(err);
    return jsonOk({
      ok: false,
      error: 'Server error',
      status: 501,
      message: String(err),
    });
  }
}

// -----------------------------
// Helper response
// -----------------------------
function jsonOk(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function convert24to12(time24) {
  if (!time24 || !time24.includes(':')) {
    return "Invalid Time";
  }

  const [hoursStr, minutesStr] = time24.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = minutesStr.trim();

  const modifier = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;

  return `${hours12}:${minutes} ${modifier}`;
}

const params = new URLSearchParams({
  firstName: "Silas",
  lastName: "s",
  email: "silas@ilas.com",
  phone: "9194435453",
  inquiryType: "Booking Events",
  eventLocation: "test",
  eventDate: "2026-05-14",
  startTime: "00:00",
  endTime: "12:00",
  serviceType: "Unlimited Drinks",
  guestsMin: "50",
  guestsMax: "75",
  eventType: "Wedding",
  additionalDetails: "nah",
  understandQuote: "on",
  honeypot: "",
  agreeTerms: "on",
  confirmContact: "on"
});

 let data = doPost({
    parameter: Object.fromEntries(params.entries()),
    postData: {
      type: "application/x-www-form-urlencoded",
      contents: params.toString()
    }
  })

// console.log(data);
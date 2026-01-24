
import { Helmet } from 'react-helmet-async'
import { Input } from '../components/input.jsx'
import { Dropdown } from '../components/dropdown.jsx'
import { Textarea } from '../components/textarea.jsx'
import { useState, useRef } from 'react'

export function ContactUs() {
  // track the value of the dropdown and display a different set of fields based on selection
  const [selectedOption, setSelectedOption] = useState('')
  const formRef = useRef(null)
  const [status, setStatus] = useState(null)

  // TODO: replace with your deployed Google Apps Script URL (This is the outdated functional code, the news ones don't send the email for whatever reason)
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNSjYkZt6BCAhkOUKIDTCPx2vs7Fl-FdwB8UblplOodX5AOvuwDkk-MbK-iXKJwmPY/exec'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true })
    try {
      const fd = new FormData(formRef.current)
      const params = new URLSearchParams()
      for (const [k, v] of fd.entries()) params.append(k, v)

        const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: params.toString(),
        })
        
        if (!res.ok) {
          const txt = await res.text().catch(() => '')
          throw new Error(`Request failed: ${res.status} ${txt}`)
        }
        
        setStatus({ ok: true, message: `Submitted — thank you! (Redirecting in 5 seconds...)` })
        sendDiscordNot()
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    } catch (err) {
      setStatus({ ok: false, message: err.message || 'Submission failed' })
    } finally {
      setStatus((s) => ({ ...s, loading: false }))
    }
  }


  return (
    <>
      <Helmet>
        <title>Contact Us - Farmhouse Fizz</title>
        <meta name="description" content="Get in touch with Farmhouse Fizz Soda Bar." />
      </Helmet>
      <form ref={formRef} className='contact-form' action="" onSubmit={handleSubmit}>
        <p className="form-note">Required fields have a subtle accent; optional fields are dimmed.</p>
        <div className="form-row">
          <Input name="firstName" type="text" placeholder="First Name" required={true} half={true} />
          <Input name="lastName" type="text" placeholder="Last Name" half={true} />
        </div>
        <Input name="email" type="email" placeholder="Your Email" required={true} />
        <Input name="phone" type="text" placeholder="Phone Number" />
        <Dropdown
          name="inquiryType"
          options={["General Inquiry", "Feedback", "Booking Events", "Other"]}
          onSelect={(value) => setSelectedOption(value)}
          required={true}
        />
        {selectedOption === 'General Inquiry' || selectedOption === 'Feedback' || selectedOption === 'Other' ? (
          <Textarea name="message" placeholder="Your Message" required={true} rows={6} />
        ) : null}
        {selectedOption === 'Booking Events' ? (
          <>
          {/* location, date(s), start time, end time, number of guests, type of event (dropdown: wedding, party, cooperate, more if you can think of them),  */}
          <Input name="eventLocation" type="text" placeholder="Event Location" required={true} />
          <Input name="eventDate" type="date" required={true} min={new Date().toISOString().split('T')[0]} />
          <div className="form-row">
            <Input name="startTime" type="time" required={true} half={true} step={900} />
            <Input name="endTime" type="time" required={true} half={true} step={900} />
          </div>
          <Input name="guests" type="number" placeholder="Number of Guests" required={true} min={1} max={10000} inputMode="numeric" />
          <Dropdown
            name="eventType"
            options={["Wedding", "Party", "Corporate Event", "Other (please specify in Additional Details)"]}
            required={true}
          />
          <Textarea name="additionalDetails" placeholder="Additional Details" rows={4} />
          <label className="checkbox-label">
            <input name="understandQuote" type="checkbox" className="custom-checkbox" required />
            <span className="checkbox-text">I understand that Farmhouse Fizz Soda Bar is subject to ask more questions before giving a quote.</span>
          </label>
          </>
        ) : null}
        <Input name="honeypot" type="text" placeholder="Honey pot" honeypot={true} />
        <label className="checkbox-label">
          <input name="agreeTerms" type="checkbox" className="custom-checkbox" required />
          <span className="checkbox-text">I agree to the <a href="/terms-and-conditions">Terms and Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>.</span>
        </label>
        <label className="checkbox-label">
          <input name="confirmContact" type="checkbox" className="custom-checkbox" required />
          <span className="checkbox-text">I herby agree that all contact information is accurate and I will be contacted via the provided email or phone number.</span>
        </label>
        <div>
          <button type="submit">Submit</button>
          {status && (
            <span style={{ marginLeft: 12 }}>
              {status.loading ? 'Sending…' : status.message}
            </span>
          )}
        </div>
      </form>
    </>
  )
}


async function sendDiscordNot() {
  const content = `<@890576956054188083> There is a new submission, check your email!!`
  const webhook = "https://discord.com/api/webhooks/1463949414249926871/BhkEuiEp61Yo3y3LsjV6qU2JZllJdiGODA-aXLAM0lDoDBfaQpuOpmxIYJOmqkaLui2J"
  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    })
  } catch (error) {
    console.log(error)
  }
}
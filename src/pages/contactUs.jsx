
import { Helmet } from 'react-helmet-async'
import { Input } from '../components/input.jsx'
import { Dropdown } from '../components/dropdown.jsx'
import { Textarea } from '../components/textarea.jsx'
import { useState, useRef } from 'react'

export function ContactUs() {
  const [selectedOption, setSelectedOption] = useState('')
  const formRef = useRef(null)
  const [status, setStatus] = useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  // TODO: replace with your deployed Google Apps Script URL (This is the outdated functional code, the new ones don't send the email for whatever reason)
  // const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNSjYkZt6BCAhkOUKIDTCPx2vs7Fl-FdwB8UblplOodX5AOvuwDkk-MbK-iXKJwmPY/exec'
  const GOOGLE_APPS_SCRIPT_ID = 'AKfycbw3-tnKOo8ezBtWOX2TiZ9nkIkNBWXvcEGO54XRr61ZvTk-aL3fFBN1zxMCFxReoD7n'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true })
    setButtonDisabled(true)
    try {
      const fd = new FormData(formRef.current)
      const params = new URLSearchParams()
      for (const [k, v] of fd.entries()) params.append(k, v)

        const res = await fetch(`https://script.google.com/macros/s/${GOOGLE_APPS_SCRIPT_ID}/exec`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: params
        })
        let response = await res.json()
        
        if (!response.ok) {
          setButtonDisabled(false)
          return setStatus({ok: false, message: response.errors[0] || "Submission Failed, please check your inputs."})
        }
        
        setStatus({ ok: true, message: `Submitted — thank you! (Redirecting in 5 seconds...)` })
        sendDiscordNot()
        alert("Thank you for your inquiry! We have received your email, and will get back to you within 3 business days. Please check your spam folder if you do not see it.")
      setTimeout(() => {
        window.location.reload()
        setButtonDisabled(false)
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
        <meta name="description" content="Get in touch with Farmhouse Fizz to book our soda trailer, ask questions, or find out where we’ll be serving next in North Carolina." />
      </Helmet>
      <h1 className='page-title'>Contact Us</h1>
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
          label="Select A Inquiry Type..."
          required={true}
        />
        {selectedOption === 'General Inquiry' || selectedOption === 'Feedback' || selectedOption === 'Other' ? (
          <Textarea name="message" placeholder="Your Message" required={true} rows={6} />
        ) : null}
        {selectedOption === 'Booking Events' ? (
          <>
          <Input name="eventLocation" type="text" placeholder="Event Address (We Only Cater to NC)" required={true} />
          <Input name="eventDate" type="date" required={true} min={new Date().toISOString().split('T')[0]} />
          <div className="form-row">
            <Input name="startTime" type="time" required={true} half={true} step={900} />
            <Input name="endTime" type="time" required={true} half={true} step={900} />
          </div>
          <Dropdown 
            name="serviceType"
            options={['Unlimited Drinks', 'Set Amount of Drinks', 'Eaters Pay']}
            label="Select A Service Type..."
            required={true}
          />
          <div className="form-row">
            <Input name="guestsMin" type="number" placeholder='Min number of guests' required={true} half={true} min={50} max={10000}></Input>
            <Input name="guestsMax" type="number" placeholder='Max number of guests' required={true} half={true} min={50} max={10000}></Input>
          </div>
          <Dropdown
            name="eventType"
            options={["Wedding", "Party", "Corporate Event", "School Event", "Festival", "Other (please specify in Additional Details)"]}
            label="Select A Event Type..."
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
          <span className="checkbox-text">I hereby agree that all contact information is accurate and I will be contacted via the provided email or phone number.</span>
        </label>
        <div>
          <button type="submit" disabled={buttonDisabled}>Submit</button>
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
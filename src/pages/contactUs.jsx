import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Input } from '../components/input.jsx'
import { Dropdown } from '../components/dropdown.jsx'
import { Textarea } from '../components/textarea.jsx'

export class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
      status: null,
      buttonDisabled: false
    }
    this.formRef = React.createRef()

    this.GOOGLE_APPS_SCRIPT_ID = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_ID
  }

  onInquiryTypeSelect(value) {
    this.setState({ selectedOption: value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    this.setState({ status: { loading: true }, buttonDisabled: true })
    try {
      const fd = new FormData(this.formRef.current)
      const params = new URLSearchParams()
      for (const [k, v] of fd.entries()) params.append(k, v)

      const res = await fetch(`https://script.google.com/macros/s/${this.GOOGLE_APPS_SCRIPT_ID}/exec`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params
      })
      let response = await res.json()

      if (!response.ok) {
        this.setState({ buttonDisabled: false })
        return this.setState({ status: { ok: false, message: response.errors[0] || "Submission Failed, please check your inputs." } })
      }

      this.setState({ status: { ok: true, message: `Submitted — thank you! (Redirecting in 5 seconds...)` } })
      sendDiscordNot()
      alert("Thank you for your inquiry! We have received your email, and will get back to you within 3 business days. Please check your spam folder if you do not see it.")
      setTimeout(() => {
        window.location.reload()
        this.setState({ buttonDisabled: false })
      }, 5000)
    } catch (err) {
      this.setState({ status: { ok: false, message: err.message || 'Submission failed' } })
    } finally {
      this.setState((s) => ({ status: { ...s.status, loading: false } }))
    }
  }

  render() {
    const { selectedOption, status, buttonDisabled } = this.state

    return (
      <>
        <Helmet>
          <title>Contact Us - Farmhouse Fizz</title>
          <meta name="description" content="Get in touch with Farmhouse Fizz to book our soda trailer, ask questions, or find out where we’ll be serving next in North Carolina." />
        </Helmet>
        <div className="page-hero">
          <h1 className='page-title'>Contact Us</h1>
        </div>
        <form ref={this.formRef} className='contact-form' action="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="contact-form__row">
            <Input name="firstName" type="text" placeholder="First Name" required={true} half={true} />
            <Input name="lastName" type="text" placeholder="Last Name" half={true} />
          </div>
          <Input name="email" type="email" placeholder="Your Email" required={true} />
          <Input name="phone" type="text" placeholder="Phone Number" />
          <Dropdown
            name="inquiryType"
            options={["General Inquiry", "Feedback", "Booking Events", "Other"]}
            onSelect={this.onInquiryTypeSelect.bind(this)}
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
            <div className="contact-form__row">
              <Input name="startTime" type="time" required={true} half={true} step={900} />
              <Input name="endTime" type="time" required={true} half={true} step={900} />
            </div>
            <Dropdown
              name="serviceType"
              options={['Set Amount of Drinks', 'Eaters Pay']}
              label="Select A Service Type..."
              required={true}
            />
            <div className="contact-form__row">
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
            <label className="checkbox">
              <input name="understandQuote" type="checkbox" className="form-control" required />
              <span className="checkbox__label">I understand that Farmhouse Fizz Soda Bar is subject to ask more questions before giving a quote.</span>
            </label>
            </>
          ) : null}
          <Input name="honeypot" type="text" placeholder="Honey pot" honeypot={true} />
          <label className="checkbox">
            <input name="agreeTerms" type="checkbox" className="form-control" required />
            <span className="checkbox__label">I agree to the <a href="/terms-and-conditions">Terms and Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>.</span>
          </label>
          <label className="checkbox">
            <input name="confirmContact" type="checkbox" className="form-control" required />
            <span className="checkbox__label">I hereby agree that all contact information is accurate and I will be contacted via the provided email or phone number.</span>
          </label>
          <div>
            <button type="submit" className="btn btn--primary" disabled={buttonDisabled}>Submit</button>
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

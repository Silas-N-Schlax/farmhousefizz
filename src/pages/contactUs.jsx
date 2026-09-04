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

    if (!this.GOOGLE_APPS_SCRIPT_ID) {
      return this.setState({ status: { ok: false, message: 'This form is temporarily unavailable. Please email us directly instead.' } })
    }

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
        return this.setState({ status: { ok: false, message: response.errors?.[0] || "Submission failed, please check your inputs." } })
      }

      this.setState({ status: { ok: true, message: `Submitted — thank you! We'll get back to you within 3 business days. Check your spam folder if you don't see a reply.` } })
      this.formRef.current.reset()
      this.setState({ selectedOption: '' })
    } catch {
      this.setState({ status: { ok: false, message: 'Something went wrong sending your message. Please try again or email us directly.' } })
    } finally {
      this.setState({ buttonDisabled: false })
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
          <span className="eyebrow">Get In Touch</span>
          <h1 className='page-title'>Contact Us</h1>
          <p className="page-hero__text">Questions, feedback, or booking an event? Send us a note and we'll reply within 3 business days.</p>
        </div>
        <form ref={this.formRef} className='contact-form' onSubmit={this.handleSubmit.bind(this)}>
          <div className="contact-form__row">
            <Input name="firstName" label="First Name" type="text" placeholder="First Name" required={true} half={true} autoComplete="given-name" />
            <Input name="lastName" label="Last Name" type="text" placeholder="Last Name" half={true} autoComplete="family-name" />
          </div>
          <Input name="email" label="Email" type="email" placeholder="you@example.com" required={true} autoComplete="email" />
          <Input name="phone" label="Phone Number" type="tel" placeholder="(555) 555-5555" autoComplete="tel" />
          <Dropdown
            name="inquiryType"
            options={["General Inquiry", "Feedback", "Booking Events", "Other"]}
            onSelect={this.onInquiryTypeSelect.bind(this)}
            label="Inquiry Type"
            required={true}
          />
          {selectedOption === 'General Inquiry' || selectedOption === 'Feedback' || selectedOption === 'Other' ? (
            <Textarea name="message" label="Your Message" placeholder="How can we help?" required={true} rows={6} />
          ) : null}
          {selectedOption === 'Booking Events' ? (
            <fieldset className="contact-form__fieldset">
            <legend className="contact-form__legend">Event Details</legend>
            <Input name="eventLocation" label="Event Address" type="text" placeholder="We only cater within NC" required={true} autoComplete="street-address" />
            <Input name="eventDate" label="Event Date" type="date" required={true} min={new Date().toISOString().split('T')[0]} />
            <div className="contact-form__row">
              <Input name="startTime" label="Start Time" type="time" required={true} half={true} step={900} />
              <Input name="endTime" label="End Time" type="time" required={true} half={true} step={900} />
            </div>
            <Dropdown
              name="serviceType"
              options={['Set Amount of Drinks', 'Eaters Pay']}
              label="Service Type"
              required={true}
            />
            <div className="contact-form__row">
              <Input name="guestsMin" label="Min Guests" type="number" placeholder='Min' required={true} half={true} min={50} max={10000}></Input>
              <Input name="guestsMax" label="Max Guests" type="number" placeholder='Max' required={true} half={true} min={50} max={10000}></Input>
            </div>
            <Dropdown
              name="eventType"
              options={["Wedding", "Party", "Corporate Event", "School Event", "Festival", "Other (please specify in Additional Details)"]}
              label="Event Type"
              required={true}
            />
            <Textarea name="additionalDetails" label="Additional Details" placeholder="Anything else we should know?" rows={4} />
            <label className="checkbox">
              <input name="understandQuote" type="checkbox" className="form-control" required />
              <span className="checkbox__label">I understand that Farmhouse Fizz Soda Bar is subject to ask more questions before giving a quote.</span>
            </label>
            </fieldset>
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
          <div className="contact-form__actions">
            <button type="submit" className="btn btn--primary" disabled={buttonDisabled}>
              {status?.loading ? 'Sending…' : 'Submit'}
            </button>
            {status && !status.loading && (
              <span
                role="status"
                aria-live="polite"
                className={`contact-form__status ${status.ok ? 'contact-form__status--ok' : 'contact-form__status--error'}`}
              >
                {status.message}
              </span>
            )}
          </div>
        </form>
      </>
    )
  }
}

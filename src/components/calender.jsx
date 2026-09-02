import React from 'react'

export class Calender extends React.Component {
  render() {
    return (
     <>
      <div className="calendar-embed calendar-embed--mobile">
        <iframe
          id="sidebar_iframe"
          frameBorder="0"
          style={{
            borderRadius: 6 + 'px',
            border: '2px solid var(--op-color-primary-base)',
            marginBottom: '15px'
          }}
          width="75%"
          height="410"
          src="https://streetfoodfinder.com/embed/farmhousefizz/calendar/small?d=90&amp;u=farmhousefizz&amp;background=7a0a0a&amp;height=410&amp;bodybg=e5d6c5&amp;bodybar=e5d6c5&amp;color=1e1e1e&amp;headercolor=e5d6c5&amp;bordercolor=7a0a0a">
        </iframe>
      </div>
      <div className="calendar-embed calendar-embed--desktop">
        <iframe
          id="horizontal_iframe"
          frameBorder="0"
          width="100%"
          height="315"
          style={{maxWidth: 2500 + 'px'}}
          src="https://streetfoodfinder.com/embed/farmhousefizz/calendar/horizontal?d=14&amp;ws_div_2_bg_color=e5d6c5&amp;ws_findus_header_text=e5d6c5&amp;ws_findus_header_bg=7a0a0a&amp;ws_div_2_text_color=1e1e1e&amp;ws_div_2_linktext_color=7a0a0a&amp;ws_findus_bg_color=e5d6c5&amp;height=300">
        </iframe>
      </div>
     </>
    )
  }
}

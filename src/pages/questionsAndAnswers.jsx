
import { Helmet } from 'react-helmet-async'
import { DropdownCards } from '../components/dropdown-cards'

export function QuestionsAndAnswers() {
  const fqa = [
    {
      question: "Do Dirty Sodas have alcohol?",
      answer: [
        "Nope! Dirty Sodas are completely non-alcoholic. They’re made with soda, flavored syrups, cream (optional), and other fun mix-ins. No booze here."
      ]
    },
    {
      question: "Do you sell alcohol?",
      answer: [
        "Nope! We don’t sell or serve alcohol. Everything we offer is family-friendly, caffeine aside 😉."
      ]
    },
    {
      question: "What is a Dirty Soda?",
      answer: [
        "A Dirty Soda is a custom soda made by mixing classic sodas with flavored syrups and other mix-ins like citrus, chocolate, or cream. It’s a fun, upgraded twist on regular soda that’s totally customizable."
      ]
    },
    {
      question: "Are your drinks kid-friendly?",
      answer: [
        "Absolutely! As a family-run business, we love serving kids of all ages."
      ]
    },
    {
      question: "How customizable are your Dirty Sodas?",
      answer: [
        "Very customizable! Our signature drinks can be adjusted to your taste, like holding the cream or skipping a syrup. At select events, you can even build your own from our soda, syrup, and cream options. Premium toppings may be available for an extra charge."
      ]
    },
    {
      question: "What types of events do you cater?",
      answer: [
        "We cater birthdays, weddings, school events, church gatherings, corporate events, and private parties. If people are gathering, we can probably be there."
      ]
    },
    {
      question: "Do you sell anything other than soda?",
      answer: [
        "Yes! Alongside Dirty Sodas, we offer other drink options so there’s something for everyone. Check out our menu or social media to see our full lineup and seasonal specials."
      ]
    },
    {
      question: "Do you have sugar-free options?",
      answer: [
        "Yes! We offer a limited selection of sugar-free syrups, diet sodas, and water-based options."
      ]
    },
    {
      question: "Do you have dairy-free options?",
      answer: [
        "Yes! You can skip the cream entirely or choose a dairy-free alternative."
      ]
    },
    {
      question: "Do you offer caffeine-free options?",
      answer: [
        "Yep! We have caffeine-free sodas like Sprite and root beer. And if you want the opposite, we might have a way to add extra caffeine too 👀."
      ]
    },
    {
      question: "Do you offer different sizes?",
      answer: [
        "Yes! Most of our drinks come in 16oz, 24oz, and 32oz sizes. Some seasonal or specialty drinks may have size limitations."
      ]
    },
    {
      question: "Where are you located and do you travel for events?",
      answer: [
        "We’re based in the RDU area of North Carolina and are happy to travel within NC for events. Reach out to check availability and get a custom quote."
      ]
    },
    {
      question: "Do you offer seasonal or rotating flavors?",
      answer: [
        "Absolutely! We love rotating flavors and seasonal specials. There’s always a new recipe waiting to happen."
      ]
    },
    {
      question: "Do you handle allergies or dietary restrictions?",
      answer: [
        "We do our best to accommodate allergies and dietary needs. Let us know ahead of time and we’ll help you find a safe option."
      ]
    },
    {
      question: "What makes your Dirty Soda different from a regular soda?",
      answer: [
        "Why have plain root beer when you could have butterscotch vanilla root beer with cream? We turn ordinary soda into something smoother, bolder, and way more fun."
      ]
    },
    {
      question: "Why would you put cream in a soda?!",
      answer: [
        "It sounds strange...until you try it. Cream smooths out the soda, balances the sweetness, and makes it rich and refreshing, kind of like a soda float without the ice cream mountain."
      ]
    },
    {
      question: "Will this taste weird? Be honest.",
      answer: [
        "Honestly? It surprises most people in a good way. We were skeptical too, and now we run a trailer selling them. That should say something."
      ]
    },
    {
      question: "Is it still good if I don’t like super sweet drinks?",
      answer: [
        "Yes! While syrups add sweetness, we also offer lighter bases like sparkling water for a more refreshing and less sweet option."
      ]
    },
    {
      question: "Can I get one without cream?",
      answer: [
        "Of course! Cream is always optional, and plenty of our drinks are amazing without it. We might still suggest trying it once though 😉."
      ]
    },
    {
      question: "I don’t like soda. Do you have something I might like?",
      answer: [
        "Probably! We offer non-soda and lighter drink options. Check out our menu or social media to see what else we’re serving."
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>FQA - Farmhouse Fizz</title>
        <meta name="description" content="Have questions? Find answers about booking, events, pricing, and how Farmhouse Fizz Soda Bar operates across North Carolina." />
      </Helmet>

      <div className="fqa-cards">
        {fqa.map((item, index) => (<DropdownCards data={item} index={index} />))}
      </div>
    </>
  )
}

// ,
//     {
//       question: "",
//       answer: [
//         "",
//       ]
//     }

// Do Dirty Sodas have alcohol?

// Do you sell alcohol?

// What is a Dirty Soda?

// Why would you put cream in a soda?!

// What types of events do you cater?

// Do you sell anything other than soda?

// Do you have sugar-free options?

// Do you have dairy-free Dirty Sodas?

// How customizable are your Dirty Sodas?

// Are your drinks kid-friendly?

// Do you offer caffeine-free options?

// Where are you located / do you travel for events?

// Do you offer seasonal or rotating flavors?

// Do you handle allergies or dietary restrictions?

// What makes your Dirty Sodas different from regular soda?

// Will this taste weird? (Be honest.)

// Is it still good if I don’t like super sweet drinks?

// Can I get one without cream?

// I don't like soda, do you have something I might like?

// How far in advance should I book an event? (🔃)

// How many people can you serve at an event? (🔃)
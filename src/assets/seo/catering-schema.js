export function cateringSchema(data) {
  return {
    "@context": "https://schema.org",
    "@type": "CateringBusiness",
    "@id": "https://farmhousefizz.com/#business",
    "name": "Farmhouse Fizz",
    "url": "https://farmhousefizz.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://farmhousefizz.com/contact-us"
    },
    "description": data.metaDesc || "Farmhouse Fizz provides mobile beverage catering across Raleigh-Durham and Central North Carolina, serving dirty sodas, handcrafted lemonades, and custom drink experiences for weddings, corporate events, and celebrations.",
    "areaServed": [
      "Raleigh",
      "Durham",
      "Cary",
      "Chapel Hill",
      "Wake Forest",
      "Holly Springs",
      "Fuquay-Varina",
      "North Carolina"
    ],
    "serviceType": data.serviceTypes || [
      "Beverage Catering",
      "Mobile Soda Bar",
      "Wedding Catering",
      "Corporate Catering"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beverage Catering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dirty Soda Catering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lemonade Catering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cold Brew Catering"
          }
        }
      ]
    }
  };
}
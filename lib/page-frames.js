export function splitLeadSection(main = "") {
  const match = main.match(/^(\s*<section\b[\s\S]*?<\/section>)([\s\S]*)$/i);

  if (!match) {
    return {
      lead: "",
      remainder: main
    };
  }

  return {
    lead: match[1],
    remainder: match[2]
  };
}

export const homeFeatureStrip = {
  eyebrow: "Plan A First Visit",
  title: "Everything people usually want to know, all in one place.",
  copy:
    "A clearer first-step experience for visitors, families, and anyone exploring the church for the first time.",
  actions: [
    { href: "/contact", label: "Ask a question", style: "primary" },
    { href: "/worship", label: "See Sunday worship", style: "secondary" }
  ],
  cards: [
    {
      eyebrow: "This Sunday",
      title: "8:00am and 10:00am",
      copy: "A quiet early communion and a main parish Eucharist with music, Junior Church, and refreshments.",
      href: "/worship",
      linkLabel: "What to expect",
      tone: "dark"
    },
    {
      eyebrow: "Families",
      title: "Warm, low-pressure, and easy to join",
      copy: "Children are welcome, service sheets are provided, and no prior church knowledge is assumed.",
      href: "/contact",
      linkLabel: "Plan your first visit",
      tone: "warm"
    },
    {
      eyebrow: "Beyond Sunday",
      title: "Life events, playgroup, hall hire, and local care",
      copy: "St John's serves the parish throughout the week, not only at Sunday services.",
      href: "/community",
      linkLabel: "Explore community life",
      tone: "forest"
    }
  ]
};

export const routeFeatureStrips = {
  about: {
    eyebrow: "Quick Guide",
    title: "A calmer way to explore parish life.",
    copy: "Start here for the church's story, its place in Friern Barnet, and the values that shape the community.",
    actions: [
      { href: "/worship", label: "See worship", style: "primary" },
      { href: "/contact", label: "Get in touch", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "History",
        title: "Serving Friern Barnet since 1911",
        copy: "A long-standing parish presence with roots in the local neighbourhood.",
        href: "/about",
        linkLabel: "Read the story",
        tone: "warm"
      },
      {
        eyebrow: "Church Life",
        title: "Traditional worship, everyday welcome",
        copy: "A parish shaped by prayer, hospitality, pastoral care, and local service.",
        href: "/community",
        linkLabel: "See community life",
        tone: "dark"
      },
      {
        eyebrow: "Care",
        title: "Safeguarding and support matter here",
        copy: "The church takes dignity, safety, and good pastoral practice seriously.",
        href: "/safeguarding",
        linkLabel: "Safeguarding details",
        tone: "forest"
      }
    ]
  },
  community: {
    eyebrow: "Weekday Life",
    title: "A parish that stays active through the week.",
    copy: "Community life at St John's is practical, relational, and rooted in the neighbourhood.",
    actions: [
      { href: "/contact", label: "Ask about groups", style: "primary" },
      { href: "/hall-hire", label: "View spaces", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "Families",
        title: "Little Sparrows and intergenerational welcome",
        copy: "Parents, carers, children, and long-time members all find a place in the rhythm of the church.",
        href: "/community",
        linkLabel: "Explore community life",
        tone: "forest"
      },
      {
        eyebrow: "Belonging",
        title: "Home groups, friendships, and pastoral care",
        copy: "Church life extends beyond services into prayer, conversation, and mutual support.",
        href: "/contact",
        linkLabel: "Start a conversation",
        tone: "dark"
      },
      {
        eyebrow: "Neighbourhood",
        title: "School links, outreach, and local partnerships",
        copy: "The church remains visible in the wider life of Friern Barnet.",
        href: "/about",
        linkLabel: "Learn about the parish",
        tone: "warm"
      }
    ]
  },
  contact: {
    eyebrow: "Reach Out",
    title: "Choose the simplest next step.",
    copy: "Whether you are planning a visit or asking for support, the site now makes the next action much clearer.",
    actions: [
      { href: "tel:02083613081", label: "Call church", style: "primary" },
      { href: "mailto:info@stjohnsfriernbarnet.org", label: "Email church", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "Phone",
        title: "020 8361 3081",
        copy: "A straightforward route for urgent questions or practical enquiries.",
        href: "tel:02083613081",
        linkLabel: "Call now",
        tone: "dark"
      },
      {
        eyebrow: "Email",
        title: "info@stjohnsfriernbarnet.org",
        copy: "Use the form or email directly if you would rather write things down clearly.",
        href: "mailto:info@stjohnsfriernbarnet.org",
        linkLabel: "Send an email",
        tone: "warm"
      },
      {
        eyebrow: "In Person",
        title: "Office hours on Tuesday and Thursday mornings",
        copy: "A helpful option for planning baptisms, weddings, hall hire, or a first visit.",
        href: "/life-events",
        linkLabel: "Life events overview",
        tone: "forest"
      }
    ]
  },
  "hall-hire": {
    eyebrow: "Local Venue Hire",
    title: "Practical, affordable space with a better first impression.",
    copy: "The updated layout makes the hall-hire offer feel clearer, more trustworthy, and easier to enquire about.",
    actions: [
      { href: "/contact", label: "Check availability", style: "primary" },
      { href: "/hall-hire", label: "See the spaces", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "Flexible",
        title: "Useful for classes, parties, meetings, and community events",
        copy: "A local venue that can support both regular bookings and one-off use.",
        href: "/hall-hire",
        linkLabel: "View hall details",
        tone: "warm"
      },
      {
        eyebrow: "Practical",
        title: "Accessible entrance and kitchen facilities",
        copy: "The essentials are surfaced more clearly so visitors can make quicker decisions.",
        href: "/contact",
        linkLabel: "Make an enquiry",
        tone: "dark"
      },
      {
        eyebrow: "Confidence",
        title: "A cleaner, more professional enquiry path",
        copy: "The site now gives hall hire the same quality of presentation as the rest of the church.",
        href: "/contact",
        linkLabel: "Ask a question",
        tone: "forest"
      }
    ]
  },
  "life-events": {
    eyebrow: "Life Events",
    title: "Sensitive moments need a calmer, clearer path.",
    copy: "This section now feels more supportive and guided for baptisms, weddings, funerals, and memorial conversations.",
    actions: [
      { href: "/contact", label: "Start a conversation", style: "primary" },
      { href: "/about", label: "About the parish", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "Baptisms",
        title: "Welcome a child with prayer, promise, and celebration",
        copy: "The church can guide families through christenings and thanksgiving services.",
        href: "/life-events",
        linkLabel: "Explore baptisms",
        tone: "warm"
      },
      {
        eyebrow: "Weddings",
        title: "A beautiful church setting and pastoral support",
        copy: "Planning is easier when the information and contact route feel trustworthy from the start.",
        href: "/contact",
        linkLabel: "Ask about weddings",
        tone: "dark"
      },
      {
        eyebrow: "Funerals",
        title: "Careful, gentle help at difficult times",
        copy: "The updated design puts reassurance and clarity ahead of clutter.",
        href: "/contact",
        linkLabel: "Request support",
        tone: "forest"
      }
    ]
  },
  "news-events": {
    eyebrow: "Parish Rhythm",
    title: "A clearer frame for regular notices and seasonal moments.",
    copy: "Even without a live CMS feed yet, the page can still feel active, useful, and easy to scan.",
    actions: [
      { href: "/worship", label: "Sunday worship", style: "primary" },
      { href: "/contact", label: "Contact the office", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "Weekly Rhythm",
        title: "Sunday worship remains the anchor point",
        copy: "Regular services are surfaced clearly so people know where church life begins each week.",
        href: "/worship",
        linkLabel: "See service times",
        tone: "dark"
      },
      {
        eyebrow: "Seasonal Life",
        title: "Major church seasons can be highlighted more cleanly",
        copy: "Christmas, Easter, and parish events need stronger visual framing than a plain notice list.",
        href: "/news-events",
        linkLabel: "View notices",
        tone: "warm"
      },
      {
        eyebrow: "Questions",
        title: "Direct contact stays close at hand",
        copy: "People should never have to hunt around the site to ask about an upcoming event.",
        href: "/contact",
        linkLabel: "Get in touch",
        tone: "forest"
      }
    ]
  },
  safeguarding: {
    eyebrow: "Safeguarding",
    title: "Safety information should feel immediate and clear.",
    copy: "This strip gives safeguarding content more prominence and a clearer route to the right contact points.",
    actions: [
      { href: "mailto:safeguarding@stjohnsfriernbarnet.org", label: "Email safeguarding", style: "primary" },
      { href: "/contact", label: "General contact", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "Immediate Concern",
        title: "Act quickly if someone may be at risk",
        copy: "Safeguarding guidance should be visible, direct, and never hidden behind decorative layout.",
        href: "/safeguarding",
        linkLabel: "Read safeguarding info",
        tone: "dark"
      },
      {
        eyebrow: "Local Contact",
        title: "Parish Safeguarding Officer details are easy to find",
        copy: "The page now carries a stronger sense of seriousness and clarity.",
        href: "mailto:safeguarding@stjohnsfriernbarnet.org",
        linkLabel: "Contact officer",
        tone: "warm"
      },
      {
        eyebrow: "Trust",
        title: "Dignity, accountability, and pastoral care",
        copy: "The design supports the message that every person matters and concerns will be taken seriously.",
        href: "/about",
        linkLabel: "About the parish",
        tone: "forest"
      }
    ]
  },
  worship: {
    eyebrow: "Sunday Worship",
    title: "A clearer welcome before someone ever attends.",
    copy: "The page now feels more guided for newcomers while still respecting the church's traditional identity.",
    actions: [
      { href: "/contact", label: "Plan a first visit", style: "primary" },
      { href: "/community", label: "Community life", style: "secondary" }
    ],
    cards: [
      {
        eyebrow: "8:00am",
        title: "Quiet Holy Communion",
        copy: "A reflective early service for those who value a simpler, quieter gathering.",
        href: "/worship",
        linkLabel: "Learn more",
        tone: "forest"
      },
      {
        eyebrow: "10:00am",
        title: "Parish Eucharist with music and Junior Church",
        copy: "The main Sunday gathering now feels easier to understand at a glance.",
        href: "/worship",
        linkLabel: "What to expect",
        tone: "dark"
      },
      {
        eyebrow: "First Visit",
        title: "Service sheets, welcome team, and refreshments afterwards",
        copy: "The redesign helps remove uncertainty for people arriving for the first time.",
        href: "/contact",
        linkLabel: "Get in touch first",
        tone: "warm"
      }
    ]
  }
};

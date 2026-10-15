// Generated from opslogic-content-v1.html — edit text here.
export type Block = { p: string } | { ul: { h?: string; t: string }[] };
export interface Section { t: string; b: Block[] }
export interface Service { cat: string; title: string; short: string; h: string; p: string; cta: string; sections: Section[]; steps: { t: string; d: string }[]; faq: { q: string; a: string }[] }
export interface Cat { slug: string; title: string; h: string; p: string; o: string; cta: string; groups: { t: string; items: string[] }[]; faq: { q: string; a: string }[] }
export const CATS: Cat[] = [
 {
  "slug": "business-operations",
  "title": "Business Operations",
  "h": "Set up properly. Stay in good standing.",
  "p": "From the first registration to the annual filing, we handle the administrative side of running a company in India, so nothing gets missed and nobody on your team has to become an expert in it.",
  "o": "The paperwork around a business is dull until it goes wrong. A missed filing turns into a penalty. A badly chosen structure turns into a tax problem two years later. We help you pick the right structure at the start, get every registration done in the right order, and keep an eye on deadlines so you don't have to.",
  "cta": "Tell us what you're setting up.",
  "groups": [
   {
    "t": "Starting up",
    "items": [
     "business-setup",
     "offshore-extension-centres",
     "startup-support-and-project-planning",
     "licences-and-registrations"
    ]
   },
   {
    "t": "Running the company",
    "items": [
     "compliance",
     "corporate-secretarial",
     "accounting-tax-and-audit",
     "legal-support"
    ]
   },
   {
    "t": "Workspace and administration",
    "items": [
     "administration",
     "managed-workspace"
    ]
   },
   {
    "t": "Changing or closing",
    "items": [
     "closure-and-restructuring"
    ]
   }
  ],
  "faq": [
   {
    "q": "How long does incorporation in India take?",
    "a": "Usually a few weeks from the point we have all your documents. Foreign-owned companies take longer, mostly because of bank accounts and KYC."
   },
   {
    "q": "Do I need to be in India?",
    "a": "No. Much of it can be handled remotely."
   }
  ]
 },
 {
  "slug": "hr-payroll",
  "title": "HR & Payroll",
  "h": "Hire the right people. Pay them right. Every month.",
  "p": "We find talent, employ it on your behalf, run payroll and look after the HR work in between. You decide who joins and what they work on. We handle everything that comes with having them on the books.",
  "o": "Hiring in India looks simple from the outside. Then come state-specific contracts, provident fund and insurance enrolments, tax deductions on a deadline. Use one piece, say payroll only, or let us run the whole employment side.",
  "cta": "Tell us who you want to hire.",
  "groups": [
   {
    "t": "Hire and employ",
    "items": [
     "hire-talent",
     "contract-staffing",
     "employer-of-record",
     "contractor-of-record",
     "freelancer-payments"
    ]
   },
   {
    "t": "Pay and reward",
    "items": [
     "payroll-management",
     "benefits-and-insurance"
    ]
   },
   {
    "t": "HR support",
    "items": [
     "hr-business-partner",
     "hr-policies-and-handbook",
     "performance-and-appraisals",
     "hr-compliance-audit"
    ]
   },
   {
    "t": "People experience",
    "items": [
     "employee-engagement",
     "training-and-development",
     "onboarding-and-offboarding",
     "equipment-and-remote-setup"
    ]
   }
  ],
  "faq": [
   {
    "q": "Do I need an Indian company to hire in India?",
    "a": "No. With an Employer of Record we are the legal employer and you direct the work."
   },
   {
    "q": "EOR or contractor of record?",
    "a": "EOR employs someone full-time with benefits. A Contractor of Record manages an independent contractor relationship."
   }
  ]
 },
 {
  "slug": "it-services",
  "title": "IT Services",
  "h": "Technology that does its job and stays out of the way.",
  "p": "From the laptop on a new hire's desk to the company website, we buy, set up, build and look after what your business runs on. We keep the fixes quick and the explanations short.",
  "o": "Most IT problems aren't dramatic. A password reset that takes two days. A server that was supposed to be migrated in March. A new hire who starts Monday and has no laptop. We deal with those, and with the bigger projects behind them: device rollouts for new teams, directory services, application builds.",
  "cta": "Tell us what needs fixing, building or moving.",
  "groups": [
   {
    "t": "Hardware and devices",
    "items": [
     "it-asset-procurement",
     "it-inventory-management",
     "employee-device-setup",
     "device-rental-and-leasing",
     "office-it-setup"
    ]
   },
   {
    "t": "IT operations and software",
    "items": [
     "it-helpdesk-and-managed-it-support",
     "microsoft-365-and-google-workspace",
     "server-migrations",
     "cloud-services",
     "business-software",
     "systems-integration"
    ]
   },
   {
    "t": "Security and compliance",
    "items": [
     "network-and-security",
     "certification-and-compliance-readiness"
    ]
   },
   {
    "t": "Web, apps and design",
    "items": [
     "web-development",
     "application-development",
     "ui-ux-design",
     "branding",
     "digital-marketing",
     "qa-and-testing"
    ]
   }
  ],
  "faq": [
   {
    "q": "Can you supply devices to remote employees?",
    "a": "Yes. We order, configure and deliver to the office or the employee's home, and collect and wipe the device when they leave."
   },
   {
    "q": "What happens to our code if we stop?",
    "a": "You own it. We hand over source code, documentation and access."
   }
  ]
 }
];
export const SERVICES: Record<string, Service> = {
 "business-setup": {
  "cat": "business-operations",
  "title": "Business Setup",
  "short": "Structure advice, incorporation, PAN and TAN, GST, Shops and Establishment, PF and ESI, bank account support and FEMA reporting. Private Limited, wholly owned subsidiary, LLP, branch or liaison office.",
  "h": "Start your India company the right way round.",
  "p": "Structure first, paperwork second. We take you from the first conversation to a registered, banked, compliant company, and tell you what each step involves before you sign anything.",
  "cta": "Tell us what you're setting up.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Setting up in India isn't hard once you know the order of operations. Getting the order wrong is what costs people months: a bank account opened before the right registrations, a structure that can't take foreign investment, a hiring plan stalled by a missing PF registration."
     },
     {
      "p": "We start with what you're building, then recommend the structure, then do the work in a sensible sequence. You get a written plan with steps, costs and timeline before anything is filed."
     }
    ]
   },
   {
    "t": "Choosing a structure",
    "b": [
     {
      "ul": [
       {
        "h": "Private Limited Company",
        "t": "The usual choice for startups and growing businesses, especially if you plan to raise investment or issue shares to employees."
       },
       {
        "h": "Wholly owned subsidiary",
        "t": "A Private Limited Company held entirely by a foreign parent. Right when you want full control and a proper Indian operating base."
       },
       {
        "h": "LLP",
        "t": "Lighter on compliance and common for professional services. Less suited to outside investment."
       },
       {
        "h": "Branch or liaison office",
        "t": "For foreign companies with a limited scope of activity. These need specific approvals, so we check eligibility first."
       }
      ]
     },
     {
      "p": "Not sure? We'll compare the two likeliest options for you in writing, covering tax, compliance load, hiring and exit."
     }
    ]
   },
   {
    "t": "What we handle",
    "b": [
     {
      "ul": [
       {
        "t": "Structure advice and a written recommendation"
       },
       {
        "t": "Name checks and approval"
       },
       {
        "t": "Incorporation with the Ministry of Corporate Affairs, including constitutional documents"
       },
       {
        "t": "Director identification numbers and digital signatures"
       },
       {
        "t": "PAN, TAN and the registered office address"
       },
       {
        "t": "GST, Shops and Establishment, and PF, ESI and Professional Tax registrations where they apply"
       },
       {
        "t": "Bank account opening support"
       },
       {
        "t": "Share capital and FEMA reporting for foreign-owned companies"
       },
       {
        "t": "A handover pack and a compliance calendar for your first year"
       }
      ]
     }
    ]
   },
   {
    "t": "Documents you'll need",
    "b": [
     {
      "p": "The list depends on the structure. Typically:"
     },
     {
      "ul": [
       {
        "t": "For each director and shareholder: identity proof, address proof, passport-size photo and PAN, if held"
       },
       {
        "t": "For overseas directors or shareholders: passport and address proof, notarised and apostilled or legalised in your home country. We tell you exactly which documents and how."
       },
       {
        "t": "For the registered office: proof of address, such as a rent agreement or ownership document, a recent utility bill and the owner's consent"
       },
       {
        "t": "Two or three proposed company names, in order of preference"
       }
      ]
     }
    ]
   },
   {
    "t": "Who this is for",
    "b": [
     {
      "p": "Overseas companies opening an Indian subsidiary, founders starting a company in India, and existing businesses adding a new entity. If you only need to hire a few people, read about our Employer of Record service first. It may get you started faster."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "We talk",
    "d": "A free call about what you're building, who owns it and how many people you'll hire."
   },
   {
    "t": "We recommend",
    "d": "A written plan with structure, steps, costs and timeline."
   },
   {
    "t": "We collect documents",
    "d": "One checklist, with guidance on notarisation for overseas signatories."
   },
   {
    "t": "We incorporate",
    "d": "Name approval, filing and the certificate of incorporation."
   },
   {
    "t": "We register and bank",
    "d": "PAN, TAN, tax and labour registrations, then the bank account and share capital reporting."
   },
   {
    "t": "We hand over",
    "d": "A complete pack, plus a compliance calendar. Many clients stay with us for ongoing compliance."
   }
  ],
  "faq": [
   {
    "q": "How long does it take?",
    "a": "Usually a few weeks from the point we have all your documents. Foreign-owned companies tend to take longer, mostly because of bank account opening and KYC on overseas directors. You'll get a realistic timeline in the proposal."
   },
   {
    "q": "Do I need to be in India?",
    "a": "No. We handle the process remotely. Some documents need notarising in your home country."
   },
   {
    "q": "How many directors do I need?",
    "a": "A Private Limited Company needs at least two directors and two shareholders, and at least one director must be resident in India. We can suggest options if you don't have a resident director yet."
   },
   {
    "q": "Is there a minimum capital requirement?",
    "a": "Not for a Private Limited Company. We'll still advise on a sensible amount, because banks, visas and credibility all depend on it."
   },
   {
    "q": "Can a foreign company own 100%?",
    "a": "In many sectors, yes. Some sectors have caps or need approval, so we check the rules for your business first."
   },
   {
    "q": "What happens after incorporation?",
    "a": "Registrations, bank account, hiring and the first compliance cycle. We can stay on for compliance, administration, payroll and workspace."
   }
  ]
 },
 "offshore-extension-centres": {
  "cat": "business-operations",
  "title": "Offshore Extension Centres",
  "short": "An India team without running a full India business: start on EOR, move to a subsidiary, or build a full offshore centre.",
  "h": "An India team without running an India business.",
  "p": "We help overseas companies build a team in India, from the first hire to a full operating centre.",
  "cta": "Tell us about the team you want in India.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Many overseas companies want people in India without setting up and running a whole business there. We build that for you, in stages, so you only take on what you need."
     }
    ]
   },
   {
    "t": "Three ways to start",
    "b": [
     {
      "ul": [
       {
        "h": "Employer of Record",
        "t": "Start hiring now, with no entity."
       },
       {
        "h": "Subsidiary",
        "t": "Your own Indian company, once the team justifies it."
       },
       {
        "h": "Offshore centre",
        "t": "A larger team for a function like engineering, support or finance operations."
       }
      ]
     }
    ]
   },
   {
    "t": "What we set up",
    "b": [
     {
      "p": "Entity, workspace, hiring, payroll, laptops and compliance, planned together. We'll also tell you honestly when staying on Employer of Record a while longer is the better choice."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Plan",
    "d": "Roles, timeline and the right structure."
   },
   {
    "t": "Start small",
    "d": "First hires, a desk and payroll."
   },
   {
    "t": "Scale",
    "d": "More people, a bigger space, your own entity if it makes sense."
   },
   {
    "t": "Move across",
    "d": "Transfer the team to your entity without a gap."
   }
  ],
  "faq": [
   {
    "q": "Do we need our own entity?",
    "a": "Not at the start. Employer of Record works well for the first hires."
   },
   {
    "q": "How many people before an entity makes sense?",
    "a": "There's no single number. It depends on cost, control and plans. We'll model it with you."
   },
   {
    "q": "Can we move people from EOR to our entity?",
    "a": "Yes, with their service history carried over."
   }
  ]
 },
 "administration": {
  "cat": "business-operations",
  "title": "Administration",
  "short": "Records, vendor management, office admin, office supplies and furniture sourcing, travel, insurance renewals and licence tracking. A named coordinator and a simple weekly update.",
  "h": "The everyday running of the back office, off your plate.",
  "p": "The dull jobs that have to get done and have no glamour at all, handled by a named coordinator.",
  "cta": "Tell us what's eating your time.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Somebody always ends up chasing the courier, renewing the insurance and finding last year's agreement. It's rarely the person you hired to do something else. We take as much of it as you want."
     }
    ]
   },
   {
    "t": "What we can take on",
    "b": [
     {
      "ul": [
       {
        "t": "Document and records management, including statutory registers and contracts"
       },
       {
        "t": "Vendor onboarding, agreements and renewals"
       },
       {
        "t": "Office administration: office supplies and furniture sourcing, utilities, courier and facilities coordination"
       },
       {
        "t": "Travel and event logistics"
       },
       {
        "t": "Insurance and policy renewals"
       },
       {
        "t": "Licence and subscription tracking"
       },
       {
        "t": "Operational support for founders and leadership"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Pick what to hand over",
    "d": "Start with one or two jobs."
   },
   {
    "t": "Meet your coordinator",
    "d": "One named person."
   },
   {
    "t": "Weekly update",
    "d": "Short, in plain language."
   }
  ],
  "faq": [
   {
    "q": "Do we get a portal to learn?",
    "a": "No. You get a named coordinator and a simple weekly update."
   },
   {
    "q": "Can we start small?",
    "a": "Yes. Most clients do, then hand over more once it's working."
   }
  ]
 },
 "compliance": {
  "cat": "business-operations",
  "title": "Compliance",
  "short": "A compliance calendar worked through for you: ROC filings, director KYC, GST, PF, ESI, Professional Tax, FEMA and audit preparation.",
  "h": "Never find out about a deadline from a penalty notice.",
  "p": "We keep a calendar of everything your company has to file, file it on time, and tell you plainly where you stand.",
  "cta": "Tell us where you stand.",
  "sections": [
   {
    "t": "Why it matters",
    "b": [
     {
      "p": "Indian compliance isn't one big thing. It's dozens of small deadlines under different laws, and a missed one rarely hurts on the day. It turns up months later as a late fee, a notice, or a question from an investor's lawyer."
     },
     {
      "p": "Most companies we meet aren't careless. Nobody's job is to watch the calendar."
     }
    ]
   },
   {
    "t": "What we look after",
    "b": [
     {
      "ul": [
       {
        "t": "Annual filings with the Registrar of Companies, board and shareholder meetings, statutory registers"
       },
       {
        "t": "Director KYC and other periodic filings"
       },
       {
        "t": "GST registration and returns"
       },
       {
        "t": "PF, ESI and Professional Tax payments and returns"
       },
       {
        "t": "Shops and Establishment and other labour law requirements"
       },
       {
        "t": "FEMA and RBI reporting for foreign-owned companies"
       },
       {
        "t": "Policy reviews and audit preparation"
       }
      ]
     }
    ]
   },
   {
    "t": "We start with a health check",
    "b": [
     {
      "p": "Before we take over, we go through what has been filed and what hasn't. If there are gaps, you get a list in plain language, ranked by risk, with a sensible order to clear them. No lectures."
     }
    ]
   },
   {
    "t": "Who this suits",
    "b": [
     {
      "p": "Companies with an Indian entity and nobody in-house who owns compliance, and overseas parents who want someone local watching the deadlines."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Health check",
    "d": "We review your filings, registrations and records."
   },
   {
    "t": "Calendar",
    "d": "You get one dated list of what's due and who does what."
   },
   {
    "t": "We file, you approve",
    "d": "We prepare everything and chase signatures."
   },
   {
    "t": "Monthly note",
    "d": "A short summary of what was filed and what's coming."
   }
  ],
  "faq": [
   {
    "q": "What if we're already behind?",
    "a": "Common, and fixable. We clear the backlog in order of risk and tell you what each item will cost."
   },
   {
    "q": "Do you handle GST and income tax?",
    "a": "GST returns are part of compliance. Bookkeeping and income tax sit under Accounting, Tax and Audit."
   },
   {
    "q": "Who signs the filings?",
    "a": "Directors and authorised signatories still sign what the law says they must. We do the preparation and the chasing."
   }
  ]
 },
 "managed-workspace": {
  "cat": "business-operations",
  "title": "Managed Workspace",
  "short": "Furnished seats, meeting rooms, internet, housekeeping and IT support, with flexible terms. Located in <span class='ph'>Hyderabad, add area</span>.",
  "h": "A desk, a door and working internet. Ready on day one.",
  "p": "Furnished office space for teams that don't want to deal with leases, fit-outs and maintenance.",
  "cta": "Tell us how many seats you need.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Taking your own office in India means a lease, a deposit, interiors, internet, a landlord and someone to call when the AC fails. For a team of five, that's a lot of effort for something that isn't your business."
     },
     {
      "p": "With us you move into space that's already set up and pay for the seats you use."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Furnished seats, from a small team up to a dedicated floor <span class='ph'>confirm capacity</span>"
       },
       {
        "t": "Power, high-speed internet and backup"
       },
       {
        "t": "Meeting rooms and common areas"
       },
       {
        "t": "Housekeeping, security and pantry"
       },
       {
        "t": "IT support and equipment from our IT team"
       },
       {
        "t": "A registered address, where your set-up allows it"
       },
       {
        "t": "Flexible terms, so you can add seats as the team grows"
       }
      ]
     }
    ]
   },
   {
    "t": "One provider for the whole team",
    "b": [
     {
      "p": "Say you're an overseas company hiring five people in India. We can employ them through Employer of Record, run payroll, deliver their laptops and seat them in the same office. One agreement, one point of contact."
     }
    ]
   },
   {
    "t": "Location",
    "b": [
     {
      "p": "<span class='ph'>Add area, floor size, nearby transport and parking.</span>"
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Visit",
    "d": "See the space and tell us what you need."
   },
   {
    "t": "Choose",
    "d": "Pick seats or a floor and a start date."
   },
   {
    "t": "Move in",
    "d": "Desks, internet and IT are ready before your team arrives."
   },
   {
    "t": "Grow",
    "d": "Add or release seats as the team changes."
   }
  ],
  "faq": [
   {
    "q": "Can we add seats later?",
    "a": "Yes. That's the point of flexible terms. We'll agree notice periods upfront."
   },
   {
    "q": "Can we use the address to register our company?",
    "a": "Often, depending on the agreement and your entity type. We confirm before you sign."
   },
   {
    "q": "Do you manage offices we already lease?",
    "a": "No. Our service is the workspace we provide."
   }
  ]
 },
 "accounting-tax-and-audit": {
  "cat": "business-operations",
  "title": "Accounting, Tax and Audit",
  "short": "Bookkeeping, monthly MIS, GST, TDS and income tax filings, and support through statutory and tax audits.",
  "h": "Books you can trust, and filings that go in on time.",
  "p": "We keep your accounts in order and your tax filings on schedule, as your finance back office or alongside your own accountant.",
  "cta": "Tell us how you keep your books today.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Most small and mid-sized companies don't need a finance department. They need clean books every month, filings that aren't late, and someone who can answer the auditor's questions."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Bookkeeping, payables and receivables"
       },
       {
        "t": "Monthly closing and management reports"
       },
       {
        "t": "GST registration and returns"
       },
       {
        "t": "TDS and income tax filings, and advance tax planning"
       },
       {
        "t": "Payroll tax coordination with our payroll team"
       },
       {
        "t": "Support through statutory and tax audits"
       },
       {
        "t": "Replies to tax notices"
       },
       {
        "t": "Reporting packs for an overseas parent <span class='ph'>confirm</span>"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Review",
    "d": "We look at your books, filings and software."
   },
   {
    "t": "Set up",
    "d": "Routines, cut-off dates and a chart of accounts that makes sense."
   },
   {
    "t": "Close each month",
    "d": "Books closed, reports sent, filings made."
   },
   {
    "t": "Year end",
    "d": "Audit preparation and queries handled with your auditor."
   }
  ],
  "faq": [
   {
    "q": "Can you work with our own accountant?",
    "a": "Yes. We can do the monthly work and leave planning to them, or the other way round."
   },
   {
    "q": "Which software do you use?",
    "a": "Zoho Books, Tally, or whatever you already run."
   },
   {
    "q": "Do you carry out the audit?",
    "a": "No. The statutory audit is done by an independent chartered accountant. We prepare the records and handle their queries."
   }
  ]
 },
 "licences-and-registrations": {
  "cat": "business-operations",
  "title": "Licences and Registrations",
  "short": "Sector approvals, import-export codes and labour registrations.",
  "h": "The approvals your business needs, and who holds them.",
  "p": "Sector approvals, import-export codes and labour registrations, handled start to finish.",
  "cta": "Tell us what your business does.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Which licences you need depends on what you actually do, where, and with how many people. We work that out first, then handle the applications."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "A review of the registrations and approvals your activities require"
       },
       {
        "t": "Sector-specific approvals"
       },
       {
        "t": "Import-export code"
       },
       {
        "t": "Labour and establishment registrations"
       },
       {
        "t": "Renewals tracked on your compliance calendar"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Review",
    "d": "What you do and where."
   },
   {
    "t": "Apply",
    "d": "Documents, forms and follow-up."
   },
   {
    "t": "Track",
    "d": "Renewals added to the calendar."
   }
  ],
  "faq": [
   {
    "q": "How do I know which licences I need?",
    "a": "We review your activities and tell you, in writing."
   },
   {
    "q": "What if you don't hold the licence yourselves?",
    "a": "We tell you who does, and manage the process around it."
   }
  ]
 },
 "corporate-secretarial": {
  "cat": "business-operations",
  "title": "Corporate Secretarial",
  "short": "Board notices, minutes, resolutions, allotments and changes to directors or registered office.",
  "h": "The small corporate actions that make everything else valid.",
  "p": "Board meetings, resolutions, allotments and registers, done properly and on time.",
  "cta": "Tell us what needs filing.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "A share allotment without the right resolution, or a director change that was never filed, can cause trouble years later, often at the worst moment, such as an investment round."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Board and shareholder meeting notices, agendas and minutes"
       },
       {
        "t": "Resolutions, including written ones"
       },
       {
        "t": "Share allotments and transfers"
       },
       {
        "t": "Changes to directors, registered office and authorised capital"
       },
       {
        "t": "Statutory registers kept up to date"
       },
       {
        "t": "Annual general meeting arrangements"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Tell us what's happening",
    "d": "A new director, a fundraise, a change of address."
   },
   {
    "t": "We prepare",
    "d": "Documents, resolutions and filings."
   },
   {
    "t": "You sign",
    "d": "We chase signatures and file."
   },
   {
    "t": "We record",
    "d": "Registers updated and a copy for your files."
   }
  ],
  "faq": [
   {
    "q": "How many board meetings do we need?",
    "a": "The law sets minimums that vary by type of company. We'll tell you what applies to yours and plan the year."
   },
   {
    "q": "Can you help before a funding round?",
    "a": "Yes. We tidy the records first, so due diligence doesn't turn up surprises."
   }
  ]
 },
 "startup-support-and-project-planning": {
  "cat": "business-operations",
  "title": "Startup Support and Project Planning",
  "short": "A clean cap table, investor-ready records and a first-year setup, hiring and compliance roadmap.",
  "h": "Get the foundations right before they get expensive to change.",
  "p": "Early-stage companies need a different kind of help: clean records, a sensible structure and a plan for year one.",
  "cta": "Tell us what you're building.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Decisions made in the first year, about who owns what, how people are hired and what gets filed, are the ones that cost most to unpick later, usually in the middle of a funding round."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "A clean cap table and share records"
       },
       {
        "t": "Investor-ready company records"
       },
       {
        "t": "An operating structure that fits your plans"
       },
       {
        "t": "A first-year plan covering setup, hiring and compliance"
       },
       {
        "t": "A realistic budget for the basics"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Talk",
    "d": "Where you are and where you're heading."
   },
   {
    "t": "Plan",
    "d": "A written roadmap for the first year."
   },
   {
    "t": "Do",
    "d": "We carry out the parts you want help with."
   }
  ],
  "faq": [
   {
    "q": "Do you help us raise money?",
    "a": "No. We make sure your records, structure and compliance are in order, so due diligence goes smoothly."
   },
   {
    "q": "Is this only for startups?",
    "a": "No, but it's built for them."
   }
  ]
 },
 "closure-and-restructuring": {
  "cat": "business-operations",
  "title": "Closure and Restructuring",
  "short": "Mergers, conversions and orderly wind-downs, with the filings they need.",
  "h": "Changing shape or winding down, in an orderly way.",
  "p": "Mergers, conversions and closures need the right filings in the right order.",
  "cta": "Tell us what's changing.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Not every story is about starting up. Sometimes two entities become one, a company changes structure, or a business has run its course. Done properly, it's a process. Done badly, it leaves loose ends that come back years later."
     }
    ]
   },
   {
    "t": "What we help with",
    "b": [
     {
      "ul": [
       {
        "t": "Mergers and amalgamations"
       },
       {
        "t": "Converting one type of entity into another"
       },
       {
        "t": "Changing structure as the business changes"
       },
       {
        "t": "Winding up or striking off a company"
       },
       {
        "t": "Handling employees and contracts during the change"
       },
       {
        "t": "Final filings, so nothing is left open"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Plan",
    "d": "Options, steps and timeline."
   },
   {
    "t": "Prepare",
    "d": "Documents and approvals."
   },
   {
    "t": "Complete",
    "d": "Filings and confirmations."
   }
  ],
  "faq": [
   {
    "q": "How long does closing a company take?",
    "a": "It depends on the route and whether past filings are up to date. We'll give you a realistic range after reviewing your position."
   },
   {
    "q": "What happens to our employees?",
    "a": "We coordinate exits properly with our HR team."
   }
  ]
 },
 "legal-support": {
  "cat": "business-operations",
  "title": "Legal Support",
  "short": "Contract drafting and review, NDAs, employment agreements, founder agreements and replies to notices. Delivered through our partner lawyers, who also handle disputes and court matters.",
  "h": "Everyday legal work, with lawyers you can reach.",
  "p": "Our partner lawyers draft, review and advise. We coordinate, so you have one point of contact.",
  "cta": "Send us the document or the question.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Most business legal work is routine and easy to get wrong: a vendor contract with the wrong liability clause, an employment agreement that doesn't hold up when it's needed."
     }
    ]
   },
   {
    "t": "What's covered",
    "b": [
     {
      "ul": [
       {
        "t": "Client, vendor and partnership agreements"
       },
       {
        "t": "NDAs and confidentiality terms"
       },
       {
        "t": "Employment agreements, offer letters and HR policies"
       },
       {
        "t": "Shareholder and founder agreements"
       },
       {
        "t": "Notices to and replies from authorities"
       },
       {
        "t": "Legal checks on compliance matters"
       },
       {
        "t": "Disputes and court matters, through our partner lawyers"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Tell us",
    "d": "Send the document or describe the issue."
   },
   {
    "t": "We brief the lawyer",
    "d": "With the context they need, so you don't repeat yourself."
   },
   {
    "t": "You get a clear answer",
    "d": "Risks flagged in plain language, with a recommendation."
   },
   {
    "t": "We follow up",
    "d": "Until it's signed, filed or settled."
   }
  ],
  "faq": [
   {
    "q": "Are you a law firm?",
    "a": "No. The legal work is done by our partner lawyers, and we coordinate it."
   },
   {
    "q": "Can you review a contract we've been sent?",
    "a": "Yes. Tell us how soon you need it back and we'll prioritise it."
   },
   {
    "q": "Do you only help with India?",
    "a": "Yes, Indian law and Indian businesses."
   }
  ]
 },
 "hire-talent": {
  "cat": "hr-payroll",
  "title": "Hire Talent",
  "short": "Role scoping, sourcing, screening, interviews, offers and background checks. A short list, not a stack of CVs.",
  "h": "Fewer CVs. Better conversations.",
  "p": "We find people who fit the job and the team, and bring you a short list you'd be glad to interview.",
  "cta": "Tell us who you want to hire.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Good hiring starts with a few honest questions: what will this person actually do in their first six months, which experience really matters, and which lines on the job description are just nice to have. We ask them before we search."
     }
    ]
   },
   {
    "t": "How we work with you",
    "b": [
     {
      "ul": [
       {
        "t": "Role scoping and job description support"
       },
       {
        "t": "Sourcing across job boards, networks and direct outreach"
       },
       {
        "t": "Screening and skills assessment"
       },
       {
        "t": "Interview coordination and feedback"
       },
       {
        "t": "Salary benchmarking and offer negotiation"
       },
       {
        "t": "Reference and background checks"
       },
       {
        "t": "Onboarding support after the offer is accepted"
       }
      ]
     }
    ]
   },
   {
    "t": "Roles we cover",
    "b": [
     {
      "p": "Technology, finance, operations, sales, marketing and support, from individual contributors to team leads. If you're building a whole team, we assign a dedicated recruiter and run it like a project."
     }
    ]
   },
   {
    "t": "Hire and employ in one place",
    "b": [
     {
      "p": "If you'd like us to employ the people we place, they move straight onto our Employer of Record service. One provider from search to first payslip."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Brief",
    "d": "A call to understand the role, the team and the budget."
   },
   {
    "t": "Search",
    "d": "We source and screen against what really matters."
   },
   {
    "t": "Shortlist",
    "d": "A few people, with our notes on each."
   },
   {
    "t": "Offer",
    "d": "We help with negotiation and checks."
   },
   {
    "t": "Start",
    "d": "Onboarding, equipment and, if you want it, payroll."
   }
  ],
  "faq": [
   {
    "q": "How long does a search take?",
    "a": "It depends on the role. Senior and niche roles take longer. You get an honest range at the start."
   },
   {
    "q": "What if the hire doesn't work out?",
    "a": "<span class='ph'>Add your replacement terms.</span>"
   },
   {
    "q": "Can you hire in bulk?",
    "a": "Yes. A dedicated recruiter runs it as a project, with weekly progress updates."
   }
  ]
 },
 "employer-of-record": {
  "cat": "hr-payroll",
  "title": "Employer of Record",
  "short": "We are the legal employer in India. You direct the work. We handle contracts, payroll, PF, ESI, gratuity, insurance and offboarding.",
  "h": "Hire in India without opening a company first.",
  "p": "We become the legal employer for your people in India. You choose them and direct their work. We handle contracts, payroll, taxes, benefits and compliance.",
  "cta": "Tell us who you want to hire.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "An Employer of Record, or EOR, employs people on your behalf in a country where you have no entity. It's the quickest route into India for most overseas companies: no subsidiary, no bank account, no learning labour law before your first hire can start."
     },
     {
      "p": "Your team member gets a proper employer, with payslips on time, benefits that work and someone to call. You get one clear monthly invoice and a named contact."
     }
    ]
   },
   {
    "t": "What you control and what we handle",
    "b": [
     {
      "p": "<b>You decide:</b>"
     },
     {
      "ul": [
       {
        "t": "Who you hire and what they're paid"
       },
       {
        "t": "The work, the goals and the day-to-day management"
       },
       {
        "t": "Promotions, performance and, with our advice, exits"
       }
      ]
     },
     {
      "p": "<b>We handle:</b>"
     },
     {
      "ul": [
       {
        "t": "Compliant employment contracts and onboarding"
       },
       {
        "t": "Monthly payroll in rupees with statutory deductions"
       },
       {
        "t": "Provident fund, ESI, gratuity and professional tax"
       },
       {
        "t": "Group health insurance and other benefits"
       },
       {
        "t": "Leave, attendance and policy administration"
       },
       {
        "t": "Payslips, Form 16 and year-end tax paperwork"
       },
       {
        "t": "Offboarding, notice periods and full and final settlement"
       }
      ]
     }
    ]
   },
   {
    "t": "How billing works",
    "b": [
     {
      "p": "You pay the employee's salary and the employer's statutory costs, such as employer PF and insurance, plus our monthly fee. Every line is shown separately on one invoice."
     }
    ]
   },
   {
    "t": "EOR or your own entity?",
    "b": [
     {
      "p": "An EOR suits you if you're testing the market, hiring a handful of people or need to move quickly. Once the team grows, a subsidiary often costs less and gives you more control. We'll tell you honestly when that point arrives, and we can set up the entity and move your team across, keeping their service history. Our Business Setup service covers that."
     }
    ]
   },
   {
    "t": "Who this is for",
    "b": [
     {
      "p": "Overseas startups and growing companies hiring their first India team, companies converting long-term contractors to employees, and anyone who wants India hires on payroll within weeks rather than months."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Choose",
    "d": "You pick the candidate, or we find them through Hire Talent."
   },
   {
    "t": "Offer",
    "d": "We draft the offer and employment contract with you. The candidate reviews and signs."
   },
   {
    "t": "Onboard",
    "d": "Documents, background checks, bank details, insurance enrolment and equipment."
   },
   {
    "t": "Pay",
    "d": "Payroll runs every month. You approve, we pay your team and file what's due."
   },
   {
    "t": "Support",
    "d": "Leave, queries, appraisals and eventually exits, all through one contact."
   }
  ],
  "faq": [
   {
    "q": "Do I need an Indian company?",
    "a": "No. We employ them as the legal employer, and you direct the work."
   },
   {
    "q": "Who owns the work they produce?",
    "a": "You do. Employment agreements assign intellectual property to your company, and confidentiality applies from day one."
   },
   {
    "q": "How fast can someone start?",
    "a": "Faster than setting up an entity, which takes weeks to months. We'll give you a timeline once we know the role and notice period."
   },
   {
    "q": "Can I convert an existing contractor?",
    "a": "Yes. We review the arrangement and move them onto payroll without losing continuity."
   },
   {
    "q": "What about benefits?",
    "a": "Group health insurance and statutory benefits are included. Extras such as wellness allowances can be added."
   },
   {
    "q": "What if it doesn't work out?",
    "a": "We follow the notice and settlement rules that apply, and advise you before any step is taken."
   },
   {
    "q": "Do you cover other countries?",
    "a": "We work in India only, so we can stay on top of its rules."
   }
  ]
 },
 "contractor-of-record": {
  "cat": "hr-payroll",
  "title": "Contractor of Record",
  "short": "Agreements, verification, classification review, invoicing and local-currency payment for contractors.",
  "h": "Work with contractors without the paperwork or the risk.",
  "p": "We contract with the individual, verify them, handle invoices and pay them. You get one clean point of contact.",
  "cta": "Tell us who you work with.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "If someone works full time, under your direction, for your business alone, a tax authority may not see them as an independent contractor at all. That's the risk. We deal with it."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Contractor agreements with clear scope, IP and confidentiality terms"
       },
       {
        "t": "Identity, tax and bank verification"
       },
       {
        "t": "A review of whether the arrangement is really a contractor relationship"
       },
       {
        "t": "Invoice collection, checking and approval"
       },
       {
        "t": "Payment in the contractor's currency"
       },
       {
        "t": "Records you can hand to an auditor"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Review",
    "d": "We check the arrangement."
   },
   {
    "t": "Contract",
    "d": "Agreements and verification."
   },
   {
    "t": "Invoice",
    "d": "Submitted, checked and sent for your approval."
   },
   {
    "t": "Pay",
    "d": "One payment from you, one to them."
   }
  ],
  "faq": [
   {
    "q": "What if they should be an employee?",
    "a": "We'll tell you, and move them to Employer of Record without a break."
   },
   {
    "q": "Who owns the work?",
    "a": "You do. The agreement assigns it to your company."
   }
  ]
 },
 "freelancer-payments": {
  "cat": "hr-payroll",
  "title": "Freelancer Payments",
  "short": "Onboard, collect tax and bank details, approve invoices, pay once in your currency. We pay each freelancer in rupees.",
  "h": "Pay freelancers once, properly.",
  "p": "From onboarding to payment, we look after the whole path, so your finance team stops chasing documents.",
  "cta": "Tell us how many freelancers you pay.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Paying freelancers is where many finance teams lose patience: different currencies, bank rules, missing documents and invoices in every format."
     }
    ]
   },
   {
    "t": "How it works",
    "b": [
     {
      "ul": [
       {
        "h": "Onboard",
        "t": "The freelancer is invited, verified and signs the agreement."
       },
       {
        "h": "Collect",
        "t": "We gather tax and bank details once and keep them current."
       },
       {
        "h": "Invoice",
        "t": "Standard format, routed to you for approval."
       },
       {
        "h": "Pay",
        "t": "You make one payment. We pay each freelancer and issue the right paperwork."
       },
       {
        "h": "Report",
        "t": "A monthly summary and year-end records."
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Send the list",
    "d": "Names and rates."
   },
   {
    "t": "We onboard them",
    "d": "Documents and agreements."
   },
   {
    "t": "Approve invoices",
    "d": "In one place."
   },
   {
    "t": "We pay",
    "d": "On the date agreed."
   }
  ],
  "faq": [
   {
    "q": "Does it work for a handful or hundreds?",
    "a": "Both."
   },
   {
    "q": "Which currencies do you pay in?",
    "a": "<span class='ph'>Confirm.</span>"
   }
  ]
 },
 "payroll-management": {
  "cat": "hr-payroll",
  "title": "Payroll Management",
  "short": "End to end: salary structures, statutory deductions, TDS, Form 16, payslips, off-cycle runs, full and final, and finance reports.",
  "h": "Payroll that goes out on the right day, every month.",
  "p": "We run payroll end to end: calculation, payment, deductions, filings and payslips. Your finance team gets reports they can book without rework.",
  "cta": "Tell us how you run payroll today.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Payroll is the one job that has to be right every single month. Nobody notices when it's fine. Everybody notices when it's late or wrong."
     },
     {
      "p": "We take over the whole cycle, whether you have your own Indian company or hire through our Employer of Record service."
     }
    ]
   },
   {
    "t": "A month with us",
    "b": [
     {
      "p": "You send the changes: joiners, exits, leave, bonuses, reimbursements. We calculate, you review and approve, we pay your team and deposit what's due. Payslips go out, and your accountant gets the journal."
     }
    ]
   },
   {
    "t": "What's covered",
    "b": [
     {
      "ul": [
       {
        "t": "Salary structure design, including how CTC splits into components"
       },
       {
        "t": "Attendance and leave data"
       },
       {
        "t": "Provident fund, ESI, professional tax and labour welfare fund"
       },
       {
        "t": "TDS on salaries, investment declarations and Form 16"
       },
       {
        "t": "Reimbursements, bonuses, arrears and off-cycle runs"
       },
       {
        "t": "Salary payment and statutory challans"
       },
       {
        "t": "Full and final settlements"
       },
       {
        "t": "Payroll journals and monthly reports"
       }
      ]
     }
    ]
   },
   {
    "t": "Taking over mid-year",
    "b": [
     {
      "p": "Moving payroll in the middle of a financial year is normal. We collect year-to-date figures so tax and statutory records carry on correctly."
     }
    ]
   },
   {
    "t": "Who this suits",
    "b": [
     {
      "p": "Companies with an Indian entity who want to hand payroll over, and anyone whose payroll is currently a spreadsheet and one very tired HR person."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Share your data",
    "d": "Employee details, salary structures and last year's records."
   },
   {
    "t": "Test run",
    "d": "We can run the first month alongside your current process, so the numbers can be compared."
   },
   {
    "t": "Go live",
    "d": "We take over, with a cut-off date and a reminder before it."
   },
   {
    "t": "Every month",
    "d": "Payment, filings, payslips and a short report."
   }
  ],
  "faq": [
   {
    "q": "What do you need from us each month?",
    "a": "A short list of changes by the cut-off date. We remind you before it."
   },
   {
    "q": "How do employees get their payslips?",
    "a": "<span class='ph'>Confirm: email, portal or both.</span>"
   },
   {
    "q": "What happens if someone is paid wrong?",
    "a": "We correct it in an off-cycle run and tell you exactly what went wrong."
   },
   {
    "q": "Do you run payroll for EOR employees?",
    "a": "Yes. Same team, same process."
   }
  ]
 },
 "hr-business-partner": {
  "cat": "hr-payroll",
  "title": "HR Business Partner",
  "short": "Shared (set hours each week) or dedicated (embedded in your team). Policies, appraisals, employee relations and compliance.",
  "h": "An HR person you can actually call.",
  "p": "Our HR business partners work with you the way that fits, shared or dedicated.",
  "cta": "Tell us where you need HR help.",
  "sections": [
   {
    "t": "Two ways to work",
    "b": [
     {
      "ul": [
       {
        "h": "Shared",
        "t": "A senior HR professional supporting a few companies, with set hours each week. A good fit for smaller teams."
       },
       {
        "h": "Dedicated",
        "t": "One person working only for you, inside your team, in your meetings, knowing your people by name."
       }
      ]
     }
    ]
   },
   {
    "t": "What they do",
    "b": [
     {
      "ul": [
       {
        "t": "Write and maintain HR policies and the handbook"
       },
       {
        "t": "Manage the employee lifecycle, from offer to exit"
       },
       {
        "t": "Run appraisal cycles"
       },
       {
        "t": "Advise managers on difficult conversations"
       },
       {
        "t": "Handle employee relations and documentation"
       },
       {
        "t": "Support engagement and retention"
       },
       {
        "t": "Keep you aligned with labour laws as they change"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Scope",
    "d": "What you need and how often."
   },
   {
    "t": "Match",
    "d": "The right person for your team."
   },
   {
    "t": "Settle in",
    "d": "Policies and cycles set up."
   },
   {
    "t": "Review",
    "d": "Quarterly check on what's working."
   }
  ],
  "faq": [
   {
    "q": "Can we move from shared to dedicated?",
    "a": "Yes, as the team grows."
   },
   {
    "q": "Do they work on-site?",
    "a": "<span class='ph'>Confirm.</span>"
   }
  ]
 },
 "employee-engagement": {
  "cat": "hr-payroll",
  "title": "Employee Engagement",
  "short": "Surveys, recognition programmes, wellness, team events and retention conversations, planned and run by our own team.",
  "h": "Keep good people interested, and know when they aren't.",
  "p": "We plan and run employee engagement programmes ourselves, from the first survey to the team celebration, so your people feel looked after and you hear about problems early.",
  "cta": "Tell us about your team.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Hiring someone is the easy part. People rarely leave because of one bad day. They drift, and by the time the resignation arrives it's too late to change anything."
     },
     {
      "p": "Our engagement service gives you a steady read on how your team feels and a programme that responds to it. It works on its own, or alongside our HR Business Partner and Employer of Record services."
     }
    ]
   },
   {
    "t": "What we run",
    "b": [
     {
      "ul": [
       {
        "h": "Engagement and pulse surveys",
        "t": "Short, anonymous, reported in groups, with a one-page summary of what to act on."
       },
       {
        "h": "Recognition and rewards",
        "t": "Simple programmes managers will actually use, from peer shout-outs to milestone awards."
       },
       {
        "h": "Wellness",
        "t": "Health camps, wellness sessions and access to counselling."
       },
       {
        "h": "Team events",
        "t": "Offsites, festival celebrations, team lunches and learning days, planned and managed by us."
       },
       {
        "h": "Onboarding experience",
        "t": "Welcome kits, buddy programmes and check-ins at 30, 60 and 90 days."
       },
       {
        "h": "Stay and exit interviews",
        "t": "Honest conversations about why people stay and why they go."
       },
       {
        "h": "Internal communication",
        "t": "Newsletters, town halls and announcements people read."
       }
      ]
     }
    ]
   },
   {
    "t": "For remote and overseas teams",
    "b": [
     {
      "p": "If your India team has never met your leadership, engagement matters even more. We help them feel part of your company, not a name on a vendor's payroll list, with regular check-ins, shared events and a clear line of communication back to you."
     }
    ]
   },
   {
    "t": "How we measure it",
    "b": [
     {
      "p": "Participation, engagement scores over time, retention, and the reasons people give when they leave. You get a short report each quarter with what's changed and what we suggest doing next."
     }
    ]
   },
   {
    "t": "Who this is for",
    "b": [
     {
      "p": "Growing companies without a dedicated people team, overseas companies with an India team, and HR leads who want help running programmes, not just designing them."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Listen",
    "d": "A short survey and a conversation with your leadership."
   },
   {
    "t": "Plan",
    "d": "A year-long calendar of programmes, with a budget you agree upfront."
   },
   {
    "t": "Run",
    "d": "Our team runs the surveys, events and recognition, so your managers don't have to."
   },
   {
    "t": "Measure",
    "d": "Quarterly reports on scores, retention and exit reasons."
   },
   {
    "t": "Adjust",
    "d": "We change the plan based on what the numbers and the conversations tell us."
   }
  ],
  "faq": [
   {
    "q": "Do you run the activities yourselves?",
    "a": "Yes. Our own team plans and runs them. You don't need to coordinate vendors."
   },
   {
    "q": "Can we start with just surveys?",
    "a": "Yes. Many clients start there and add events and recognition later."
   },
   {
    "q": "Are survey responses confidential?",
    "a": "Results are reported in groups and never traced back to individuals."
   },
   {
    "q": "Does it work for EOR employees?",
    "a": "Yes. We include them in the same programmes as your other India team members."
   }
  ]
 },
 "onboarding-and-offboarding": {
  "cat": "hr-payroll",
  "title": "Onboarding and Offboarding",
  "short": "Offer letters, documents, equipment, access, orientation and clean exits.",
  "h": "A good first week and a clean last one.",
  "p": "The first and last weeks shape how people feel about a company for years. We run both.",
  "cta": "Tell us who's joining or leaving.",
  "sections": [
   {
    "t": "Onboarding",
    "b": [
     {
      "ul": [
       {
        "t": "Offer letters and joining documents"
       },
       {
        "t": "Background checks"
       },
       {
        "t": "Equipment arranged through our IT team"
       },
       {
        "t": "System access and accounts"
       },
       {
        "t": "Orientation plan and first-week schedule"
       },
       {
        "t": "Check-ins at 30, 60 and 90 days"
       }
      ]
     }
    ]
   },
   {
    "t": "Offboarding",
    "b": [
     {
      "ul": [
       {
        "t": "Handling resignations and notice periods"
       },
       {
        "t": "Handover plan"
       },
       {
        "t": "Access removal and device return"
       },
       {
        "t": "Full and final settlement"
       },
       {
        "t": "Experience and relieving letters"
       },
       {
        "t": "Exit interview"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Tell us the date",
    "d": "Joining or last day."
   },
   {
    "t": "We run the checklist",
    "d": "Nothing missed."
   },
   {
    "t": "You get a summary",
    "d": "Everything done and recorded."
   }
  ],
  "faq": [
   {
    "q": "Does it work with Employer of Record hires?",
    "a": "Yes, it's built in."
   },
   {
    "q": "Can you do offboarding only?",
    "a": "Yes."
   }
  ]
 },
 "hr-policies-and-handbook": {
  "cat": "hr-payroll",
  "title": "HR Policies and Handbook",
  "short": "Plain-language policies that are legal for your location, including POSH.",
  "h": "Policies people can read, and that stand up when it matters.",
  "p": "We write HR policies in plain language, make sure they fit the law, and help you roll them out.",
  "cta": "Tell us which policies you have today.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "A policy nobody has read is no help when something goes wrong. Ours are short, written for the people who have to follow them, and checked against the rules that apply to your location."
     }
    ]
   },
   {
    "t": "What's covered",
    "b": [
     {
      "ul": [
       {
        "t": "Leave and attendance"
       },
       {
        "t": "Remote and flexible working"
       },
       {
        "t": "Code of conduct"
       },
       {
        "t": "Grievance handling"
       },
       {
        "t": "Prevention of sexual harassment (POSH)"
       },
       {
        "t": "Employee handbook"
       },
       {
        "t": "Rollout, so people actually read them"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Review",
    "d": "What you have."
   },
   {
    "t": "Write",
    "d": "Plain language, legally checked."
   },
   {
    "t": "Roll out",
    "d": "Short briefings and acknowledgements."
   }
  ],
  "faq": [
   {
    "q": "Can you update our existing handbook?",
    "a": "Yes. We keep what works."
   },
   {
    "q": "Who owns the policies afterwards?",
    "a": "You do. We update them when the rules change, if you'd like."
   }
  ]
 },
 "benefits-and-insurance": {
  "cat": "hr-payroll",
  "title": "Benefits and Insurance",
  "short": "Group health, accident cover and allowances, chosen and administered.",
  "h": "Benefits that suit your budget and your people.",
  "p": "We help you choose a benefits package, then administer it.",
  "cta": "Tell us about your team.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "The right benefits are the ones people actually use. We start with who is in your team and what they'd value, then build around your budget."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Group health insurance"
       },
       {
        "t": "Accident cover"
       },
       {
        "t": "Wellness, meal and travel allowances"
       },
       {
        "t": "Enrolment of new joiners and removal of leavers"
       },
       {
        "t": "Claims support"
       },
       {
        "t": "Renewals and reviews"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Understand",
    "d": "Team and budget."
   },
   {
    "t": "Choose",
    "d": "Options compared side by side."
   },
   {
    "t": "Run",
    "d": "Enrolment, claims and renewals."
   }
  ],
  "faq": [
   {
    "q": "Can we start with insurance only?",
    "a": "Yes."
   },
   {
    "q": "Does it work for Employer of Record employees?",
    "a": "Yes. Group health is part of that service."
   }
  ]
 },
 "performance-and-appraisals": {
  "cat": "hr-payroll",
  "title": "Performance and Appraisals",
  "short": "Review cycles and templates managers can run without a training course.",
  "h": "Appraisals managers can run without a training course.",
  "p": "Simple review cycles, goals and records that managers actually use.",
  "cta": "Tell us how you review people today.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Most companies either skip appraisals or turn them into a paperwork exercise. We set up something in between: short, fair and easy to run, with proper records."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Goal frameworks for each role"
       },
       {
        "t": "Review templates for managers and employees"
       },
       {
        "t": "A calendar for the cycle"
       },
       {
        "t": "Guidance for managers on giving feedback"
       },
       {
        "t": "Records kept tidy, for promotions and exits"
       },
       {
        "t": "Reports for leadership"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Design",
    "d": "Fit the process to your size."
   },
   {
    "t": "Run",
    "d": "We manage the cycle with you."
   },
   {
    "t": "Review",
    "d": "Adjust for next time."
   }
  ],
  "faq": [
   {
    "q": "Can you run the whole cycle?",
    "a": "Yes, or support your managers while they run it."
   },
   {
    "q": "Do you use software?",
    "a": "<span class='ph'>Confirm.</span>"
   }
  ]
 },
 "hr-compliance-audit": {
  "cat": "hr-payroll",
  "title": "HR Compliance Audit",
  "short": "Contracts, policies and payroll reviewed against the law, with gaps ranked by risk.",
  "h": "Find the gaps before an inspector does.",
  "p": "A review of your contracts, policies, registrations and payroll against what the law requires.",
  "cta": "Tell us where you're unsure.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "You get a written report with every gap ranked by risk, and a plan to close them. No jargon, and no blame."
     }
    ]
   },
   {
    "t": "What we check",
    "b": [
     {
      "ul": [
       {
        "t": "Employment contracts and offer letters"
       },
       {
        "t": "HR policies"
       },
       {
        "t": "Statutory registrations"
       },
       {
        "t": "Payroll practices and deductions"
       },
       {
        "t": "Records and registers"
       },
       {
        "t": "Leave and working-hours practices"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Share documents",
    "d": "A short checklist."
   },
   {
    "t": "We review",
    "d": "Against the rules that apply to you."
   },
   {
    "t": "Report",
    "d": "Gaps ranked, with a plan."
   }
  ],
  "faq": [
   {
    "q": "Is it a one-off?",
    "a": "It can be. Many clients repeat it each year."
   },
   {
    "q": "Will you fix the gaps too?",
    "a": "If you'd like. Many of them fall under our other HR services."
   }
  ]
 },
 "equipment-and-remote-setup": {
  "cat": "hr-payroll",
  "title": "Equipment and Remote Setup",
  "short": "Laptops sourced, configured and delivered by day one.",
  "h": "A laptop on day one, wherever they sit.",
  "p": "New hires get a working laptop before they start, delivered and set up by our IT team.",
  "cta": "Tell us who needs equipment.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Nothing slows a first week like waiting for equipment. We tie it to hiring, so it's ordered with the offer and arrives before the start date."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Devices ordered to your specification"
       },
       {
        "t": "Set-up with software and security settings"
       },
       {
        "t": "Delivery to the office or the employee's home"
       },
       {
        "t": "Collection and data wiping when someone leaves"
       },
       {
        "t": "Every item recorded in your asset register"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Tell us the start date",
    "d": "And the role."
   },
   {
    "t": "We prepare",
    "d": "Ordered and configured."
   },
   {
    "t": "Delivered",
    "d": "Before day one."
   }
  ],
  "faq": [
   {
    "q": "Is this part of Employer of Record?",
    "a": "It works with it, and can be added to any hire."
   },
   {
    "q": "Can you also rent devices?",
    "a": "Yes. See Device Rental and Leasing."
   }
  ]
 },
 "contract-staffing": {
  "cat": "hr-payroll",
  "title": "Contract Staffing",
  "short": "People supplied for a fixed period or project, employed and paid by us and managed day to day by your team. Easy to scale up or down.",
  "h": "People for a fixed period, without the permanent hire.",
  "p": "For projects, seasonal peaks or roles you'd rather not hire permanently, we supply people on contract.",
  "cta": "Tell us what you need and for how long.",
  "sections": [
   {
    "t": "How it differs",
    "b": [
     {
      "p": "Hire Talent finds permanent employees for your payroll. Employer of Record employs people you've chosen, usually long term. Contract Staffing supplies people for a fixed period or project, employed and paid by us, managed day to day by your team."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Sourcing and screening against your brief"
       },
       {
        "t": "Fixed-term contracts with clear start and end dates"
       },
       {
        "t": "Payroll, statutory contributions and insurance"
       },
       {
        "t": "Compliance that comes with contract labour, where it applies"
       },
       {
        "t": "Quick scale-up and scale-down"
       },
       {
        "t": "Replacement if someone leaves mid-contract <span class='ph'>confirm</span>"
       },
       {
        "t": "The option to convert a contractor to permanent"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Brief",
    "d": "Roles, numbers, duration."
   },
   {
    "t": "Source",
    "d": "We shortlist and you choose."
   },
   {
    "t": "Deploy",
    "d": "People start, with contracts and onboarding done."
   },
   {
    "t": "Review",
    "d": "Extend, end or convert."
   }
  ],
  "faq": [
   {
    "q": "Who manages the contract staff?",
    "a": "Your team manages the work. We manage employment, payroll and compliance."
   },
   {
    "q": "Can we hire them permanently later?",
    "a": "Yes. We'll explain the process and any conditions upfront."
   }
  ]
 },
 "training-and-development": {
  "cat": "hr-payroll",
  "title": "Training and Development",
  "short": "Manager programmes, soft skills, onboarding training, POSH and compliance training, planned as an annual calendar and run by our team.",
  "h": "Help people grow into bigger jobs.",
  "p": "Plenty of managers are promoted without ever being taught how to manage. We design and run training for your team ourselves.",
  "cta": "Tell us where the team needs help.",
  "sections": [
   {
    "t": "What we run",
    "b": [
     {
      "ul": [
       {
        "h": "Manager and leadership programmes",
        "t": "Giving feedback, one-to-ones, difficult conversations"
       },
       {
        "h": "Onboarding and role-based training",
        "t": ""
       },
       {
        "h": "Soft skills",
        "t": "Communication, time management, working across time zones"
       },
       {
        "h": "Technical upskilling",
        "t": "<span class='ph'>confirm topics</span>"
       },
       {
        "h": "Compliance training",
        "t": "POSH, code of conduct, data privacy and security awareness"
       },
       {
        "h": "Training needs analysis",
        "t": ", so the plan fits the gaps you have"
       }
      ]
     }
    ]
   },
   {
    "t": "How it works",
    "b": [
     {
      "p": "We agree a yearly training calendar with you, run the sessions in person or online, track attendance and feedback, and adjust as the team changes."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Needs analysis",
    "d": "Where the gaps are."
   },
   {
    "t": "Calendar",
    "d": "Sessions through the year."
   },
   {
    "t": "Deliver",
    "d": "With feedback after each."
   },
   {
    "t": "Review",
    "d": "What changed."
   }
  ],
  "faq": [
   {
    "q": "Can we book a single workshop?",
    "a": "Yes."
   },
   {
    "q": "Do you run it online?",
    "a": "Yes, or in person."
   }
  ]
 },
 "it-asset-procurement": {
  "cat": "it-services",
  "title": "IT Asset Procurement",
  "short": "Laptops, desktops, monitors, networking gear and software from authorised suppliers at fair prices, configured to your standard and delivered.",
  "h": "Know what you own. Get what you need, fast.",
  "p": "We buy, configure, deliver and keep track of your IT equipment, so a new hire gets a working laptop on day one and finance knows where every device is.",
  "cta": "Tell us what equipment you need.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Buying IT equipment sounds easy until you're doing it for the fifth time in a month, for people in three cities, on different budgets. Then come the questions: who has which laptop, is it still under warranty, who's paying for the Office licences nobody uses."
     },
     {
      "p": "We handle the buying, the setup and the record-keeping, and tie it to your hiring so equipment arrives when people do."
     }
    ]
   },
   {
    "t": "What we supply",
    "b": [
     {
      "ul": [
       {
        "t": "Laptops, desktops and workstations"
       },
       {
        "t": "Monitors, docks, keyboards and accessories"
       },
       {
        "t": "Phones and tablets"
       },
       {
        "t": "Networking equipment, Wi-Fi and firewalls"
       },
       {
        "t": "Servers and storage"
       },
       {
        "t": "Operating system, productivity and security software licences"
       }
      ]
     },
     {
      "p": "We buy from authorised suppliers, compare quotes for you and tell you when a cheaper option will cost you later."
     }
    ]
   },
   {
    "t": "Setup and delivery",
    "b": [
     {
      "ul": [
       {
        "t": "Imaging and configuration to your standard"
       },
       {
        "t": "Software installation and security settings"
       },
       {
        "t": "Delivery to your office or directly to employees' homes"
       },
       {
        "t": "Handover guidance for the employee"
       },
       {
        "t": "Collection, data wiping and redeployment when someone leaves"
       }
      ]
     }
    ]
   },
   {
    "t": "Inventory and asset management",
    "b": [
     {
      "ul": [
       {
        "t": "Asset tagging and a central register"
       },
       {
        "t": "Assignment to named employees"
       },
       {
        "t": "Warranty and support contract tracking"
       },
       {
        "t": "Software licence tracking"
       },
       {
        "t": "Physical audits and exception reports"
       },
       {
        "t": "Finance-ready reports for depreciation and audits"
       },
       {
        "t": "Refresh planning"
       }
      ]
     }
    ]
   },
   {
    "t": "Works with HR and workspace",
    "b": [
     {
      "p": "If you hire through our Employer of Record service, the laptop is ordered with the offer and arrives before the start date. If you use our Managed Workspace, the desk, network and equipment come from one team."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Tell us what you need",
    "d": "Roles, numbers, specs and budget. Or tell us the problem and we'll suggest specs."
   },
   {
    "t": "Get a quote",
    "d": "Clear pricing with options, and delivery dates."
   },
   {
    "t": "We order and configure",
    "d": "Setup and testing before anything ships."
   },
   {
    "t": "We deliver",
    "d": "To your office or each employee, with tracking."
   },
   {
    "t": "We keep track",
    "d": "Every item goes into your asset register, with warranty dates and reminders."
   }
  ],
  "faq": [
   {
    "q": "Can you deliver to employees working from home?",
    "a": "Yes. We ship to home addresses and confirm the setup with the employee."
   },
   {
    "q": "Do you only sell new equipment?",
    "a": "<span class='ph'>Confirm: new only, or refurbished and rental options too.</span>"
   },
   {
    "q": "Can you take over our existing inventory?",
    "a": "Yes. We do a physical audit, build the register and flag anything missing, out of warranty or ready to retire."
   },
   {
    "q": "What about warranty claims and repairs?",
    "a": "We handle the claim with the supplier and arrange a replacement when needed."
   },
   {
    "q": "Can you track software licences too?",
    "a": "Yes. We record what you've bought, who's using it and when it renews."
   }
  ]
 },
 "it-inventory-management": {
  "cat": "it-services",
  "title": "IT Inventory Management",
  "short": "A live register of every device and licence: who has it, where it is, when the warranty ends, and when to replace it.",
  "h": "Know what you own, who has it and when it needs replacing.",
  "p": "A live register of every device and licence, kept current as people join, move and leave.",
  "cta": "Tell us what you have today.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Most companies find out what they own when something goes missing. Then comes the scramble: who had that laptop, is it still under warranty, why are we paying for twenty licences when twelve people use them?"
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Asset tagging and a central register"
       },
       {
        "t": "Assignment to named employees, and returns when they leave"
       },
       {
        "t": "Warranty and support contract tracking with reminders"
       },
       {
        "t": "Software licence tracking"
       },
       {
        "t": "Regular physical audits across offices and remote staff"
       },
       {
        "t": "Reports finance can use for depreciation and audits"
       },
       {
        "t": "Refresh planning, so you replace devices before they become a problem"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Audit",
    "d": "We count what's actually there."
   },
   {
    "t": "Register",
    "d": "Every item tagged and recorded."
   },
   {
    "t": "Keep current",
    "d": "Joiners, leavers and repairs update the register."
   }
  ],
  "faq": [
   {
    "q": "Can you take over our existing records?",
    "a": "Yes. We check them against a physical audit and fix the gaps."
   },
   {
    "q": "Do you track remote employees' devices?",
    "a": "Yes, including where they are and who has them."
   }
  ]
 },
 "employee-device-setup": {
  "cat": "it-services",
  "title": "Employee Device Setup",
  "short": "A working laptop on day one for every new hire, delivered to the office or their home, then collected and wiped when they leave. Works with our HR onboarding.",
  "h": "A working laptop on day one.",
  "p": "We order, set up and deliver devices for new hires, and collect them when people leave.",
  "cta": "Tell us who's joining.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Nothing says \"we weren't ready\" like a new hire spending their first morning without a laptop. We take that off your list and tie it to your hiring."
     }
    ]
   },
   {
    "t": "What we do",
    "b": [
     {
      "ul": [
       {
        "t": "Order to your specification"
       },
       {
        "t": "Install the operating system, software and security settings"
       },
       {
        "t": "Ship to the office or the employee's home"
       },
       {
        "t": "Hand over with a short guide"
       },
       {
        "t": "Collect, wipe and redeploy when someone leaves"
       },
       {
        "t": "Record everything in your asset register"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Tell us the start date",
    "d": "And the role."
   },
   {
    "t": "We prepare",
    "d": "Ordered, set up and tested."
   },
   {
    "t": "Delivered",
    "d": "Before they start."
   }
  ],
  "faq": [
   {
    "q": "Does it work with Employer of Record hires?",
    "a": "Yes. The laptop is ordered with the offer, so it arrives before the start date."
   },
   {
    "q": "Can you ship across India?",
    "a": "Yes, to home addresses with tracking."
   }
  ]
 },
 "device-rental-and-leasing": {
  "cat": "it-services",
  "title": "Device Rental and Leasing",
  "short": "Laptops and desktops on monthly rental, with support and replacement included. <span class='ph'>Confirm offered.</span>",
  "h": "Laptops without the upfront spend.",
  "p": "Laptops and desktops on monthly rental, with support and replacement included.",
  "cta": "Tell us how many devices and for how long.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "For a project team, a short engagement or a company that would rather keep cash for other things, renting makes more sense than buying."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Laptops and desktops to your specification"
       },
       {
        "t": "Set-up and delivery"
       },
       {
        "t": "Support and replacement if something fails"
       },
       {
        "t": "Add or return devices as the team changes"
       },
       {
        "t": "Collection and secure data wiping at the end"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Tell us what you need",
    "d": "Number, specs and duration."
   },
   {
    "t": "We deliver",
    "d": "Configured and ready."
   },
   {
    "t": "Return or extend",
    "d": "When the project ends."
   }
  ],
  "faq": [
   {
    "q": "What if a device breaks?",
    "a": "We replace it. Support is part of the rental."
   },
   {
    "q": "Can we buy the devices later?",
    "a": "<span class='ph'>Confirm.</span>"
   }
  ]
 },
 "office-it-setup": {
  "cat": "it-services",
  "title": "Office IT Setup",
  "short": "Cabling, network, workstations, printing, meeting rooms and user accounts for a new office. Pairs with Managed Workspace.",
  "h": "Your new office, connected and working before the first day.",
  "p": "Cabling, network, workstations and accounts for a new office or team, set up as one job.",
  "cta": "Tell us about your new office.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Setting up office IT means a dozen suppliers and a dozen things that can go wrong the night before opening. We run it as one job, with one person to call."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Structured cabling and network"
       },
       {
        "t": "Wi-Fi and internet connections"
       },
       {
        "t": "Workstations and accessories"
       },
       {
        "t": "Printers and meeting-room equipment"
       },
       {
        "t": "User accounts, email and security"
       },
       {
        "t": "Backup and basic monitoring"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Survey",
    "d": "We look at the space and the team."
   },
   {
    "t": "Plan",
    "d": "Equipment, layout and timeline."
   },
   {
    "t": "Install and test",
    "d": "Everything working before day one."
   }
  ],
  "faq": [
   {
    "q": "Does it work with your Managed Workspace?",
    "a": "Yes. They're designed to go together."
   },
   {
    "q": "Can you set up a second site?",
    "a": "Yes. Same process, with your standards copied across."
   }
  ]
 },
 "it-helpdesk-and-managed-it-support": {
  "cat": "it-services",
  "title": "IT Helpdesk and Managed IT Support",
  "short": "One number to call. A ticketed helpdesk and engineers for day-to-day IT: accounts, devices, patching, backups and vendors, with a monthly report.",
  "h": "One number to call when something stops working.",
  "p": "A helpdesk and engineers for your day-to-day IT, so nobody loses a morning to a locked account or a dead laptop.",
  "cta": "Tell us what your IT looks like today.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "In a growing company, IT usually lands on whoever is good with computers. That works until they go on leave, or leave."
     },
     {
      "p": "We give you a proper helpdesk, with people who know your setup and write things down."
     }
    ]
   },
   {
    "t": "What's covered",
    "b": [
     {
      "ul": [
       {
        "t": "One point of contact by phone, email, chat and a ticket portal"
       },
       {
        "t": "Account creation, access changes and password resets"
       },
       {
        "t": "Joiner and leaver checklists, tied to our HR onboarding"
       },
       {
        "t": "Device management, software installation, patching and antivirus"
       },
       {
        "t": "Backup monitoring and restore tests"
       },
       {
        "t": "Coordination with internet, hardware and software vendors"
       }
      ]
     }
    ]
   },
   {
    "t": "How requests work",
    "b": [
     {
      "p": "Every request becomes a ticket with a priority and a response time agreed in writing. You can see what's open and what's done. Once a month you get a short report on volumes, response times and anything that keeps coming back."
     }
    ]
   },
   {
    "t": "Hours and coverage",
    "b": [
     {
      "p": "<span class='ph'>Add support hours, remote versus on-site, and locations.</span>"
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Audit",
    "d": "We look at your devices, accounts and current pain points."
   },
   {
    "t": "Set up",
    "d": "Ticketing, accounts, documentation and response times."
   },
   {
    "t": "Go live",
    "d": "Your team starts raising tickets."
   },
   {
    "t": "Review",
    "d": "A monthly look at what's recurring and what to fix for good."
   }
  ],
  "faq": [
   {
    "q": "Do you support remote employees?",
    "a": "Yes. Remote support is standard. We can ship replacement devices to home addresses."
   },
   {
    "q": "Which systems do you support?",
    "a": "<span class='ph'>Confirm: Windows, macOS, Microsoft 365, Google Workspace and common business apps.</span>"
   },
   {
    "q": "Can you take over from our current IT person?",
    "a": "Yes. We can work with them or take over, and document everything either way."
   }
  ]
 },
 "server-migrations": {
  "cat": "it-services",
  "title": "Server Migrations",
  "short": "Discovery, a plan with rollback, staging, cut-over and support. Physical to virtual, on-premises to cloud, Windows and Linux.",
  "h": "Move servers without moving the problems.",
  "p": "We plan migrations around your business: what must stay running, when downtime is acceptable and what happens if something goes wrong.",
  "cta": "Tell us what you want to move.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Migrating a server is like moving house. It's easy to underestimate what's in the cupboards."
     }
    ]
   },
   {
    "t": "What we handle",
    "b": [
     {
      "ul": [
       {
        "t": "Physical to virtual, and on-premises to cloud"
       },
       {
        "t": "Windows and Linux server upgrades"
       },
       {
        "t": "Database and application server moves"
       },
       {
        "t": "File server and email migrations"
       },
       {
        "t": "Data centre relocations"
       },
       {
        "t": "Backup and disaster recovery afterwards"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Discover",
    "d": "What's on the old servers, and what depends on them."
   },
   {
    "t": "Plan",
    "d": "A schedule, a rollback option and a test environment."
   },
   {
    "t": "Cut over",
    "d": "At a time that suits you."
   },
   {
    "t": "Support",
    "d": "Close watching while things settle."
   }
  ],
  "faq": [
   {
    "q": "How much downtime should we expect?",
    "a": "We plan for as little as possible, and agree the window with you beforehand."
   },
   {
    "q": "What if something goes wrong?",
    "a": "That's what the rollback plan is for."
   }
  ]
 },
 "microsoft-365-and-google-workspace": {
  "cat": "it-services",
  "title": "Microsoft 365 and Google Workspace",
  "short": "Tenant setup, email, security settings and migrations.",
  "h": "Email, files and chat that just work.",
  "p": "Microsoft 365 or Google Workspace, set up properly and looked after.",
  "cta": "Tell us how your team works.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "The tools are easy to buy and surprisingly easy to set up badly: open sharing, no multi-factor sign-in, a mess of folders nobody understands. We set them up so they stay tidy."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Tenant setup and domain and email configuration"
       },
       {
        "t": "User onboarding and offboarding"
       },
       {
        "t": "Multi-factor sign-in and security settings"
       },
       {
        "t": "Teams, SharePoint, Drive and shared mailboxes"
       },
       {
        "t": "Migrations from another email or file system"
       },
       {
        "t": "Short training sessions for your team"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Plan",
    "d": "Users, structure and security."
   },
   {
    "t": "Set up or migrate",
    "d": "Without losing mail or files."
   },
   {
    "t": "Look after",
    "d": "Changes and support afterwards."
   }
  ],
  "faq": [
   {
    "q": "Can you migrate us from another platform?",
    "a": "Yes. We plan the move so mail and files carry across."
   },
   {
    "q": "Which is better for us?",
    "a": "Depends on how you work. We'll tell you honestly."
   }
  ]
 },
 "network-and-security": {
  "cat": "it-services",
  "title": "Network and Security",
  "short": "Networks, firewalls, VPN, endpoint protection, backup and security reviews.",
  "h": "Secure the basics, then keep them secure.",
  "p": "Networks, firewalls, endpoint protection and backups that protect the business without getting in people's way.",
  "cta": "Tell us about your network.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Most security problems come from basic gaps: an unpatched laptop, a shared password, a backup nobody has tested. We fix those first."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Office networks, Wi-Fi and VPN"
       },
       {
        "t": "Firewalls and endpoint protection"
       },
       {
        "t": "Email security"
       },
       {
        "t": "Backup and restore testing"
       },
       {
        "t": "Security reviews, with a ranked list of fixes"
       },
       {
        "t": "Practical security policies"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Review",
    "d": "Where the gaps are."
   },
   {
    "t": "Fix",
    "d": "In order of risk."
   },
   {
    "t": "Monitor",
    "d": "And repeat the review each year."
   }
  ],
  "faq": [
   {
    "q": "Do you test our backups?",
    "a": "Yes. A backup you haven't restored isn't a backup."
   },
   {
    "q": "Is this the same as certification?",
    "a": "No. See Certification and Compliance Readiness for that."
   }
  ]
 },
 "cloud-services": {
  "cat": "it-services",
  "title": "Cloud Services",
  "short": "AWS and Azure environments, cost control, security and backups.",
  "h": "Cloud that does the job without surprise bills.",
  "p": "We set up and run workloads on AWS and Azure, and keep an eye on what they cost.",
  "cta": "Tell us what you run today.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Cloud is easy to start and easy to overspend on. We set it up sensibly, keep it secure and review it regularly so you aren't paying for capacity you don't use."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Environments set up on AWS or Azure"
       },
       {
        "t": "Migration from servers or other hosting"
       },
       {
        "t": "Cost monitoring and right-sizing"
       },
       {
        "t": "Security settings and access control"
       },
       {
        "t": "Backups and disaster recovery"
       },
       {
        "t": "Monitoring and alerts"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Assess",
    "d": "What you run and what it costs."
   },
   {
    "t": "Set up or migrate",
    "d": "In stages."
   },
   {
    "t": "Review",
    "d": "Monthly check on cost and health."
   }
  ],
  "faq": [
   {
    "q": "Can you manage our existing cloud account?",
    "a": "Yes. We start with a review."
   },
   {
    "q": "AWS or Azure?",
    "a": "We'll recommend based on what you already use."
   }
  ]
 },
 "web-development": {
  "cat": "it-services",
  "title": "Web Development",
  "short": "Static company sites, e-commerce, WordPress, React and Next.js, plus monthly maintenance.",
  "h": "Websites that load fast and that you can update.",
  "p": "From a simple company site to an online store, built to be found, used and maintained.",
  "cta": "Tell us what the site needs to do.",
  "sections": [
   {
    "t": "What we build",
    "b": [
     {
      "ul": [
       {
        "h": "Company sites",
        "t": "Clean, fast and easy to keep current."
       },
       {
        "h": "E-commerce",
        "t": "Shopify, WooCommerce or custom, with payments, inventory, shipping and tax set up properly."
       },
       {
        "h": "WordPress",
        "t": "Custom themes and plugins, with an editing experience your team can manage."
       },
       {
        "h": "React and Next.js",
        "t": "For products that need more than a template."
       },
       {
        "h": "Maintenance",
        "t": "Updates, security, backups and small changes each month."
       }
      ]
     }
    ]
   },
   {
    "t": "How we work",
    "b": [
     {
      "p": "We plan the structure with you, help with the copy if needed, build, test and look after the site afterwards. You own the site and the code."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Brief",
    "d": "Goals, audience, pages."
   },
   {
    "t": "Design",
    "d": "Structure and look, approved before build."
   },
   {
    "t": "Build and test",
    "d": "On a staging site you can see."
   },
   {
    "t": "Launch and look after",
    "d": "Monitoring and a monthly plan."
   }
  ],
  "faq": [
   {
    "q": "Do you handle hosting?",
    "a": "Yes, or we work with your existing host."
   },
   {
    "q": "Can we update the site ourselves?",
    "a": "Yes. We build it that way and show your team how."
   }
  ]
 },
 "application-development": {
  "cat": "it-services",
  "title": "Application Development",
  "short": "Web and mobile apps, APIs, integrations, modernisation and ongoing support.",
  "h": "Software built around how you work.",
  "p": "When off-the-shelf software doesn't fit, we build the version that does.",
  "cta": "Tell us about the problem you want to solve.",
  "sections": [
   {
    "t": "What we build",
    "b": [
     {
      "ul": [
       {
        "h": "Web applications",
        "t": "Internal tools, portals, dashboards and workflow systems."
       },
       {
        "h": "Mobile apps",
        "t": "iOS and Android, native or cross-platform."
       },
       {
        "h": "APIs and integrations",
        "t": "So data moves without anyone copying it."
       },
       {
        "h": "Modernisation",
        "t": "Updating an older application without starting from scratch."
       },
       {
        "h": "Support",
        "t": "Fixes, upgrades and new features after launch."
       }
      ]
     }
    ]
   },
   {
    "t": "How we work",
    "b": [
     {
      "p": "We work in short cycles, so you see something running early and can steer. Before any code, we agree what success looks like. You get the source code and documentation."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Define",
    "d": "The problem, the users, the must-haves."
   },
   {
    "t": "Design",
    "d": "Screens and flows to test first."
   },
   {
    "t": "Build in cycles",
    "d": "Regular demos."
   },
   {
    "t": "Launch and support",
    "d": "Monitoring and improvements."
   }
  ],
  "faq": [
   {
    "q": "Do we own the code?",
    "a": "Yes."
   },
   {
    "q": "Can you take over an existing application?",
    "a": "Yes. We review it first and tell you what we find."
   }
  ]
 },
 "qa-and-testing": {
  "cat": "it-services",
  "title": "QA and Testing",
  "short": "Functional, regression and performance testing.",
  "h": "Find the problems before your customers do.",
  "p": "Functional, regression and performance testing for web, mobile and business applications.",
  "cta": "Tell us what you want tested.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Testing is the step teams skip when they're running late, and the one they regret. We can test as part of a build or as a separate service."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Test planning and test cases"
       },
       {
        "t": "Functional and regression testing"
       },
       {
        "t": "Performance and load testing"
       },
       {
        "t": "Mobile device and browser coverage"
       },
       {
        "t": "Clear bug reports your developers can act on"
       },
       {
        "t": "Re-testing after fixes"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Plan",
    "d": "What to test and how."
   },
   {
    "t": "Test",
    "d": "Manual and automated."
   },
   {
    "t": "Report",
    "d": "Findings ranked by seriousness."
   }
  ],
  "faq": [
   {
    "q": "Do you test software you didn't build?",
    "a": "Yes."
   },
   {
    "q": "Can you test before a launch date?",
    "a": "Yes. Tell us the date and we'll plan around it."
   }
  ]
 },
 "systems-integration": {
  "cat": "it-services",
  "title": "Systems Integration",
  "short": "Connect your ticketing, email, CRM, HRMS, payroll and accounting so data moves on its own. Set up for IT companies (support desk, timesheets, billing, single sign-on) and manufacturers (ERP, inventory, barcode scanning, attendance, GST e-invoicing).",
  "h": "Stop copying data between tools.",
  "p": "We connect your ticketing, email, CRM, HRMS, payroll and accounting so information moves on its own, and keeps moving.",
  "cta": "Tell us which systems need to talk.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Most businesses end up with tools that don't talk to each other: tickets in one, customers in another, payroll in a third. People copy data across by hand and mistakes follow. We connect the systems and set them up so they keep working."
     }
    ]
   },
   {
    "t": "What we connect",
    "b": [
     {
      "ul": [
       {
        "t": "Ticketing and email, so requests become tickets and replies go back"
       },
       {
        "t": "CRM, quotes and accounting, so a won deal becomes an invoice in Zoho Books or Tally"
       },
       {
        "t": "HRMS, attendance and payroll, without re-typing"
       },
       {
        "t": "User accounts and single sign-on, so joiners get access and leavers lose it in one step"
       },
       {
        "t": "Chat alerts in Teams, Slack or Zoho Cliq"
       },
       {
        "t": "Dashboards that pull from all of them"
       }
      ]
     }
    ]
   },
   {
    "t": "For IT and software companies",
    "b": [
     {
      "ul": [
       {
        "t": "Support desk (Zoho Desk, Freshdesk or Jira Service Management) linked to CRM and engineering tools"
       },
       {
        "t": "Project and timesheet tools feeding billing and payroll"
       },
       {
        "t": "Keka or Superworks connected to attendance, leave and payroll"
       },
       {
        "t": "CRM linked to invoicing and revenue reports"
       }
      ]
     }
    ]
   },
   {
    "t": "For manufacturing companies",
    "b": [
     {
      "ul": [
       {
        "t": "ERP linked to accounting, inventory, purchasing and production planning"
       },
       {
        "t": "Barcode and QR scanning on stock and dispatch"
       },
       {
        "t": "Biometric and shift attendance into payroll"
       },
       {
        "t": "GST e-invoicing and e-way bills from the accounting system"
       },
       {
        "t": "Quality and maintenance records linked to production"
       },
       {
        "t": "Supplier and dealer portals tied to orders and stock"
       }
      ]
     }
    ]
   },
   {
    "t": "How we choose",
    "b": [
     {
      "p": "If a vendor's own integration works, we use it. If it doesn't, we build a small connector with APIs or a tool like Zoho Flow, and document it so someone else can maintain it."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Map",
    "d": "How information moves today, and where people re-type it."
   },
   {
    "t": "Design",
    "d": "The simplest way to connect each pair of systems."
   },
   {
    "t": "Build and test",
    "d": "With sample data, before anything goes live."
   },
   {
    "t": "Go live and watch",
    "d": "We monitor the first weeks and fix what we find."
   }
  ],
  "faq": [
   {
    "q": "Do you only work with Zoho?",
    "a": "No. Zoho is common among our clients, but we connect other systems too, including older software."
   },
   {
    "q": "What if a tool changes its API?",
    "a": "<span class='ph'>Confirm: connectors we build are covered by a support plan.</span>"
   },
   {
    "q": "Can you connect our old software?",
    "a": "Often, through its database or file exports. We check what it allows first."
   }
  ]
 },
 "business-software": {
  "cat": "it-services",
  "title": "Business Software",
  "short": "Zoho Books, Zoho CRM and other Zoho apps, Tally, Keka HRMS and Superworks HRMS, plus ticketing tools such as Zoho Desk, Freshdesk and Jira Service Management. Set up, connected to each other and supported. <span class='ph'>Confirm full product list.</span>",
  "h": "The right software, set up around how you work.",
  "p": "We choose, set up, connect and support the business tools your company needs.",
  "cta": "Tell us what you want to run your business on.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Not every company needs a big system. Many need accounts, payroll, customer records and tickets that talk to each other. We help you pick the tools and make them work."
     }
    ]
   },
   {
    "t": "What we work with",
    "b": [
     {
      "ul": [
       {
        "h": "Accounting",
        "t": "Zoho Books, Zoho Invoice, Zoho Expense and Tally"
       },
       {
        "h": "Sales",
        "t": "Zoho CRM"
       },
       {
        "h": "HR and payroll",
        "t": "Keka, Superworks and Zoho People"
       },
       {
        "h": "Ticketing",
        "t": "Zoho Desk, Freshdesk and Jira Service Management"
       },
       {
        "h": "Projects and stock",
        "t": "Zoho Projects and Zoho Inventory"
       },
       {
        "h": "Documents and reporting",
        "t": "Zoho Sign and Zoho Analytics"
       },
       {
        "t": "<span class='ph'>Confirm the final product list.</span>"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Understand",
    "d": "How you work today."
   },
   {
    "t": "Choose",
    "d": "The simplest tools that fit."
   },
   {
    "t": "Set up and migrate",
    "d": "Including data from spreadsheets."
   },
   {
    "t": "Train and support",
    "d": "Your team and afterwards."
   }
  ],
  "faq": [
   {
    "q": "Can you connect these tools to each other?",
    "a": "Yes. That's our Systems Integration service."
   },
   {
    "q": "Can you move our data across?",
    "a": "Yes, from spreadsheets or older systems, with checks."
   }
  ]
 },
 "certification-and-compliance-readiness": {
  "cat": "it-services",
  "title": "Certification and Compliance Readiness",
  "short": "ISO 27001, SOC 2, ISO 27701, ISO 20000-1 and ISO 9001. Gap assessment, policies, controls and training, then we manage the audit with the certifying body.",
  "h": "Prove to customers that you take security seriously.",
  "p": "We get you ready for the certification your customers ask for, and manage the process with the auditor.",
  "cta": "Tell us who is asking you for it.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Customers abroad increasingly ask Indian suppliers to show they handle data and processes properly. The certificate is issued by an independent body. We do the groundwork."
     }
    ]
   },
   {
    "t": "Standards we prepare you for",
    "b": [
     {
      "ul": [
       {
        "h": "ISO 27001",
        "t": "information security"
       },
       {
        "h": "SOC 2 Type I and II",
        "t": ""
       },
       {
        "h": "ISO 27701",
        "t": "privacy information management"
       },
       {
        "h": "ISO 20000-1",
        "t": "IT service management"
       },
       {
        "h": "ISO 9001",
        "t": "quality management"
       }
      ]
     }
    ]
   },
   {
    "t": "The route",
    "b": [
     {
      "p": "A gap assessment, policies and a risk register, technical controls, staff training, evidence collection, an internal audit before the real one, coordination with the auditor, and upkeep through the surveillance audits that follow."
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Assess",
    "d": "Where you are against the standard."
   },
   {
    "t": "Build",
    "d": "Policies, controls and evidence."
   },
   {
    "t": "Audit",
    "d": "We manage it with the certifying body."
   },
   {
    "t": "Maintain",
    "d": "Through yearly reviews."
   }
  ],
  "faq": [
   {
    "q": "Do you issue the certificate?",
    "a": "No. An independent certifying body does. We prepare you and manage the process."
   },
   {
    "q": "How long does it take?",
    "a": "It depends on the standard and where you start. We give a realistic range after the gap assessment."
   }
  ]
 },
 "ui-ux-design": {
  "cat": "it-services",
  "title": "UI/UX Design",
  "short": "User research, journeys, wireframes, prototypes and design systems, tested before development begins.",
  "h": "Easy to use first. Good to look at second.",
  "p": "We research how your users work, map their journeys and design screens you can test before any code is written.",
  "cta": "Tell us who the users are.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Most software problems are design problems that were found too late. Testing a clickable prototype with real users costs far less than rebuilding."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "User research and journey mapping"
       },
       {
        "t": "Wireframes and clickable prototypes"
       },
       {
        "t": "Visual design and design systems"
       },
       {
        "t": "Usability testing"
       },
       {
        "t": "Handover to development with specifications"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Research",
    "d": "Who uses it and how."
   },
   {
    "t": "Prototype",
    "d": "Test before building."
   },
   {
    "t": "Hand over",
    "d": "Clear specs for developers."
   }
  ],
  "faq": [
   {
    "q": "Do you design for web and mobile?",
    "a": "Both."
   },
   {
    "q": "Can you work with our developers?",
    "a": "Yes. We hand over in the format they need."
   }
  ]
 },
 "branding": {
  "cat": "it-services",
  "title": "Branding",
  "short": "End to end: strategy and positioning, naming, logo and visual identity, guidelines, messaging, templates and a launch plan.",
  "h": "A brand people recognise and trust, from first sketch to launch.",
  "p": "We build your brand end to end: who you are, how you sound and how you look everywhere.",
  "cta": "Tell us about your company.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "A brand is more than a logo. It's how you describe yourself, how you look everywhere, and what people expect when they deal with you."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Brand strategy: audience, positioning and what makes you different"
       },
       {
        "t": "Naming and tagline"
       },
       {
        "t": "Logo and visual identity"
       },
       {
        "t": "Brand guidelines"
       },
       {
        "t": "Messaging and tone of voice"
       },
       {
        "t": "Stationery, presentation and document templates"
       },
       {
        "t": "Website and social media look and feel"
       },
       {
        "t": "A launch plan, inside and outside the company"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Discover",
    "d": "Your business, customers and competitors."
   },
   {
    "t": "Define",
    "d": "Positioning and messaging."
   },
   {
    "t": "Design",
    "d": "Identity and guidelines."
   },
   {
    "t": "Launch",
    "d": "Rolled out everywhere at once."
   }
  ],
  "faq": [
   {
    "q": "Can you refresh an existing brand?",
    "a": "Yes. We start by deciding what to keep."
   },
   {
    "q": "Do you build the website too?",
    "a": "Yes. See Web Development."
   }
  ]
 },
 "digital-marketing": {
  "cat": "it-services",
  "title": "Digital Marketing",
  "short": "End to end: strategy, SEO, content, social media, paid ads, email and automation, lead capture connected to your CRM, and monthly reporting.",
  "h": "Be found, get enquiries, and know what's working.",
  "p": "End to end digital marketing, from strategy to leads, with plain-language reporting.",
  "cta": "Tell us who you want to reach.",
  "sections": [
   {
    "t": "Overview",
    "b": [
     {
      "p": "Once the brand and website exist, people have to find you and get in touch. We run the whole chain and tell you honestly what's working."
     }
    ]
   },
   {
    "t": "What's included",
    "b": [
     {
      "ul": [
       {
        "t": "Marketing strategy and goals"
       },
       {
        "t": "Search engine optimisation"
       },
       {
        "t": "Content marketing: articles, guides, case studies and video"
       },
       {
        "t": "Social media management"
       },
       {
        "t": "Paid advertising on Google, Meta and LinkedIn"
       },
       {
        "t": "Email campaigns and marketing automation"
       },
       {
        "t": "Lead capture linked to Zoho CRM or your own CRM"
       },
       {
        "t": "Website conversion improvements"
       },
       {
        "t": "Monthly reporting"
       }
      ]
     }
    ]
   }
  ],
  "steps": [
   {
    "t": "Plan",
    "d": "Goals, audience and channels."
   },
   {
    "t": "Launch",
    "d": "Content, ads and campaigns."
   },
   {
    "t": "Measure",
    "d": "Monthly report."
   },
   {
    "t": "Improve",
    "d": "Put effort where it's working."
   }
  ],
  "faq": [
   {
    "q": "Will you tell us what's not working?",
    "a": "Yes. That's part of the report."
   },
   {
    "q": "Can you work with our sales team?",
    "a": "Yes. Leads go straight into the CRM."
   }
  ]
 }
};
export const catHref = (c: string) => `/services/${c}`;
export const svcHref = (slug: string) => `/services/${SERVICES[slug].cat}/${slug}`;

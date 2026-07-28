import type { CaseCopy } from './types';

export const CASE_COPY_EN: Record<string, CaseCopy> = {
   'plataforma-incidencias': {
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }, { label: 'saas' }],
      title: 'Issue and feature-request platform for a software agency',
      shortTitle: 'Issue and feature-request platform for a software agency',
      thumb: 'saas_platform · screenshot',
      result:
         "Centralizes every client request for the agency in one place: bugs, feature requests, files and access, with nothing falling through the cracks.",
      metric: '+62% of requests resolved on time',
      context: [
         'A software agency with a team of 3-4 people managed between 5 and 10 clients at once, running everything through WhatsApp: client requests and developer tasks mixed into the same conversations.',
         'They had tried a task board, but it never fit. After four years like this, requests, files and access kept getting lost along the way.',
      ],
      challenge: [
         "Pull the entire operation out of WhatsApp and centralize each client's requests, files, permissions, access and services in one place. It had to be simple enough for clients to adopt without friction, and powerful enough for the team to stay in control of everything.",
      ],
      solution: [
         'I built a custom platform where each client reports bugs, requests new features and checks their files, access and services, while the agency prioritizes, assigns and tracks every request from a general dashboard.',
         'I integrated an AI agent that analyzes and classifies every request, and even resolves low- and medium-complexity ones on its own. All of it built on a maintainable base ready to scale.',
      ],
      outcome: {
         metric: '+62% of requests resolved on time',
         text: 'A single source of truth for the entire operation. The team adopted it immediately, and clients, hesitant at first, now work inside it and appreciate it. Within three months, work stopped getting lost along the way.',
      },
   },
   cotizadora: {
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }],
      title: 'Custom quoting tool for an industrial company',
      shortTitle: 'Custom quoting tool',
      thumb: 'quoting_tool · screenshot',
      result: 'An industrial company generates complex quotes in minutes.',
      metric: '−38% time per quote',
      context: [
         'An industrial company put together quotes by combining materials, labor and additional costs, each with its own conditions and pricing rules.',
         'They did it on an old system with enormous technical debt and an interface so unintuitive that only a handful of people, after years of using it, knew how to operate it. For anyone new, it was next to impossible.',
      ],
      challenge: [
         "Move all the pricing logic, with its huge number of specific cases, into a new tool that was clear and usable by anyone, without losing an ounce of the catalog's complexity.",
      ],
      solution: [
         "I built a custom quoting module that captures the product variables and generates the full quote in minutes, with all of the company's pricing logic built in.",
         "The hardest part was labor: it's calculated automatically and in real time from a huge number of parameters that combine with each other. The results are consistent, exportable and ready to send to the client.",
      ],
      outcome: {
         metric: '−38% time per quote',
         text: 'Quotes in minutes instead of hours, with no calculation errors and a consistent, professional format.',
      },
   },
   verifactu: {
      tokens: [{ label: 'integration', accent: true }, { label: 'invoicing' }],
      title: 'Verifactu invoicing software for industrial companies',
      shortTitle: 'Verifactu invoicing for industry',
      metaTitle: 'Verifactu (Spanish E-Invoicing Regulation) Invoicing Software',
      metaDescription:
         "Verifactu (Spanish e-invoicing regulation) invoicing software built for an industrial company: compliant invoicing with validation, logging and traceability on every invoice.",
      thumb: 'invoicing · screenshot',
      result: 'Verifactu-compliant invoicing, migrated off a Windows 95 legacy system.',
      metric: '100% of invoices compliant with the regulation',
      context: [
         "This industrial company's invoicing system ran on a native desktop application hosted on a single Windows 95 machine, connected to an Oracle database with over 300 tables.",
         "Every change meant connecting remotely to that machine (painfully slow) and editing the code directly on it. On top of that, they had a legal deadline: their invoicing had to comply with Verifactu, Spain's e-invoicing regulation.",
      ],
      challenge: [
         'Adapt invoicing to Verifactu without breaking a decades-old critical system, while starting to get it off that machine before the technical debt locked them in completely.',
      ],
      solution: [
         'Instead of patching the legacy system, I migrated the invoicing software entirely to the new system, compliant with Verifactu end to end: every invoice goes through the official service, with validation, logging and traceability.',
         'I kept it compatible with the old system to avoid interrupting operations, taking the first step toward dropping that dependency on Windows 95.',
      ],
      outcome: {
         metric: '100% of invoices compliant with the regulation',
         text: 'Invoicing fully compliant with Verifactu and ready for the legal deadline, finally out of the bottleneck of the old machine.',
      },
   },
   optica: {
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }],
      title: 'Management software for an optical store',
      shortTitle: 'Management software for an optical store',
      metaTitle: 'Custom Optical Store Management Software',
      metaDescription:
         'Custom management software for optical stores: full customer history, prescriptions, lab orders and product catalog. Built-to-order software for optical retailers.',
      thumb: 'lab · screenshot',
      result: 'For the first time, a complete history for every customer: prescriptions, glasses, orders and checkups.',
      metric: '360° history for every customer',
      context: [
         'An optical store managed its customers with no records at all: no history of prescriptions, glasses sold, orders or checkups. Nothing was saved.',
         "That led to prescription errors and made it impossible to understand each customer's history with the store.",
      ],
      challenge: [
         "Give the store and the lab a single tool for the entire cycle: customers, products and lab orders; and, above all, build each customer's history from scratch.",
      ],
      solution: [
         'I built custom management software for the optical store covering the entire process: a customer profile with prescription and optometry history, glasses sold, orders and checkups, a product catalog, and tracking for lab orders.',
         'Clear status for every order and a shared view between store and lab to cut down the errors that forced lenses to be remade.',
      ],
      outcome: {
         metric: '360° history for every customer',
         text: "Far more accurate orders and prescriptions, and for the first time, real visibility into each customer's history with the store. Fewer lenses to remake and lower material and staff costs.",
      },
   },
   golgorio: {
      tokens: [{ label: 'react native', accent: true }, { label: 'expo' }, { label: 'mobile' }],
      title: 'Golgorio — app for a sports startup',
      shortTitle: 'Golgorio — sports startup',
      thumb: 'golgorio · mobile app',
      result: 'An app to organize amateur soccer from start to finish, the flagship mobile case.',
      metric: '+4,500 monthly active users',
      context: [
         'Golgorio is a sports startup that wanted an app to organize amateur soccer from start to finish: create or join teams, find available pitches, book them and split the payment among players, all from the phone.',
      ],
      challenge: [
         "Build an iOS and Android app from scratch capable of supporting a growing community, integrating with the pitches' booking systems and handling individual payments per player.",
      ],
      solution: [
         'I started from the designs and built the entire foundation of the app myself with React Native and Expo: user management, teams, pitch search and booking integrated with their systems, and payments split by player.',
         'I also built the admin panel. A single codebase for both platforms, fast to iterate on and ship.',
      ],
      outcome: {
         metric: '+4,500 monthly active users',
         text: "Today it's my flagship mobile case: an app in production and live on the official app stores, with more than 4,500 monthly active users reached in two years.",
      },
   },
   'emails-ecommerce': {
      tokens: [{ label: 'integration', accent: true }, { label: 'e-commerce' }],
      title: 'Centralizing email and support tickets for 10 e-commerce stores',
      shortTitle: 'Centralizing email and support tickets',
      thumb: 'e-commerce · screenshot',
      result: 'Emails, orders and support tickets for 10 stores in 5 languages, managed from a single AI-powered dashboard.',
      metric: '10 stores · 5 languages · 1 dashboard',
      context: [
         'A single client running 10 WooCommerce eyewear stores, selling to France, Italy, Germany, the UK and Spain. Each store received an average of 50 emails a day (about 500 in total) about suppliers, carriers and order issues: glasses arriving broken, in the wrong color, or with the wrong prescription.',
         'All of it spread across separate inboxes in five different languages. A mess.',
      ],
      challenge: [
         "Centralize the emails and support tickets from all 10 stores into a single dashboard, cross-referenced with each order's data, and solve the language barrier so one person could manage everything from Spanish.",
      ],
      solution: [
         'I built a system that unifies the emails (via IMAP) and the orders from each store (via the WooCommerce API), all configurable from an admin dashboard along with response metrics.',
         "I integrated the carriers: DHL, Spring, FedEx, MRW and UPS; and an AI that translates every message, drafts the reply and sends it in the customer's language, even though the person managing it always writes in Spanish.",
      ],
      outcome: {
         metric: '10 stores · 5 languages · 1 dashboard',
         text: 'A single inbox for all 10 stores, with all the customer and order information on hand. With the reply already drafted and translated by AI, handling suppliers and customers became almost frictionless.',
      },
   },
};

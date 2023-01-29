import { ReactNode } from 'react'
import { v4 as uuid } from 'uuid'

export type Destination = 'portugal' | 'madeira' | 'kopenhagen'

export type Answer = {
  id: string
  text: string
  destinationPoint: Destination
}

export type Question = {
  id: string
  text: string
  answers: Answer[]
}

export type Result = {
  teaserText: string
  picture: ReactNode
}

export type ResultOptions = Destination | 'draw'

export type VacationFinderData = {
  questions: Question[]
  results: Record<ResultOptions, Result>
}

export const vacationFinderData: VacationFinderData = {
  results: {
    portugal: {
      teaserText:
        'Entdecke die Faszination Portugals, wo dich atemberaubende Küsten, eine lebendige Kultur und eine reiche Geschichte erwarten. Erkunde charmante Dörfer, genieße die traditionelle Küche und lasse dich von der landschaftlichen Schönheit Portugals verzaubern.',
      picture: (
        <img
          className="h-56 w-auto rounded-t-lg object-cover"
          src="/lissabon-teaser-picture.jpeg"
          alt="teaser bild für portugal"
        />
      ),
    },
    madeira: {
      teaserText:
        'Entfliehe auf die wunderschöne Insel Madeira, wo du atemberaubende Landschaften und ein warmes Klima erwarten kannst. Wandere auf rauen Pfaden, entspanne an unberührten Stränden und probieren die lokale Küche. Erlebe ein tropischen Paradies.',
      picture: (
        <img
          className="h-56 w-auto rounded-t-lg object-cover"
          src="/madeira-teaser-picture.jpeg"
          alt="teaser bild für madeira"
        />
      ),
    },
    kopenhagen: {
      teaserText:
        'Begebe dich auf eine unvergessliche Reise nach Kopenhagen, wo innovatives Design auf Geschichte und Tradition trifft. Trete in die Pedale durch charmante Kanäle, genieße die köstliche, nordische Küche und lasse dich von ikonischen Wahrzeichen inspirieren. Besuche jetzt Dänemarks bezaubernde Hauptstadt.',
      picture: (
        <img
          className="h-56 w-auto rounded-t-lg object-cover"
          src="/copenhagen-teaser-picture.jpeg"
          alt="teaser bild für copenhagen"
        />
      ),
    },
    draw: {
      teaserText:
        'Leider gab es keinen eindeutigen Gewinner. Starte nochmal neu um dein Traumziel zu finden.',
      picture: (
        <img
          className="h-auto rounded-lg shadow-xl sm:max-w-xs md:max-w-md lg:max-w-md"
          src="/draw-teaser-picture.jpeg"
          alt="unentschieden bild"
        />
      ),
    },
  },
  questions: [
    {
      id: uuid(),
      text: 'Was ist deine bevorzugte Klimazone?',
      answers: [
        {
          id: uuid(),
          text: 'Warm und sonnig',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Mild mit manchmal leichten Regen',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Sonnig mit ein bisschen Wind',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Auf welche Aktivitäten hast du besonders Lust?',
      answers: [
        {
          id: uuid(),
          text: 'Abenteuer in der Natur (Wandern, Wassersport usw.)',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Kulturelle Erlebnisse (Museen, historische Stätten usw.)',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Entspannung und Kultur',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Was ist deine bevorzugte Küche?',
      answers: [
        {
          id: uuid(),
          text: 'Fisch und Meeresfrüchte',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Knäckebrot und Hasselback-Kartoffeln',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Tapas und Pasteis de Nata als Nachspeise',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Welche Art von Unterkunft bevorzugst du?',
      answers: [
        {
          id: uuid(),
          text: 'Resort',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Boutique Hotel',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: "AirBnB's",
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Welche Art von Transportmittel bevorzugst du?',
      answers: [
        {
          id: uuid(),
          text: 'Mietwagen',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Öffentliche Verkehrsmittel & zu Fuß',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Fahrrad, öffentliche Verkehrsmittel oder zu Fuß',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Mit wem möchtest du deine Reise gerne antreten?',
      answers: [
        {
          id: uuid(),
          text: 'Mit der Familie',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Alleine oder mit Freunden',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Mit Familie oder Freunden',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Wie erkundest du gerne neue Orte?',
      answers: [
        {
          id: uuid(),
          text: 'Geführte Touren',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Unabhängige Erkundungen',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Eine Mischung aus beiden',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Welche Art der Abend Unterhaltung bevurzugst du?',
      answers: [
        {
          id: uuid(),
          text: 'Hotelbar und Resortveranstaltungen',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Live-Musik/kulturelle Veranstaltungen',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Kulturelle Veranstaltungen und Nachtleben',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Welche Landschaften würdest du gerne sehen?',
      answers: [
        {
          id: uuid(),
          text: 'Küsten- und Strandlandschaften',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Urbane und städtische Landschaften',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Lokale oder urbane Landschaften',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Welche Flugdauer sagt dir mehr zu?',
      answers: [
        {
          id: uuid(),
          text: '~ 4:30 Stunden',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: '~ 1:30 Stunde',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: '~ 3 Stunden',
          destinationPoint: 'portugal',
        },
      ],
    },
  ],
}

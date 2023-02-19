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

export type ResultOptions = Destination

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
  },
  questions: [
    {
      id: uuid(),
      text: 'Was ist dein bevorzugtes Wetter?',
      answers: [
        {
          id: uuid(),
          text: 'Warm und sonnig',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Mild mit gelegentlich leichtem Regen',
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
      text: 'Bei welchem Gericht läuft dir das Wasser im Mund zusammen?',
      answers: [
        {
          id: uuid(),
          text: 'Fangfrischer Fisch und Meeresfrüchte',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Frikadeller und als Nachspeise Wienerbrød',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Tapas und als Nachspeise Pasteis de Nata',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Welche Reisezeit bevorzugst du?',
      answers: [
        {
          id: uuid(),
          text: 'September bis Mai',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Juni bis August',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'April bis Oktober',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Welche Art von Transportmittel bevorzugst du vor Ort?',
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
          text: 'Mietwagen, öffentliche Verkehrsmittel oder zu Fuß',
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
          text: 'Alleine oder mit FreundInnen',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Mit Familie oder FreundInnen',
          destinationPoint: 'portugal',
        },
      ],
    },
    {
      id: uuid(),
      text: 'Wie lange soll deine Reise in etwas dauern?',
      answers: [
        {
          id: uuid(),
          text: '12 Tage',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'verlängertes Wochenende',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: '~ 3 Wochen',
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
          text: 'Hotelbar, Resortveranstaltungen und Spaziergänge',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Kulturelle Veranstaltungen und Nachtleben',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Livemusik und Nachtausflüge',
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
          text: 'Küsten- und Vulkanlandschaft',
          destinationPoint: 'madeira',
        },
        {
          id: uuid(),
          text: 'Urbane Räume',
          destinationPoint: 'kopenhagen',
        },
        {
          id: uuid(),
          text: 'Mischung aus ländlichen Gegenden, urbanen Räumen und Küsten',
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

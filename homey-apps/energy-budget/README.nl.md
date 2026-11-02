# Energy Budget

**Talen:** [English](README.md) | [Nederlands](README.nl.md)

Zet energieverbruik om in duidelijke schattingen. Bereken de kosten van een meting, voorspel maanduitgaven op basis van dagverbruik en vergelijk die met een budget. Reageer met Flow-voorwaarden op een vermogensgrens. Schattingen zijn afhankelijk van de ingevoerde tarieven en metingen.

## Inbegrepen

- Tweetalige Homey Flow-acties, uitvoertags en voorwaarden.
- Lokale berekeningen; geen externe diensten, API-sleutels of accountkoppeling.
- Invoercontroles en tests voor randgevallen en eenheden.
- App Store-afbeeldingen, vertaalde storeteksten, MIT-licentie en CI-validatie.

## Gebruiken in een Flow

Voeg een actie toe om een waarde te berekenen en gebruik de uitvoertag daarna in een Advanced Flow-kaart. Met voorwaardekaarten vergelijk je metingen met grenswaarden. Numerieke argumenten ondersteunen tags van geschikte Homey-apparaten, zodat je bestaande sensoren en meters kunt koppelen.

## Installeren en testen

Deze app staat in de map [`homey-apps/energy-budget`](https://github.com/CodeArcade-ctrl/CodeArcade-ctrl/tree/main/homey-apps/energy-budget) van de profielrepository. Installeer Node.js 24 of hoger en de [Homey CLI](https://apps.developer.homey.app/the-basics/getting-started) en voer daarna vanuit die map de opdrachten `npm test`, `npm run build` en `homey app validate --level publish` uit. Het buildscript maakt eerst de genegeerde uitvoer van Homey Compose aan en start daarna de CLI. Gebruik `homey app install` om een testversie te installeren op een Homey Pro die aan je ontwikkelaarsaccount is gekoppeld.

## Store-release

Deze repository is voorbereid voor Homey Apps SDK v3 en bevat Homey App Store-afbeeldingen, Engelse en Nederlandse storeteksten en een automatische validatieworkflow op niveau `publish`. Een ontwikkelaar moet nog het Athom-account koppelen, de app op een eigen Homey testen en bij Athom ter certificering aanbieden. Athom beslist over goedkeuring en publicatie.

## Reikwijdte en nauwkeurigheid

Deze app verwerkt waarden die je Flow aanlevert. De app ontdekt geen sensoren, bouwt geen automatische historie op, wijzigt geen apparaatinstellingen en garandeert geen veiligheid, besparing of prestaties van apparatuur. Lees de helptekst op elke kaart en controleer de eenheden van je Homey-sensortags.

## Licentie

MIT. Zie [LICENSE](LICENSE).

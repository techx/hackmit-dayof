/* -------------------------------------------------------------
 * HackMIT Event List Specification
 * -------------------------------------------------------------
 * HMIT_EVTS_YEAR is the year these events take place on.
 * HMIT_EVTS is an array of 5-tuples:
 *
 * [0] --> start time relative to midnight Saturday (in hours)
 * [1] --> end time ""
 * [2] --> Brief event title/description
 * [3] --> Brief location of the event
 * [4] --> event type
 *           0: general event
 *           1: workshop/tech talk/etc
 *           2: food event
 */
var HMIT_EVTS_YEAR = 2015;
var HMIT_EVTS = [
  [8, 10, "Check-in", "Tent", 0],
  [8, 10, "Breakfast", "Tent", 2],
  [9, 10, "Sponsor Check-in", "Tent", 0],
  [10, 11, "The Opening Ceremony", "Kresge Auditorium", 0],
  [11, 11.5, "Mentor Orientation", "Mentor Lounge", 0],
  [11, 12, "Team Formation", "Tent", 0],
  [12, 13, "Lunch", "Tent", 2],
  [14, 14.5, "KPCB Workshop", "Mezzanine", 1],
  [14, 14.5, "TripAdvisor Workshop", "20 Chimneys", 1],
  [14.75, 15.5, "Patreon Platinum Tech Talk", "Media Room", 1],
  [15.5, 16, "Parse Workshop", "Mezzanine", 1],
  [15.5, 16, "Google Workshop", "20 Chimneys", 1],
  [16.25, 17, "Amadeus Platinum Tech Talk", "MediaRoom", 1],
  [17.25, 18, "AQRPlatinum Tech Talk", "MediaRoom", 1],
  [18, 19, "Dinner", "Tent", 2],
  [19, 20, "Therapy Dogs", "Johnson Lobby", 0],
  [19.25, 20, "Microsoft Platinum Tech Talk", "MediaRoom", 1],
  [20.25, 21, "Google Platinum Tech Talk", "MediaRoom", 1],
  [21, 21.5, "Fireside Chat w/ Clarifai", "Johnson", 1],
  [21, 23, "FoMu's Plant Based Ice Cream sponsored by Rough Draft", "Johnson Lobby", 2],
  [21.5, 22, "Fireside Chat w/ Indico", "Johnson", 1],
  [22, 22.5, "Ladies Storm Hackathons Meetup", "Media Room", 0],
  [24, 24.5, "Midnight Excursion", "Johnson Lobby", 0],
  [24, 25, "Waffle Cabin sponsored by Trip Advisor", "Johnson Lobby", 2],
  [34, 34.5, "Mentor Brunch", "Johnson", 1],
  [34.25, 35, "Hacker Brunch", "Johnson Lobby", 1],
  [35, 36.5, "Expo Judging", "Hacker Space", 0],
  [37, 38, "Panel and Sponsor Judging", "Hacker Space", 0],
  [38, 39, "The Closing Ceremony", "Rockwell Cage", 0]
];

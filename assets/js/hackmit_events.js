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
var HMIT_EVTS_YEAR = 2016;
var HMIT_EVTS = [
    [8, 9.5, "Hacker Check-in + Breakfast", "Tent", 2],
    [8, 10, "Sponsor Check-in", "Tent", 0],
    [9.5, 10, "Walk-in Registration + Team Formation", "Tent", 0],
    [10, 11, "The Opening Ceremony", "Rockwell", 0],
    [11, 11.5, "Mentor Orientation", "Media Room", 0],
    [12, 13, "Lunch", "Tent", 2],
    [13.5, 14, "Amadeus Tech Talk", "Media Room", 1],
    [14, 14.5, "Car Hacking with OpenXC", "W20-407", 1],
    [14.25, 14.75, "Intro to Firebase", "W20-491", 1],
    [15, 15.5, "AQR Tech Talk", "Media Room", 1],
    [15.5, 16, "Machine Learning with Pandas", "W20-407", 1],
    [15.75, 16.25, "Google Daydream Labs", "W20-491", 1],
    [16.5, 17, "Microsoft Tech Talk", "Media Room", 1],
    [17.5, 18, "Local Motors Labs Tech Talk", "Media Room", 1],
    [18, 19, "Dinner", "Tent", 2],
    [19.5, 20, "Andreessen Horowitz + UnifyID Tech Talk", "Media Room", 1],
    [20, 20.5, "Fireside chat w/ Gray Brooks", "Media Room", 1],
    [20.75, 21.25, "Fireside chat w/ Fin's co-founders", "Media Room", 1],
    [20, 21, "Destress with therapy dogs!", "Johnson Lobby", 0],
    [21, 22, "Tosci's by Rough Draft Ventures", "Johnson Lobby", 2],
    [21.5, 22, "Fireside chat w/ Peter Boyce II", "Media Room", 1],
    [22.25, 22.75, "Fireside chat w/ John Werner", "Media Room", 1],
    [23, 23.5, "Fireside chat w/ Dr. Gene Lee", "Media Room", 1],
    [24, 25, "Midnight snack with Mike's Pastry", "Johnson Lobby", 2],
    [24, 24.5, "Midnight Excursion", "Johnson Lobby", 0],
    [25, 26, "Thirst Juice Smoothies by Citadel", "Johnson Lobby", 2],
    [33, 35, "Brunch", "Tent", 2],
    [34.5, 35, "Judging Orientation", "Media Room", 0],
    [35, 37, "Expo Judging", "Johnson Ice Rink", 0],
    [37, 38, "Sponsor + Panel Judging", "Johnson Ice Rink", 0],
    [38, 39, "The Closing Ceremony", "Rockwell", 0]
];

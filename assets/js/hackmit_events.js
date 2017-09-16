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
var HMIT_EVTS_YEAR = 2017;
var HMIT_EVTS = [
    [8, 10, "Hacker Check-in + Breakfast", "Tent", 2],
    [8, 10, "Sponsor Check-in", "Tent", 0],
    [9.5, 10, "Walk-in Registration", "Tent", 0],
    [10:30, 11.5, "Opening Ceremony", "Kresge", 0],
    [11.5, 12, "Team Formation", "Johnson Lobby", 0],
    [11.5, 12, "Mentor Orientation", "Johnson Media Room", 0],
    [12, 12.5, "Beginner Office Hours", "Johnson Media Room", 0],
    [12, 13, "Lunch by Cafe Luna", "Tent", 2],
    [12.5, 13, "Tech Talk 1: Baidu", "Johnson Media Room", 1],
    [13.25, 13.75, "Tech Talk 2: Microsoft", "Johnson Media Room", 1],
    [14, 14.5, "Workshop 1: Typescript (Samsara)", "Mezzanine Lounge", 1],
    [14, 14.5, "Workshop 2: Deep Learning 101 with NLP and Vision Tasks (Baidu)", "Johnson Media Room", 1],
    [14.75, 15.25, "Tech Talk 3: a16z", "Johnson Media Room", 1],
    [15.5, 16, "Workshop 3: Metamask/Ethereum technology (ConsenSys)", "Mezzanine Lounge", 1],
    [15.5, 16, "Workshop 4: Quantum Computing (IBM)", "Johnson Media Room", 1],
    [16.25, 16.75, "Tech Talk 4: Disney", "Johnson Media Room", 1],
    [17, 17.5, "Workshop 5: Intro to React/Redux (Fin)", "Mezzanine Lounge", 1],
    [17, 17.5, "Workshop 6: Build a Deep Learning Based Search Engine in 20 Minutes (GIPHY)", "Johnson Media Room", 1],
    [17, 17.5, "Red Blue Battle #1", "Johnson Lobby", 0],
    [17.75, 18.15, "Tech Talk 5: Google", "Johnson Media Room", 1],
    [18, 19, "Dinner by Sebastian's", "Tent", 2],
    [18.5, 19, "Tech Talk 6: IBM", "Johnson Media Room", 1],
    [19, 19.5, "ABS WITH JENNY", "Johnson Lobby", "0"],
    [19.25, 19.75, "Tech Talk 7: Amadeus", "Johnson Media Room", 1],
    [20, 20.5, "Fireside Chat 1: Limor Fried", "Johnson Media Room", 1],
    [20, 21, "Destress with Therapy Dogs!", "Johnson Lobby", 0],
    [20.75, 21.75, "Q&A with Maria, Charlie, and Austin McChord", "Johnson Media Room", 1],
    [21, 22, "Insomnia Cookies", "Johnson Library", 2],
    [22, 22.5, "Fireside Chat 2: Poulomi Damany", "Johnson Media Room", 1],
    [22.15, 22.5, "Red Blue Battle #2", "Johnson Lobby", 0],
    [22.75, 23.25, "Fireside Chat 3: Andrew", "Johnson Media Room", 1],
    [23, 24, "Ice Cream + Waffles by Toscanini's and Waffle Cabin", "Johnson Lobby", 2],
    [24, 24.5, "Midnight Excursion", "Johnson Media Room", 0],
    [24, 25, "Bubble Tea by TeaDo", "Johnson Lobby", 2],
    [26, 26.25, "Late Night Red Blue Battle", "Johnson Lobby", 0],
    [25, 26, "Thirst Juice Smoothies by Citadel", "Johnson Lobby", 2],
    [33, 35, "Brunch by Sebastian's", "Tent", 2],
    [34, 34.5, "Judging Orientation", "Kresge Rehearsal Room A", 0],
    [34.75, 35, "Hacking Ends", "Johnson Ice Rink", 0],
    [35, 36.5, "Expo Judging", "Johnson Ice Rink", 0],
    [35, 36.5, "Expo Judging (Hololens)", "Johnson Media Room", 0],
    [36.5, 37, "Peer Expo", "Johnson Ice Rink", 0],
    [36.5, 37, "Peer Expo (Hololens)", "Johnson Media Room", 0],
    [37, 38, "Sponsor Judging", "Johnson Ice Rink", 0],
    [37, 38, "Sponsor Judging (Hololens)", "Johnson Media Room", 0],
    [38, 39, "Closing Ceremony", "Kresge", 0],
    [40, 40.5, "Buses Leave", "Tent", 0]
];

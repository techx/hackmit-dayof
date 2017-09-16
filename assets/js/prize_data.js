var GENERAL_PRIZE_DATA = [
    {"title":"First Place","description":"Prize: Ticket and flight to a tech conference of your choice (up to $1000 per hacker)"},
    {"title":"Runner-Up","description":"Prize: HackMIT developer pack (choice of hardware/software up to $500 per hacker)"},
];

var CATEGORY_PRIZE_DATA = [
    {"title":"Made from Scratch","description":"Prize: DIY RepRap Prusa I3 3D Printer Kit <br> Description: "},
    {"title":"Best Hardware/Softwhere Hack", "description": "Prize: 3DR Solo Quadcopter <br> Description: "},
    {"title":"Hack", "description": "Prize: <br> Description: hack /hak/ verb. To use something in a way it was not originally intended to be used. This prize goes to the project that best embodies the original hacker ethos and reinvents something everyday in an unexpected way to make something awesome. Surprise us! ;) "}
];

var FUN_PRIZE_DATA = [
    {"title":"Dystopian Future Hack","description":"Prize: Snap Spectacles<br> Description: The dystopian future is here! 😱 Build a project most likely to be in a new episode of Black Mirror and win your own pair of Spectacles to record all your nightmarish memories! 😳"},
    {"title":"Moonshot","description":"Prize: ??? (mystery!) <br> Description: Every beginner has to begin somewhere! This prize goes to the team that shot for the moon and missed, but with the best effort and smarts that they could muster. Just try your best! [Team must contain at least one first-time hackathon participant.]"}
];

var SPONSOR_PRIZE_DATA = [
    {
        "title":"Best Use of Amadeus APIs",
        "description":("Company: Amadeus <br> Prize: $2000 in Visa Gift Cards for the winning team."),
    },
    {
        "title":"Best Use of Storytelling",
        "description":"Company: Disney <br> Prize: Special Edition BB-8 Droids",
    },
    {
        "title":"Most Innovative Use of IBM Technology",
        "description":"Company: IBM <br> Prize Not Finalized: Opportunity to attend large IBM Conference in 2018 and present their solution to conference attendees. Includes mentoring with IBM Subject Matter Experts and IBM Executives.",
    },
    {
        "title":"Not Finalized: Best Use of IBM Technology: 3D Printed TJ BOT",
        "description":"Company: IBM <br> Prize: TJ BOT (3D Printed in Cardboard, but not assembled)",
    },
    {
        "title":"Best Microsoft Hack",
        "description":"Company: Microsoft <br> Prize: Microsoft Surface Laptop for each team member (up to 4) <br> Description: To qualify for the “Best Microsoft Hack”, hackers need to incorporate at least one of the following into their project: Microsoft API http://aka.ms/api.lib Microsoft Azure Cloud http://aka.ms/azureeast Bot Framework http://dev.botframework.com/ Kinect http://aka.ms/kinectdev-center HoloLens http://aka.ms/hololensdev-center Universal Windows (UWP) App https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp",
    },
    {
        "title":"Best Use of Encryption",
        "description":"Company: Datto <br> Prize: ?",
    },
    {
        "title":"Best Use of Facebook API",
        "description":"Company: Facebook <br> Prize: All Expense Paid Trip to Facebook HQ for up to 4 Team Members for Hackathon Finals",
    },
    {
        "title":"Best Roomba 980 Hack",
        "description":"Company: iRobot Corportation <br> Prize: Rooma 980 <br> Description: We will give each of the first prize winners for our hackathon a Roomba 980. The Roomba 980 robot vacuum gives you cleaner floors, throughout your entire home, all at the push of a button. Roomba 980 seamlessly navigates an entire level of your home, keeping track of its location and recharging as needed until the job is done. The AeroForce™ Cleaning System with Carpet Boost automatically increases power on carpets where it's needed most. And with the iRobot HOME App, you can clean and schedule on the go.",
    },
    {
        "title":"Raffle - Roomba 880",
        "description":"Company: iRobot Corporation <br> Prize: Roomba 880",
    },
    {
        "title":"Best Travel Hack",
        "description":"Company: Concur <br> Prize: GoPro HERO Session <br> Description: We're looking for hacks that in any way help with travel headaches. The team with the best and most innovative idea will be the winner!",
    },
    {
        "title":"Hack Most Likely to Change How We Communicate",
        "description":"Company: GIPHY <br> Prize: One on one with the GIPHY CTO <br> Description: A one on one meeting with our CTO to discuss anything and everything. What's more, he's an MIT alumni.",
    },
    {
        "title":"Best Data Visualization",
        "description":"Company: Goldman Sachs <br> Prize: Snapchat Spectacles",
    },
    {
        "title":"Second Best Data Visualization",
        "description":"Company: Goldman Sachs <br> Prize: Remote Control Paper Planes",
    },
    {
        "title":"Most Interesting Use of Data",
        "description":"Company: Hudson River Trading <br> Prize: Oculus Rift (or Cash Equivalent)",
    },
    {
        "title":"Best Re-imagination of Market",
        "description":"Company: Nasdaq <br> Prize: Internship/full-time job interview; Trip to Nasdaq HQ (NYC) or Entrepreneurial Center (SF); Lunch with senior Nasdaq leader. Winning team will have their picture on Nasdaq's Times Square screen and will be shared on Nasdaq's social media platforms. <br> Description: Hack today's financial markets. We are looking for hacks that introduce a new way to look at financial markets. <br> Examples: <br> • Face recognition technology parallel to creating financial landmarks <br> • Electrical signal process to find financial signals <br> • Using Amazon Alexa, chat bots for financial use case <br> • VR for a financial use-case <br> • Graph technology for finance <br> • Visualization of some analysis; visualize market data as a tree growing <br> • Show streaming market data in context of historical norms <br> • Identify inflection point on streaming market data <br> • Chart of chocolate milk production vs. Nasdaq-100 index performance",
    },
    {
        "title":"Best Security Hack",
        "description":"Company: Illumio <br> Prize: $1000 in Amazon gift cards for the best security hack (shared among teammates) <br> Description: We’re looking for creative solutions to all sorts of security problems! Every day at Illumio, we work on solving challenges related to authentication and encryption, authorization and ACLs, network traffic and packet filtering, vulnerability and anomaly detection, and policy deployment at massive scale. But don’t confine yourself to the traditional definitions of security – be creative! Projects will be evaluated based on their complexity, novelty, and implementation.",
    },
    {
        "title":"Best Use of Location Data",
        "description":"Company: Samsara <br> Prize: Your choice of a drone or Apple Watch for each team member <br> Description: At Samsara, we handle lots of location data that we receive from our sensors. We use this data to help fleets monitor their trucks and operate their businesses in effective ways.",
    },
    {
        "title":"Best IoT Hack",
        "description":"Company: Samsara <br> Prize: Phillips Hue Lights for each team member <br> Description: Breakthroughs in semiconductors are making sensors smaller and radically cheaper, and wireless Internet connectivity is becoming ubiquitous. At Samsara, we believe that by making it easy to deploy sensors and analyze their data, customers of all types will be able to use them by the thousands, and in places they've never been used before.",
    },
    {
        "title":"Best Use of Wolfram Technologies",
        "description":"Company: Wolfram Alpha <br> Prize: The award comes with a year access to Wolfram|Alpha Pro and a year of Wolfram|One, and a $500 gift card for each member of the team. <br> Description: The prize is targeted to students to explore the Wolfram Technology Stack and see what awesome hacks they can create with it.",
    },
    {
        "title":"Best Hack with Startup Opportunity",
        "description":"Company: Jumpstart <br> Prize: Flight and hotel to Vegas for the team <br> Description: Some of the fastest growing tech companies have started from from teams hacking together a solution to a real life problem. Can you build the next one? Jumpstart's prize will focus on the team that builds the best hack with startup / business potential. <br> Our judging criteria includes: <br> **Originality:** How creative is the idea? <br> **Execution:** Was the demo a working product? Did the team execute and explain the problem? <br> **Fundability:** Is there a potential business model? <br> **Scalability:** Can the solution scale?",
    }
];

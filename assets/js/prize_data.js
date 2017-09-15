var GENERAL_PRIZE_DATA = [
    {"title":"First Place","description":"Ticket and flight to a tech conference of your choice (up to $1000 per hacker)"},
    {"title":"Runner-Up","description":"HackMIT developer pack (choice of hardware/software up to $500 per hacker)"},
];

var CATEGORY_PRIZE_DATA = [
    {"title":"Made from Scratch","description":"3D Printer Kit"},
    {"title":"Best Hardware Softwhere all Around", "description": ""},
    {"title":"Lifehack", "description": ""}
];

var FUN_PRIZE_DATA = [
    {"title":"Best xkcd Reference","description":"An xkcd book of your choice"},
    {"title":"Best Pusheen Reference","description":"Pusheen plushie"}
];

var SPONSOR_PRIZE_DATA = [
    {
        "title":"Best Use of Amadeus APIs",
        "description":"Company: Amadeus, Prize: $2000 in Visa Gift Cards for the winning team.",
    },
    {
        "title":"Best Use of Storytelling",
        "description":"Company: Disney, Prize: Special Edition BB-8 Droids",
    },
    {
        "title":"Most Innovative Use of IBM Technology",
        "description":"Company: IBM, Prize Not Finalized: Opportunity to attend large IBM Conference in 2018 and present their solution to conference attendees. Includes mentoring with IBM Subject Matter Experts and IBM Executives.",
    },
    {
        "title":"Not Finalized: Best Use of IBM Technology: 3D Printed TJ BOT",
        "description":"Company: IBM, Prize: TJ BOT (3D Printed in Cardboard, but not assembled)",
    },
    {
        "title":"Best Microsoft Hack",
        "description":"Company: Microsoft, Prize: Microsoft Surface Laptop for each team member (up to 4), To qualify for the “Best Microsoft Hack”, hackers need to incorporate at least one of the following into their project: Microsoft API http://aka.ms/api.lib Microsoft Azure Cloud http://aka.ms/azureeast Bot Framework http://dev.botframework.com/ Kinect http://aka.ms/kinectdev-center HoloLens http://aka.ms/hololensdev-center Universal Windows (UWP) App https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp",
    },
    {
        "description":"Best Use of Encryption",
        "title":"Company: Datto, Prize: ?",
    },
    {
        "title":"Best Use of Facebook API",
        "description":"Company: Facebook, Prize: All Expense Paid Trip to Facebook HQ for up to 4 Team Members for Hackathon Finals",
    },
    {
        "title":"Best Roomba 980 Hack",
        "description":"Company: iRobot Corportation, Prize: Rooma 980, Description: We will give each of the first prize winners for our hackathon a Roomba 980. The Roomba 980 robot vacuum gives you cleaner floors, throughout your entire home, all at the push of a button. Roomba 980 seamlessly navigates an entire level of your home, keeping track of its location and recharging as needed until the job is done. The AeroForce™ Cleaning System with Carpet Boost automatically increases power on carpets where it's needed most. And with the iRobot HOME App, you can clean and schedule on the go.",
    },
    {
        "title":"Raffle - Roomba 880",
        "description":"Company: iRobot Corporation, Prize: Roomba 880",
    },
    {
        "title":"Best Travel Hack",
        "description":"Company: Concur, Prize: GoPro HERO Session, Description: We're looking for hacks that in any way help with travel headaches. The team with the best and most innovative idea will be the winner!",
    },
    {
        "title":"Hack Most Likely to Change How We Communicate",
        "description":"Company: GIPHY, Prize: One on one with the GIPHY CTO, Description: A one on one meeting with our CTO to discuss anything and everything. What's more, he's an MIT alumni.",
    },
    {
        "title":"Best Data Visualization",
        "description":"Company: Goldman Sachs, Prize: Snapchat Spectacles",
    },
    {
        "title":"Second Best Data Visualization",
        "description":"Company: Goldman Sachs, Prize: Remote Control Paper Planes",
    },
    {
        "title":"Most Interesting Use of Data",
        "description":"Company: Hudson River Trading, Prize: Oculus Rift (or Cash Equivalent)",
    },
    {
        "title":"Best Re-imagination of Market",
        "description":"Company: Nasdaq, Prize: Internship/full-time job interview; Trip to Nasdaq HQ (NYC) or Entrepreneurial Center (SF); Lunch with senior Nasdaq leader. Winning team will have their picture on Nasdaq's Times Square screen and will be shared on Nasdaq's social media platforms., Description: Hack today's financial markets. We are looking for hacks that introduce a new way to look at financial markets. Examples: • Face recognition technology parallel to creating financial landmarks • Electrical signal process to find financial signals • Using Amazon Alexa, chat bots for financial use case • VR for a financial use-case • Graph technology for finance • Visualization of some analysis; visualize market data as a tree growing • Show streaming market data in context of historical norms • Identify inflection point on streaming market data • Chart of chocolate milk production vs. Nasdaq-100 index performance",
    },
    {
        "title":"Best Security Hack",
        "description":"$Company: Illumio, Prize: $1000 in Amazon gift cards for the best security hack (shared among teammates)", Description: "We’re looking for creative solutions to all sorts of security problems! Every day at Illumio, we work on solving challenges related to authentication and encryption, authorization and ACLs, network traffic and packet filtering, vulnerability and anomaly detection, and policy deployment at massive scale. But don’t confine yourself to the traditional definitions of security – be creative! Projects will be evaluated based on their complexity, novelty, and implementation.",
    },
    {
        "title":"Best Use of Wolfram Technologies",
        "description":"Winning team will be invited to our Wolfram Technology Conference in October to present their winning hack, along with 1 year Wolfram|Alpha Pro, and 1 year of Wolfram Development Platform",
    },
    {
        "description":"$1,500 cash prize split amongst team members",
        "title":"Most Innovative use of Synaptics Fingerprint Sensor",
    },
    {
        "description":"$1,500 cash prize split amongst team members",
        "title":"Most Innovative use of Synaptics Large Touch Sensor",
    },
    {
        "title":"Best Use of Emerging Technology (Disney)",
        "description":"Sphero BB-8 droids",
    },
    {
        "title":"Facebook Hackathon Finals Trip",
        "description":"All expense paid trip for up to 4 team members to Facebook HQ for Hackathon Finals",
    },
    {
        "description":"Oculus Rift Developers Kit Dk2 for each team member",
        "title":"Oculus Prize (Facebook)",
    },
    {
        "description":"$250 Worth of Amazon Gift Cards (For Up to 4 People, Total Value = $250)",
        "title":"Most Insightful Hack (BNP Paribas)",
    },
    {
        "description":"$250 Worth of Amazon Gift Cards (For Up to 4 People, Total Value = $250)",
        "title":"Best Use of Artificial Intelligence Applied in Banking Compliance Field (BNP Paribas)",
    },
    {
        "title":"Rough Draft Ventures Prize",
        "description":"The winning team will meet the Rough Draft Ventures Student Team and pitch their startup for up to $25K in funding.",
    },
    {
        "description":"1st Prize: $2000/for the team to split + Verrado Drift Trike per team member + LM Internship Interview per team member; 2nd Prize: $1000/for the team to split + 3DP Longboard per team member + LM Internship Interview/for EACH team member; 1st and 2nd place teams welcome to join Airbus Group and Local Motors mentors and company representatives for a dinner on 9/18/16.",
        "title":"Best Use of FOSS in a Drone Cargo Management System App (Local Motors Labs)",
    },
    {
        "title":"Best Low Level / High Performance Hack (Hudson River Trading)",
        "description":"See sponsor's booth for details",
    },
    {
        "title":"Activity Classification with Smartphone Data Data source (Philips)",
        "description":"Philips Sonicare HealthyWhite+ for best use of <a href=\"http://archive.ics.uci.edu/ml/datasets/Human+Activity+Recognition+Using+Smartphones\">human activity recognition using smartphone data</a>."
    },
    {
        "title": "Mitosis detection for breast cancer diagnosis Data source (Philips)",
        "description": "Philips Sonicare HealthyWhite+ (See <a href=\"https://grand-challenge.org/site/MITOS-ATYPIA-14/\">https://grand-challenge.org/site/MITOS-ATYPIA-14/</a> and <a href=\"http://amida13.isi.uu.nl/\">http://amida13.isi.uu.nl/</a>)"
    },
    {
        "title":"Focus based document summarization (Philips)",
        "description":"Philips Sonicare HealthyWhite+. Data source: <a href=\"http://l3s.de/~gtran/timeline/Timeline17.zip\">http://l3s.de/~gtran/timeline/Timeline17.zip</a>"
    },
    {
        "title":"Best use of Firebase",
        "description":"4 Posh Micro Phones, 4 Lego architecture sets, 1 awesome flame trophy"
    }
];

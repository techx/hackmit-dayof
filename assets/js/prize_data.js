var GENERAL_PRIZE_DATA = [
    {"title":"First Place","description":"Prize: Ticket and flight to a tech conference of your choice (up to $1000 per hacker)"},
    {"title":"Runner-Up","description":"Prize: HackMIT Developer Pack (Choice of hardware/software up to $500 per hacker)"},
];

var CATEGORY_PRIZE_DATA = [
    {"title":"Made from Scratch","description":"Prize: DIY RepRap Prusa I3 3D Printer Kit <br> Description: Forget APIs and prepackaged products -- the core parts of the winning project here will be entirely built from scratch. Libraries and frameworks are allowed, but the part of the project that makes it awesome should be written or built by you!"},
    {"title":"Master of Both Worlds", "description": "Prize: 3DR Solo Quadcopter <br> Description: Some hacks rock the software and other rock the hardware, but this prize goes to the project that masters both worlds. The hardware and software components of the winning project should both be substantial, technically challenging, and awesome on their own, and even better rolled in one project!"},
    {"title":"Hack", "description": "Prize: Lockpicking Set + One Choice of: GeForce GTX 1070 OR Saleae Logic Analyzer <br> Description: hack /hak/ verb. To use something in a way it was not originally intended to be used. This prize goes to the project that best embodies the original hacker ethos and reinvents something everyday in an unexpected way to make something awesome. Surprise us! ;) "}
];

var FUN_PRIZE_DATA = [
    {"title":"Dystopian Future Hack","description":"Prize: Snap Spectacles<br> Description: The dystopian future is here! 😱 Build a project most likely to be in a new episode of Black Mirror and win your own pair of Spectacles to record all your nightmarish memories! 😳"},
    {"title":"Moonshot","description":"Prize: ??? (mystery!) <br> Description: Every beginner has to begin somewhere! This prize goes to the team that shot for the moon and missed, but with the best effort and smarts that they could muster. Just try your best! [Team must contain at least one first-time hackathon participant.]"}
];

var SPONSOR_PRIZE_DATA = [
    {
        "title":"Best Use of Amadeus APIs",
        "description":("Company: Amadeus <br> Prize: $2000 in Visa Gift Cards for the winning team. <br> Description: Our easy-to-use REST/JSON APIs gives you access to test and prototype with one of the world’s largest repositories of Travel Records, as well as industry leading flight search, hotel search and much more. <br> Regarding the challenge: Most innovative mobile/web travel application using Amadeus Travel Innovation Sandbox (https://sandbox.amadeus.com/)."),
    },
    {
        "title":"Best Paddle Hack - First Place",
        "description":"Company: Baidu <br> Prize: Ten thousand dollars in cash <br> Description: The prize will be rewarded to the best application of Paddle in this Hackathon. Paddle is an open source deep learning framework with an industry focus that many core products within Baidu use. Please come to the workshop scheduled if you are interested in this prize or you just want to learn how to power up your deep learning backed applications. We are looking for teams that focus on making major impact on people’s lives using Paddle, or have interesting use cases for Paddle. <br> Notes: <br> • Subject to taxation <br>  • Code audit (can be done by the event organizers): All code written during hacking hours, Paddle is used nontrivially. <br>  • Subject to a small interview <br> • Photo release <br> Resources: <br> • Docs: bit.ly/HackMIT-PaddleDoc <br> • Slack: bit.ly/HackMIT-baidu <br> • Email: mimee@baidu.com",
    },
    {
        "title":"Best Paddle Hack - Second Place",
        "description":"Company: Baidu <br> Prize: A New GPU - 1080 GeForce<br> Description: The prize will be rewarded to the best application of Paddle in this Hackathon. Paddle is an open source deep learning framework with an industry focus that many core products within Baidu use. Please come to the workshop scheduled if you are interested in this prize or you just want to learn how to power up your deep learning backed applications. We are looking for teams that focus on making major impact on people’s lives using Paddle, or have interesting use cases for Paddle. <br> Notes: <br> • Subject to taxation <br>  • Code audit (can be done by the event organizers): All code written during hacking hours, Paddle is used nontrivially. <br>  • Subject to a small interview <br> • Photo release <br> Resources: <br> • Docs: bit.ly/HackMIT-PaddleDoc <br> • Slack: bit.ly/HackMIT-baidu <br> • Email: mimee@baidu.com",
    },
    {
        "title":"AI for Developing Countries / Hack for Social Good",
        "description":"Company: Baidu <br> Prize: 1 Week Travel to Beijing for Team Representatives <br> Description: For up to 2 teams, we would like to bring the team representatives to Beijing for a week, empowering them the opportunity to see the opportunities there and do their research in person. <br> Notes: <br> • One rep per team <br> • Up to 2 teams <br> • Travel plan ahead of time <br> • Baidu campus visit needs to be pre-approved <br> • Winners may be subjected to a code audit and a small interview <br> • Photo release <br> • Travel and lodging up to 1500 USD per person.",
    },
    {
        "title":"Best Leveraging of Open Source/API Creation/ML Hack/Education/Researcher Productivity, Etc.",
        "description":"Company: Baidu <br> Prize: Ten thousand dollars in cash <br> Description: In addition to these two prizes, we are also giving out another GPU, and 5 prizes, each consisting of $200 in Amazon gift certificates, all in additional to onsite interviews at Baidu USA, which does AI research, big data research, vision, RL, and autonomous driving, to entire teams that may fit into at least 1 of the following categories. <br> Categories: <br> • Best Machine Learning Hack <br> • Best machine learning education, such as a clear, well-written tutorial <br> • Best researcher productivity tools <br> • Best use of machine learning frameworks <br> • Best leveraging/contribution of open source technology <br> Best API creation <br> Notes: <br> • Onsite interviews and internships are subjected to a resume submission to find the best fit. <br> • Open source prizes may require some of the resulting application to be open sourced.",
    },
    {
        "title":"Best Use of Storytelling",
        "description":"Company: Disney <br> Prize: Special Edition BB-8 Droids",
    },
    {
        "title":"Most Innovative Use of IBM Technology - 1st Place",
        "description":"Company: IBM <br> Prize: Winning team will receive 4 passes to a large developer conference in San Francisco this coming February and the chance to showcase your hack in a dedicated session on-site on how you won this award at HackMIT. Includes mentoring with IBM Subject Matter Experts and IBM Executives.",
    },
    {
        "title":"Most Innovative Use of IBM Technology - Runner Up",
        "description":"Company: IBM <br> Prize: TJ Bot (Giving away 15) <br> Description: Must use IBM Watson",
    },
    {
        "title":"Best Microsoft Hack",
        "description":"Company: Microsoft <br> Prize: Microsoft Surface Laptop for each team member (up to 4) <br> Description: To qualify for the “Best Microsoft Hack”, hackers need to incorporate at least one of the following into their project: <br> • Microsoft API (http://aka.ms/api.lib) <br> • Microsoft Azure Cloud (http://aka.ms/azureeast) <br> • Bot Framework (http://dev.botframework.com) <br> • Kinect (http://aka.ms/kinectdev-center) <br> • HoloLens (http://aka.ms/hololensdev-center) <br> • Universal Windows (UWP) App <br> (https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp)",
    },
    {
        "title":"Best Use of Encryption",
        "description":"Company: Datto <br> Prize: $200 Amex Gift Card for Team <br> Description: Your project must use some form of encryption, and the prize will be given to the team that goes above and beyond with encryption practices.",
    },
    {
        "title":"Best Use of Facebook API",
        "description":"Company: Facebook <br> Prize: All Expense Paid Trip to Facebook HQ for up to 4 Team Members for Hackathon Finals",
    },
    {
        "title":"Best Roomba 980 Hack",
        "description":"<a href='https://go.hackmit.org/roomba'><em>Challenge details</em></a> <br><br> Company: iRobot Corportation <br> Prize: Rooma 980 <br> Description: We will give each of the first prize winners for our hackathon a Roomba 980. The Roomba 980 robot vacuum gives you cleaner floors, throughout your entire home, all at the push of a button. Roomba 980 seamlessly navigates an entire level of your home, keeping track of its location and recharging as needed until the job is done. The AeroForce™ Cleaning System with Carpet Boost automatically increases power on carpets where it's needed most. And with the iRobot HOME App, you can clean and schedule on the go. <br><br> Second place winners will earn a Create 2 robot per team member, and extra raffle tickets for the Roomba 880!",
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
        "description":"Company: Hudson River Trading <br> Prize: Oculus Rift (or Cash Equivalent) <br> Description: Any project that gathers and uses data to infer non-obvious relationships would be eligible.  Some concrete examples would be twists on collaborative filtering, or (for example), identifying shifts in a corpus over time.",
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
        "description":"Company: Jumpstart <br> Prize: Flight and hotel to Vegas for the team <br> Description: Some of the fastest growing tech companies have started from from teams hacking together a solution to a real life problem. Can you build the next one? Jumpstart's prize will focus on the team that builds the best hack with startup / business potential. <br> Our judging criteria includes: <br> • Originality: How creative is the idea? <br> • Execution: Was the demo a working product? Did the team execute and explain the problem? <br> • Fundability: Is there a potential business model? <br> • Scalability: Can the solution scale?",
    },
    {
        "title": "Spot the HENRY",
        "description": "Company: BNP Paribas <br> Prize: $250 Amazon gift card for each team member <br> Description: Use publicly available datasets from social media or other sources to spot the HENRY (High-Earning-Not-Rich-Yet)!"
    }
];

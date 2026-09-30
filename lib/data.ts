// Site content. Edit here; the pages read from this file.

export const EMAIL = "bastian.krohg@its.uio.no"
export const PERSONAL_EMAIL = "baskrohg@gmail.com"
export const GITHUB = "https://github.com/bastiankrohg"
export const LINKEDIN = "https://www.linkedin.com/in/bastiankrohg/"

export type Link = { label: string; url: string }

export type Project = {
  id: string
  title: string
  text: string
  tags: string[]
  links?: Link[]
  image?: string
  date?: string
}

export type Place = {
  slug: string
  name: string
  role: string
  location: string
  dates: string
  summary: string
  intro: string
  photo?: { src: string; caption: string }
  projects: Project[]
}

export const background = [
  { title: "PhD, robotics", org: "University of Oslo", dates: "Nov 2025–" },
  { title: "SenseInside project", org: "SINTEF Digital", dates: "2025", place: "sintef" },
  { title: "Intern", org: "Innovation Norway, Silicon Valley", dates: "Sep–Dec 2023", place: "innovation-norway" },
  { title: "Engineering degree (MSc), embedded systems", org: "INSA Toulouse", dates: "2019–2025", place: "insa-toulouse" },
  { title: "Master of International Management", org: "Toulouse School of Management", dates: "2023–2025" },
  { title: "Exchange semester", org: "Seoul National University", dates: "Fall 2021" },
]

export const skills = [
  { title: "Languages", items: ["Python", "C/C++", "TypeScript", "VHDL", "Assembly"] },
  { title: "Robotics & embedded", items: ["ROS", "OpenCV", "Raspberry Pi", "STM32 / ARM Cortex", "FPGA", "RTOS"] },
  { title: "Tools", items: ["Git", "Linux", "Docker", "MATLAB", "Altium Designer"] },
  { title: "Spoken", items: ["Norwegian", "English", "French"] },
]

export const places: Place[] = [
  {
    slug: "sintef",
    name: "SINTEF Digital",
    role: "SenseInside project",
    location: "Oslo, Norway",
    dates: "2025",
    summary: "Handheld NIR instrument for sensing below the surface.",
    intro: "Development and commercialisation work on SenseInside in the Smart Sensors and Microsystems group.",
    photo: { src: "/senseinside.webp", caption: "SenseInside prototype in the lab." },
    projects: [
      {
        id: "senseinside",
        title: "SenseInside",
        text: "Handheld near-infrared instrument for measuring below the surface, for example inside food. Worked on the embedded side, the interface and the path to commercialisation.",
        tags: ["NIR spectroscopy", "Embedded systems", "UI/UX"],
        links: [{ label: "Project", url: "https://prosjektbanken.forskningsradet.no/project/FORISS/341632" }],
      },
    ],
  },
  {
    slug: "insa-toulouse",
    name: "INSA Toulouse",
    role: "Engineering degree (MSc), embedded systems",
    location: "Toulouse, France",
    dates: "2019–2025",
    summary: "Embedded systems, control and an autonomous rover.",
    intro: "Engineering degree in embedded systems, alongside a Master of International Management at Toulouse School of Management (2023–2025).",
    photo: { src: "/rover.webp", caption: "Rover from the final-year project: Raspberry Pi camera, ultrasonic ranging, servo steering." },
    projects: [
      {
        id: "rover",
        title: "Autonomous rover",
        text: "Final-year team project. I led the team and built the vision pipeline, control and path planning for a rover that navigates on its own.",
        tags: ["Project lead", "ROS", "OpenCV", "Raspberry Pi", "Path planning"],
        links: [{ label: "Code", url: "https://github.com/bastiankrohg/AutoPi" }],
        date: "2025",
      },
      {
        id: "risc-v",
        title: "Timing leaks in RISC-V",
        text: "Year-long research project with Mathieu Escouteloup on timing side channels in RISC-V: modelling, simulation and a visualisation tool.",
        tags: ["Research", "Computer architecture", "Security"],
        links: [
          { label: "Code", url: "https://github.com/kiso6/lost_in_time_analyzer" },
          { label: "Slides", url: "/pir-lost-in-time.pdf" },
        ],
        date: "2023",
      },
      {
        id: "sailboat",
        title: "RC sailboat",
        text: "STM32 firmware in C and ARM assembly: heading and wind sensing, automatic sail trim and safety cut-offs.",
        tags: ["STM32", "C", "Assembly", "Control"],
        links: [{ label: "Code", url: "https://github.com/INSA-GEI/Voilier" }],
        date: "2023",
      },
      {
        id: "rtos",
        title: "Real-time controlled robot",
        text: "RTOS project driving a robot in an arena, with camera tracking, a supervisor and a Python control interface.",
        tags: ["RTOS", "C", "Python"],
        links: [{ label: "Code", url: "https://github.com/bastiankrohg/realtime" }],
      },
      {
        id: "scooter",
        title: "Electric scooter motor control",
        text: "Torque and speed control for a scooter motor, including the inverter.",
        tags: ["Control", "Power electronics"],
        links: [{ label: "Code", url: "https://github.com/bastiankrohg/trottinette" }],
      },
      {
        id: "fpga",
        title: "FPGA Ethernet controller",
        text: "Ethernet controller in VHDL on an FPGA, built from the protocol specification.",
        tags: ["FPGA", "VHDL"],
      },
      {
        id: "vco",
        title: "2.4 GHz voltage-controlled oscillator",
        text: "Transistor-level design and layout of a VCO for a PLL in 0.18 µm CMOS.",
        tags: ["Analog IC design"],
        links: [{ label: "Code", url: "https://github.com/bastiankrohg/microwind" }],
      },
      {
        id: "ml",
        title: "Machine learning coursework",
        text: "Neural networks and decision trees implemented and evaluated in Python.",
        tags: ["Python", "ML"],
        links: [{ label: "Code", url: "https://github.com/bastiankrohg/machine-learning" }],
      },
      {
        id: "ansa",
        title: "ANSA Toulouse",
        text: "Volunteer for the Association for Norwegian Students Abroad: communications, the student newspaper and events.",
        tags: ["Extracurricular"],
        links: [{ label: "ANSA", url: "https://www.ansa.no/personer/ansa-toulouse/" }],
      },
    ],
  },
  {
    slug: "innovation-norway",
    name: "Innovation Norway, Silicon Valley",
    role: "Intern",
    location: "Palo Alto, CA",
    dates: "Sep–Dec 2023",
    summary: "Startup programmes and an LLM assistant prototype.",
    intro: "Internship at Nordic Innovation House, working with Norwegian startups entering the US.",
    photo: { src: "/tinc-demo-day.webp", caption: "TINC demo day at Nordic Innovation House, November 2023." },
    projects: [
      {
        id: "tinc-gpt",
        title: "tinc-GPT",
        text: "Assistant prototype for founders in the incubator. Version one used the OpenAI Assistants API; version two was a full-stack RAG chatbot.",
        tags: ["LLMs", "RAG", "Full stack"],
      },
      {
        id: "tinc",
        title: "TINC tech incubator",
        text: "Helped run the biannual programme: four weeks online and a week in Palo Alto of workshops, talks and a demo day.",
        tags: ["Programme delivery"],
      },
      {
        id: "fundraising",
        title: "Fundraising in the US",
        text: "Pilot accelerator with MIT Entrepreneurship and Storm Ventures, preparing Norwegian startups to raise venture capital.",
        tags: ["Accelerator"],
      },
      {
        id: "california-guide",
        title: "Doing business in California",
        text: "Led the first version of a guide for startups setting up in California.",
        tags: ["Project lead"],
      },
    ],
  },
  {
    slug: "independent",
    name: "Independent",
    role: "Hackathons and side projects",
    location: "",
    dates: "2023–2025",
    summary: "LeRobot hackathon, startup web builds, small hardware projects.",
    intro: "Hackathons, freelance web work and small hardware projects.",
    projects: [
      {
        id: "lerobot",
        title: "LeRobot hackathon",
        text: "Hugging Face's first LeRobot hackathon: teleoperation, imitation learning and reinforcement learning on low-cost arms.",
        tags: ["Robot learning", "Teleoperation", "Imitation learning"],
        links: [{ label: "Hackathon", url: "https://github.com/huggingface/lerobot_hackathon_oct2024" }],
        image: "/lerobot.webp",
        date: "2024",
      },
      {
        id: "web",
        title: "Startup MVP websites",
        text: "Designed, built and deployed full-stack MVPs for two early-stage startups.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        links: [
          { label: "Le Beau", url: "https://beau.bastiankrohg.com" },
          { label: "MetaManager", url: "https://metamanager.bastiankrohg.com" },
        ],
        date: "2024",
      },
      {
        id: "iot-plant",
        title: "Smart plant system",
        text: "ESP8266 with moisture and temperature sensing, a display and a pump to water a plant on its own.",
        tags: ["ESP8266", "IoT"],
        links: [{ label: "Code", url: "https://github.com/bastiankrohg/arduino" }],
      },
    ],
  },
]

// Shown on the home page, in this order.
export const featured: { place: string; id: string; image: string }[] = [
  { place: "insa-toulouse", id: "rover", image: "/rover.webp" },
  { place: "sintef", id: "senseinside", image: "/senseinside.webp" },
  { place: "independent", id: "lerobot", image: "/lerobot.webp" },
  { place: "insa-toulouse", id: "sailboat", image: "/sailboat.webp" },
]

export interface ServiceDivision {
  number: string;
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  description: string;
  detailedScope: { title: string; items: string[] }[];
  technicalHighlights: string[];
  regulations: string[];
  industryApplications: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
  heroImage: string;
  specs: { label: string; value: string }[];
}

export interface Industry {
  number: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  servicesOffered: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  categorySlug: string;
  location: string;
  scopeSummary: string;
  image: string;
  verified: boolean;
  completionYear?: string;
  sectors: string[];
  featured?: boolean;
}

export const COMPANY = {
  name: "Al Manar Tech",
  legalName: "Al Manar Technical Contracting",
  brandHeadline: "Engineering the Systems That Keep Buildings Running.",
  tagline: "Integrated Building & Infrastructure Solutions",
  established: 2001,
  experienceYears: "Over 2 Decades",
  projectsCompleted: "160+",
  primaryMarket: "Abu Dhabi & Al Ain, UAE",
  headquarters: "Warehouse 2, Al Afou 3St, Musaffah M35, Abu Dhabi, UAE",
  description: "Al Manar Tech delivers integrated electromechanical, HVAC, fire detection, IT and telecommunications, security and maintenance solutions for commercial, industrial and residential environments across Abu Dhabi and Al Ain.",
  contact: {
    phone: "02-5829700",
    phoneInternational: "+971 2 582 9700",
    email: "info@almanartech.com",
    address: "Warehouse 2, Al Afou 3St, Musaffah M35, Abu Dhabi, UAE",
    poBox: "P.O. Box Abu Dhabi, UAE",
    hours: "Monday – Saturday: 09:00 – 18:00 (Sunday: Emergency Response On-Call)",
    locationCoordinates: {
      lat: 24.3496,
      lng: 54.5103
    }
  },
  accreditations: [
    {
      name: "ADDC Approved",
      authority: "Abu Dhabi Distribution Company",
      code: "ADDC-CON-ELEC",
      desc: "Licensed contractor for power distribution, substation works, and electromechanical connections."
    },
    {
      name: "ADM Recognized",
      authority: "Abu Dhabi Municipality",
      code: "ADM-ENG-2001",
      desc: "Conforming to municipal engineering specifications, structural approvals, and commercial fit-out standards."
    },
    {
      name: "ADQCC Compliant",
      authority: "Abu Dhabi Quality and Conformity Council",
      code: "ADQCC-QAS",
      desc: "Adherence to UAE national technical conformity standards, electrical safety, and verified materials."
    }
  ],
  stats: [
    { value: "2001", label: "Established In", detail: "Over two decades of continuous operational experience in UAE" },
    { value: "160+", label: "Verified Projects", detail: "Successfully executed across Abu Dhabi & Al Ain" },
    { value: "06", label: "Core Divisions", detail: "Integrated MEP, HVAC, Fire, IT, Security & AMC" },
    { value: "100%", label: "Authority Compliance", detail: "ADDC, ADM & Civil Defence aligned procedures" }
  ]
};

export const SERVICES: ServiceDivision[] = [
  {
    number: "01",
    id: "mep-contracting",
    slug: "mep-contracting",
    title: "Electromechanical & MEP Contracting",
    shortTitle: "MEP Contracting",
    category: "Electromechanical",
    tagline: "Precision Electrical, Mechanical, and Plumbing Engineering for Abu Dhabi's Built Environment",
    description: "As an ADDC-approved electromechanical contractor, Al Manar Tech engineers and delivers turnkey MEP installations. From high-capacity power distribution systems and LV panels to sanitary engineering and industrial containment, we ensure code-compliant, energy-efficient operational infrastructure.",
    icon: "zap",
    heroImage: "/images/original/electrical-team-abu-dhabi.png",
    specs: [
      { label: "Voltage Level", value: "LV / 415V 3-Phase" },
      { label: "Authority", value: "ADDC Approved" },
      { label: "Standards", value: "BS 7671 / IEC" },
      { label: "Testing", value: "Megger & Loop Verified" }
    ],
    technicalHighlights: [
      "ADDC-certified load calculations, shop drawings, and power energization approvals",
      "Low Voltage (LV) switchgear, Main Distribution Boards (MDB), and Sub-MDB design",
      "Heavy-duty cable tray, trunking, busbar trucking, and conduit management",
      "Architectural, emergency, industrial, and central battery lighting installations",
      "Earthing, lightning protection, and harmonic mitigation systems",
      "Plumbing, booster pumping stations, drainage networks, and water filtration"
    ],
    detailedScope: [
      {
        title: "Electrical Infrastructure & Power Distribution",
        items: [
          "MDB, SMDB, and Final Distribution Board (DB) panel fabrication, assembly & termination",
          "Power cabling up to high-amperage specifications with certified insulation resistance testing",
          "Busbar trunking systems for commercial towers and industrial warehouses",
          "Power factor correction (PFC) banks to optimize electrical consumption and utility billing",
          "Dedicated clean-power and Uninterruptible Power Supply (UPS) distribution for critical systems"
        ]
      },
      {
        title: "Mechanical & Plumbing Systems",
        items: [
          "Commercial domestic water supply networks with calibrated variable-speed booster pumps",
          "Soil, waste, and vent piping using acoustic and high-density polyethylene (HDPE) / UPVC",
          "Grease trap engineering and interceptor setups compliant with municipal health regulations",
          "Submersible dewatering and sump pump installations with automatic float switch controls",
          "Water tank sanitization, pressure vessel testing, and backflow preventer installations"
        ]
      },
      {
        title: "Lighting & Power Controls",
        items: [
          "Energy-saving LED high-bay, commercial recessed, and architectural track lighting",
          "Central battery emergency lighting systems compliant with UAE Civil Defence regulations",
          "Smart lighting control, motion occupancy sensors, and DALI architectural dimming",
          "External landscape, façade, and perimeter illumination with IP66/IP67 ingress ratings"
        ]
      }
    ],
    regulations: ["ADDC Technical Regulations", "Abu Dhabi Municipality Building Code", "ADQCC Conformity Scheme", "IEC & BS 7671 Electrical Standards"],
    industryApplications: ["Industrial Warehouses", "Commercial Towers", "Retail Centers", "Educational Campuses", "Healthcare Facilities"],
    faqs: [
      {
        question: "Is Al Manar Tech an approved contractor with ADDC in Abu Dhabi?",
        answer: "Yes. Al Manar Tech is an approved electromechanical contractor recognized by Abu Dhabi Distribution Company (ADDC), qualified to prepare load schedules, submit drawings, manage authority inspections, and handle final power connection approvals."
      },
      {
        question: "Do you handle both design and field execution for MEP projects?",
        answer: "We provide comprehensive end-to-end delivery: technical design, authority documentation, shop drawings, procurement, on-site installation, testing, commissioning, and final authority sign-off."
      },
      {
        question: "What testing procedures do you execute prior to handover?",
        answer: "We conduct complete pre-commissioning and commissioning protocols including insulation resistance (megger) testing, earth loop impedance, phase rotation, continuity testing, RCD tripping tests, and pressure leak testing for plumbing lines."
      }
    ]
  },
  {
    number: "02",
    id: "it-telecom",
    slug: "it-telecom",
    title: "IT & Telecommunications Infrastructure",
    shortTitle: "IT & Telecom",
    category: "Information Systems",
    tagline: "High-Performance Structured Cabling, Fiber Networks, and Data Center Infrastructure",
    description: "Reliable digital connectivity forms the nervous system of modern business operations. Al Manar Tech designs, implements, and certifies high-performance copper and optical fiber structured cabling, enterprise server rooms, PABX systems, and unified communications for enterprise resilience.",
    icon: "network",
    heroImage: "/images/original/Al-Dar-Academies-HQ.jpeg",
    specs: [
      { label: "Cabling Tier", value: "Cat6A / Cat7 / OS2 / OM4" },
      { label: "Certification", value: "Fluke DSX Tested" },
      { label: "Service Providers", value: "e& (Etisalat) / du Aligned" },
      { label: "Containment", value: "Structured Trays / Racks" }
    ],
    technicalHighlights: [
      "Cat6, Cat6A, and Cat7 structured cabling installations with Fluke DTX/DSX certification",
      "Single-mode (OS2) and multi-mode (OM3/OM4) fiber optic fusion splicing and OTDR testing",
      "Server room containment, floor-standing racks, patch panels, and cable management",
      "Telecommunication service provider lead-in ducting and building entry containment (etisalat by e& / du standards)",
      "IP-PABX, VoIP systems, and structured voice distribution",
      "Enterprise wireless access point (WAP) predictive heat mapping and deployment"
    ],
    detailedScope: [
      {
        title: "Structured Cabling & Copper Infrastructure",
        items: [
          "Horizontal and backbone shielded (STP/FTP) and unshielded (UTP) twisted pair installations",
          "High-density patch panel termination, port labeling, and neat Velcro dressing",
          "Comprehensive Fluke channel and permanent link testing with verified certification reports",
          "Underfloor raceways, perimeter trunking, and consolidation point distribution"
        ]
      },
      {
        title: "Fiber Optics & Backbone Connectivity",
        items: [
          "Core campus fiber backbones interconnecting multi-story distribution frames (MDF/IDF)",
          "Precision core-alignment fusion splicing with ultra-low attenuation tolerances",
          "Optical Time-Domain Reflectometer (OTDR) and optical power meter loss verification",
          "Ruggedized, armored outdoor fiber burial and containment conduit systems"
        ]
      },
      {
        title: "Server Racks & Telecom Rooms",
        items: [
          "42U / 48U server enclosures with integrated cable managers, brush panels, and grounding kits",
          "Intelligent rack power distribution units (PDU) with metered and switched options",
          "Telecom room environmental monitoring (temperature, humidity, water leak detection)",
          "Telecom carrier coordination for clean hand-off points and demarc terminations"
        ]
      }
    ],
    regulations: ["TIA/EIA-568 Standards", "ISO/IEC 11801 Structured Cabling Standards", "UAE Telecom Authority Guidelines", "e& and du Building Telecom Specifications"],
    industryApplications: ["Corporate Headquarters", "Financial Institutions", "Educational Centers", "Multi-Tenant Commercial Offices", "Hospitality Venues"],
    faqs: [
      {
        question: "Do you supply Fluke test certification reports for all installed network points?",
        answer: "Yes. Every installed copper and fiber drop is tested with calibrated Fluke certifiers, and comprehensive PDF test results detailing wiremap, length, insertion loss, and NEXT margins are provided in the handover documentation."
      },
      {
        question: "Can Al Manar Tech coordinate our telecommunication building lead-in?",
        answer: "Yes. We engineer telecom entrance facilities compliant with local service provider guidelines (e& and du), including intake ducts, MDF room trays, and demarcation patching."
      }
    ]
  },
  {
    number: "03",
    id: "fire-detection",
    slug: "fire-detection",
    title: "Fire Detection & Life Safety Systems",
    shortTitle: "Fire Detection",
    category: "Life Safety",
    tagline: "Certified Fire Hazard Detection and Life Safety Systems Aligned with UAE Civil Defence Requirements",
    description: "Protecting lives, structural assets, and operational continuity requires early, reliable fire hazard detection. Al Manar Tech installs advanced analogue addressable fire alarm systems, smoke evacuation interface modules, emergency voice evacuation, and central monitoring compliant with UAE Fire and Life Safety Codes.",
    icon: "shield-alert",
    heroImage: "/images/original/fire-safety-install-abu-dhabi.png",
    specs: [
      { label: "System Protocol", value: "Analogue Addressable" },
      { label: "Regulation", value: "UAE Civil Defence Code" },
      { label: "Audits", value: "Cause & Effect Matrix" },
      { label: "Integrations", value: "BMS / HVAC Damper / EVAC" }
    ],
    technicalHighlights: [
      "Analogue addressable and conventional Fire Alarm Control Panels (FACP)",
      "Multi-sensor, optical smoke, thermal heat, and infrared flame detectors",
      "Beam detectors for high-ceiling warehouses, sports facilities, and shopping atriums",
      "Emergency Voice Evacuation (EVAC) and public address life safety interfaces",
      "BMS, elevator grounding, HVAC smoke damper trip, and access control release integration",
      "Fire-rated FP200/micc cabling and redundant loop architecture"
    ],
    detailedScope: [
      {
        title: "Fire Alarm System Architecture",
        items: [
          "Networked central fire alarm control panels with backup battery calculation & autonomy",
          "Intelligent addressable loop design with isolator units to prevent single-point loop failure",
          "Manual call points (break glass units) positioned at all egress routes and fire exits",
          "High-decibel electronic sounders, xenon flashing beacons, and sounder-beacon combination units"
        ]
      },
      {
        title: "Specialized Detection & Interlocking",
        items: [
          "Optical beam smoke detection for tall spaces including aircraft hangars and industrial logistics sheds",
          "Duct smoke detectors connected to AHU shutdown relays to arrest smoke migration",
          "Interlocking with elevator controls for automatic car recall during emergency triggers",
          "Electromagnetic fire door release and access control turnstile failsafe integration"
        ]
      },
      {
        title: "Inspection, Maintenance & Certification",
        items: [
          "Periodic sensitivity calibration of smoke sensor heads to eliminate nuisance alarms",
          "Loop resistance verification, secondary battery load discharge testing",
          "Full cause-and-effect functional matrix audits in coordination with safety teams",
          "Comprehensive logbook management and compliance certification"
        ]
      }
    ],
    regulations: ["UAE Fire and Life Safety Code of Practice", "NFPA 72 National Fire Alarm Code", "Civil Defence Approved Equipment Lists", "EN 54 European Fire Alarm Standards"],
    industryApplications: ["Industrial Warehouses", "Retail Malls & Hypermarkets", "High-Rise Commercial Towers", "Hotels & Resorts", "Data Centers"],
    faqs: [
      {
        question: "Are your fire alarm installations compliant with UAE Civil Defence specifications?",
        answer: "Yes. All system layouts, cause-and-effect sequences, cable selections, and device ratings strictly follow the UAE Fire and Life Safety Code of Practice using approved equipment."
      },
      {
        question: "Can your fire alarm system interface with our existing HVAC and access control?",
        answer: "Yes. Our engineers implement standard cause-and-effect relay modules to automatically shut down fresh air handling units, close fire/smoke dampers, release electromagnetic access control locks, and recall elevators to the ground floor."
      }
    ]
  },
  {
    number: "04",
    id: "hvac",
    slug: "hvac",
    title: "HVAC Installations & Climate Engineering",
    shortTitle: "HVAC Systems",
    category: "Thermal Comfort",
    tagline: "Industrial and Commercial Thermal Comfort, Air Quality, and Energy-Efficient Cooling",
    description: "Given the demanding climatic conditions of Abu Dhabi and Al Ain, robust HVAC systems are vital for occupant comfort, product integrity, and energy sustainability. Al Manar Tech provides complete HVAC engineering, from chilled water networks and VRF systems to specialized ventilation and precision climate control.",
    icon: "fan",
    heroImage: "/images/original/Puma-Outlet-Showroom.jpeg",
    specs: [
      { label: "Cooling Medium", value: "Chilled Water / VRF / DX" },
      { label: "Air Balancing", value: "Certified TAB Protocols" },
      { label: "Ductwork", value: "SMACNA / GI & Pre-Insulated" },
      { label: "Efficiency", value: "Estidama / Pearl Aligned" }
    ],
    technicalHighlights: [
      "Chilled water fan coil units (FCU) and Air Handling Units (AHU) installations",
      "Variable Refrigerant Flow (VRF/VRV) systems for zoning flexibility and high COP efficiency",
      "Galvanized iron (GI) and pre-insulated (PI) ductwork fabrication and airtight installation",
      "Fresh Air Handling Units (FAHU) with energy recovery wheels and sensible heat exchangers",
      "Kitchen ecology units with electrostatic precipitators (ESP) and carbon odor control filters",
      "Testing, Adjusting, and Balancing (TAB) of air and hydronic water flow rates"
    ],
    detailedScope: [
      {
        title: "Cooling & Refrigeration Plant Equipment",
        items: [
          "Installation of high-efficiency rooftop package units, split systems, and ducted units",
          "Chilled water piping, motorized 2-way / pressure-independent control valves (PICV)",
          "Condensate drain piping networks with trapped gravity fall and secondary insulation",
          "Refrigerant copper line-sets with brazing under nitrogen purging to ensure system cleanliness"
        ]
      },
      {
        title: "Air Distribution & Ductwork",
        items: [
          "Computerized plasma-cut GI ducting fabrication adhering to SMACNA HVAC duct standards",
          "Class 0 elastomeric thermal insulation and vapor barriers preventing condensation sweating",
          "Linear slot diffusers, perforated ceiling grilles, swirl diffusers, and jet nozzles",
          "Motorized fire dampers, volume control dampers (VCD), and non-return backdraft shutters"
        ]
      },
      {
        title: "Ventilation & Specialty Air Quality",
        items: [
          "Industrial exhaust fan systems for carparks, technical plant rooms, and manufacturing bays",
          "Commercial kitchen hood extract systems with inline Ecology units for grease and odor capture",
          "Dedicated outdoor air systems with HEPA and secondary carbon filtration for medical spaces",
          "Calibrated air volume balancing using digital anemometers and hood balometers"
        ]
      }
    ],
    regulations: ["Abu Dhabi International Energy Conservation Code", "Estidama Pearl Building Rating System Requirements", "ASHRAE Standards 62.1 & 90.1", "SMACNA Duct Construction Standards"],
    industryApplications: ["Commercial Offices", "Food & Beverage Production", "Retail Stores & Supermarkets", "Pharmaceutical Warehouses", "Residential Developments"],
    faqs: [
      {
        question: "How do you prevent duct condensation in high-humidity UAE conditions?",
        answer: "We strictly apply closed-cell elastomeric insulation of calculated thickness with zero-permeability vapor barriers, ensuring all joints are sealed and thermal bridging is eliminated at all hangers and duct penetrations."
      },
      {
        question: "Do you offer air balancing and commissioning certificates for HVAC handovers?",
        answer: "Yes. Our engineers perform Testing, Adjusting, and Balancing (TAB) across all branch ducts, diffusers, and water lines, providing certified balancing logs for authority and client review."
      }
    ]
  },
  {
    number: "05",
    id: "security",
    slug: "security",
    title: "Security & Surveillance Systems",
    shortTitle: "Security & Surveillance",
    category: "Electronic Security",
    tagline: "Protocolled IP-CCTV, Access Control, and Physical Perimeter Security Solutions",
    description: "Operational continuity and asset protection require dependable physical security. Al Manar Tech installs compliant IP video surveillance, biometric access control, automated vehicle barrier systems, and centralized security monitoring infrastructure tailored to Abu Dhabi facility standards.",
    icon: "camera",
    heroImage: "/images/original/Emirates-NBD-Bank.jpeg",
    specs: [
      { label: "Video Standards", value: "Ultra-HD IP / ONVIF Compliant" },
      { label: "Storage Archival", value: "RAID NVR / SAN Storage" },
      { label: "Biometrics", value: "Multi-Spectral Face / RFID" },
      { label: "Perimeter", value: "ANPR / Motorized Barriers" }
    ],
    technicalHighlights: [
      "High-definition IP surveillance cameras (dome, bullet, PTZ, panoramic 360°, thermal)",
      "Network Video Recorders (NVR) and enterprise Storage Area Networks (SAN) with RAID redundancy",
      "Biometric facial recognition, contactless card readers, and optical turnstile systems",
      "Automatic Number Plate Recognition (ANPR) and motorized vehicle barrier gates",
      "Intrusion alarm systems with infrared dual-tech PIR and microwave perimeter beams",
      "Security control room workstations, multi-display video walls, and matrix management"
    ],
    detailedScope: [
      {
        title: "IP Video Surveillance (CCTV)",
        items: [
          "Camera placement engineering eliminating blind spots at entry points, perimeters, and corridors",
          "Ultra-low light, wide dynamic range (WDR), and infrared night vision capability",
          "Bandwidth and storage calculations ensuring required archival retention periods",
          "Failover server redundancy and encrypted cybersecurity-hardened network streams"
        ]
      },
      {
        title: "Access Control & Time Attendance",
        items: [
          "Enterprise multi-door controllers with TCP/IP network interfaces and battery backup",
          "Biometric fingerprint, multi-spectral facial recognition, and mobile NFC credentials",
          "Heavy-duty electromagnetic locks, magnetic shear locks, and architectural drop bolts",
          "Emergency break-glass units and automated release upon fire alarm signal trigger"
        ]
      },
      {
        title: "Perimeter & Vehicle Access Management",
        items: [
          "High-speed motorized boom barriers with loop detectors and infrared safety beams",
          "Integrated UHF RFID long-range vehicle tags for seamless tenant entry",
          "License plate recognition (ANPR) cameras with automatic gate trigger algorithms",
          "Full-height and waist-height turnstiles for controlled personnel access in commercial buildings"
        ]
      }
    ],
    regulations: ["Abu Dhabi Monitoring & Control Centre (MCC) Guidelines", "SIRA / UAE Federal Security Standards", "ONVIF Interoperability Specifications", "ISO 27001 Physical Security Controls"],
    industryApplications: ["Corporate Headquarters", "Industrial Compounds & Yards", "Banking Branches", "Retail Malls", "Residential Gated Communities"],
    faqs: [
      {
        question: "Can your security systems be integrated with fire alarm and building management?",
        answer: "Yes. Our access control controllers are configured with dry-contact fire alarm trigger inputs that instantly and safely unlock all egress paths upon an emergency event."
      },
      {
        question: "Do you support remote monitoring and multi-site surveillance management?",
        answer: "Yes. We configure secure VPN-based remote client viewing on workstations, tablets, and authorized mobile devices with multi-tiered user privileges and detailed audit logging."
      }
    ]
  },
  {
    number: "06",
    id: "facility-maintenance",
    slug: "facility-maintenance",
    title: "Facility Maintenance & Annual Contracts",
    shortTitle: "Facility Maintenance",
    category: "Lifecycle Support",
    tagline: "Planned Preventive Maintenance (PPM) and Rapid Breakdown Response for Infrastructure Longevity",
    description: "Installed infrastructure represents a major capital investment that demands disciplined ongoing care. Al Manar Tech provides structured Annual Maintenance Contracts (AMC), predictive thermal thermography, 24/7 on-call emergency response, and scheduled servicing across electromechanical and HVAC assets.",
    icon: "wrench",
    heroImage: "/images/original/Yas-Water-World-Miral.jpeg",
    specs: [
      { label: "Response Time", value: "Guaranteed SLA / 24/7" },
      { label: "Inspections", value: "FLIR Thermal Thermography" },
      { label: "Contracts", value: "Quarterly / Bi-Annual AMC" },
      { label: "Logbooks", value: "Digital Preventive Reports" }
    ],
    technicalHighlights: [
      "Customized Annual Maintenance Contracts (AMC) with guaranteed Service Level Agreements (SLA)",
      "Scheduled Planned Preventive Maintenance (PPM) checklists executed by certified technicians",
      "Infrared thermographic inspections of electrical switchgear to preempt thermal faults",
      "24/7 on-call emergency breakdown response for mission-critical client facilities",
      "Comprehensive maintenance logs, equipment health audits, and replacement forecasting",
      "Comprehensive statutory and regulatory safety re-certifications"
    ],
    detailedScope: [
      {
        title: "Electromechanical PPM Program",
        items: [
          "Routine torque checking of busbar joints and breaker lugs to prevent hot spots",
          "Cleaning, contact inspection, and trip mechanism testing of air circuit breakers (ACB)",
          "Piping pressure checks, pump seal lubrications, and vibration frequency analysis",
          "Grounding pit electrode resistance verification to preserve electrical safety"
        ]
      },
      {
        title: "HVAC Servicing & Performance Optimization",
        items: [
          "Chemical cleaning and pressure washing of condenser coils and AHU evaporator coils",
          "Deep sanitization and replacement of air filters (G4, F7, and HEPA where installed)",
          "Motor bearing lubrication, belt tensioning, and dynamic alignment verification",
          "Refrigerant leak detection, operating suction/discharge pressure analysis, and delta-T logging"
        ]
      },
      {
        title: "Audit & Emergency Breakdown Response",
        items: [
          "Rapid mobilization dispatch teams stationed in Abu Dhabi and Musaffah for emergency calls",
          "Comprehensive condition reports outlining degraded components prior to sudden failure",
          "Critical spares management ensuring rapid turnaround on high-wear electromechanical components",
          "Energy efficiency audits identifying wasteful consumption in pumping and cooling plant"
        ]
      }
    ],
    regulations: ["ADDC Safety Regulations for Electrical Installations", "ASHRAE Standard 180 (Inspection and Maintenance of Commercial HVAC)", "Abu Dhabi Municipality Public Safety Directives"],
    industryApplications: ["Manufacturing Plants", "Corporate Office Complexes", "Supermarkets & Retail Chains", "Residential Compounds", "Dining & Hospitality Venues"],
    faqs: [
      {
        question: "What is included in an Al Manar Tech Annual Maintenance Contract (AMC)?",
        answer: "Our AMC packages include scheduled preventive maintenance visits (monthly, quarterly, or bi-annually), comprehensive electrical thermal imaging, filter cleanings, priority 24/7 emergency repair response, and detailed technical inspection reports."
      },
      {
        question: "How quickly does your team respond to an urgent breakdown?",
        answer: "For contract clients with emergency SLA agreements in Abu Dhabi and Musaffah, our dedicated technician dispatch team mobilizes rapidly to diagnose and stabilize system failures."
      }
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    number: "01",
    id: "industrial",
    name: "Industrial & Manufacturing",
    tagline: "Heavy-duty electrical, ventilation, and life safety systems for harsh industrial operations",
    description: "Operating in Abu Dhabi's industrial centers like Musaffah, ICAD, and KIZAD demands electromechanical infrastructure that withstands high ambient temperatures, airborne dust, and severe power duty cycles.",
    challenges: [
      "Heavy inductive motor loads causing electrical harmonic distortion and power factor dips",
      "Extreme heat buildup in manufacturing bays requiring high-volume air exchange",
      "High fire risk requiring specialized beam detection and hazardous area equipment"
    ],
    solutions: [
      "Engineered MDB and capacitor bank installations for stable power factor",
      "High-capacity industrial exhaust, spot cooling, and ductwork systems",
      "Optical beam smoke detection and integrated hazard shutdown controls"
    ],
    servicesOffered: ["MEP Contracting", "HVAC Systems", "Fire Detection", "Facility Maintenance"],
    image: "/images/original/electrical-team-abu-dhabi.png"
  },
  {
    number: "02",
    id: "commercial",
    name: "Commercial & Corporate",
    tagline: "Refined aesthetic MEP, smart building connectivity, and acoustic comfort",
    description: "Modern commercial spaces require seamless electromechanical engineering that blends into sophisticated interior architecture while delivering uninterrupted power, high-speed data, and balanced thermal comfort.",
    challenges: [
      "Demanding acoustic criteria requiring silent HVAC operation and low diffuser noise",
      "Dense occupant data demands requiring certified structured cabling",
      "Flexible tenant zoning with individual sub-metering and lighting automation"
    ],
    solutions: [
      "Acoustically lined ductwork, variable air volume (VAV) controls, and low-dB fan coils",
      "Certified Cat6A and fiber optic backbones with centralized rack containment",
      "Smart DALI architectural lighting controls and sub-distribution panels"
    ],
    servicesOffered: ["MEP Contracting", "IT & Telecom", "Security & Surveillance", "HVAC Systems"],
    image: "/images/original/Al-Dar-Academies-HQ.jpeg"
  },
  {
    number: "03",
    id: "retail",
    name: "Retail & Shopping Malls",
    tagline: "High-impact retail illumination, fast-track fit-out execution, and life safety",
    description: "Mall tenancies and flagship showrooms operate under rigid mall management fit-out criteria, strict working hours, and tight handover deadlines requiring coordinated MEP execution.",
    challenges: [
      "Strict mall fit-out guidelines, inspection milestones, and utility connection permits",
      "High lighting heat loads requiring calculated thermal dissipation",
      "Loss prevention and discrete electronic surveillance coverage"
    ],
    solutions: [
      "Fast-track shop drawings and municipal/mall management approval coordination",
      "Track lighting, architectural downlights, and secondary HVAC distribution",
      "High-resolution dome CCTV cameras and EAS security interfaces"
    ],
    servicesOffered: ["MEP Contracting", "HVAC Systems", "Security & Surveillance", "Fire Detection"],
    image: "/images/original/Puma-Outlet-Showroom.jpeg"
  },
  {
    number: "04",
    id: "healthcare",
    name: "Healthcare & Clean Rooms",
    tagline: "Clean power continuity, hygienic air filtration, and stringent regulatory compliance",
    description: "Medical centers, dental clinics, and laboratories require specialized engineering where power interruption or airborne contamination can directly compromise patient well-being.",
    challenges: [
      "Critical medical equipment requiring isolated clean power and zero voltage surges",
      "Strict airborne infection control and positive/negative pressure room isolation",
      "Compliance with Department of Health (DoH) engineering standards"
    ],
    solutions: [
      "Medical-grade isolation panels and dedicated UPS power distribution",
      "HEPA filtration modules and precision pressure-controlled ventilation",
      "Access-controlled pharmacy and laboratory entry security"
    ],
    servicesOffered: ["MEP Contracting", "HVAC Systems", "IT & Telecom", "Security & Surveillance"],
    image: "/images/original/fire-safety-install-abu-dhabi.png"
  },
  {
    number: "05",
    id: "food-beverage",
    name: "Food & Beverage",
    tagline: "Hygiene-compliant drainage, kitchen exhaust ecology, and heavy electrical loads",
    description: "Restaurants, bakeries, and food preparation facilities combine demanding thermal kitchen loads, grease extraction standards, and strict health and hygiene regulations.",
    challenges: [
      "Heavy grease and smoke emissions requiring municipal-grade exhaust treatment",
      "Grease-laden wastewater requiring calibrated grease interceptors",
      "High electrical capacity for commercial ovens, fryers, and blast chillers"
    ],
    solutions: [
      "Ecology unit installations with electrostatic precipitators and carbon filters",
      "Stainless steel and HDPE grease drainage piping compliant with Abu Dhabi standards",
      "Dedicated commercial kitchen distribution panels with interlocked gas solenoid shut-off"
    ],
    servicesOffered: ["MEP Contracting", "HVAC Systems", "Fire Detection", "Facility Maintenance"],
    image: "/images/original/Katrina-Sweets.jpeg"
  },
  {
    number: "06",
    id: "hospitality",
    name: "Hospitality & Leisure",
    tagline: "High-capacity public entertainment power, architectural lighting, and rapid maintenance",
    description: "Theme parks, hotels, and entertainment complexes demand continuous technical reliability with zero tolerance for visible equipment failures in guest spaces.",
    challenges: [
      "High instantaneous electrical surges from rides, shows, and aquatic pumps",
      "Stringent guest safety, public address life safety, and discrete monitoring",
      "Rigid night-shift maintenance windows to avoid daytime disruption"
    ],
    solutions: [
      "Robust electrical power distribution and redundant backup transfer switches",
      "Centralized emergency sound systems and integrated CCTV coverage",
      "Dedicated on-call maintenance teams stationed for immediate resolution"
    ],
    servicesOffered: ["MEP Contracting", "Facility Maintenance", "Fire Detection", "Security"],
    image: "/images/original/Yas-Water-World-Miral.jpeg"
  },
  {
    number: "07",
    id: "institutional",
    name: "Institutional & Sports",
    tagline: "High-bay sports hall illumination, large-scale ventilation, and durable power distribution",
    description: "Sports federations, training centers, and government institutions require durable electromechanical systems capable of accommodating large crowds and high-intensity lighting.",
    challenges: [
      "High ceiling clearance requiring specialized acoustic beam detectors and lighting access",
      "Rapid temperature fluctuations during high occupancy sports events",
      "Sturdy mechanical protection against impact in sports environments"
    ],
    solutions: [
      "High-bay LED arena lighting with calibrated lux levels for broadcast standards",
      "High-volume air distribution with silent air delivery ducts",
      "Protective cage containment for all fire and security devices"
    ],
    servicesOffered: ["MEP Contracting", "HVAC Systems", "Fire Detection", "IT & Telecom"],
    image: "/images/original/Emirates-Judo-and-Wrestling-Federation.jpeg"
  },
  {
    number: "08",
    id: "residential",
    name: "Residential Developments",
    tagline: "Energy-efficient home comfort, quiet air conditioning, and reliable domestic plumbing",
    description: "From luxury private villas to multi-unit residential communities in Abu Dhabi, we provide turnkey electromechanical engineering that delivers whisper-quiet cooling and low utility consumption.",
    challenges: [
      "Minimizing electricity bills during peak summer months through efficient cooling",
      "Ensuring constant water pressure across multiple floors and fixture groups",
      "Smart security, automated gates, and video intercom integration"
    ],
    solutions: [
      "High-efficiency VRF inverter cooling systems and insulated ductwork",
      "Variable-speed booster pump sets and reliable solar/electric water heating",
      "Perimeter IP cameras, video entry stations, and automated gate automation"
    ],
    servicesOffered: ["MEP Contracting", "HVAC Systems", "Security & Surveillance", "Facility Maintenance"],
    image: "/images/original/City-Challenge.jpeg"
  }
];

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: "aldar-academies-hq",
    title: "Aldar Academies Headquarters",
    client: "Aldar Academies",
    category: "Commercial & Corporate",
    categorySlug: "commercial",
    location: "Abu Dhabi, UAE",
    scopeSummary: "Turnkey electrical infrastructure, high-density Cat6A data cabling, server room containment, access control, and architectural lighting for executive headquarters.",
    image: "/images/original/Al-Dar-Academies-HQ.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Corporate", "IT & Telecom", "Electrical"],
    featured: true
  },
  {
    id: "yas-waterworld",
    title: "Yas Waterworld (Miral Leisure)",
    client: "Miral Asset Management",
    category: "Hospitality & Leisure",
    categorySlug: "hospitality",
    location: "Yas Island, Abu Dhabi",
    scopeSummary: "Specialized electrical engineering, power feeds, control cabling, and technical maintenance works for world-renowned aquatic leisure destination.",
    image: "/images/original/Yas-Water-World-Miral.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Hospitality", "MEP", "Maintenance"]
  },
  {
    id: "puma-outlet-showroom",
    title: "Puma Flagship Outlet Showroom",
    client: "Puma Middle East",
    category: "Retail & Showrooms",
    categorySlug: "retail",
    location: "Abu Dhabi, UAE",
    scopeSummary: "Complete retail MEP installation: architectural track lighting, low-profile HVAC distribution, Cat6 POS cabling, and integrated EAS security systems.",
    image: "/images/original/Puma-Outlet-Showroom.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Retail", "MEP", "HVAC"]
  },
  {
    id: "emirates-nbd-bank",
    title: "Emirates NBD Bank Branch",
    client: "Emirates NBD",
    category: "Commercial & Corporate",
    categorySlug: "commercial",
    location: "Abu Dhabi, UAE",
    scopeSummary: "Secure banking facility electromechanical fit-out, dedicated UPS clean power network, structured telecommunication cabling, and CCTV surveillance integration.",
    image: "/images/original/Emirates-NBD-Bank.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Corporate", "Security", "IT & Telecom"]
  },
  {
    id: "katrina-sweets",
    title: "Katrina Sweets Production Facility",
    client: "Katrina Sweets & Confectionery",
    category: "Food & Beverage",
    categorySlug: "food-beverage",
    location: "Abu Dhabi, UAE",
    scopeSummary: "Commercial bakery electromechanical power distribution, specialized kitchen exhaust ventilation, grease drainage, and cold-room climate control.",
    image: "/images/original/Katrina-Sweets.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Food & Beverage", "HVAC", "Plumbing"]
  },
  {
    id: "emirates-judo-federation",
    title: "Emirates Judo & Wrestling Federation",
    client: "Emirates Judo & Wrestling Federation",
    category: "Institutional & Sports",
    categorySlug: "institutional",
    location: "Abu Dhabi, UAE",
    scopeSummary: "High-bay sports hall illumination, large-scale air conditioning distribution, life safety fire alarm systems, and public address integration.",
    image: "/images/original/Emirates-Judo-and-Wrestling-Federation.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Institutional", "MEP", "Fire Safety"]
  },
  {
    id: "city-challenge",
    title: "City Challenge Entertainment Center",
    client: "City Challenge UAE",
    category: "Hospitality & Leisure",
    categorySlug: "hospitality",
    location: "Abu Dhabi, UAE",
    scopeSummary: "Electromechanical power distribution for interactive electronic attractions, emergency lighting, primary and secondary DB installations, and HVAC balance.",
    image: "/images/original/City-Challenge.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Hospitality", "MEP", "Lighting"]
  },
  {
    id: "bayara-world",
    title: "Bayara World — Mushrif Mall",
    client: "Bayara World",
    category: "Retail & Showrooms",
    categorySlug: "retail",
    location: "Mushrif Mall, Abu Dhabi",
    scopeSummary: "Retail unit MEP fit-out conforming to Mushrif Mall management specifications: electrical panels, display lighting, branch ductwork, and drainage ties.",
    image: "/images/original/Bayara-World-mushrif-mall.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Retail", "MEP", "HVAC"]
  },
  {
    id: "la-molina",
    title: "La Molina Luxury Chocolaterie",
    client: "La Molina UAE",
    category: "Retail & Showrooms",
    categorySlug: "retail",
    location: "Abu Dhabi, UAE",
    scopeSummary: "Precision climate and humidity control installation for gourmet confectionery storage and display, recessed architectural lighting, and power feeds.",
    image: "/images/original/La-Molina.jpeg",
    verified: true,
    completionYear: "Completed",
    sectors: ["Retail", "HVAC", "Climate Control"]
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    phase: "PHASE_01 // DISCOVERY",
    title: "Consultation & Engineering Assessment",
    summary: "Thorough site evaluation, load requirement calculation, and client specification review.",
    details: "Our senior engineering team conducts on-site surveys, assesses power/cooling demands, inspects existing infrastructure, and reviews authority jurisdiction parameters (ADDC, ADM, Civil Defence). We provide a detailed technical feasibility review and competitive commercial quotation."
  },
  {
    step: "02",
    phase: "PHASE_02 // REGULATORY",
    title: "Design, Approvals & Authority Engineering",
    summary: "Precision engineering drawings, authority documentation, procurement, and project timelines.",
    details: "We draft detailed shop drawings, load schedules, single-line diagrams (SLD), and equipment submittals. Our team coordinates formal authority approvals with Abu Dhabi Distribution Company and Municipality while establishing rigorous milestone schedules."
  },
  {
    step: "03",
    phase: "PHASE_03 // EXECUTION",
    title: "Certified Technical Execution",
    summary: "Methodical on-site installation by licensed engineers and technicians adhering to UAE codes.",
    details: "All field installations are carried out under dedicated project manager supervision using certified materials. We enforce stringent quality control checklists, safety protocols (EHS), and continuous coordination with main contractors and architects."
  },
  {
    step: "04",
    phase: "PHASE_04 // COMMISSIONING",
    title: "Commissioning, Handover & Lifecycle Maintenance",
    summary: "Stringent testing and balancing, authority inspection sign-off, operation manuals, and AMC plans.",
    details: "We execute pre-commissioning Megger tests, TAB balancing, and system interlocks prior to scheduling authority inspection. Upon energization and handover, we furnish As-Built drawings, O&M manuals, and tailored Planned Preventive Maintenance contracts."
  }
];

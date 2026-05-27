const users = {
  shawn: {
    name: "Shawn",
    role: "Manager",
    avatar: "S",
    avatarImage: "assets/avatar-shawn.svg",
    profileLabel: "Manager profile",
    focus: "Scheduling, service flow, dashboard buildout, and daily decisions.",
    workspace: "Operations management",
  },
  herlyn: {
    name: "Herlyn",
    role: "Office",
    avatar: "H",
    avatarImage: "assets/avatar-herlyn.svg",
    profileLabel: "Office profile",
    focus: "Customer follow-up, quote handoffs, showroom details, and project nudges.",
    workspace: "Customer care",
  },
  keith: {
    name: "Keith",
    role: "Owner",
    avatar: "K",
    avatarImage: "assets/avatar-keith.svg",
    profileLabel: "Owner profile",
    focus: "Ownership decisions, staff accountability, customer trust, and business direction.",
    workspace: "Owner command",
  },
  diego: {
    name: "Diego",
    role: "Staff",
    avatar: "D",
    avatarImage: "assets/avatar-diego.svg",
    profileLabel: "Staff profile",
    focus: "Crew work, installs, moves, and field notes.",
    workspace: "Service crew",
  },
  mark: {
    name: "Mark",
    role: "Staff",
    avatar: "M",
    avatarImage: "assets/avatar-mark.svg",
    profileLabel: "Staff profile",
    focus: "Parts, warehouse details, and service prep.",
    workspace: "Warehouse",
  },
};

const defaultServices = [
  makeService({ itemNumber: "14526", sku: "1841", name: "DISMANTLE 8'", price: 230 }),
  makeService({ itemNumber: "14476", sku: "1842", name: "DISMANTLE 9'", price: 250 }),
  makeService({ itemNumber: "14527", sku: "1843", name: "DISMANTLE 10'", price: 340 }),
  makeService({ itemNumber: "1844", sku: "1844", name: "DISMANTLE 12'", price: 500 }),
  makeService({ itemNumber: "14477", sku: "1845", name: "ASSEMBLE 8'", price: 280 }),
  makeService({ itemNumber: "14478", sku: "1846", name: "ASSEMBLE 9'", price: 300 }),
  makeService({ itemNumber: "14510", sku: "1847", name: "ASSEMBLE 10'", price: 450 }),
  makeService({ itemNumber: "14511", sku: "1848", name: "ASSEMBLE 12'/11'", price: 1000 }),
  makeService({ itemNumber: "18479", sku: "1849", name: "DISMANTLE & MOVE 8'", price: 350 }),
  makeService({ itemNumber: "14480", sku: "1850", name: "DISMANTLE & MOVE 9'", price: 380 }),
  makeService({ itemNumber: "14528", sku: "1851", name: "DISMANTLE & MOVE 10' NO STAIRS", price: 480 }),
  makeService({ itemNumber: "14529", sku: "1852", name: "DISMANTLE & MOVE 10' WITH STAIRS UP TO 30", price: 600 }),
  makeService({ itemNumber: "1853", sku: "1853", name: "DISMANTLE & MOVE 12' NO STAIRS", price: 750 }),
  makeService({ itemNumber: "14481", sku: "1854", name: "DISMANTLE & MOVE 12' WITH STAIRS UP TO 30", price: 1000 }),
  makeService({ itemNumber: "", sku: "", name: "MOVE & ASSEMBLE 8' with stairs", price: 400 }),
  makeService({ itemNumber: "14482", sku: "1855", name: "MOVE & ASSEMBLE 8'", price: 380 }),
  makeService({ itemNumber: "14483", sku: "1856", name: "MOVE & ASSEMBLE 9'", price: 440 }),
  makeService({ itemNumber: "14512", sku: "1857", name: "MOVE & ASSEMBLE 10' NO STAIRS", price: 550 }),
  makeService({ itemNumber: "14513", sku: "1858", name: "MOVE & ASSEMBLE 10' WITH STAIRS TO 30", price: 750 }),
  makeService({ itemNumber: "14514", sku: "1859", name: "MOVE & ASSEMBLE 12' NO STAIRS", price: 850 }),
  makeService({ itemNumber: "14515", sku: "1860", name: "MOVE & ASSEMBLE 12' WITH STAIRS TO 30", price: 1200 }),
  makeService({ itemNumber: "14484", sku: "1861", name: "DMI 8'", price: 450 }),
  makeService({ itemNumber: "14419", sku: "", name: "DMI 8' w/ stairs", price: null }),
  makeService({ itemNumber: "14485", sku: "1862", name: "DMI 9'", price: 490 }),
  makeService({ itemNumber: "", sku: "", name: "DMI 9' w/ stairs", price: 520 }),
  makeService({ itemNumber: "14486", sku: "1863", name: "DMI 10' NO STAIRS", price: 800 }),
  makeService({ itemNumber: "14533", sku: "1864", name: "DMI 10 ' WITH STAIRS TO 30", price: 950 }),
  makeService({ itemNumber: "1865", sku: "1865", name: "DMI 12' NO STAIRS", price: 1200 }),
  makeService({ itemNumber: "14535", sku: "1866", name: "DMI 12' WITH STAIRS TO 30", price: 1500 }),
  makeService({ itemNumber: "14536", sku: "1867", name: "DMI 8' ONE PC SLATE NO STAIRS", price: 550 }),
  makeService({ itemNumber: "14537", sku: "1868", name: "DMI 8' ONE PC SLATE WITH STAIRS", price: 850 }),
  makeService({ itemNumber: "14538", sku: "1869", name: "DMI 8' SAME LOCATION", price: 350 }),
  makeService({ itemNumber: "14539", sku: "1870", name: "DMI 9' SAME LOCATION", price: 390 }),
  makeService({ itemNumber: "1871", sku: "1871", name: "DISMANTLE & CRATE SLATE 8'", price: null }),
  makeService({ itemNumber: "14487", sku: "1872", name: "DISMANTLE & CRATE SLATE 9'", price: null }),
  makeService({ itemNumber: "14530", sku: "1873", name: "DISMANTLE & CRATE SLATE 9'", price: null }),
  makeService({ itemNumber: "14531", sku: "1874", name: "DISMANTLE & CRATE SLATE 12'", price: null }),
  makeService({ itemNumber: "14488", sku: "1875", name: "MOVE DOLLY LEVEL SAME ROOM 8'", price: 220 }),
  makeService({ itemNumber: "14489", sku: "1876", name: "MOVE DOLLY LEVEL SAME ROOM 9'", price: 260 }),
  makeService({ itemNumber: "14548", sku: "1877", name: "MOVE DOLLY LEVEL SAME ROOM 10'", price: 500 }),
  makeService({ itemNumber: "14490", sku: "1878", name: "MOVE DOLLY LEVEL SAME ROOM 12'", price: 750 }),
  makeService({ itemNumber: "1879", sku: "1879", name: "LEVEL ONLY 8'", price: 150 }),
  makeService({ itemNumber: "1880", sku: "1880", name: "LEVEL ONLY 9'", price: 150 }),
  makeService({ itemNumber: "1881", sku: "1881", name: "LEVEL ONLY 10'", price: 200 }),
  makeService({ itemNumber: "", sku: "1882", name: "LEVEL ONLY 12'", price: 225 }),
  makeService({ itemNumber: "14491", sku: "1883", name: "RECOVER LABOUR 8'", price: 250 }),
  makeService({ itemNumber: "14492", sku: "1884", name: "RECOVER LABOUR 9'", price: 270 }),
  makeService({ itemNumber: "1885", sku: "1885", name: "RECOVER LABOUR 10'", price: 310 }),
  makeService({ itemNumber: "1886", sku: "1886", name: "RECOVER LABOUR 12'", price: 460 }),
  makeService({ itemNumber: "1887", sku: "1887", name: "LABOUR BED ONLY 8'", price: 190 }),
  makeService({ itemNumber: "1888", sku: "1888", name: "LABOUR BED ONLY 9'", price: 200 }),
  makeService({ itemNumber: "1889", sku: "1889", name: "LABOUR BED ONLY 10'", price: 220 }),
  makeService({ itemNumber: "1890", sku: "1890", name: "LABOUR BED ONLY 12'", price: 360 }),
  makeService({ itemNumber: "14493", sku: "1891", name: "LABOUR RAILS ONLY 8'", price: 190 }),
  makeService({ itemNumber: "14494", sku: "1892", name: "LABOUR RAILS ONLY 9'", price: 210 }),
  makeService({ itemNumber: "14495", sku: "1893", name: "LABOUR RAILS ONLY 10'", price: 280 }),
  makeService({ itemNumber: "14546", sku: "1894", name: "LABOUR RAILS ONLY 12'", price: 360 }),
  makeService({ itemNumber: "14496", sku: "1895", name: "RE RUBBER LABOUR 8' POOL", price: 410 }),
  makeService({ itemNumber: "11497", sku: "1896", name: "RE RUBBER LABOUR 9' POOL", price: 450 }),
  makeService({ itemNumber: "", sku: "", name: "RE RUBBER LABOUR 8' SNOOKER", price: 500 }),
  makeService({ itemNumber: "", sku: "", name: "RE RUBBER LABOUR 9' SNOOKER", price: 600 }),
  makeService({ itemNumber: "14498", sku: "1897", name: "RE RUBBER LABOUR 10' SNOOKER", price: 850 }),
  makeService({ itemNumber: "14499", sku: "1898", name: "RE RUBBER LABOUR 12' SNOOKER", price: 900 }),
];

const crews = [
  { id: "crew-a", name: "Crew A", lead: "Miguel", area: "North / Central" },
  { id: "crew-b", name: "Crew B", lead: "Tara", area: "West / Coastal" },
  { id: "crew-c", name: "Crew C", lead: "Jordan", area: "South / East" },
];

const defaultClients = [
  { id: "c1", name: "Avery Johnson", phone: "(555) 012-4410", email: "avery@example.com", address: "1842 Fairway Dr" },
  { id: "c2", name: "Morgan Lee", phone: "(555) 017-2038", email: "morgan@example.com", address: "9034 Stonebridge Ave" },
  { id: "c3", name: "Riley Patel", phone: "(555) 014-8820", email: "riley@example.com", address: "77 Oak Room Ln" },
  { id: "c4", name: "Casey Martinez", phone: "(555) 011-7788", email: "casey@example.com", address: "420 Billiard Ct" },
  { id: "c5", name: "Jamie Brooks", phone: "(555) 016-1901", email: "jamie@example.com", address: "16 Slate Ridge Rd" },
];

const defaultEmployeeProfiles = [
  {
    userKey: "shawn",
    title: "Operations manager",
    department: "Operations",
    managerKey: "keith",
    employmentType: "Full-time",
    workLocation: "Office / field",
    crewId: "crew-a",
    hireDate: "2021-04-12",
    status: "active",
    timeOffHours: 80,
    usedTimeOffHours: 8,
    permissions: ["Scheduling", "Clients", "Services", "Team admin", "Reports"],
  },
  {
    userKey: "herlyn",
    title: "Office coordinator",
    department: "Office",
    managerKey: "shawn",
    employmentType: "Full-time",
    workLocation: "Showroom",
    crewId: "crew-b",
    hireDate: "2022-02-07",
    status: "active",
    timeOffHours: 72,
    usedTimeOffHours: 16,
    permissions: ["Clients", "Tickets", "Notes", "Projects"],
  },
  {
    userKey: "keith",
    title: "Owner",
    department: "Leadership",
    managerKey: "",
    employmentType: "Owner",
    workLocation: "Office / remote",
    crewId: "crew-a",
    hireDate: "2017-01-01",
    status: "active",
    timeOffHours: 120,
    usedTimeOffHours: 0,
    permissions: ["Owner", "Security", "Payroll", "All modules"],
  },
  {
    userKey: "mark",
    title: "Installer",
    department: "Service",
    managerKey: "shawn",
    employmentType: "Full-time",
    workLocation: "Field",
    crewId: "crew-a",
    hireDate: "2020-09-15",
    status: "active",
    timeOffHours: 64,
    usedTimeOffHours: 24,
    permissions: ["Open Jobs", "Calendar", "Tickets", "Chat"],
  },
  {
    userKey: "diego",
    title: "Service support",
    department: "Service",
    managerKey: "shawn",
    employmentType: "Part-time",
    workLocation: "Field / warehouse",
    crewId: "crew-c",
    hireDate: "2023-06-01",
    status: "active",
    timeOffHours: 40,
    usedTimeOffHours: 4,
    permissions: ["Open Jobs", "Tickets", "Chat", "Notes"],
  },
];

const defaultAccountSecurity = Object.fromEntries(Object.keys(users).map((userKey) => [userKey, {
  status: "active",
  passwordUpdatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (userKey === "keith" ? 12 : 38)).toISOString(),
  mfaEnabled: ["keith", "shawn"].includes(userKey),
  passkeyEnabled: userKey === "keith",
  requirePasswordReset: true,
  sessionTimeoutMinutes: userKey === "keith" ? 15 : 30,
  failedAttempts: 0,
  lastLoginAt: "",
}]));

const timeOffTypeLabels = {
  vacation: "Vacation",
  sick: "Sick time",
  personal: "Personal day",
  appointment: "Appointment",
  unpaid: "Unpaid time",
};

const storageKey = "home-billiards-service-schedule-v1";
const serviceStorageKey = "home-billiards-services-v1";
const clientStorageKey = "home-billiards-clients-v1";
const serviceTicketStorageKey = "home-billiards-service-tickets-v1";
const cueRepairStorageKey = "home-billiards-cue-repairs-v1";
const customOrderStorageKey = "home-billiards-custom-orders-v1";
const employeeStorageKey = "home-billiards-employee-profiles-v1";
const accountSecurityStorageKey = "home-billiards-account-security-v1";
const chatStorageKey = "home-billiards-staff-chat-v3";
const typingStorageKey = "home-billiards-chat-typing-v1";
const projectStorageKey = "home-billiards-projects-v1";
const projectAutomationStorageKey = "home-billiards-project-automations-v1";
const betaFeedbackStorageKey = "home-billiards-beta-feedback-v1";
const noteStorageKey = "home-billiards-notes-v1";
const navGroupStorageKey = "home-billiards-nav-groups-v1";
const backendClientId = (crypto?.randomUUID?.() || createId()).replace(/[^a-zA-Z0-9-]/g, "");
const backendStateKeys = [
  "appointments",
  "services",
  "clients",
  "serviceTickets",
  "cueRepairs",
  "customOrders",
  "employeeProfiles",
  "accountSecurity",
  "chatMessages",
  "projects",
  "projectAutomations",
  "betaFeedback",
  "notes",
];
const offlineAccountPins = {
  shawn: "1234",
  keith: "1234",
  herlyn: "1234",
  diego: "1234",
  mark: "1234",
};
let backendReady = false;
let backendEventSource = null;
let applyingBackendState = false;
const businessProfile = {
  city: "Vancouver",
  province: "British Columbia",
  country: "Canada",
  taxes: {
    pst: { label: "PST", rate: 0.07 },
    gst: { label: "GST", rate: 0.05 },
  },
};
const businessWeather = {
  latitude: 49.2827,
  longitude: -123.1207,
  label: `${businessProfile.city}, BC`,
};
const statusLabels = {
  booked: "Booked",
  confirmed: "Confirmed",
  payment_due: "Waiting payment",
  complete: "Complete",
  hold: "Hold",
};

const calendarTypeLabels = {
  job: "Actual job",
  unbillable: "Unbillable task",
  event: "Team event",
  quote: "Quote assessment",
  reminder: "Reminder",
};

const calendarTypeShortLabels = {
  job: "Job",
  unbillable: "Unbillable",
  event: "Event",
  quote: "Quote",
  reminder: "Reminder",
};

const calendarTypeOrder = ["all", "job", "quote", "unbillable", "event", "reminder"];
const scheduleTimeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

const projectStatusLabels = {
  suggested: "Suggested",
  queued: "Queued",
  rolling: "Rolling",
  parked: "Parked",
  done: "Done",
};

const projectStatusOrder = ["all", "rolling", "suggested", "queued", "parked", "done"];
const projectWorkflowStatuses = ["suggested", "queued", "rolling", "parked", "done"];
const projectScopeLabels = {
  company: "Home Billiards",
  my: "My Work",
};
const projectCompanyViewLabels = {
  board: "Board",
  workflow: "Workflow",
  everything: "Everything",
  timeline: "Timeline",
  reports: "Reports",
};
const devUserKeys = ["shawn", "diego"];
const betaFeedbackTypeLabels = {
  bug: "Bug",
  feature: "Feature",
};
const betaFeedbackStatusLabels = {
  open: "Open",
  reviewing: "Reviewing",
  accepted: "Accepted",
  rejected: "Rejected",
  ticketed: "Ticketed",
  in_progress: "In progress",
  resolved: "Resolved",
};
const betaFeedbackStatusOrder = ["all", "open", "reviewing", "ticketed", "accepted", "in_progress", "resolved", "rejected"];
const projectContributorStatusLabels = {
  not_started: "Not started",
  active: "Active",
  blocked: "Blocked",
  done: "Done",
};
const projectLabelOptions = {
  ops: { label: "Ops", color: "green" },
  service: { label: "Service", color: "blue" },
  showroom: { label: "Showroom", color: "gold" },
  customer: { label: "Customer", color: "coral" },
  idea: { label: "Idea", color: "gray" },
};

const noteStatusLabels = {
  active: "Active",
  followup: "Follow-up",
  waiting: "Waiting",
  done: "Done",
  archived: "Archived",
};

const notePriorityLabels = {
  low: "Low",
  normal: "Normal",
  high: "High",
  urgent: "Urgent",
};

const noteStatusOrder = ["all", "active", "followup", "waiting", "done", "archived"];
const notePriorityOrder = ["all", "urgent", "high", "normal", "low"];
const noteColors = ["sun", "mint", "sky", "rose", "lavender"];

const ticketStatusLabels = {
  intake: "Intake",
  waiting_warranty: "Waiting warranty",
  warranty_approved: "Warranty approved",
  parts_ordered: "Parts ordered",
  scheduled: "Scheduled",
  resolved: "Resolved",
};

const ticketPriorityLabels = {
  low: "Low",
  normal: "Normal",
  high: "High",
  urgent: "Urgent",
};

const ticketStatusOrder = ["all", "intake", "waiting_warranty", "warranty_approved", "parts_ordered", "scheduled", "resolved"];

const cueRepairStatusLabels = {
  dropped_off: "Dropped off",
  in_queue: "In queue",
  waiting_pickup: "Waiting for pickup",
  picked_up: "Picked up",
};

const cueRepairStatusOrder = ["all", "dropped_off", "in_queue", "waiting_pickup", "picked_up"];
const cueRepairWorkflow = ["dropped_off", "in_queue", "waiting_pickup", "picked_up"];

const customOrderStatusLabels = {
  ordered: "Customer ordered",
  production: "Sent to production",
  production_done: "Finished production",
  shipped: "Shipped",
  arrived: "Arrived in Vancouver",
  install_booked: "Install booked",
};

const customOrderStatusOrder = ["all", "ordered", "production", "production_done", "shipped", "arrived", "install_booked"];
const customOrderWorkflow = ["ordered", "production", "production_done", "shipped", "arrived", "install_booked"];
const customOrderInstallReadyStatuses = ["shipped", "arrived", "install_booked"];

const staffStatuses = {
  shawn: "Scheduling",
  keith: "Available",
  herlyn: "With a customer",
  diego: "On route",
  mark: "Pulling parts",
};

const chatThreads = [
  {
    id: "all-staff",
    name: "All staff",
    label: "Company",
    description: "Daily updates, quick questions, and handoffs.",
    participants: ["shawn", "keith", "herlyn", "diego", "mark"],
  },
  {
    id: "service-desk",
    name: "Service desk",
    label: "Operations",
    description: "Install notes, repair details, and crew changes.",
    participants: ["shawn", "diego", "mark"],
  },
  {
    id: "sales-handoff",
    name: "Sales handoff",
    label: "Quotes",
    description: "Lead details, estimate requests, and customer follow-up.",
    participants: ["shawn", "keith", "herlyn"],
  },
];

const staffUserKeys = Object.keys(users);

const defaultProjects = [
  makeProject({
    title: "Showroom table refresh",
    ownerKey: "herlyn",
    status: "rolling",
    progress: 68,
    summary: "Pick the two tables that should get fresh felt and cleaner signage first.",
    nextStep: "Choose the felt colors and post a quick photo note.",
    updates: [
      makeProjectUpdate("herlyn", "Shortlisted the front two tables. Tournament blue is the early favorite.", -92),
      makeProjectUpdate("shawn", "Let us keep it simple: one fresh table, one photo, then decide the next move.", -51),
    ],
  }),
  makeProject({
    title: "Van restock checklist",
    ownerKey: "diego",
    status: "rolling",
    progress: 46,
    summary: "A tiny repeatable list so crews know what is loaded before they roll out.",
    nextStep: "Add the must-have rail tools and pocket liner items.",
    updates: [
      makeProjectUpdate("diego", "Added cushion kits, beeswax, staple refill, and extra hardware cups.", -73),
    ],
  }),
  makeProject({
    title: "Customer photo wall",
    ownerKey: "mark",
    status: "queued",
    progress: 18,
    summary: "Collect a few great before-and-after photos for the team and future quotes.",
    nextStep: "Ask crews to drop their best recent job photos in chat.",
    updates: [
      makeProjectUpdate("mark", "Found three clean install photos. Need one repair and one move job next.", -28),
    ],
  }),
  makeProject({
    title: "Saturday tune-up menu",
    ownerKey: "keith",
    status: "suggested",
    progress: 0,
    summary: "A relaxed mini-service idea for leveling, pocket checks, and quick felt care.",
    nextStep: "Decide whether this is a real offer or just a nice idea for later.",
    updates: [
      makeProjectUpdate("keith", "Might be a good slow-week filler without making the calendar weird.", -16),
    ],
  }),
];

const defaultNotes = [
  makeNote({
    title: "Avery install details",
    body: "Tournament blue felt is confirmed. Call on arrival and double-check the pocket liner before the crew leaves.",
    ownerKey: "shawn",
    status: "active",
    priority: "high",
    color: "sun",
    dueDate: toDateKey(new Date()),
    tags: ["install", "felt"],
    clientId: "c1",
  }),
  makeNote({
    title: "Van restock reminder",
    body: "Add rail bolts, staple refill, beeswax, and extra level shims before the weekend run.",
    ownerKey: "diego",
    status: "followup",
    priority: "normal",
    color: "mint",
    dueDate: toDateKey(addDays(new Date(), 2)),
    tags: ["crew", "supplies"],
  }),
  makeNote({
    title: "Morgan quote question",
    body: "Waiting on final felt color. Send a friendly quote follow-up before lunch if they have not replied.",
    ownerKey: "keith",
    status: "waiting",
    priority: "high",
    color: "sky",
    dueDate: toDateKey(addDays(new Date(), 1)),
    tags: ["quote", "follow-up"],
    clientId: "c2",
  }),
];

const defaultServiceTickets = [
  makeServiceTicket({
    clientId: "c1",
    appointmentId: "",
    title: "Rail cushion warranty check",
    issue: "Customer says the short rail sounds loose after the install. Needs photo review before booking a return visit.",
    status: "waiting_warranty",
    priority: "high",
    product: "8' pool table rail set",
    serialNumber: "HB-RAIL-1845",
    warrantyExpires: toDateKey(addDays(new Date(), 72)),
    nextStep: "Ask Avery for two rail photos and proof of purchase in the portal.",
    ownerKey: "herlyn",
    portalVisible: true,
    submittedAt: toDateKey(addDays(new Date(), -1)),
  }),
  makeServiceTicket({
    clientId: "c2",
    appointmentId: "",
    title: "Felt color warranty approval",
    issue: "Waiting on supplier warranty approval before scheduling the recover follow-up.",
    status: "waiting_warranty",
    priority: "normal",
    product: "Tournament felt",
    serialNumber: "",
    warrantyExpires: toDateKey(addDays(new Date(), 125)),
    nextStep: "Check supplier response and update Morgan through the client portal.",
    ownerKey: "keith",
    portalVisible: true,
    submittedAt: toDateKey(addDays(new Date(), -3)),
  }),
  makeServiceTicket({
    clientId: "c3",
    appointmentId: "",
    title: "Pocket liner replacement",
    issue: "Pocket liner split during normal use. Part is approved, schedule service once stock lands.",
    status: "parts_ordered",
    priority: "normal",
    product: "Leather pocket liner",
    serialNumber: "PL-7782",
    warrantyExpires: toDateKey(addDays(new Date(), 38)),
    nextStep: "Mark will confirm the part, then Diego can book the return visit.",
    ownerKey: "mark",
    portalVisible: true,
    submittedAt: toDateKey(addDays(new Date(), -8)),
  }),
];

const defaultCustomOrders = [
  makeCustomOrder({
    clientId: "c1",
    item: "Custom 8' walnut pool table",
    finish: "Matte walnut with tournament blue felt",
    orderRef: "CO-1048",
    productionRef: "SHOP-88",
    status: "production",
    orderedAt: toDateKey(addDays(new Date(), -12)),
    productionSentAt: toDateKey(addDays(new Date(), -8)),
    targetArrivalAt: toDateKey(addDays(new Date(), 21)),
    ownerKey: "herlyn",
    notes: "Customer wants a call before felt is installed if the blue shade changes.",
  }),
  makeCustomOrder({
    clientId: "c3",
    item: "Tournament snooker table rails",
    finish: "Ebony rail finish, olive cloth",
    orderRef: "CO-1039",
    productionRef: "RAIL-41",
    status: "shipped",
    orderedAt: toDateKey(addDays(new Date(), -31)),
    productionSentAt: toDateKey(addDays(new Date(), -26)),
    productionDoneAt: toDateKey(addDays(new Date(), -9)),
    shippedAt: toDateKey(addDays(new Date(), -3)),
    ownerKey: "shawn",
    notes: "Ready to book install window as soon as customer confirms access.",
  }),
  makeCustomOrder({
    clientId: "c5",
    item: "Custom 9' dining conversion top",
    finish: "Maple, clear coat",
    orderRef: "CO-1027",
    productionRef: "TOP-17",
    status: "install_booked",
    orderedAt: toDateKey(addDays(new Date(), -45)),
    productionSentAt: toDateKey(addDays(new Date(), -42)),
    productionDoneAt: toDateKey(addDays(new Date(), -20)),
    shippedAt: toDateKey(addDays(new Date(), -13)),
    arrivedAt: toDateKey(addDays(new Date(), -6)),
    installDate: toDateKey(addDays(new Date(), 3)),
    installTime: "10:00",
    installCrewId: "crew-b",
    ownerKey: "keith",
    notes: "Customer prefers morning install and has elevator access booked.",
  }),
];

const requiredProfileProjects = [
  makeProject({
    title: "Shawn dashboard command center",
    ownerKey: "shawn",
    status: "rolling",
    progress: 55,
    summary: "Keep the daily app framed around the high-level Home view, schedule, staff profiles, and future plug-in tools.",
    nextStep: "Decide which app module should be connected after profiles.",
    updates: [
      makeProjectUpdate("shawn", "Split the app into a shared operations layer and personal user profiles.", -6),
    ],
  }),
  makeProject({
    title: "Herlyn customer follow-up lane",
    ownerKey: "herlyn",
    status: "rolling",
    progress: 35,
    summary: "Give Herlyn a clear place for quote follow-ups, showroom notes, and customer-care projects.",
    nextStep: "Add the first real customer callback list when ready.",
    updates: [
      makeProjectUpdate("herlyn", "Started the profile lane so my projects stay separate from Shawn's dashboard controls.", -4),
    ],
  }),
];

const defaultProjectAutomations = [
  {
    id: "mark-monthly-bill",
    enabled: true,
    name: "Mark's monthly bill",
    dayOfMonth: 1,
    titleTemplate: "Mark's {month} Bill",
    summaryTemplate: "Compile and confirm Mark's bill for {month}.",
    nextStepTemplate: "Herlyn compiles Mark's invoice.",
    ownerKey: "herlyn",
    dueDaysAfterCreate: 5,
    labels: ["ops"],
    contributors: [
      { userKey: "herlyn", role: "Compile Mark's invoice", status: "active", progress: 0 },
      { userKey: "shawn", role: "Review and confirm the bill", status: "not_started", progress: 0 },
    ],
    checklist: [
      "Herlyn compiles Mark's invoice.",
      "Shawn reviews and confirms the bill.",
    ],
  },
];

const requiredProfileNotes = [
  makeNote({
    title: "Dashboard profile boundary",
    body: "Keep Shawn's app-building and operations notes separate from staff-owned profile notes.",
    ownerKey: "shawn",
    status: "active",
    priority: "normal",
    color: "sky",
    dueDate: toDateKey(addDays(new Date(), 3)),
    tags: ["profile", "dashboard"],
    pinned: true,
  }),
  makeNote({
    title: "Herlyn callback desk",
    body: "Use this profile for customer-care notes, quote follow-ups, showroom reminders, and project updates assigned to Herlyn.",
    ownerKey: "herlyn",
    status: "active",
    priority: "high",
    color: "lavender",
    dueDate: toDateKey(addDays(new Date(), 1)),
    tags: ["profile", "callbacks", "quotes"],
    pinned: true,
  }),
];

const requiredProfileMessages = [
  {
    id: createId(),
    threadId: getDirectThreadId("shawn", "herlyn"),
    senderKey: "shawn",
    recipientKey: "herlyn",
    body: "Herlyn, I set your profile up so your notes and projects stay in your lane instead of mixing with mine.",
    createdAt: new Date(Date.now() - 9 * 60 * 1000).toISOString(),
  },
  {
    id: createId(),
    threadId: getDirectThreadId("shawn", "herlyn"),
    senderKey: "herlyn",
    recipientKey: "shawn",
    body: "Perfect. I will keep customer follow-ups and showroom notes here.",
    createdAt: new Date(Date.now() - 6 * 60 * 1000).toISOString(),
  },
];

const loginView = document.querySelector("#loginView");
const startupView = document.querySelector("#startupView");
const startupGreeting = document.querySelector("#startupGreeting");
const dashboardView = document.querySelector("#dashboardView");
const welcomeAudio = document.querySelector("#welcomeAudio");
const loginForm = document.querySelector("#loginForm");
const userSelect = document.querySelector("#userSelect");
const pinInput = document.querySelector("#pinInput");
const userName = document.querySelector("#userName");
const userRole = document.querySelector("#userRole");
const userAvatar = document.querySelector("#userAvatar");
const logoutButton = document.querySelector("#logoutButton");
const moduleCanvas = document.querySelector("#moduleCanvas");
const moduleTitle = document.querySelector("#moduleTitle");
const moduleEyebrow = document.querySelector("#moduleEyebrow");
const navItems = [...document.querySelectorAll(".nav-item")];
const navGroups = [...document.querySelectorAll(".nav-group")];
const todayShortcut = document.querySelector("#todayShortcut");
const newJobShortcut = document.querySelector("#newJobShortcut");
const quickAddButton = document.querySelector("#quickAddButton");
const quickAddPanel = document.querySelector("#quickAddPanel");
const quickAddClose = document.querySelector("#quickAddClose");
const quickAddType = document.querySelector("#quickAddType");
const betaFeedbackContainer = document.querySelector("#betaFeedback");
const betaFeedbackPanel = document.querySelector("#betaFeedbackPanel");
const betaFeedbackType = document.querySelector("#betaFeedbackType");
const betaScreenshotButton = document.querySelector("#betaScreenshotButton");
const betaScreenshotPreview = document.querySelector("#betaScreenshotPreview");
const betaScreenshotStatus = document.querySelector("#betaScreenshotStatus");
const betaFeedbackAlert = document.querySelector("#betaFeedbackAlert");

let welcomeAudioTimer = null;
let services = loadServices();
let clients = loadClients();
let appointments = loadAppointments();
let serviceTickets = loadServiceTickets();
let cueRepairs = loadCueRepairs();
let customOrders = loadCustomOrders();
let employeeProfiles = loadEmployeeProfiles();
let accountSecurity = loadAccountSecurity();
let chatMessages = loadChatMessages();
let projects = loadProjects();
let projectAutomations = loadProjectAutomations();
let betaFeedback = loadBetaFeedback();
let notes = loadNotes();
let activeModule = "home";
let currentUserKey = "shawn";
let selectedDate = toDateKey(new Date());
let currentMonth = startOfMonth(new Date());
let statusFilter = "all";
let calendarTypeFilter = "all";
let scheduleNotice = "";
let calendarZoomMode = "three-week";
let editingId = null;
let selectedAppointmentId = null;
let quickFactAppointmentId = null;
let jobSearchTerm = "";
let jobStatusFilter = "open";
let jobTypeFilter = "all";
let selectedJobId = null;
let serviceEditingId = null;
let clientEditingId = null;
let selectedClientId = null;
let clientCreatingNew = false;
let bookingClientId = null;
let activeServiceCategory = "all";
let serviceSearchTerm = "";
let clientSearchTerm = "";
let clientOutstandingOnly = false;
let ticketSearchTerm = "";
let ticketStatusFilter = "all";
let selectedTicketId = null;
let ticketEditingId = null;
let ticketCreatingNew = false;
let ticketClientId = "";
let ticketAppointmentId = "";
let cueRepairSearchTerm = "";
let cueRepairStatusFilter = "all";
let selectedCueRepairId = null;
let cueRepairEditingId = null;
let cueRepairCreatingNew = false;
let customOrderSearchTerm = "";
let customOrderStatusFilter = "all";
let selectedCustomOrderId = null;
let customOrderEditingId = null;
let customOrderCreatingNew = false;
let activeChatThreadId = "all-staff";
let projectStatusFilter = "all";
let selectedProjectId = null;
let activeProjectDepth = "glance";
let activeProjectScope = "company";
let activeProjectView = "board";
let projectSuggestionModalOpen = false;
let betaFeedbackFilter = "all";
let selectedBetaFeedbackId = null;
let betaScreenshotDataUrl = "";
let noteSearchTerm = "";
let noteStatusFilter = "all";
let notePriorityFilter = "all";
let selectedNoteId = null;
let noteEditingId = null;
let noteCreatingNew = false;
let messageAlertTimer = null;
let noteReminderAlertTimer = null;
let typingState = null;
let typingClearTimer = null;
let typingBroadcastTimer = null;
let homeWeatherState = {
  status: "idle",
  temperature: null,
  condition: "Loading weather",
  high: null,
  low: null,
  wind: null,
  updatedAt: "",
};

ensureProfileSeeds();
ensureProjectAutomations();

const modules = {
  home: {
    eyebrow: "Business overview",
    title: "Home",
    render: renderHome,
    bind: bindHome,
  },
  schedule: {
    eyebrow: "Service calendar",
    title: () => formatLongDate(selectedDate),
    render: renderSchedule,
    bind: bindSchedule,
  },
  jobs: {
    eyebrow: "Job browser",
    title: "Open Jobs",
    render: renderOpenJobs,
    bind: bindOpenJobs,
  },
  clients: {
    eyebrow: "Customer work",
    title: "Clients",
    render: renderClients,
    bind: bindClients,
  },
  services: {
    eyebrow: "Pricing and time blocks",
    title: "Services",
    render: renderServices,
    bind: bindServices,
  },
  tickets: {
    eyebrow: "Warranty and follow-up",
    title: "Service Tickets",
    render: renderTickets,
    bind: bindTickets,
  },
  cueRepairs: {
    eyebrow: "Cue repair desk",
    title: "Cue Repairs",
    render: renderCueRepairs,
    bind: bindCueRepairs,
  },
  customOrders: {
    eyebrow: "Custom table tracking",
    title: "Custom Orders",
    render: renderCustomOrders,
    bind: bindCustomOrders,
  },
  team: {
    eyebrow: "Employee portal",
    title: "Team",
    render: renderTeam,
    bind: bindTeam,
  },
  projects: {
    eyebrow: "Low pressure progress",
    title: "Projects",
    render: renderProjects,
    bind: bindProjects,
  },
  development: {
    eyebrow: "Temporary beta tools",
    title: "Development",
    render: renderDevelopment,
    bind: bindDevelopment,
  },
  notes: {
    eyebrow: "Sticky note desk",
    title: "Notes",
    render: renderNotes,
    bind: bindNotes,
  },
  chat: {
    eyebrow: "Staff chat",
    title: "Messages",
    render: renderChat,
    bind: bindChat,
  },
  settings: {
    eyebrow: "Scheduler data",
    title: "Settings",
    render: renderSettings,
    bind: bindSettings,
  },
};

function makeService(service) {
  const name = service.name.trim();
  const id = service.id || createServiceId(service.itemNumber, service.sku, name);
  return normalizeService({
    ...service,
    id,
    name,
    duration: service.duration ?? inferServiceDuration(name),
    category: service.category || inferServiceCategory(name),
    color: service.color || getServiceColor(inferServiceCategory(name)),
  });
}

function normalizeService(service) {
  const name = String(service.name || service.description || "New service").trim();
  const category = service.category || inferServiceCategory(name);
  const price = service.price === "" || service.price === null || Number.isNaN(Number(service.price))
    ? null
    : Number(service.price);

  return {
    id: service.id || createServiceId(service.itemNumber, service.sku, name),
    itemNumber: String(service.itemNumber || ""),
    sku: String(service.sku || ""),
    name,
    duration: Math.max(30, Number(service.duration) || inferServiceDuration(name)),
    price,
    category,
    color: service.color || getServiceColor(category),
  };
}

function normalizeClient(client) {
  const name = String(client.name || "New client").trim();
  const id = client.id || createId();
  const createdAt = client.createdAt || new Date().toISOString();
  const addresses = normalizeClientAddresses({ ...client, id });
  const primaryAddress = getPrimaryClientAddress({ addresses })?.address || String(client.address || "").trim();

  return {
    id,
    customerNumber: String(client.customerNumber || "").trim(),
    name,
    phone: String(client.phone || "").trim(),
    email: String(client.email || "").trim(),
    address: primaryAddress,
    addresses,
    notes: String(client.notes || "").trim(),
    status: client.status || "active",
    tags: Array.isArray(client.tags) ? client.tags.map(String) : [],
    createdAt,
    updatedAt: client.updatedAt || createdAt,
  };
}

function normalizeClientAddresses(client) {
  const baseId = client.id || slugify(client.name || "client");
  const rawAddresses = Array.isArray(client.addresses) && client.addresses.length
    ? client.addresses
    : String(client.address || "").trim()
      ? [{ id: `addr-${baseId}-primary`, label: "Main", address: client.address, notes: "", primary: true }]
      : [];
  const addresses = rawAddresses
    .map((location, index) => normalizeClientAddress(location, baseId, index))
    .filter((location) => location.address);

  const primaryIndex = addresses.findIndex((location) => location.primary);

  return addresses.map((location, index) => ({
    ...location,
    primary: index === Math.max(0, primaryIndex),
  }));
}

function normalizeClientAddress(location, baseId, index) {
  const address = String(location.address || location.value || "").trim();
  const label = String(location.label || (index === 0 ? "Main" : `Location ${index + 1}`)).trim();

  return {
    id: location.id || `addr-${baseId}-${index === 0 ? "primary" : index + 1}`,
    label: label || (index === 0 ? "Main" : `Location ${index + 1}`),
    address,
    notes: String(location.notes || "").trim(),
    primary: Boolean(location.primary) || index === 0,
  };
}

function updatePrimaryClientAddress(addresses, address, clientId) {
  const cleanAddress = String(address || "").trim();
  const normalizedAddresses = normalizeClientAddresses({ id: clientId, addresses });

  if (!cleanAddress && !normalizedAddresses.length) {
    return [];
  }

  if (!normalizedAddresses.length) {
    return normalizeClientAddresses({
      id: clientId,
      addresses: [{ id: `addr-${clientId}-primary`, label: "Main", address: cleanAddress, primary: true }],
    });
  }

  const primaryIndex = Math.max(0, normalizedAddresses.findIndex((location) => location.primary));
  return normalizedAddresses.map((location, index) => ({
    ...location,
    address: index === primaryIndex ? cleanAddress : location.address,
    primary: index === primaryIndex,
  })).filter((location) => location.address);
}

function makeProject(project) {
  return normalizeProject(project);
}

function makeNote(note) {
  return normalizeNote(note);
}

function makeServiceTicket(ticket) {
  return normalizeServiceTicket(ticket);
}

function makeCustomOrder(order) {
  return normalizeCustomOrder(order);
}

function makeCueRepair(repair) {
  return normalizeCueRepair(repair);
}

function normalizeAppointment(appointment) {
  const serviceIds = Array.isArray(appointment.serviceIds) && appointment.serviceIds.length
    ? appointment.serviceIds
    : [appointment.serviceId].filter(Boolean);
  const type = calendarTypeLabels[appointment.type] ? appointment.type : "job";

  return {
    id: appointment.id || createId(),
    clientId: String(appointment.clientId || ""),
    addressId: String(appointment.addressId || ""),
    addressSnapshot: String(appointment.addressSnapshot || ""),
    serviceId: appointment.serviceId || serviceIds[0] || "",
    serviceIds,
    crewId: crews.some((crew) => crew.id === appointment.crewId) ? appointment.crewId : crews[0].id,
    date: appointment.date || toDateKey(new Date()),
    time: appointment.time || "09:00",
    status: statusLabels[appointment.status] ? appointment.status : "booked",
    type,
    title: String(appointment.title || "").trim(),
    employeeKey: users[appointment.employeeKey] ? appointment.employeeKey : "",
    timeOffId: String(appointment.timeOffId || ""),
    timeOffType: timeOffTypeLabels[appointment.timeOffType] ? appointment.timeOffType : "",
    notes: String(appointment.notes || "").trim(),
    completedAt: appointment.completedAt || "",
    payment: appointment.payment || null,
    paidAt: appointment.paidAt || "",
  };
}

function normalizeEmployeeProfile(profile) {
  const fallback = defaultEmployeeProfiles.find((item) => item.userKey === profile?.userKey) || defaultEmployeeProfiles[0];
  const userKey = users[profile?.userKey] ? profile.userKey : fallback.userKey;

  return {
    ...fallback,
    ...profile,
    userKey,
    title: String(profile?.title || fallback.title || users[userKey].role).trim(),
    department: String(profile?.department || fallback.department || "Operations").trim(),
    managerKey: users[profile?.managerKey] ? profile.managerKey : fallback.managerKey || "",
    employmentType: String(profile?.employmentType || fallback.employmentType || "Full-time").trim(),
    workLocation: String(profile?.workLocation || fallback.workLocation || "Office").trim(),
    crewId: crews.some((crew) => crew.id === profile?.crewId) ? profile.crewId : fallback.crewId || crews[0].id,
    hireDate: profile?.hireDate || fallback.hireDate || toDateKey(new Date()),
    status: ["active", "leave", "inactive"].includes(profile?.status) ? profile.status : "active",
    timeOffHours: Math.max(0, Number(profile?.timeOffHours ?? fallback.timeOffHours ?? 0)),
    usedTimeOffHours: Math.max(0, Number(profile?.usedTimeOffHours ?? fallback.usedTimeOffHours ?? 0)),
    permissions: Array.isArray(profile?.permissions) && profile.permissions.length ? profile.permissions.map(String) : [...fallback.permissions],
  };
}

function normalizeAccountSecurity(saved) {
  const source = saved && typeof saved === "object" ? saved : {};

  return Object.fromEntries(Object.keys(users).map((userKey) => {
    const fallback = defaultAccountSecurity[userKey] || {};
    const account = source[userKey] || {};

    return [userKey, {
      status: ["active", "locked", "disabled"].includes(account.status) ? account.status : fallback.status || "active",
      passwordUpdatedAt: account.passwordUpdatedAt || fallback.passwordUpdatedAt || new Date().toISOString(),
      mfaEnabled: Boolean(account.mfaEnabled ?? fallback.mfaEnabled),
      passkeyEnabled: Boolean(account.passkeyEnabled ?? fallback.passkeyEnabled),
      requirePasswordReset: Boolean(account.requirePasswordReset ?? fallback.requirePasswordReset),
      sessionTimeoutMinutes: [15, 30, 60, 120].includes(Number(account.sessionTimeoutMinutes)) ? Number(account.sessionTimeoutMinutes) : fallback.sessionTimeoutMinutes || 30,
      failedAttempts: Math.max(0, Number(account.failedAttempts || fallback.failedAttempts || 0)),
      lastLoginAt: account.lastLoginAt || fallback.lastLoginAt || "",
    }];
  }));
}

function makeProjectUpdate(authorKey, body, hoursOffset = 0) {
  return {
    id: createId(),
    authorKey,
    body,
    createdAt: new Date(Date.now() + hoursOffset * 60 * 60 * 1000).toISOString(),
  };
}

function normalizeProject(project) {
  const title = String(project.title || "Untitled project").trim();
  const createdAt = project.createdAt || new Date().toISOString();
  const updates = Array.isArray(project.updates) ? project.updates.map(normalizeProjectUpdate) : [];
  const suggestedByKey = users[project.suggestedByKey] ? project.suggestedByKey : "";
  const suggestionState = ["pending", "accepted", "rejected"].includes(project.suggestionState)
    ? project.suggestionState
    : project.status === "suggested" && suggestedByKey
      ? "pending"
      : "";
  const labels = normalizeProjectLabels(project.labels, title, project.status);
  const checklist = normalizeProjectChecklist(project.checklist);
  const contributors = normalizeProjectContributors(project.contributors, project.ownerKey, project.progress, project.status);

  return {
    id: project.id || createId(),
    title,
    ownerKey: users[project.ownerKey] ? project.ownerKey : "shawn",
    status: projectStatusLabels[project.status] ? project.status : "suggested",
    progress: clampProgress(project.progress),
    summary: String(project.summary || "").trim(),
    nextStep: String(project.nextStep || "").trim(),
    suggestedByKey,
    suggestionState,
    respondedAt: project.respondedAt || "",
    labels,
    checklist,
    contributors,
    priority: ["low", "normal", "high"].includes(project.priority) ? project.priority : "normal",
    dueDate: project.dueDate || toDateKey(addDays(new Date(createdAt), 14)),
    columnOrder: Number(project.columnOrder) || 0,
    automationId: String(project.automationId || "").trim(),
    automationPeriod: String(project.automationPeriod || "").trim(),
    createdAt,
    updatedAt: project.updatedAt || updates.at(-1)?.createdAt || createdAt,
    updates,
  };
}

function normalizeProjectAutomation(automation) {
  const fallback = defaultProjectAutomations[0];
  const contributors = Array.isArray(automation.contributors) && automation.contributors.length
    ? automation.contributors
    : fallback.contributors;
  const checklist = Array.isArray(automation.checklist) && automation.checklist.length
    ? automation.checklist
    : fallback.checklist;

  return {
    id: String(automation.id || fallback.id).trim() || fallback.id,
    enabled: automation.enabled !== false,
    name: String(automation.name || fallback.name).trim() || fallback.name,
    dayOfMonth: Math.min(28, Math.max(1, Number(automation.dayOfMonth) || fallback.dayOfMonth)),
    titleTemplate: String(automation.titleTemplate || fallback.titleTemplate).trim() || fallback.titleTemplate,
    summaryTemplate: String(automation.summaryTemplate || fallback.summaryTemplate).trim() || fallback.summaryTemplate,
    nextStepTemplate: String(automation.nextStepTemplate || fallback.nextStepTemplate).trim() || fallback.nextStepTemplate,
    ownerKey: users[automation.ownerKey] ? automation.ownerKey : fallback.ownerKey,
    dueDaysAfterCreate: Math.min(31, Math.max(0, Number(automation.dueDaysAfterCreate) || fallback.dueDaysAfterCreate)),
    labels: normalizeProjectLabels(automation.labels || fallback.labels, automation.titleTemplate || fallback.titleTemplate, "queued"),
    contributors: normalizeProjectContributors(contributors, automation.ownerKey || fallback.ownerKey, 0, "queued")
      .map((contributor) => ({ ...contributor, progress: 0 })),
    checklist: checklist.map((item) => String(item.text || item).trim()).filter(Boolean),
    lastGeneratedPeriod: String(automation.lastGeneratedPeriod || "").trim(),
  };
}

function normalizeProjectContributors(contributors, ownerKey = "shawn", progress = 0, projectStatus = "suggested") {
  const owner = users[ownerKey] ? ownerKey : "shawn";
  const defaultStatus = projectStatus === "done" ? "done" : projectStatus === "parked" ? "blocked" : "active";
  const normalized = Array.isArray(contributors)
    ? contributors
        .map((contributor) => ({
          id: contributor.id || createId(),
          userKey: users[contributor.userKey] ? contributor.userKey : "",
          role: String(contributor.role || contributor.responsibility || "").trim(),
          status: projectContributorStatusLabels[contributor.status] ? contributor.status : defaultStatus,
          progress: clampProgress(contributor.progress),
        }))
        .filter((contributor) => contributor.userKey)
    : [];

  if (!normalized.some((contributor) => contributor.userKey === owner)) {
    normalized.unshift({
      id: createId(),
      userKey: owner,
      role: "Project lead",
      status: defaultStatus,
      progress: clampProgress(progress),
    });
  }

  return normalized;
}

function normalizeProjectLabels(labels, title = "", status = "suggested") {
  const knownLabels = Object.keys(projectLabelOptions);
  const cleanLabels = Array.isArray(labels)
    ? labels.filter((label) => knownLabels.includes(label))
    : [];

  if (cleanLabels.length) {
    return [...new Set(cleanLabels)];
  }

  const value = title.toLowerCase();
  if (value.includes("showroom")) return ["showroom"];
  if (value.includes("customer") || value.includes("photo")) return ["customer"];
  if (value.includes("van") || value.includes("checklist")) return ["ops"];
  if (status === "suggested") return ["idea"];
  return ["service"];
}

function normalizeProjectChecklist(checklist) {
  if (Array.isArray(checklist) && checklist.length) {
    return checklist
      .map((item) => ({
        id: item.id || createId(),
        text: String(item.text || "").trim(),
        done: Boolean(item.done),
      }))
      .filter((item) => item.text);
  }

  return [];
}

function normalizeProjectUpdate(update) {
  return {
    id: update.id || createId(),
    authorKey: users[update.authorKey] ? update.authorKey : "shawn",
    body: String(update.body || "").trim(),
    createdAt: update.createdAt || new Date().toISOString(),
  };
}

function normalizeNote(note) {
  const body = String(note.body || "").trim();
  const title = String(note.title || body.slice(0, 46) || "Untitled note").trim();
  const createdAt = note.createdAt || new Date().toISOString();
  const tags = Array.isArray(note.tags)
    ? note.tags.map(String)
    : String(note.tags || "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

  return {
    id: note.id || createId(),
    title,
    body,
    ownerKey: users[note.ownerKey] ? note.ownerKey : "shawn",
    status: noteStatusLabels[note.status] ? note.status : "active",
    priority: notePriorityLabels[note.priority] ? note.priority : "normal",
    color: noteColors.includes(note.color) ? note.color : "sun",
    dueDate: note.dueDate || "",
    reminderAt: note.reminderAt || "",
    reminderDone: Boolean(note.reminderDone),
    tags: [...new Set(tags)],
    clientId: String(note.clientId || ""),
    appointmentId: String(note.appointmentId || ""),
    sharedWith: Array.isArray(note.sharedWith) ? [...new Set(note.sharedWith.filter((key) => users[key]))] : [],
    sourceThreadId: String(note.sourceThreadId || ""),
    sourceMessageId: String(note.sourceMessageId || ""),
    pinned: Boolean(note.pinned),
    createdAt,
    updatedAt: note.updatedAt || createdAt,
  };
}

function normalizeServiceTicket(ticket) {
  const createdAt = ticket.createdAt || new Date().toISOString();
  const title = String(ticket.title || ticket.summary || "Warranty service ticket").trim();
  const status = ticketStatusLabels[ticket.status] ? ticket.status : "intake";
  const priority = ticketPriorityLabels[ticket.priority] ? ticket.priority : "normal";

  return {
    id: ticket.id || createId(),
    clientId: String(ticket.clientId || ""),
    appointmentId: String(ticket.appointmentId || ""),
    title,
    issue: String(ticket.issue || ticket.notes || "").trim(),
    status,
    priority,
    product: String(ticket.product || "").trim(),
    serialNumber: String(ticket.serialNumber || ticket.serial || "").trim(),
    warrantyExpires: ticket.warrantyExpires || "",
    submittedAt: ticket.submittedAt || toDateKey(new Date(createdAt)),
    nextStep: String(ticket.nextStep || "").trim(),
    ownerKey: users[ticket.ownerKey] ? ticket.ownerKey : "shawn",
    portalVisible: ticket.portalVisible !== false,
    createdAt,
    updatedAt: ticket.updatedAt || createdAt,
  };
}

function normalizeBetaFeedback(item) {
  const createdAt = item.createdAt || new Date().toISOString();
  const type = betaFeedbackTypeLabels[item.type] ? item.type : "bug";
  const fallbackStatus = type === "bug" ? "ticketed" : "open";
  const status = betaFeedbackStatusLabels[item.status] ? item.status : fallbackStatus;
  const updates = Array.isArray(item.updates)
    ? item.updates.map((update) => ({
        id: update.id || createId(),
        authorKey: users[update.authorKey] ? update.authorKey : "shawn",
        body: String(update.body || "").trim(),
        createdAt: update.createdAt || createdAt,
      })).filter((update) => update.body)
    : [];

  return {
    id: item.id || createId(),
    type,
    status,
    title: String(item.title || (type === "bug" ? "Untitled bug" : "Untitled feature request")).trim(),
    details: String(item.details || item.body || "").trim(),
    reporterKey: users[item.reporterKey] ? item.reporterKey : "shawn",
    screenshotDataUrl: String(item.screenshotDataUrl || ""),
    ticketId: String(item.ticketId || ""),
    projectId: String(item.projectId || ""),
    assignedTo: users[item.assignedTo] ? item.assignedTo : "",
    createdAt,
    updatedAt: item.updatedAt || updates.at(-1)?.createdAt || createdAt,
    updates,
  };
}

function normalizeCueRepair(repair) {
  const createdAt = repair.createdAt || new Date().toISOString();
  const status = cueRepairStatusLabels[repair.status] ? repair.status : "dropped_off";
  const completedAt = repair.completedAt || (["waiting_pickup", "picked_up"].includes(status) ? toDateKey(new Date(createdAt)) : "");
  const pickedUpAt = repair.pickedUpAt || (status === "picked_up" ? toDateKey(new Date(createdAt)) : "");

  return {
    id: repair.id || createId(),
    repairNumber: String(repair.repairNumber || "").trim(),
    customerName: String(repair.customerName || repair.name || "Walk-in customer").trim(),
    phone: String(repair.phone || "").trim(),
    email: String(repair.email || "").trim(),
    cueDescription: String(repair.cueDescription || repair.cue || "").trim(),
    repairNeeded: String(repair.repairNeeded || repair.issue || "").trim(),
    notes: String(repair.notes || "").trim(),
    status,
    droppedOffAt: repair.droppedOffAt || toDateKey(new Date(createdAt)),
    completedAt,
    pickedUpAt,
    quotedPrice: repair.quotedPrice === "" || repair.quotedPrice === null || Number.isNaN(Number(repair.quotedPrice))
      ? null
      : Number(repair.quotedPrice),
    ownerKey: users[repair.ownerKey] ? repair.ownerKey : "shawn",
    emailNotifiedAt: repair.emailNotifiedAt || "",
    createdAt,
    updatedAt: repair.updatedAt || createdAt,
  };
}

function normalizeCustomOrder(order) {
  const createdAt = order.createdAt || new Date().toISOString();
  const status = customOrderStatusLabels[order.status] ? order.status : "ordered";
  const clientId = String(order.clientId || clients[0]?.id || "");
  const item = String(order.item || order.product || "Custom pool table").trim();

  return {
    id: order.id || createId(),
    clientId,
    item,
    finish: String(order.finish || "").trim(),
    orderRef: String(order.orderRef || "").trim(),
    productionRef: String(order.productionRef || "").trim(),
    status,
    orderedAt: order.orderedAt || toDateKey(new Date(createdAt)),
    productionSentAt: order.productionSentAt || "",
    productionDoneAt: order.productionDoneAt || "",
    shippedAt: order.shippedAt || "",
    arrivedAt: order.arrivedAt || "",
    targetArrivalAt: order.targetArrivalAt || "",
    installDate: order.installDate || "",
    installTime: order.installTime || "09:00",
    installCrewId: crews.some((crew) => crew.id === order.installCrewId) ? order.installCrewId : crews[0].id,
    appointmentId: String(order.appointmentId || ""),
    ownerKey: users[order.ownerKey] ? order.ownerKey : "shawn",
    notes: String(order.notes || "").trim(),
    createdAt,
    updatedAt: order.updatedAt || createdAt,
  };
}

function clampProgress(value) {
  return Math.min(100, Math.max(0, Number(value) || 0));
}

function createServiceId(itemNumber, sku, name) {
  if (sku) {
    return `service-${sku}`;
  }

  if (itemNumber) {
    return `item-${itemNumber}`;
  }

  return `custom-${slugify(name)}`;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inferServiceCategory(name) {
  const value = name.toUpperCase();

  if (value.startsWith("DISMANTLE & MOVE")) return "Dismantle & move";
  if (value.startsWith("MOVE & ASSEMBLE")) return "Move & assemble";
  if (value.startsWith("DMI")) return "DMI";
  if (value.startsWith("DISMANTLE & CRATE")) return "Crating";
  if (value.startsWith("MOVE DOLLY")) return "Same-room moves";
  if (value.startsWith("LEVEL ONLY")) return "Leveling";
  if (value.startsWith("RECOVER")) return "Recover";
  if (value.startsWith("LABOUR BED")) return "Bed labour";
  if (value.startsWith("LABOUR RAILS")) return "Rail labour";
  if (value.startsWith("RE RUBBER")) return "Rubber labour";
  if (value.startsWith("ASSEMBLE")) return "Assembly";
  if (value.startsWith("DISMANTLE")) return "Dismantle";
  return "Services";
}

function getServiceColor(category) {
  const colors = {
    Assembly: "blue",
    "Move & assemble": "green",
    DMI: "green",
    Recover: "gold",
    "Rubber labour": "coral",
  };

  return colors[category] || "gray";
}

function inferServiceDuration(name) {
  const value = name.toUpperCase();
  const size = Number(value.match(/(\d{1,2})'/)?.[1] || 8);
  let minutes = 120;

  if (value.startsWith("ASSEMBLE")) minutes = 150;
  if (value.startsWith("DISMANTLE & MOVE")) minutes = 240;
  if (value.startsWith("MOVE & ASSEMBLE")) minutes = 240;
  if (value.startsWith("DMI")) minutes = 300;
  if (value.startsWith("DISMANTLE & CRATE")) minutes = 180;
  if (value.startsWith("MOVE DOLLY")) minutes = 90;
  if (value.startsWith("LEVEL ONLY")) minutes = 90;
  if (value.startsWith("RECOVER")) minutes = 180;
  if (value.startsWith("LABOUR BED")) minutes = 120;
  if (value.startsWith("LABOUR RAILS")) minutes = 120;
  if (value.startsWith("RE RUBBER")) minutes = 240;

  if (size >= 9) minutes += 30;
  if (size >= 10) minutes += 30;
  if (size >= 12) minutes += 60;
  if (value.includes("STAIRS")) minutes += 60;
  if (value.includes("SAME LOCATION") || value.includes("SAME ROOM")) minutes = Math.max(90, minutes - 90);

  return minutes;
}

function getServiceCategories() {
  return ["all", ...new Set(services.map((service) => service.category))];
}

function seedAppointments() {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const nextWeek = addDays(today, 6);

  return [
    {
      id: createId(),
      clientId: "c1",
      serviceId: "service-1845",
      crewId: "crew-a",
      date: toDateKey(today),
      time: "08:30",
      status: "confirmed",
      type: "job",
      notes: "Call on arrival. Customer chose tournament blue felt.",
    },
    {
      id: createId(),
      clientId: "c3",
      serviceId: "service-1879",
      crewId: "crew-b",
      date: toDateKey(today),
      time: "13:00",
      status: "booked",
      type: "quote",
      notes: "Inspect rail cushion and pocket liner.",
    },
    {
      id: createId(),
      clientId: "c2",
      serviceId: "service-1883",
      crewId: "crew-c",
      date: toDateKey(tomorrow),
      time: "10:00",
      status: "hold",
      type: "reminder",
      notes: "Waiting for final felt color approval.",
    },
    {
      id: createId(),
      clientId: "c4",
      serviceId: "service-1855",
      crewId: "crew-a",
      date: toDateKey(nextWeek),
      time: "09:00",
      status: "booked",
      type: "job",
      notes: "Move from upstairs game room to new address.",
    },
  ];
}

function seedChatMessages() {
  const minutesAgo = (minutes) => new Date(Date.now() - minutes * 60 * 1000).toISOString();

  return [
    {
      id: createId(),
      threadId: "all-staff",
      senderKey: "keith",
      body: "Morning team. Please post any same-day schedule changes here before calling the customer.",
      createdAt: minutesAgo(72),
      deliveredAt: minutesAgo(72),
      readBy: ["shawn", "keith", "herlyn"],
    },
    {
      id: createId(),
      threadId: "all-staff",
      senderKey: "herlyn",
      body: "Avery confirmed tournament blue felt for this morning's install.",
      createdAt: minutesAgo(58),
      deliveredAt: minutesAgo(58),
      readBy: ["shawn", "herlyn"],
    },
    {
      id: createId(),
      threadId: "service-desk",
      senderKey: "diego",
      body: "Crew B has the rail cushion kit loaded for Riley's repair visit.",
      createdAt: minutesAgo(43),
    },
    {
      id: createId(),
      threadId: "sales-handoff",
      senderKey: "mark",
      body: "Please send the refelt quote follow-up to Morgan before lunch.",
      createdAt: minutesAgo(24),
    },
    {
      id: createId(),
      threadId: getDirectThreadId("keith", "shawn"),
      senderKey: "keith",
      body: "Shawn, I can take the first callback if you want.",
      createdAt: minutesAgo(12),
      deliveredAt: minutesAgo(12),
      readBy: ["keith"],
    },
  ];
}

function loadAppointments() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(saved) ? saved.map(normalizeAppointment) : seedAppointments();
  } catch {
    return seedAppointments();
  }
}

function loadServices() {
  try {
    const saved = JSON.parse(localStorage.getItem(serviceStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeService) : defaultServices.map(normalizeService);
  } catch {
    return defaultServices.map(normalizeService);
  }
}

function loadClients() {
  try {
    const saved = JSON.parse(localStorage.getItem(clientStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeClient) : defaultClients.map(normalizeClient);
  } catch {
    return defaultClients.map(normalizeClient);
  }
}

function loadServiceTickets() {
  try {
    const saved = JSON.parse(localStorage.getItem(serviceTicketStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeServiceTicket) : defaultServiceTickets.map(normalizeServiceTicket);
  } catch {
    return defaultServiceTickets.map(normalizeServiceTicket);
  }
}

function loadCueRepairs() {
  try {
    const saved = JSON.parse(localStorage.getItem(cueRepairStorageKey));
    return Array.isArray(saved) ? saved.map(normalizeCueRepair) : [];
  } catch {
    return [];
  }
}

function loadCustomOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem(customOrderStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeCustomOrder) : defaultCustomOrders.map(normalizeCustomOrder);
  } catch {
    return defaultCustomOrders.map(normalizeCustomOrder);
  }
}

function loadEmployeeProfiles() {
  try {
    const saved = JSON.parse(localStorage.getItem(employeeStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeEmployeeProfile) : defaultEmployeeProfiles.map(normalizeEmployeeProfile);
  } catch {
    return defaultEmployeeProfiles.map(normalizeEmployeeProfile);
  }
}

function loadAccountSecurity() {
  try {
    const saved = JSON.parse(localStorage.getItem(accountSecurityStorageKey));
    return normalizeAccountSecurity(saved);
  } catch {
    return normalizeAccountSecurity(defaultAccountSecurity);
  }
}

function loadChatMessages() {
  try {
    const saved = JSON.parse(localStorage.getItem(chatStorageKey));
    return Array.isArray(saved) ? saved : seedChatMessages();
  } catch {
    return seedChatMessages();
  }
}

function loadProjects() {
  try {
    const saved = JSON.parse(localStorage.getItem(projectStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeProject) : defaultProjects.map(normalizeProject);
  } catch {
    return defaultProjects.map(normalizeProject);
  }
}

function loadProjectAutomations() {
  try {
    const saved = JSON.parse(localStorage.getItem(projectAutomationStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeProjectAutomation) : defaultProjectAutomations.map(normalizeProjectAutomation);
  } catch {
    return defaultProjectAutomations.map(normalizeProjectAutomation);
  }
}

function loadBetaFeedback() {
  try {
    const saved = JSON.parse(localStorage.getItem(betaFeedbackStorageKey));
    return Array.isArray(saved) ? saved.map(normalizeBetaFeedback) : [];
  } catch {
    return [];
  }
}

function loadNotes() {
  try {
    const saved = JSON.parse(localStorage.getItem(noteStorageKey));
    return Array.isArray(saved) && saved.length ? saved.map(normalizeNote) : defaultNotes.map(normalizeNote);
  } catch {
    return defaultNotes.map(normalizeNote);
  }
}

function saveAppointments() {
  localStorage.setItem(storageKey, JSON.stringify(appointments));
  persistBackendState(["appointments"]);
}

function saveServices() {
  localStorage.setItem(serviceStorageKey, JSON.stringify(services));
  persistBackendState(["services"]);
}

function saveClients() {
  localStorage.setItem(clientStorageKey, JSON.stringify(clients));
  persistBackendState(["clients"]);
}

function saveServiceTickets() {
  localStorage.setItem(serviceTicketStorageKey, JSON.stringify(serviceTickets));
  persistBackendState(["serviceTickets"]);
}

function saveCueRepairs() {
  localStorage.setItem(cueRepairStorageKey, JSON.stringify(cueRepairs));
  persistBackendState(["cueRepairs"]);
}

function saveCustomOrders() {
  localStorage.setItem(customOrderStorageKey, JSON.stringify(customOrders));
  persistBackendState(["customOrders"]);
}

function saveEmployeeProfiles() {
  localStorage.setItem(employeeStorageKey, JSON.stringify(employeeProfiles));
  persistBackendState(["employeeProfiles"]);
}

function saveAccountSecurity() {
  localStorage.setItem(accountSecurityStorageKey, JSON.stringify(accountSecurity));
  persistBackendState(["accountSecurity"]);
}

function saveChatMessages() {
  localStorage.setItem(chatStorageKey, JSON.stringify(chatMessages));
  persistBackendState(["chatMessages"]);
  updateUnreadIndicators();
}

function saveProjects() {
  localStorage.setItem(projectStorageKey, JSON.stringify(projects));
  persistBackendState(["projects"]);
}

function saveProjectAutomations() {
  localStorage.setItem(projectAutomationStorageKey, JSON.stringify(projectAutomations));
  persistBackendState(["projectAutomations"]);
}

function saveBetaFeedback() {
  localStorage.setItem(betaFeedbackStorageKey, JSON.stringify(betaFeedback));
  persistBackendState(["betaFeedback"]);
}

function saveNotes() {
  localStorage.setItem(noteStorageKey, JSON.stringify(notes));
  persistBackendState(["notes"]);
}

function getBackendState() {
  return {
    businessProfile,
    crews,
    appointments,
    services,
    clients,
    serviceTickets,
    cueRepairs,
    customOrders,
    employeeProfiles,
    accountSecurity,
    chatMessages,
    projects,
    projectAutomations,
    betaFeedback,
    notes,
  };
}

function pickBackendState(keys) {
  const state = getBackendState();
  return keys.reduce((payload, key) => {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      payload[key] = state[key];
    }
    return payload;
  }, {});
}

function persistBackendState(keys = backendStateKeys) {
  if (!backendReady || applyingBackendState) {
    return;
  }

  fetch("/api/state", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sourceClientId: backendClientId,
      state: pickBackendState(keys),
    }),
  }).catch(() => {
    backendReady = false;
  });
}

function writeBackendStateToLocalStorage(changedKeys) {
  if (changedKeys.includes("appointments")) {
    localStorage.setItem(storageKey, JSON.stringify(appointments));
  }
  if (changedKeys.includes("services")) {
    localStorage.setItem(serviceStorageKey, JSON.stringify(services));
  }
  if (changedKeys.includes("clients")) {
    localStorage.setItem(clientStorageKey, JSON.stringify(clients));
  }
  if (changedKeys.includes("serviceTickets")) {
    localStorage.setItem(serviceTicketStorageKey, JSON.stringify(serviceTickets));
  }
  if (changedKeys.includes("cueRepairs")) {
    localStorage.setItem(cueRepairStorageKey, JSON.stringify(cueRepairs));
  }
  if (changedKeys.includes("customOrders")) {
    localStorage.setItem(customOrderStorageKey, JSON.stringify(customOrders));
  }
  if (changedKeys.includes("employeeProfiles")) {
    localStorage.setItem(employeeStorageKey, JSON.stringify(employeeProfiles));
  }
  if (changedKeys.includes("accountSecurity")) {
    localStorage.setItem(accountSecurityStorageKey, JSON.stringify(accountSecurity));
  }
  if (changedKeys.includes("chatMessages")) {
    localStorage.setItem(chatStorageKey, JSON.stringify(chatMessages));
  }
  if (changedKeys.includes("projects")) {
    localStorage.setItem(projectStorageKey, JSON.stringify(projects));
  }
  if (changedKeys.includes("projectAutomations")) {
    localStorage.setItem(projectAutomationStorageKey, JSON.stringify(projectAutomations));
  }
  if (changedKeys.includes("betaFeedback")) {
    localStorage.setItem(betaFeedbackStorageKey, JSON.stringify(betaFeedback));
  }
  if (changedKeys.includes("notes")) {
    localStorage.setItem(noteStorageKey, JSON.stringify(notes));
  }
}

function applyBackendState(state, options = {}) {
  if (!state || typeof state !== "object") {
    return;
  }

  applyingBackendState = true;
  const previousChatIds = new Set(chatMessages.map((message) => message.id));
  const changedKeys = [];

  if (Array.isArray(state.appointments)) {
    appointments = state.appointments.map(normalizeAppointment);
    changedKeys.push("appointments");
  }
  if (Array.isArray(state.services)) {
    services = state.services.map(normalizeService);
    changedKeys.push("services");
  }
  if (Array.isArray(state.clients)) {
    clients = state.clients.map(normalizeClient);
    changedKeys.push("clients");
  }
  if (Array.isArray(state.serviceTickets)) {
    serviceTickets = state.serviceTickets.map(normalizeServiceTicket);
    changedKeys.push("serviceTickets");
  }
  if (Array.isArray(state.cueRepairs)) {
    cueRepairs = state.cueRepairs.map(normalizeCueRepair);
    changedKeys.push("cueRepairs");
  }
  if (Array.isArray(state.customOrders)) {
    customOrders = state.customOrders.map(normalizeCustomOrder);
    changedKeys.push("customOrders");
  }
  if (Array.isArray(state.employeeProfiles)) {
    employeeProfiles = state.employeeProfiles.map(normalizeEmployeeProfile);
    changedKeys.push("employeeProfiles");
  }
  if (state.accountSecurity && typeof state.accountSecurity === "object") {
    accountSecurity = normalizeAccountSecurity(state.accountSecurity);
    changedKeys.push("accountSecurity");
  }
  if (Array.isArray(state.chatMessages)) {
    chatMessages = state.chatMessages;
    changedKeys.push("chatMessages");
  }
  if (Array.isArray(state.projects)) {
    projects = state.projects.map(normalizeProject);
    changedKeys.push("projects");
  }
  if (Array.isArray(state.projectAutomations)) {
    projectAutomations = state.projectAutomations.map(normalizeProjectAutomation);
    changedKeys.push("projectAutomations");
  }
  if (Array.isArray(state.betaFeedback)) {
    betaFeedback = state.betaFeedback.map(normalizeBetaFeedback);
    changedKeys.push("betaFeedback");
  }
  if (Array.isArray(state.notes)) {
    notes = state.notes.map(normalizeNote);
    changedKeys.push("notes");
  }

  writeBackendStateToLocalStorage(changedKeys);
  applyingBackendState = false;

  if (!changedKeys.length) {
    return;
  }

  updateUnreadIndicators();

  if (!dashboardView.classList.contains("is-hidden")) {
    setModule(activeModule);
  }

  if (options.notify && changedKeys.includes("chatMessages")) {
    const incomingMessages = chatMessages.filter((message) =>
      !previousChatIds.has(message.id) &&
      message.senderKey !== currentUserKey &&
      canCurrentUserSeeMessage(message)
    );

    if (incomingMessages.length) {
      showMessageAlert(incomingMessages.at(-1), incomingMessages.length);
    }
  }
}

async function initializeBackendSync() {
  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Backend unavailable");
    }

    const payload = await response.json();
    backendReady = true;

    if (payload.state) {
      applyBackendState(payload.state);
    } else {
      persistBackendState(backendStateKeys);
    }

    connectBackendEvents();
  } catch {
    backendReady = false;
  }
}

function connectBackendEvents() {
  if (!window.EventSource || backendEventSource) {
    return;
  }

  backendEventSource = new EventSource(`/api/events?clientId=${encodeURIComponent(backendClientId)}`);
  backendEventSource.addEventListener("state", (event) => {
    try {
      const payload = JSON.parse(event.data);
      if (payload.sourceClientId === backendClientId) {
        return;
      }
      applyBackendState(payload.state, { notify: true });
    } catch {
      // Ignore malformed beta sync events.
    }
  });
  backendEventSource.addEventListener("open", () => {
    backendReady = true;
  });
  backendEventSource.addEventListener("error", () => {
    backendReady = false;
  });
}

function ensureProfileSeeds() {
  let projectsChanged = false;
  let notesChanged = false;
  let messagesChanged = false;

  requiredProfileProjects.forEach((seed) => {
    const exists = projects.some((project) => project.ownerKey === seed.ownerKey && project.title === seed.title);
    if (!exists) {
      projects = [normalizeProject(seed), ...projects];
      projectsChanged = true;
    }
  });

  requiredProfileNotes.forEach((seed) => {
    const exists = notes.some((note) => note.ownerKey === seed.ownerKey && note.title === seed.title);
    if (!exists) {
      notes = [normalizeNote(seed), ...notes];
      notesChanged = true;
    }
  });

  requiredProfileMessages.forEach((seed) => {
    const exists = chatMessages.some((message) =>
      message.threadId === seed.threadId &&
      message.senderKey === seed.senderKey &&
      message.body === seed.body
    );
    if (!exists) {
      chatMessages = [...chatMessages, { ...seed, id: createId() }];
      messagesChanged = true;
    }
  });

  if (projectsChanged) saveProjects();
  if (notesChanged) saveNotes();
  if (messagesChanged) saveChatMessages();
}

function ensureProjectAutomations(today = new Date()) {
  let projectsChanged = false;
  let automationsChanged = false;

  projectAutomations = defaultProjectAutomations.map((defaultAutomation) => {
    const saved = projectAutomations.find((automation) => automation.id === defaultAutomation.id);
    if (!saved) {
      automationsChanged = true;
    }
    return normalizeProjectAutomation(saved || defaultAutomation);
  });

  projectAutomations.forEach((automation) => {
    const previousPeriod = automation.lastGeneratedPeriod;
    const generatedProject = createRecurringProjectIfDue(automation, today);
    if (generatedProject) {
      projects = [generatedProject, ...projects];
      automation.lastGeneratedPeriod = generatedProject.automationPeriod;
      projectsChanged = true;
      automationsChanged = true;
    }
    if (automation.lastGeneratedPeriod !== previousPeriod) {
      automationsChanged = true;
    }
  });

  if (automationsChanged) saveProjectAutomations();
  if (projectsChanged) saveProjects();
}

function createRecurringProjectIfDue(automation, today = new Date()) {
  if (!automation.enabled || today.getDate() < automation.dayOfMonth) {
    return null;
  }

  const periodDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const periodKey = `${periodDate.getFullYear()}-${String(periodDate.getMonth() + 1).padStart(2, "0")}`;
  if (automation.lastGeneratedPeriod === periodKey) {
    return null;
  }

  const alreadyExists = projects.some((project) =>
    project.automationId === automation.id &&
    project.automationPeriod === periodKey
  );

  if (alreadyExists) {
    automation.lastGeneratedPeriod = periodKey;
    return null;
  }

  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long" }).format(periodDate);
  const createdAt = new Date(today.getFullYear(), today.getMonth(), automation.dayOfMonth, 9, 0, 0).toISOString();
  const dueDate = toDateKey(addDays(new Date(createdAt), automation.dueDaysAfterCreate));
  const fillTemplate = (value) => String(value || "")
    .replaceAll("{month}", monthLabel)
    .replaceAll("{period}", monthLabel)
    .replaceAll("{year}", String(periodDate.getFullYear()));

  return normalizeProject({
    id: createId(),
    title: fillTemplate(automation.titleTemplate),
    ownerKey: automation.ownerKey,
    status: "queued",
    progress: 0,
    summary: fillTemplate(automation.summaryTemplate),
    nextStep: fillTemplate(automation.nextStepTemplate),
    labels: automation.labels,
    checklist: automation.checklist.map((text) => ({ id: createId(), text: fillTemplate(text), done: false })),
    contributors: automation.contributors.map((contributor) => ({
      ...contributor,
      id: createId(),
      role: fillTemplate(contributor.role),
      status: contributor.status === "done" ? "not_started" : contributor.status,
      progress: 0,
    })),
    dueDate,
    createdAt,
    updatedAt: createdAt,
    automationId: automation.id,
    automationPeriod: periodKey,
    updates: [
      {
        id: createId(),
        authorKey: "shawn",
        body: `Created automatically for ${monthLabel}.`,
        createdAt,
      },
    ],
  });
}

function createId() {
  return globalThis.crypto?.randomUUID?.() || `job-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, count) {
  const next = new Date(date);
  next.setDate(next.getDate() + count);
  return next;
}

function startOfWeek(date) {
  const day = date.getDay();
  const offset = day === 0 ? -6 : 1 - day;
  return addDays(date, offset);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function formatLongDate(dateKey) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(dateFromKey(dateKey));
}

function formatMonth(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatRecordDate(value) {
  if (!value) {
    return "Not recorded";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Not recorded";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getThreeWeekRange() {
  const selectedWeekStart = startOfWeek(dateFromKey(selectedDate));
  const start = addDays(selectedWeekStart, -7);
  const end = addDays(selectedWeekStart, 11);
  return { start, end };
}

function getCalendarTitle() {
  if (calendarZoomMode === "month") {
    return formatMonth(currentMonth);
  }

  const { start, end } = getThreeWeekRange();
  return `${formatShortDate(start)} - ${formatShortDate(end)}`;
}

function formatTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2026, 0, 1, hour, minute));
}

function formatEndTime(time, duration) {
  const [hour, minute] = time.split(":").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2026, 0, 1, hour, minute + duration));
}

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "TBD";
  }

  const value = Number(price);
  return value.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function minutesFromTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function getService(id) {
  return services.find((service) => service.id === id) || services[0];
}

function getAppointmentServiceIds(appointment) {
  if (Array.isArray(appointment.serviceIds) && appointment.serviceIds.length) {
    return appointment.serviceIds.filter((id) => services.some((service) => service.id === id));
  }

  if (appointment?.timeOffId || (appointment?.type === "unbillable" && !appointment?.serviceId)) {
    return [];
  }

  return appointment.serviceId ? [appointment.serviceId] : [services[0]?.id].filter(Boolean);
}

function getAppointmentServices(appointment) {
  return getAppointmentServiceIds(appointment).map(getService).filter(Boolean);
}

function calculateServiceQuote(serviceIds) {
  const selectedServices = serviceIds.map(getService).filter(Boolean);
  const pricedServices = selectedServices.filter((service) => service.price !== null);
  const subtotal = pricedServices.reduce((sum, service) => sum + service.price, 0);
  const pst = roundMoney(subtotal * businessProfile.taxes.pst.rate);
  const gst = roundMoney(subtotal * businessProfile.taxes.gst.rate);
  const taxTotal = roundMoney(pst + gst);
  const total = roundMoney(subtotal + taxTotal);
  const duration = selectedServices.reduce((sum, service) => sum + service.duration, 0);
  const unknownCount = selectedServices.length - pricedServices.length;
  const deposit = roundMoney(total * 0.25);

  return {
    services: selectedServices,
    subtotal,
    pst,
    gst,
    taxTotal,
    total,
    duration,
    deposit,
    balance: roundMoney(Math.max(0, total - deposit)),
    unknownCount,
  };
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function getAppointmentQuote(appointment) {
  return calculateServiceQuote(getAppointmentServiceIds(appointment));
}

function getAppointmentTitle(appointment) {
  if (appointment?.title) {
    return appointment.title;
  }

  if (appointment?.timeOffType && appointment?.employeeKey) {
    return `${getUser(appointment.employeeKey).name} ${timeOffTypeLabels[appointment.timeOffType].toLowerCase()}`;
  }

  const appointmentServices = getAppointmentServices(appointment);
  const firstService = appointmentServices[0] || services[0];
  const extraCount = Math.max(0, appointmentServices.length - 1);
  return `${firstService?.name || "Service"}${extraCount ? ` + ${extraCount} more` : ""}`;
}

function getAppointmentType(appointment) {
  return calendarTypeLabels[appointment?.type] ? appointment.type : "job";
}

function getAppointmentTypeLabel(appointment) {
  return calendarTypeLabels[getAppointmentType(appointment)];
}

function getAppointmentTypeShortLabel(appointment) {
  return calendarTypeShortLabels[getAppointmentType(appointment)];
}

function getAppointmentTypeClass(appointment) {
  return `type-${getAppointmentType(appointment)}`;
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;

  if (!hours) {
    return `${remainder} min`;
  }

  return remainder ? `${hours} hr ${remainder} min` : `${hours} hr${hours === 1 ? "" : "s"}`;
}

function formatServiceOption(service) {
  const code = service.sku || service.itemNumber;
  return `${code ? `${code} · ` : ""}${service.name} · ${formatPrice(service.price)} · ${formatDuration(service.duration)}`;
}

function getClient(id) {
  return clients.find((client) => client.id === id) || {
    id: "missing-client",
    name: "Unknown client",
    phone: "",
    email: "",
    address: "",
    addresses: [],
    notes: "",
  };
}

function getClientAddresses(client) {
  return Array.isArray(client.addresses) ? client.addresses : normalizeClientAddresses(client);
}

function getPrimaryClientAddress(client) {
  const addresses = getClientAddresses(client);
  return addresses.find((location) => location.primary) || addresses[0] || null;
}

function getClientAddress(client, addressId) {
  const addresses = getClientAddresses(client);
  return addresses.find((location) => location.id === addressId) || getPrimaryClientAddress(client) || {
    id: "",
    label: "Service address",
    address: client.address || "",
    notes: "",
    primary: true,
  };
}

function getAppointmentAddress(appointment) {
  const client = getClient(appointment.clientId);
  const location = getClientAddress(client, appointment.addressId);

  return {
    ...location,
    address: appointment.addressSnapshot || location.address || client.address || "",
  };
}

function formatClientOption(client) {
  return `${client.name}${client.phone ? ` · ${client.phone}` : ""}`;
}

function formatAddressOption(location) {
  return `${location.label}${location.address ? ` · ${location.address}` : ""}`;
}

function getCrew(id) {
  return crews.find((crew) => crew.id === id) || crews[0];
}

function getUser(key) {
  return users[key] || users.shawn;
}

function getEmployeeProfile(userKey) {
  return employeeProfiles.find((profile) => profile.userKey === userKey) || normalizeEmployeeProfile({ userKey });
}

function getAccountSecurity(userKey) {
  return accountSecurity[userKey] || normalizeAccountSecurity({})[userKey];
}

function getTimeOffAppointments(userKey = "") {
  return appointments
    .filter((appointment) => appointment.timeOffId && (!userKey || appointment.employeeKey === userKey))
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
}

function getUpcomingTimeOff(userKey = "", limit = 8) {
  const todayKey = toDateKey(new Date());
  return getTimeOffAppointments(userKey).filter((appointment) => appointment.date >= todayKey).slice(0, limit);
}

function getDirectThreadId(firstKey, secondKey) {
  return `dm-${[firstKey, secondKey].sort().join("-")}`;
}

function isDirectThreadId(threadId) {
  return String(threadId).startsWith("dm-");
}

function getDirectParticipants(threadId) {
  return threadId.replace("dm-", "").split("-").filter((key) => users[key]);
}

function getDirectRecipientKey(threadId) {
  return getDirectParticipants(threadId).find((key) => key !== currentUserKey) || currentUserKey;
}

function getDirectThreads() {
  return staffUserKeys
    .filter((key) => key !== currentUserKey)
    .map((key) => ({
      id: getDirectThreadId(currentUserKey, key),
      name: getUser(key).name,
      label: "Direct",
      description: `Private conversation with ${getUser(key).name}.`,
      participants: [currentUserKey, key],
      type: "direct",
    }));
}

function getThread(id) {
  if (isDirectThreadId(id)) {
    const participants = getDirectParticipants(id);
    const recipientKey = getDirectRecipientKey(id);
    return {
      id,
      name: getUser(recipientKey).name,
      label: "Direct message",
      description: `Private conversation between ${participants.map((key) => getUser(key).name).join(" and ")}.`,
      participants,
      type: "direct",
    };
  }

  return chatThreads.find((thread) => thread.id === id) || chatThreads[0];
}

function getThreadMessages(threadId) {
  if (isDirectThreadId(threadId) && !getDirectParticipants(threadId).includes(currentUserKey)) {
    return [];
  }

  return chatMessages
    .filter((message) => message.threadId === threadId)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

function getThreadLastMessage(threadId) {
  return getThreadMessages(threadId).at(-1);
}

function getPendingProjectRequestForThread(threadId) {
  return getThreadMessages(threadId).find((message) => {
    const project = message.type === "project-suggestion" ? getProject(message.projectId) : null;
    return project && (message.recipientKey || project.ownerKey) === currentUserKey && getProjectSuggestionState(project) === "pending";
  });
}

function canCurrentUserSeeMessage(message) {
  return !isDirectThreadId(message.threadId) || getDirectParticipants(message.threadId).includes(currentUserKey);
}

function getVisibleChatMessages() {
  return chatMessages.filter(canCurrentUserSeeMessage);
}

function isUnreadChatMessage(message, userKey = currentUserKey) {
  if (!message || message.senderKey === userKey || !canCurrentUserSeeMessage(message)) {
    return false;
  }

  return !Array.isArray(message.readBy) || !message.readBy.includes(userKey);
}

function getThreadUnreadCount(threadId, userKey = currentUserKey) {
  return getThreadMessages(threadId).filter((message) => isUnreadChatMessage(message, userKey)).length;
}

function getUnreadMessageCount(userKey = currentUserKey) {
  return getVisibleChatMessages().filter((message) => isUnreadChatMessage(message, userKey)).length;
}

function formatUnreadCount(count) {
  return count > 9 ? "9+" : String(count);
}

function updateUnreadIndicators() {
  const unreadCount = getUnreadMessageCount();
  const chatNavItem = document.querySelector("[data-module='chat']");
  if (!chatNavItem) {
    return;
  }

  chatNavItem.classList.toggle("has-unread", unreadCount > 0);
  chatNavItem.setAttribute("aria-label", unreadCount ? `Staff chat, ${unreadCount} unread` : "Staff chat");

  const badge = chatNavItem.querySelector(".nav-unread-badge");
  if (badge) {
    badge.textContent = unreadCount ? formatUnreadCount(unreadCount) : "";
  }
}

function getThreadReadParticipantKeys(threadId, senderKey) {
  return getThread(threadId).participants.filter((key) => key !== senderKey);
}

function getMessageReadKeys(message) {
  const participants = new Set(getThreadReadParticipantKeys(message.threadId, message.senderKey));
  return Array.isArray(message.readBy) ? message.readBy.filter((key) => participants.has(key)) : [];
}

function getMessageStatusText(message) {
  if (message.senderKey !== currentUserKey) {
    return "";
  }

  const readKeys = getMessageReadKeys(message);
  if (readKeys.length) {
    return `Read by ${readKeys.map((key) => getUser(key).name).join(", ")}`;
  }

  return `${message.deliveredAt ? "Delivered" : "Sent"} ✓`;
}

function markThreadRead(threadId) {
  let changed = false;
  chatMessages = chatMessages.map((message) => {
    if (message.threadId !== threadId || message.senderKey === currentUserKey) {
      return message;
    }

    const readBy = Array.isArray(message.readBy) ? message.readBy : [];
    if (readBy.includes(currentUserKey)) {
      return message;
    }

    changed = true;
    return {
      ...message,
      readBy: [...readBy, currentUserKey],
      readAt: new Date().toISOString(),
    };
  });

  if (changed) {
    saveChatMessages();
  }
}

function getTypingText() {
  if (
    !typingState ||
    typingState.threadId !== activeChatThreadId ||
    typingState.userKey === currentUserKey ||
    Date.now() - Number(typingState.updatedAt || 0) > 3200
  ) {
    return "";
  }

  return `${getUser(typingState.userKey).name} is typing`;
}

function getProfileProjects(userKey = currentUserKey) {
  return projects
    .filter((project) =>
      project.ownerKey === userKey ||
      project.suggestedByKey === userKey ||
      project.contributors.some((contributor) => contributor.userKey === userKey)
    )
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function getProfileNotes(userKey = currentUserKey) {
  return notes
    .filter((note) => canUserSeeNote(note, userKey))
    .sort((a, b) => {
      const pinnedDelta = Number(b.pinned) - Number(a.pinned);
      const priorityDelta = notePriorityOrder.indexOf(a.priority) - notePriorityOrder.indexOf(b.priority);
      return pinnedDelta || priorityDelta || new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}

function getProfileMessages(userKey = currentUserKey) {
  return chatMessages
    .filter((message) => {
      if (isDirectThreadId(message.threadId)) {
        return getDirectParticipants(message.threadId).includes(userKey);
      }

      return message.senderKey === userKey || message.recipientKey === userKey;
    })
    .filter(canCurrentUserSeeMessage)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getVisibleProjects() {
  const scopedProjects = activeProjectScope === "company"
    ? projects
    : getMyProjects();

  return scopedProjects
    .filter((project) => projectStatusFilter === "all" || project.status === projectStatusFilter)
    .sort((a, b) => {
      const statusDelta = projectStatusOrder.indexOf(a.status) - projectStatusOrder.indexOf(b.status);
      return statusDelta || new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}

function getSelectedProject() {
  const visibleProjects = getVisibleProjects();
  const selected = visibleProjects.find((project) => project.id === selectedProjectId) || visibleProjects[0] || null;
  selectedProjectId = selected?.id || null;
  return selected;
}

function getProjectUpdates(project) {
  return [...(project?.updates || [])].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getLatestProjectUpdate(project) {
  return getProjectUpdates(project)[0];
}

function getProjectChecklistPercent(project) {
  const items = project?.checklist || [];
  if (!items.length) return project?.progress || 0;
  return Math.round((items.filter((item) => item.done).length / items.length) * 100);
}

function getProjectContributorPercent(project) {
  const contributors = project?.contributors || [];
  if (!contributors.length) return getProjectChecklistPercent(project);
  return Math.round(contributors.reduce((sum, contributor) => sum + contributor.progress, 0) / contributors.length);
}

function getProjectOverallPercent(project) {
  const checklistPercent = getProjectChecklistPercent(project);
  const contributorPercent = getProjectContributorPercent(project);
  return Math.round((checklistPercent + contributorPercent) / 2);
}

function getProjectHealth(project) {
  const percent = getProjectOverallPercent(project);
  if (project.status === "done") return "full";
  if (project.status === "parked") return "low";
  if (percent >= 70) return "good";
  if (percent >= 35) return "mid";
  return "low";
}

function getProjectLabelMeta(label) {
  return projectLabelOptions[label] || { label, color: "gray" };
}

function getProject(id) {
  return projects.find((project) => project.id === id) || null;
}

function getProjectSuggestionMessages(projectId) {
  return chatMessages.filter((message) => message.type === "project-suggestion" && message.projectId === projectId);
}

function getProjectSuggestionState(project) {
  if (!project) return "";
  if (project.suggestionState) return project.suggestionState;
  if (project.status === "parked") return "rejected";
  if (project.status !== "suggested") return "accepted";
  return "pending";
}

function getMyProjects() {
  return projects.filter((project) =>
    project.ownerKey === currentUserKey ||
    project.suggestedByKey === currentUserKey ||
    project.contributors.some((contributor) => contributor.userKey === currentUserKey) ||
    getProjectSuggestionMessages(project.id).some((message) => message.recipientKey === currentUserKey)
  );
}

function getVisibleNotes() {
  const query = noteSearchTerm.trim().toLowerCase();

  return notes
    .filter((note) => canUserSeeNote(note, currentUserKey))
    .filter((note) => noteStatusFilter === "all" || note.status === noteStatusFilter)
    .filter((note) => notePriorityFilter === "all" || note.priority === notePriorityFilter)
    .filter((note) => {
      if (!query) {
        return true;
      }

      const client = note.clientId ? getClient(note.clientId) : null;
      const text = [
        note.title,
        note.body,
        note.status,
        note.priority,
        note.ownerKey,
        note.sharedWith.join(" "),
        note.tags.join(" "),
        client?.name,
        client?.phone,
        client?.address,
      ].join(" ").toLowerCase();

      return text.includes(query);
    })
    .sort((a, b) => {
      const pinnedDelta = Number(b.pinned) - Number(a.pinned);
      const priorityDelta = notePriorityOrder.indexOf(a.priority) - notePriorityOrder.indexOf(b.priority);
      const dueDelta = getNoteDueSortValue(a) - getNoteDueSortValue(b);
      return pinnedDelta || priorityDelta || dueDelta || new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}

function canUserSeeNote(note, userKey = currentUserKey) {
  return note.ownerKey === userKey || note.sharedWith.includes(userKey);
}

function getSelectedNote() {
  const visibleNotes = getVisibleNotes();
  const selected = visibleNotes.find((note) => note.id === selectedNoteId) || visibleNotes[0] || null;
  selectedNoteId = selected?.id || null;
  return selected;
}

function getNoteDueSortValue(note) {
  return note.dueDate ? dateFromKey(note.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
}

function isNoteOverdue(note) {
  return Boolean(note.dueDate && note.status !== "done" && note.status !== "archived" && note.dueDate < toDateKey(new Date()));
}

function getOpenNoteReminders() {
  const now = Date.now();
  return notes
    .filter((note) => canUserSeeNote(note))
    .filter((note) => note.reminderAt && !note.reminderDone && !["done", "archived"].includes(note.status))
    .filter((note) => new Date(note.reminderAt).getTime() <= now)
    .sort((a, b) => new Date(a.reminderAt) - new Date(b.reminderAt));
}

function formatNoteReminder(note) {
  if (!note.reminderAt) {
    return "No reminder";
  }

  const date = new Date(note.reminderAt);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatDateTimeInput(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  return offsetDate.toISOString().slice(0, 16);
}

function formatNoteDate(dateKey) {
  if (!dateKey) {
    return "No due date";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(dateFromKey(dateKey));
}

function getNoteClientLabel(note) {
  if (!note.clientId) {
    return "No client linked";
  }

  return getClient(note.clientId).name;
}

function getMessagePreview(body) {
  return body.length > 92 ? `${body.slice(0, 89)}...` : body;
}

function getChatMessagePreview(message) {
  if (message.type === "project-suggestion") {
    const project = getProject(message.projectId);
    const state = getProjectSuggestionState(project);
    const stateLabel = state === "accepted" ? "Accepted" : state === "rejected" ? "Rejected" : "Project suggestion";
    return project ? `${stateLabel}: ${project.title}` : "Project suggestion";
  }

  return message.body || "";
}

function formatMessageTime(value) {
  const date = new Date(value);
  const today = toDateKey(new Date());
  const messageDay = toDateKey(date);

  if (messageDay === today) {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatProjectTime(value) {
  const date = new Date(value);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getVisibleAppointments() {
  return appointments
    .filter((appointment) => statusFilter === "all" || appointment.status === statusFilter)
    .filter((appointment) => calendarTypeFilter === "all" || getAppointmentType(appointment) === calendarTypeFilter)
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
}

function getVisibleClients() {
  const query = clientSearchTerm.trim().toLowerCase();
  const clientPool = clientOutstandingOnly
    ? clients.filter((client) => getClientOpenInvoices(client.id).length)
    : clients;
  const visibleClients = query
    ? clientPool.filter((client) => {
        const locationText = getClientAddresses(client).map((location) => `${location.label} ${location.address}`).join(" ");
        const clientText = `${client.customerNumber} ${client.name} ${client.phone} ${client.email} ${client.address} ${locationText} ${client.notes} ${client.status} ${client.tags.join(" ")}`.toLowerCase();
        return clientText.includes(query);
      })
    : clientPool;

  return [...visibleClients].sort((a, b) => a.name.localeCompare(b.name));
}

function getDayAppointments(dateKey) {
  return getVisibleAppointments().filter((appointment) => appointment.date === dateKey);
}

function getClientAppointments(clientId) {
  return appointments
    .filter((appointment) => appointment.clientId === clientId)
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
}

function getClientVisitSummary(clientId) {
  const clientAppointments = getClientAppointments(clientId);
  const todayKey = toDateKey(new Date());
  const currentBooked = clientAppointments.filter((appointment) => appointment.status !== "complete" && appointment.date <= todayKey);
  const futureVisits = clientAppointments.filter((appointment) => appointment.status !== "complete" && appointment.date > todayKey);
  const pastVisits = clientAppointments
    .filter((appointment) => appointment.status === "complete")
    .sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));

  return {
    all: clientAppointments,
    currentBooked,
    futureVisits,
    pastVisits,
  };
}

function getMonthAppointments() {
  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();
  return getVisibleAppointments().filter((appointment) => {
    const date = dateFromKey(appointment.date);
    return date.getMonth() === month && date.getFullYear() === year;
  });
}

function findConflict(candidate) {
  const candidateServiceIds = Array.isArray(candidate.serviceIds) && candidate.serviceIds.length
    ? candidate.serviceIds
    : [candidate.serviceId].filter(Boolean);
  const candidateQuote = calculateServiceQuote(candidateServiceIds);
  const start = minutesFromTime(candidate.time);
  const end = start + candidateQuote.duration;

  return appointments.find((appointment) => {
    if (appointment.id === candidate.id || ["complete", "payment_due"].includes(appointment.status) || appointment.date !== candidate.date || appointment.crewId !== candidate.crewId) {
      return false;
    }

    const appointmentStart = minutesFromTime(appointment.time);
    const appointmentEnd = appointmentStart + getAppointmentQuote(appointment).duration;
    return start < appointmentEnd && end > appointmentStart;
  });
}

function getUpcomingAppointments(limit = 4) {
  const nowKey = toDateKey(new Date());
  const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();

  return appointments
    .filter((appointment) => {
      if (["complete", "payment_due"].includes(appointment.status) || appointment.date < nowKey) {
        return false;
      }

      return appointment.date !== nowKey || minutesFromTime(appointment.time) >= nowMinutes;
    })
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))
    .slice(0, limit);
}

function getOpenInvoices() {
  return appointments
    .filter((appointment) => appointment.status === "payment_due")
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
}

function getClientOpenInvoices(clientId) {
  return getOpenInvoices().filter((appointment) => appointment.clientId === clientId);
}

function getClientPaymentArchive(clientId) {
  return appointments
    .filter((appointment) => appointment.clientId === clientId && appointment.status === "complete" && appointment.payment)
    .sort((a, b) => new Date(b.paidAt || b.payment.paidAt || 0) - new Date(a.paidAt || a.payment.paidAt || 0));
}

function getInvoiceTotal(invoices) {
  return roundMoney(invoices.reduce((sum, appointment) => sum + getAppointmentQuote(appointment).total, 0));
}

function getOutstandingClients() {
  return clients
    .map((client) => {
      const invoices = getClientOpenInvoices(client.id);
      return {
        client,
        invoices,
        total: getInvoiceTotal(invoices),
      };
    })
    .filter((account) => account.invoices.length)
    .sort((a, b) => b.total - a.total || a.client.name.localeCompare(b.client.name));
}

function getClientServiceTickets(clientId, portalOnly = false) {
  return serviceTickets
    .filter((ticket) => ticket.clientId === clientId)
    .filter((ticket) => !portalOnly || ticket.portalVisible)
    .sort((a, b) => {
      const statusDelta = ticketStatusOrder.indexOf(a.status) - ticketStatusOrder.indexOf(b.status);
      return statusDelta || new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}

function getOpenServiceTickets() {
  return serviceTickets.filter((ticket) => ticket.status !== "resolved");
}

function getWaitingWarrantyTickets() {
  return serviceTickets.filter((ticket) => ticket.status === "waiting_warranty");
}

function getTicketForAppointment(appointmentId) {
  return serviceTickets
    .filter((ticket) => ticket.appointmentId === appointmentId)
    .sort((a, b) => {
      const openDelta = Number(a.status === "resolved") - Number(b.status === "resolved");
      return openDelta || new Date(b.updatedAt) - new Date(a.updatedAt);
    })[0] || null;
}

function getVisibleServiceTickets() {
  const query = ticketSearchTerm.trim().toLowerCase();

  return serviceTickets
    .filter((ticket) => ticketStatusFilter === "all" || ticket.status === ticketStatusFilter)
    .filter((ticket) => {
      if (!query) {
        return true;
      }

      const client = getClient(ticket.clientId);
      const appointment = appointments.find((item) => item.id === ticket.appointmentId);
      const text = [
        ticket.title,
        ticket.issue,
        ticket.status,
        ticket.priority,
        ticket.product,
        ticket.serialNumber,
        ticket.nextStep,
        client.name,
        client.phone,
        client.email,
        appointment ? getAppointmentTitle(appointment) : "",
      ].join(" ").toLowerCase();

      return text.includes(query);
    })
    .sort((a, b) => {
      const statusDelta = ticketStatusOrder.indexOf(a.status) - ticketStatusOrder.indexOf(b.status);
      const priorityDelta = Object.keys(ticketPriorityLabels).indexOf(b.priority) - Object.keys(ticketPriorityLabels).indexOf(a.priority);
      return statusDelta || priorityDelta || new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}

function getSelectedServiceTicket() {
  const visibleTickets = getVisibleServiceTickets();
  const selected = visibleTickets.find((ticket) => ticket.id === selectedTicketId) || visibleTickets[0] || null;
  selectedTicketId = selected?.id || null;
  return selected;
}

function getVisibleCueRepairs() {
  const query = cueRepairSearchTerm.trim().toLowerCase();

  return cueRepairs
    .filter((repair) => cueRepairStatusFilter === "all" || repair.status === cueRepairStatusFilter)
    .filter((repair) => {
      if (!query) {
        return true;
      }

      const text = [
        repair.repairNumber,
        repair.customerName,
        repair.phone,
        repair.email,
        repair.cueDescription,
        repair.repairNeeded,
        repair.notes,
        cueRepairStatusLabels[repair.status],
      ].join(" ").toLowerCase();

      return text.includes(query);
    })
    .sort((a, b) => {
      const statusDelta = cueRepairStatusOrder.indexOf(a.status) - cueRepairStatusOrder.indexOf(b.status);
      return statusDelta || new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}

function getSelectedCueRepair() {
  const visibleRepairs = getVisibleCueRepairs();
  const selected = visibleRepairs.find((repair) => repair.id === selectedCueRepairId) || visibleRepairs[0] || null;
  selectedCueRepairId = selected?.id || null;
  return selected;
}

function getCueRepairCount(status) {
  return cueRepairs.filter((repair) => repair.status === status).length;
}

function createCueRepairNumber() {
  const dateKey = toDateKey(new Date()).replaceAll("-", "").slice(2);
  const todayCount = cueRepairs.filter((repair) => String(repair.repairNumber).includes(dateKey)).length + 1;
  return `CR-${dateKey}-${String(todayCount).padStart(3, "0")}`;
}

function isWarrantyExpiring(ticket) {
  if (!ticket.warrantyExpires || ticket.status === "resolved") {
    return false;
  }

  return ticket.warrantyExpires <= toDateKey(addDays(new Date(), 30));
}

function moveAppointmentToPaymentDue(appointment) {
  return {
    ...appointment,
    status: "payment_due",
    completedAt: appointment.completedAt || new Date().toISOString(),
    payment: null,
  };
}

function reopenAppointment(appointment) {
  const { payment, paidAt, ...rest } = appointment;

  return {
    ...rest,
    status: "booked",
    completedAt: "",
  };
}

function closeAppointmentWithPayment(appointment, payment) {
  return {
    ...appointment,
    status: "complete",
    payment,
    paidAt: payment.paidAt,
  };
}

function renderHome() {
  const profile = getUser(currentUserKey);
  const todayKey = toDateKey(new Date());
  const todayJobs = appointments
    .filter((appointment) => appointment.date === todayKey)
    .sort((a, b) => a.time.localeCompare(b.time));
  const currentMonthJobs = appointments.filter((appointment) => {
    const date = dateFromKey(appointment.date);
    const today = new Date();
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  });
  const openJobs = appointments.filter((appointment) => appointment.status !== "complete");
  const openInvoices = getOpenInvoices();
  const openTickets = getOpenServiceTickets();
  const waitingWarrantyTickets = getWaitingWarrantyTickets();
  const waitingCuePickups = cueRepairs.filter((repair) => repair.status === "waiting_pickup");
  const outstandingAccounts = getOutstandingClients();
  const outstandingTotal = getInvoiceTotal(openInvoices);
  const monthValue = currentMonthJobs.reduce((sum, appointment) => sum + getAppointmentQuote(appointment).subtotal, 0);
  const activeCrews = crews.filter((crew) =>
    openJobs.some((appointment) => appointment.crewId === crew.id)
  );
  const upcomingJobs = getUpcomingAppointments(4);
  const profileMessages = getProfileMessages();
  const lastMessage = profileMessages[0];
  const unreadMessageCount = getUnreadMessageCount();
  const profileProjects = getProfileProjects();
  const rollingProjects = profileProjects.filter((project) => project.status === "rolling");
  const latestProject = profileProjects[0];
  const profileNotes = getProfileNotes();
  const openNotes = profileNotes.filter((note) => !["done", "archived"].includes(note.status));
  const overdueNotes = openNotes.filter(isNoteOverdue);
  const pinnedNote = profileNotes[0];
  const heroActions = currentUserKey === "keith" ? `
          <button class="primary-action fire-shawn-action" type="button" data-fire-shawn>Fire Shawn</button>
        ` : `
          ${renderHomeWeatherTile()}
        `;

  return `
    <div class="home-layout">
      <section class="home-hero">
        <div>
          <p class="eyebrow">${escapeHtml(profile.profileLabel)}</p>
          <h3>${formatLongDate(todayKey)}</h3>
          <p>${escapeHtml(profile.focus)}</p>
        </div>
        <div class="home-actions">
          ${heroActions}
        </div>
      </section>

      <div class="home-stat-grid">
        <button class="metric-panel home-link-card" type="button" data-home-open="today">
          <span>${todayJobs.length}</span>
          <p>Jobs today</p>
        </button>
        <button class="metric-panel home-link-card" type="button" data-home-open="tickets">
          <span>${openTickets.length}</span>
          <p>Open tickets</p>
        </button>
        <button class="metric-panel home-link-card" type="button" data-home-open="cueRepairs">
          <span>${waitingCuePickups.length}</span>
          <p>Cues ready</p>
        </button>
        <button class="metric-panel home-link-card" type="button" data-home-open="outstanding">
          <span>${formatPrice(outstandingTotal)}</span>
          <p>Outstanding</p>
        </button>
        <button class="metric-panel home-link-card" type="button" data-home-open="month">
          <span>$${monthValue.toLocaleString()}</span>
          <p>Month value</p>
        </button>
      </div>

      <div class="home-command-grid">
        <article class="home-panel home-agenda-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Today</p>
              <h3>Service agenda</h3>
            </div>
            <button class="text-action" type="button" data-module="schedule">Calendar</button>
          </div>
          <div class="home-list">
            ${todayJobs.length ? todayJobs.map(renderHomeJob).join("") : `
              <div class="empty-state compact">
                <h4>No jobs today</h4>
                <p>The calendar is clear for installs, repairs, estimates, or follow-up work.</p>
              </div>
            `}
          </div>
        </article>

        <aside class="home-side-stack">
          <article class="home-panel profile-home-card">
            <div class="profile-home-top">
              <span class="avatar profile-avatar">${escapeHtml(profile.avatar)}</span>
              <div>
                <p class="eyebrow">${escapeHtml(profile.workspace)}</p>
                <h3>${escapeHtml(profile.name)}</h3>
                <p>${escapeHtml(profile.role)}</p>
              </div>
            </div>
            <div class="profile-home-stats">
              <button type="button" data-home-open="notes"><strong>${openNotes.length}</strong><span>notes</span></button>
              <button type="button" data-home-open="projects"><strong>${profileProjects.length}</strong><span>projects</span></button>
              <button type="button" data-home-open="chat"><strong>${profileMessages.length}</strong><span>messages</span></button>
            </div>
          </article>

          <article class="home-panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">${openInvoices.length} open invoice${openInvoices.length === 1 ? "" : "s"}</p>
                <h3>Outstanding</h3>
              </div>
              <strong class="panel-total">${formatPrice(outstandingTotal)}</strong>
            </div>
            <div class="home-list compact-list">
              ${outstandingAccounts.length ? outstandingAccounts.slice(0, 3).map(renderHomeOutstandingAccount).join("") : `
                <div class="empty-state compact">
                  <h4>All clear</h4>
                  <p>Every completed job has payment recorded.</p>
                </div>
              `}
            </div>
          </article>
        </aside>
      </div>

      <div class="home-support-grid">
        <article class="home-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Next up</p>
              <h3>Upcoming work</h3>
            </div>
          </div>
          <div class="home-list">
            ${upcomingJobs.length ? upcomingJobs.slice(0, 3).map(renderHomeJob).join("") : `
              <div class="empty-state compact">
                <h4>No upcoming work</h4>
                <p>Add the next appointment when it is ready.</p>
              </div>
            `}
          </div>
        </article>

        <article class="home-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">${waitingWarrantyTickets.length} waiting</p>
              <h3>Warranty desk</h3>
            </div>
            <button class="text-action" type="button" data-module="tickets">Open</button>
          </div>
          <div class="home-list">
            ${waitingWarrantyTickets.length ? waitingWarrantyTickets.slice(0, 3).map(renderHomeTicket).join("") : `
              <div class="empty-state compact">
                <h4>No warranty holds</h4>
                <p>Warranty follow-ups are clear.</p>
              </div>
            `}
          </div>
        </article>

        <article class="home-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Projects</p>
              <h3>${escapeHtml(profile.name)}'s projects</h3>
            </div>
            <button class="text-action" type="button" data-module="projects">Open</button>
          </div>
          ${latestProject ? `
            <button class="project-mini-card home-link-card" type="button" data-home-project="${escapeHtml(latestProject.id)}">
              <div class="project-mini-top">
                <strong>${escapeHtml(latestProject.title)}</strong>
                <span>${latestProject.progress}%</span>
              </div>
              <div class="progress-track" aria-hidden="true"><span style="width: ${latestProject.progress}%"></span></div>
              <p>${escapeHtml(latestProject.nextStep || latestProject.summary || "No next step yet.")}</p>
            </button>
          ` : `
            <p class="card-copy">No projects yet. Toss one on the board when inspiration shows up.</p>
          `}
        </article>

        <article class="home-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Notes</p>
              <h3>${escapeHtml(profile.name)}'s notes</h3>
            </div>
            <button class="text-action" type="button" data-module="notes">Open</button>
          </div>
          ${pinnedNote ? `
            <button class="note-mini note-${pinnedNote.color} home-link-card" type="button" data-home-note="${escapeHtml(pinnedNote.id)}">
              <div>
                <strong>${escapeHtml(pinnedNote.title)}</strong>
                <span>${notePriorityLabels[pinnedNote.priority]} · ${noteStatusLabels[pinnedNote.status]}</span>
              </div>
              <p>${escapeHtml(pinnedNote.body || "No body yet.")}</p>
              <small>${overdueNotes.length ? `${overdueNotes.length} overdue` : `Due ${formatNoteDate(pinnedNote.dueDate)}`}</small>
            </button>
          ` : `
            <p class="card-copy">No notes yet. Catch the tiny things before they drift.</p>
          `}
        </article>

        <article class="home-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Customers</p>
              <h3>Client base</h3>
            </div>
            <button class="text-action" type="button" data-module="clients">Open</button>
          </div>
          <button class="home-mini-stat home-link-card" type="button" data-home-open="clients">
            <strong>${clients.length}</strong>
            <span>${clients.filter((client) => appointments.some((appointment) => appointment.clientId === client.id && appointment.status !== "complete")).length} active clients</span>
          </button>
        </article>

        <article class="home-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Team</p>
              <h3>Crew pulse</h3>
            </div>
            <button class="text-action" type="button" data-module="team">Open</button>
          </div>
          <div class="home-list compact-list">
            ${crews.map((crew) => `
              <button class="home-row home-row-button" type="button" data-home-open="team">
                <span>${escapeHtml(crew.name)}</span>
                <strong>${appointments.filter((appointment) => appointment.crewId === crew.id && appointment.status !== "complete").length} active</strong>
              </button>
            `).join("")}
          </div>
        </article>

        <article class="home-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">${unreadMessageCount ? `${unreadMessageCount} unread` : "Messages"}</p>
              <h3>${escapeHtml(profile.name)}'s latest</h3>
            </div>
            <button class="text-action" type="button" data-module="chat">Open</button>
          </div>
          ${lastMessage ? `
            <button class="latest-message home-link-card" type="button" data-home-thread="${escapeHtml(lastMessage.threadId)}">
              <span class="avatar small">${escapeHtml(getUser(lastMessage.senderKey).avatar)}</span>
              <div>
                <strong>${escapeHtml(getUser(lastMessage.senderKey).name)}</strong>
                <p>${escapeHtml(lastMessage.body)}</p>
                <small>${formatMessageTime(lastMessage.createdAt)}${unreadMessageCount ? ` · ${unreadMessageCount} unread` : ""}</small>
              </div>
            </button>
          ` : `
            <p class="card-copy">No staff messages yet.</p>
          `}
        </article>
      </div>
    </div>
  `;
}

function renderHomeWeatherTile() {
  return `
    <button class="home-weather-tile" type="button" id="homeWeatherTile" data-weather-refresh aria-live="polite">
      ${renderHomeWeatherTileContent()}
    </button>
  `;
}

function renderHomeWeatherTileContent() {
  const isReady = homeWeatherState.status === "ready";
  const temperature = isReady && Number.isFinite(homeWeatherState.temperature)
    ? `${Math.round(homeWeatherState.temperature)}°C`
    : "--°C";
  const range = isReady && Number.isFinite(homeWeatherState.high) && Number.isFinite(homeWeatherState.low)
    ? `H ${Math.round(homeWeatherState.high)}° · L ${Math.round(homeWeatherState.low)}°`
    : "Live local weather";
  const updated = homeWeatherState.updatedAt
    ? `Updated ${formatWeatherUpdateTime(homeWeatherState.updatedAt)}`
    : businessWeather.label;
  const condition = homeWeatherState.condition || (homeWeatherState.status === "error" ? "Weather unavailable" : "Loading weather");

  return `
    <span class="weather-orb" aria-hidden="true">${getWeatherGlyph(homeWeatherState.code)}</span>
    <span class="weather-copy">
      <span class="eyebrow">${escapeHtml(updated)}</span>
      <strong>${escapeHtml(temperature)}</strong>
      <span>${escapeHtml(condition)} · ${escapeHtml(range)}</span>
    </span>
  `;
}

function formatWeatherUpdateTime(value) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function getWeatherGlyph(code = 1) {
  if ([0, 1].includes(code)) return "☀";
  if ([2, 3].includes(code)) return "◐";
  if ([45, 48].includes(code)) return "≋";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "☂";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "✳";
  if ([95, 96, 99].includes(code)) return "⚡";
  return "◐";
}

function getWeatherCondition(code = 1) {
  const labels = {
    0: "Clear",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Cloudy",
    45: "Foggy",
    48: "Foggy",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    95: "Thunderstorm",
  };

  return labels[code] || "Local weather";
}

function renderHomeOutstandingAccount(account) {
  const latestInvoice = account.invoices.at(-1) || account.invoices[0];

  return `
    <button class="home-row home-row-button outstanding-home-row" type="button" data-home-client="${escapeHtml(account.client.id)}">
      <span>
        <strong>${escapeHtml(account.client.name)}</strong>
        <small>${account.invoices.length} invoice${account.invoices.length === 1 ? "" : "s"} · latest ${latestInvoice ? formatShortDate(dateFromKey(latestInvoice.date)) : ""}</small>
      </span>
      <strong>${formatPrice(account.total)}</strong>
    </button>
  `;
}

function renderHomeJob(appointment) {
  const service = getAppointmentServices(appointment)[0] || services[0];
  const client = getClient(appointment.clientId);
  const crew = getCrew(appointment.crewId);

  return `
    <button class="home-job home-job-button service-${service.color}" type="button" data-home-appointment="${escapeHtml(appointment.id)}">
      <div>
        <strong>${formatTime(appointment.time)}</strong>
        <span>${escapeHtml(getAppointmentTitle(appointment))}</span>
      </div>
      <div>
        <p>${escapeHtml(client.name)}</p>
        <small>${escapeHtml(crew.name)} · ${statusLabels[appointment.status]}</small>
      </div>
    </button>
  `;
}

function renderHomeTicket(ticket) {
  const client = getClient(ticket.clientId);

  return `
    <button class="home-row home-row-button warranty-home-row" type="button" data-home-ticket="${escapeHtml(ticket.id)}">
      <span>
        <strong>${escapeHtml(client.name)}</strong>
        <small>${escapeHtml(ticket.title)} · ${ticketPriorityLabels[ticket.priority]}</small>
      </span>
      <strong>${ticket.portalVisible ? "Portal" : "Staff"}</strong>
    </button>
  `;
}

function renderSchedule() {
  const dayAppointments = getDayAppointments(selectedDate);
  const selectedAppointment = getSelectedAppointment(dayAppointments);
  const openInvoices = getOpenInvoices();
  const zoomToggleLabel = calendarZoomMode === "month" ? "+" : "-";
  const zoomToggleAria = calendarZoomMode === "month" ? "Zoom in to three-week view" : "Zoom out to month view";

  return `
    <div class="scheduler-layout">
      <section class="calendar-panel calendar-primary calendar-${calendarZoomMode}" aria-label="Weekday service calendar">
        <div class="calendar-header">
          <button class="icon-button subtle" type="button" data-action="prev-period" aria-label="Previous period">&lt;</button>
          <div>
            <p class="eyebrow">Monday-Friday service board</p>
            <h3>${getCalendarTitle()}</h3>
          </div>
          <div class="calendar-header-actions">
            <button class="icon-button subtle zoom-toggle" type="button" data-action="toggle-calendar-zoom" aria-label="${zoomToggleAria}">${zoomToggleLabel}</button>
            <button class="secondary-action" type="button" data-action="today">Today</button>
            <button class="icon-button subtle" type="button" data-action="next-period" aria-label="Next period">&gt;</button>
          </div>
        </div>
        ${renderCalendarFilters()}
        ${scheduleNotice ? `<p class="schedule-notice" role="status">${escapeHtml(scheduleNotice)}</p>` : ""}
        <div class="calendar-weekdays" aria-hidden="true">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
        </div>
        <div class="month-grid">
          ${renderCalendarDays()}
        </div>
      </section>

      <section class="agenda-panel day-focus-panel" aria-label="Selected day jobs">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">${dayAppointments.length} job${dayAppointments.length === 1 ? "" : "s"} scheduled</p>
            <h3>${formatLongDate(selectedDate)}</h3>
          </div>
        </div>
        <div class="day-job-tabs" role="list" aria-label="Jobs on selected day">
          ${dayAppointments.length ? dayAppointments.map(renderJobTab).join("") : ""}
        </div>
        ${selectedAppointment ? renderJobDetail(selectedAppointment) : renderEmptyDay()}
      </section>

      ${openInvoices.length ? renderOpenInvoicesPanel(openInvoices) : ""}

      <section class="booking-panel schedule-booking" aria-label="Appointment form">
        ${renderBookingForm()}
      </section>
    </div>
  `;
}

function renderOpenInvoicesPanel(openInvoices) {
  const totalDue = openInvoices.reduce((sum, appointment) => sum + getAppointmentQuote(appointment).total, 0);

  return `
    <section class="invoice-panel" aria-label="Open invoices">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">${openInvoices.length} invoice${openInvoices.length === 1 ? "" : "s"} open</p>
          <h3>Waiting for payment</h3>
        </div>
        <strong>${formatPrice(totalDue)}</strong>
      </div>
      <div class="invoice-list">
        ${openInvoices.map(renderInvoiceRow).join("")}
      </div>
    </section>
  `;
}

function renderCalendarFilters() {
  return `
    <div class="calendar-filter-panel" aria-label="Calendar filters and colors">
      <div class="calendar-filter-row" role="group" aria-label="Calendar type filter">
        ${calendarTypeOrder.map((type) => renderCalendarTypeFilterButton(type)).join("")}
      </div>
      <div class="calendar-filter-row" role="group" aria-label="Appointment status filter">
        ${renderFilterButton("all", "All status")}
        ${Object.entries(statusLabels).map(([value, label]) => renderFilterButton(value, label)).join("")}
      </div>
      <div class="calendar-legend" aria-label="Calendar color key">
        ${Object.entries(calendarTypeLabels).map(([type, label]) => `
          <span class="type-badge type-${type}">${escapeHtml(label)}</span>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCalendarTypeFilterButton(value) {
  const label = value === "all" ? "All work" : calendarTypeShortLabels[value];
  return `<button class="${calendarTypeFilter === value ? "is-active" : ""}" type="button" data-calendar-type-filter="${value}">${escapeHtml(label)}</button>`;
}

function renderInvoiceRow(appointment) {
  const client = getClient(appointment.clientId);
  const location = getAppointmentAddress(appointment);
  const quote = getAppointmentQuote(appointment);

  return `
    <button class="invoice-row" type="button" data-open-invoice="${escapeHtml(appointment.id)}">
      <span>${formatShortDate(dateFromKey(appointment.date))} · ${formatTime(appointment.time)}</span>
      <strong>${escapeHtml(client.name)}</strong>
      <small>${escapeHtml(location.label || "Location")} · ${escapeHtml(getAppointmentTitle(appointment))}</small>
      <b>${formatPrice(quote.total)}</b>
    </button>
  `;
}

function renderFilterButton(value, label) {
  return `<button class="${statusFilter === value ? "is-active" : ""}" type="button" data-filter="${value}">${label}</button>`;
}

function renderCalendarDays() {
  const isMonthView = calendarZoomMode === "month";
  const first = isMonthView ? startOfMonth(currentMonth) : getThreeWeekRange().start;
  const firstOffset = first.getDay() === 0 ? -6 : 1 - first.getDay();
  const gridStart = isMonthView ? addDays(first, firstOffset) : first;
  const todayKey = toDateKey(new Date());
  const cellCount = isMonthView ? 30 : 15;

  return Array.from({ length: cellCount }, (_, index) => {
    const week = Math.floor(index / 5);
    const weekday = index % 5;
    const date = addDays(gridStart, week * 7 + weekday);
    const dateKey = toDateKey(date);
    const dayJobs = getDayAppointments(dateKey);
    const inMonth = date.getMonth() === currentMonth.getMonth();
    const classes = [
      "day-cell",
      inMonth ? "" : "is-muted",
      dateKey === selectedDate ? "is-selected" : "",
      dateKey === todayKey ? "is-today" : "",
    ].filter(Boolean).join(" ");

    return `
      <article class="${classes}" data-date="${dateKey}" data-drop-date="${dateKey}" aria-label="${formatLongDate(dateKey)} drop target">
        <button class="day-select" type="button" data-date="${dateKey}" aria-label="Select ${formatLongDate(dateKey)}">
          <span class="day-number">${date.getDate()}</span>
          <span class="day-count">${dayJobs.length ? `${dayJobs.length} job${dayJobs.length === 1 ? "" : "s"}` : ""}</span>
        </button>
        <div class="day-preview-list">
          ${dayJobs.slice(0, isMonthView ? 4 : 3).map((appointment) => renderCalendarJobPreview(appointment, isMonthView)).join("")}
          ${dayJobs.length > (isMonthView ? 4 : 3) ? `<button class="calendar-more" type="button" data-date="${dateKey}">+${dayJobs.length - (isMonthView ? 4 : 3)} more</button>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function renderCalendarJobPreview(appointment, compact = false) {
  const client = getClient(appointment.clientId);
  const crew = getCrew(appointment.crewId);
  const isQuickOpen = appointment.id === quickFactAppointmentId;
  const classes = [
    "calendar-job",
    compact ? "is-compact" : "",
    getAppointmentTypeClass(appointment),
    appointment.status === "complete" ? "is-complete" : "",
    appointment.status === "payment_due" ? "is-payment-due" : "",
    isQuickOpen ? "is-open" : "",
  ].filter(Boolean).join(" ");

  return `
    <div class="calendar-job-wrap">
      <button class="${classes}" type="button" draggable="true" data-appointment-drag="${escapeHtml(appointment.id)}" data-date="${appointment.date}" data-appointment="${appointment.id}" aria-expanded="${isQuickOpen ? "true" : "false"}">
        <strong>${formatTime(appointment.time)} · ${escapeHtml(client.name)}</strong>
        ${compact ? "" : `<span>${escapeHtml(getAppointmentTitle(appointment))}</span><small>${escapeHtml(crew.name)} · ${getAppointmentTypeShortLabel(appointment)} · ${statusLabels[appointment.status]}</small>`}
      </button>
      ${isQuickOpen ? renderQuickFactCard(appointment) : ""}
    </div>
  `;
}

function renderQuickFactCard(appointment) {
  const client = getClient(appointment.clientId);
  const location = getAppointmentAddress(appointment);
  const crew = getCrew(appointment.crewId);
  const quote = getAppointmentQuote(appointment);
  const conflict = findConflict(appointment);
  const servicesLabel = quote.services.map((service) => service.sku || service.name).join(", ");

  return `
    <aside class="job-quick-card" role="dialog" aria-label="Quick facts for ${escapeHtml(client.name)}">
      <div class="quick-card-header">
        <div>
          <p class="eyebrow">Quick facts</p>
          <h4>${escapeHtml(client.name)}</h4>
        </div>
        <button class="quick-close" type="button" data-action="close-quick-card" aria-label="Close quick facts">×</button>
      </div>
      <dl class="quick-fact-grid">
        <div><dt>Window</dt><dd>${formatTime(appointment.time)}-${formatEndTime(appointment.time, quote.duration)}</dd></div>
        <div><dt>Labor</dt><dd>${formatDuration(quote.duration)}</dd></div>
        <div><dt>Crew</dt><dd>${escapeHtml(crew.name)} · ${escapeHtml(crew.lead)}</dd></div>
        <div><dt>Total</dt><dd>${formatPrice(quote.total)}${quote.unknownCount ? " + TBD" : ""}</dd></div>
        <div><dt>Phone</dt><dd>${escapeHtml(client.phone || "Missing")}</dd></div>
        <div><dt>Type</dt><dd>${getAppointmentTypeLabel(appointment)}</dd></div>
        <div><dt>Status</dt><dd>${statusLabels[appointment.status]}</dd></div>
      </dl>
      <p class="quick-address">${escapeHtml(location.address || "No address on file")}</p>
      <p class="quick-services">${escapeHtml(servicesLabel)}</p>
      ${appointment.notes ? `<p class="quick-notes">${escapeHtml(appointment.notes)}</p>` : ""}
      ${appointment.status === "payment_due" ? `<p class="payment-reminder">Payment is still open. Record payment from the job details below.</p>` : ""}
      ${conflict ? `<p class="conflict-note">Conflict with ${escapeHtml(getClient(conflict.clientId).name)} at ${formatTime(conflict.time)}</p>` : ""}
      <div class="quick-card-actions">
        <button class="secondary-action" type="button" data-toggle-complete="${appointment.id}">${getCompletionActionLabel(appointment)}</button>
        <button class="secondary-action" type="button" data-open-ticket-for-job="${escapeHtml(appointment.id)}">Open ticket</button>
        <button class="secondary-action" type="button" data-edit="${appointment.id}">Edit</button>
      </div>
    </aside>
  `;
}

function getSelectedAppointment(dayAppointments) {
  if (!dayAppointments.length) {
    selectedAppointmentId = null;
    return null;
  }

  const selected = dayAppointments.find((appointment) => appointment.id === selectedAppointmentId) || dayAppointments[0];
  selectedAppointmentId = selected.id;
  return selected;
}

function renderJobTab(appointment) {
  const client = getClient(appointment.clientId);
  const classes = ["day-job-tab", appointment.id === selectedAppointmentId ? "is-active" : ""].filter(Boolean).join(" ");

  return `
    <button class="${classes}" type="button" data-appointment="${appointment.id}">
      <strong>${formatTime(appointment.time)}</strong>
      <span>${escapeHtml(client.name)}</span>
    </button>
  `;
}

function renderJobDetail(appointment) {
  const service = getAppointmentServices(appointment)[0] || services[0];
  const quote = getAppointmentQuote(appointment);
  const client = getClient(appointment.clientId);
  const location = getAppointmentAddress(appointment);
  const crew = getCrew(appointment.crewId);
  const conflict = findConflict(appointment);

  return `
    <article class="job-detail-card service-${service.color} ${getAppointmentTypeClass(appointment)} ${appointment.status === "complete" ? "is-complete" : ""} ${appointment.status === "payment_due" ? "is-payment-due" : ""}">
      <div class="job-detail-main">
        <div>
          <p class="eyebrow">${formatTime(appointment.time)} · ${formatDuration(quote.duration)}</p>
          <h4>${escapeHtml(getAppointmentTitle(appointment))}</h4>
          <p>${escapeHtml(client.name)} · ${escapeHtml(client.phone || "No phone on file")}</p>
          <p>${escapeHtml(location.label ? `${location.label} · ${location.address}` : location.address || "No address on file")}</p>
        </div>
        <div class="job-detail-meta">
          <span class="type-badge ${getAppointmentTypeClass(appointment)}">${getAppointmentTypeLabel(appointment)}</span>
          <span class="status-pill status-${appointment.status}">${statusLabels[appointment.status]}</span>
          <strong>${formatPrice(quote.total)}</strong>
          <small>Incl. ${businessProfile.taxes.pst.label}/${businessProfile.taxes.gst.label}</small>
          <small>${escapeHtml(crew.name)} with ${escapeHtml(crew.lead)}</small>
        </div>
      </div>
      <ul class="appointment-services">
        ${getAppointmentServices(appointment).map((item) => `
          <li>
            <span>${escapeHtml(item.sku ? `${item.sku} · ${item.name}` : item.name)}</span>
            <strong>${formatPrice(item.price)}</strong>
          </li>
        `).join("")}
      </ul>
      ${appointment.notes ? `<p class="appointment-notes">${escapeHtml(appointment.notes)}</p>` : ""}
      ${conflict ? `<p class="conflict-note">Time conflict with ${escapeHtml(getClient(conflict.clientId).name)}</p>` : ""}
      ${renderPaymentStatusPanel(appointment)}
      <div class="job-detail-actions">
        <button class="secondary-action" type="button" data-toggle-complete="${appointment.id}">${getCompletionActionLabel(appointment)}</button>
        <button class="secondary-action" type="button" data-open-ticket-for-job="${escapeHtml(appointment.id)}">Open ticket</button>
        <button class="secondary-action" type="button" data-edit="${appointment.id}">Edit job</button>
        <button class="secondary-action danger" type="button" data-delete="${appointment.id}">Delete job</button>
      </div>
    </article>
  `;
}

function getCompletionActionLabel(appointment) {
  if (appointment.status === "complete") {
    return "Reopen job";
  }

  if (appointment.status === "payment_due") {
    return "Reopen work";
  }

  return "Mark complete";
}

function renderPaymentStatusPanel(appointment) {
  const quote = getAppointmentQuote(appointment);

  if (appointment.status === "payment_due") {
    return `
      <form class="payment-panel" data-payment-form="${escapeHtml(appointment.id)}">
        <div class="payment-panel-head">
          <div>
            <p class="eyebrow">Invoice open</p>
            <h4>Waiting for payment</h4>
          </div>
          <strong>${formatPrice(quote.total)}</strong>
        </div>
        <div class="payment-grid">
          <div>
            <label for="paymentAmount-${escapeHtml(appointment.id)}">Amount paid</label>
            <input id="paymentAmount-${escapeHtml(appointment.id)}" name="amount" type="number" min="0" step="0.01" value="${quote.total}" required />
          </div>
          <div>
            <label for="paymentMethod-${escapeHtml(appointment.id)}">Method</label>
            <select id="paymentMethod-${escapeHtml(appointment.id)}" name="method">
              <option value="card">Card</option>
              <option value="e-transfer">E-transfer</option>
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="paymentDate-${escapeHtml(appointment.id)}">Paid date</label>
            <input id="paymentDate-${escapeHtml(appointment.id)}" name="paidDate" type="date" value="${toDateKey(new Date())}" />
          </div>
          <div>
            <label for="paymentReference-${escapeHtml(appointment.id)}">Reference</label>
            <input id="paymentReference-${escapeHtml(appointment.id)}" name="reference" placeholder="Receipt, cheque, transfer note" />
          </div>
        </div>
        <label for="paymentNotes-${escapeHtml(appointment.id)}">Payment notes</label>
        <textarea id="paymentNotes-${escapeHtml(appointment.id)}" name="notes" rows="2" placeholder="Who paid, partial details, staff note"></textarea>
        <button class="primary-action compact" type="submit">Record payment and close job</button>
      </form>
    `;
  }

  if (appointment.status === "complete" && appointment.payment) {
    return `
      <div class="payment-panel is-paid">
        <div class="payment-panel-head">
          <div>
            <p class="eyebrow">Payment recorded</p>
            <h4>${formatPrice(appointment.payment.amount)} paid by ${escapeHtml(appointment.payment.methodLabel)}</h4>
          </div>
          <span class="status-pill status-complete">Closed</span>
        </div>
        <p>${escapeHtml(appointment.payment.reference || "No reference")} · ${formatShortDate(dateFromKey(appointment.payment.paidDate))}</p>
        ${appointment.payment.notes ? `<p>${escapeHtml(appointment.payment.notes)}</p>` : ""}
      </div>
    `;
  }

  return "";
}

function renderAppointment(appointment) {
  const appointmentServices = getAppointmentServices(appointment);
  const service = appointmentServices[0] || services[0];
  const quote = getAppointmentQuote(appointment);
  const client = getClient(appointment.clientId);
  const location = getAppointmentAddress(appointment);
  const crew = getCrew(appointment.crewId);
  const conflict = findConflict(appointment);

  return `
    <article class="appointment-card service-${service.color} ${getAppointmentTypeClass(appointment)} ${appointment.status === "complete" ? "is-complete" : ""} ${appointment.status === "payment_due" ? "is-payment-due" : ""}">
      <div class="appointment-time">
        <strong>${formatTime(appointment.time)}</strong>
        <span>${formatDuration(quote.duration)}</span>
      </div>
      <div class="appointment-body">
        <div class="appointment-title">
          <h4>${escapeHtml(getAppointmentTitle(appointment))}</h4>
          <span class="type-badge ${getAppointmentTypeClass(appointment)}">${getAppointmentTypeShortLabel(appointment)}</span>
          <span class="status-pill status-${appointment.status}">${statusLabels[appointment.status]}</span>
        </div>
        <ul class="appointment-services">
          ${appointmentServices.map((item) => `
            <li>
              <span>${escapeHtml(item.sku ? `${item.sku} · ${item.name}` : item.name)}</span>
              <strong>${formatPrice(item.price)}</strong>
            </li>
          `).join("")}
        </ul>
        <p>${escapeHtml(client.name)} · ${escapeHtml(location.address || "No address on file")}</p>
        <p>${escapeHtml(crew.name)} with ${escapeHtml(crew.lead)}</p>
        <p class="quote-mini">Total ${formatPrice(quote.total)}${quote.unknownCount ? ` + ${quote.unknownCount} TBD` : ""}</p>
        ${appointment.notes ? `<p class="appointment-notes">${escapeHtml(appointment.notes)}</p>` : ""}
        ${conflict ? `<p class="conflict-note">Time conflict with ${escapeHtml(getClient(conflict.clientId).name)}</p>` : ""}
      </div>
      <div class="appointment-actions">
        <button class="text-action" type="button" data-edit="${appointment.id}">Edit</button>
        <button class="text-action danger" type="button" data-delete="${appointment.id}">Delete</button>
      </div>
    </article>
  `;
}

function renderEmptyDay() {
  return `
    <div class="empty-state">
      <h4>No jobs booked</h4>
      <p>This day is open for installs, repairs, estimates, or follow-up visits.</p>
    </div>
  `;
}

function getVisibleJobs() {
  const query = jobSearchTerm.trim().toLowerCase();

  return appointments
    .filter((appointment) => {
      if (jobStatusFilter === "open" && appointment.status === "complete") {
        return false;
      }

      if (jobStatusFilter !== "all" && jobStatusFilter !== "open" && appointment.status !== jobStatusFilter) {
        return false;
      }

      if (jobTypeFilter !== "all" && getAppointmentType(appointment) !== jobTypeFilter) {
        return false;
      }

      if (!query) {
        return true;
      }

      const client = getClient(appointment.clientId);
      const location = getAppointmentAddress(appointment);
      const crew = getCrew(appointment.crewId);
      const searchable = [
        client.name,
        client.phone,
        client.email,
        location.label,
        location.address,
        getAppointmentTitle(appointment),
        crew.name,
        crew.lead,
        statusLabels[appointment.status],
        getAppointmentTypeLabel(appointment),
        formatLongDate(appointment.date),
        appointment.notes,
      ].join(" ").toLowerCase();

      return searchable.includes(query);
    })
    .sort((a, b) => {
      const completeDelta = Number(a.status === "complete") - Number(b.status === "complete");
      return completeDelta || new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
    });
}

function renderOpenJobs() {
  const visibleJobs = getVisibleJobs();
  const openJobs = appointments.filter((appointment) => appointment.status !== "complete");
  const upcomingJobs = openJobs.filter((appointment) => appointment.status === "confirmed" && appointment.date >= toDateKey(new Date()));
  const paymentDueJobs = appointments.filter((appointment) => appointment.status === "payment_due");
  const heldJobs = appointments.filter((appointment) => appointment.status === "hold");
  const openValue = openJobs.reduce((sum, appointment) => sum + getAppointmentQuote(appointment).total, 0);
  const selectedJob = visibleJobs.find((appointment) => appointment.id === selectedJobId) || visibleJobs[0] || null;

  selectedJobId = selectedJob?.id || null;

  return `
    <div class="jobs-layout">
      <section class="jobs-main" aria-label="Open jobs list">
        <div class="jobs-toolbar">
          <label class="search-field" for="jobSearch">
            <span>Search jobs</span>
            <input id="jobSearch" type="search" value="${escapeHtml(jobSearchTerm)}" placeholder="Client, address, service, crew" />
          </label>
          <div class="segmented-control" aria-label="Job status filter">
            ${renderJobFilterButton("open", "Open")}
            ${renderJobFilterButton("confirmed", "Booked")}
            ${renderJobFilterButton("payment_due", "Payment")}
            ${renderJobFilterButton("hold", "Hold")}
            ${renderJobFilterButton("all", "All")}
          </div>
          <div class="segmented-control job-type-filter" aria-label="Job type filter">
            ${calendarTypeOrder.map((type) => renderJobTypeFilterButton(type)).join("")}
          </div>
          <button class="primary-action compact" type="button" data-job-action="new">New job</button>
        </div>

        <div class="job-stat-grid">
          <article class="metric-panel">
            <span>${openJobs.length}</span>
            <p>Open jobs</p>
          </article>
          <article class="metric-panel">
            <span>${upcomingJobs.length}</span>
            <p>Upcoming booked</p>
          </article>
          <article class="metric-panel">
            <span>${paymentDueJobs.length}</span>
            <p>Waiting payment</p>
          </article>
          <article class="metric-panel">
            <span>${heldJobs.length}</span>
            <p>On hold</p>
          </article>
          <article class="metric-panel">
            <span>${formatPrice(openValue)}</span>
            <p>Open job value</p>
          </article>
        </div>

        <div class="jobs-list-panel">
          <div class="client-list-summary">
            <strong>${visibleJobs.length.toLocaleString()} shown</strong>
            <span>${jobStatusFilter === "open" ? "All work that is not closed" : `${jobStatusFilter === "all" ? "Every job" : statusLabels[jobStatusFilter]} in the schedule`}</span>
          </div>
          <div class="jobs-list" role="table" aria-label="Jobs">
            <div class="job-list-header" role="row">
              <span>Job</span>
              <span>Client</span>
              <span>Location</span>
              <span>Status</span>
            </div>
            ${visibleJobs.length ? visibleJobs.map(renderJobBrowserRow).join("") : `
              <div class="empty-state">
                <h4>No jobs found</h4>
                <p>Try another search or change the status or type filter.</p>
              </div>
            `}
          </div>
        </div>
      </section>

      <aside class="job-detail-panel" aria-label="Selected job details">
        ${selectedJob ? renderJobBrowserDetail(selectedJob) : renderEmptyJobBrowserDetail()}
      </aside>
    </div>
  `;
}

function renderJobFilterButton(value, label) {
  return `<button class="${jobStatusFilter === value ? "is-active" : ""}" type="button" data-job-filter="${value}">${label}</button>`;
}

function renderJobTypeFilterButton(value) {
  const label = value === "all" ? "All types" : calendarTypeShortLabels[value];
  return `<button class="${jobTypeFilter === value ? "is-active" : ""}" type="button" data-job-type-filter="${value}">${escapeHtml(label)}</button>`;
}

function renderJobBrowserRow(appointment) {
  const client = getClient(appointment.clientId);
  const location = getAppointmentAddress(appointment);
  const selectedClass = appointment.id === selectedJobId ? " is-selected" : "";

  return `
    <button class="job-list-row ${getAppointmentTypeClass(appointment)}${selectedClass}" type="button" data-job-select="${escapeHtml(appointment.id)}" role="row">
      <span class="job-title-cell" role="cell">
        <strong>${formatShortDate(dateFromKey(appointment.date))} · ${formatTime(appointment.time)}</strong>
        <small>${escapeHtml(getAppointmentTitle(appointment))}</small>
      </span>
      <span class="job-client-cell" role="cell">
        <strong>${escapeHtml(client.name)}</strong>
        <small>${escapeHtml(client.phone || "No phone")}</small>
      </span>
      <span class="job-location-cell" role="cell">
        <strong>${escapeHtml(location.label || "Service address")}</strong>
        <small>${escapeHtml(location.address || "No address on file")}</small>
      </span>
      <span role="cell">
        <span class="type-badge ${getAppointmentTypeClass(appointment)}">${getAppointmentTypeShortLabel(appointment)}</span>
        <span class="status-pill status-${appointment.status}">${statusLabels[appointment.status]}</span>
      </span>
    </button>
  `;
}

function renderJobBrowserDetail(appointment) {
  const client = getClient(appointment.clientId);
  const location = getAppointmentAddress(appointment);
  const crew = getCrew(appointment.crewId);
  const quote = getAppointmentQuote(appointment);
  const conflict = findConflict(appointment);

  return `
    <section class="job-browser-card">
      <div class="job-browser-head">
        <div>
          <p class="eyebrow">${formatLongDate(appointment.date)} · ${formatTime(appointment.time)}-${formatEndTime(appointment.time, quote.duration)}</p>
          <h3>${escapeHtml(getAppointmentTitle(appointment))}</h3>
          <p>${escapeHtml(client.name)} · ${escapeHtml(client.phone || "No phone on file")}</p>
        </div>
        <div class="job-browser-badges">
          <span class="type-badge ${getAppointmentTypeClass(appointment)}">${getAppointmentTypeLabel(appointment)}</span>
          <span class="status-pill status-${appointment.status}">${statusLabels[appointment.status]}</span>
        </div>
      </div>

      <dl class="job-browser-facts">
        <div><dt>Location</dt><dd>${escapeHtml(location.label || "Service address")} · ${escapeHtml(location.address || "No address on file")}</dd></div>
        <div><dt>Crew</dt><dd>${escapeHtml(crew.name)} with ${escapeHtml(crew.lead)}</dd></div>
        <div><dt>Duration</dt><dd>${formatDuration(quote.duration)}</dd></div>
        <div><dt>Total</dt><dd>${formatPrice(quote.total)}${quote.unknownCount ? " + TBD" : ""}</dd></div>
      </dl>

      <ul class="appointment-services">
        ${quote.services.map((item) => `
          <li>
            <span>${escapeHtml(item.sku ? `${item.sku} · ${item.name}` : item.name)}</span>
            <strong>${formatPrice(item.price)}</strong>
          </li>
        `).join("")}
      </ul>

      ${appointment.notes ? `<p class="appointment-notes">${escapeHtml(appointment.notes)}</p>` : ""}
      ${conflict ? `<p class="conflict-note">Time conflict with ${escapeHtml(getClient(conflict.clientId).name)}</p>` : ""}
      ${renderPaymentStatusPanel(appointment)}

      <div class="job-browser-actions">
        <button class="secondary-action" type="button" data-job-action="schedule" data-job-id="${escapeHtml(appointment.id)}">Open schedule</button>
        <button class="secondary-action" type="button" data-job-action="edit" data-job-id="${escapeHtml(appointment.id)}">Edit job</button>
        <button class="secondary-action" type="button" data-job-action="client" data-client-id="${escapeHtml(client.id)}">Client profile</button>
        <button class="secondary-action" type="button" data-job-action="ticket" data-job-id="${escapeHtml(appointment.id)}">Open ticket</button>
        <button class="secondary-action" type="button" data-job-action="toggle-complete" data-job-id="${escapeHtml(appointment.id)}">${getCompletionActionLabel(appointment)}</button>
      </div>
    </section>
  `;
}

function renderEmptyJobBrowserDetail() {
  return `
    <section class="job-browser-card">
      <div class="empty-state">
        <h4>No job selected</h4>
        <p>Choose a job from the list to see the location, client, crew, services, and payment details.</p>
      </div>
    </section>
  `;
}

function renderBookingForm() {
  const appointment = appointments.find((item) => item.id === editingId);
  const sortedClients = [...clients].sort((a, b) => a.name.localeCompare(b.name));
  const defaultServiceIds = appointment ? getAppointmentServiceIds(appointment) : [services[0]?.id].filter(Boolean);
  const formState = appointment || {
    clientId: bookingClientId || sortedClients[0]?.id || "",
    serviceIds: defaultServiceIds,
    crewId: crews[0].id,
    date: selectedDate,
    time: "09:00",
    status: "booked",
    type: "job",
    notes: "",
  };
  const formClient = clients.find((client) => client.id === formState.clientId) || sortedClients[0] || null;
  const formLocations = formClient ? getClientAddresses(formClient) : [];
  const selectedAddressId = formLocations.some((location) => location.id === formState.addressId)
    ? formState.addressId
    : getPrimaryClientAddress(formClient || {})?.id || "";
  const selectedServiceIds = getAppointmentServiceIds(formState);
  const quote = calculateServiceQuote(selectedServiceIds);

  return `
    <form class="booking-form" id="bookingForm">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">${editingId ? "Update job" : "Book service"}</p>
          <h3>${editingId ? "Edit appointment" : "New appointment"}</h3>
        </div>
        ${editingId ? `<button class="text-action" type="button" data-action="cancel-edit">Cancel</button>` : ""}
      </div>

      <div class="client-picker">
        <label for="appointmentClient">Client</label>
        <div class="client-picker-row">
          <select id="appointmentClient" name="clientId">
            ${sortedClients.map((client) => `<option value="${client.id}" ${formState.clientId === client.id ? "selected" : ""}>${escapeHtml(formatClientOption(client))}</option>`).join("")}
          </select>
          <div class="client-picker-actions">
            <button class="secondary-action" type="button" data-client-quick="new">New</button>
            <button class="secondary-action" type="button" data-client-quick="edit" ${sortedClients.length ? "" : "disabled"}>Edit</button>
          </div>
        </div>
        <p class="client-helper">Add or update customer info here without leaving this appointment.</p>
      </div>
      <div class="location-picker" id="appointmentLocationWrap">
        <label for="appointmentAddress">Service location</label>
        <div class="client-picker-row">
          <select id="appointmentAddress" name="addressId" ${formLocations.length ? "" : "disabled"}>
            ${formLocations.length ? formLocations.map((location) => `<option value="${escapeHtml(location.id)}" ${location.id === selectedAddressId ? "selected" : ""}>${escapeHtml(formatAddressOption(location))}</option>`).join("") : `<option value="">No saved locations</option>`}
          </select>
          <button class="secondary-action" type="button" data-client-quick="location" ${sortedClients.length ? "" : "disabled"}>Add location</button>
        </div>
      </div>
      <section class="client-quick-editor" id="clientQuickEditor" hidden>
        <div class="client-quick-head">
          <div>
            <p class="eyebrow">Customer</p>
            <h4 id="clientQuickTitle">New customer</h4>
          </div>
          <button class="quick-close" type="button" data-client-quick="close" aria-label="Close customer editor">×</button>
        </div>
        <div class="form-row">
          <div>
            <label for="quickClientName">Name</label>
            <input id="quickClientName" autocomplete="off" placeholder="Customer name" />
          </div>
          <div>
            <label for="quickClientPhone">Phone</label>
            <input id="quickClientPhone" autocomplete="off" placeholder="(555) 000-0000" />
          </div>
        </div>
        <label for="quickClientEmail">Email</label>
        <input id="quickClientEmail" type="email" autocomplete="off" placeholder="client@example.com" />
        <div class="quick-location-head">
          <div>
            <label>Service locations</label>
            <p>Keep one customer profile with as many job addresses as needed.</p>
          </div>
          <button class="secondary-action compact" type="button" data-client-location-add>Add location</button>
        </div>
        <div class="quick-location-list" id="quickClientLocations"></div>
        <label for="quickClientNotes">Customer notes</label>
        <textarea id="quickClientNotes" rows="3" placeholder="Access notes, preferences, table details"></textarea>
        <p class="form-alert" id="quickClientAlert" hidden></p>
        <div class="client-quick-actions">
          <button class="primary-action compact" type="button" data-client-quick="save">Save customer</button>
          <button class="secondary-action" type="button" data-client-quick="close">Cancel</button>
        </div>
      </section>
      ${sortedClients.length ? "" : `<p class="form-alert" id="clientMissingAlert">Add a client before booking a service call.</p>`}

      <div class="service-builder">
        <div class="service-builder-head">
          <div>
            <label for="servicePickerSearch">Services database</label>
            <p>Add one or more services. The quote updates as you build the job.</p>
          </div>
          <button class="text-action" type="button" data-module="services">Manage services</button>
        </div>
        <div class="service-picker">
          <input id="servicePickerSearch" type="search" placeholder="Search SKU, item, service, or category" autocomplete="off" />
          <select id="appointmentServicePicker" aria-label="Service to add">
            ${services.map((service) => `<option value="${service.id}" data-search="${escapeHtml(`${service.sku} ${service.itemNumber} ${service.name} ${service.category}`.toLowerCase())}">${escapeHtml(formatServiceOption(service))}</option>`).join("")}
          </select>
          <button class="secondary-action" type="button" data-action="add-service">Add</button>
        </div>
        <div class="quote-lines" id="quoteLines">
          ${selectedServiceIds.map(renderServiceLineItem).join("")}
        </div>
      </div>

      <aside class="quote-panel" id="quotePanel" aria-live="polite">
        ${renderQuoteSummary(quote)}
      </aside>

      <div class="form-row">
        <div>
          <label for="appointmentDate">Date</label>
          <input id="appointmentDate" name="date" type="date" value="${formState.date}" />
        </div>
        <div>
          <label for="appointmentTime">Start</label>
          <input id="appointmentTime" name="time" type="time" value="${formState.time}" />
        </div>
      </div>

      <div class="form-row">
        <div>
          <label for="appointmentCrew">Crew</label>
          <select id="appointmentCrew" name="crewId">
            ${crews.map((crew) => `<option value="${crew.id}" ${formState.crewId === crew.id ? "selected" : ""}>${escapeHtml(crew.name)}</option>`).join("")}
          </select>
        </div>
        <div>
          <label for="appointmentStatus">Status</label>
          <select id="appointmentStatus" name="status">
            ${Object.entries(statusLabels).filter(([value]) => value !== "complete" || formState.status === "complete").map(([value, label]) => `<option value="${value}" ${formState.status === value ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </div>
      </div>

      <label for="appointmentType">Calendar color</label>
      <select id="appointmentType" name="type">
        ${Object.entries(calendarTypeLabels).map(([value, label]) => `<option value="${value}" ${getAppointmentType(formState) === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
      </select>

      <label for="appointmentNotes">Notes</label>
      <textarea id="appointmentNotes" name="notes" rows="4" placeholder="Gate code, job details, parts needed">${escapeHtml(formState.notes)}</textarea>

      <p class="form-alert" id="conflictAlert" hidden></p>
      <button class="primary-action" type="submit" ${sortedClients.length ? "" : "disabled"}>${editingId ? "Save appointment" : "Add appointment"}</button>
    </form>
  `;
}

function renderServiceLineItem(serviceId) {
  const service = getService(serviceId);

  return `
    <div class="quote-line service-${service.color}" data-service-line>
      <input type="hidden" name="serviceIds" value="${escapeHtml(service.id)}" />
      <div>
        <strong>${escapeHtml(service.sku ? `${service.sku} · ${service.name}` : service.name)}</strong>
        <span>${escapeHtml(service.category)} · ${formatDuration(service.duration)} · ${formatPrice(service.price)}</span>
      </div>
      <button class="text-action danger" type="button" data-action="remove-service" aria-label="Remove ${escapeHtml(service.name)}">Remove</button>
    </div>
  `;
}

function renderQuoteSummary(quote) {
  return `
    <div class="quote-total">
      <div>
        <p class="eyebrow">Live quote total</p>
        <strong>${formatPrice(quote.total)}</strong>
      </div>
      <span>${quote.services.length} service${quote.services.length === 1 ? "" : "s"}</span>
    </div>
    <dl class="quote-breakdown">
      <div><dt>Subtotal</dt><dd>${formatPrice(quote.subtotal)}</dd></div>
      <div><dt>${businessProfile.taxes.pst.label} ${(businessProfile.taxes.pst.rate * 100).toFixed(0)}%</dt><dd>${formatPrice(quote.pst)}</dd></div>
      <div><dt>${businessProfile.taxes.gst.label} ${(businessProfile.taxes.gst.rate * 100).toFixed(0)}%</dt><dd>${formatPrice(quote.gst)}</dd></div>
      <div class="quote-breakdown-total"><dt>Total</dt><dd>${formatPrice(quote.total)}</dd></div>
      <div><dt>Estimated labor</dt><dd>${formatDuration(quote.duration)}</dd></div>
      <div><dt>Suggested deposit</dt><dd>${formatPrice(quote.deposit)}</dd></div>
      <div><dt>Balance due</dt><dd>${formatPrice(quote.balance)}</dd></div>
      ${quote.unknownCount ? `<div><dt>TBD items</dt><dd>${quote.unknownCount}</dd></div>` : ""}
    </dl>
    ${quote.unknownCount ? `<p class="quote-warning">Some selected services need custom pricing before the quote is final.</p>` : ""}
  `;
}

function renderClients() {
  const visibleClients = getVisibleClients();
  const activeClients = clients.filter((client) =>
    appointments.some((appointment) => appointment.clientId === client.id && appointment.status !== "complete")
  );
  const outstandingAccounts = getOutstandingClients();
  const outstandingTotal = getInvoiceTotal(getOpenInvoices());
  const serviceCallCount = appointments.length;
  const selectedClient = clientCreatingNew
    ? null
    : clients.find((client) => client.id === (selectedClientId || clientEditingId))
    || visibleClients[0]
    || clients[0]
    || null;
  const formClient = clients.find((client) => client.id === clientEditingId) || {
    id: "",
    customerNumber: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    status: "active",
    tags: [],
  };

  return `
    <div class="clients-layout">
      <section class="clients-main">
        <div class="clients-toolbar">
          <label class="search-field" for="clientSearch">
            <span>Search clients</span>
            <input id="clientSearch" type="search" value="${escapeHtml(clientSearchTerm)}" placeholder="Name, phone, email, address" />
          </label>
          ${clientSearchTerm ? `<button class="secondary-action" type="button" data-client-action="clear-search">Clear</button>` : ""}
          <button class="secondary-action ${clientOutstandingOnly ? "is-active" : ""}" type="button" data-client-action="toggle-outstanding">Outstanding</button>
          <button class="primary-action compact" type="button" data-client-action="new">New client</button>
        </div>

        <div class="client-stat-grid">
          <article class="metric-panel">
            <span>${clients.length}</span>
            <p>Total clients</p>
          </article>
          <article class="metric-panel">
            <span>${activeClients.length}</span>
            <p>Active clients</p>
          </article>
          <article class="metric-panel">
            <span>${serviceCallCount}</span>
            <p>Service calls</p>
          </article>
          <article class="metric-panel">
            <span>${outstandingAccounts.length}</span>
            <p>Outstanding accounts</p>
          </article>
          <article class="metric-panel">
            <span>${formatPrice(outstandingTotal)}</span>
            <p>Outstanding total</p>
          </article>
        </div>

        <div class="client-list-panel">
          <div class="client-list-summary">
            <strong>${visibleClients.length.toLocaleString()} shown</strong>
            <span>${clientOutstandingOnly ? "Showing clients with unpaid invoices" : `${clients.length.toLocaleString()} total clients in database`}</span>
          </div>
          <div class="client-list" role="table" aria-label="Clients">
            <div class="client-list-header" role="row">
              <span>Client</span>
              <span>Contact</span>
              <span>Service address</span>
              <span>Jobs</span>
              <span>Next work</span>
              <span>Actions</span>
            </div>
            ${visibleClients.length ? visibleClients.map(renderClientRow).join("") : `
              <div class="empty-state">
                <h4>No clients found</h4>
                <p>Try another search or add a new client.</p>
              </div>
            `}
          </div>
        </div>
      </section>

      <section class="client-detail-panel" aria-label="Expanded client profile">
        ${clientCreatingNew || clientEditingId ? renderClientEditor(formClient) : selectedClient ? renderClientProfile(selectedClient) : renderEmptyClientDetail()}
      </section>
    </div>
  `;
}

function renderClientEditor(formClient) {
  return `
    <section class="client-editor" aria-label="Client editor">
      <form class="booking-form" id="clientForm">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">${clientEditingId ? "Update client" : "Add client"}</p>
            <h3>${clientEditingId ? "Edit client profile" : "New client profile"}</h3>
          </div>
          <button class="text-action" type="button" data-client-action="cancel">Cancel</button>
        </div>

        <div class="client-editor-grid">
          <div>
            <label for="clientName">Name</label>
            <input id="clientName" name="name" value="${escapeHtml(formClient.name)}" placeholder="Customer name" required />
          </div>
          <div>
            <label for="clientPhone">Phone</label>
            <input id="clientPhone" name="phone" value="${escapeHtml(formClient.phone)}" placeholder="(555) 000-0000" />
          </div>
          <div>
            <label for="clientEmail">Email</label>
            <input id="clientEmail" name="email" type="email" value="${escapeHtml(formClient.email)}" placeholder="client@example.com" />
          </div>
          <div>
            <label for="clientAddress">Primary service address</label>
            <input id="clientAddress" name="address" value="${escapeHtml(formClient.address)}" placeholder="Service address" />
          </div>
        </div>

        <label for="clientNotes">Notes</label>
        <textarea id="clientNotes" name="notes" rows="4" placeholder="Access notes, preferences, table details">${escapeHtml(formClient.notes)}</textarea>

        <div class="client-editor-actions">
          <button class="primary-action" type="submit">${clientEditingId ? "Save client" : "Add client"}</button>
          ${clientEditingId ? `<button class="secondary-action danger" type="button" data-client-action="delete">Delete client</button>` : ""}
        </div>
        <p class="form-alert" id="clientAlert" hidden></p>
      </form>
    </section>
  `;
}

function renderEmptyClientDetail() {
  return `
    <section class="client-profile-panel">
      <div class="empty-state">
        <h4>No client selected</h4>
        <p>Select a client profile or add a new customer to see the expanded details here.</p>
      </div>
    </section>
  `;
}

function renderClientRow(client) {
  const visitSummary = getClientVisitSummary(client.id);
  const clientLocations = getClientAddresses(client);
  const openInvoices = getClientOpenInvoices(client.id);
  const paymentArchive = getClientPaymentArchive(client.id);
  const outstandingTotal = getInvoiceTotal(openInvoices);
  const upcomingJob = visitSummary.futureVisits[0] || visitSummary.currentBooked[0];
  const initial = client.name.trim()[0]?.toUpperCase() || "?";
  const selectedClass = client.id === selectedClientId || client.id === clientEditingId ? " is-selected" : "";

  return `
    <article class="client-row${selectedClass}" role="row">
      <div class="client-name-cell" role="cell">
        <div class="profile-initial small">${escapeHtml(initial)}</div>
        <div>
          <strong>${escapeHtml(client.name)}</strong>
          <small>${escapeHtml(client.customerNumber || client.status)}</small>
        </div>
      </div>
      <div class="client-contact-cell" role="cell">
        <span>${escapeHtml(client.phone || "No phone")}</span>
        <small>${escapeHtml(client.email || "No email")}</small>
      </div>
      <div class="client-address-cell" role="cell">
        <span>${escapeHtml(client.address || "No address")}</span>
        <small>${clientLocations.length > 1 ? `${clientLocations.length} locations` : escapeHtml(client.notes || "Primary location")}</small>
      </div>
      <div class="client-jobs-cell" role="cell">
        <strong>${visitSummary.all.length}</strong>
        <small>${openInvoices.length ? `${formatPrice(outstandingTotal)} due` : `${visitSummary.currentBooked.length} booked`}</small>
      </div>
      <div class="client-next-cell" role="cell">
        <span>${upcomingJob ? formatLongDate(upcomingJob.date) : "No active work"}</span>
        ${upcomingJob ? `<small>${formatTime(upcomingJob.time)} · ${getAppointmentTypeShortLabel(upcomingJob)} · ${escapeHtml(getAppointmentTitle(upcomingJob))}</small>` : ""}
      </div>
      <div class="client-actions-cell" role="cell">
        <button class="text-action" type="button" data-client-profile="${escapeHtml(client.id)}">Profile</button>
        <button class="text-action" type="button" data-client-schedule="${escapeHtml(client.id)}">Book</button>
      </div>
    </article>
  `;
}

function renderClientProfile(client) {
  const visitSummary = getClientVisitSummary(client.id);
  const clientLocations = getClientAddresses(client);
  const openInvoices = getClientOpenInvoices(client.id);
  const paymentArchive = getClientPaymentArchive(client.id);
  const clientTickets = getClientServiceTickets(client.id);
  const portalTickets = getClientServiceTickets(client.id, true);
  const outstandingTotal = getInvoiceTotal(openInvoices);
  const initial = client.name.trim()[0]?.toUpperCase() || "?";

  return `
    <section class="client-profile-panel" aria-label="Customer profile">
      <div class="client-profile-head">
        <div class="profile-initial">${escapeHtml(initial)}</div>
        <div>
          <p class="eyebrow">Customer profile</p>
          <h3>${escapeHtml(client.name)}</h3>
          <p>${escapeHtml(client.phone || "No phone")} · ${escapeHtml(client.email || "No email")}</p>
          <p>${clientLocations.length ? `${clientLocations.length} service location${clientLocations.length === 1 ? "" : "s"}` : "No service locations"}</p>
        </div>
        <div class="client-profile-actions">
          <button class="secondary-action" type="button" data-client-schedule="${escapeHtml(client.id)}">Book service</button>
          <button class="primary-action compact" type="button" data-client-edit="${escapeHtml(client.id)}">Edit profile</button>
        </div>
      </div>
      ${client.notes ? `<p class="client-profile-note">${escapeHtml(client.notes)}</p>` : ""}
      <dl class="client-profile-facts">
        <div><dt>Customer #</dt><dd>${escapeHtml(client.customerNumber || "Not assigned")}</dd></div>
        <div><dt>Status</dt><dd>${escapeHtml(client.status || "active")}</dd></div>
        <div><dt>Tags</dt><dd>${client.tags?.length ? escapeHtml(client.tags.join(", ")) : "No tags"}</dd></div>
        <div><dt>Created</dt><dd>${formatRecordDate(client.createdAt)}</dd></div>
        <div><dt>Updated</dt><dd>${formatRecordDate(client.updatedAt)}</dd></div>
      </dl>
      ${renderClientLocations(client)}
      <div class="client-profile-stats">
        <div><strong>${visitSummary.currentBooked.length}</strong><span>Booked</span></div>
        <div><strong>${visitSummary.futureVisits.length}</strong><span>Future</span></div>
        <div><strong>${clientTickets.filter((ticket) => ticket.status !== "resolved").length}</strong><span>Tickets</span></div>
        <div><strong>${formatPrice(outstandingTotal)}</strong><span>Due</span></div>
      </div>
      ${renderClientWarrantyPortal(client, portalTickets)}
      ${renderClientOutstanding(client, openInvoices)}
      ${renderClientPaymentArchive(client, paymentArchive)}
      ${renderClientVisitSection("Currently booked", visitSummary.currentBooked, "No booked work")}
      ${renderClientVisitSection("Future visits", visitSummary.futureVisits, "No future visits")}
      ${renderClientVisitSection("Past visits", visitSummary.pastVisits, "No past visits")}
    </section>
  `;
}

function renderClientOutstanding(client, openInvoices) {
  const totalDue = getInvoiceTotal(openInvoices);

  return `
    <section class="client-outstanding-section ${openInvoices.length ? "has-balance" : ""}">
      <div class="client-visit-section-head">
        <h4>Outstanding account</h4>
        <span>${formatPrice(totalDue)}</span>
      </div>
      <div class="client-outstanding-list">
        ${openInvoices.length ? openInvoices.map((appointment) => {
          const quote = getAppointmentQuote(appointment);
          const location = getAppointmentAddress(appointment);

          return `
            <article class="client-outstanding-row">
              <div class="client-outstanding-main">
                <div>
                  <strong>${formatShortDate(dateFromKey(appointment.date))} · ${escapeHtml(getAppointmentTitle(appointment))}</strong>
                  <span>${escapeHtml(location.label || "Location")} · Waiting payment</span>
                </div>
                <b>${formatPrice(quote.total)}</b>
              </div>
              <details class="client-payment-details">
                <summary>Confirm payment</summary>
                ${renderClientPaymentForm(appointment)}
              </details>
              <div class="client-outstanding-actions">
                <button class="text-action" type="button" data-client-open-job="${escapeHtml(appointment.id)}">Open invoice</button>
              </div>
            </article>
          `;
        }).join("") : `<p class="client-empty-line">No outstanding balance for ${escapeHtml(client.name)}.</p>`}
      </div>
    </section>
  `;
}

function renderClientWarrantyPortal(client, tickets) {
  return `
    <section class="client-warranty-section ${tickets.some((ticket) => ticket.status === "waiting_warranty") ? "has-waiting" : ""}">
      <div class="client-visit-section-head">
        <h4>Client portal warranty tickets</h4>
        <span>${tickets.length}</span>
      </div>
      <div class="client-warranty-list">
        ${tickets.length ? tickets.slice(0, 6).map((ticket) => `
          <article class="client-warranty-row status-${ticket.status}">
            <div>
              <strong>${escapeHtml(ticket.title)}</strong>
              <span>${ticketStatusLabels[ticket.status]} · ${ticketPriorityLabels[ticket.priority]}</span>
              <small>${escapeHtml(ticket.nextStep || ticket.issue || "No next step yet.")}</small>
            </div>
            <button class="text-action" type="button" data-client-open-ticket="${escapeHtml(ticket.id)}">Open</button>
          </article>
        `).join("") : `<p class="client-empty-line">No portal-visible warranty tickets for ${escapeHtml(client.name)}.</p>`}
      </div>
      <div class="client-warranty-actions">
        <button class="secondary-action compact" type="button" data-client-ticket-new="${escapeHtml(client.id)}">New warranty ticket</button>
        <button class="secondary-action compact" type="button" data-module="tickets">Open ticket desk</button>
      </div>
    </section>
  `;
}

function renderClientPaymentForm(appointment) {
  const quote = getAppointmentQuote(appointment);

  return `
    <form class="client-payment-form" data-payment-form="${escapeHtml(appointment.id)}">
      <div class="client-payment-grid">
        <div>
          <label for="clientPaymentAmount-${escapeHtml(appointment.id)}">Amount</label>
          <input id="clientPaymentAmount-${escapeHtml(appointment.id)}" name="amount" type="number" min="0" step="0.01" value="${quote.total}" required />
        </div>
        <div>
          <label for="clientPaymentMethod-${escapeHtml(appointment.id)}">Method</label>
          <select id="clientPaymentMethod-${escapeHtml(appointment.id)}" name="method">
            <option value="card">Card</option>
            <option value="e-transfer">E-transfer</option>
            <option value="cash">Cash</option>
            <option value="cheque">Cheque</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label for="clientPaymentDate-${escapeHtml(appointment.id)}">Paid date</label>
          <input id="clientPaymentDate-${escapeHtml(appointment.id)}" name="paidDate" type="date" value="${toDateKey(new Date())}" />
        </div>
        <div>
          <label for="clientPaymentReference-${escapeHtml(appointment.id)}">Reference</label>
          <input id="clientPaymentReference-${escapeHtml(appointment.id)}" name="reference" placeholder="Receipt or transfer note" />
        </div>
      </div>
      <label for="clientPaymentNotes-${escapeHtml(appointment.id)}">Payment notes</label>
      <textarea id="clientPaymentNotes-${escapeHtml(appointment.id)}" name="notes" rows="2" placeholder="Optional note"></textarea>
      <button class="primary-action compact" type="submit">Record payment and archive</button>
    </form>
  `;
}

function renderClientPaymentArchive(client, paidAppointments) {
  return `
    <section class="client-payment-archive">
      <div class="client-visit-section-head">
        <h4>Payment archive</h4>
        <span>${paidAppointments.length}</span>
      </div>
      <div class="client-payment-archive-list">
        ${paidAppointments.length ? paidAppointments.slice(0, 8).map((appointment) => {
          const payment = appointment.payment;
          const location = getAppointmentAddress(appointment);

          return `
            <article class="client-payment-archive-row">
              <div>
                <strong>${formatPrice(payment.amount)} · ${escapeHtml(payment.methodLabel)}</strong>
                <span>${formatShortDate(dateFromKey(payment.paidDate))} · ${escapeHtml(getAppointmentTitle(appointment))}</span>
                <small>${escapeHtml(location.label || "Location")} · ${escapeHtml(payment.reference || "No reference")}</small>
              </div>
              <button class="text-action" type="button" data-client-open-job="${escapeHtml(appointment.id)}">Open</button>
            </article>
          `;
        }).join("") : `<p class="client-empty-line">No payment archive yet for ${escapeHtml(client.name)}.</p>`}
      </div>
    </section>
  `;
}

function renderClientLocations(client) {
  const locations = getClientAddresses(client);

  return `
    <section class="client-location-section">
      <div class="client-visit-section-head">
        <h4>Service locations</h4>
        <span>${locations.length}</span>
      </div>
      <div class="client-location-list">
        ${locations.length ? locations.map((location) => `
          <div class="client-location-row">
            <strong>${escapeHtml(location.label)}</strong>
            <span>${escapeHtml(location.address)}</span>
          </div>
        `).join("") : `<p class="client-empty-line">No saved locations</p>`}
      </div>
    </section>
  `;
}

function renderClientVisitSection(title, visits, emptyLabel) {
  return `
    <section class="client-visit-section">
      <div class="client-visit-section-head">
        <h4>${escapeHtml(title)}</h4>
        <span>${visits.length}</span>
      </div>
      <div class="client-visit-list">
        ${visits.length ? visits.slice(0, 6).map(renderClientVisitRow).join("") : `<p class="client-empty-line">${escapeHtml(emptyLabel)}</p>`}
      </div>
    </section>
  `;
}

function renderClientVisitRow(appointment) {
  const crew = getCrew(appointment.crewId);
  const location = getAppointmentAddress(appointment);
  const quote = getAppointmentQuote(appointment);
  const isComplete = appointment.status === "complete";

  return `
    <article class="client-visit-row ${getAppointmentTypeClass(appointment)} ${isComplete ? "is-complete" : ""}">
      <div>
        <strong>${formatShortDate(dateFromKey(appointment.date))} · ${formatTime(appointment.time)}</strong>
        <span>${escapeHtml(getAppointmentTitle(appointment))}</span>
        <small>${escapeHtml(location.label || "Location")} · ${escapeHtml(crew.name)} · ${getAppointmentTypeLabel(appointment)} · ${statusLabels[appointment.status]} · ${formatPrice(quote.total)}</small>
      </div>
      <div class="client-visit-actions">
        <button class="text-action" type="button" data-client-open-job="${escapeHtml(appointment.id)}">Open</button>
        <button class="text-action" type="button" data-client-toggle-complete="${escapeHtml(appointment.id)}">${getCompletionActionLabel(appointment)}</button>
      </div>
    </article>
  `;
}

function getVisibleCustomOrders() {
  const query = customOrderSearchTerm.trim().toLowerCase();

  return customOrders
    .filter((order) => customOrderStatusFilter === "all" || order.status === customOrderStatusFilter)
    .filter((order) => {
      if (!query) {
        return true;
      }

      const client = getClient(order.clientId);
      const crew = getCrew(order.installCrewId);
      const searchable = [
        client.name,
        client.phone,
        client.email,
        order.item,
        order.finish,
        order.orderRef,
        order.productionRef,
        customOrderStatusLabels[order.status],
        crew.name,
        order.notes,
      ].join(" ").toLowerCase();

      return searchable.includes(query);
    })
    .sort((a, b) => {
      const stageDelta = getCustomOrderStageIndex(a.status) - getCustomOrderStageIndex(b.status);
      return stageDelta || (b.updatedAt || "").localeCompare(a.updatedAt || "");
    });
}

function renderCustomOrders() {
  const visibleOrders = getVisibleCustomOrders();
  const selectedOrder = customOrderEditingId || customOrderCreatingNew
    ? null
    : customOrders.find((order) => order.id === selectedCustomOrderId) || visibleOrders[0] || null;
  const inProduction = customOrders.filter((order) => ["production", "production_done"].includes(order.status));
  const shipped = customOrders.filter((order) => ["shipped", "arrived"].includes(order.status));
  const installReady = customOrders.filter((order) => customOrderInstallReadyStatuses.includes(order.status) && !order.installDate);
  const installBooked = customOrders.filter((order) => order.status === "install_booked");
  const formOrder = customOrderEditingId
    ? customOrders.find((order) => order.id === customOrderEditingId) || selectedOrder || defaultCustomOrderDraft()
    : defaultCustomOrderDraft();

  selectedCustomOrderId = selectedOrder?.id || selectedCustomOrderId;

  return `
    <div class="custom-orders-layout">
      <section class="custom-orders-main">
        <div class="custom-orders-toolbar">
          <label class="search-field" for="customOrderSearch">
            <span>Search custom orders</span>
            <input id="customOrderSearch" type="search" value="${escapeHtml(customOrderSearchTerm)}" placeholder="Customer, item, order number, production" />
          </label>
          ${customOrderSearchTerm ? `<button class="secondary-action" type="button" data-custom-order-action="clear-search">Clear</button>` : ""}
          <button class="primary-action compact" type="button" data-custom-order-action="new">New custom order</button>
        </div>

        <div class="custom-order-stat-grid">
          <article class="metric-panel">
            <span>${customOrders.length}</span>
            <p>Total custom orders</p>
          </article>
          <article class="metric-panel">
            <span>${inProduction.length}</span>
            <p>In production</p>
          </article>
          <article class="metric-panel">
            <span>${shipped.length}</span>
            <p>Shipped or landed</p>
          </article>
          <article class="metric-panel ${installReady.length ? "needs-attention" : ""}">
            <span>${installReady.length}</span>
            <p>Ready to book install</p>
          </article>
          <article class="metric-panel">
            <span>${installBooked.length}</span>
            <p>Booked for install</p>
          </article>
        </div>

        <div class="custom-order-filter-row" role="group" aria-label="Custom order status filter">
          ${customOrderStatusOrder.map(renderCustomOrderFilterButton).join("")}
        </div>

        <div class="custom-order-list-panel">
          <div class="client-list-summary">
            <strong>${visibleOrders.length.toLocaleString()} shown</strong>
            <span>${installReady.length} waiting for install booking once shipped</span>
          </div>
          <div class="custom-order-list">
            ${visibleOrders.length ? visibleOrders.map(renderCustomOrderRow).join("") : `
              <div class="empty-state">
                <h4>No custom orders found</h4>
                <p>Try another search, change the status filter, or add the next custom table.</p>
              </div>
            `}
          </div>
        </div>
      </section>

      <aside class="custom-order-side-panel" aria-label="Custom order details">
        ${customOrderEditingId || customOrderCreatingNew ? renderCustomOrderEditor(formOrder) : selectedOrder ? renderCustomOrderDetail(selectedOrder) : renderCustomOrderEditor(formOrder)}
      </aside>
    </div>
  `;
}

function renderCustomOrderFilterButton(status) {
  const label = status === "all" ? "All" : customOrderStatusLabels[status];
  return `<button class="${customOrderStatusFilter === status ? "is-active" : ""}" type="button" data-custom-order-filter="${status}">${escapeHtml(label)}</button>`;
}

function renderCustomOrderRow(order) {
  const client = getClient(order.clientId);
  const selectedClass = order.id === selectedCustomOrderId ? " is-selected" : "";
  const installClass = customOrderInstallReadyStatuses.includes(order.status) && !order.installDate ? " needs-install" : "";

  return `
    <article class="custom-order-row status-${order.status}${selectedClass}${installClass}">
      <button type="button" data-custom-order-select="${escapeHtml(order.id)}">
        <div>
          <span class="status-pill custom-status-${order.status}">${customOrderStatusLabels[order.status]}</span>
          <h4>${escapeHtml(order.item)}</h4>
          <p>${escapeHtml(client.name)} · ${escapeHtml(client.phone || "No phone")}</p>
        </div>
        <div>
          <strong>${escapeHtml(order.orderRef || "No order ref")}</strong>
          <span>${escapeHtml(order.productionRef || "No production ref")}</span>
          <small>${escapeHtml(order.finish || "Finish not recorded")}</small>
        </div>
        <div>
          <strong>${order.shippedAt ? customOrderDate(order.shippedAt) : "Not shipped"}</strong>
          <span>${order.arrivedAt ? `Arrived ${customOrderDate(order.arrivedAt)}` : order.targetArrivalAt ? `Target ${customOrderDate(order.targetArrivalAt)}` : "No arrival date"}</span>
          <small>${order.installDate ? `Install ${customOrderDate(order.installDate)} ${formatTime(order.installTime)}` : customOrderInstallReadyStatuses.includes(order.status) ? "Install can be booked" : "Install locked until shipped"}</small>
        </div>
      </button>
    </article>
  `;
}

function renderCustomOrderDetail(order) {
  const client = getClient(order.clientId);
  const installReady = customOrderInstallReadyStatuses.includes(order.status);
  const appointment = order.appointmentId ? appointments.find((item) => item.id === order.appointmentId) : null;

  return `
    <section class="custom-order-detail-card">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Selected custom order</p>
          <h3>${escapeHtml(order.item)}</h3>
        </div>
        <button class="primary-action compact" type="button" data-custom-order-edit="${escapeHtml(order.id)}">Edit</button>
      </div>

      ${renderCustomOrderTracker(order)}

      <dl class="custom-order-fact-grid">
        <div><dt>Customer</dt><dd>${escapeHtml(client.name)}</dd></div>
        <div><dt>Owner</dt><dd>${escapeHtml(getUser(order.ownerKey).name)}</dd></div>
        <div><dt>Order ref</dt><dd>${escapeHtml(order.orderRef || "Not recorded")}</dd></div>
        <div><dt>Production ref</dt><dd>${escapeHtml(order.productionRef || "Not recorded")}</dd></div>
      </dl>

      <section class="custom-order-copy-panel">
        <h4>Ordered item</h4>
        <p>${escapeHtml(order.item)}</p>
        <p>${escapeHtml(order.finish || "Finish details not recorded yet.")}</p>
      </section>

      <div class="custom-order-stage-grid">
        <section class="custom-stage-card">
          <span>Production</span>
          <strong>${order.productionDoneAt ? "Finished" : order.productionSentAt ? "In production" : "Not sent"}</strong>
          <p>${order.productionSentAt ? `Sent ${customOrderDate(order.productionSentAt)}` : "Production date is not recorded."}</p>
          ${order.productionDoneAt ? `<p>Finished ${customOrderDate(order.productionDoneAt)}</p>` : ""}
        </section>
        <section class="custom-stage-card">
          <span>Shipping</span>
          <strong>${order.arrivedAt ? "Arrived in Vancouver" : order.shippedAt ? "In transit" : "Not shipped"}</strong>
          <p>${order.shippedAt ? `Shipped ${customOrderDate(order.shippedAt)}` : "Shipping date is not recorded."}</p>
          <p>${order.arrivedAt ? `Arrived ${customOrderDate(order.arrivedAt)}` : order.targetArrivalAt ? `Target ${customOrderDate(order.targetArrivalAt)}` : "No arrival target."}</p>
        </section>
      </div>

      ${order.notes ? `
        <section class="custom-order-copy-panel">
          <h4>Notes</h4>
          <p>${escapeHtml(order.notes)}</p>
        </section>
      ` : ""}

      <section class="custom-order-install-panel ${installReady ? "" : "is-locked"}">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">${installReady ? "Install booking" : "Install locked"}</p>
            <h3>${order.installDate ? "Booked for install" : "Book install"}</h3>
          </div>
          ${appointment ? `<button class="secondary-action compact" type="button" data-custom-order-open-job="${escapeHtml(appointment.id)}">Open job</button>` : ""}
        </div>
        ${installReady ? renderCustomOrderInstallForm(order) : `<p class="custom-lock-note">The install can be booked after this custom item is marked shipped.</p>`}
      </section>

      <div class="custom-order-actions">
        <button class="secondary-action" type="button" data-custom-order-advance="${escapeHtml(order.id)}">Move forward</button>
        <button class="secondary-action danger" type="button" data-custom-order-delete="${escapeHtml(order.id)}">Delete</button>
      </div>
    </section>
  `;
}

function renderCustomOrderTracker(order) {
  const stageIndex = getCustomOrderStageIndex(order.status);

  return `
    <div class="custom-order-tracker" aria-label="Custom order tracking">
      ${customOrderWorkflow.map((status, index) => {
        const state = index < stageIndex ? "is-complete" : index === stageIndex ? "is-current" : "is-upcoming";
        return `
          <div class="custom-track-pill ${state}">
            <span>${index + 1}</span>
            <strong>${escapeHtml(customOrderStatusLabels[status])}</strong>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderCustomOrderInstallForm(order) {
  return `
    <form class="booking-form custom-install-form" data-custom-order-install-form="${escapeHtml(order.id)}">
      <div class="form-row">
        <div>
          <label for="customInstallDate-${escapeHtml(order.id)}">Install date</label>
          <input id="customInstallDate-${escapeHtml(order.id)}" name="installDate" type="date" value="${escapeHtml(order.installDate || toDateKey(addDays(new Date(), 3)))}" required />
        </div>
        <div>
          <label for="customInstallTime-${escapeHtml(order.id)}">Install time</label>
          <select id="customInstallTime-${escapeHtml(order.id)}" name="installTime">
            ${scheduleTimeSlots.map((time) => `<option value="${time}" ${order.installTime === time ? "selected" : ""}>${formatTime(time)}</option>`).join("")}
          </select>
        </div>
      </div>
      <label for="customInstallCrew-${escapeHtml(order.id)}">Crew</label>
      <select id="customInstallCrew-${escapeHtml(order.id)}" name="installCrewId">
        ${crews.map((crew) => `<option value="${crew.id}" ${order.installCrewId === crew.id ? "selected" : ""}>${escapeHtml(crew.name)} · ${escapeHtml(crew.lead)}</option>`).join("")}
      </select>
      <button class="primary-action compact" type="submit">${order.installDate ? "Update install booking" : "Book install"}</button>
    </form>
  `;
}

function renderCustomOrderEditor(order) {
  const sortedClients = [...clients].sort((a, b) => a.name.localeCompare(b.name));

  return `
    <section class="custom-order-editor-card">
      <form class="booking-form" id="customOrderForm">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">${customOrderEditingId ? "Update custom order" : "Add custom order"}</p>
            <h3>${customOrderEditingId ? "Edit tracking details" : "New custom item"}</h3>
          </div>
          ${customOrderEditingId ? `<button class="text-action" type="button" data-custom-order-action="cancel">Cancel</button>` : ""}
        </div>

        <label for="customOrderClient">Customer</label>
        <select id="customOrderClient" name="clientId" required>
          ${sortedClients.map((client) => `<option value="${client.id}" ${order.clientId === client.id ? "selected" : ""}>${escapeHtml(formatClientOption(client))}</option>`).join("")}
        </select>

        <label for="customOrderItem">What was ordered</label>
        <input id="customOrderItem" name="item" value="${escapeHtml(order.item)}" maxlength="110" placeholder="Custom 8' pool table, rails, top..." required />

        <label for="customOrderFinish">Finish and details</label>
        <textarea id="customOrderFinish" name="finish" rows="3" maxlength="520" placeholder="Wood, cloth color, pockets, special notes">${escapeHtml(order.finish)}</textarea>

        <div class="form-row">
          <div>
            <label for="customOrderRef">Order ref</label>
            <input id="customOrderRef" name="orderRef" value="${escapeHtml(order.orderRef)}" maxlength="40" placeholder="CO-1048" />
          </div>
          <div>
            <label for="customProductionRef">Production ref</label>
            <input id="customProductionRef" name="productionRef" value="${escapeHtml(order.productionRef)}" maxlength="50" placeholder="Shop or supplier ref" />
          </div>
        </div>

        <div class="form-row">
          <div>
            <label for="customOrderStatus">Status</label>
            <select id="customOrderStatus" name="status">
              ${Object.entries(customOrderStatusLabels).map(([value, label]) => `<option value="${value}" ${order.status === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="customOrderOwner">Owner</label>
            <select id="customOrderOwner" name="ownerKey">
              ${Object.entries(users).map(([key, user]) => `<option value="${key}" ${order.ownerKey === key ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="custom-date-grid">
          ${renderCustomOrderDateInput("orderedAt", "Ordered", order.orderedAt)}
          ${renderCustomOrderDateInput("productionSentAt", "Sent to production", order.productionSentAt)}
          ${renderCustomOrderDateInput("productionDoneAt", "Finished production", order.productionDoneAt)}
          ${renderCustomOrderDateInput("shippedAt", "Shipped", order.shippedAt)}
          ${renderCustomOrderDateInput("arrivedAt", "Arrived in Vancouver", order.arrivedAt)}
          ${renderCustomOrderDateInput("targetArrivalAt", "Target arrival", order.targetArrivalAt)}
        </div>

        <label for="customOrderNotes">Notes</label>
        <textarea id="customOrderNotes" name="notes" rows="4" maxlength="900" placeholder="Customer promises, supplier notes, delivery watch-outs">${escapeHtml(order.notes)}</textarea>

        <button class="primary-action" type="submit">${customOrderEditingId ? "Save custom order" : "Add custom order"}</button>
      </form>
    </section>
  `;
}

function renderCustomOrderDateInput(name, label, value) {
  return `
    <div>
      <label for="custom-${name}">${escapeHtml(label)}</label>
      <input id="custom-${name}" name="${name}" type="date" value="${escapeHtml(value || "")}" />
    </div>
  `;
}

function defaultCustomOrderDraft() {
  return normalizeCustomOrder({
    clientId: clients[0]?.id || "",
    item: "",
    status: "ordered",
    orderedAt: toDateKey(new Date()),
    ownerKey: currentUserKey,
  });
}

function getCustomOrderStageIndex(status) {
  return Math.max(0, customOrderWorkflow.indexOf(status));
}

function customOrderDate(dateKey) {
  return dateKey ? formatShortDate(dateFromKey(dateKey)) : "Not recorded";
}

function renderTickets() {
  const visibleTickets = getVisibleServiceTickets();
  const selectedTicket = ticketEditingId || ticketCreatingNew ? null : getSelectedServiceTicket();
  const openTickets = getOpenServiceTickets();
  const waitingTickets = getWaitingWarrantyTickets();
  const approvedTickets = serviceTickets.filter((ticket) => ticket.status === "warranty_approved");
  const expiringTickets = serviceTickets.filter(isWarrantyExpiring);
  const linkedAppointment = appointments.find((appointment) => appointment.id === ticketAppointmentId);
  const linkedClientId = ticketClientId || linkedAppointment?.clientId || "";
  const linkedTitle = linkedAppointment ? `${getAppointmentTitle(linkedAppointment)} ticket` : "";
  const linkedIssue = linkedAppointment ? `Opened from the ${formatLongDate(linkedAppointment.date)} service call at ${formatTime(linkedAppointment.time)}.` : "";
  const formTicket = serviceTickets.find((ticket) => ticket.id === ticketEditingId) || {
    id: "",
    clientId: linkedClientId || selectedTicket?.clientId || clients[0]?.id || "",
    appointmentId: linkedAppointment?.id || "",
    title: linkedTitle,
    issue: linkedIssue,
    status: "intake",
    priority: "normal",
    product: linkedAppointment ? getAppointmentTitle(linkedAppointment) : "",
    serialNumber: "",
    warrantyExpires: "",
    submittedAt: toDateKey(new Date()),
    nextStep: linkedAppointment ? "Review the service notes and add warranty details for the client portal." : "",
    ownerKey: currentUserKey,
    portalVisible: true,
  };

  return `
    <div class="ticket-layout">
      <section class="ticket-main">
        <div class="ticket-toolbar">
          <label class="search-field" for="ticketSearch">
            <span>Search tickets</span>
            <input id="ticketSearch" type="search" value="${escapeHtml(ticketSearchTerm)}" placeholder="Client, warranty, product, issue" />
          </label>
          ${ticketSearchTerm ? `<button class="secondary-action" type="button" data-ticket-action="clear-search">Clear</button>` : ""}
          <button class="primary-action compact" type="button" data-ticket-action="new">New ticket</button>
        </div>

        <div class="ticket-stat-grid">
          <article class="metric-panel">
            <span>${openTickets.length}</span>
            <p>Open tickets</p>
          </article>
          <article class="metric-panel">
            <span>${waitingTickets.length}</span>
            <p>Waiting warranty</p>
          </article>
          <article class="metric-panel">
            <span>${approvedTickets.length}</span>
            <p>Approved</p>
          </article>
          <article class="metric-panel">
            <span>${expiringTickets.length}</span>
            <p>Expiring soon</p>
          </article>
        </div>

        <div class="ticket-filter-row" role="group" aria-label="Ticket status filter">
          ${ticketStatusOrder.map((status) => `
            <button class="${ticketStatusFilter === status ? "is-active" : ""}" type="button" data-ticket-filter="${status}">
              ${escapeHtml(status === "all" ? "All" : ticketStatusLabels[status])}
            </button>
          `).join("")}
        </div>

        <div class="ticket-list-panel">
          <div class="client-list-summary">
            <strong>${visibleTickets.length.toLocaleString()} shown</strong>
            <span>${waitingTickets.length} customer${waitingTickets.length === 1 ? "" : "s"} waiting for warranty</span>
          </div>
          <div class="ticket-list">
            ${visibleTickets.length ? visibleTickets.map(renderTicketRow).join("") : `
              <div class="empty-state">
                <h4>No service tickets found</h4>
                <p>Try another search or add a warranty ticket.</p>
              </div>
            `}
          </div>
        </div>
      </section>

      <aside class="ticket-side-panel" aria-label="Service ticket details">
        ${ticketEditingId || ticketCreatingNew ? renderTicketEditor(formTicket) : selectedTicket ? renderTicketDetail(selectedTicket) : renderTicketEditor(formTicket)}
      </aside>
    </div>
  `;
}

function renderTicketRow(ticket) {
  const client = getClient(ticket.clientId);
  const owner = getUser(ticket.ownerKey);
  const selectedClass = ticket.id === selectedTicketId ? " is-selected" : "";
  const urgentClass = isWarrantyExpiring(ticket) ? " is-expiring" : "";

  return `
    <article class="ticket-row status-${ticket.status}${selectedClass}${urgentClass}">
      <button type="button" data-ticket-select="${escapeHtml(ticket.id)}">
        <div>
          <span class="status-pill ticket-status-${ticket.status}">${ticketStatusLabels[ticket.status]}</span>
          <h4>${escapeHtml(ticket.title)}</h4>
          <p>${escapeHtml(client.name)} · ${escapeHtml(client.phone || "No phone")}</p>
        </div>
        <div>
          <strong>${escapeHtml(ticket.product || "Warranty item")}</strong>
          <span>${ticket.warrantyExpires ? `Warranty ends ${formatNoteDate(ticket.warrantyExpires)}` : "No expiry recorded"}</span>
          <small>${escapeHtml(owner.name)} · ${ticketPriorityLabels[ticket.priority]}</small>
        </div>
        <div class="ticket-portal-badge">${ticket.portalVisible ? "Portal visible" : "Staff only"}</div>
      </button>
    </article>
  `;
}

function renderTicketDetail(ticket) {
  const client = getClient(ticket.clientId);
  const appointment = appointments.find((item) => item.id === ticket.appointmentId);

  return `
    <section class="ticket-detail-card">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Selected ticket</p>
          <h3>${escapeHtml(ticket.title)}</h3>
        </div>
        <button class="primary-action compact" type="button" data-ticket-edit="${escapeHtml(ticket.id)}">Edit</button>
      </div>

      <div class="ticket-detail-head">
        <span class="status-pill ticket-status-${ticket.status}">${ticketStatusLabels[ticket.status]}</span>
        <strong>${ticketPriorityLabels[ticket.priority]}</strong>
        <span>${ticket.portalVisible ? "Connected to client portal" : "Hidden from client portal"}</span>
      </div>

      <dl class="ticket-fact-grid">
        <div><dt>Client</dt><dd>${escapeHtml(client.name)}</dd></div>
        <div><dt>Owner</dt><dd>${escapeHtml(getUser(ticket.ownerKey).name)}</dd></div>
        <div><dt>Submitted</dt><dd>${formatNoteDate(ticket.submittedAt)}</dd></div>
        <div><dt>Warranty</dt><dd>${ticket.warrantyExpires ? formatNoteDate(ticket.warrantyExpires) : "Not recorded"}</dd></div>
        <div><dt>Product</dt><dd>${escapeHtml(ticket.product || "Not recorded")}</dd></div>
        <div><dt>Serial</dt><dd>${escapeHtml(ticket.serialNumber || "Not recorded")}</dd></div>
      </dl>

      <section class="ticket-copy-panel">
        <h4>Issue</h4>
        <p>${escapeHtml(ticket.issue || "No issue details yet.")}</p>
      </section>

      <section class="ticket-copy-panel">
        <h4>Next step</h4>
        <p>${escapeHtml(ticket.nextStep || "Pick the next follow-up.")}</p>
      </section>

      ${appointment ? `
        <section class="ticket-copy-panel">
          <h4>Linked job</h4>
          <p>${formatLongDate(appointment.date)} · ${formatTime(appointment.time)} · ${escapeHtml(getAppointmentTitle(appointment))}</p>
          <button class="secondary-action compact" type="button" data-ticket-open-job="${escapeHtml(appointment.id)}">Open job</button>
        </section>
      ` : ""}

      <div class="ticket-detail-actions">
        <button class="secondary-action" type="button" data-ticket-client="${escapeHtml(client.id)}">Open client portal</button>
        <button class="secondary-action" type="button" data-ticket-status-next="${escapeHtml(ticket.id)}">Move forward</button>
        <button class="secondary-action danger" type="button" data-ticket-delete="${escapeHtml(ticket.id)}">Delete</button>
      </div>
    </section>
  `;
}

function renderTicketEditor(ticket) {
  const sortedClients = [...clients].sort((a, b) => a.name.localeCompare(b.name));
  const clientAppointments = appointments.filter((appointment) => appointment.clientId === ticket.clientId);

  return `
    <section class="ticket-editor-card">
      <form class="booking-form" id="ticketForm">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">${ticketEditingId ? "Update ticket" : "Add ticket"}</p>
            <h3>${ticketEditingId ? "Edit warranty ticket" : "New service ticket"}</h3>
          </div>
          ${ticketEditingId ? `<button class="text-action" type="button" data-ticket-action="cancel">Cancel</button>` : ""}
        </div>

        <label for="ticketClient">Client</label>
        <select id="ticketClient" name="clientId" required>
          ${sortedClients.map((client) => `<option value="${client.id}" ${ticket.clientId === client.id ? "selected" : ""}>${escapeHtml(formatClientOption(client))}</option>`).join("")}
        </select>

        <label for="ticketAppointment">Linked job</label>
        <select id="ticketAppointment" name="appointmentId">
          <option value="">No job linked</option>
          ${clientAppointments.map((appointment) => `<option value="${appointment.id}" ${ticket.appointmentId === appointment.id ? "selected" : ""}>${formatLongDate(appointment.date)} · ${formatTime(appointment.time)} · ${escapeHtml(getAppointmentTitle(appointment))}</option>`).join("")}
        </select>

        <label for="ticketTitle">Ticket title</label>
        <input id="ticketTitle" name="title" value="${escapeHtml(ticket.title)}" maxlength="90" placeholder="Warranty issue or service request" required />

        <label for="ticketIssue">Issue</label>
        <textarea id="ticketIssue" name="issue" rows="4" maxlength="900" placeholder="What is the customer waiting on?">${escapeHtml(ticket.issue)}</textarea>

        <div class="form-row">
          <div>
            <label for="ticketStatus">Status</label>
            <select id="ticketStatus" name="status">
              ${Object.entries(ticketStatusLabels).map(([value, label]) => `<option value="${value}" ${ticket.status === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="ticketPriority">Priority</label>
            <select id="ticketPriority" name="priority">
              ${Object.entries(ticketPriorityLabels).map(([value, label]) => `<option value="${value}" ${ticket.priority === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="form-row">
          <div>
            <label for="ticketProduct">Product / item</label>
            <input id="ticketProduct" name="product" value="${escapeHtml(ticket.product)}" placeholder="Rails, felt, pocket liner" />
          </div>
          <div>
            <label for="ticketSerial">Serial / reference</label>
            <input id="ticketSerial" name="serialNumber" value="${escapeHtml(ticket.serialNumber)}" placeholder="Optional" />
          </div>
        </div>

        <div class="form-row">
          <div>
            <label for="ticketSubmittedAt">Submitted</label>
            <input id="ticketSubmittedAt" name="submittedAt" type="date" value="${escapeHtml(ticket.submittedAt)}" />
          </div>
          <div>
            <label for="ticketWarrantyExpires">Warranty expires</label>
            <input id="ticketWarrantyExpires" name="warrantyExpires" type="date" value="${escapeHtml(ticket.warrantyExpires)}" />
          </div>
        </div>

        <div class="form-row">
          <div>
            <label for="ticketOwner">Owner</label>
            <select id="ticketOwner" name="ownerKey">
              ${Object.entries(users).map(([key, user]) => `<option value="${key}" ${ticket.ownerKey === key ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
            </select>
          </div>
          <label class="check-row ticket-portal-toggle">
            <input type="checkbox" name="portalVisible" ${ticket.portalVisible ? "checked" : ""} />
            <span>Show in client portal</span>
          </label>
        </div>

        <label for="ticketNextStep">Next step</label>
        <input id="ticketNextStep" name="nextStep" value="${escapeHtml(ticket.nextStep)}" maxlength="160" placeholder="Supplier reply, customer photo, schedule return visit" />

        <button class="primary-action" type="submit">${ticketEditingId ? "Save ticket" : "Add ticket"}</button>
      </form>
    </section>
  `;
}

function renderCueRepairs() {
  const visibleRepairs = getVisibleCueRepairs();
  const selectedRepair = cueRepairEditingId || cueRepairCreatingNew ? null : getSelectedCueRepair();
  const formRepair = cueRepairs.find((repair) => repair.id === cueRepairEditingId) || {
    id: "",
    repairNumber: "",
    customerName: "",
    phone: "",
    email: "",
    cueDescription: "",
    repairNeeded: "",
    notes: "",
    status: "dropped_off",
    droppedOffAt: toDateKey(new Date()),
    completedAt: "",
    pickedUpAt: "",
    quotedPrice: null,
    ownerKey: currentUserKey,
    emailNotifiedAt: "",
  };

  return `
    <div class="cue-repair-layout">
      <section class="cue-repair-main">
        <div class="cue-repair-toolbar">
          <label class="search-field" for="cueRepairSearch">
            <span>Search cue repairs</span>
            <input id="cueRepairSearch" type="search" value="${escapeHtml(cueRepairSearchTerm)}" placeholder="Customer, phone, cue, repair #" />
          </label>
          ${cueRepairSearchTerm ? `<button class="secondary-action" type="button" data-cue-action="clear-search">Clear</button>` : ""}
          <button class="primary-action compact" type="button" data-cue-action="new">New drop-off</button>
        </div>

        <div class="cue-repair-stat-grid">
          <article class="metric-panel">
            <span>${getCueRepairCount("dropped_off")}</span>
            <p>Dropped off</p>
          </article>
          <article class="metric-panel">
            <span>${getCueRepairCount("in_queue")}</span>
            <p>In cue queue</p>
          </article>
          <article class="metric-panel needs-attention">
            <span>${getCueRepairCount("waiting_pickup")}</span>
            <p>Waiting pickup</p>
          </article>
          <article class="metric-panel">
            <span>${getCueRepairCount("picked_up")}</span>
            <p>Picked up</p>
          </article>
        </div>

        <div class="cue-repair-filter-row" role="group" aria-label="Cue repair status filter">
          ${cueRepairStatusOrder.map((status) => `
            <button class="${cueRepairStatusFilter === status ? "is-active" : ""}" type="button" data-cue-filter="${status}">
              ${escapeHtml(status === "all" ? "All" : cueRepairStatusLabels[status])}
            </button>
          `).join("")}
        </div>

        <div class="cue-repair-list-panel">
          <div class="client-list-summary">
            <strong>${visibleRepairs.length.toLocaleString()} shown</strong>
            <span>${getCueRepairCount("waiting_pickup")} ready for customer pickup</span>
          </div>
          <div class="cue-repair-list">
            ${visibleRepairs.length ? visibleRepairs.map(renderCueRepairRow).join("") : `
              <div class="empty-state">
                <h4>No cue repairs found</h4>
                <p>Add a drop-off when a customer leaves a cue at the counter.</p>
              </div>
            `}
          </div>
        </div>
      </section>

      <aside class="cue-repair-side-panel" aria-label="Cue repair details">
        ${cueRepairEditingId || cueRepairCreatingNew ? renderCueRepairEditor(formRepair) : selectedRepair ? renderCueRepairDetail(selectedRepair) : renderCueRepairEditor(formRepair)}
      </aside>
    </div>
  `;
}

function renderCueRepairRow(repair) {
  const selectedClass = repair.id === selectedCueRepairId ? " is-selected" : "";
  const price = repair.quotedPrice === null ? "No price" : formatPrice(repair.quotedPrice);

  return `
    <article class="cue-repair-row status-${repair.status}${selectedClass}">
      <button type="button" data-cue-select="${escapeHtml(repair.id)}">
        <div>
          <span class="status-pill cue-status-${repair.status}">${cueRepairStatusLabels[repair.status]}</span>
          <h4>${escapeHtml(repair.customerName)}</h4>
          <p>${escapeHtml(repair.phone || "No phone")} ${repair.email ? `· ${escapeHtml(repair.email)}` : ""}</p>
        </div>
        <div>
          <strong>${escapeHtml(repair.cueDescription || "Cue repair")}</strong>
          <span>${escapeHtml(repair.repairNeeded || "Repair details needed")}</span>
          <small>Dropped off ${formatNoteDate(repair.droppedOffAt)}</small>
        </div>
        <div class="cue-repair-badge">
          <strong>${escapeHtml(repair.repairNumber || "New")}</strong>
          <span>${price}</span>
        </div>
      </button>
    </article>
  `;
}

function renderCueRepairDetail(repair) {
  const canComplete = !["waiting_pickup", "picked_up"].includes(repair.status);
  const canPickUp = repair.status === "waiting_pickup";

  return `
    <section class="cue-repair-detail-card">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Selected repair</p>
          <h3>${escapeHtml(repair.customerName)}</h3>
        </div>
        <button class="primary-action compact" type="button" data-cue-edit="${escapeHtml(repair.id)}">Edit</button>
      </div>

      <div class="ticket-detail-head">
        <span class="status-pill cue-status-${repair.status}">${cueRepairStatusLabels[repair.status]}</span>
        <strong>${escapeHtml(repair.repairNumber || "No repair #")}</strong>
        <span>${repair.email ? "Email on file" : "No email"}</span>
      </div>

      <dl class="cue-repair-fact-grid">
        <div><dt>Customer</dt><dd>${escapeHtml(repair.customerName)}</dd></div>
        <div><dt>Phone</dt><dd>${escapeHtml(repair.phone || "Not recorded")}</dd></div>
        <div><dt>Email</dt><dd>${escapeHtml(repair.email || "Not recorded")}</dd></div>
        <div><dt>Price</dt><dd>${repair.quotedPrice === null ? "Not quoted" : formatPrice(repair.quotedPrice)}</dd></div>
        <div><dt>Dropped off</dt><dd>${formatNoteDate(repair.droppedOffAt)}</dd></div>
        <div><dt>Completed</dt><dd>${repair.completedAt ? formatNoteDate(repair.completedAt) : "Not yet"}</dd></div>
      </dl>

      <section class="cue-repair-copy-panel">
        <h4>Cue</h4>
        <p>${escapeHtml(repair.cueDescription || "No cue description yet.")}</p>
      </section>

      <section class="cue-repair-copy-panel">
        <h4>Repair needed</h4>
        <p>${escapeHtml(repair.repairNeeded || "No repair notes yet.")}</p>
      </section>

      ${repair.notes ? `
        <section class="cue-repair-copy-panel">
          <h4>Staff notes</h4>
          <p>${escapeHtml(repair.notes)}</p>
        </section>
      ` : ""}

      <div class="cue-repair-actions">
        <button class="secondary-action" type="button" data-cue-print="${escapeHtml(repair.id)}">Print tags</button>
        <button class="secondary-action" type="button" data-cue-advance="${escapeHtml(repair.id)}">Move forward</button>
        ${canComplete ? `<button class="primary-action" type="button" data-cue-complete="${escapeHtml(repair.id)}">Completed + email</button>` : ""}
        ${canPickUp ? `<button class="primary-action" type="button" data-cue-pickup="${escapeHtml(repair.id)}">Picked up</button>` : ""}
        <button class="secondary-action danger" type="button" data-cue-delete="${escapeHtml(repair.id)}">Delete</button>
      </div>
    </section>
  `;
}

function renderCueRepairEditor(repair) {
  return `
    <section class="cue-repair-editor-card">
      <form class="booking-form" id="cueRepairForm">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">${cueRepairEditingId ? "Update repair" : "Counter drop-off"}</p>
            <h3>${cueRepairEditingId ? "Edit cue repair" : "New cue repair"}</h3>
          </div>
          ${cueRepairEditingId ? `<button class="text-action" type="button" data-cue-action="cancel">Cancel</button>` : ""}
        </div>

        <div class="form-row">
          <div>
            <label for="cueCustomerName">Customer name</label>
            <input id="cueCustomerName" name="customerName" value="${escapeHtml(repair.customerName)}" maxlength="90" placeholder="Name on tag" required />
          </div>
          <div>
            <label for="cuePhone">Phone</label>
            <input id="cuePhone" name="phone" value="${escapeHtml(repair.phone)}" maxlength="40" placeholder="Best callback number" required />
          </div>
        </div>

        <label for="cueEmail">Email</label>
        <input id="cueEmail" name="email" type="email" value="${escapeHtml(repair.email)}" maxlength="120" placeholder="Optional, for pickup notification" />

        <label for="cueDescription">Cue description</label>
        <input id="cueDescription" name="cueDescription" value="${escapeHtml(repair.cueDescription)}" maxlength="140" placeholder="Brand, color, shaft, case, markings" />

        <label for="cueRepairNeeded">Repair needed</label>
        <textarea id="cueRepairNeeded" name="repairNeeded" rows="4" maxlength="900" placeholder="Tip, ferrule, shaft clean, wrap, joint, other work">${escapeHtml(repair.repairNeeded)}</textarea>

        <div class="form-row">
          <div>
            <label for="cueStatus">Status</label>
            <select id="cueStatus" name="status">
              ${Object.entries(cueRepairStatusLabels).map(([value, label]) => `<option value="${value}" ${repair.status === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="cueDroppedOffAt">Dropped off</label>
            <input id="cueDroppedOffAt" name="droppedOffAt" type="date" value="${escapeHtml(repair.droppedOffAt)}" />
          </div>
        </div>

        <div class="form-row">
          <div>
            <label for="cueQuotedPrice">Quoted price</label>
            <input id="cueQuotedPrice" name="quotedPrice" type="number" min="0" step="0.01" value="${repair.quotedPrice === null ? "" : escapeHtml(repair.quotedPrice)}" placeholder="Optional" />
          </div>
          <div>
            <label for="cueOwner">Owner</label>
            <select id="cueOwner" name="ownerKey">
              ${Object.entries(users).map(([key, user]) => `<option value="${key}" ${repair.ownerKey === key ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
            </select>
          </div>
        </div>

        <label for="cueNotes">Staff notes</label>
        <textarea id="cueNotes" name="notes" rows="3" maxlength="700" placeholder="Storage spot, promises, pickup details">${escapeHtml(repair.notes)}</textarea>

        <button class="primary-action" type="submit">${cueRepairEditingId ? "Save repair" : "Save and print tags"}</button>
      </form>
    </section>
  `;
}

function renderServices() {
  const pricedServices = services.filter((service) => service.price !== null);
  const averagePrice = pricedServices.length
    ? Math.round(pricedServices.reduce((sum, service) => sum + service.price, 0) / pricedServices.length)
    : 0;
  const formService = services.find((service) => service.id === serviceEditingId) || {
    id: "",
    itemNumber: "",
    sku: "",
    name: "",
    duration: 120,
    price: null,
    category: "Services",
  };

  return `
    <div class="services-layout">
      <section class="services-main">
        <div class="services-toolbar">
          <label class="search-field" for="serviceSearch">
            <span>Search services</span>
            <input id="serviceSearch" type="search" value="${escapeHtml(serviceSearchTerm)}" placeholder="Search SKU, description, price" />
          </label>
          <button class="primary-action compact" type="button" data-service-action="new">New service</button>
        </div>

        <div class="service-stat-grid">
          <article class="metric-panel">
            <span>${services.length}</span>
            <p>Total services</p>
          </article>
          <article class="metric-panel">
            <span>${pricedServices.length}</span>
            <p>Priced services</p>
          </article>
          <article class="metric-panel">
            <span>${services.length - pricedServices.length}</span>
            <p>Need price</p>
          </article>
          <article class="metric-panel">
            <span>${formatPrice(averagePrice)}</span>
            <p>Average price</p>
          </article>
        </div>

        <div class="service-filter-row" role="group" aria-label="Service category filter">
          ${getServiceCategories().map((category) => `
            <button class="${category === activeServiceCategory ? "is-active" : ""}" type="button" data-service-category="${escapeHtml(category)}">
              ${escapeHtml(category === "all" ? "All" : category)}
            </button>
          `).join("")}
        </div>

        <div class="services-table-card">
          <div class="services-table-heading">
            <h3>Service catalog</h3>
            <span id="serviceVisibleCount">${services.length} shown</span>
          </div>
          <div class="services-table-wrap">
            <table class="services-table">
              <thead>
                <tr>
                  <th>Item #</th>
                  <th>SKU</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${services.map(renderServiceRow).join("")}
              </tbody>
            </table>
          </div>
          <div class="empty-state compact is-hidden" id="serviceEmptyState">
            <h4>No services found</h4>
            <p>Try another search or choose a different category.</p>
          </div>
        </div>
      </section>

      <aside class="service-editor" aria-label="Service editor">
        <form class="booking-form" id="serviceForm">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">${serviceEditingId ? "Update service" : "Add service"}</p>
              <h3>${serviceEditingId ? "Edit pricing" : "Service details"}</h3>
            </div>
            ${serviceEditingId ? `<button class="text-action" type="button" data-service-action="cancel">Cancel</button>` : ""}
          </div>

          <div class="form-row">
            <div>
              <label for="serviceItemNumber">Item #</label>
              <input id="serviceItemNumber" name="itemNumber" value="${escapeHtml(formService.itemNumber)}" placeholder="Optional" />
            </div>
            <div>
              <label for="serviceSku">SKU</label>
              <input id="serviceSku" name="sku" value="${escapeHtml(formService.sku)}" placeholder="Optional" />
            </div>
          </div>

          <label for="serviceName">Description</label>
          <input id="serviceName" name="name" value="${escapeHtml(formService.name)}" placeholder="Service name" required />

          <div class="form-row">
            <div>
              <label for="servicePrice">Price</label>
              <input id="servicePrice" name="price" type="number" min="0" step="1" value="${formService.price ?? ""}" placeholder="TBD" />
            </div>
            <div>
              <label for="serviceDuration">Minutes</label>
              <input id="serviceDuration" name="duration" type="number" min="30" step="15" value="${formService.duration}" />
            </div>
          </div>

          <p class="service-form-note">Category updates automatically from the description.</p>
          <button class="primary-action" type="submit">${serviceEditingId ? "Save service" : "Add service"}</button>
          ${serviceEditingId ? `<button class="secondary-action danger" type="button" data-service-action="delete">Delete service</button>` : ""}
          <p class="form-alert" id="serviceAlert" hidden></p>
        </form>
      </aside>
    </div>
  `;
}

function renderServiceRow(service) {
  const scheduledCount = appointments.filter((appointment) => getAppointmentServiceIds(appointment).includes(service.id)).length;
  const searchText = `${service.itemNumber} ${service.sku} ${service.name} ${formatPrice(service.price)} ${service.category}`.toLowerCase();

  return `
    <tr class="service-row service-${service.color}" data-service-row data-category="${escapeHtml(service.category)}" data-search="${escapeHtml(searchText)}">
      <td>${escapeHtml(service.itemNumber || "-")}</td>
      <td>${escapeHtml(service.sku || "-")}</td>
      <td>
        <strong>${escapeHtml(service.name)}</strong>
        <span>${escapeHtml(service.category)} · ${scheduledCount} scheduled</span>
      </td>
      <td>${formatPrice(service.price)}</td>
      <td>${service.duration} min</td>
      <td><button class="text-action" type="button" data-service-edit="${escapeHtml(service.id)}">Edit</button></td>
    </tr>
  `;
}

function renderTeam() {
  const upcomingTimeOff = getUpcomingTimeOff("", 6);
  const activeEmployees = employeeProfiles.filter((profile) => profile.status === "active").length;
  const lockedAccounts = Object.values(accountSecurity).filter((account) => account.status === "locked" || account.status === "disabled").length;
  const mfaCount = Object.values(accountSecurity).filter((account) => account.mfaEnabled).length;
  const fieldWork = appointments.filter((appointment) => appointment.status !== "complete" && !appointment.timeOffId);

  return `
    <div class="team-portal-layout">
      <section class="team-portal-hero">
        <div>
          <p class="eyebrow">Employee portal</p>
          <h3>People, time off, and account access</h3>
          <p>Mark is set as the installer for service work. Time-off requests below are added to the live schedule automatically.</p>
        </div>
        <div class="team-hero-stats">
          <span><strong>${activeEmployees}</strong> active</span>
          <span><strong>${mfaCount}</strong> MFA</span>
          <span><strong>${lockedAccounts}</strong> locked</span>
        </div>
      </section>

      <div class="team-stat-grid">
        <article class="metric-panel">
          <span>${fieldWork.filter((appointment) => appointment.crewId === getEmployeeProfile("mark").crewId).length}</span>
          <p>Mark service jobs</p>
        </article>
        <article class="metric-panel">
          <span>${upcomingTimeOff.length}</span>
          <p>Upcoming time-off blocks</p>
        </article>
        <article class="metric-panel">
          <span>${Object.values(accountSecurity).filter((account) => account.requirePasswordReset).length}</span>
          <p>Password resets needed</p>
        </article>
        <article class="metric-panel">
          <span>${employeeProfiles.reduce((sum, profile) => sum + Math.max(0, profile.timeOffHours - profile.usedTimeOffHours), 0)}</span>
          <p>Available PTO hours</p>
        </article>
      </div>

      <div class="team-portal-grid">
        <section class="team-directory-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Directory</p>
              <h3>Employee accounts</h3>
            </div>
          </div>
          <div class="employee-card-grid">
            ${employeeProfiles.map(renderEmployeePortalCard).join("")}
          </div>
        </section>

        <aside class="team-side-stack">
          ${renderTimeOffRequestPanel()}
          ${renderSecurityPolicyPanel()}
          ${renderUpcomingTimeOffPanel(upcomingTimeOff)}
        </aside>
      </div>

      <section class="team-directory-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Capacity</p>
            <h3>Crew schedule pulse</h3>
          </div>
        </div>
        <div class="section-grid compact-grid">
          ${crews.map(renderCrewCapacityCard).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderEmployeePortalCard(profile) {
  const user = getUser(profile.userKey);
  const security = getAccountSecurity(profile.userKey);
  const remainingHours = Math.max(0, profile.timeOffHours - profile.usedTimeOffHours);
  const upcoming = getUpcomingTimeOff(profile.userKey, 2);
  const isInstaller = profile.userKey === "mark";

  return `
    <article class="employee-portal-card ${isInstaller ? "is-installer" : ""}">
      <div class="employee-card-head">
        ${renderPhotoAvatar(profile.userKey, "medium")}
        <div>
          <p class="eyebrow">${escapeHtml(profile.department)}</p>
          <h4>${escapeHtml(user.name)}</h4>
          <span>${escapeHtml(profile.title)}${isInstaller ? " · Installer" : ""}</span>
        </div>
        <span class="security-status security-${escapeHtml(security.status)}">${escapeHtml(security.status)}</span>
      </div>

      <div class="employee-detail-grid">
        <div><dt>Manager</dt><dd>${profile.managerKey ? escapeHtml(getUser(profile.managerKey).name) : "Owner"}</dd></div>
        <div><dt>Location</dt><dd>${escapeHtml(profile.workLocation)}</dd></div>
        <div><dt>Crew</dt><dd>${escapeHtml(getCrew(profile.crewId).name)}</dd></div>
        <div><dt>PTO</dt><dd>${remainingHours} / ${profile.timeOffHours} hr</dd></div>
      </div>

      <div class="permission-row">
        ${profile.permissions.slice(0, 4).map((permission) => `<span>${escapeHtml(permission)}</span>`).join("")}
      </div>

      <form class="employee-profile-form" data-employee-form="${escapeHtml(profile.userKey)}">
        <div class="form-row">
          <div>
            <label for="title-${escapeHtml(profile.userKey)}">Title</label>
            <input id="title-${escapeHtml(profile.userKey)}" name="title" value="${escapeHtml(profile.title)}" maxlength="80" />
          </div>
          <div>
            <label for="status-${escapeHtml(profile.userKey)}">Status</label>
            <select id="status-${escapeHtml(profile.userKey)}" name="status">
              ${["active", "leave", "inactive"].map((status) => `<option value="${status}" ${profile.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="form-row">
          <div>
            <label for="crew-${escapeHtml(profile.userKey)}">Crew</label>
            <select id="crew-${escapeHtml(profile.userKey)}" name="crewId">
              ${crews.map((crew) => `<option value="${crew.id}" ${profile.crewId === crew.id ? "selected" : ""}>${escapeHtml(crew.name)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="pto-${escapeHtml(profile.userKey)}">PTO hours</label>
            <input id="pto-${escapeHtml(profile.userKey)}" name="timeOffHours" type="number" min="0" step="1" value="${profile.timeOffHours}" />
          </div>
        </div>
        <button class="secondary-action compact" type="submit">Save employee</button>
      </form>

      <div class="security-tool-grid">
        <button class="text-action" type="button" data-security-action="reset" data-user-key="${escapeHtml(profile.userKey)}">Reset password</button>
        <button class="text-action" type="button" data-security-action="mfa" data-user-key="${escapeHtml(profile.userKey)}">${security.mfaEnabled ? "Disable MFA" : "Require MFA"}</button>
        <button class="text-action" type="button" data-security-action="passkey" data-user-key="${escapeHtml(profile.userKey)}">${security.passkeyEnabled ? "Remove passkey" : "Enable passkey"}</button>
        <button class="text-action ${security.status === "locked" ? "" : "danger"}" type="button" data-security-action="lock" data-user-key="${escapeHtml(profile.userKey)}">${security.status === "locked" ? "Unlock" : "Lock"}</button>
      </div>

      <ul class="mini-list">
        ${upcoming.length ? upcoming.map((appointment) => `
          <li><span>${formatShortDate(dateFromKey(appointment.date))}</span><strong>${escapeHtml(timeOffTypeLabels[appointment.timeOffType] || "Time off")}</strong></li>
        `).join("") : "<li><span>Availability</span><strong>No upcoming time off</strong></li>"}
      </ul>
    </article>
  `;
}

function renderTimeOffRequestPanel() {
  const todayKey = toDateKey(new Date());

  return `
    <section class="team-tool-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Time off</p>
          <h3>Request vacation or leave</h3>
        </div>
      </div>
      <form class="time-off-form" id="timeOffForm">
        <label for="timeOffEmployee">Employee</label>
        <select id="timeOffEmployee" name="employeeKey">
          ${employeeProfiles.map((profile) => `<option value="${profile.userKey}" ${currentUserKey === profile.userKey ? "selected" : ""}>${escapeHtml(getUser(profile.userKey).name)}</option>`).join("")}
        </select>
        <div class="form-row">
          <div>
            <label for="timeOffType">Type</label>
            <select id="timeOffType" name="timeOffType">
              ${Object.entries(timeOffTypeLabels).map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="timeOffLength">Length</label>
            <select id="timeOffLength" name="length">
              <option value="full">Full day</option>
              <option value="half">Half day</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div>
            <label for="timeOffStart">Start</label>
            <input id="timeOffStart" name="startDate" type="date" value="${todayKey}" />
          </div>
          <div>
            <label for="timeOffEnd">End</label>
            <input id="timeOffEnd" name="endDate" type="date" value="${todayKey}" />
          </div>
        </div>
        <label for="timeOffNotes">Notes</label>
        <textarea id="timeOffNotes" name="notes" rows="3" maxlength="240" placeholder="Coverage notes or approval details"></textarea>
        <p class="form-alert" id="timeOffAlert" hidden></p>
        <button class="primary-action compact" type="submit">Add to schedule</button>
      </form>
    </section>
  `;
}

function renderSecurityPolicyPanel() {
  return `
    <section class="team-tool-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Security</p>
          <h3>Account management</h3>
        </div>
      </div>
      <div class="security-policy-list">
        <div><strong>Passwords</strong><span>Minimum 12 characters, no shared beta PINs, forced reset after admin reset.</span></div>
        <div><strong>MFA</strong><span>Owner and manager accounts should keep MFA on; staff can be required per account.</span></div>
        <div><strong>Passkeys</strong><span>Ready for device-bound sign-in when the final auth provider is connected.</span></div>
        <div><strong>Sessions</strong><span>15-120 minute timeout options with lockout tracking.</span></div>
      </div>
    </section>
  `;
}

function renderUpcomingTimeOffPanel(upcomingTimeOff) {
  return `
    <section class="team-tool-panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Schedule</p>
          <h3>Upcoming leave</h3>
        </div>
        <button class="text-action" type="button" data-team-open-schedule>Calendar</button>
      </div>
      <ul class="mini-list">
        ${upcomingTimeOff.length ? upcomingTimeOff.map((appointment) => `
          <li>
            <span>${formatShortDate(dateFromKey(appointment.date))}</span>
            <strong>${escapeHtml(getUser(appointment.employeeKey).name)} · ${escapeHtml(timeOffTypeLabels[appointment.timeOffType] || "Time off")}</strong>
          </li>
        `).join("") : "<li><span>Clear</span><strong>No upcoming leave</strong></li>"}
      </ul>
    </section>
  `;
}

function renderCrewCapacityCard(crew) {
  const crewJobs = appointments.filter((appointment) => appointment.crewId === crew.id);
  const activeJobs = crewJobs.filter((appointment) => appointment.status !== "complete" && !appointment.timeOffId);
  const leaveBlocks = crewJobs.filter((appointment) => appointment.timeOffId && appointment.date >= toDateKey(new Date()));

  return `
    <article class="team-card">
      <div>
        <p class="eyebrow">${escapeHtml(crew.area)}</p>
        <h3>${escapeHtml(crew.name)}</h3>
        <p>Lead: ${escapeHtml(crew.lead)}</p>
      </div>
      <div class="crew-count">
        <span>${activeJobs.length}</span>
        <p>active jobs</p>
      </div>
      <ul class="mini-list">
        ${activeJobs.slice(0, 4).map((appointment) => `
          <li>
            <span>${formatLongDate(appointment.date)}</span>
            <strong>${escapeHtml(getClient(appointment.clientId).name)}</strong>
          </li>
        `).join("") || "<li><span>Available</span><strong>No active work</strong></li>"}
        ${leaveBlocks.slice(0, 2).map((appointment) => `
          <li>
            <span>${formatShortDate(dateFromKey(appointment.date))}</span>
            <strong>${escapeHtml(getUser(appointment.employeeKey).name)} off</strong>
          </li>
        `).join("")}
      </ul>
    </article>
  `;
}

function bindTeam() {
  moduleCanvas.querySelector("#timeOffForm")?.addEventListener("submit", submitTimeOffRequest);

  moduleCanvas.querySelectorAll("[data-employee-form]").forEach((form) => {
    form.addEventListener("submit", submitEmployeeProfile);
  });

  moduleCanvas.querySelectorAll("[data-security-action]").forEach((button) => {
    button.addEventListener("click", () => updateAccountSecurity(button.dataset.userKey, button.dataset.securityAction));
  });

  moduleCanvas.querySelector("[data-team-open-schedule]")?.addEventListener("click", () => {
    calendarTypeFilter = "unbillable";
    setModule("schedule");
  });
}

function showFormAlert(alert, message) {
  if (!alert) {
    return;
  }

  alert.textContent = message;
  alert.hidden = false;
}

function getDateRange(startDate, endDate) {
  const start = dateFromKey(startDate);
  const end = dateFromKey(endDate);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
    return [];
  }

  const dates = [];
  for (let cursor = start; cursor <= end && dates.length < 45; cursor = addDays(cursor, 1)) {
    dates.push(toDateKey(cursor));
  }
  return dates;
}

function submitTimeOffRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const alert = form.querySelector("#timeOffAlert");
  const profile = getEmployeeProfile(data.employeeKey);
  const dates = getDateRange(data.startDate, data.endDate);

  if (!dates.length) {
    showFormAlert(alert, "Choose a valid start and end date.");
    return;
  }

  const hoursPerDay = data.length === "half" ? 4 : 8;
  const timeOffId = createId();
  const title = `${getUser(profile.userKey).name} - ${timeOffTypeLabels[data.timeOffType] || "Time off"}`;
  const newBlocks = dates.map((date) => normalizeAppointment({
    id: createId(),
    title,
    employeeKey: profile.userKey,
    timeOffId,
    timeOffType: data.timeOffType,
    clientId: "",
    serviceIds: [],
    crewId: profile.crewId,
    date,
    time: data.length === "half" ? "12:00" : "08:00",
    status: "hold",
    type: "unbillable",
    notes: [data.length === "half" ? "Half-day time off." : "Full-day time off.", data.notes].filter(Boolean).join(" "),
  }));

  appointments = [...appointments, ...newBlocks];
  employeeProfiles = employeeProfiles.map((employee) => employee.userKey === profile.userKey
    ? normalizeEmployeeProfile({ ...employee, usedTimeOffHours: employee.usedTimeOffHours + dates.length * hoursPerDay })
    : employee
  );
  chatMessages = [
    ...chatMessages,
    {
      id: createId(),
      threadId: "all-staff",
      senderKey: currentUserKey,
      body: `${getUser(profile.userKey).name} time off added to the schedule: ${formatShortDate(dateFromKey(dates[0]))}${dates.length > 1 ? `-${formatShortDate(dateFromKey(dates.at(-1)))}` : ""}.`,
      createdAt: new Date().toISOString(),
      deliveredAt: new Date().toISOString(),
      readBy: [currentUserKey],
    },
  ];

  selectedDate = dates[0];
  currentMonth = startOfMonth(dateFromKey(selectedDate));
  saveAppointments();
  saveEmployeeProfiles();
  saveChatMessages();
  setModule("team");
}

function submitEmployeeProfile(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userKey = form.dataset.employeeForm;
  const data = Object.fromEntries(new FormData(form).entries());

  employeeProfiles = employeeProfiles.map((profile) => profile.userKey === userKey
    ? normalizeEmployeeProfile({
      ...profile,
      title: data.title,
      status: data.status,
      crewId: data.crewId,
      timeOffHours: data.timeOffHours,
    })
    : profile
  );

  saveEmployeeProfiles();
  setModule("team");
}

function updateAccountSecurity(userKey, action) {
  if (!users[userKey]) {
    return;
  }

  const current = getAccountSecurity(userKey);
  const next = { ...current };

  if (action === "reset") {
    next.requirePasswordReset = true;
    next.passwordUpdatedAt = new Date().toISOString();
    next.failedAttempts = 0;
  } else if (action === "mfa") {
    next.mfaEnabled = !current.mfaEnabled;
  } else if (action === "passkey") {
    next.passkeyEnabled = !current.passkeyEnabled;
  } else if (action === "lock") {
    next.status = current.status === "locked" ? "active" : "locked";
    next.failedAttempts = current.status === "locked" ? 0 : current.failedAttempts;
  }

  accountSecurity = normalizeAccountSecurity({
    ...accountSecurity,
    [userKey]: next,
  });
  saveAccountSecurity();
  setModule("team");
}

function renderProjects() {
  const visibleProjects = getVisibleProjects();
  const selectedProject = getSelectedProject();
  const isMyScope = activeProjectScope === "my";
  const isHomeOverview = !isMyScope && activeProjectView === "board";

  return `
    <div class="projects-layout">
      <section class="projects-main">
        <div class="projects-hero">
          <div>
            <p class="eyebrow">Staff project list</p>
            <h3>${isMyScope ? `${escapeHtml(getUser(currentUserKey).name)}'s projects` : "Home Billiards"}</h3>
            <p>${isMyScope ? "Personal projects, suggestions, and deeper work context for this profile." : "A clean high-level pass across what everyone is moving forward."}</p>
          </div>
          <button class="primary-action compact" type="button" data-project-action="focus-suggestion">Suggest a thing</button>
        </div>

        <div class="project-scope-switcher" role="group" aria-label="Project scope">
          ${Object.entries(projectScopeLabels).map(([scope, label]) => `
            <button class="${activeProjectScope === scope ? "is-active" : ""}" type="button" data-project-scope="${scope}">
              ${escapeHtml(label)}
            </button>
          `).join("")}
        </div>

        ${isMyScope || isHomeOverview ? "" : `
          <div class="project-view-switcher" role="group" aria-label="Company project views">
            ${Object.entries(projectCompanyViewLabels).map(([view, label]) => `
              <button class="${activeProjectView === view ? "is-active" : ""}" type="button" data-project-view="${view}">
                ${escapeHtml(label)}
              </button>
            `).join("")}
          </div>
        `}

        <div class="project-filter-row" role="group" aria-label="Project status filter">
          ${projectStatusOrder.map((status) => `
            <button class="${projectStatusFilter === status ? "is-active" : ""}" type="button" data-project-filter="${status}">
              ${escapeHtml(status === "all" ? "All" : projectStatusLabels[status])}
            </button>
          `).join("")}
        </div>

        ${renderProjectMainView(visibleProjects)}
      </section>

      ${isMyScope ? `<aside class="project-side-panel" aria-label="Project updates and suggestions">
        ${activeProjectDepth === "suggest" ? renderProjectSuggestionForm() : selectedProject ? renderProjectUpdatePanel(selectedProject) : renderEmptyProjectPanel()}
      </aside>` : ""}

      ${projectSuggestionModalOpen ? renderProjectSuggestionModal() : ""}
    </div>
  `;
}

function renderProjectCard(project) {
  const owner = getUser(project.ownerKey);
  const selectedClass = project.id === selectedProjectId ? " is-selected" : "";
  const projectPercent = getProjectOverallPercent(project);

  return `
    <article class="project-card status-${project.status}${selectedClass}" data-project-card="${escapeHtml(project.id)}">
      <button class="project-card-button" type="button" data-project-select="${escapeHtml(project.id)}" draggable="true" data-project-drag="${escapeHtml(project.id)}">
        <div class="project-card-top">
          <span class="status-pill project-status-${project.status}">${projectStatusLabels[project.status]}</span>
          <span class="project-owner">
            <span class="avatar small">${escapeHtml(owner.avatar)}</span>
            ${escapeHtml(owner.name)}
          </span>
        </div>
        ${renderProjectPeopleStack(project)}
        <div class="project-label-row">
          ${project.labels.map(renderProjectLabel).join("")}
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary || "No summary yet.")}</p>
        <div class="project-progress-row">
          <strong>${projectPercent}%</strong>
          <div class="progress-track battery-track battery-${getProjectHealth(project)}" aria-label="${projectPercent}% complete"><span style="width: ${projectPercent}%"></span></div>
        </div>
        <div class="project-next-step">
          <span>Next</span>
          <strong>${escapeHtml(project.nextStep || "Pick a next tiny step.")}</strong>
        </div>
      </button>
    </article>
  `;
}

function renderProjectPeopleStack(project) {
  const contributors = project.contributors || [];

  if (contributors.length <= 1) {
    return "";
  }

  return `
    <div class="project-people-stack" aria-label="Project contributors">
      ${contributors.slice(0, 4).map((contributor) => `<span title="${escapeHtml(getUser(contributor.userKey).name)}">${escapeHtml(getUser(contributor.userKey).avatar)}</span>`).join("")}
      ${contributors.length > 4 ? `<small>+${contributors.length - 4}</small>` : ""}
    </div>
  `;
}

function renderProjectLabel(label) {
  const meta = getProjectLabelMeta(label);
  return `<span class="project-label label-${meta.color}">${escapeHtml(meta.label)}</span>`;
}

function renderProjectMainView(visibleProjects) {
  if (activeProjectScope === "my") return renderProjectMyWorkView();
  if (activeProjectView === "board") return renderProjectCompanyBubbleView(visibleProjects);
  if (activeProjectView === "workflow") return renderProjectBoardView(visibleProjects);
  if (activeProjectView === "everything") return renderProjectEverythingView(visibleProjects);
  if (activeProjectView === "timeline") return renderProjectTimelineView(visibleProjects);
  if (activeProjectView === "reports") return renderProjectReportsView(visibleProjects);

  return renderProjectCardGrid(visibleProjects);
}

function renderProjectCardGrid(visibleProjects) {
  return `
    <div class="project-card-grid">
      ${visibleProjects.length ? visibleProjects.map(renderProjectCard).join("") : `
        <div class="empty-state">
          <h4>Nothing in this lane</h4>
          <p>Switch filters or suggest something worth tinkering with.</p>
        </div>
      `}
    </div>
  `;
}

function getProjectsForUser(userKey, projectList = projects) {
  return projectList.filter((project) =>
    project.ownerKey === userKey ||
    project.contributors.some((contributor) => contributor.userKey === userKey)
  );
}

function getContributorForUser(project, userKey) {
  return project.contributors.find((contributor) => contributor.userKey === userKey) || null;
}

function renderProjectCompanyBubbleView(visibleProjects) {
  const activeProjects = visibleProjects.filter((project) => project.status !== "done");
  const activePeople = staffUserKeys.map((key) => {
    const userProjects = getProjectsForUser(key, activeProjects);
    const rollingProjects = userProjects.filter((project) => project.status === "rolling");
    const avgProgress = userProjects.length
      ? Math.round(userProjects.reduce((sum, project) => sum + getProjectOverallPercent(project), 0) / userProjects.length)
      : 0;

    return { key, user: getUser(key), userProjects, rollingProjects, avgProgress };
  });

  return `
    <section class="company-bubble-board" aria-label="Home Billiards project board">
      <div class="company-bubble-intro">
        <div>
          <p class="eyebrow">Home Billiards</p>
          <h4>Everyone, at a glance</h4>
          <p>Light project bubbles for the big picture. Flip to My Work when it is time to get into the details.</p>
        </div>
        <div class="company-bubble-total">
          <strong>${activeProjects.length}</strong>
          <span>active thing${activeProjects.length === 1 ? "" : "s"}</span>
        </div>
      </div>

      <div class="company-bubble-cloud">
        ${activePeople.map(({ key, user, userProjects, rollingProjects, avgProgress }, index) => `
          <article class="company-bubble-card bubble-${index % 4} ${userProjects.length ? "" : "is-quiet"}">
            <div class="company-bubble-head">
              <span class="company-bubble-avatar">${escapeHtml(user.avatar)}</span>
              <div>
                <h4>${escapeHtml(user.name)}</h4>
                <p>${escapeHtml(user.workspace)}</p>
              </div>
              <span class="company-bubble-status">${escapeHtml(staffStatuses[key] || "Around")}</span>
            </div>

            <div class="company-bubble-stats">
              <div><strong>${userProjects.length}</strong><span>On plate</span></div>
              <div><strong>${rollingProjects.length}</strong><span>Rolling</span></div>
              <div><strong>${avgProgress}%</strong><span>Average</span></div>
            </div>

            <p class="company-bubble-focus">${escapeHtml(user.focus)}</p>

            <div class="company-bubble-list">
              ${userProjects.length ? userProjects.slice(0, 3).map((project) => {
                const contributor = getContributorForUser(project, key);
                const percent = contributor ? contributor.progress : getProjectOverallPercent(project);
                const role = contributor?.role || (project.ownerKey === key ? "Project lead" : "Helping out");
                return `
                  <div class="company-bubble-project">
                    <div>
                      <span class="status-pill project-status-${project.status}">${projectStatusLabels[project.status]}</span>
                      <strong>${escapeHtml(project.title)}</strong>
                      <small>${escapeHtml(role)} · ${escapeHtml(project.nextStep || "Pick the next tiny step.")}</small>
                    </div>
                    <div class="progress-track battery-track battery-${getProjectHealth(project)}" aria-label="${percent}% complete"><span style="width: ${percent}%"></span></div>
                  </div>
                `;
              }).join("") : `
                <p class="company-bubble-empty">Nothing heavy here right now.</p>
              `}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProjectMyWorkView() {
  const myProjects = getMyProjects().filter((project) => projectStatusFilter === "all" || project.status === projectStatusFilter);
  const pendingRequests = myProjects.filter((project) => getProjectSuggestionState(project) === "pending" && project.ownerKey === currentUserKey);
  const myOpenPortions = myProjects.flatMap((project) =>
    project.contributors
      .filter((contributor) => contributor.userKey === currentUserKey && contributor.status !== "done")
      .map((contributor) => ({ project, contributor }))
  );

  return `
    <section class="project-work-dashboard">
      <div class="project-work-rail">
        <article class="metric-panel">
          <span>${myProjects.filter((project) => project.ownerKey === currentUserKey).length}</span>
          <p>Assigned to me</p>
        </article>
        <article class="metric-panel">
          <span>${pendingRequests.length}</span>
          <p>Requests</p>
        </article>
        <article class="metric-panel">
          <span>${myProjects.filter((project) => project.status === "rolling").length}</span>
          <p>Rolling</p>
        </article>
      </div>
      ${myOpenPortions.length ? `
        <div class="project-portion-strip">
          ${myOpenPortions.slice(0, 4).map(({ project, contributor }) => `
            <button type="button" data-project-select="${escapeHtml(project.id)}">
              <strong>${escapeHtml(contributor.role || project.title)}</strong>
              <span>${escapeHtml(project.title)} · ${projectContributorStatusLabels[contributor.status]}</span>
              <div class="progress-track"><span style="width: ${contributor.progress}%"></span></div>
            </button>
          `).join("")}
        </div>
      ` : ""}
      ${renderProjectCardGrid(myProjects)}
    </section>
  `;
}

function renderProjectBoardView(visibleProjects) {
  return `
    <div class="project-board" aria-label="Project workflow board">
      ${projectWorkflowStatuses.map((status) => {
        const columnProjects = visibleProjects
          .filter((project) => project.status === status)
          .sort((a, b) => a.columnOrder - b.columnOrder || new Date(b.updatedAt) - new Date(a.updatedAt));

        return `
          <section class="project-board-column" data-project-drop-status="${status}">
            <div class="project-board-head">
              <h4>${projectStatusLabels[status]}</h4>
              <span>${columnProjects.length}</span>
            </div>
            <div class="project-board-stack">
              ${columnProjects.length ? columnProjects.map(renderProjectCard).join("") : `<p class="board-empty">Drop projects here</p>`}
            </div>
          </section>
        `;
      }).join("")}
    </div>
  `;
}

function renderProjectEverythingView(visibleProjects) {
  return `
    <div class="project-everything-list">
      ${visibleProjects.map((project) => `
        <button class="project-everything-row" type="button" data-project-select="${escapeHtml(project.id)}">
          <span class="status-pill project-status-${project.status}">${projectStatusLabels[project.status]}</span>
          <strong>${escapeHtml(project.title)}</strong>
          <span>${escapeHtml(getUser(project.ownerKey).name)}</span>
          <span>${project.labels.map((label) => getProjectLabelMeta(label).label).join(", ")}</span>
          <span>${getProjectChecklistPercent(project)}%</span>
          <span>${formatNoteDate(project.dueDate)}</span>
        </button>
      `).join("") || `
        <div class="empty-state">
          <h4>No projects found</h4>
          <p>Try another status filter.</p>
        </div>
      `}
    </div>
  `;
}

function renderProjectTimelineView(visibleProjects) {
  return `
    <div class="project-timeline">
      ${visibleProjects.map((project) => {
        const percent = getProjectChecklistPercent(project);
        return `
          <button class="project-timeline-row" type="button" data-project-select="${escapeHtml(project.id)}">
            <div>
              <strong>${escapeHtml(project.title)}</strong>
              <span>${escapeHtml(getUser(project.ownerKey).name)} · due ${formatNoteDate(project.dueDate)}</span>
            </div>
            <div class="timeline-bar">
              <span class="timeline-fill battery-${getProjectHealth(project)}" style="width: ${Math.max(8, percent)}%"></span>
            </div>
            <b>${percent}%</b>
          </button>
        `;
      }).join("") || `
        <div class="empty-state">
          <h4>No timeline items</h4>
          <p>Try another status filter.</p>
        </div>
      `}
    </div>
  `;
}

function renderProjectReportsView(visibleProjects) {
  const byStatus = projectWorkflowStatuses.map((status) => ({
    status,
    count: visibleProjects.filter((project) => project.status === status).length,
  }));
  const byOwner = staffUserKeys.map((key) => ({
    key,
    count: visibleProjects.filter((project) => project.ownerKey === key).length,
  }));
  const maxStatus = Math.max(1, ...byStatus.map((item) => item.count));
  const maxOwner = Math.max(1, ...byOwner.map((item) => item.count));

  return `
    <div class="project-report-grid">
      <section class="project-report-panel">
        <h4>By workflow</h4>
        ${byStatus.map((item) => `
          <div class="project-report-row">
            <span>${projectStatusLabels[item.status]}</span>
            <div class="progress-track"><span style="width: ${(item.count / maxStatus) * 100}%"></span></div>
            <strong>${item.count}</strong>
          </div>
        `).join("")}
      </section>
      <section class="project-report-panel">
        <h4>By person</h4>
        ${byOwner.map((item) => `
          <div class="project-report-row">
            <span>${escapeHtml(getUser(item.key).name)}</span>
            <div class="progress-track"><span style="width: ${(item.count / maxOwner) * 100}%"></span></div>
            <strong>${item.count}</strong>
          </div>
        `).join("")}
      </section>
    </div>
  `;
}

function renderProjectUpdatePanel(project) {
  const updates = getProjectUpdates(project);
  const latestUpdate = updates[0];

  return `
    <section class="project-editor-card">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Selected project</p>
          <h3>${escapeHtml(project.title)}</h3>
        </div>
      </div>

      <div class="project-depth-tabs" role="group" aria-label="Project detail depth">
        ${renderProjectDepthButton("glance", "Glance")}
        ${renderProjectDepthButton("work", "Work")}
        ${renderProjectDepthButton("updates", "Updates")}
        ${renderProjectDepthButton("suggest", "Suggest")}
      </div>

      ${activeProjectDepth === "work" ? renderProjectWorkForm(project) : ""}
      ${activeProjectDepth === "updates" ? renderProjectUpdatesList(updates) : ""}
      ${activeProjectDepth === "glance" ? renderProjectGlance(project, latestUpdate, updates.length) : ""}
    </section>
  `;
}

function renderProjectDepthButton(value, label) {
  return `<button class="${activeProjectDepth === value ? "is-active" : ""}" type="button" data-project-depth="${value}">${label}</button>`;
}

function renderProjectGlance(project, latestUpdate, updateCount) {
  const owner = getUser(project.ownerKey);
  const projectPercent = getProjectOverallPercent(project);

  return `
    <div class="project-glance">
      <div class="project-glance-meter">
        <div>
          <span class="status-pill project-status-${project.status}">${projectStatusLabels[project.status]}</span>
          <strong>${projectPercent}%</strong>
        </div>
        <div class="progress-track battery-track battery-${getProjectHealth(project)}" aria-label="${projectPercent}% complete"><span style="width: ${projectPercent}%"></span></div>
      </div>

      <dl class="project-glance-list">
        <div><dt>Owner</dt><dd>${escapeHtml(owner.name)}</dd></div>
        <div><dt>Labels</dt><dd>${project.labels.map((label) => getProjectLabelMeta(label).label).join(", ")}</dd></div>
        <div><dt>Next</dt><dd>${escapeHtml(project.nextStep || "Pick a next tiny step.")}</dd></div>
        <div><dt>Due</dt><dd>${formatNoteDate(project.dueDate)}</dd></div>
        <div><dt>Notes</dt><dd>${updateCount} update${updateCount === 1 ? "" : "s"}</dd></div>
      </dl>

      ${renderProjectContributorSnapshot(project)}

      ${latestUpdate ? `
        <article class="project-lite-update">
          <span>Latest</span>
          <p>${escapeHtml(latestUpdate.body)}</p>
          <small>${escapeHtml(getUser(latestUpdate.authorKey).name)} · ${formatProjectTime(latestUpdate.createdAt)}</small>
        </article>
      ` : ""}

      <div class="project-glance-actions">
        <button class="secondary-action" type="button" data-project-depth="work">Work tools</button>
        <button class="secondary-action" type="button" data-project-depth="updates">History</button>
      </div>
    </div>
  `;
}

function renderProjectContributorSnapshot(project) {
  return `
    <section class="project-contributor-snapshot">
      <div class="project-section-head">
        <h4>People on this</h4>
        <span>${project.contributors.length}</span>
      </div>
      <div class="project-contributor-list">
        ${project.contributors.map((contributor) => `
          <article class="project-contributor-row">
            <span class="avatar small">${escapeHtml(getUser(contributor.userKey).avatar)}</span>
            <div>
              <strong>${escapeHtml(getUser(contributor.userKey).name)}</strong>
              <small>${escapeHtml(contributor.role || "Helping out")} · ${projectContributorStatusLabels[contributor.status]}</small>
              <div class="progress-track"><span style="width: ${contributor.progress}%"></span></div>
            </div>
            <b>${contributor.progress}%</b>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProjectWorkForm(project) {
  const taskContributor = getContributorForUser(project, currentUserKey)
    || getContributorForUser(project, project.ownerKey)
    || project.contributors[0]
    || null;
  const taskUser = taskContributor ? getUser(taskContributor.userKey) : getUser(project.ownerKey);
  const taskLabel = taskContributor?.userKey === currentUserKey ? "Your part" : `${taskUser.name}'s part`;
  const otherContributors = project.contributors.filter((contributor) => contributor.id !== taskContributor?.id);
  const collaboratorKeys = [...new Set(project.contributors.map((contributor) => contributor.userKey).filter((key) => key !== currentUserKey))];
  const defaultCollaboratorKey = collaboratorKeys[0] || (project.ownerKey !== currentUserKey ? project.ownerKey : "herlyn");
  const collaboratorOptions = collaboratorKeys.length ? collaboratorKeys : staffUserKeys.filter((key) => key !== currentUserKey);
  const projectPercent = getProjectOverallPercent(project);
  const checklistPercent = getProjectChecklistPercent(project);

  return `
    <form class="project-work-form" id="projectUpdateForm">
      <input id="projectProgress" name="progress" type="hidden" value="${project.progress}" />

      <section class="project-task-hero">
        <div>
          <p class="eyebrow">${escapeHtml(projectStatusLabels[project.status])} · due ${formatNoteDate(project.dueDate)}</p>
          <h4>${escapeHtml(project.nextStep || "Pick the next tiny step.")}</h4>
          <p>${escapeHtml(project.summary || "No extra context yet.")}</p>
        </div>
        <div class="project-task-meter">
          <strong>${projectPercent}%</strong>
          <span>overall</span>
          <div class="progress-track battery-track battery-${getProjectHealth(project)}"><span style="width: ${projectPercent}%"></span></div>
        </div>
      </section>

      ${taskContributor ? `
        <section class="project-my-task-card">
          <div class="project-task-owner">
            <span class="avatar">${escapeHtml(taskUser.avatar)}</span>
            <div>
              <p class="eyebrow">${escapeHtml(taskLabel)}</p>
              <h4>${escapeHtml(taskContributor.role || project.title)}</h4>
            </div>
          </div>

          <input type="hidden" name="contributorId" value="${escapeHtml(taskContributor.id)}" />
          <input type="hidden" name="contributorUser" value="${escapeHtml(taskContributor.userKey)}" />
          <input type="hidden" name="contributorRole" value="${escapeHtml(taskContributor.role)}" />

          <div class="project-task-controls">
            <div>
              <label for="taskContributorStatus">Where is this at?</label>
              <select id="taskContributorStatus" name="contributorStatus">
                ${Object.entries(projectContributorStatusLabels).map(([value, label]) => `<option value="${value}" ${taskContributor.status === value ? "selected" : ""}>${label}</option>`).join("")}
              </select>
            </div>
            <div>
              <label for="myContributorProgress">My progress</label>
              <div class="range-row">
                <input id="myContributorProgress" name="contributorProgress" type="range" min="0" max="100" step="5" value="${taskContributor.progress}" />
                <output id="myContributorProgressValue">${taskContributor.progress}%</output>
              </div>
            </div>
          </div>
        </section>
      ` : ""}

      <section class="project-checklist-flow">
        <div class="project-section-head">
          <h4>What needs to happen</h4>
          <span>${checklistPercent}%</span>
        </div>
        <div class="project-work-checks">
          ${project.checklist.length ? project.checklist.map((item) => `
            <label class="check-row project-check-item">
              <input type="checkbox" name="checklistDone" value="${escapeHtml(item.id)}" ${item.done ? "checked" : ""} />
              <span>${escapeHtml(item.text)}</span>
            </label>
          `).join("") : `<p class="card-copy">No checklist yet.</p>`}
        </div>
        <label for="projectNewChecklistItem">Add a small step</label>
        <input id="projectNewChecklistItem" name="newChecklistItem" maxlength="120" placeholder="Another thing that needs doing" />
      </section>

      <section class="project-update-compose">
        <label for="projectNextStep">Next tiny step</label>
        <input id="projectNextStep" name="nextStep" value="${escapeHtml(project.nextStep)}" placeholder="One small next move" />

        <label for="projectUpdateBody">Update</label>
        <textarea id="projectUpdateBody" name="body" rows="3" maxlength="360" placeholder="What changed? Keep it casual."></textarea>
      </section>

      <details class="project-collab-panel">
        <summary>
          <span>Loop someone in</span>
          <small>Quick messages, inbox notes, and handoffs</small>
        </summary>
        <div class="project-collab-grid">
          <div>
            <label for="projectQuickRecipient">Send to</label>
            <select id="projectQuickRecipient" name="quickMessageRecipient">
              ${collaboratorOptions.map((key) => `<option value="${key}" ${key === defaultCollaboratorKey ? "selected" : ""}>${escapeHtml(getUser(key).name)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="projectQuickMessage">Quick message</label>
            <textarea id="projectQuickMessage" name="quickMessage" rows="2" maxlength="320" placeholder="Where you're at, what you're waiting on, or a quick heads up"></textarea>
          </div>
        </div>
        <button class="secondary-action" type="submit" name="intent" value="message">Send quick message</button>

        <div class="project-handoff-row">
          <div>
            <label for="projectTaskRecipient">Send a task to</label>
            <select id="projectTaskRecipient" name="handoffRecipient">
              <option value="">Nobody right now</option>
              ${collaboratorOptions.map((key) => `<option value="${key}" ${key === defaultCollaboratorKey ? "selected" : ""}>${escapeHtml(getUser(key).name)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="projectTaskText">Optional ask</label>
            <input id="projectTaskText" name="handoffTask" maxlength="160" placeholder="Ask for a follow-up, file, check, or decision" />
          </div>
        </div>
      </details>

      <details class="project-setup-details">
        <summary>
          <span>Project setup</span>
          <small>Owner, labels, due date, and extra people</small>
        </summary>

        <div class="project-setup-grid">
          <div>
            <label for="projectStatus">Project lane</label>
            <select id="projectStatus" name="status">
              ${Object.entries(projectStatusLabels).map(([value, label]) => `<option value="${value}" ${project.status === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="projectOwner">Owner</label>
            <select id="projectOwner" name="ownerKey">
              ${Object.entries(users).map(([key, user]) => `<option value="${key}" ${project.ownerKey === key ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="projectPriority">Priority</label>
            <select id="projectPriority" name="priority">
              <option value="low" ${project.priority === "low" ? "selected" : ""}>Low</option>
              <option value="normal" ${project.priority === "normal" ? "selected" : ""}>Normal</option>
              <option value="high" ${project.priority === "high" ? "selected" : ""}>High</option>
            </select>
          </div>
          <div>
            <label for="projectDueDate">Due date</label>
            <input id="projectDueDate" name="dueDate" type="date" value="${escapeHtml(project.dueDate)}" />
          </div>
        </div>

        <fieldset class="project-label-picker">
          <legend>Labels</legend>
          ${Object.entries(projectLabelOptions).map(([value, meta]) => `
            <label class="project-label label-${meta.color}">
              <input type="checkbox" name="labels" value="${value}" ${project.labels.includes(value) ? "checked" : ""} />
              <span>${escapeHtml(meta.label)}</span>
            </label>
          `).join("")}
        </fieldset>

        <section class="project-contributor-editor">
          <div class="project-section-head">
            <h4>Other people on this</h4>
            <span>${project.contributors.length} active</span>
          </div>
          <div class="project-contributor-edit-list">
            ${otherContributors.map((contributor) => `
              <div class="project-contributor-edit-row">
                <input type="hidden" name="contributorId" value="${escapeHtml(contributor.id)}" />
                <div>
                  <label for="contributorUser-${escapeHtml(contributor.id)}">Person</label>
                  <select id="contributorUser-${escapeHtml(contributor.id)}" name="contributorUser">
                    ${Object.entries(users).map(([key, user]) => `<option value="${key}" ${contributor.userKey === key ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
                  </select>
                </div>
                <div>
                  <label for="contributorRole-${escapeHtml(contributor.id)}">Their part</label>
                  <input id="contributorRole-${escapeHtml(contributor.id)}" name="contributorRole" value="${escapeHtml(contributor.role)}" placeholder="What they own" />
                </div>
                <div>
                  <label for="contributorStatus-${escapeHtml(contributor.id)}">Status</label>
                  <select id="contributorStatus-${escapeHtml(contributor.id)}" name="contributorStatus">
                    ${Object.entries(projectContributorStatusLabels).map(([value, label]) => `<option value="${value}" ${contributor.status === value ? "selected" : ""}>${label}</option>`).join("")}
                  </select>
                </div>
                <div>
                  <label for="contributorProgress-${escapeHtml(contributor.id)}">Progress</label>
                  <input id="contributorProgress-${escapeHtml(contributor.id)}" name="contributorProgress" type="number" min="0" max="100" step="5" value="${contributor.progress}" />
                </div>
              </div>
            `).join("")}
          </div>
        <div class="project-contributor-add">
          <div>
            <label for="newContributorUser">Add person</label>
            <select id="newContributorUser" name="newContributorUser">
              <option value="">Choose person</option>
              ${Object.entries(users).map(([key, user]) => `<option value="${key}">${escapeHtml(user.name)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="newContributorRole">Their part</label>
            <input id="newContributorRole" name="newContributorRole" placeholder="What should they own?" />
          </div>
        </div>
        </section>
      </details>

      <button class="primary-action" type="submit">Post update</button>
      <button class="secondary-action danger" type="button" data-project-action="delete">Remove project</button>
    </form>
  `;
}

function renderProjectUpdatesList(updates) {
  return `
    <div class="project-update-list">
      ${updates.length ? updates.map(renderProjectUpdate).join("") : `
        <div class="empty-state compact">
          <h4>No updates yet</h4>
          <p>Add the first note when something moves.</p>
        </div>
      `}
    </div>
  `;
}

function renderProjectUpdate(update) {
  const author = getUser(update.authorKey);

  return `
    <article class="project-update">
      <span class="avatar small">${escapeHtml(author.avatar)}</span>
      <div>
        <strong>${escapeHtml(author.name)}</strong>
        <time datetime="${escapeHtml(update.createdAt)}">${formatProjectTime(update.createdAt)}</time>
        <p>${escapeHtml(update.body)}</p>
      </div>
    </article>
  `;
}

function renderEmptyProjectPanel() {
  return `
    <section class="project-editor-card">
      <div class="empty-state compact">
        <h4>No project selected</h4>
        <p>Choose a card or suggest something new.</p>
      </div>
    </section>
  `;
}

function renderProjectSuggestionModal() {
  return `
    <div class="project-suggestion-popover" role="presentation" data-project-suggestion-backdrop>
      <section class="project-suggestion-modal" role="dialog" aria-modal="true" aria-labelledby="projectSuggestionTitle">
        ${renderProjectSuggestionForm({ modal: true })}
      </section>
    </div>
  `;
}

function renderProjectSuggestionForm(options = {}) {
  const isModal = Boolean(options.modal);

  return `
    <section class="project-editor-card suggestion-card ${isModal ? "is-modal" : ""}" id="projectSuggestionCard">
      ${isModal ? "" : `
        <div class="project-depth-tabs" role="group" aria-label="Project detail depth">
          ${renderProjectDepthButton("glance", "Glance")}
          ${renderProjectDepthButton("work", "Work")}
          ${renderProjectDepthButton("updates", "Updates")}
          ${renderProjectDepthButton("suggest", "Suggest")}
        </div>
      `}
      <form class="booking-form" id="projectSuggestionForm">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Idea shelf</p>
            <h3${isModal ? ` id="projectSuggestionTitle"` : ""}>Suggest something</h3>
          </div>
          ${isModal ? `<button class="quick-close" type="button" data-project-action="close-suggestion" aria-label="Close suggestion card">×</button>` : ""}
        </div>

        <label for="projectTitle">What should we work on?</label>
        <input id="projectTitle" name="title" maxlength="80" placeholder="Name the idea" required />

        <label for="projectSummary">Why it might help</label>
        <textarea id="projectSummary" name="summary" rows="3" maxlength="260" placeholder="A quick reason, note, or vibe check"></textarea>

        <label for="projectSuggestionNext">First tiny step</label>
        <input id="projectSuggestionNext" name="nextStep" maxlength="140" placeholder="Something easy to try first" />

        <fieldset class="project-label-picker">
          <legend>Labels</legend>
          ${Object.entries(projectLabelOptions).map(([value, meta]) => `
            <label class="project-label label-${meta.color}">
              <input type="checkbox" name="labels" value="${value}" ${value === "idea" ? "checked" : ""} />
              <span>${escapeHtml(meta.label)}</span>
            </label>
          `).join("")}
        </fieldset>

        <label for="projectSuggestionChecklist">First checklist item</label>
        <input id="projectSuggestionChecklist" name="checklistItem" maxlength="120" placeholder="Optional tiny first task" />

        <label for="projectSuggestionOwner">Possible owner</label>
        <select id="projectSuggestionOwner" name="ownerKey">
          ${Object.entries(users).map(([key, user]) => `<option value="${key}" ${currentUserKey === key ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
        </select>

        <div class="project-suggestion-actions">
          ${isModal ? `<button class="secondary-action" type="button" data-project-action="close-suggestion">Cancel</button>` : ""}
          <button class="${isModal ? "primary-action compact" : "secondary-action"}" type="submit">Add suggestion</button>
        </div>
      </form>
    </section>
  `;
}

function canCurrentUserUseDevelopment() {
  return devUserKeys.includes(currentUserKey);
}

function getVisibleBetaFeedback() {
  return betaFeedback
    .filter((item) => betaFeedbackFilter === "all" || item.status === betaFeedbackFilter)
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function getSelectedBetaFeedback() {
  const visible = getVisibleBetaFeedback();
  const selected = visible.find((item) => item.id === selectedBetaFeedbackId) || visible[0] || null;
  selectedBetaFeedbackId = selected?.id || null;
  return selected;
}

function renderDevelopment() {
  if (!canCurrentUserUseDevelopment()) {
    return `
      <div class="empty-state">
        <h4>Development is private</h4>
        <p>Bug reports and feature requests still go to Shawn and Diego.</p>
      </div>
    `;
  }

  const visible = getVisibleBetaFeedback();
  const selected = getSelectedBetaFeedback();
  const bugs = betaFeedback.filter((item) => item.type === "bug" && item.status !== "resolved");
  const features = betaFeedback.filter((item) => item.type === "feature" && !["accepted", "rejected"].includes(item.status));
  const inProgress = betaFeedback.filter((item) => item.status === "in_progress");

  return `
    <div class="developer-layout">
      <section class="developer-main">
        <div class="projects-hero developer-hero">
          <div>
            <p class="eyebrow">Shawn and Diego only</p>
            <h3>Beta development desk</h3>
            <p>Staff bug reports and feature requests land here for review, notes, and follow-through.</p>
          </div>
          <button class="primary-action compact" type="button" data-dev-refresh>Refresh</button>
        </div>

        <div class="ticket-stat-grid">
          <article class="metric-panel">
            <span>${bugs.length}</span>
            <p>Open bugs</p>
          </article>
          <article class="metric-panel">
            <span>${features.length}</span>
            <p>Feature requests</p>
          </article>
          <article class="metric-panel">
            <span>${inProgress.length}</span>
            <p>In progress</p>
          </article>
          <article class="metric-panel">
            <span>${betaFeedback.length}</span>
            <p>Total reports</p>
          </article>
        </div>

        <div class="project-filter-row" role="group" aria-label="Development status filter">
          ${betaFeedbackStatusOrder.map((status) => `
            <button class="${betaFeedbackFilter === status ? "is-active" : ""}" type="button" data-dev-filter="${status}">
              ${escapeHtml(status === "all" ? "All" : betaFeedbackStatusLabels[status])}
            </button>
          `).join("")}
        </div>

        <div class="developer-list">
          ${visible.length ? visible.map(renderBetaFeedbackRow).join("") : `
            <div class="empty-state">
              <h4>No beta items here</h4>
              <p>New staff reports will appear as soon as they submit.</p>
            </div>
          `}
        </div>
      </section>

      <aside class="developer-side-panel" aria-label="Development item detail">
        ${selected ? renderBetaFeedbackDetail(selected) : renderEmptyDeveloperPanel()}
      </aside>
    </div>
  `;
}

function renderBetaFeedbackRow(item) {
  const selectedClass = item.id === selectedBetaFeedbackId ? " is-selected" : "";
  const reporter = getUser(item.reporterKey);

  return `
    <article class="developer-row type-${item.type} status-${item.status}${selectedClass}">
      <button type="button" data-dev-select="${escapeHtml(item.id)}">
        <div>
          <span class="status-pill beta-type-${item.type}">${betaFeedbackTypeLabels[item.type]}</span>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.details || "No details added.")}</p>
        </div>
        <div>
          <strong>${betaFeedbackStatusLabels[item.status]}</strong>
          <span>${escapeHtml(reporter.name)} · ${formatProjectTime(item.createdAt)}</span>
          <small>${item.ticketId ? "Bug ticket created" : item.projectId ? "Project created" : "Waiting on review"}</small>
        </div>
      </button>
    </article>
  `;
}

function renderBetaFeedbackDetail(item) {
  const reporter = getUser(item.reporterKey);
  const ticket = item.ticketId ? serviceTickets.find((ticketItem) => ticketItem.id === item.ticketId) : null;
  const project = item.projectId ? getProject(item.projectId) : null;
  const canFeatureDecision = item.type === "feature" && !["accepted", "rejected"].includes(item.status);

  return `
    <section class="developer-detail-card">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">${betaFeedbackTypeLabels[item.type]} from ${escapeHtml(reporter.name)}</p>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <span class="status-pill beta-status-${item.status}">${betaFeedbackStatusLabels[item.status]}</span>
      </div>

      <div class="ticket-fact-grid">
        <div><dt>Reporter</dt><dd>${escapeHtml(reporter.name)}</dd></div>
        <div><dt>Submitted</dt><dd>${formatProjectTime(item.createdAt)}</dd></div>
        <div><dt>Assigned</dt><dd>${item.assignedTo ? escapeHtml(getUser(item.assignedTo).name) : "Unassigned"}</dd></div>
        <div><dt>Status</dt><dd>${betaFeedbackStatusLabels[item.status]}</dd></div>
      </div>

      <section class="ticket-copy-panel">
        <h4>Details</h4>
        <p>${escapeHtml(item.details || "No details added.")}</p>
      </section>

      ${item.screenshotDataUrl ? `
        <section class="developer-screenshot-card">
          <h4>Screenshot</h4>
          <img src="${escapeHtml(item.screenshotDataUrl)}" alt="Screenshot submitted with ${escapeHtml(item.title)}" />
        </section>
      ` : ""}

      <div class="developer-linked-actions">
        ${ticket ? `<button class="secondary-action" type="button" data-dev-open-ticket="${escapeHtml(ticket.id)}">Open bug ticket</button>` : ""}
        ${project ? `<button class="secondary-action" type="button" data-dev-open-project="${escapeHtml(project.id)}">Open project</button>` : ""}
        <button class="secondary-action" type="button" data-dev-status="reviewing">Reviewing</button>
        <button class="secondary-action" type="button" data-dev-status="in_progress">In progress</button>
        <button class="secondary-action" type="button" data-dev-status="resolved">Resolved</button>
      </div>

      ${canFeatureDecision ? `
        <div class="developer-decision-actions">
          <button class="primary-action compact" type="button" data-dev-feature="accept">Accept feature</button>
          <button class="secondary-action danger" type="button" data-dev-feature="reject">Reject</button>
        </div>
      ` : ""}

      <form class="developer-note-form" id="developerNoteForm">
        <label for="developerNote">Work note</label>
        <textarea id="developerNote" name="note" rows="3" maxlength="420" placeholder="Add a note for Shawn and Diego"></textarea>
        <button class="secondary-action" type="submit">Add note</button>
      </form>

      <div class="project-update-list developer-updates">
        ${item.updates.length ? item.updates.map(renderProjectUpdate).join("") : `
          <div class="empty-state compact">
            <h4>No dev notes yet</h4>
            <p>Use notes to work through the item together.</p>
          </div>
        `}
      </div>
    </section>
  `;
}

function renderEmptyDeveloperPanel() {
  return `
    <section class="developer-detail-card">
      <div class="empty-state compact">
        <h4>No beta item selected</h4>
        <p>Pick a report or feature request to review it.</p>
      </div>
    </section>
  `;
}

function renderNotes() {
  const visibleNotes = getVisibleNotes();
  const selectedNote = getSelectedNote();
  const profileNotes = getProfileNotes();
  const formNote = notes.find((note) => note.id === noteEditingId) || {
    id: "",
    title: "",
    body: "",
    ownerKey: currentUserKey,
    status: "active",
    priority: "normal",
    color: noteColors[0],
    dueDate: "",
    reminderAt: "",
    reminderDone: false,
    tags: [],
    clientId: "",
    sharedWith: [],
    pinned: false,
  };
  const openCount = profileNotes.filter((note) => !["done", "archived"].includes(note.status)).length;
  const dueCount = profileNotes.filter(isNoteOverdue).length;
  const pinnedCount = profileNotes.filter((note) => note.pinned).length;
  const reminderCount = profileNotes.filter((note) => note.reminderAt && !note.reminderDone && !["done", "archived"].includes(note.status)).length;

  return `
    <div class="notes-layout">
      <section class="notes-main">
        <div class="notes-hero">
          <div>
            <p class="eyebrow">Sticky note command center</p>
            <h3>${escapeHtml(getUser(currentUserKey).name)}'s notes, follow-ups, and reminders.</h3>
          </div>
          <button class="primary-action compact" type="button" data-note-action="new">New note</button>
        </div>

        <div class="note-stat-grid">
          <article class="metric-panel">
            <span>${openCount}</span>
            <p>Open notes</p>
          </article>
          <article class="metric-panel">
            <span>${dueCount}</span>
            <p>Overdue</p>
          </article>
          <article class="metric-panel">
            <span>${pinnedCount}</span>
            <p>Pinned</p>
          </article>
          <article class="metric-panel">
            <span>${reminderCount}</span>
            <p>Reminders</p>
          </article>
        </div>

        <div class="notes-toolbar">
          <label class="search-field" for="noteSearch">
            <span>Search notes</span>
            <input id="noteSearch" type="search" value="${escapeHtml(noteSearchTerm)}" placeholder="Title, body, tag, client, phone" />
          </label>
          ${noteSearchTerm ? `<button class="secondary-action" type="button" data-note-action="clear-search">Clear</button>` : ""}
        </div>

        <div class="note-filter-row" role="group" aria-label="Note filters">
          ${noteStatusOrder.map((status) => `
            <button class="${noteStatusFilter === status ? "is-active" : ""}" type="button" data-note-status="${status}">
              ${escapeHtml(status === "all" ? "All" : noteStatusLabels[status])}
            </button>
          `).join("")}
        </div>

        <div class="note-filter-row priority-row" role="group" aria-label="Priority filters">
          ${notePriorityOrder.map((priority) => `
            <button class="${notePriorityFilter === priority ? "is-active" : ""}" type="button" data-note-priority="${priority}">
              ${escapeHtml(priority === "all" ? "Any priority" : notePriorityLabels[priority])}
            </button>
          `).join("")}
        </div>

        <div class="note-board" aria-label="Notes board">
          ${visibleNotes.length ? visibleNotes.map(renderNoteCard).join("") : `
            <div class="empty-state">
              <h4>No notes found</h4>
              <p>Try another search or filter, or add a new sticky note.</p>
            </div>
          `}
        </div>
      </section>

      <aside class="note-side-panel" aria-label="Note detail and editor">
        ${selectedNote ? renderNoteDetail(selectedNote) : renderEmptyNotePanel()}
        ${noteCreatingNew || noteEditingId ? renderNoteForm(formNote) : ""}
      </aside>
    </div>
  `;
}

function renderNoteCard(note) {
  const selectedClass = note.id === selectedNoteId ? " is-selected" : "";
  const overdueClass = isNoteOverdue(note) ? " is-overdue" : "";

  return `
    <article class="note-card note-${note.color}${selectedClass}${overdueClass}">
      <button class="note-card-button" type="button" data-note-select="${escapeHtml(note.id)}">
        <div class="note-pin-row">
          <span class="note-pin" aria-hidden="true">${note.pinned ? "Pinned" : "Note"}</span>
          <span class="status-pill note-priority-${note.priority}">${notePriorityLabels[note.priority]}</span>
        </div>
        <h3>${escapeHtml(note.title)}</h3>
        <p>${escapeHtml(note.body || "No details yet.")}</p>
        <div class="note-meta-row">
          <span>${noteStatusLabels[note.status]}</span>
          <span>${note.reminderAt ? `Remind ${formatNoteReminder(note)}` : formatNoteDate(note.dueDate)}</span>
        </div>
        <div class="note-tag-row">
          ${note.tags.slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      </button>
    </article>
  `;
}

function renderNoteDetail(note) {
  return `
    <section class="note-detail-card note-${note.color}${isNoteOverdue(note) ? " is-overdue" : ""}">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Selected note</p>
          <h3>${escapeHtml(note.title)}</h3>
        </div>
        <button class="text-action" type="button" data-note-edit="${escapeHtml(note.id)}">Edit</button>
      </div>
      <p>${escapeHtml(note.body || "No body yet.")}</p>
      <dl class="note-detail-list">
        <div><dt>Status</dt><dd>${noteStatusLabels[note.status]}</dd></div>
        <div><dt>Priority</dt><dd>${notePriorityLabels[note.priority]}</dd></div>
        <div><dt>Owner</dt><dd>${escapeHtml(getUser(note.ownerKey).name)}</dd></div>
        <div><dt>Due</dt><dd>${formatNoteDate(note.dueDate)}</dd></div>
        <div><dt>Reminder</dt><dd>${formatNoteReminder(note)}</dd></div>
        <div><dt>Client</dt><dd>${escapeHtml(getNoteClientLabel(note))}</dd></div>
        <div><dt>Updated</dt><dd>${formatProjectTime(note.updatedAt)}</dd></div>
        <div><dt>Shared</dt><dd>${note.sharedWith.length ? note.sharedWith.map((key) => getUser(key).name).join(", ") : "Private"}</dd></div>
      </dl>
      <div class="note-tag-row">
        ${note.tags.length ? note.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("") : "<span>No tags</span>"}
      </div>
      <div class="note-action-row">
        <button class="secondary-action" type="button" data-note-toggle-pin="${escapeHtml(note.id)}">${note.pinned ? "Unpin" : "Pin"}</button>
        <button class="secondary-action" type="button" data-note-reminder-done="${escapeHtml(note.id)}">${note.reminderDone ? "Reset reminder" : "Clear reminder"}</button>
        <button class="secondary-action" type="button" data-note-done="${escapeHtml(note.id)}">${note.status === "done" ? "Reopen" : "Mark done"}</button>
        <button class="secondary-action" type="button" data-note-archive="${escapeHtml(note.id)}">${note.status === "archived" ? "Restore" : "Archive"}</button>
        <button class="secondary-action danger" type="button" data-note-delete="${escapeHtml(note.id)}">Delete</button>
      </div>
      <form class="note-share-form" data-note-share-form="${escapeHtml(note.id)}">
        <label for="noteShareTarget">Share note</label>
        <div class="note-share-row">
          <select id="noteShareTarget" name="shareTarget">
            ${Object.entries(users)
              .filter(([key]) => key !== currentUserKey)
              .map(([key, user]) => `<option value="${key}">${escapeHtml(user.name)}</option>`)
              .join("")}
          </select>
          <button class="secondary-action" type="submit">Share</button>
        </div>
      </form>
    </section>
  `;
}

function renderEmptyNotePanel() {
  return `
    <section class="note-detail-card">
      <div class="empty-state compact">
        <h4>No note selected</h4>
        <p>Choose a sticky note or start a new one.</p>
      </div>
    </section>
  `;
}

function renderNoteForm(note) {
  const sortedClients = [...clients].sort((a, b) => a.name.localeCompare(b.name));

  return `
    <section class="note-editor-card">
      <form class="booking-form" id="noteForm">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">${noteEditingId ? "Update note" : "Add note"}</p>
            <h3>${noteEditingId ? "Edit sticky" : "New sticky"}</h3>
          </div>
          ${noteEditingId || noteCreatingNew ? `<button class="text-action" type="button" data-note-action="cancel">Cancel</button>` : ""}
        </div>

        <label for="noteTitle">Title</label>
        <input id="noteTitle" name="title" value="${escapeHtml(note.title)}" maxlength="90" placeholder="Short note title" required />

        <label for="noteBody">Details</label>
        <textarea id="noteBody" name="body" rows="5" maxlength="900" placeholder="What needs to be remembered, tracked, or handed off?">${escapeHtml(note.body)}</textarea>

        <div class="form-row">
          <div>
            <label for="noteStatus">Status</label>
            <select id="noteStatus" name="status">
              ${Object.entries(noteStatusLabels).map(([value, label]) => `<option value="${value}" ${note.status === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="notePriority">Priority</label>
            <select id="notePriority" name="priority">
              ${Object.entries(notePriorityLabels).map(([value, label]) => `<option value="${value}" ${note.priority === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="form-row">
          <div>
            <label for="noteOwner">Owner</label>
            <select id="noteOwner" name="ownerKey">
              ${Object.entries(users).map(([key, user]) => `<option value="${key}" ${note.ownerKey === key ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label for="noteDueDate">Due date</label>
            <input id="noteDueDate" name="dueDate" type="date" value="${escapeHtml(note.dueDate)}" />
          </div>
        </div>

        <label for="noteReminderAt">Reminder</label>
        <input id="noteReminderAt" name="reminderAt" type="datetime-local" value="${escapeHtml(formatDateTimeInput(note.reminderAt))}" />

        <label for="noteClient">Client link</label>
        <select id="noteClient" name="clientId">
          <option value="">No client linked</option>
          ${sortedClients.map((client) => `<option value="${client.id}" ${note.clientId === client.id ? "selected" : ""}>${escapeHtml(client.name)}${client.phone ? ` · ${escapeHtml(client.phone)}` : ""}</option>`).join("")}
        </select>

        <label for="noteTags">Tags</label>
        <input id="noteTags" name="tags" value="${escapeHtml(note.tags.join(", "))}" placeholder="quote, install, follow-up" />

        <fieldset class="color-swatch-group">
          <legend>Color</legend>
          ${noteColors.map((color) => `
            <label class="color-swatch note-${color}" title="${color}">
              <input type="radio" name="color" value="${color}" ${note.color === color ? "checked" : ""} />
              <span>${color}</span>
            </label>
          `).join("")}
        </fieldset>

        <label class="check-row">
          <input type="checkbox" name="pinned" ${note.pinned ? "checked" : ""} />
          <span>Pin this note</span>
        </label>

        <label class="check-row">
          <input type="checkbox" name="reminderDone" ${note.reminderDone ? "checked" : ""} />
          <span>Reminder handled</span>
        </label>

        <button class="primary-action" type="submit">${noteEditingId ? "Save note" : "Add note"}</button>
      </form>
    </section>
  `;
}

function renderChat() {
  const activeThread = getThread(activeChatThreadId);
  const messages = getThreadMessages(activeThread.id);
  const directThreads = getDirectThreads();
  const typingText = getTypingText();

  return `
    <div class="chat-layout">
      <aside class="chat-sidebar" aria-label="Chat threads">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Conversations</p>
            <h3>Staff chat</h3>
          </div>
        </div>
        <div class="chat-thread-groups">
          <section class="thread-section" aria-label="Direct messages">
            <p class="thread-section-title">Direct messages</p>
            <div class="avatar-bubble-row">
              ${directThreads.map(renderDirectAvatarButton).join("")}
            </div>
          </section>
          <section class="thread-section" aria-label="Staff rooms">
            <p class="thread-section-title">Rooms</p>
            <div class="thread-list">
              ${chatThreads.map(renderThreadButton).join("")}
            </div>
          </section>
        </div>
      </aside>

      <section class="chat-panel" aria-label="${escapeHtml(activeThread.name)} messages">
        <div class="chat-header">
          <div>
            <p class="eyebrow">${escapeHtml(activeThread.label)}</p>
            <h3>${escapeHtml(activeThread.name)}</h3>
            <p>${escapeHtml(activeThread.description)}</p>
          </div>
          <div class="participant-stack" aria-label="Thread participants">
            ${activeThread.participants.map((key) => renderPhotoAvatar(key, "tiny")).join("")}
          </div>
        </div>

        <div class="message-list" id="messageList">
          ${messages.length ? messages.map(renderMessage).join("") : renderEmptyChat()}
          ${typingText ? renderTypingIndicator(typingText) : ""}
        </div>

        <form class="chat-composer" id="chatComposer">
          <label for="chatMessage">Message</label>
          <div class="composer-row">
            <textarea id="chatMessage" name="message" rows="2" maxlength="480" placeholder="${activeThread.type === "direct" ? `Message ${escapeHtml(activeThread.name)}` : `Type a message to ${escapeHtml(activeThread.name)}`}"></textarea>
            <button class="primary-action compact" type="submit">Send</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderPhotoAvatar(userKey, size = "small") {
  const user = getUser(userKey);
  const imageStyle = user.avatarImage ? ` style="--avatar-image: url('${escapeHtml(user.avatarImage)}')"` : "";
  const classes = ["photo-avatar", size, user.avatarImage ? "has-image" : ""].filter(Boolean).join(" ");
  return `<span class="${classes}"${imageStyle} title="${escapeHtml(user.name)}" aria-label="${escapeHtml(user.name)}"></span>`;
}

function renderDirectAvatarButton(thread) {
  const recipientKey = getDirectRecipientKey(thread.id);
  const recipient = getUser(recipientKey);
  const unreadCount = getThreadUnreadCount(thread.id);
  const classes = ["avatar-bubble-button", thread.id === activeChatThreadId ? "is-active" : ""].filter(Boolean).join(" ");
  const unreadLabel = unreadCount ? `, ${unreadCount} unread` : "";

  return `
    <button class="${classes}" type="button" data-thread="${thread.id}" aria-label="Message ${escapeHtml(recipient.name)}${unreadLabel}">
      <span class="avatar-badge-wrap">
        ${renderPhotoAvatar(recipientKey, "large")}
        ${unreadCount ? `<span class="avatar-unread-badge" aria-hidden="true">${formatUnreadCount(unreadCount)}</span>` : ""}
      </span>
      <span>${escapeHtml(recipient.name)}</span>
    </button>
  `;
}

function renderStaffBubble(key, user) {
  return `
    <div class="staff-bubble" title="${escapeHtml(staffStatuses[key] || user.role)}">
      ${renderPhotoAvatar(key, "medium")}
      <span>${escapeHtml(user.name)}</span>
    </div>
  `;
}

function renderThreadButton(thread) {
  const lastMessage = getThreadLastMessage(thread.id);
  const lastSender = lastMessage ? getUser(lastMessage.senderKey).name : "No messages yet";
  const preview = lastMessage ? getChatMessagePreview(lastMessage) : thread.description;
  const pendingRequest = getPendingProjectRequestForThread(thread.id);
  const unreadCount = getThreadUnreadCount(thread.id);
  const classes = ["thread-button", thread.type === "direct" ? "is-direct" : "", pendingRequest ? "has-request" : "", thread.id === activeChatThreadId ? "is-active" : ""].filter(Boolean).join(" ");
  const recipientKey = thread.type === "direct" ? getDirectRecipientKey(thread.id) : null;

  return `
    <button class="${classes}" type="button" data-thread="${thread.id}">
      <span>
        <strong>${escapeHtml(thread.name)}</strong>
        ${unreadCount ? `<small class="thread-unread-badge">${formatUnreadCount(unreadCount)} unread</small>` : `<small>${pendingRequest ? "Project request" : escapeHtml(thread.label)}</small>`}
      </span>
      <span class="thread-preview">${escapeHtml(lastSender)}: ${escapeHtml(preview)}</span>
      ${recipientKey ? `<span class="dm-status">${escapeHtml(staffStatuses[recipientKey] || getUser(recipientKey).role)}</span>` : ""}
    </button>
  `;
}

function renderMessage(message) {
  if (message.type === "project-suggestion") {
    return renderProjectSuggestionMessage(message);
  }

  const sender = getUser(message.senderKey);
  const project = message.projectId ? getProject(message.projectId) : null;
  const linkedNote = message.noteId ? notes.find((note) => note.id === message.noteId && canUserSeeNote(note)) : null;
  const isMine = message.senderKey === currentUserKey;
  const classes = ["message-row", isMine ? "is-mine" : ""].filter(Boolean).join(" ");
  const statusText = getMessageStatusText(message);

  return `
    <article class="${classes}">
      ${renderPhotoAvatar(message.senderKey, "small")}
      <div class="message-bubble">
        <div class="message-meta">
          <strong>${escapeHtml(sender.name)}</strong>
          <time datetime="${escapeHtml(message.createdAt)}">${formatMessageTime(message.createdAt)}</time>
        </div>
        <p>${escapeHtml(message.body)}</p>
        ${project ? `
          <button class="project-message-link" type="button" data-project-request-action="open" data-project-id="${escapeHtml(project.id)}">
            Open ${escapeHtml(project.title)}
          </button>
        ` : ""}
        ${linkedNote ? `
          <button class="project-message-link note-message-link" type="button" data-chat-open-note="${escapeHtml(linkedNote.id)}">
            Open ${escapeHtml(linkedNote.title)}
          </button>
        ` : ""}
        <div class="message-action-row">
          <button class="message-note-action" type="button" data-message-note="${escapeHtml(message.id)}">Make note</button>
        </div>
        ${statusText ? `<small class="message-status">${escapeHtml(statusText)}</small>` : ""}
      </div>
    </article>
  `;
}

function renderTypingIndicator(text) {
  return `
    <article class="message-row typing-row">
      ${renderPhotoAvatar(typingState.userKey, "small")}
      <div class="typing-bubble" aria-live="polite">
        <span></span><span></span><span></span>
        <small>${escapeHtml(text)}</small>
      </div>
    </article>
  `;
}

function renderProjectSuggestionMessage(message) {
  const sender = getUser(message.senderKey);
  const project = getProject(message.projectId);
  const isMine = message.senderKey === currentUserKey;
  const classes = ["message-row", isMine ? "is-mine" : "", "has-project-request"].filter(Boolean).join(" ");

  if (!project) {
    return `
      <article class="${classes}">
        ${renderPhotoAvatar(message.senderKey, "small")}
        <div class="message-bubble">
          <div class="message-meta">
            <strong>${escapeHtml(sender.name)}</strong>
            <time datetime="${escapeHtml(message.createdAt)}">${formatMessageTime(message.createdAt)}</time>
          </div>
          <p>This project suggestion is no longer on the board.</p>
        </div>
      </article>
    `;
  }

  const state = getProjectSuggestionState(project);
  const isRecipient = (message.recipientKey || project.ownerKey) === currentUserKey;
  const canRespond = isRecipient && state === "pending";
  const stateLabel = state === "accepted" ? "Accepted" : state === "rejected" ? "Rejected" : "Pending";

  return `
    <article class="${classes}">
      ${renderPhotoAvatar(message.senderKey, "small")}
      <div class="message-bubble project-request-bubble">
        <div class="message-meta">
          <strong>${escapeHtml(sender.name)}</strong>
          <time datetime="${escapeHtml(message.createdAt)}">${formatMessageTime(message.createdAt)}</time>
        </div>
        <div class="project-request-card">
          <div class="project-request-top">
            <span class="status-pill project-status-${project.status}">${escapeHtml(stateLabel)}</span>
            <small>${escapeHtml(projectStatusLabels[project.status] || project.status)}</small>
          </div>
          <h4>${escapeHtml(project.title)}</h4>
          <p>${escapeHtml(project.summary || "No summary yet.")}</p>
          <dl>
            <div><dt>Owner</dt><dd>${escapeHtml(getUser(project.ownerKey).name)}</dd></div>
            <div><dt>Next</dt><dd>${escapeHtml(project.nextStep || "Pick a next tiny step.")}</dd></div>
          </dl>
          <div class="project-request-actions">
            ${canRespond ? `
              <button class="secondary-action" type="button" data-project-request-action="accept" data-project-id="${escapeHtml(project.id)}">Accept</button>
              <button class="secondary-action danger" type="button" data-project-request-action="reject" data-project-id="${escapeHtml(project.id)}">Reject</button>
            ` : ""}
            <button class="secondary-action" type="button" data-project-request-action="open" data-project-id="${escapeHtml(project.id)}">Open project</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderEmptyChat() {
  return `
    <div class="empty-state">
      <h4>No messages yet</h4>
      <p>Start the conversation for this room.</p>
    </div>
  `;
}

function showMessageAlert(message, count = 1) {
  if (!message || message.senderKey === currentUserKey || dashboardView.classList.contains("is-hidden")) {
    return;
  }

  const sender = getUser(message.senderKey);
  const thread = getThread(message.threadId);
  const alert = getMessageAlertElement();
  alert.dataset.thread = message.threadId;
  alert.innerHTML = `
    <div class="message-alert-orb photo-avatar" aria-hidden="true"></div>
    <div class="message-alert-copy">
      <span>${count > 1 ? `${count} new messages` : "New message"}</span>
      <strong>${escapeHtml(sender.name)} in ${escapeHtml(thread.name)}</strong>
      <p>${escapeHtml(getMessagePreview(message.body))}</p>
    </div>
    <div class="message-alert-actions">
      <button class="message-alert-open" type="button" data-alert-open>Open</button>
      <button class="message-alert-close" type="button" data-alert-close aria-label="Dismiss message alert">&times;</button>
    </div>
  `;

  alert.classList.add("is-visible");
  window.clearTimeout(messageAlertTimer);
  messageAlertTimer = window.setTimeout(hideMessageAlert, 7200);
}

function getMessageAlertElement() {
  let alert = document.querySelector("#messageAlert");

  if (alert) {
    return alert;
  }

  alert = document.createElement("aside");
  alert.id = "messageAlert";
  alert.className = "message-alert";
  alert.setAttribute("role", "status");
  alert.setAttribute("aria-live", "polite");

  alert.addEventListener("click", (event) => {
    if (event.target.closest("[data-alert-close]")) {
      hideMessageAlert();
      return;
    }

    if (event.target.closest("[data-alert-open]")) {
      activeChatThreadId = alert.dataset.thread || activeChatThreadId;
      setModule("chat");
      hideMessageAlert();
    }
  });

  document.body.append(alert);
  return alert;
}

function hideMessageAlert() {
  document.querySelector("#messageAlert")?.classList.remove("is-visible");
  window.clearTimeout(messageAlertTimer);
}

function showNoteReminderAlert(note) {
  if (!note || dashboardView.classList.contains("is-hidden")) {
    return;
  }

  const alert = getNoteReminderAlertElement();
  alert.dataset.note = note.id;
  alert.innerHTML = `
    <div class="note-reminder-mark" aria-hidden="true">!</div>
    <div class="message-alert-copy">
      <span>Note reminder</span>
      <strong>${escapeHtml(note.title)}</strong>
      <p>${escapeHtml(note.body || formatNoteReminder(note))}</p>
    </div>
    <div class="message-alert-actions">
      <button class="message-alert-open" type="button" data-note-reminder-open>Open</button>
      <button class="message-alert-open secondary" type="button" data-note-reminder-snooze>Snooze</button>
      <button class="message-alert-close" type="button" data-note-reminder-done aria-label="Mark note reminder handled">&times;</button>
    </div>
  `;

  alert.classList.add("is-visible");
  window.clearTimeout(noteReminderAlertTimer);
  noteReminderAlertTimer = window.setTimeout(hideNoteReminderAlert, 12000);
}

function getNoteReminderAlertElement() {
  let alert = document.querySelector("#noteReminderAlert");

  if (alert) {
    return alert;
  }

  alert = document.createElement("aside");
  alert.id = "noteReminderAlert";
  alert.className = "message-alert note-reminder-alert";
  alert.setAttribute("role", "status");
  alert.setAttribute("aria-live", "polite");

  alert.addEventListener("click", (event) => {
    const noteId = alert.dataset.note;

    if (event.target.closest("[data-note-reminder-open]")) {
      selectedNoteId = noteId;
      noteStatusFilter = "all";
      notePriorityFilter = "all";
      setModule("notes");
      hideNoteReminderAlert();
      return;
    }

    if (event.target.closest("[data-note-reminder-snooze]")) {
      snoozeNoteReminder(noteId, 15);
      hideNoteReminderAlert();
      return;
    }

    if (event.target.closest("[data-note-reminder-done]")) {
      markNoteReminderDone(noteId);
      hideNoteReminderAlert();
    }
  });

  document.body.append(alert);
  return alert;
}

function hideNoteReminderAlert() {
  document.querySelector("#noteReminderAlert")?.classList.remove("is-visible");
  window.clearTimeout(noteReminderAlertTimer);
}

function snoozeNoteReminder(noteId, minutes) {
  const nextReminderAt = new Date(Date.now() + minutes * 60 * 1000).toISOString();
  notes = notes.map((note) => note.id === noteId
    ? normalizeNote({ ...note, reminderAt: nextReminderAt, reminderDone: false, updatedAt: new Date().toISOString() })
    : note
  );
  saveNotes();
  if (activeModule === "notes") {
    setModule("notes");
  }
}

function markNoteReminderDone(noteId) {
  notes = notes.map((note) => note.id === noteId
    ? normalizeNote({ ...note, reminderDone: true, updatedAt: new Date().toISOString() })
    : note
  );
  saveNotes();
  if (activeModule === "notes") {
    setModule("notes");
  }
}

function checkNoteReminders() {
  const reminder = getOpenNoteReminders()[0];
  const visibleAlert = document.querySelector("#noteReminderAlert.is-visible");

  if (reminder && !visibleAlert) {
    showNoteReminderAlert(reminder);
  }
}

function syncIncomingChatMessages(nextMessages) {
  if (!Array.isArray(nextMessages)) {
    return;
  }

  const currentIds = new Set(chatMessages.map((message) => message.id));
  const incomingMessages = nextMessages.filter((message) =>
    !currentIds.has(message.id) &&
    message.senderKey !== currentUserKey &&
    canCurrentUserSeeMessage(message)
  );
  const isReset = nextMessages.length < chatMessages.length;
  chatMessages = nextMessages;
  updateUnreadIndicators();

  if (activeModule === "chat") {
    setModule("chat");
  } else if (activeModule === "home") {
    setModule("home");
  }

  if (!isReset && incomingMessages.length) {
    showMessageAlert(incomingMessages.at(-1), incomingMessages.length);
  }
}

function broadcastTyping(event) {
  const isTyping = Boolean(event.currentTarget.value.trim());
  localStorage.setItem(typingStorageKey, JSON.stringify({
    threadId: activeChatThreadId,
    userKey: currentUserKey,
    updatedAt: Date.now(),
    stopped: !isTyping,
  }));

  window.clearTimeout(typingClearTimer);
  if (isTyping) {
    typingClearTimer = window.setTimeout(clearTypingBroadcast, 1800);
  }
}

function clearTypingBroadcast() {
  window.clearTimeout(typingClearTimer);
  localStorage.setItem(typingStorageKey, JSON.stringify({
    threadId: activeChatThreadId,
    userKey: currentUserKey,
    updatedAt: Date.now(),
    stopped: true,
  }));
}

function syncTypingState(state) {
  if (!state || state.userKey === currentUserKey) {
    return;
  }

  const matchesCurrentTyping = typingState?.threadId === state.threadId && typingState?.userKey === state.userKey;
  if (state.stopped) {
    if (matchesCurrentTyping) {
      typingState = null;
      updateTypingIndicator();
    }
    return;
  }

  typingState = state;
  updateTypingIndicator();
  window.clearTimeout(typingBroadcastTimer);
  typingBroadcastTimer = window.setTimeout(() => {
    if (typingState?.threadId === state.threadId && typingState?.userKey === state.userKey) {
      typingState = null;
      updateTypingIndicator();
    }
  }, 3300);
}

function updateTypingIndicator() {
  if (activeModule !== "chat") {
    return;
  }

  moduleCanvas.querySelector(".typing-row")?.remove();
  const text = getTypingText();
  const messageList = moduleCanvas.querySelector("#messageList");
  if (!text || !messageList) {
    return;
  }

  messageList.insertAdjacentHTML("beforeend", renderTypingIndicator(text));
  messageList.scrollTo({ top: messageList.scrollHeight });
}

function syncProjectBoard(nextProjects) {
  if (!Array.isArray(nextProjects)) {
    return;
  }

  projects = nextProjects.map(normalizeProject);

  if (activeModule === "projects" || activeModule === "chat" || activeModule === "home") {
    setModule(activeModule);
  }
}

function renderSettings() {
  return `
    <div class="settings-layout">
      <section class="settings-panel">
        <h3>Schedule data</h3>
        <p>When this app is started with the beta server, appointments, clients, services, tickets, cue repairs, notes, chat, and projects are saved in the shared on-prem database and update live for connected computers.</p>
        <div class="settings-actions">
          <button class="secondary-action" type="button" data-action="export">Export JSON</button>
          <button class="secondary-action" type="button" data-action="reset-chat">Reset chat</button>
          <button class="secondary-action danger" type="button" data-action="reset">Reset demo data</button>
        </div>
      </section>
      <section class="settings-panel">
        <h3>Business setup</h3>
        <dl class="settings-list">
          <div><dt>Services</dt><dd>${services.length}</dd></div>
          <div><dt>Crews</dt><dd>${crews.length}</dd></div>
          <div><dt>Clients</dt><dd>${clients.length}</dd></div>
          <div><dt>Appointments</dt><dd>${appointments.length}</dd></div>
          <div><dt>Service tickets</dt><dd>${serviceTickets.length}</dd></div>
          <div><dt>Cue repairs</dt><dd>${cueRepairs.length}</dd></div>
          <div><dt>Location</dt><dd>${businessProfile.city}, ${businessProfile.province}</dd></div>
          <div><dt>Tax</dt><dd>${businessProfile.taxes.pst.label} 7% · ${businessProfile.taxes.gst.label} 5%</dd></div>
          <div><dt>Notes</dt><dd>${notes.length}</dd></div>
          <div><dt>Chat messages</dt><dd>${chatMessages.length}</dd></div>
          <div><dt>Projects</dt><dd>${projects.length}</dd></div>
          <div><dt>Beta feedback</dt><dd>${betaFeedback.length}</dd></div>
        </dl>
      </section>
      ${renderProjectAutomationSettings()}
    </div>
  `;
}

function renderProjectAutomationSettings() {
  const automation = projectAutomations.find((item) => item.id === "mark-monthly-bill") || normalizeProjectAutomation(defaultProjectAutomations[0]);
  const herlynPart = automation.contributors.find((contributor) => contributor.userKey === "herlyn")?.role || "Compile Mark's invoice";
  const shawnPart = automation.contributors.find((contributor) => contributor.userKey === "shawn")?.role || "Review and confirm the bill";
  const checklist = automation.checklist.length ? automation.checklist : defaultProjectAutomations[0].checklist;

  return `
    <section class="settings-panel quiet-settings-panel">
      <details>
        <summary>
          <span>Quiet project templates</span>
          <small>${automation.enabled ? "Mark's bill is on" : "Mark's bill is paused"}</small>
        </summary>
        <form class="booking-form project-automation-form" id="projectAutomationForm">
          <label class="check-row quiet-check">
            <input type="checkbox" name="enabled" ${automation.enabled ? "checked" : ""} />
            <span>Create Mark's bill project every month</span>
          </label>

          <div class="form-row">
            <div>
              <label for="automationDay">Day of month</label>
              <input id="automationDay" name="dayOfMonth" type="number" min="1" max="28" value="${automation.dayOfMonth}" />
            </div>
            <div>
              <label for="automationDue">Due after</label>
              <input id="automationDue" name="dueDaysAfterCreate" type="number" min="0" max="31" value="${automation.dueDaysAfterCreate}" />
            </div>
          </div>

          <label for="automationTitle">Project title</label>
          <input id="automationTitle" name="titleTemplate" value="${escapeHtml(automation.titleTemplate)}" maxlength="90" />

          <label for="automationSummary">Project note</label>
          <textarea id="automationSummary" name="summaryTemplate" rows="2" maxlength="220">${escapeHtml(automation.summaryTemplate)}</textarea>

          <label for="automationNext">First step</label>
          <input id="automationNext" name="nextStepTemplate" value="${escapeHtml(automation.nextStepTemplate)}" maxlength="140" />

          <div class="form-row">
            <div>
              <label for="automationHerlyn">Herlyn's part</label>
              <input id="automationHerlyn" name="herlynRole" value="${escapeHtml(herlynPart)}" maxlength="120" />
            </div>
            <div>
              <label for="automationShawn">Shawn's part</label>
              <input id="automationShawn" name="shawnRole" value="${escapeHtml(shawnPart)}" maxlength="120" />
            </div>
          </div>

          <div class="form-row">
            <div>
              <label for="automationChecklistOne">Checklist 1</label>
              <input id="automationChecklistOne" name="checklistOne" value="${escapeHtml(checklist[0] || "")}" maxlength="140" />
            </div>
            <div>
              <label for="automationChecklistTwo">Checklist 2</label>
              <input id="automationChecklistTwo" name="checklistTwo" value="${escapeHtml(checklist[1] || "")}" maxlength="140" />
            </div>
          </div>

          <p class="quiet-helper">Use {month} in text to drop in the month that just finished.</p>
          <button class="secondary-action" type="submit">Save template</button>
          <p class="form-alert" id="projectAutomationAlert" hidden></p>
        </form>
      </details>
    </section>
  `;
}

function bindSchedule() {
  moduleCanvas.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      statusFilter = button.dataset.filter;
      selectedAppointmentId = null;
      quickFactAppointmentId = null;
      scheduleNotice = "";
      setModule("schedule");
    });
  });

  moduleCanvas.querySelectorAll("[data-calendar-type-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      calendarTypeFilter = button.dataset.calendarTypeFilter;
      selectedAppointmentId = null;
      quickFactAppointmentId = null;
      scheduleNotice = "";
      setModule("schedule");
    });
  });

  moduleCanvas.querySelectorAll("[data-appointment]").forEach((button) => {
    button.addEventListener("click", () => {
      const appointment = appointments.find((item) => item.id === button.dataset.appointment);
      selectedAppointmentId = button.dataset.appointment;
      quickFactAppointmentId = button.classList.contains("calendar-job") ? button.dataset.appointment : null;
      selectedDate = appointment?.date || button.dataset.date || selectedDate;
      currentMonth = startOfMonth(dateFromKey(selectedDate));
      setModule("schedule");
    });
  });

  moduleCanvas.querySelectorAll(".day-select, .calendar-more").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDate = button.dataset.date;
      selectedAppointmentId = null;
      quickFactAppointmentId = null;
      currentMonth = startOfMonth(dateFromKey(selectedDate));
      setModule("schedule");
    });
  });

  moduleCanvas.querySelector("[data-action='close-quick-card']")?.addEventListener("click", () => {
    quickFactAppointmentId = null;
    setModule("schedule");
  });

  moduleCanvas.addEventListener("click", (event) => {
    if (!quickFactAppointmentId) {
      return;
    }

    if (event.target.closest(".job-quick-card") || event.target.closest("[data-appointment]")) {
      return;
    }

    quickFactAppointmentId = null;
    setModule("schedule");
  });

  moduleCanvas.querySelector("[data-action='toggle-calendar-zoom']")?.addEventListener("click", () => {
    calendarZoomMode = calendarZoomMode === "month" ? "three-week" : "month";
    currentMonth = startOfMonth(dateFromKey(selectedDate));
    quickFactAppointmentId = null;
    setModule("schedule");
  });

  moduleCanvas.querySelector("[data-action='prev-period']")?.addEventListener("click", () => {
    if (calendarZoomMode === "month") {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      selectedDate = toDateKey(currentMonth);
    } else {
      selectedDate = toDateKey(addDays(dateFromKey(selectedDate), -7));
      currentMonth = startOfMonth(dateFromKey(selectedDate));
    }
    selectedAppointmentId = null;
    quickFactAppointmentId = null;
    setModule("schedule");
  });

  moduleCanvas.querySelector("[data-action='next-period']")?.addEventListener("click", () => {
    if (calendarZoomMode === "month") {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      selectedDate = toDateKey(currentMonth);
    } else {
      selectedDate = toDateKey(addDays(dateFromKey(selectedDate), 7));
      currentMonth = startOfMonth(dateFromKey(selectedDate));
    }
    selectedAppointmentId = null;
    quickFactAppointmentId = null;
    setModule("schedule");
  });

  moduleCanvas.querySelector("[data-action='today']")?.addEventListener("click", jumpToToday);
  moduleCanvas.querySelector("[data-action='new']")?.addEventListener("click", () => {
    editingId = null;
    bookingClientId = null;
    setModule("schedule");
    moduleCanvas.querySelector("#bookingForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  moduleCanvas.querySelector("[data-action='cancel-edit']")?.addEventListener("click", () => {
    editingId = null;
    setModule("schedule");
  });

  moduleCanvas.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editingId = button.dataset.edit;
      setModule("schedule");
      moduleCanvas.querySelector("#bookingForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  moduleCanvas.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      appointments = appointments.filter((appointment) => appointment.id !== button.dataset.delete);
      selectedAppointmentId = null;
      quickFactAppointmentId = null;
      saveAppointments();
      setModule("schedule");
    });
  });

  moduleCanvas.querySelectorAll("[data-open-ticket-for-job]").forEach((button) => {
    button.addEventListener("click", () => openTicketForAppointment(button.dataset.openTicketForJob));
  });

  moduleCanvas.querySelectorAll("[data-open-invoice]").forEach((button) => {
    button.addEventListener("click", () => {
      const appointment = appointments.find((item) => item.id === button.dataset.openInvoice);

      if (!appointment) {
        return;
      }

      selectedDate = appointment.date;
      currentMonth = startOfMonth(dateFromKey(appointment.date));
      calendarZoomMode = "three-week";
      selectedAppointmentId = appointment.id;
      quickFactAppointmentId = null;
      editingId = null;
      setModule("schedule");
      window.setTimeout(() => {
        moduleCanvas.querySelector(".day-focus-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    });
  });

  moduleCanvas.querySelectorAll("[data-toggle-complete]").forEach((button) => {
    button.addEventListener("click", () => {
      const appointmentId = button.dataset.toggleComplete;
      appointments = appointments.map((appointment) => {
        if (appointment.id !== appointmentId) {
          return appointment;
        }

        if (appointment.status === "complete" || appointment.status === "payment_due") {
          return reopenAppointment(appointment);
        }

        return moveAppointmentToPaymentDue(appointment);
      });
      quickFactAppointmentId = null;
      saveAppointments();
      setModule("schedule");
    });
  });

  moduleCanvas.querySelectorAll("[data-payment-form]").forEach((form) => {
    form.addEventListener("submit", submitPayment);
  });

  bindScheduleDragAndDrop();

  const form = moduleCanvas.querySelector("#bookingForm");
  if (form) {
    form.addEventListener("input", () => updateConflictAlert(form));
    form.addEventListener("submit", submitAppointment);
    bindInlineClientTools(form);
    bindServiceBuilder(form);
    updateConflictAlert(form);
  }
}

function bindScheduleDragAndDrop() {
  moduleCanvas.querySelectorAll("[data-appointment-drag]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      if (event.dataTransfer) {
        event.dataTransfer.setData("text/plain", card.dataset.appointmentDrag);
        event.dataTransfer.setData("application/x-appointment-id", card.dataset.appointmentDrag);
        event.dataTransfer.effectAllowed = "move";
      }
      card.classList.add("is-dragging");
      scheduleNotice = "";
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
      moduleCanvas.querySelectorAll(".is-drag-over").forEach((element) => element.classList.remove("is-drag-over"));
    });
  });

  moduleCanvas.querySelectorAll("[data-drop-date]").forEach((target) => {
    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      target.classList.add("is-drag-over");
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
      }
    });

    target.addEventListener("dragleave", (event) => {
      if (!target.contains(event.relatedTarget)) {
        target.classList.remove("is-drag-over");
      }
    });

    target.addEventListener("drop", (event) => {
      event.preventDefault();
      target.classList.remove("is-drag-over");
      const appointmentId = event.dataTransfer?.getData("application/x-appointment-id") || event.dataTransfer?.getData("text/plain");
      moveAppointmentFromDrop(appointmentId, target);
    });
  });

}

function moveAppointmentFromDrop(appointmentId, target) {
  if (!appointmentId || !target) {
    return;
  }

  const changes = {};
  if (target.dataset.dropDate) changes.date = target.dataset.dropDate;
  if (target.dataset.dropTime) {
    changes.date = selectedDate;
    changes.time = target.dataset.dropTime;
  }
  if (target.dataset.dropCrew) changes.crewId = target.dataset.dropCrew;

  moveAppointment(appointmentId, changes);
}

function moveAppointment(appointmentId, changes) {
  const appointment = appointments.find((item) => item.id === appointmentId);

  if (!appointment || !Object.keys(changes).length) {
    return;
  }

  const nextAppointment = normalizeAppointment({ ...appointment, ...changes });
  const conflict = findConflict(nextAppointment);
  const movedDate = changes.date && changes.date !== appointment.date;
  const movedTime = changes.time && changes.time !== appointment.time;
  const movedCrew = changes.crewId && changes.crewId !== appointment.crewId;

  appointments = appointments.map((item) => item.id === appointmentId ? nextAppointment : item);
  selectedDate = nextAppointment.date;
  currentMonth = startOfMonth(dateFromKey(nextAppointment.date));
  selectedAppointmentId = appointmentId;
  quickFactAppointmentId = null;
  editingId = null;

  const moveParts = [
    movedDate ? formatShortDate(dateFromKey(nextAppointment.date)) : "",
    movedTime ? formatTime(nextAppointment.time) : "",
    movedCrew ? getCrew(nextAppointment.crewId).name : "",
  ].filter(Boolean);
  const client = getClient(nextAppointment.clientId);
  scheduleNotice = `${getAppointmentTypeShortLabel(nextAppointment)} for ${client.name} moved${moveParts.length ? ` to ${moveParts.join(" · ")}` : ""}.`;
  if (conflict) {
    scheduleNotice += ` Conflict with ${getClient(conflict.clientId).name} at ${formatTime(conflict.time)}.`;
  }

  saveAppointments();
  setModule("schedule");
}

function bindOpenJobs() {
  const search = moduleCanvas.querySelector("#jobSearch");
  search?.addEventListener("input", () => {
    jobSearchTerm = search.value;
    selectedJobId = null;
    setModule("jobs");
    const nextSearch = moduleCanvas.querySelector("#jobSearch");
    nextSearch?.focus();
    nextSearch?.setSelectionRange(nextSearch.value.length, nextSearch.value.length);
  });

  moduleCanvas.querySelectorAll("[data-job-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      jobStatusFilter = button.dataset.jobFilter;
      selectedJobId = null;
      setModule("jobs");
    });
  });

  moduleCanvas.querySelectorAll("[data-job-type-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      jobTypeFilter = button.dataset.jobTypeFilter;
      selectedJobId = null;
      setModule("jobs");
    });
  });

  moduleCanvas.querySelector("[data-job-action='new']")?.addEventListener("click", () => {
    editingId = null;
    bookingClientId = null;
    setModule("schedule");
    window.setTimeout(() => {
      moduleCanvas.querySelector("#bookingForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  });

  moduleCanvas.querySelectorAll("[data-job-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedJobId = button.dataset.jobSelect;
      setModule("jobs");
      moduleCanvas.querySelector(".job-detail-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  moduleCanvas.querySelectorAll("[data-job-action='schedule'], [data-job-action='edit']").forEach((button) => {
    button.addEventListener("click", () => {
      const appointment = appointments.find((item) => item.id === button.dataset.jobId);

      if (!appointment) {
        return;
      }

      selectedDate = appointment.date;
      currentMonth = startOfMonth(dateFromKey(appointment.date));
      calendarZoomMode = "three-week";
      selectedAppointmentId = appointment.id;
      quickFactAppointmentId = button.dataset.jobAction === "schedule" ? appointment.id : null;
      editingId = button.dataset.jobAction === "edit" ? appointment.id : null;
      setModule("schedule");
      window.setTimeout(() => {
        moduleCanvas.querySelector(editingId ? "#bookingForm" : ".day-focus-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    });
  });

  moduleCanvas.querySelectorAll("[data-job-action='client']").forEach((button) => {
    button.addEventListener("click", () => {
      selectedClientId = button.dataset.clientId;
      clientEditingId = null;
      clientCreatingNew = false;
      setModule("clients");
    });
  });

  moduleCanvas.querySelectorAll("[data-job-action='ticket']").forEach((button) => {
    button.addEventListener("click", () => openTicketForAppointment(button.dataset.jobId));
  });

  moduleCanvas.querySelectorAll("[data-job-action='toggle-complete']").forEach((button) => {
    button.addEventListener("click", () => {
      const appointmentId = button.dataset.jobId;
      appointments = appointments.map((appointment) => {
        if (appointment.id !== appointmentId) {
          return appointment;
        }

        if (appointment.status === "complete" || appointment.status === "payment_due") {
          return reopenAppointment(appointment);
        }

        return moveAppointmentToPaymentDue(appointment);
      });
      saveAppointments();
      selectedJobId = appointmentId;
      setModule("jobs");
    });
  });

  moduleCanvas.querySelectorAll("[data-payment-form]").forEach((form) => {
    form.addEventListener("submit", submitPayment);
  });
}

function bindInlineClientTools(form) {
  form.querySelectorAll("[data-client-quick]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.clientQuick;

      if (action === "new" || action === "edit") {
        showInlineClientEditor(form, action);
        return;
      }

      if (action === "location") {
        showInlineClientEditor(form, "edit");
        addInlineLocationRow(form);
        return;
      }

      if (action === "save") {
        saveInlineClient(form);
        return;
      }

      hideInlineClientEditor(form);
    });
  });

  form.querySelector("#appointmentClient")?.addEventListener("change", () => {
    const editor = form.querySelector("#clientQuickEditor");
    const client = clients.find((item) => item.id === form.querySelector("#appointmentClient")?.value);
    refreshAppointmentAddressPicker(form, getPrimaryClientAddress(client || {})?.id || "");

    if (!editor?.hidden && editor.dataset.mode === "edit") {
      showInlineClientEditor(form, "edit");
    }
  });

  const editor = form.querySelector("#clientQuickEditor");
  editor?.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-client-location-add]");
    const removeButton = event.target.closest("[data-client-location-remove]");

    if (addButton) {
      addInlineLocationRow(form);
      return;
    }

    if (removeButton) {
      removeButton.closest("[data-client-location-row]")?.remove();
      ensureAtLeastOneInlineLocation(form);
    }
  });

  editor?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
      event.preventDefault();
      saveInlineClient(form);
    }
  });
}

function showInlineClientEditor(form, mode) {
  const editor = form.querySelector("#clientQuickEditor");
  const select = form.querySelector("#appointmentClient");
  const alert = form.querySelector("#quickClientAlert");
  const client = mode === "edit" ? clients.find((item) => item.id === select?.value) : null;

  if (!editor || (mode === "edit" && !client)) {
    return;
  }

  editor.hidden = false;
  editor.dataset.mode = mode;
  editor.dataset.clientId = client?.id || "";
  form.querySelector("#clientQuickTitle").textContent = mode === "edit" ? "Edit customer" : "New customer";
  form.querySelector("#quickClientName").value = client?.name || "";
  form.querySelector("#quickClientPhone").value = client?.phone || "";
  form.querySelector("#quickClientEmail").value = client?.email || "";
  form.querySelector("#quickClientLocations").innerHTML = renderInlineLocationRows(client ? getClientAddresses(client) : []);
  ensureAtLeastOneInlineLocation(form);
  form.querySelector("#quickClientNotes").value = client?.notes || "";

  if (alert) {
    alert.hidden = true;
    alert.textContent = "";
  }

  window.setTimeout(() => form.querySelector("#quickClientName")?.focus(), 25);
}

function hideInlineClientEditor(form) {
  const editor = form.querySelector("#clientQuickEditor");

  if (editor) {
    editor.hidden = true;
  }
}

function renderInlineLocationRows(locations) {
  return locations.map((location, index) => renderInlineLocationRow(location, index)).join("");
}

function renderInlineLocationRow(location = {}, index = 0) {
  const label = location.label || (index === 0 ? "Main" : `Location ${index + 1}`);

  return `
    <div class="quick-location-row" data-client-location-row data-location-id="${escapeHtml(location.id || "")}">
      <input class="quick-location-label" value="${escapeHtml(label)}" aria-label="Location label" placeholder="Main, Warehouse, Office" />
      <input class="quick-location-address" value="${escapeHtml(location.address || "")}" aria-label="Location address" placeholder="Service address" />
      <button class="text-action danger" type="button" data-client-location-remove aria-label="Remove location">Remove</button>
    </div>
  `;
}

function addInlineLocationRow(form) {
  const list = form.querySelector("#quickClientLocations");
  const nextIndex = list?.querySelectorAll("[data-client-location-row]").length || 0;

  if (!list) {
    return;
  }

  list.insertAdjacentHTML("beforeend", renderInlineLocationRow({}, nextIndex));
  window.setTimeout(() => list.querySelector("[data-client-location-row]:last-child .quick-location-address")?.focus(), 25);
}

function ensureAtLeastOneInlineLocation(form) {
  const list = form.querySelector("#quickClientLocations");

  if (list && !list.querySelector("[data-client-location-row]")) {
    list.insertAdjacentHTML("beforeend", renderInlineLocationRow({}, 0));
  }
}

function getInlineLocationValues(form, clientId) {
  return [...form.querySelectorAll("[data-client-location-row]")]
    .map((row, index) => normalizeClientAddress({
      id: row.dataset.locationId || "",
      label: row.querySelector(".quick-location-label")?.value || "",
      address: row.querySelector(".quick-location-address")?.value || "",
      primary: index === 0,
    }, clientId, index))
    .filter((location) => location.address);
}

function saveInlineClient(form) {
  const editor = form.querySelector("#clientQuickEditor");
  const alert = form.querySelector("#quickClientAlert");
  const mode = editor?.dataset.mode || "new";
  const existingClient = clients.find((client) => client.id === editor?.dataset.clientId);
  const name = form.querySelector("#quickClientName")?.value.trim() || "";

  if (!name) {
    if (alert) {
      alert.hidden = false;
      alert.textContent = "Add the customer name first.";
    }
    form.querySelector("#quickClientName")?.focus();
    return;
  }

  const now = new Date().toISOString();
  const clientId = mode === "edit" && existingClient ? existingClient.id : createId();
  const addresses = getInlineLocationValues(form, clientId);
  const client = normalizeClient({
    id: clientId,
    customerNumber: existingClient?.customerNumber || "",
    name,
    phone: form.querySelector("#quickClientPhone")?.value || "",
    email: form.querySelector("#quickClientEmail")?.value || "",
    address: addresses[0]?.address || "",
    addresses,
    notes: form.querySelector("#quickClientNotes")?.value || "",
    status: existingClient?.status || "active",
    tags: existingClient?.tags || [],
    createdAt: existingClient?.createdAt || now,
    updatedAt: now,
  });

  clients = existingClient
    ? clients.map((item) => (item.id === client.id ? client : item))
    : [...clients, client];

  selectedClientId = client.id;
  bookingClientId = client.id;
  saveClients();
  refreshAppointmentClientPicker(form, client.id);
  refreshAppointmentAddressPicker(form, getPrimaryClientAddress(client)?.id || "");
  hideInlineClientEditor(form);
  updateLiveQuote(form);
}

function refreshAppointmentClientPicker(form, selectedId) {
  const select = form.querySelector("#appointmentClient");
  const editButton = form.querySelector("[data-client-quick='edit']");
  const missingAlert = form.querySelector("#clientMissingAlert");

  if (!select) {
    return;
  }

  select.replaceChildren();
  [...clients].sort((a, b) => a.name.localeCompare(b.name)).forEach((client) => {
    select.add(new Option(formatClientOption(client), client.id, false, client.id === selectedId));
  });

  select.value = selectedId;

  if (editButton) {
    editButton.disabled = clients.length === 0;
  }

  if (missingAlert) {
    missingAlert.hidden = clients.length > 0;
  }
}

function refreshAppointmentAddressPicker(form, selectedId = "") {
  const select = form.querySelector("#appointmentAddress");
  const client = clients.find((item) => item.id === form.querySelector("#appointmentClient")?.value);
  const locations = client ? getClientAddresses(client) : [];
  const fallbackId = selectedId && locations.some((location) => location.id === selectedId)
    ? selectedId
    : getPrimaryClientAddress(client || {})?.id || "";

  if (!select) {
    return;
  }

  select.replaceChildren();

  if (locations.length) {
    locations.forEach((location) => {
      select.add(new Option(formatAddressOption(location), location.id, false, location.id === fallbackId));
    });
    select.disabled = false;
    select.value = fallbackId;
  } else {
    select.add(new Option("No saved locations", ""));
    select.disabled = true;
  }
}

function bindServiceBuilder(form) {
  const picker = form.querySelector("#appointmentServicePicker");
  const search = form.querySelector("#servicePickerSearch");
  const quoteLines = form.querySelector("#quoteLines");

  form.querySelector("[data-action='add-service']")?.addEventListener("click", () => {
    if (!picker?.value || !quoteLines) {
      return;
    }

    quoteLines.insertAdjacentHTML("beforeend", renderServiceLineItem(picker.value));
    updateLiveQuote(form);
  });

  quoteLines?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action='remove-service']");
    if (!button) {
      return;
    }

    button.closest("[data-service-line]")?.remove();
    updateLiveQuote(form);
  });

  search?.addEventListener("input", () => {
    const term = search.value.trim().toLowerCase();
    let firstVisibleValue = "";

    [...picker.options].forEach((option) => {
      const isVisible = !term || option.dataset.search.includes(term);
      option.hidden = !isVisible;

      if (isVisible && !firstVisibleValue) {
        firstVisibleValue = option.value;
      }
    });

    if (picker.selectedOptions[0]?.hidden && firstVisibleValue) {
      picker.value = firstVisibleValue;
    }
  });
}

function getSelectedServiceIdsFromForm(form) {
  return new FormData(form).getAll("serviceIds").filter(Boolean);
}

function updateLiveQuote(form) {
  const serviceIds = getSelectedServiceIdsFromForm(form);
  const quotePanel = form.querySelector("#quotePanel");
  const submitButton = form.querySelector("button[type='submit']");

  if (quotePanel) {
    quotePanel.innerHTML = renderQuoteSummary(calculateServiceQuote(serviceIds));
  }

  if (submitButton) {
    submitButton.disabled = !form.querySelector("#appointmentClient")?.value || serviceIds.length === 0;
  }

  updateConflictAlert(form);
}

function bindServices() {
  const search = moduleCanvas.querySelector("#serviceSearch");
  search?.addEventListener("input", () => {
    serviceSearchTerm = search.value;
    updateServiceRows();
  });

  moduleCanvas.querySelectorAll("[data-service-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeServiceCategory = button.dataset.serviceCategory;
      moduleCanvas.querySelectorAll("[data-service-category]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      updateServiceRows();
    });
  });

  moduleCanvas.querySelector("[data-service-action='new']")?.addEventListener("click", () => {
    serviceEditingId = null;
    setModule("services");
    moduleCanvas.querySelector("#serviceName")?.focus();
  });

  moduleCanvas.querySelector("[data-service-action='cancel']")?.addEventListener("click", () => {
    serviceEditingId = null;
    setModule("services");
  });

  moduleCanvas.querySelectorAll("[data-service-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      serviceEditingId = button.dataset.serviceEdit;
      setModule("services");
      moduleCanvas.querySelector("#serviceForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  moduleCanvas.querySelector("[data-service-action='delete']")?.addEventListener("click", deleteService);
  moduleCanvas.querySelector("#serviceForm")?.addEventListener("submit", submitService);
  updateServiceRows();
}

function updateServiceRows() {
  const query = serviceSearchTerm.trim().toLowerCase();
  let visibleCount = 0;

  moduleCanvas.querySelectorAll("[data-service-row]").forEach((row) => {
    const matchesCategory = activeServiceCategory === "all" || row.dataset.category === activeServiceCategory;
    const matchesSearch = !query || row.dataset.search.includes(query);
    const isVisible = matchesCategory && matchesSearch;
    row.classList.toggle("is-hidden", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  const count = moduleCanvas.querySelector("#serviceVisibleCount");
  if (count) {
    count.textContent = `${visibleCount} shown`;
  }

  moduleCanvas.querySelector("#serviceEmptyState")?.classList.toggle("is-hidden", visibleCount > 0);
}

function submitService(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const existing = services.find((service) => service.id === serviceEditingId);
  const service = normalizeService({
    id: existing?.id || createUniqueServiceId(data.itemNumber.trim(), data.sku.trim(), data.name.trim()),
    itemNumber: data.itemNumber.trim(),
    sku: data.sku.trim(),
    name: data.name.trim(),
    price: data.price,
    duration: data.duration,
  });

  if (!service.name) {
    showServiceAlert("Add a description before saving.");
    return;
  }

  if (existing) {
    services = services.map((item) => (item.id === existing.id ? service : item));
  } else {
    services = [...services, service];
  }

  serviceEditingId = service.id;
  activeServiceCategory = "all";
  serviceSearchTerm = "";
  saveServices();
  setModule("services");
}

function createUniqueServiceId(itemNumber, sku, name) {
  const baseId = createServiceId(itemNumber, sku, name) || `service-${Date.now()}`;
  if (!services.some((service) => service.id === baseId)) {
    return baseId;
  }

  return `${baseId}-${Date.now().toString(36)}`;
}

function deleteService() {
  if (!serviceEditingId) {
    return;
  }

  const scheduledCount = appointments.filter((appointment) => getAppointmentServiceIds(appointment).includes(serviceEditingId)).length;
  if (scheduledCount) {
    showServiceAlert(`This service is used by ${scheduledCount} appointment${scheduledCount === 1 ? "" : "s"}. Change those appointments before deleting it.`);
    return;
  }

  services = services.filter((service) => service.id !== serviceEditingId);
  serviceEditingId = null;
  saveServices();
  setModule("services");
}

function showServiceAlert(message) {
  const alert = moduleCanvas.querySelector("#serviceAlert");
  if (!alert) {
    return;
  }

  alert.hidden = false;
  alert.textContent = message;
}

function bindCustomOrders() {
  const search = moduleCanvas.querySelector("#customOrderSearch");
  search?.addEventListener("input", () => {
    customOrderSearchTerm = search.value;
    setModule("customOrders");
    const nextSearch = moduleCanvas.querySelector("#customOrderSearch");
    nextSearch?.focus();
    nextSearch?.setSelectionRange(nextSearch.value.length, nextSearch.value.length);
  });

  moduleCanvas.querySelector("[data-custom-order-action='clear-search']")?.addEventListener("click", () => {
    customOrderSearchTerm = "";
    setModule("customOrders");
    moduleCanvas.querySelector("#customOrderSearch")?.focus();
  });

  moduleCanvas.querySelector("[data-custom-order-action='new']")?.addEventListener("click", () => {
    customOrderEditingId = null;
    selectedCustomOrderId = null;
    customOrderCreatingNew = true;
    setModule("customOrders");
    moduleCanvas.querySelector("#customOrderItem")?.focus();
  });

  moduleCanvas.querySelector("[data-custom-order-action='cancel']")?.addEventListener("click", () => {
    customOrderEditingId = null;
    customOrderCreatingNew = false;
    setModule("customOrders");
  });

  moduleCanvas.querySelectorAll("[data-custom-order-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      customOrderStatusFilter = button.dataset.customOrderFilter;
      selectedCustomOrderId = null;
      customOrderEditingId = null;
      customOrderCreatingNew = false;
      setModule("customOrders");
    });
  });

  moduleCanvas.querySelectorAll("[data-custom-order-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCustomOrderId = button.dataset.customOrderSelect;
      customOrderEditingId = null;
      customOrderCreatingNew = false;
      setModule("customOrders");
    });
  });

  moduleCanvas.querySelectorAll("[data-custom-order-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      customOrderEditingId = button.dataset.customOrderEdit;
      selectedCustomOrderId = customOrderEditingId;
      customOrderCreatingNew = false;
      setModule("customOrders");
      moduleCanvas.querySelector("#customOrderItem")?.focus();
    });
  });

  moduleCanvas.querySelectorAll("[data-custom-order-advance]").forEach((button) => {
    button.addEventListener("click", () => moveCustomOrderForward(button.dataset.customOrderAdvance));
  });

  moduleCanvas.querySelectorAll("[data-custom-order-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteCustomOrder(button.dataset.customOrderDelete));
  });

  moduleCanvas.querySelectorAll("[data-custom-order-open-job]").forEach((button) => {
    button.addEventListener("click", () => {
      const appointment = appointments.find((item) => item.id === button.dataset.customOrderOpenJob);
      if (!appointment) return;
      selectedDate = appointment.date;
      currentMonth = startOfMonth(dateFromKey(appointment.date));
      calendarZoomMode = "three-week";
      selectedAppointmentId = appointment.id;
      quickFactAppointmentId = appointment.id;
      setModule("schedule");
    });
  });

  moduleCanvas.querySelector("#customOrderForm")?.addEventListener("submit", submitCustomOrder);
  moduleCanvas.querySelectorAll("[data-custom-order-install-form]").forEach((form) => {
    form.addEventListener("submit", submitCustomOrderInstall);
  });
}

function submitCustomOrder(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const existing = customOrders.find((order) => order.id === customOrderEditingId);
  const now = new Date().toISOString();
  const order = normalizeCustomOrder({
    ...existing,
    id: existing?.id || createId(),
    clientId: data.clientId,
    item: data.item,
    finish: data.finish,
    orderRef: data.orderRef,
    productionRef: data.productionRef,
    status: data.status,
    orderedAt: data.orderedAt,
    productionSentAt: data.productionSentAt,
    productionDoneAt: data.productionDoneAt,
    shippedAt: data.shippedAt,
    arrivedAt: data.arrivedAt,
    targetArrivalAt: data.targetArrivalAt,
    ownerKey: data.ownerKey,
    notes: data.notes,
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  });

  if (!order.item) {
    form.querySelector("#customOrderItem")?.focus();
    return;
  }

  if (existing) {
    customOrders = customOrders.map((item) => (item.id === existing.id ? order : item));
  } else {
    customOrders = [order, ...customOrders];
  }

  selectedCustomOrderId = order.id;
  customOrderEditingId = null;
  customOrderCreatingNew = false;
  saveCustomOrders();
  setModule("customOrders");
}

function moveCustomOrderForward(orderId) {
  const today = toDateKey(new Date());

  customOrders = customOrders.map((order) => {
    if (order.id !== orderId) {
      return order;
    }

    const currentIndex = getCustomOrderStageIndex(order.status);
    const nextStatus = customOrderWorkflow[Math.min(customOrderWorkflow.length - 1, currentIndex + 1)] || "install_booked";
    const updates = {};

    if (nextStatus === "production" && !order.productionSentAt) updates.productionSentAt = today;
    if (nextStatus === "production_done" && !order.productionDoneAt) updates.productionDoneAt = today;
    if (nextStatus === "shipped" && !order.shippedAt) updates.shippedAt = today;
    if (nextStatus === "arrived" && !order.arrivedAt) updates.arrivedAt = today;

    return normalizeCustomOrder({
      ...order,
      ...updates,
      status: nextStatus,
      updatedAt: new Date().toISOString(),
    });
  });

  selectedCustomOrderId = orderId;
  saveCustomOrders();
  setModule("customOrders");
}

function deleteCustomOrder(orderId) {
  customOrders = customOrders.filter((order) => order.id !== orderId);
  if (selectedCustomOrderId === orderId) selectedCustomOrderId = null;
  if (customOrderEditingId === orderId) customOrderEditingId = null;
  customOrderCreatingNew = false;
  saveCustomOrders();
  setModule("customOrders");
}

function submitCustomOrderInstall(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const orderId = form.dataset.customOrderInstallForm;
  const data = Object.fromEntries(new FormData(form).entries());
  const order = customOrders.find((item) => item.id === orderId);

  if (!order || !customOrderInstallReadyStatuses.includes(order.status)) {
    return;
  }

  const appointment = upsertCustomOrderInstallAppointment(order, data);
  customOrders = customOrders.map((item) => {
    if (item.id !== orderId) {
      return item;
    }

    return normalizeCustomOrder({
      ...item,
      status: "install_booked",
      installDate: data.installDate,
      installTime: data.installTime,
      installCrewId: data.installCrewId,
      appointmentId: appointment.id,
      updatedAt: new Date().toISOString(),
    });
  });

  selectedCustomOrderId = orderId;
  saveAppointments();
  saveCustomOrders();
  setModule("customOrders");
}

function upsertCustomOrderInstallAppointment(order, data) {
  const client = getClient(order.clientId);
  const address = getPrimaryClientAddress(client);
  const service = services.find((item) => item.category === "Assembly") || services.find((item) => item.name.toUpperCase().startsWith("ASSEMBLE")) || services[0];
  const existing = order.appointmentId ? appointments.find((item) => item.id === order.appointmentId) : null;
  const appointment = normalizeAppointment({
    ...existing,
    id: existing?.id || createId(),
    clientId: order.clientId,
    addressId: address?.id || "",
    addressSnapshot: address?.address || client.address || "",
    serviceId: service?.id || "",
    serviceIds: [service?.id].filter(Boolean),
    crewId: data.installCrewId,
    date: data.installDate,
    time: data.installTime,
    status: "confirmed",
    type: "job",
    notes: `Custom order install: ${order.item}${order.orderRef ? ` (${order.orderRef})` : ""}. ${order.notes || ""}`.trim(),
  });

  if (existing) {
    appointments = appointments.map((item) => (item.id === existing.id ? appointment : item));
  } else {
    appointments = [...appointments, appointment];
  }

  return appointment;
}

function bindTickets() {
  const search = moduleCanvas.querySelector("#ticketSearch");
  search?.addEventListener("input", () => {
    ticketSearchTerm = search.value;
    setModule("tickets");
    const nextSearch = moduleCanvas.querySelector("#ticketSearch");
    nextSearch?.focus();
    nextSearch?.setSelectionRange(nextSearch.value.length, nextSearch.value.length);
  });

  moduleCanvas.querySelector("[data-ticket-action='clear-search']")?.addEventListener("click", () => {
    ticketSearchTerm = "";
    setModule("tickets");
    moduleCanvas.querySelector("#ticketSearch")?.focus();
  });

  moduleCanvas.querySelector("[data-ticket-action='new']")?.addEventListener("click", () => {
    ticketEditingId = null;
    selectedTicketId = null;
    ticketCreatingNew = true;
    ticketClientId = "";
    ticketAppointmentId = "";
    setModule("tickets");
    moduleCanvas.querySelector("#ticketTitle")?.focus();
  });

  moduleCanvas.querySelector("[data-ticket-action='cancel']")?.addEventListener("click", () => {
    ticketEditingId = null;
    ticketCreatingNew = false;
    ticketAppointmentId = "";
    setModule("tickets");
  });

  moduleCanvas.querySelectorAll("[data-ticket-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      ticketStatusFilter = button.dataset.ticketFilter;
      selectedTicketId = null;
      setModule("tickets");
    });
  });

  moduleCanvas.querySelectorAll("[data-ticket-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTicketId = button.dataset.ticketSelect;
      ticketEditingId = null;
      ticketCreatingNew = false;
      ticketAppointmentId = "";
      setModule("tickets");
    });
  });

  moduleCanvas.querySelectorAll("[data-ticket-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      ticketEditingId = button.dataset.ticketEdit;
      selectedTicketId = ticketEditingId;
      ticketCreatingNew = false;
      ticketAppointmentId = "";
      setModule("tickets");
      moduleCanvas.querySelector("#ticketTitle")?.focus();
    });
  });

  moduleCanvas.querySelectorAll("[data-ticket-status-next]").forEach((button) => {
    button.addEventListener("click", () => moveTicketForward(button.dataset.ticketStatusNext));
  });

  moduleCanvas.querySelectorAll("[data-ticket-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      serviceTickets = serviceTickets.filter((ticket) => ticket.id !== button.dataset.ticketDelete);
      if (selectedTicketId === button.dataset.ticketDelete) selectedTicketId = null;
      saveServiceTickets();
      setModule("tickets");
    });
  });

  moduleCanvas.querySelectorAll("[data-ticket-client]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedClientId = button.dataset.ticketClient;
      clientEditingId = null;
      clientCreatingNew = false;
      setModule("clients");
      moduleCanvas.querySelector(".client-warranty-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  moduleCanvas.querySelectorAll("[data-ticket-open-job]").forEach((button) => {
    button.addEventListener("click", () => {
      const appointment = appointments.find((item) => item.id === button.dataset.ticketOpenJob);
      if (!appointment) return;
      selectedDate = appointment.date;
      currentMonth = startOfMonth(dateFromKey(appointment.date));
      selectedAppointmentId = appointment.id;
      quickFactAppointmentId = appointment.id;
      setModule("schedule");
    });
  });

  moduleCanvas.querySelector("#ticketClient")?.addEventListener("change", (event) => {
    ticketAppointmentId = "";
    refreshTicketAppointmentPicker(event.currentTarget.value);
  });

  moduleCanvas.querySelector("#ticketForm")?.addEventListener("submit", submitTicket);
}

function openTicketForAppointment(appointmentId) {
  const appointment = appointments.find((item) => item.id === appointmentId);

  if (!appointment) {
    return;
  }

  const existingTicket = getTicketForAppointment(appointment.id);
  selectedTicketId = existingTicket?.id || null;
  ticketEditingId = null;
  ticketCreatingNew = !existingTicket;
  ticketClientId = appointment.clientId;
  ticketAppointmentId = appointment.id;
  ticketStatusFilter = "all";
  ticketSearchTerm = "";
  quickFactAppointmentId = null;
  setModule("tickets");
  if (!existingTicket) {
    moduleCanvas.querySelector("#ticketTitle")?.focus();
  }
}

function refreshTicketAppointmentPicker(clientId) {
  const select = moduleCanvas.querySelector("#ticketAppointment");
  const clientAppointments = appointments.filter((appointment) => appointment.clientId === clientId);

  if (!select) {
    return;
  }

  select.replaceChildren(new Option("No job linked", ""));
  clientAppointments.forEach((appointment) => {
    select.add(new Option(`${formatLongDate(appointment.date)} · ${formatTime(appointment.time)} · ${getAppointmentTitle(appointment)}`, appointment.id));
  });
}

function moveTicketForward(ticketId) {
  const workflow = ["intake", "waiting_warranty", "warranty_approved", "parts_ordered", "scheduled", "resolved"];
  const now = new Date().toISOString();

  serviceTickets = serviceTickets.map((ticket) => {
    if (ticket.id !== ticketId) {
      return ticket;
    }

    const nextStatus = workflow[Math.min(workflow.length - 1, workflow.indexOf(ticket.status) + 1)] || "resolved";
    return normalizeServiceTicket({
      ...ticket,
      status: nextStatus,
      updatedAt: now,
      nextStep: nextStatus === "resolved" ? "Warranty ticket resolved." : ticket.nextStep,
    });
  });

  selectedTicketId = ticketId;
  saveServiceTickets();
  setModule("tickets");
}

function bindCueRepairs() {
  const search = moduleCanvas.querySelector("#cueRepairSearch");
  search?.addEventListener("input", () => {
    cueRepairSearchTerm = search.value;
    setModule("cueRepairs");
    const nextSearch = moduleCanvas.querySelector("#cueRepairSearch");
    nextSearch?.focus();
    nextSearch?.setSelectionRange(nextSearch.value.length, nextSearch.value.length);
  });

  moduleCanvas.querySelector("[data-cue-action='clear-search']")?.addEventListener("click", () => {
    cueRepairSearchTerm = "";
    setModule("cueRepairs");
    moduleCanvas.querySelector("#cueRepairSearch")?.focus();
  });

  moduleCanvas.querySelector("[data-cue-action='new']")?.addEventListener("click", () => {
    cueRepairEditingId = null;
    selectedCueRepairId = null;
    cueRepairCreatingNew = true;
    setModule("cueRepairs");
    moduleCanvas.querySelector("#cueCustomerName")?.focus();
  });

  moduleCanvas.querySelector("[data-cue-action='cancel']")?.addEventListener("click", () => {
    cueRepairEditingId = null;
    cueRepairCreatingNew = false;
    setModule("cueRepairs");
  });

  moduleCanvas.querySelectorAll("[data-cue-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      cueRepairStatusFilter = button.dataset.cueFilter;
      selectedCueRepairId = null;
      setModule("cueRepairs");
    });
  });

  moduleCanvas.querySelectorAll("[data-cue-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCueRepairId = button.dataset.cueSelect;
      cueRepairEditingId = null;
      cueRepairCreatingNew = false;
      setModule("cueRepairs");
    });
  });

  moduleCanvas.querySelectorAll("[data-cue-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      cueRepairEditingId = button.dataset.cueEdit;
      selectedCueRepairId = cueRepairEditingId;
      cueRepairCreatingNew = false;
      setModule("cueRepairs");
      moduleCanvas.querySelector("#cueCustomerName")?.focus();
    });
  });

  moduleCanvas.querySelectorAll("[data-cue-print]").forEach((button) => {
    button.addEventListener("click", () => printCueRepairTags(button.dataset.cuePrint));
  });

  moduleCanvas.querySelectorAll("[data-cue-advance]").forEach((button) => {
    button.addEventListener("click", () => moveCueRepairForward(button.dataset.cueAdvance));
  });

  moduleCanvas.querySelectorAll("[data-cue-complete]").forEach((button) => {
    button.addEventListener("click", () => completeCueRepair(button.dataset.cueComplete));
  });

  moduleCanvas.querySelectorAll("[data-cue-pickup]").forEach((button) => {
    button.addEventListener("click", () => markCueRepairPickedUp(button.dataset.cuePickup));
  });

  moduleCanvas.querySelectorAll("[data-cue-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      cueRepairs = cueRepairs.filter((repair) => repair.id !== button.dataset.cueDelete);
      if (selectedCueRepairId === button.dataset.cueDelete) selectedCueRepairId = null;
      saveCueRepairs();
      setModule("cueRepairs");
    });
  });

  moduleCanvas.querySelector("#cueRepairForm")?.addEventListener("submit", submitCueRepair);
}

function submitCueRepair(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const existingRepair = cueRepairs.find((repair) => repair.id === cueRepairEditingId);
  const now = new Date().toISOString();
  const status = cueRepairStatusLabels[data.status] ? data.status : "dropped_off";
  const repair = normalizeCueRepair({
    ...(existingRepair || {}),
    customerName: data.customerName,
    phone: data.phone,
    email: data.email,
    cueDescription: data.cueDescription,
    repairNeeded: data.repairNeeded,
    notes: data.notes,
    status,
    droppedOffAt: data.droppedOffAt || toDateKey(new Date()),
    completedAt: existingRepair?.completedAt || (["waiting_pickup", "picked_up"].includes(status) ? toDateKey(new Date()) : ""),
    pickedUpAt: existingRepair?.pickedUpAt || (status === "picked_up" ? toDateKey(new Date()) : ""),
    quotedPrice: data.quotedPrice,
    ownerKey: data.ownerKey,
    repairNumber: existingRepair?.repairNumber || createCueRepairNumber(),
    createdAt: existingRepair?.createdAt || now,
    updatedAt: now,
  });

  cueRepairs = existingRepair
    ? cueRepairs.map((item) => (item.id === existingRepair.id ? repair : item))
    : [repair, ...cueRepairs];
  selectedCueRepairId = repair.id;
  cueRepairEditingId = null;
  cueRepairCreatingNew = false;
  saveCueRepairs();

  if (!existingRepair) {
    printCueRepairTags(repair.id);
  }

  setModule("cueRepairs");
}

function moveCueRepairForward(repairId) {
  const now = new Date().toISOString();
  cueRepairs = cueRepairs.map((repair) => {
    if (repair.id !== repairId) {
      return repair;
    }

    const nextStatus = cueRepairWorkflow[Math.min(cueRepairWorkflow.length - 1, cueRepairWorkflow.indexOf(repair.status) + 1)] || "picked_up";
    return normalizeCueRepair({
      ...repair,
      status: nextStatus,
      completedAt: nextStatus === "waiting_pickup" ? repair.completedAt || toDateKey(new Date()) : repair.completedAt,
      pickedUpAt: nextStatus === "picked_up" ? repair.pickedUpAt || toDateKey(new Date()) : repair.pickedUpAt,
      updatedAt: now,
    });
  });
  selectedCueRepairId = repairId;
  saveCueRepairs();
  setModule("cueRepairs");
}

function completeCueRepair(repairId) {
  const now = new Date().toISOString();
  const today = toDateKey(new Date());
  let completedRepair = null;

  cueRepairs = cueRepairs.map((repair) => {
    if (repair.id !== repairId) {
      return repair;
    }

    completedRepair = normalizeCueRepair({
      ...repair,
      status: "waiting_pickup",
      completedAt: repair.completedAt || today,
      emailNotifiedAt: repair.email ? now : repair.emailNotifiedAt,
      updatedAt: now,
    });
    return completedRepair;
  });

  selectedCueRepairId = repairId;
  saveCueRepairs();
  if (completedRepair?.email) {
    openCueRepairEmail(completedRepair);
  }
  setModule("cueRepairs");
}

function markCueRepairPickedUp(repairId) {
  const now = new Date().toISOString();
  cueRepairs = cueRepairs.map((repair) => repair.id === repairId
    ? normalizeCueRepair({ ...repair, status: "picked_up", pickedUpAt: repair.pickedUpAt || toDateKey(new Date()), updatedAt: now })
    : repair);
  selectedCueRepairId = repairId;
  saveCueRepairs();
  setModule("cueRepairs");
}

function openCueRepairEmail(repair) {
  const subject = `Your cue repair is ready - ${repair.repairNumber}`;
  const body = [
    `Hi ${repair.customerName},`,
    "",
    "Good news, your cue repair is complete and ready for pickup at Home Billiards.",
    "",
    `Repair #: ${repair.repairNumber}`,
    repair.cueDescription ? `Cue: ${repair.cueDescription}` : "",
    repair.repairNeeded ? `Work: ${repair.repairNeeded}` : "",
    repair.quotedPrice !== null ? `Amount: ${formatPrice(repair.quotedPrice)}` : "",
    "",
    "Thank you,",
    "Home Billiards",
  ].filter((line) => line !== "").join("\n");

  window.location.href = `mailto:${encodeURIComponent(repair.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function printCueRepairTags(repairId) {
  const repair = cueRepairs.find((item) => item.id === repairId);
  if (!repair) {
    return;
  }

  const tagWindow = window.open("", "cueRepairTags", "width=720,height=520");
  if (!tagWindow) {
    return;
  }

  const price = repair.quotedPrice === null ? "Not quoted" : formatPrice(repair.quotedPrice);
  const safeTag = (label) => `
    <section class="tag">
      <p class="eyebrow">${label}</p>
      <h1>${escapeHtml(repair.repairNumber)}</h1>
      <dl>
        <div><dt>Name</dt><dd>${escapeHtml(repair.customerName)}</dd></div>
        <div><dt>Phone</dt><dd>${escapeHtml(repair.phone || "Not recorded")}</dd></div>
        <div><dt>Email</dt><dd>${escapeHtml(repair.email || "Not recorded")}</dd></div>
        <div><dt>Cue</dt><dd>${escapeHtml(repair.cueDescription || "Cue repair")}</dd></div>
        <div><dt>Repair</dt><dd>${escapeHtml(repair.repairNeeded || "Repair details needed")}</dd></div>
        <div><dt>Drop-off</dt><dd>${formatNoteDate(repair.droppedOffAt)}</dd></div>
        <div><dt>Price</dt><dd>${price}</dd></div>
      </dl>
      <p class="fine-print">${label === "Customer receipt" ? "Bring this tag when picking up your cue." : "Attach this copy to the cue or storage hook."}</p>
    </section>
  `;

  tagWindow.document.write(`
    <!doctype html>
    <html>
      <head>
        <title>Cue repair tags ${escapeHtml(repair.repairNumber)}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; padding: 18px; color: #173044; font-family: Arial, sans-serif; }
          .sheet { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
          .tag { min-height: 420px; border: 2px solid #173044; border-radius: 8px; padding: 18px; break-inside: avoid; }
          .eyebrow { margin: 0 0 10px; font-size: 12px; font-weight: 800; text-transform: uppercase; }
          h1 { margin: 0 0 16px; font-size: 34px; letter-spacing: 0; }
          dl { display: grid; gap: 10px; margin: 0; }
          dt { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #647588; }
          dd { margin: 2px 0 0; font-size: 15px; font-weight: 700; overflow-wrap: anywhere; }
          .fine-print { margin: 18px 0 0; padding-top: 12px; border-top: 1px solid #c8d3dc; font-size: 13px; font-weight: 700; }
          @media print { body { padding: 0.25in; } .tag { min-height: 3.8in; } }
        </style>
      </head>
      <body>
        <main class="sheet">
          ${safeTag("Customer receipt")}
          ${safeTag("Shop cue tag")}
        </main>
        <script>window.addEventListener("load", () => { window.print(); });<\/script>
      </body>
    </html>
  `);
  tagWindow.document.close();
}

function bindClients() {
  const search = moduleCanvas.querySelector("#clientSearch");
  search?.addEventListener("input", () => {
    clientSearchTerm = search.value;
    setModule("clients");
    const nextSearch = moduleCanvas.querySelector("#clientSearch");
    nextSearch?.focus();
    nextSearch?.setSelectionRange(nextSearch.value.length, nextSearch.value.length);
  });

  moduleCanvas.querySelector("[data-client-action='new']")?.addEventListener("click", () => {
    clientEditingId = null;
    selectedClientId = null;
    clientCreatingNew = true;
    setModule("clients");
    moduleCanvas.querySelector("#clientName")?.focus();
  });

  moduleCanvas.querySelector("[data-client-action='clear-search']")?.addEventListener("click", () => {
    clientSearchTerm = "";
    setModule("clients");
    moduleCanvas.querySelector("#clientSearch")?.focus();
  });

  moduleCanvas.querySelector("[data-client-action='toggle-outstanding']")?.addEventListener("click", () => {
    clientOutstandingOnly = !clientOutstandingOnly;
    selectedClientId = null;
    clientEditingId = null;
    clientCreatingNew = false;
    setModule("clients");
  });

  moduleCanvas.querySelector("[data-client-action='cancel']")?.addEventListener("click", () => {
    clientEditingId = null;
    clientCreatingNew = false;
    setModule("clients");
  });

  moduleCanvas.querySelectorAll("[data-client-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedClientId = button.dataset.clientProfile;
      clientEditingId = null;
      clientCreatingNew = false;
      setModule("clients");
      moduleCanvas.querySelector(".client-detail-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  moduleCanvas.querySelectorAll("[data-client-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      clientEditingId = button.dataset.clientEdit;
      selectedClientId = clientEditingId;
      clientCreatingNew = false;
      setModule("clients");
      moduleCanvas.querySelector(".client-detail-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      moduleCanvas.querySelector("#clientName")?.focus();
    });
  });

  moduleCanvas.querySelectorAll("[data-client-schedule]").forEach((button) => {
    button.addEventListener("click", () => {
      bookingClientId = button.dataset.clientSchedule;
      selectedClientId = bookingClientId;
      editingId = null;
      setModule("schedule");
      window.setTimeout(() => {
        moduleCanvas.querySelector("#bookingForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    });
  });

  moduleCanvas.querySelectorAll("[data-client-open-ticket]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTicketId = button.dataset.clientOpenTicket;
      ticketEditingId = null;
      ticketCreatingNew = false;
      ticketAppointmentId = "";
      ticketStatusFilter = "all";
      setModule("tickets");
    });
  });

  moduleCanvas.querySelectorAll("[data-client-ticket-new]").forEach((button) => {
    button.addEventListener("click", () => {
      ticketClientId = button.dataset.clientTicketNew;
      selectedTicketId = null;
      ticketEditingId = null;
      ticketCreatingNew = true;
      ticketAppointmentId = "";
      ticketStatusFilter = "all";
      setModule("tickets");
      moduleCanvas.querySelector("#ticketTitle")?.focus();
    });
  });

  moduleCanvas.querySelectorAll("[data-client-open-job]").forEach((button) => {
    button.addEventListener("click", () => {
      const appointment = appointments.find((item) => item.id === button.dataset.clientOpenJob);

      if (!appointment) {
        return;
      }

      selectedDate = appointment.date;
      currentMonth = startOfMonth(dateFromKey(appointment.date));
      calendarZoomMode = "three-week";
      selectedAppointmentId = appointment.id;
      quickFactAppointmentId = appointment.id;
      editingId = null;
      setModule("schedule");
    });
  });

  moduleCanvas.querySelectorAll("[data-client-toggle-complete]").forEach((button) => {
    button.addEventListener("click", () => {
      const appointmentId = button.dataset.clientToggleComplete;
      appointments = appointments.map((appointment) => {
        if (appointment.id !== appointmentId) {
          return appointment;
        }

        if (appointment.status === "complete" || appointment.status === "payment_due") {
          return reopenAppointment(appointment);
        }

        return moveAppointmentToPaymentDue(appointment);
      });
      saveAppointments();
      setModule("clients");
    });
  });

  moduleCanvas.querySelectorAll("[data-payment-form]").forEach((form) => {
    form.addEventListener("submit", submitPayment);
  });

  moduleCanvas.querySelector("[data-client-action='delete']")?.addEventListener("click", () => {
    const alert = moduleCanvas.querySelector("#clientAlert");
    const bookedCount = appointments.filter((appointment) => appointment.clientId === clientEditingId).length;
    const ticketCount = serviceTickets.filter((ticket) => ticket.clientId === clientEditingId).length;
    const customOrderCount = customOrders.filter((order) => order.clientId === clientEditingId).length;

    if (bookedCount) {
      alert.hidden = false;
      alert.textContent = `This client has ${bookedCount} service call${bookedCount === 1 ? "" : "s"}. Delete or reassign those appointments first.`;
      return;
    }

    if (ticketCount) {
      alert.hidden = false;
      alert.textContent = `This client has ${ticketCount} service ticket${ticketCount === 1 ? "" : "s"}. Close or delete those tickets first.`;
      return;
    }

    if (customOrderCount) {
      alert.hidden = false;
      alert.textContent = `This client has ${customOrderCount} custom order${customOrderCount === 1 ? "" : "s"}. Close or delete those orders first.`;
      return;
    }

    clients = clients.filter((client) => client.id !== clientEditingId);
    if (selectedClientId === clientEditingId) {
      selectedClientId = null;
    }
    clientEditingId = null;
    clientCreatingNew = false;
    saveClients();
    setModule("clients");
  });

  moduleCanvas.querySelector("#clientForm")?.addEventListener("submit", submitClient);
}

function bindProjects() {
  moduleCanvas.querySelectorAll("[data-project-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectScope = button.dataset.projectScope;
      projectSuggestionModalOpen = false;
      if (activeProjectScope === "company") {
        activeProjectDepth = "glance";
      }
      setModule("projects");
    });
  });

  moduleCanvas.querySelectorAll("[data-project-view]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectView = button.dataset.projectView;
      projectSuggestionModalOpen = false;
      setModule("projects");
    });
  });

  moduleCanvas.querySelectorAll("[data-project-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      projectStatusFilter = button.dataset.projectFilter;
      selectedProjectId = null;
      projectSuggestionModalOpen = false;
      setModule("projects");
    });
  });

  moduleCanvas.querySelectorAll("[data-project-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedProjectId = button.dataset.projectSelect;
      activeProjectDepth = "glance";
      activeProjectScope = "my";
      projectSuggestionModalOpen = false;
      setModule("projects");
      moduleCanvas.querySelector(".project-side-panel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  moduleCanvas.querySelectorAll("[data-project-depth]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectDepth = button.dataset.projectDepth;
      setModule("projects");
      if (activeProjectDepth === "suggest") {
        moduleCanvas.querySelector("#projectTitle")?.focus();
      } else {
        moduleCanvas.querySelector(".project-side-panel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  });

  moduleCanvas.querySelector("[data-project-action='focus-suggestion']")?.addEventListener("click", () => {
    projectSuggestionModalOpen = true;
    setModule("projects");
    moduleCanvas.querySelector("#projectTitle")?.focus();
  });

  moduleCanvas.querySelectorAll("[data-project-action='close-suggestion']").forEach((button) => {
    button.addEventListener("click", () => {
      projectSuggestionModalOpen = false;
      setModule("projects");
    });
  });

  moduleCanvas.querySelector("[data-project-suggestion-backdrop]")?.addEventListener("click", (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    projectSuggestionModalOpen = false;
    setModule("projects");
  });

  moduleCanvas.querySelector("[data-project-action='delete']")?.addEventListener("click", () => {
    if (!selectedProjectId) {
      return;
    }

    projects = projects.filter((project) => project.id !== selectedProjectId);
    selectedProjectId = null;
    activeProjectDepth = "glance";
    projectSuggestionModalOpen = false;
    saveProjects();
    setModule("projects");
  });

  const progress = moduleCanvas.querySelector("#projectProgress");
  const progressValue = moduleCanvas.querySelector("#projectProgressValue");
  progress?.addEventListener("input", () => {
    if (progressValue) {
      progressValue.textContent = `${progress.value}%`;
    }
  });

  const myProgress = moduleCanvas.querySelector("#myContributorProgress");
  const myProgressValue = moduleCanvas.querySelector("#myContributorProgressValue");
  myProgress?.addEventListener("input", () => {
    if (myProgressValue) {
      myProgressValue.textContent = `${myProgress.value}%`;
    }
  });

  moduleCanvas.querySelector("#projectUpdateForm")?.addEventListener("submit", submitProjectUpdate);
  moduleCanvas.querySelector("#projectSuggestionForm")?.addEventListener("submit", submitProjectSuggestion);
  bindProjectDragAndDrop();
}

function bindProjectDragAndDrop() {
  moduleCanvas.querySelectorAll("[data-project-drag]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer?.setData("text/plain", card.dataset.projectDrag);
    });
  });

  moduleCanvas.querySelectorAll("[data-project-drop-status]").forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("is-drag-over");
    });

    column.addEventListener("dragleave", () => {
      column.classList.remove("is-drag-over");
    });

    column.addEventListener("drop", (event) => {
      event.preventDefault();
      column.classList.remove("is-drag-over");
      const projectId = event.dataTransfer?.getData("text/plain");
      moveProjectToStatus(projectId, column.dataset.projectDropStatus);
    });
  });
}

function bindDevelopment() {
  if (!canCurrentUserUseDevelopment()) {
    return;
  }

  moduleCanvas.querySelector("[data-dev-refresh]")?.addEventListener("click", () => setModule("development"));

  moduleCanvas.querySelectorAll("[data-dev-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      betaFeedbackFilter = button.dataset.devFilter;
      selectedBetaFeedbackId = null;
      setModule("development");
    });
  });

  moduleCanvas.querySelectorAll("[data-dev-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedBetaFeedbackId = button.dataset.devSelect;
      setModule("development");
    });
  });

  moduleCanvas.querySelectorAll("[data-dev-status]").forEach((button) => {
    button.addEventListener("click", () => updateSelectedBetaFeedbackStatus(button.dataset.devStatus));
  });

  moduleCanvas.querySelectorAll("[data-dev-feature]").forEach((button) => {
    button.addEventListener("click", () => respondToBetaFeature(button.dataset.devFeature));
  });

  moduleCanvas.querySelector("[data-dev-open-ticket]")?.addEventListener("click", (event) => {
    selectedTicketId = event.currentTarget.dataset.devOpenTicket;
    ticketEditingId = null;
    ticketCreatingNew = false;
    ticketStatusFilter = "all";
    setModule("tickets");
  });

  moduleCanvas.querySelector("[data-dev-open-project]")?.addEventListener("click", (event) => {
    selectedProjectId = event.currentTarget.dataset.devOpenProject;
    activeProjectScope = "my";
    activeProjectDepth = "glance";
    projectStatusFilter = "all";
    setModule("projects");
  });

  moduleCanvas.querySelector("#developerNoteForm")?.addEventListener("submit", submitDeveloperNote);
}

function moveProjectToStatus(projectId, status) {
  const project = getProject(projectId);

  if (!project || !projectStatusLabels[status]) {
    return;
  }

  const now = new Date().toISOString();
  projects = projects.map((item) => item.id === project.id
    ? normalizeProject({
        ...project,
        status,
        suggestionState: status === "parked" ? "rejected" : status === "suggested" ? project.suggestionState : "accepted",
        updatedAt: now,
        columnOrder: Date.now(),
      })
    : item
  );

  selectedProjectId = project.id;
  saveProjects();
  setModule("projects");
}

function createProjectChatMessage({ project, recipientKey, body, type = "project-update", createdAt = new Date().toISOString() }) {
  if (!project || !users[recipientKey] || recipientKey === currentUserKey || !String(body || "").trim()) {
    return null;
  }

  return {
    id: createId(),
    type,
    projectId: project.id,
    threadId: getDirectThreadId(currentUserKey, recipientKey),
    senderKey: currentUserKey,
    recipientKey,
    body: String(body).trim(),
    createdAt,
    deliveredAt: createdAt,
    readBy: [],
  };
}

function getProjectNotificationRecipients(project) {
  return [...new Set(project.contributors
    .map((contributor) => contributor.userKey)
    .filter((key) => key !== currentUserKey && users[key]))];
}

function submitProjectUpdate(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const project = projects.find((item) => item.id === selectedProjectId);

  if (!project) {
    return;
  }

  const submitIntent = event.submitter?.value || "update";
  const body = String(data.body || "").trim();
  const quickMessage = String(data.quickMessage || "").trim();
  const quickMessageRecipient = String(data.quickMessageRecipient || "").trim();
  const handoffTask = String(data.handoffTask || "").trim();
  const handoffRecipient = String(data.handoffRecipient || "").trim();
  const now = new Date().toISOString();
  const formData = new FormData(form);
  const checklistDoneIds = new Set(formData.getAll("checklistDone"));
  const contributorIds = formData.getAll("contributorId");
  const contributorUsers = formData.getAll("contributorUser");
  const contributorRoles = formData.getAll("contributorRole");
  const contributorStatuses = formData.getAll("contributorStatus");
  const contributorProgress = formData.getAll("contributorProgress");
  const checklist = project.checklist.map((item) => ({
    ...item,
    done: checklistDoneIds.has(item.id),
  }));
  const newChecklistItem = String(data.newChecklistItem || "").trim();

  if (newChecklistItem) {
    checklist.push({
      id: createId(),
      text: newChecklistItem,
      done: false,
    });
  }

  if (handoffTask && users[handoffRecipient]) {
    checklist.push({
      id: createId(),
      text: `${getUser(handoffRecipient).name}: ${handoffTask}`,
      done: false,
    });
  }

  const labels = formData.getAll("labels");
  const contributors = contributorIds
    .map((id, index) => ({
      id,
      userKey: contributorUsers[index],
      role: contributorRoles[index],
      status: contributorStatuses[index],
      progress: contributorProgress[index],
    }))
    .filter((contributor) => contributor.userKey);
  const newContributorUser = String(data.newContributorUser || "").trim();

  if (newContributorUser) {
    contributors.push({
      id: createId(),
      userKey: newContributorUser,
      role: data.newContributorRole || "Project support",
      status: "not_started",
      progress: 0,
    });
  }

  const updates = body
    ? [
        ...project.updates,
        {
          id: createId(),
          authorKey: currentUserKey,
          body,
          createdAt: now,
        },
      ]
    : project.updates;

  projects = projects.map((item) => item.id === project.id
    ? normalizeProject({
        ...project,
        ownerKey: data.ownerKey,
        status: data.status,
        progress: data.progress,
        priority: data.priority,
        dueDate: data.dueDate,
        labels,
        checklist,
        contributors,
        nextStep: data.nextStep,
        updatedAt: now,
        updates,
      })
    : item
  );

  const chatDrafts = [];
  if (quickMessage) {
    chatDrafts.push(createProjectChatMessage({
      project,
      recipientKey: quickMessageRecipient,
      body: `Quick note on ${project.title}: ${quickMessage}`,
      type: "project-message",
      createdAt: now,
    }));
  }

  if (submitIntent !== "message") {
    const updateNotice = body || `${getUser(currentUserKey).name} updated ${project.title}.`;
    getProjectNotificationRecipients(project).forEach((recipientKey) => {
      chatDrafts.push(createProjectChatMessage({
        project,
        recipientKey,
        body: body ? `Project update on ${project.title}: ${body}` : updateNotice,
        type: "project-update",
        createdAt: now,
      }));
    });
  }

  if (handoffTask && users[handoffRecipient]) {
    chatDrafts.push(createProjectChatMessage({
      project,
      recipientKey: handoffRecipient,
      body: `Task from ${project.title}: ${handoffTask}`,
      type: "project-task",
      createdAt: now,
    }));
  }

  const newChatMessages = chatDrafts.filter(Boolean);
  if (newChatMessages.length) {
    chatMessages = [...chatMessages, ...newChatMessages];
    saveChatMessages();
  }

  saveProjects();
  setModule("projects");
}

function submitProjectSuggestion(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const title = data.title.trim();

  if (!title) {
    form.querySelector("#projectTitle")?.focus();
    return;
  }

  const now = new Date().toISOString();
  const formData = new FormData(form);
  const checklistItem = String(data.checklistItem || "").trim();
  const project = normalizeProject({
    id: createId(),
    title,
    ownerKey: data.ownerKey,
    status: "suggested",
    progress: 0,
    summary: data.summary,
    nextStep: data.nextStep || "Decide if this belongs on the board.",
    suggestedByKey: currentUserKey,
    suggestionState: "pending",
    labels: formData.getAll("labels"),
    checklist: checklistItem ? [{ id: createId(), text: checklistItem, done: false }] : [],
    createdAt: now,
    updatedAt: now,
    updates: [
      {
        id: createId(),
        authorKey: currentUserKey,
        body: data.summary?.trim() || "Added this idea to the shelf.",
        createdAt: now,
      },
    ],
  });

  projects = [project, ...projects];
  createProjectSuggestionNotification(project);
  selectedProjectId = project.id;
  activeProjectDepth = "glance";
  projectSuggestionModalOpen = false;
  projectStatusFilter = "all";
  saveProjects();
  saveChatMessages();
  setModule("projects");
}

function respondToProjectSuggestion(projectId, response) {
  const project = getProject(projectId);
  const request = getProjectSuggestionMessages(projectId).find((message) => (message.recipientKey || project?.ownerKey) === currentUserKey);

  if (!project || !request || getProjectSuggestionState(project) !== "pending") {
    return;
  }

  const accepted = response === "accept";
  const now = new Date().toISOString();
  const body = accepted
    ? "Accepted this suggestion and moved it into the queue."
    : "Passed on this suggestion for now.";

  projects = projects.map((item) => item.id === project.id
    ? normalizeProject({
        ...project,
        ownerKey: currentUserKey,
        status: accepted ? "queued" : "parked",
        suggestionState: accepted ? "accepted" : "rejected",
        respondedAt: now,
        updatedAt: now,
        updates: [
          ...project.updates,
          {
            id: createId(),
            authorKey: currentUserKey,
            body,
            createdAt: now,
          },
        ],
      })
    : item
  );

  chatMessages = chatMessages.map((message) => message.type === "project-suggestion" && message.projectId === project.id
    ? {
        ...message,
        body: `${accepted ? "Accepted" : "Rejected"} project suggestion: ${project.title}`,
        response: accepted ? "accepted" : "rejected",
        respondedAt: now,
      }
    : message
  );

  saveProjects();
  saveChatMessages();
  setModule("chat");
}

function openProjectFromChat(projectId) {
  const project = getProject(projectId);

  if (!project) {
    return;
  }

  selectedProjectId = project.id;
  projectStatusFilter = "all";
  activeProjectDepth = "glance";
  setModule("projects");
}

function createProjectSuggestionNotification(project) {
  if (!project.ownerKey || project.ownerKey === currentUserKey) {
    return;
  }

  chatMessages = [
    ...chatMessages,
    {
      id: createId(),
      type: "project-suggestion",
      projectId: project.id,
      threadId: getDirectThreadId(currentUserKey, project.ownerKey),
      senderKey: currentUserKey,
      recipientKey: project.ownerKey,
      body: `Suggested project: ${project.title}`,
      createdAt: new Date().toISOString(),
    },
  ];
}

function setBetaFeedbackType(type) {
  if (!betaFeedbackTypeLabels[type]) {
    return;
  }

  if (betaFeedbackType) {
    betaFeedbackType.value = type;
  }

  document.querySelectorAll("[data-beta-type]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.betaType === type);
  });

  const detailField = document.querySelector("#betaFeedbackDetails");
  if (detailField) {
    detailField.placeholder = type === "bug" ? "What broke? What screen were you on?" : "What would help?";
  }
}

function toggleBetaFeedbackPanel(type = "", forceOpen) {
  if (!betaFeedbackPanel) {
    return;
  }

  if (type) {
    setBetaFeedbackType(type);
  }

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : betaFeedbackPanel.classList.contains("is-hidden");
  betaFeedbackPanel.classList.toggle("is-hidden", !shouldOpen);
  if (shouldOpen) {
    betaFeedbackAlert.hidden = true;
    window.setTimeout(() => betaFeedbackPanel.querySelector("#betaFeedbackDetails")?.focus(), 50);
  }
}

function resetBetaFeedbackPanel() {
  betaFeedbackPanel?.reset();
  betaFeedbackPanel?.classList.remove("is-submitted");
  betaScreenshotDataUrl = "";
  betaScreenshotPreview?.classList.add("is-hidden");
  betaScreenshotPreview?.removeAttribute("src");
  if (betaScreenshotStatus) {
    betaScreenshotStatus.textContent = "No screenshot yet";
  }
  if (betaFeedbackAlert) {
    betaFeedbackAlert.hidden = true;
  }
  setBetaFeedbackType("bug");
  toggleBetaFeedbackPanel("", false);
}

function showBetaFeedbackSuccess() {
  if (!betaFeedbackPanel) {
    return;
  }

  betaFeedbackPanel.classList.add("is-submitted");
}

async function captureBetaScreenshot() {
  if (!navigator.mediaDevices?.getDisplayMedia) {
    betaFeedbackAlert.hidden = false;
    betaFeedbackAlert.textContent = "Screenshot capture is not available in this browser.";
    return;
  }

  let stream = null;
  try {
    betaScreenshotStatus.textContent = "Choose this tab or window";
    stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
    const video = document.createElement("video");
    video.srcObject = stream;
    video.muted = true;
    await video.play();

    const track = stream.getVideoTracks()[0];
    const settings = track.getSettings();
    const sourceWidth = settings.width || video.videoWidth || 1280;
    const sourceHeight = settings.height || video.videoHeight || 720;
    const maxWidth = 1100;
    const scale = Math.min(1, maxWidth / sourceWidth);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(sourceWidth * scale));
    canvas.height = Math.max(1, Math.round(sourceHeight * scale));
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    betaScreenshotDataUrl = canvas.toDataURL("image/jpeg", 0.72);

    if (betaScreenshotPreview) {
      betaScreenshotPreview.src = betaScreenshotDataUrl;
      betaScreenshotPreview.classList.remove("is-hidden");
    }
    betaScreenshotStatus.textContent = "Screenshot attached";
  } catch {
    betaScreenshotStatus.textContent = "Screenshot not attached";
  } finally {
    stream?.getTracks().forEach((track) => track.stop());
  }
}

function submitBetaFeedback(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const type = betaFeedbackTypeLabels[data.type] ? data.type : "bug";
  const details = String(data.details || "").trim();

  if (!details) {
    form.querySelector("#betaFeedbackDetails")?.focus();
    return;
  }

  const now = new Date().toISOString();
  const title = details.length > 72 ? `${details.slice(0, 69)}...` : details;
  const feedback = normalizeBetaFeedback({
    id: createId(),
    type,
    status: type === "bug" ? "ticketed" : "open",
    title,
    details,
    reporterKey: currentUserKey,
    screenshotDataUrl: betaScreenshotDataUrl,
    assignedTo: "",
    createdAt: now,
    updatedAt: now,
    updates: [
      {
        id: createId(),
        authorKey: currentUserKey,
        body: type === "bug" ? "Submitted a beta bug report." : "Submitted a beta feature request.",
        createdAt: now,
      },
    ],
  });

  if (type === "bug") {
    const ticket = createBugTicketFromFeedback(feedback);
    feedback.ticketId = ticket.id;
    serviceTickets = [ticket, ...serviceTickets];
    saveServiceTickets();
  }

  betaFeedback = [feedback, ...betaFeedback];
  selectedBetaFeedbackId = feedback.id;
  saveBetaFeedback();
  showBetaFeedbackSuccess();

  window.setTimeout(() => {
    resetBetaFeedbackPanel();

    if (activeModule === "development" && canCurrentUserUseDevelopment()) {
      setModule("development");
    }
  }, 850);
}

function createBugTicketFromFeedback(feedback) {
  const reporter = getUser(feedback.reporterKey);
  const details = [
    `Beta bug submitted by ${reporter.name}.`,
    feedback.details,
    feedback.screenshotDataUrl ? "Screenshot is attached in the Development tab." : "No screenshot attached.",
  ].filter(Boolean).join("\n\n");

  return normalizeServiceTicket({
    id: createId(),
    title: `Beta bug: ${feedback.title}`,
    issue: details,
    status: "intake",
    priority: "high",
    product: "Daily App beta",
    submittedAt: toDateKey(new Date(feedback.createdAt)),
    nextStep: "Shawn and Diego review this in the Development tab.",
    ownerKey: "shawn",
    portalVisible: false,
    sourceBetaFeedbackId: feedback.id,
    createdAt: feedback.createdAt,
    updatedAt: feedback.createdAt,
  });
}

function updateBetaFeedback(feedbackId, updater) {
  const now = new Date().toISOString();
  betaFeedback = betaFeedback.map((item) => {
    if (item.id !== feedbackId) {
      return item;
    }

    return normalizeBetaFeedback({
      ...item,
      ...updater(item, now),
      updatedAt: now,
    });
  });
  saveBetaFeedback();
}

function appendBetaFeedbackUpdate(feedbackId, body, status = "") {
  const cleanBody = String(body || "").trim();
  if (!cleanBody) {
    return;
  }

  updateBetaFeedback(feedbackId, (item, now) => ({
    status: status || item.status,
    updates: [
      ...item.updates,
      {
        id: createId(),
        authorKey: currentUserKey,
        body: cleanBody,
        createdAt: now,
      },
    ],
  }));
}

function updateSelectedBetaFeedbackStatus(status) {
  const item = betaFeedback.find((entry) => entry.id === selectedBetaFeedbackId);
  if (!item || !betaFeedbackStatusLabels[status]) {
    return;
  }

  const statusNote = `${getUser(currentUserKey).name} moved this to ${betaFeedbackStatusLabels[status]}.`;
  appendBetaFeedbackUpdate(item.id, statusNote, status);

  if (item.ticketId) {
    const nextTicketStatus = status === "resolved" ? "resolved" : status === "in_progress" ? "scheduled" : "";
    if (nextTicketStatus) {
      serviceTickets = serviceTickets.map((ticket) => ticket.id === item.ticketId
        ? normalizeServiceTicket({
            ...ticket,
            status: nextTicketStatus,
            ownerKey: currentUserKey,
            nextStep: status === "resolved" ? "Beta bug marked resolved by development." : "Development is actively working this beta bug.",
            updatedAt: new Date().toISOString(),
          })
        : ticket
      );
      saveServiceTickets();
    }
  }

  setModule("development");
}

function submitDeveloperNote(event) {
  event.preventDefault();
  const item = betaFeedback.find((entry) => entry.id === selectedBetaFeedbackId);
  const note = new FormData(event.currentTarget).get("note");

  if (!item || !String(note || "").trim()) {
    event.currentTarget.querySelector("#developerNote")?.focus();
    return;
  }

  appendBetaFeedbackUpdate(item.id, note);
  setModule("development");
}

function respondToBetaFeature(action) {
  const item = betaFeedback.find((entry) => entry.id === selectedBetaFeedbackId);
  if (!item || item.type !== "feature" || !["accept", "reject"].includes(action)) {
    return;
  }

  const accepted = action === "accept";
  const now = new Date().toISOString();
  let projectId = item.projectId;

  if (accepted && !projectId) {
    const project = normalizeProject({
      id: createId(),
      title: item.title,
      ownerKey: currentUserKey,
      suggestedByKey: item.reporterKey,
      status: "queued",
      progress: 0,
      summary: item.details,
      nextStep: "Shape this accepted beta request into a small build plan.",
      labels: ["idea", "ops"],
      checklist: [
        { id: createId(), text: "Confirm expected behavior", done: false },
        { id: createId(), text: "Build the smallest useful version", done: false },
        { id: createId(), text: "Test with Shawn and Diego", done: false },
      ],
      contributors: devUserKeys.map((key) => ({
        id: createId(),
        userKey: key,
        role: key === currentUserKey ? "Project lead" : "Development partner",
        status: "active",
        progress: 0,
      })),
      createdAt: now,
      updatedAt: now,
      updates: [
        {
          id: createId(),
          authorKey: currentUserKey,
          body: `Accepted beta feature request from ${getUser(item.reporterKey).name}.`,
          createdAt: now,
        },
      ],
    });
    projects = [project, ...projects];
    projectId = project.id;
    saveProjects();
  }

  betaFeedback = betaFeedback.map((entry) => entry.id === item.id
    ? normalizeBetaFeedback({
        ...entry,
        status: accepted ? "accepted" : "rejected",
        projectId,
        assignedTo: currentUserKey,
        updatedAt: now,
        updates: [
          ...entry.updates,
          {
            id: createId(),
            authorKey: currentUserKey,
            body: accepted ? "Accepted this feature request and created a development project." : "Rejected this feature request for now.",
            createdAt: now,
          },
        ],
      })
    : entry
  );
  saveBetaFeedback();
  setModule("development");
}

function setQuickAddType(type) {
  if (!["note", "reminder", "suggestion"].includes(type)) {
    return;
  }

  if (quickAddType) {
    quickAddType.value = type;
  }

  document.querySelectorAll("[data-quick-type]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.quickType === type);
  });

  document.querySelectorAll(".quick-reminder-field").forEach((item) => {
    item.classList.toggle("is-hidden", type !== "reminder");
  });
}

function toggleQuickAddPanel(forceOpen) {
  if (!quickAddPanel || !quickAddButton) {
    return;
  }

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : quickAddPanel.classList.contains("is-hidden");
  quickAddPanel.classList.toggle("is-hidden", !shouldOpen);
  quickAddButton.setAttribute("aria-expanded", String(shouldOpen));

  if (shouldOpen) {
    setQuickAddType(quickAddType?.value || "note");
    window.setTimeout(() => quickAddPanel.querySelector("#quickAddTitle")?.focus(), 50);
  }
}

function resetQuickAddPanel() {
  quickAddPanel?.reset();
  setQuickAddType("note");
  toggleQuickAddPanel(false);
}

function submitQuickAdd(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const type = data.type || "note";
  const title = String(data.title || "").trim();
  const body = String(data.body || "").trim();

  if (!title) {
    form.querySelector("#quickAddTitle")?.focus();
    return;
  }

  if (type === "suggestion") {
    addQuickSuggestion(title, body);
  } else {
    addQuickNote(type, title, body, data.reminderAt);
  }

  resetQuickAddPanel();
}

function addQuickNote(type, title, body, reminderAt) {
  const now = new Date().toISOString();
  const normalizedReminderAt = type === "reminder"
    ? reminderAt
      ? new Date(reminderAt).toISOString()
      : new Date(Date.now() + 60 * 60 * 1000).toISOString()
    : "";
  const note = normalizeNote({
    id: createId(),
    title,
    body,
    ownerKey: currentUserKey,
    status: type === "reminder" ? "followup" : "active",
    priority: type === "reminder" ? "high" : "normal",
    color: type === "reminder" ? "rose" : "sun",
    reminderAt: normalizedReminderAt,
    tags: [type],
    createdAt: now,
    updatedAt: now,
  });

  notes = [note, ...notes];
  noteEditingId = null;
  noteCreatingNew = false;
  saveNotes();

  if (activeModule === "notes") {
    selectedNoteId = note.id;
    noteSearchTerm = "";
    noteStatusFilter = "all";
    notePriorityFilter = "all";
    setModule("notes");
  } else if (activeModule === "home") {
    setModule("home");
  }
}

function addQuickSuggestion(title, body) {
  const now = new Date().toISOString();
  const project = normalizeProject({
    id: createId(),
    title,
    ownerKey: currentUserKey,
    suggestedByKey: currentUserKey,
    status: "suggested",
    progress: 0,
    summary: body,
    nextStep: "Add details and decide the first move.",
    labels: ["idea"],
    createdAt: now,
    updatedAt: now,
    updates: [
      {
        id: createId(),
        authorKey: currentUserKey,
        body: body || "Captured from quick add.",
        createdAt: now,
      },
    ],
  });

  projects = [project, ...projects];
  projectSuggestionModalOpen = false;
  saveProjects();

  if (activeModule === "projects") {
    selectedProjectId = project.id;
    activeProjectScope = "my";
    activeProjectView = "board";
    activeProjectDepth = "work";
    projectStatusFilter = "all";
    setModule("projects");
  } else if (activeModule === "home") {
    setModule("home");
  }
}

function bindNotes() {
  const search = moduleCanvas.querySelector("#noteSearch");
  search?.addEventListener("input", () => {
    noteSearchTerm = search.value;
    setModule("notes");
    const nextSearch = moduleCanvas.querySelector("#noteSearch");
    nextSearch?.focus();
    nextSearch?.setSelectionRange(nextSearch.value.length, nextSearch.value.length);
  });

  moduleCanvas.querySelector("[data-note-action='clear-search']")?.addEventListener("click", () => {
    noteSearchTerm = "";
    setModule("notes");
    moduleCanvas.querySelector("#noteSearch")?.focus();
  });

  moduleCanvas.querySelector("[data-note-action='new']")?.addEventListener("click", () => {
    noteEditingId = null;
    noteCreatingNew = true;
    selectedNoteId = null;
    setModule("notes");
    moduleCanvas.querySelector("#noteTitle")?.focus();
  });

  moduleCanvas.querySelector("[data-note-action='cancel']")?.addEventListener("click", () => {
    noteEditingId = null;
    noteCreatingNew = false;
    setModule("notes");
  });

  moduleCanvas.querySelectorAll("[data-note-status]").forEach((button) => {
    button.addEventListener("click", () => {
      noteStatusFilter = button.dataset.noteStatus;
      selectedNoteId = null;
      setModule("notes");
    });
  });

  moduleCanvas.querySelectorAll("[data-note-priority]").forEach((button) => {
    button.addEventListener("click", () => {
      notePriorityFilter = button.dataset.notePriority;
      selectedNoteId = null;
      setModule("notes");
    });
  });

  moduleCanvas.querySelectorAll("[data-note-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedNoteId = button.dataset.noteSelect;
      noteEditingId = null;
      noteCreatingNew = false;
      setModule("notes");
    });
  });

  moduleCanvas.querySelectorAll("[data-note-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      noteEditingId = button.dataset.noteEdit;
      noteCreatingNew = false;
      selectedNoteId = noteEditingId;
      setModule("notes");
      moduleCanvas.querySelector("#noteForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
      moduleCanvas.querySelector("#noteTitle")?.focus();
    });
  });

  moduleCanvas.querySelectorAll("[data-note-toggle-pin]").forEach((button) => {
    button.addEventListener("click", () => updateNote(button.dataset.noteTogglePin, (note) => ({ ...note, pinned: !note.pinned })));
  });

  moduleCanvas.querySelectorAll("[data-note-reminder-done]").forEach((button) => {
    button.addEventListener("click", () => updateNote(button.dataset.noteReminderDone, (note) => ({
      ...note,
      reminderDone: !note.reminderDone,
    })));
  });

  moduleCanvas.querySelectorAll("[data-note-done]").forEach((button) => {
    button.addEventListener("click", () => updateNote(button.dataset.noteDone, (note) => ({
      ...note,
      status: note.status === "done" ? "active" : "done",
    })));
  });

  moduleCanvas.querySelectorAll("[data-note-archive]").forEach((button) => {
    button.addEventListener("click", () => updateNote(button.dataset.noteArchive, (note) => ({
      ...note,
      status: note.status === "archived" ? "active" : "archived",
    })));
  });

  moduleCanvas.querySelectorAll("[data-note-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      notes = notes.filter((note) => note.id !== button.dataset.noteDelete);
      if (selectedNoteId === button.dataset.noteDelete) selectedNoteId = null;
      if (noteEditingId === button.dataset.noteDelete) noteEditingId = null;
      noteCreatingNew = false;
      saveNotes();
      setModule("notes");
    });
  });

  moduleCanvas.querySelectorAll("[data-note-share-form]").forEach((form) => {
    form.addEventListener("submit", shareNote);
  });

  moduleCanvas.querySelector("#noteForm")?.addEventListener("submit", submitNote);
}

function updateNote(noteId, updater) {
  const now = new Date().toISOString();
  notes = notes.map((note) => note.id === noteId
    ? normalizeNote({ ...updater(note), updatedAt: now })
    : note
  );
  selectedNoteId = noteId;
  saveNotes();
  setModule("notes");
}

function submitNote(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const title = data.title.trim();

  if (!title) {
    form.querySelector("#noteTitle")?.focus();
    return;
  }

  const existingNote = notes.find((note) => note.id === noteEditingId);
  const now = new Date().toISOString();
  const note = normalizeNote({
    id: existingNote?.id || createId(),
    title,
    body: data.body,
    ownerKey: data.ownerKey,
    status: data.status,
    priority: data.priority,
    color: data.color,
    dueDate: data.dueDate,
    reminderAt: data.reminderAt ? new Date(data.reminderAt).toISOString() : "",
    reminderDone: data.reminderDone === "on",
    tags: data.tags,
    clientId: data.clientId,
    sharedWith: existingNote?.sharedWith || [],
    sourceThreadId: existingNote?.sourceThreadId || "",
    sourceMessageId: existingNote?.sourceMessageId || "",
    pinned: data.pinned === "on",
    createdAt: existingNote?.createdAt || now,
    updatedAt: now,
  });

  notes = existingNote
    ? notes.map((item) => (item.id === existingNote.id ? note : item))
    : [note, ...notes];

  noteEditingId = null;
  noteCreatingNew = false;
  selectedNoteId = note.id;
  noteStatusFilter = "all";
  notePriorityFilter = "all";
  saveNotes();
  setModule("notes");
}

function shareNote(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const noteId = form.dataset.noteShareForm;
  const data = Object.fromEntries(new FormData(form).entries());
  const targetKey = data.shareTarget;
  const note = notes.find((item) => item.id === noteId);

  if (!note || !users[targetKey]) {
    return;
  }

  const now = new Date().toISOString();
  const sharedNote = normalizeNote({
    ...note,
    sharedWith: [...note.sharedWith, targetKey],
    updatedAt: now,
  });

  notes = notes.map((item) => (item.id === note.id ? sharedNote : item));
  chatMessages = [
    ...chatMessages,
    {
      id: createId(),
      type: "note-share",
      noteId: note.id,
      threadId: getDirectThreadId(currentUserKey, targetKey),
      senderKey: currentUserKey,
      recipientKey: targetKey,
      body: `Shared note: ${note.title}${note.body ? ` — ${note.body}` : ""}`,
      createdAt: now,
      deliveredAt: now,
      readBy: [currentUserKey],
    },
  ];

  selectedNoteId = note.id;
  saveNotes();
  saveChatMessages();
  setModule("notes");
}

function createNoteFromMessage(messageId) {
  const message = chatMessages.find((item) => item.id === messageId);

  if (!message) {
    return;
  }

  const sender = getUser(message.senderKey);
  const thread = getThread(message.threadId);
  const now = new Date().toISOString();
  const note = normalizeNote({
    id: createId(),
    title: `Message from ${sender.name}`,
    body: message.body || "Saved chat message.",
    ownerKey: currentUserKey,
    status: "active",
    priority: "normal",
    color: "sky",
    tags: ["chat", sender.name, thread.name],
    sourceThreadId: message.threadId,
    sourceMessageId: message.id,
    createdAt: now,
    updatedAt: now,
  });

  notes = [note, ...notes];
  selectedNoteId = note.id;
  noteEditingId = note.id;
  noteCreatingNew = false;
  noteStatusFilter = "all";
  notePriorityFilter = "all";
  saveNotes();
  setModule("notes");
  window.setTimeout(() => {
    moduleCanvas.querySelector("#noteReminderAt")?.focus();
  }, 50);
}

function bindChat() {
  markThreadRead(activeChatThreadId);

  moduleCanvas.querySelectorAll("[data-thread]").forEach((button) => {
    button.addEventListener("click", () => {
      typingState = null;
      activeChatThreadId = button.dataset.thread;
      setModule("chat");
    });
  });

  moduleCanvas.querySelectorAll("[data-project-request-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { projectRequestAction, projectId } = button.dataset;

      if (projectRequestAction === "open") {
        openProjectFromChat(projectId);
        return;
      }

      respondToProjectSuggestion(projectId, projectRequestAction);
    });
  });

  moduleCanvas.querySelectorAll("[data-chat-open-note]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedNoteId = button.dataset.chatOpenNote;
      noteStatusFilter = "all";
      notePriorityFilter = "all";
      setModule("notes");
    });
  });

  moduleCanvas.querySelectorAll("[data-message-note]").forEach((button) => {
    button.addEventListener("click", () => createNoteFromMessage(button.dataset.messageNote));
  });

  const messageList = moduleCanvas.querySelector("#messageList");
  messageList?.scrollTo({ top: messageList.scrollHeight });

  const composer = moduleCanvas.querySelector("#chatComposer");
  composer?.addEventListener("submit", (event) => {
    event.preventDefault();
    const messageField = composer.querySelector("#chatMessage");
    const body = messageField.value.trim();

    if (!body) {
      messageField.focus();
      return;
    }

    chatMessages = [
      ...chatMessages,
      {
        id: createId(),
        threadId: activeChatThreadId,
        senderKey: currentUserKey,
        body,
        createdAt: new Date().toISOString(),
        deliveredAt: new Date().toISOString(),
        readBy: [currentUserKey],
      },
    ];

    saveChatMessages();
    clearTypingBroadcast();
    setModule("chat");
    moduleCanvas.querySelector("#chatMessage")?.focus();
  });

  composer?.querySelector("#chatMessage")?.addEventListener("input", broadcastTyping);
}

function bindSettings() {
  moduleCanvas.querySelector("[data-action='export']")?.addEventListener("click", () => {
    const data = JSON.stringify({ businessProfile, appointments, services, clients, serviceTickets, cueRepairs, customOrders, employeeProfiles, accountSecurity, crews, notes, chatMessages, projects, projectAutomations, betaFeedback }, null, 2);
    const url = URL.createObjectURL(new Blob([data], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "service-schedule.json";
    link.click();
    URL.revokeObjectURL(url);
  });

  moduleCanvas.querySelector("[data-action='reset-chat']")?.addEventListener("click", () => {
    chatMessages = seedChatMessages();
    saveChatMessages();
    setModule("chat");
  });

  moduleCanvas.querySelector("[data-action='reset']")?.addEventListener("click", () => {
    appointments = seedAppointments();
    clients = defaultClients.map(normalizeClient);
    serviceTickets = defaultServiceTickets.map(normalizeServiceTicket);
    cueRepairs = [];
    customOrders = defaultCustomOrders.map(normalizeCustomOrder);
    employeeProfiles = defaultEmployeeProfiles.map(normalizeEmployeeProfile);
    accountSecurity = normalizeAccountSecurity(defaultAccountSecurity);
    chatMessages = seedChatMessages();
    projects = defaultProjects.map(normalizeProject);
    projectAutomations = defaultProjectAutomations.map(normalizeProjectAutomation);
    betaFeedback = [];
    notes = defaultNotes.map(normalizeNote);
    editingId = null;
    clientEditingId = null;
    clientCreatingNew = false;
    selectedTicketId = null;
    ticketEditingId = null;
    ticketCreatingNew = false;
    ticketClientId = "";
    ticketAppointmentId = "";
    selectedCueRepairId = null;
    cueRepairEditingId = null;
    cueRepairCreatingNew = false;
    cueRepairSearchTerm = "";
    cueRepairStatusFilter = "all";
    selectedCustomOrderId = null;
    customOrderEditingId = null;
    customOrderCreatingNew = false;
    customOrderSearchTerm = "";
    customOrderStatusFilter = "all";
    selectedProjectId = null;
    selectedNoteId = null;
    noteEditingId = null;
    noteCreatingNew = false;
    statusFilter = "all";
    calendarTypeFilter = "all";
    jobStatusFilter = "open";
    jobTypeFilter = "all";
    scheduleNotice = "";
    saveAppointments();
    saveClients();
    saveServiceTickets();
    saveCueRepairs();
    saveCustomOrders();
    saveEmployeeProfiles();
    saveAccountSecurity();
    saveChatMessages();
    saveProjects();
    saveProjectAutomations();
    saveBetaFeedback();
    saveNotes();
    setModule("schedule");
  });

  moduleCanvas.querySelector("#projectAutomationForm")?.addEventListener("submit", submitProjectAutomation);
}

function submitProjectAutomation(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const existing = projectAutomations.find((item) => item.id === "mark-monthly-bill");
  const checklist = [data.checklistOne, data.checklistTwo].map((item) => String(item || "").trim()).filter(Boolean);
  const automation = normalizeProjectAutomation({
    id: "mark-monthly-bill",
    enabled: data.enabled === "on",
    name: "Mark's monthly bill",
    dayOfMonth: data.dayOfMonth,
    dueDaysAfterCreate: data.dueDaysAfterCreate,
    titleTemplate: data.titleTemplate,
    summaryTemplate: data.summaryTemplate,
    nextStepTemplate: data.nextStepTemplate,
    ownerKey: "herlyn",
    labels: ["ops"],
    contributors: [
      { userKey: "herlyn", role: data.herlynRole, status: "active", progress: 0 },
      { userKey: "shawn", role: data.shawnRole, status: "not_started", progress: 0 },
    ],
    checklist,
    lastGeneratedPeriod: existing?.lastGeneratedPeriod || "",
  });

  projectAutomations = projectAutomations.some((item) => item.id === automation.id)
    ? projectAutomations.map((item) => item.id === automation.id ? automation : item)
    : [automation, ...projectAutomations];
  saveProjectAutomations();

  const alert = form.querySelector("#projectAutomationAlert");
  if (alert) {
    alert.hidden = false;
    alert.textContent = "Saved. Future monthly bill projects will use this.";
  }
}

function bindHome() {
  moduleCanvas.querySelector("[data-fire-shawn]")?.addEventListener("click", sendShawnTerminationNotice);
  moduleCanvas.querySelector("[data-weather-refresh]")?.addEventListener("click", () => refreshHomeWeather(true));
  refreshHomeWeather();

  moduleCanvas.querySelectorAll("[data-home-open]").forEach((button) => {
    button.addEventListener("click", () => openHomeSection(button.dataset.homeOpen));
  });

  moduleCanvas.querySelectorAll("[data-home-appointment]").forEach((button) => {
    button.addEventListener("click", () => openHomeAppointment(button.dataset.homeAppointment));
  });

  moduleCanvas.querySelectorAll("[data-home-client]").forEach((button) => {
    button.addEventListener("click", () => openHomeClient(button.dataset.homeClient, true));
  });

  moduleCanvas.querySelectorAll("[data-home-ticket]").forEach((button) => {
    button.addEventListener("click", () => openHomeTicket(button.dataset.homeTicket));
  });

  moduleCanvas.querySelectorAll("[data-home-project]").forEach((button) => {
    button.addEventListener("click", () => openHomeProject(button.dataset.homeProject));
  });

  moduleCanvas.querySelectorAll("[data-home-note]").forEach((button) => {
    button.addEventListener("click", () => openHomeNote(button.dataset.homeNote));
  });

  moduleCanvas.querySelectorAll("[data-home-thread]").forEach((button) => {
    button.addEventListener("click", () => openHomeThread(button.dataset.homeThread));
  });
  // Shared module buttons are wired after each render.
}

async function refreshHomeWeather(force = false) {
  const tile = moduleCanvas.querySelector("#homeWeatherTile");
  if (!tile) {
    return;
  }

  const lastUpdated = homeWeatherState.updatedAt ? new Date(homeWeatherState.updatedAt).getTime() : 0;
  const isFresh = lastUpdated && Date.now() - lastUpdated < 15 * 60 * 1000;
  if (!force && homeWeatherState.status === "ready" && isFresh) {
    tile.innerHTML = renderHomeWeatherTileContent();
    return;
  }

  homeWeatherState = { ...homeWeatherState, status: "loading", condition: "Loading weather" };
  tile.innerHTML = renderHomeWeatherTileContent();

  try {
    const params = new URLSearchParams({
      latitude: String(businessWeather.latitude),
      longitude: String(businessWeather.longitude),
      current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m",
      daily: "temperature_2m_max,temperature_2m_min",
      temperature_unit: "celsius",
      wind_speed_unit: "kmh",
      timezone: "auto",
    });
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    const code = Number(data.current?.weather_code ?? 1);
    homeWeatherState = {
      status: "ready",
      temperature: Number(data.current?.temperature_2m),
      condition: getWeatherCondition(code),
      high: Number(data.daily?.temperature_2m_max?.[0]),
      low: Number(data.daily?.temperature_2m_min?.[0]),
      wind: Number(data.current?.wind_speed_10m),
      code,
      updatedAt: new Date().toISOString(),
    };
  } catch {
    homeWeatherState = {
      ...homeWeatherState,
      status: "error",
      condition: "Weather unavailable",
      updatedAt: "",
    };
  }

  moduleCanvas.querySelector("#homeWeatherTile")?.replaceChildren();
  const nextTile = moduleCanvas.querySelector("#homeWeatherTile");
  if (nextTile) {
    nextTile.innerHTML = renderHomeWeatherTileContent();
  }
}

function openHomeSection(target) {
  const today = new Date();

  if (target === "today") {
    selectedDate = toDateKey(today);
    currentMonth = startOfMonth(today);
    calendarZoomMode = "three-week";
    statusFilter = "all";
    calendarTypeFilter = "all";
    selectedAppointmentId = appointments.find((appointment) => appointment.date === selectedDate)?.id || null;
    quickFactAppointmentId = null;
    setModule("schedule");
    return;
  }

  if (target === "month") {
    selectedDate = toDateKey(today);
    currentMonth = startOfMonth(today);
    calendarZoomMode = "month";
    statusFilter = "all";
    calendarTypeFilter = "all";
    selectedAppointmentId = null;
    quickFactAppointmentId = null;
    setModule("schedule");
    return;
  }

  if (target === "tickets") {
    ticketSearchTerm = "";
    ticketStatusFilter = "all";
    ticketEditingId = null;
    ticketCreatingNew = false;
    selectedTicketId = getOpenServiceTickets()[0]?.id || null;
    setModule("tickets");
    return;
  }

  if (target === "cueRepairs") {
    cueRepairSearchTerm = "";
    cueRepairStatusFilter = "all";
    cueRepairEditingId = null;
    cueRepairCreatingNew = false;
    selectedCueRepairId = cueRepairs.find((repair) => repair.status === "waiting_pickup")?.id || cueRepairs[0]?.id || null;
    setModule("cueRepairs");
    return;
  }

  if (target === "outstanding") {
    const firstAccount = getOutstandingClients()[0];
    openHomeClient(firstAccount?.client.id || clients[0]?.id || "", true);
    return;
  }

  if (target === "notes") {
    noteSearchTerm = "";
    noteStatusFilter = "all";
    notePriorityFilter = "all";
    selectedNoteId = getProfileNotes()[0]?.id || null;
    noteEditingId = null;
    noteCreatingNew = false;
    setModule("notes");
    return;
  }

  if (target === "projects") {
    activeProjectScope = "my";
    activeProjectView = "board";
    activeProjectDepth = "glance";
    projectStatusFilter = "all";
    projectSuggestionModalOpen = false;
    selectedProjectId = getProfileProjects()[0]?.id || null;
    setModule("projects");
    return;
  }

  if (target === "chat") {
    activeChatThreadId = getProfileMessages()[0]?.threadId || "all-staff";
    setModule("chat");
    return;
  }

  if (target === "clients") {
    openHomeClient(clients[0]?.id || "", false);
    return;
  }

  if (target === "team") {
    setModule("team");
  }
}

function openHomeAppointment(appointmentId) {
  const appointment = appointments.find((item) => item.id === appointmentId);
  if (!appointment) {
    return;
  }

  selectedDate = appointment.date;
  currentMonth = startOfMonth(dateFromKey(appointment.date));
  calendarZoomMode = "three-week";
  selectedAppointmentId = appointment.id;
  quickFactAppointmentId = appointment.id;
  editingId = null;
  setModule("schedule");
}

function openHomeClient(clientId, outstandingOnly = false) {
  selectedClientId = clientId || clients[0]?.id || null;
  clientEditingId = null;
  clientCreatingNew = false;
  clientSearchTerm = "";
  clientOutstandingOnly = outstandingOnly;
  setModule("clients");
}

function openHomeTicket(ticketId) {
  selectedTicketId = ticketId;
  ticketEditingId = null;
  ticketCreatingNew = false;
  ticketSearchTerm = "";
  ticketStatusFilter = "all";
  setModule("tickets");
}

function openHomeProject(projectId) {
  selectedProjectId = projectId;
  activeProjectScope = "my";
  activeProjectView = "board";
  activeProjectDepth = "glance";
  projectStatusFilter = "all";
  projectSuggestionModalOpen = false;
  setModule("projects");
}

function openHomeNote(noteId) {
  selectedNoteId = noteId;
  noteEditingId = null;
  noteCreatingNew = false;
  noteSearchTerm = "";
  noteStatusFilter = "all";
  notePriorityFilter = "all";
  setModule("notes");
}

function openHomeThread(threadId) {
  if (threadId) {
    activeChatThreadId = threadId;
  }
  setModule("chat");
}

function sendShawnTerminationNotice(event) {
  if (currentUserKey !== "keith") {
    return;
  }

  chatMessages = [
    ...chatMessages,
    {
      id: createId(),
      threadId: getDirectThreadId("keith", "shawn"),
      senderKey: "keith",
      recipientKey: "shawn",
      body: "Termination notice: Shawn, your employment with Home Billiards has been terminated effective immediately. Please contact Keith for next steps.",
      createdAt: new Date().toISOString(),
    },
  ];

  saveChatMessages();

  const button = event?.currentTarget;
  if (button) {
    button.textContent = "Notice sent";
    button.classList.add("is-sent");
    window.setTimeout(() => {
      button.textContent = "Fire Shawn";
      button.classList.remove("is-sent");
    }, 1800);
  }
}

function updateConflictAlert(form) {
  const alert = form.querySelector("#conflictAlert");
  const candidate = Object.fromEntries(new FormData(form).entries());
  candidate.serviceIds = getSelectedServiceIdsFromForm(form);
  candidate.id = editingId;
  const conflict = findConflict(candidate);

  if (conflict) {
    alert.hidden = false;
    alert.textContent = `${getCrew(candidate.crewId).name} already has ${getClient(conflict.clientId).name} at ${formatTime(conflict.time)}.`;
  } else {
    alert.hidden = true;
    alert.textContent = "";
  }
}

function submitClient(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());

  if (!data.name.trim()) {
    form.querySelector("#clientName")?.focus();
    return;
  }

  const existingClient = clients.find((item) => item.id === clientEditingId);
  const clientId = clientEditingId || createId();
  const client = normalizeClient({
    id: clientId,
    customerNumber: existingClient?.customerNumber || "",
    name: data.name,
    phone: data.phone,
    email: data.email,
    address: data.address,
    addresses: updatePrimaryClientAddress(existingClient?.addresses || [], data.address, clientId),
    notes: data.notes,
    status: existingClient?.status || "active",
    tags: existingClient?.tags || [],
    createdAt: existingClient?.createdAt,
    updatedAt: new Date().toISOString(),
  });

  if (clientEditingId) {
    clients = clients.map((item) => (item.id === clientEditingId ? client : item));
  } else {
    clients = [...clients, client];
    bookingClientId = client.id;
  }

  selectedClientId = client.id;
  clientEditingId = null;
  clientCreatingNew = false;
  saveClients();
  setModule("clients");
}

function submitTicket(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const title = data.title.trim();

  if (!title) {
    form.querySelector("#ticketTitle")?.focus();
    return;
  }

  const existingTicket = serviceTickets.find((ticket) => ticket.id === ticketEditingId);
  const now = new Date().toISOString();
  const ticket = normalizeServiceTicket({
    id: existingTicket?.id || createId(),
    clientId: data.clientId,
    appointmentId: data.appointmentId,
    title,
    issue: data.issue,
    status: data.status,
    priority: data.priority,
    product: data.product,
    serialNumber: data.serialNumber,
    warrantyExpires: data.warrantyExpires,
    submittedAt: data.submittedAt || toDateKey(new Date()),
    nextStep: data.nextStep,
    ownerKey: data.ownerKey,
    portalVisible: data.portalVisible === "on",
    createdAt: existingTicket?.createdAt || now,
    updatedAt: now,
  });

  serviceTickets = existingTicket
    ? serviceTickets.map((item) => (item.id === existingTicket.id ? ticket : item))
    : [ticket, ...serviceTickets];

  selectedTicketId = ticket.id;
  ticketEditingId = null;
  ticketCreatingNew = false;
  ticketClientId = "";
  ticketAppointmentId = "";
  ticketStatusFilter = "all";
  saveServiceTickets();
  setModule("tickets");
}

function submitPayment(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const appointmentId = form.dataset.paymentForm;
  const data = Object.fromEntries(new FormData(form).entries());
  const amount = roundMoney(Number(data.amount));

  if (!amount) {
    form.querySelector("[name='amount']")?.focus();
    return;
  }

  const methodLabels = {
    card: "Card",
    "e-transfer": "E-transfer",
    cash: "Cash",
    cheque: "Cheque",
    other: "Other",
  };
  const payment = {
    amount,
    method: data.method || "card",
    methodLabel: methodLabels[data.method] || "Other",
    paidDate: data.paidDate || toDateKey(new Date()),
    paidAt: new Date().toISOString(),
    reference: String(data.reference || "").trim(),
    notes: String(data.notes || "").trim(),
    receivedBy: currentUserKey,
  };

  const paidAppointment = appointments.find((appointment) => appointment.id === appointmentId);
  appointments = appointments.map((appointment) => appointment.id === appointmentId
    ? closeAppointmentWithPayment(appointment, payment)
    : appointment
  );
  if (paidAppointment?.clientId) {
    selectedClientId = paidAppointment.clientId;
  }
  quickFactAppointmentId = null;
  saveAppointments();
  setModule(["clients", "jobs"].includes(activeModule) ? activeModule : "schedule");
}

function submitAppointment(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const existingAppointment = appointments.find((item) => item.id === editingId);

  if (!data.clientId) {
    form.querySelector("#appointmentClient")?.focus();
    return;
  }

  const serviceIds = getSelectedServiceIdsFromForm(form);
  if (!serviceIds.length) {
    form.querySelector("#appointmentServicePicker")?.focus();
    return;
  }

  const appointmentClient = getClient(data.clientId);
  const appointmentLocation = getClientAddress(appointmentClient, data.addressId);
  const appointment = {
    id: editingId || createId(),
    clientId: data.clientId,
    addressId: appointmentLocation.id || "",
    addressSnapshot: appointmentLocation.address || "",
    serviceIds,
    crewId: data.crewId,
    date: data.date,
    time: data.time,
    status: data.status,
    type: calendarTypeLabels[data.type] ? data.type : "job",
    notes: data.notes.trim(),
    completedAt: ["payment_due", "complete"].includes(data.status) ? existingAppointment?.completedAt || new Date().toISOString() : "",
    payment: data.status === "complete" ? existingAppointment?.payment || null : null,
    paidAt: data.status === "complete" ? existingAppointment?.paidAt || "" : "",
  };

  if (editingId) {
    appointments = appointments.map((item) => (item.id === editingId ? appointment : item));
  } else {
    appointments = [...appointments, appointment];
  }

  selectedDate = appointment.date;
  currentMonth = startOfMonth(dateFromKey(appointment.date));
  editingId = null;
  bookingClientId = null;
  saveAppointments();
  setModule("schedule");
}

function getCurrentDateTitle() {
  return formatLongDate(toDateKey(new Date()));
}

function getLoginGreeting(date = new Date()) {
  const minutesSinceMidnight = date.getHours() * 60 + date.getMinutes();

  if (minutesSinceMidnight < 12 * 60) {
    return "Good Morning";
  }

  if (minutesSinceMidnight <= 17 * 60) {
    return "Good Afternoon";
  }

  return "Stop Working";
}

function updateUser(userKey) {
  const user = users[userKey] || users.shawn;
  userName.textContent = user.name;
  userRole.textContent = user.role;
  userAvatar.textContent = user.avatar;
  syncRoleNavigation();
  if (startupGreeting) {
    startupGreeting.textContent = `${getLoginGreeting()}, ${user.name}!`;
  }
}

function syncRoleNavigation() {
  document.querySelectorAll("[data-dev-only]").forEach((item) => {
    item.classList.toggle("is-hidden", !canCurrentUserUseDevelopment());
  });
}

function playWelcomeAudio() {
  if (!welcomeAudio) {
    return;
  }

  welcomeAudio.pause();
  welcomeAudio.currentTime = 0;
  welcomeAudio.volume = 0.92;
  welcomeAudio.play().catch(() => {
    // Browser settings can block audio even after a click.
  });
}

async function verifyLogin(userKey, pin) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userKey, pin }),
    });

    if (!response.ok) {
      if ([404, 405, 501].includes(response.status)) {
        return offlineAccountPins[userKey] === pin;
      }
      return false;
    }

    backendReady = true;
    return true;
  } catch {
    return offlineAccountPins[userKey] === pin;
  }
}

function showLoginError(message) {
  pinInput.setCustomValidity(message);
  pinInput.reportValidity();
  window.setTimeout(() => pinInput.setCustomValidity(""), 1800);
}

function openDashboard(userKey) {
  currentUserKey = userKey;
  if (isDirectThreadId(activeChatThreadId) && !getDirectParticipants(activeChatThreadId).includes(currentUserKey)) {
    activeChatThreadId = "all-staff";
  }
  selectedProjectId = null;
  selectedNoteId = null;
  noteEditingId = null;
  noteCreatingNew = false;
  projectStatusFilter = "all";
  noteStatusFilter = "all";
  notePriorityFilter = "all";
  noteSearchTerm = "";
  updateUser(userKey);
  setModule("home");
  window.clearTimeout(welcomeAudioTimer);
  if (userKey === "shawn") {
    welcomeAudioTimer = window.setTimeout(playWelcomeAudio, 2000);
  }
  dashboardView.classList.remove("is-ready");
  loginView.classList.add("is-hidden");
  startupView.classList.remove("is-hidden", "is-leaving");

  requestAnimationFrame(() => {
    startupView.classList.add("is-visible");
  });

  window.setTimeout(() => {
    dashboardView.classList.remove("is-hidden");
    requestAnimationFrame(() => {
      dashboardView.classList.add("is-ready");
      startupView.classList.add("is-leaving");
    });
  }, 3500);

  window.setTimeout(() => {
    startupView.classList.add("is-hidden");
    startupView.classList.remove("is-visible", "is-leaving");
    checkNoteReminders();
  }, 4300);
}

function expandActiveNavGroup(moduleKey) {
  const activeItem = navItems.find((item) => item.dataset.module === moduleKey);
  const activeGroup = activeItem?.closest(".nav-group");

  if (activeGroup) {
    activeGroup.open = true;
  }
}

function initializeNavGroups() {
  navGroups.forEach((group) => {
    const storedState = localStorage.getItem(`${navGroupStorageKey}:${group.dataset.navGroup}`);

    if (storedState) {
      group.open = storedState === "open";
    }
  });

  expandActiveNavGroup(activeModule);
}

function saveNavGroupState(group) {
  localStorage.setItem(`${navGroupStorageKey}:${group.dataset.navGroup}`, group.open ? "open" : "closed");
}

function setModule(moduleKey) {
  if (moduleKey === "development" && !canCurrentUserUseDevelopment()) {
    moduleKey = "home";
  }
  activeModule = moduleKey;
  const module = modules[moduleKey] || modules.home;
  if (moduleKey === "chat") {
    markThreadRead(activeChatThreadId);
  }
  dashboardView.classList.toggle("is-home-view", moduleKey === "home");
  moduleTitle.textContent = typeof module.title === "function" ? module.title() : module.title;
  moduleEyebrow.textContent = module.eyebrow;
  moduleCanvas.innerHTML = module.render();

  navItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.module === moduleKey);
  });
  expandActiveNavGroup(moduleKey);

  const showScheduleShortcuts = moduleKey === "schedule";
  todayShortcut.classList.toggle("is-hidden", !showScheduleShortcuts);
  newJobShortcut.classList.toggle("is-hidden", !showScheduleShortcuts);
  updateUnreadIndicators();

  module.bind?.();
  moduleCanvas.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => {
      editingId = null;
      bookingClientId = null;
      setModule(button.dataset.module);
    });
  });
}

function jumpToToday() {
  selectedDate = toDateKey(new Date());
  currentMonth = startOfMonth(new Date());
  calendarZoomMode = "three-week";
  editingId = null;
  selectedAppointmentId = null;
  quickFactAppointmentId = null;
  setModule("schedule");
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!pinInput.value.trim()) {
    pinInput.focus();
    return;
  }

  const submitButton = loginForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  const isAuthorized = await verifyLogin(userSelect.value, pinInput.value.trim());
  submitButton.disabled = false;

  if (!isAuthorized) {
    showLoginError("That PIN does not match this user.");
    pinInput.select();
    return;
  }

  openDashboard(userSelect.value);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    editingId = null;
    bookingClientId = null;
    setModule(item.dataset.module);
  });
});

navGroups.forEach((group) => {
  group.addEventListener("toggle", () => saveNavGroupState(group));
});

quickAddButton?.addEventListener("click", () => {
  toggleQuickAddPanel();
});

document.querySelectorAll("[data-beta-open]").forEach((button) => {
  button.addEventListener("click", () => toggleBetaFeedbackPanel(button.dataset.betaOpen, true));
});

betaFeedbackPanel?.querySelectorAll("[data-beta-type]").forEach((button) => {
  button.addEventListener("click", () => {
    setBetaFeedbackType(button.dataset.betaType);
    betaFeedbackPanel.querySelector("#betaFeedbackDetails")?.focus();
  });
});

betaScreenshotButton?.addEventListener("click", captureBetaScreenshot);
betaFeedbackPanel?.addEventListener("submit", submitBetaFeedback);

document.addEventListener("click", (event) => {
  if (!betaFeedbackPanel || betaFeedbackPanel.classList.contains("is-hidden")) {
    return;
  }

  if (!betaFeedbackContainer?.contains(event.target)) {
    resetBetaFeedbackPanel();
  }
});

quickAddClose?.addEventListener("click", () => {
  resetQuickAddPanel();
});

quickAddPanel?.querySelectorAll("[data-quick-type]").forEach((button) => {
  button.addEventListener("click", () => {
    setQuickAddType(button.dataset.quickType);
    quickAddPanel.querySelector("#quickAddTitle")?.focus();
  });
});

quickAddPanel?.addEventListener("click", (event) => {
  if (event.target.closest("#quickAddClose")) {
    resetQuickAddPanel();
  }
});

quickAddPanel?.addEventListener("submit", submitQuickAdd);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !quickAddPanel?.classList.contains("is-hidden")) {
    resetQuickAddPanel();
  }
  if (event.key === "Escape" && !betaFeedbackPanel?.classList.contains("is-hidden")) {
    resetBetaFeedbackPanel();
  }
});

window.addEventListener("storage", (event) => {
  if (
    ![
      storageKey,
      serviceStorageKey,
      clientStorageKey,
      serviceTicketStorageKey,
      cueRepairStorageKey,
      customOrderStorageKey,
      employeeStorageKey,
      accountSecurityStorageKey,
      chatStorageKey,
      projectStorageKey,
      projectAutomationStorageKey,
      betaFeedbackStorageKey,
      typingStorageKey,
      noteStorageKey,
    ].includes(event.key) ||
    !event.newValue
  ) {
    return;
  }

  try {
    if (event.key === storageKey) {
      appointments = JSON.parse(event.newValue).map(normalizeAppointment);
      if (["schedule", "jobs", "home"].includes(activeModule)) {
        setModule(activeModule);
      }
    } else if (event.key === serviceStorageKey) {
      services = JSON.parse(event.newValue).map(normalizeService);
      if (["services", "schedule", "jobs", "home"].includes(activeModule)) {
        setModule(activeModule);
      }
    } else if (event.key === clientStorageKey) {
      clients = JSON.parse(event.newValue).map(normalizeClient);
      if (["clients", "schedule", "jobs", "home"].includes(activeModule)) {
        setModule(activeModule);
      }
    } else if (event.key === serviceTicketStorageKey) {
      serviceTickets = JSON.parse(event.newValue).map(normalizeServiceTicket);
      if (["tickets", "home"].includes(activeModule)) {
        setModule(activeModule);
      }
    } else if (event.key === cueRepairStorageKey) {
      cueRepairs = JSON.parse(event.newValue).map(normalizeCueRepair);
      if (["cueRepairs", "home"].includes(activeModule)) {
        setModule(activeModule);
      }
    } else if (event.key === customOrderStorageKey) {
      customOrders = JSON.parse(event.newValue).map(normalizeCustomOrder);
      if (["customOrders", "home"].includes(activeModule)) {
        setModule(activeModule);
      }
    } else if (event.key === employeeStorageKey) {
      employeeProfiles = JSON.parse(event.newValue).map(normalizeEmployeeProfile);
      if (["team", "home"].includes(activeModule)) {
        setModule(activeModule);
      }
    } else if (event.key === accountSecurityStorageKey) {
      accountSecurity = normalizeAccountSecurity(JSON.parse(event.newValue));
      if (activeModule === "team") {
        setModule("team");
      }
    } else if (event.key === chatStorageKey) {
      syncIncomingChatMessages(JSON.parse(event.newValue));
    } else if (event.key === typingStorageKey) {
      syncTypingState(JSON.parse(event.newValue));
    } else if (event.key === noteStorageKey) {
      notes = JSON.parse(event.newValue).map(normalizeNote);
      if (activeModule === "notes" || activeModule === "home") {
        setModule(activeModule);
      }
    } else if (event.key === projectAutomationStorageKey) {
      projectAutomations = JSON.parse(event.newValue).map(normalizeProjectAutomation);
      if (activeModule === "projects" || activeModule === "home") {
        setModule(activeModule);
      }
    } else if (event.key === betaFeedbackStorageKey) {
      betaFeedback = JSON.parse(event.newValue).map(normalizeBetaFeedback);
      if (activeModule === "development") {
        setModule(activeModule);
      }
    } else {
      syncProjectBoard(JSON.parse(event.newValue));
    }
  } catch {
    // Ignore malformed browser storage from older local demos.
  }
});

todayShortcut.addEventListener("click", jumpToToday);
newJobShortcut.addEventListener("click", () => {
  editingId = null;
  bookingClientId = null;
  setModule("schedule");
  window.setTimeout(() => {
    moduleCanvas.querySelector("#bookingForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
});

logoutButton.addEventListener("click", () => {
  window.clearTimeout(welcomeAudioTimer);

  if (welcomeAudio) {
    welcomeAudio.pause();
    welcomeAudio.currentTime = 0;
  }

  dashboardView.classList.remove("is-ready");
  dashboardView.classList.add("is-hidden");
  loginView.classList.remove("is-hidden");
  clearTypingBroadcast();
  typingState = null;
  hideMessageAlert();
  hideNoteReminderAlert();
  userSelect.value = "shawn";
  pinInput.value = "";
  pinInput.focus();
});

async function openFromUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const user = params.get("user");
  const pin = params.get("pin");

  if (!pin) {
    return;
  }

  if (user && users[user]) {
    userSelect.value = user;
  }

  pinInput.value = pin;
  window.setTimeout(async () => {
    if (await verifyLogin(userSelect.value, pinInput.value.trim())) {
      openDashboard(userSelect.value);
    }
  }, 120);
}

window.setInterval(checkNoteReminders, 30000);
window.setTimeout(checkNoteReminders, 1200);
initializeNavGroups();
initializeBackendSync();
openFromUrlParams();

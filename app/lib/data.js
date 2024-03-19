const categories = { 
  'faults': { 
    icon: "exclamation-mark", 
    color: "bg-[#E0FFB8]" 
  },
  'printers': {
    icon: "printer", 
    color: "bg-[#B8FFFB]"
  },
  'scanners': {
    icon: "scanner", 
    color: "bg-[#FFB8CD]"
  },
  'users': {
    icon: "user", 
    color: "bg-[#FFDAB8]"
  },
  'olim': {
    icon: "passport", 
    color: "bg-[#B9FFB8]"
  },
  'software': {
    icon: "software", 
    color: "bg-[#DBB8FF]"
  },
}

const data = [
  // Faults category
  {
    id: "1",
    title: "Unlicense Microsoft Office",
    body: "<h1>Go to install folder and reinstall office</h1>",
    category: "faults",
    views: 31,
    tags: ["office", "microsoft", "error", "license"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "2",
    title: "Microsoft Word crashes upon startup",
    body: "<h1>Disable add-ins or repair Microsoft Office</h1>",
    category: "faults",
    views: 20,
    tags: ["office", "microsoft", "error", "crash"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "3",
    title: "PowerPoint slides do not display",
    body: "<h1>Update graphics drivers and repair PowerPoint</h1>",
    category: "faults",
    views: 15,
    tags: ["office", "microsoft", "error", "powerpoint"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "4",
    title: "Outlook cannot send emails",
    body: "<h1>Check email server settings and antivirus/firewall</h1>",
    category: "faults",
    views: 10,
    tags: ["office", "microsoft", "error", "outlook"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  // Printers category
  {
    id: "5",
    title: "Printer doesn't print pages",
    body: "<h1>Check printer's status, open trays look for paper jam</h1>",
    category: "printers",
    views: 21,
    tags: ["printers", "print", "pages", "paper jam"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "6",
    title: "Printer shows 'offline' status",
    body: "<h1>Restart printer spooler service and check network connection</h1>",
    category: "printers",
    views: 14,
    tags: ["printers", "offline", "network", "status"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "7",
    title: "Printed pages are smudged",
    body: "<h1>Adjust print quality settings and replace toner/ink</h1>",
    category: "printers",
    views: 12,
    tags: ["printers", "print", "smudged", "maintenance"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "8",
    title: "Printer makes loud noises during printing",
    body: "<h1>Check for obstructions and lubricate moving parts</h1>",
    category: "printers",
    views: 9,
    tags: ["printers", "noise", "maintenance", "hardware"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  // Scanners category
  {
    id: "9",
    title: "Scanner error",
    body: "<h1>Reinstall scanner through control panel</h1>",
    category: "scanners",
    views: 15,
    tags: ["scanners", "software", "errors"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "10",
    title: "Scanner produces black lines on scans",
    body: "<h1>Clean scanner glass and update scanner drivers</h1>",
    category: "scanners",
    views: 11,
    tags: ["scanners", "lines", "quality", "maintenance"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "11",
    title: "Scanner software crashes when opening",
    body: "<h1>Reinstall scanner software and check for conflicts</h1>",
    category: "scanners",
    views: 10,
    tags: ["scanners", "software", "crash", "reinstall"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "12",
    title: "Scanner scans are too dark",
    body: "<h1>Adjust brightness and contrast settings in scanner software</h1>",
    category: "scanners",
    views: 8,
    tags: ["scanners", "dark scans", "settings", "quality"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  // Users category
  {
    id: "13",
    title: "reset password",
    body: "<h1>Go to Active Directory and reset password</h1>",
    category: "users",
    views: 12,
    tags: ["users", "password", "active directory"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "14",
    title: "User account password expired",
    body: "<h1>Change password via Ctrl+Alt+Del or contact IT support</h1>",
    category: "users",
    views: 10,
    tags: ["users", "password", "expiration", "IT support"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "15",
    title: "User profile settings not saving",
    body: "<h1>Check permissions and reset user profile if necessary</h1>",
    category: "users",
    views: 9,
    tags: ["users", "profile", "settings", "permissions"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "16",
    title: "User cannot access shared network drive",
    body: "<h1>Verify network permissions and check drive mapping</h1>",
    category: "users",
    views: 8,
    tags: ["users", "network drive", "access", "permissions"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  // Olim category
  {
    id: "17",
    title: "Olim can't open files",
    body: "<h1>Add /Z: and /U: drivers to PC</h1>",
    category: "olim",
    views: 8,
    tags: ["drivers", "olim", "website"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "18",
    title: "Olim website displays outdated information and some bullshit",
    body: "<h1>Refresh browser cache or contact website administrator</h1>",
    category: "olim",
    views: 8,
    tags: ["olim", "website", "outdated", "cache"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "19",
    title: "Olim website login not working",
    body: "<h1>Clear browser cookies and try logging in again</h1>",
    category: "olim",
    views: 7,
    tags: ["olim", "website", "login", "cookies"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "20",
    title: "Olim website slow loading times",
    body: "<h1>Check internet connection speed and browser performance</h1>",
    category: "olim",
    views: 6,
    tags: ["olim", "website", "slow", "loading"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  // Software category
  {
    id: "21",
    title: "PDF software unavailable",
    body: "<h1>Go to Install folder and reinstall Adobe Acrobat</h1>",
    category: "software",
    views: 11,
    tags: ["pdf", "install", "software"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "22",
    title: "Software license key invalid",
    body: "<h1>Contact software vendor for valid license key</h1>",
    category: "software",
    views: 8,
    tags: ["software", "license", "invalid", "vendor"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "23",
    title: "Software update fails to install",
    body: "<h1>Check system requirements and try manual installation</h1>",
    category: "software",
    views: 7,
    tags: ["software", "update", "installation", "fail"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
  {
    id: "24",
    title: "Software crashes randomly",
    body: "<h1>Update software to latest version or check for conflicts</h1>",
    category: "software",
    views: 6,
    tags: ["software", "crash", "update", "conflict"],
    createdAt: new Date(),
    changedAt: new Date(),
  },
];

const categoriesInfo = [...new Set(data.map(file => file.category))].map(category => ({
  title: category,
  icon: `/static/icons/${categories[category].icon}.svg`,
  color: categories[category].color,
  files: data.filter(file => file.category === category).map(card => card.title)
}));

export { categories, categoriesInfo };
export default data;
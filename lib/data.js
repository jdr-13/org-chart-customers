// Customer data structure - add new customers here following the same format

export const customers = {
  chime: {
    name: 'Chime',
    division: 'Banking Products Division',
    logo: 'C',
    logoColor: 'linear-gradient(135deg, #00d09c 0%, #00b386 100%)',
    
    // Primary contacts (highlighted at top)
    primaryContacts: [
      {
        name: 'Katherine Cheng',
        role: 'PM, Spending Intelligence',
        email: 'katherine@chime.com',
        linkedin: 'https://www.linkedin.com/in/katherine-cheng-82246258'
      },
      {
        name: 'Ben McClaughry',
        role: 'Business Operations',
        email: 'ben.mcclaughry@chime.com',
        linkedin: 'https://www.linkedin.com/in/benmcclaughry'
      }
    ],

    // Founders/Executive Leadership
    founders: [
      {
        name: 'Chris Britt',
        role: 'CEO & Co-Founder',
        email: 'cb@chime.com',
        linkedin: 'https://www.linkedin.com/in/cbritt',
        reportsCount: 10,
        expandKey: 'ceo'
      },
      {
        name: 'Ryan King',
        role: 'Co-Founder & Interim CPO',
        email: 'rk@chime.com',
        linkedin: 'https://www.linkedin.com/in/ryanaking',
        reportsCount: 1,
        expandKey: 'ryan',
        isInterim: true
      }
    ],

    // C-Suite
    cSuite: [
      { name: 'Mark Troughton', role: 'President', linkedin: 'https://www.linkedin.com/in/matroughton' },
      { name: 'Janelle Sallenave', role: 'COO', linkedin: 'https://www.linkedin.com/in/janelle-sallenave-489416' },
      { name: 'Matt Newcomb', role: 'CFO', linkedin: 'https://www.linkedin.com/in/matthewsnewcomb' },
      { name: 'Jeff Currier', role: 'CTO', linkedin: 'https://www.linkedin.com/in/jeff-currier' },
      { name: 'Vineet Mehra', role: 'CGO', linkedin: 'https://www.linkedin.com/in/vineetmehra1' },
      { name: 'Sarah Wagener', role: 'CPO', linkedin: 'https://www.linkedin.com/in/sarah-collins-wagener' },
      { name: 'Adam Frankel', role: 'General Counsel', linkedin: 'https://www.linkedin.com/in/adam-spencer-frankel-2ba72616' },
      { name: 'Xiongwen Rui', role: 'CRO', linkedin: 'https://www.linkedin.com/in/xiongwenrui' },
      { name: 'Jennifer Kuperman', role: 'Corp Affairs', linkedin: 'https://www.linkedin.com/in/jenniferkuperman' },
      { name: 'Barkha Saxena', role: 'CDO', linkedin: 'https://www.linkedin.com/in/barkhasaxena' },
    ],

    // Org Chart Structure
    orgChart: {
      // Product Organization (reports to Interim CPO)
      productOrg: {
        label: 'Product Organization (Reports to Interim CPO)',
        person: {
          name: 'Philip McDonnell',
          role: 'VP Product (Spending)',
          email: 'philip.mcdonnell@chime.com',
          linkedin: 'https://www.linkedin.com/in/philipmcdonnell',
          reportsCount: 4,
          expandKey: 'philip'
        },
        // Directors under Product Org
        directors: [
          {
            name: 'Brenden',
            role: 'GPM, Spend Better',
            email: '',
            linkedin: '',
            reportsCount: 5,
            expandKey: 'brenden'
          },
          {
            name: 'Baishi Wu',
            role: 'GPM, Cards',
            email: 'bwu@chime.com',
            linkedin: 'https://www.linkedin.com/in/baishi',
            reportsCount: 4,
            expandKey: 'baishi'
          },
          {
            name: 'Will Wix',
            role: 'Product Operations',
            email: 'will@chimebank.com',
            linkedin: 'https://www.linkedin.com/in/will-wix-5846b68b',
            reportsCount: 1,
            expandKey: 'will'
          },
          {
            name: 'Michael Barrett',
            role: 'Engineering Lead',
            email: 'michael.barrett@chime.com',
            linkedin: 'https://www.linkedin.com/in/michaelebarrett',
            reportsCount: 0
          }
        ],
        // Squads under Brenden (Spend Better)
        spendBetterSquads: [
          { squad: 'Spending Intelligence', pm: 'Katherine Cheng', pmLinkedin: 'https://www.linkedin.com/in/katherine-cheng-82246258', em: 'Xianxin Huang', emLinkedin: 'https://www.linkedin.com/in/xianxin-huang-22673229', isPrimary: true, email: 'katherine@chime.com' },
          { squad: 'Deals & Offers', pm: 'William Stern', pmLinkedin: 'https://www.linkedin.com/in/william-stern-22bb9a84', em: 'Bhavya Kashyap', emLinkedin: 'https://www.linkedin.com/in/bhavya-kashyap' },
          { squad: 'Save & Invest', pm: 'Mitch Ginsburg', pmLinkedin: 'https://www.linkedin.com/in/mginsburg', em: 'Ziad Abdo', emLinkedin: 'https://www.linkedin.com/in/ziadabdo' },
          { squad: 'Money Out & Credit', pm: 'Cliff Canan', pmLinkedin: 'https://www.linkedin.com/in/cliffcanan' },
          { squad: 'Multiplay', pm: 'Dilip Ramacha' },
        ],
        // Squads under Baishi (Cards)
        cardsSquads: [
          { squad: 'Cards-Success', pm: 'Adyant Kanakamedala', pmLinkedin: 'https://www.linkedin.com/in/adyantvk', em: 'Joshua Sacks', emLinkedin: 'https://www.linkedin.com/in/jmsacks' },
          { squad: 'Cards Experience', pm: 'Martin Williams', pmLinkedin: 'https://www.linkedin.com/in/martinjwilliams1', em: 'Joshua Sacks', emLinkedin: 'https://www.linkedin.com/in/jmsacks' },
          { squad: 'Unsecured', pm: 'Anuj Khemka' },
          { squad: 'Secured', pm: 'Allison Iakovlev', pmLinkedin: 'https://www.linkedin.com/in/allison-iakovlev' },
        ],
        // Business Ops under Will Wix
        businessOps: {
          name: 'Ben McClaughry',
          role: 'Business Operations',
          email: 'ben.mcclaughry@chime.com',
          linkedin: 'https://www.linkedin.com/in/benmcclaughry',
          isPrimary: true
        }
      }
    },

    // Reporting lines
    reportingLines: [
      {
        label: 'PRODUCT LINE',
        line: 'Chris Britt → Ryan King (Interim CPO) → Philip McDonnell → Brenden → <strong>Katherine Cheng</strong>',
        color: '#166534',
        bgColor: '#f0fdf4',
        borderColor: '#bbf7d0'
      },
      {
        label: 'BUSINESS OPS LINE',
        line: 'Philip McDonnell → Will Wix → <strong>Ben McClaughry</strong>',
        color: '#1e40af',
        bgColor: '#eff6ff',
        borderColor: '#bfdbfe'
      }
    ],

    // All contacts
    contacts: [
  // C-Suite
  { name: 'Chris Britt', role: 'CEO & Co-Founder', team: 'Executive Leadership', email: 'cb@chime.com', linkedin: 'https://www.linkedin.com/in/cbritt', cardswitcher: false },
  { name: 'Ryan King', role: 'Co-Founder & Interim CPO', team: 'Executive Leadership', email: 'rk@chime.com', linkedin: 'https://www.linkedin.com/in/ryanaking', cardswitcher: false },
  { name: 'Mark Troughton', role: 'President', team: 'Executive Leadership', email: 'mtroughton@chime.com', linkedin: 'https://www.linkedin.com/in/matroughton', cardswitcher: false },
  { name: 'Janelle Sallenave', role: 'COO', team: 'Executive Leadership', email: 'janelle.sallenave@chime.com', linkedin: 'https://www.linkedin.com/in/janelle-sallenave-489416', cardswitcher: false },
  { name: 'Matt Newcomb', role: 'CFO', team: 'Executive Leadership', email: 'matt@chimebank.com', linkedin: 'https://www.linkedin.com/in/matthewsnewcomb', cardswitcher: false },
  { name: 'Jeff Currier', role: 'CTO', team: 'Executive Leadership', email: 'jcurrier@chime.com', linkedin: 'https://www.linkedin.com/in/jeff-currier', cardswitcher: false },
  { name: 'Vineet Mehra', role: 'CGO', team: 'Executive Leadership', email: 'vineet.mehra@chime.com', linkedin: 'https://www.linkedin.com/in/vineetmehra1', cardswitcher: false },
  { name: 'Sarah Wagener', role: 'Chief People Officer', team: 'Executive Leadership', email: 'sarah.wagener@chime.com', linkedin: 'https://www.linkedin.com/in/sarah-collins-wagener', cardswitcher: false },
  { name: 'Adam Frankel', role: 'General Counsel', team: 'Executive Leadership', email: 'adam.frankel@chime.com', linkedin: 'https://www.linkedin.com/in/adam-spencer-frankel-2ba72616', cardswitcher: false },
  { name: 'Xiongwen Rui', role: 'Chief Risk Officer', team: 'Executive Leadership', email: 'xiongwen.rui@chime.com', linkedin: 'https://www.linkedin.com/in/xiongwenrui', cardswitcher: false },
  { name: 'Jennifer Kuperman', role: 'Chief Corporate Affairs', team: 'Executive Leadership', email: 'jennifer.kuperman@chime.com', linkedin: 'https://www.linkedin.com/in/jenniferkuperman', cardswitcher: false },
  { name: 'Barkha Saxena', role: 'Chief Data Officer', team: 'Executive Leadership', email: 'barkha.saxena@chime.com', linkedin: 'https://www.linkedin.com/in/barkhasaxena', cardswitcher: false },
  
  // Banking Products Leadership
  { name: 'Philip McDonnell', role: 'VP Product (Spending)', team: 'Banking Products', email: 'philip.mcdonnell@chime.com', linkedin: 'https://www.linkedin.com/in/philipmcdonnell', cardswitcher: true },
  { name: 'Michael Barrett', role: 'Engineering Lead', team: 'Banking Products', email: 'michael.barrett@chime.com', linkedin: 'https://www.linkedin.com/in/michaelebarrett', cardswitcher: false },
  
  // Functional Leads
  { name: 'Will Wix', role: 'Product Operations', team: 'Product Operations', email: 'will@chimebank.com', linkedin: 'https://www.linkedin.com/in/will-wix-5846b68b', cardswitcher: true },
  { name: 'Priya Raghuram', role: 'Engineering Management', team: 'Engineering', email: 'pr@chimebank.com', linkedin: 'https://www.linkedin.com/in/the-priya-raghuram', cardswitcher: false },
  { name: 'Jake Ford', role: 'OMX', team: 'Banking Products', email: 'jake.ford@chime.com', linkedin: 'https://www.linkedin.com/in/jacobford44', cardswitcher: false },
  { name: 'Caylee Betts', role: 'Design', team: 'Design', email: 'caylee.betts@chime.com', linkedin: 'https://www.linkedin.com/in/cayleebetts', cardswitcher: false },
  { name: 'Jon Moffitt', role: 'Marketing', team: 'Marketing', email: 'jon.moffitt@chime.com', linkedin: 'https://www.linkedin.com/in/jonmoffitt', cardswitcher: false },
  { name: 'Jeannie DeLoach', role: 'User Research', team: 'Design', email: 'jeannie.deloach@chime.com', linkedin: 'https://www.linkedin.com/in/jeandeloach', cardswitcher: false },
  { name: 'Jaclyn Dinh', role: 'Analytics', team: 'Analytics', email: 'jaclyn.dinh@chime.com', linkedin: 'https://www.linkedin.com/in/jchaunguyen', cardswitcher: false },
  
  // Directors
  { name: 'Brenden', role: 'GPM/PM Director, Spend Better', team: 'Spend Better', email: '', linkedin: '', cardswitcher: true },
  { name: 'Baishi Wu', role: 'GPM/PM Director, Cards', team: 'Cards', email: 'bwu@chime.com', linkedin: 'https://www.linkedin.com/in/baishi', cardswitcher: false },
  
  // Spend Better PMs
  { name: 'Katherine Cheng', role: 'PM, Spending Intelligence', team: 'Spend Better', email: 'katherine@chime.com', linkedin: 'https://www.linkedin.com/in/katherine-cheng-82246258', cardswitcher: true, isPrimary: true },
  { name: 'William Stern', role: 'PM, Deals & Offers', team: 'Spend Better', email: 'william.stern@chime.com', linkedin: 'https://www.linkedin.com/in/william-stern-22bb9a84', cardswitcher: false },
  { name: 'Mitch Ginsburg', role: 'PM, Save & Invest', team: 'Spend Better', email: 'mitch.ginsburg@chime.com', linkedin: 'https://www.linkedin.com/in/mginsburg', cardswitcher: false },
  { name: 'Cliff Canan', role: 'PM, Money Out & Credit', team: 'Spend Better', email: 'cliff.canan@chime.com', linkedin: 'https://www.linkedin.com/in/cliffcanan', cardswitcher: false },
  { name: 'Dilip Ramacha', role: 'PM, Multiplay', team: 'Spend Better', email: '', linkedin: '', cardswitcher: false },
  
  // Cards PMs
  { name: 'Adyant Kanakamedala', role: 'PM, Cards-Success', team: 'Cards', email: 'adyant.kanakamedala@chime.com', linkedin: 'https://www.linkedin.com/in/adyantvk', cardswitcher: false },
  { name: 'Martin Williams', role: 'PM, Cards Experience', team: 'Cards', email: 'martin.williams@chime.com', linkedin: 'https://www.linkedin.com/in/martinjwilliams1', cardswitcher: false },
  { name: 'Anuj Khemka', role: 'PM, Unsecured', team: 'Cards', email: 'anuj.khemka@chime.com', linkedin: '', cardswitcher: false },
  { name: 'Allison Iakovlev', role: 'PM, Secured', team: 'Cards', email: '', linkedin: 'https://www.linkedin.com/in/allison-iakovlev', cardswitcher: false },
  
  // Engineering Managers
  { name: 'Xianxin Huang', role: 'EM, Spending Intelligence', team: 'Spend Better', email: 'xianxin.huang@chime.com', linkedin: 'https://www.linkedin.com/in/xianxin-huang-22673229', cardswitcher: true },
  { name: 'Bhavya Kashyap', role: 'EM, Deals & Offers', team: 'Spend Better', email: 'bhavya.kashyap@chime.com', linkedin: 'https://www.linkedin.com/in/bhavya-kashyap', cardswitcher: false },
  { name: 'Ziad Abdo', role: 'EM, Save & Invest', team: 'Spend Better', email: 'zabdo@chime.com', linkedin: 'https://www.linkedin.com/in/ziadabdo', cardswitcher: true },
  { name: 'Joshua Sacks', role: 'EM, Cards', team: 'Cards', email: 'joshua.sacks@chime.com', linkedin: 'https://www.linkedin.com/in/jmsacks', cardswitcher: false },
  
  // Business Ops & Other Contacts
  { name: 'Ben McClaughry', role: 'Business Operations', team: 'Product Operations', email: 'ben.mcclaughry@chime.com', linkedin: 'https://www.linkedin.com/in/benmcclaughry', cardswitcher: true, isPrimary: true },
  { name: 'Jon Fulton', role: 'Product/UX Lead', team: 'Product', email: 'jfulton@chime.com', linkedin: 'https://www.linkedin.com/in/jonfultonsfo', cardswitcher: true },
  { name: 'Tom Connors', role: 'Engineer', team: 'Engineering', email: 'tom.connors@chime.com', linkedin: 'https://www.linkedin.com/in/tom-connors-3967921', cardswitcher: true },
  { name: 'Eliza Zhu', role: 'Security Risk Governance', team: 'Compliance', email: 'eliza.zhu@chime.com', linkedin: 'https://www.linkedin.com/in/eliza-zhu', cardswitcher: true },
    ]
  },

  cashapp: {
    name: 'Cash App',
    division: 'Square',
    logo: 'CA',
    logoColor: 'linear-gradient(135deg, #00d832 0%, #00b82a 100%)',
    
    // Primary contacts (highlighted at top)
    primaryContacts: [
      {
        name: 'Michael Dua',
        role: 'Head of Product Cash App Card (Champion)',
        email: 'michaelduan@squareup.com',
        linkedin: 'https://www.linkedin.com/in/michael-duane-20985457'
      },
      {
        name: 'Zainab Lateef',
        role: 'Product Manager (Building Feature)',
        email: 'zainab@squareup.com',
        linkedin: 'https://www.linkedin.com/in/zainablateefi'
      },
      {
        name: 'Kyle Woolstenhulme',
        role: 'Business Partnerships (Primary)',
        email: 'kylewoolstenhulme@squareup.com',
        linkedin: 'https://www.linkedin.com/in/kyle-woolstenhulme'
      }
    ],

    // Founders/Executive Leadership - simplified structure since we don't have full org chart
    founders: [],

    // C-Suite - empty for now, can be added later
    cSuite: [],

    // Org Chart Structure - simplified since we don't have full hierarchy
    orgChart: {
      productOrg: {
        label: 'Product Organization',
        person: null,
        directors: [],
        spendBetterSquads: [],
        cardsSquads: [],
        businessOps: null
      }
    },

    // Reporting lines - can be added when org structure is known
    reportingLines: [],

    // All contacts from the spreadsheet
    contacts: [
      { name: 'Michael Dua', role: 'Head of Product Cash App Card (Champion)', team: 'Product', email: 'michaelduan@squareup.com', linkedin: 'https://www.linkedin.com/in/michael-duane-20985457', cardswitcher: true, isPrimary: true },
      { name: 'Zainab Lateef', role: 'Product Manager (Building Feature)', team: 'Product', email: 'zainab@squareup.com', linkedin: 'https://www.linkedin.com/in/zainablateefi', cardswitcher: true, isPrimary: true },
      { name: 'Kyle Woolstenhulme', role: 'Business Partnerships (Primary)', team: 'Partnerships', email: 'kylewoolstenhulme@squareup.com', linkedin: 'https://www.linkedin.com/in/kyle-woolstenhulme', cardswitcher: true, isPrimary: true },
      { name: 'Janette Chin', role: 'Strategic Payments Partnerships', team: 'Partnerships', email: 'janette@squareup.com', linkedin: 'http://www.linkedin.com/in/janette-chin-39b3ba4', cardswitcher: false },
      { name: 'Andrew Steel', role: 'Product Lead Developer Platform', team: 'Product', email: 'asteele@squareup.com', linkedin: 'https://www.linkedin.com/in/andrewleesteele', cardswitcher: false },
      { name: 'Ricky Graziosi', role: 'Product Lead', team: 'Product', email: 'rgraziosi@squareup.com', linkedin: 'https://www.linkedin.com/in/rgraziosi/', cardswitcher: false },
      { name: 'Bryan Guo', role: 'Product', team: 'Product', email: 'guo@squareup.com', linkedin: 'https://www.linkedin.com/in/bryan-guo-5b904713', cardswitcher: false },
      { name: 'Bujar Tagani', role: 'Software Engineer - SDK Lead', team: 'Engineering', email: 'bujar@squareup.com', linkedin: 'https://www.linkedin.com/in/pranay-malla-bujar-barua-9510b51a5', cardswitcher: false },
      { name: 'Ethan Lee', role: 'Member of Technical Staff', team: 'Engineering', email: 'ethan@squareup.com', linkedin: 'https://www.linkedin.com/in/ethanrosenthal', cardswitcher: false },
      { name: 'Conner Monsees', role: 'Senior Product Designer, Cash App Card', team: 'Design', email: 'cmonsees@squareup.com', linkedin: 'https://www.linkedin.com/in/conner-monsees-93573894', cardswitcher: false },
      { name: 'Linn Ran', role: 'Marketing Assistant in China', team: 'Marketing', email: 'kunlin@squareup.com', linkedin: 'https://www.linkedin.com/in/linn-ran-a0132965', cardswitcher: false },
      { name: 'Sonali Upadhyay', role: 'Senior QA Engineer', team: 'Engineering', email: 'supadhye@squareup.com', linkedin: 'https://www.linkedin.com/in/sonali-upadhye-160b45245', cardswitcher: false },
      { name: 'Robert Feasley', role: 'Principal Content Designer', team: 'Design', email: 'robertfeasley@squareup.com', linkedin: 'https://www.linkedin.com/in/robertfeasley', cardswitcher: false },
      { name: 'John Docal', role: 'PMM, Card', team: 'Product', email: 'johndocal@squareup.com', linkedin: 'https://www.linkedin.com/in/docal', cardswitcher: false },
      { name: 'Lauren Copland', role: 'Cross-Block Ecosystem Partnerships Lead', team: 'Partnerships', email: 'lcopland@squareup.com', linkedin: 'http://www.linkedin.com/in/lauren-copland-89294b4', cardswitcher: false },
      { name: 'Celeste Jackson', role: 'Banking Product Attorney', team: 'Legal', email: 'celestej@squareup.com', linkedin: 'https://linkedin.com/in/celeste-jackson-883b2621', cardswitcher: false },
      { name: 'Omer Iqbal', role: 'Designer in Residence', team: 'Design', email: 'oiqbal@squareup.com', linkedin: '', cardswitcher: false },
      { name: 'Patrick Delashaw', role: 'Product', team: 'Product', email: 'pdelashaw@squareup.com', linkedin: '', cardswitcher: false },
      { name: 'Carrie Zhang', role: 'Product', team: 'Product', email: 'carrie@squareup.com', linkedin: 'https://www.linkedin.com/in/kelin-carolyn-zhang-84725521', cardswitcher: false },
    ]
  }
  
  // Add more customers here following the same structure:
  // Example:
  // customer2: {
  //   name: 'Customer Name',
  //   division: 'Division Name',
  //   logo: 'C',
  //   logoColor: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
  //   primaryContacts: [ ... ],
  //   founders: [ ... ],
  //   cSuite: [ ... ],
  //   orgChart: { ... },
  //   reportingLines: [ ... ],
  //   contacts: [ ... ]
  // },
};

// Helper function to get customer data
export function getCustomer(customerId) {
  return customers[customerId] || customers.chime;
}

// Helper function to get all customer IDs
export function getCustomerIds() {
  return Object.keys(customers);
}

// CSV export function
export function downloadCSV(data, filename = 'contacts.csv') {
  const headers = ['Name', 'Role', 'Team', 'Email', 'LinkedIn', 'CardSwitcher', 'Primary Contact'];
  const rows = data.map(p => [
    p.name,
    p.role,
    p.team,
    p.email || '',
    p.linkedin || '',
    p.cardswitcher ? 'Yes' : 'No',
    p.isPrimary ? 'Yes' : 'No'
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${(cell || '').replace(/"/g, '""')}"`).join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

// Legacy exports for backward compatibility (can be removed later)
export const contacts = customers.chime.contacts;
export const cSuite = customers.chime.cSuite;
export const squads = {
  spendBetter: customers.chime.orgChart.productOrg.spendBetterSquads,
  cards: customers.chime.orgChart.productOrg.cardsSquads
};

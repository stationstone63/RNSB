/* ============================================================
   DATA
============================================================ */
const branches = [
  { code: "010", name: "PARABAZAR BRANCH" },
  { code: "011", name: "UDYOGNAGAR BRANCH" },
  { code: "012", name: "KEVADAWADI-S.V.P.ROAD BR" },
  { code: "013", name: "JUNCTION PLOT BRANCH" },
  { code: "014", name: "BEDIPARA BRANCH" },
  { code: "015", name: "YAGNIK ROAD BRANCH" },
  { code: "016", name: "MOBILE BRANCH" },
  { code: "017", name: "SORATHIYAWADI BRANCH" },
  { code: "018", name: "MAVDI PLOT BRANCH" },
  { code: "019", name: "BHUPENDRA ROAD BRANCH" },
  { code: "020", name: "KLV ROAD BRANCH" },
  { code: "021", name: "RAIYA ROAD BRANCH" },
  { code: "022", name: "150 FEET RING ROAD BRANCH" },
  { code: "023", name: "KOTHARIA MAIN ROAD BRANCH" },
  { code: "041", name: "WANKANER BRANCH" },
  { code: "042", name: "JETPUR BRANCH" },
  { code: "043", name: "DHORAJI BRANCH" },
  { code: "044", name: "UPLETA BRANCH" },
  { code: "045", name: "MORBI BRANCH" },
  { code: "046", name: "PADADHARI BRANCH" },
  { code: "047", name: "JASDAN BRANCH" },
  { code: "048", name: "AHMEDABAD BRANCH" },
  { code: "049", name: "BHUJ BRANCH" },
  { code: "050", name: "SURENDRANAGAR BRANCH" },
  { code: "051", name: "SURAT BRANCH" },
  { code: "052", name: "KALBADEVI ROAD BRANCH" },
  { code: "053", name: "JUNAGADH BRANCH" },
  { code: "056", name: "GANDHIDHAM BRANCH" },
  { code: "057", name: "JAMNAGAR BRANCH" },
  { code: "058", name: "HALVAD BRANCH" },
  { code: "059", name: "VADODARA BRANCH" },
  { code: "060", name: "GHATKOPAR BRANCH" },
  { code: "061", name: "BAPUNAGAR BRANCH" },
  { code: "062", name: "GANDHINAGAR BRANCH" },
  { code: "063", name: "SURAT VARACHA BRANCH" },
  { code: "064", name: "MALAD BRANCH" },
  { code: "065", name: "NAGPUR BRANCH" },
  { code: "066", name: "BHAVNAGAR BRANCH" },
];

const codeAvatars = {
  HCASHDEP: { icon: "💰", color: "#0a5c38", bg: "rgba(15,124,74,0.25)" },
  HCASHWD: { icon: "💸", color: "#8b1a0e", bg: "rgba(192,41,26,0.22)" },
  HAFI: { icon: "🔍", color: "#7a3800", bg: "rgba(194,95,10,0.22)" },
  HPR: { icon: "📊", color: "#4a2580", bg: "rgba(100,50,200,0.22)" },
  GSTTDR: { icon: "🧾", color: "#073d5a", bg: "rgba(10,95,138,0.22)" },
  CASHRETR: { icon: "📋", color: "#5c3010", bg: "rgba(100,60,20,0.22)" },
  HTM: { icon: "🔁", color: "#7a2c00", bg: "rgba(180,70,10,0.22)" },
  MVCD: { icon: "🔐", color: "#05453d", bg: "rgba(10,100,90,0.22)" },
};

const cashierCodesMeta = [
  {
    code: "HCASHDEP",
    pill: "pill-green",
    icon: "fa-money-bill-transfer",
    emoji: "💰",
    title: "Cash Deposit",
    subtitle: "Credit cash to customer account",
  },
  {
    code: "HCASHWD",
    pill: "pill-red",
    icon: "fa-money-bill-wave",
    emoji: "💸",
    title: "Cash Withdrawal",
    subtitle: "Debit cash via cheque",
  },
  {
    code: "HAFI",
    pill: "pill-amber",
    icon: "fa-magnifying-glass-chart",
    emoji: "🔍",
    title: "Unposted Entry Check",
    subtitle: "View unauthorized transactions",
  },
  {
    code: "HPR",
    pill: "pill-purple",
    icon: "fa-chart-bar",
    emoji: "📊",
    title: "Report Viewer",
    subtitle: "View all generated reports",
  },
  {
    code: "GSTTDR",
    pill: "pill-blue",
    icon: "fa-file-invoice-dollar",
    emoji: "🧾",
    title: "Teller Cash Summary",
    subtitle: "Denomination-wise cash report",
  },
  {
    code: "CASHRETR",
    pill: "pill-brown",
    icon: "fa-file-lines",
    emoji: "📋",
    title: "Cash Retrieval Reports",
    subtitle: "Patrak-10 & Personal Report",
  },
  {
    code: "HTM",
    pill: "pill-orange",
    icon: "fa-right-left",
    emoji: "🔁",
    title: "Cash Transfer",
    subtitle: "Head Cashier to Teller transfer",
  },
  {
    code: "MVCD",
    pill: "pill-teal",
    icon: "fa-vault",
    emoji: "🔐",
    title: "Vault Open / Close",
    subtitle: "Day start and end vault management",
  },
];

const chatbotFlows = {
  HCASHDEP: {
    title: "Cash Deposit",
    pill: "pill-green",
    messages: [
      {
        type: "text",
        text: "Hello 👋 I'm your Senior Assistant. I'll guide you through <strong>HCASHDEP – Cash Deposit</strong> step by step.",
      },
      {
        type: "text",
        text: "Before deposit, always check account status 🔎",
      },
      { type: "text", text: "Check if account is ACTIVE ✅" },
      {
        type: "text",
        text: "If account is INACTIVE ❌\nYou must first do a small deposit transaction to activate it.",
      },
      {
        type: "text",
        text: "After activation, you can continue normal transactions.",
      },
      {
        type: "text",
        text: "If account is DORMANT ⚠️\nCustomer must complete KYC update first.",
      },
      {
        type: "text",
        text: "Without KYC update, transaction should not proceed.",
      },
      { type: "text", text: "Let's begin. Ready? Here we go 🚀" },
      {
        type: "step",
        n: 1,
        text: "Type <code>HCASHDEP</code> in the Finacle keyword bar and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "In the <strong>Function</strong> field → select <code>Add</code>.",
      },
      {
        type: "step",
        n: 3,
        text: "In <strong>Transaction Type</strong> → select <code>Cash</code>. Sub-type → <code>Normal Receipt</code>.",
      },
      {
        type: "step",
        n: 4,
        text: "Click the <code>Go</code> button to proceed to the entry screen.",
      },
      {
        type: "step",
        n: 5,
        text: "Select the <strong>Credit</strong> 🔵 radio button.",
      },
      {
        type: "step",
        n: 6,
        text: "Enter the <strong>15-digit account number</strong>.<br>Format: <code>BranchCode / TypeCode / AccountNo</code>",
      },
      {
        type: "info",
        text: "📌 Example: <code>21 / 31 / 81189</code>\n→ 21 = Branch · 31 = Savings · 81189 = Account No.",
      },
      {
        type: "step",
        n: 7,
        text: "Press <strong>Tab</strong> — system shows account holder name. <strong>Verify it</strong> with the depositor. ✅",
      },
      {
        type: "step",
        n: 8,
        text: "Enter the <strong>Amount</strong> to be deposited.",
      },
      {
        type: "step",
        n: 9,
        text: "<strong>Transaction Particular Code</strong> → enter <code>2</code>.",
      },
      {
        type: "step",
        n: 10,
        text: "Click <strong>Denominations</strong> and enter bundle + loose notes accurately.",
      },
      {
        type: "step",
        n: 11,
        text: "Amount <strong>> ₹50,000</strong> → <code>Save Only</code> + call supervisor.<br>Amount <strong>≤ ₹50,000</strong> → <code>Direct Post</code>.",
      },
      {
        type: "warn",
        text: "⚠️ Amounts above ₹50,000 MUST be saved and authorized by supervisor. Never direct post large amounts.",
      },
      {
        type: "done",
        text: "✅ Cash Deposit complete! Customer account credited. Great work 🙌",
      },
    ],
  },
  HCASHWD: {
    title: "Cash Withdrawal",
    pill: "pill-red",
    messages: [
      {
        type: "text",
        text: "Hello 👋 I'll guide you through <strong>HCASHWD – Cash Withdrawal</strong>. Have the customer's cheque ready 📋",
      },
      {
        type: "text",
        text: "Before withdrawal, always verify account details carefully 🔎",
      },
      { type: "step", n: 1, text: "Account must be ACTIVE ✅" },
      {
        type: "text",
        text: "If account is INACTIVE ❌\nOnly deposit allowed to activate account.",
      },
      {
        type: "text",
        text: "If account is DORMANT ⚠️\nCustomer must complete KYC before any withdrawal.",
      },
      { type: "step", n: 2, text: "Check Lien Amount 🔐" },
      {
        type: "text",
        text: "If Account Balance = 2000\nAnd Lien Amount = 1500\nAvailable Balance = 500 only.",
      },
      {
        type: "text",
        text: "Customer cannot withdraw more than available balance after lien deduction.",
      },
      {
        type: "text",
        text: "Always verify available balance before posting transaction.",
      },
      {
        type: "step",
        n: 1,
        text: "Type <code>HCASHWD</code> and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "<strong>Function</strong> → <code>Add</code>.",
      },
      {
        type: "step",
        n: 3,
        text: "Select <strong>Debit</strong> 🔴 radio button.",
      },
      {
        type: "step",
        n: 4,
        text: "Enter the <strong>15-digit account number</strong>.",
      },
      {
        type: "step",
        n: 5,
        text: "Press Tab — verify name shown matches the <strong>cheque name</strong>. ✅",
      },
      {
        type: "step",
        n: 6,
        text: "<strong>Transaction Type</strong> → <code>CHQ</code> (Cheque).",
      },
      {
        type: "step",
        n: 7,
        text: "Enter <strong>Cheque Date</strong>. Shortcut: <code>Ctrl + X</code> for today's date 💡",
      },
      {
        type: "step",
        n: 8,
        text: "Enter <strong>Cheque Number</strong> exactly as printed on the cheque.",
      },
      {
        type: "info",
        text: "📌 Always verify: cheque number, date, amount, and signature before proceeding.",
      },
      {
        type: "step",
        n: 9,
        text: "Enter the <strong>Amount</strong> as written on cheque.",
      },
      {
        type: "step",
        n: 10,
        text: "<strong>Particular Code</strong> → <code>1</code>.",
      },
      {
        type: "step",
        n: 11,
        text: "Amount <strong>> ₹50,000</strong> → enter <strong>Token Number</strong> in <code>Remarks</code> field.",
      },
      {
        type: "step",
        n: 12,
        text: "Click <strong>Denominations</strong> and enter denomination details.",
      },
      {
        type: "step",
        n: 13,
        text: "Amount <strong>> ₹50,000</strong> → <code>Save Only</code>. Else → <code>Direct Post</code>.",
      },
      {
        type: "warn",
        text: "⚠️ Token number is mandatory in Remarks for amounts above ₹50,000.",
      },
      {
        type: "done",
        text: "✅ Cash Withdrawal complete! Cheque processed successfully 🏁",
      },
    ],
  },
  HAFI: {
    title: "Unposted Entry Check",
    pill: "pill-amber",
    messages: [
      {
        type: "text",
        text: "Hello 👋 I'll walk you through <strong>HAFI</strong> — your daily audit check for unposted entries 🔍",
      },
      {
        type: "text",
        text: "Always run HAFI before GSTTDR. Think of it as your safety net.",
      },
      {
        type: "step",
        n: 1,
        text: "Type <code>HAFI</code> and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "Screen shows all <strong>saved but not yet posted</strong> entries.",
      },
      {
        type: "step",
        n: 3,
        text: "Filter by your <strong>Employee User ID</strong> to see only your transactions.",
      },
      {
        type: "info",
        text: "📌 Any entry visible here is NOT yet posted — supervisor hasn't authorized it yet.",
      },
      {
        type: "step",
        n: 4,
        text: "If unposted entries exist → contact supervisor immediately to authorize them.",
      },
      {
        type: "step",
        n: 5,
        text: "If HAFI is <strong>empty</strong> → all entries posted ✅ Proceed to GSTTDR.",
      },
      {
        type: "warn",
        text: "⚠️ Never run GSTTDR or close vault if unposted entries exist. It will cause a cash mismatch.",
      },
      {
        type: "done",
        text: "✅ HAFI check complete! Clear entries first, then proceed. 🙌",
      },
    ],
  },
  HPR: {
    title: "Report Viewer",
    pill: "pill-purple",
    messages: [
      {
        type: "text",
        text: "Hello 👋 Let me explain <strong>HPR</strong> — the central Report Viewer in Finacle 📊",
      },
      {
        type: "step",
        n: 1,
        text: "Type <code>HPR</code> and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "HPR shows your <strong>report queue</strong>. All recently generated reports appear here.",
      },
      {
        type: "step",
        n: 3,
        text: "After generating any report (GSTTDR, CASHRETR), open HPR to view output.",
      },
      {
        type: "step",
        n: 4,
        text: "Select the report from the list. Latest reports appear at the top.",
      },
      {
        type: "step",
        n: 5,
        text: "View denominations, transaction lists, or daily summaries. Print from here 🖨️",
      },
      {
        type: "info",
        text: "📌 HPR stores reports for the current session. If a report is missing — regenerate it.",
      },
      {
        type: "done",
        text: "✅ That's HPR! Simple but essential for all your banking report views 📋",
      },
    ],
  },
  GSTTDR: {
    title: "Teller Cash Summary",
    pill: "pill-blue",
    messages: [
      {
        type: "text",
        text: "Hello 👋 I'll guide you through <strong>GSTTDR</strong> — your denomination-wise cash summary 📊",
      },
      {
        type: "text",
        text: "Run this after all transactions and after HAFI is clear.",
      },
      {
        type: "step",
        n: 1,
        text: "Type <code>GSTTDR</code> and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "<strong>Report</strong> type → select <code>M</code> (Teller Denomination Report).",
      },
      {
        type: "step",
        n: 3,
        text: "Choose <code>Teller Wise</code> option.",
      },
      {
        type: "step",
        n: 4,
        text: "Enter your <strong>Employee User ID</strong>.",
      },
      {
        type: "step",
        n: 5,
        text: "Click <code>Generate</code> — wait a few seconds ⏳",
      },
      {
        type: "step",
        n: 6,
        text: "Open <code>HPR</code> to view the generated denomination report.",
      },
      {
        type: "step",
        n: 7,
        text: "💰 <strong>Physical cash match</strong> — count your cash and match denomination by denomination with GSTTDR.",
      },
      {
        type: "warn",
        text: "⚠️ Any mismatch between physical cash and GSTTDR must be resolved BEFORE vault close.",
      },
      {
        type: "done",
        text: "✅ GSTTDR complete! Cash matched and ready for vault close 🔒",
      },
    ],
  },
  CASHRETR: {
    title: "Cash Retrieval Reports",
    pill: "pill-brown",
    messages: [
      {
        type: "text",
        text: "Hello 👋 I'll explain <strong>CASHRETR</strong> — generates your two key end-of-day reports 📄",
      },
      {
        type: "step",
        n: 1,
        text: "Type <code>CASHRETR</code> and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "<strong>Function</strong> → <code>Report</code>.",
      },
      {
        type: "text",
        text: "<strong>📋 Patrak-10 (Report-7):</strong> Official daily cash summary for branch records.",
      },
      {
        type: "step",
        n: 3,
        text: "Report To → <code>7</code> · Enter <strong>SOL ID</strong> twice · Enter Date · Generate.",
      },
      {
        type: "step",
        n: 4,
        text: "Open <code>HPR</code> to view Patrak-10. This is part of your branch's official records.",
      },
      {
        type: "text",
        text: "<strong>📋 Personal Transaction Report (Report-3):</strong> All your individual transactions.",
      },
      {
        type: "step",
        n: 5,
        text: "Report To → <code>3</code> · Select Debit/Credit/Both · Enter Date → Generate.",
      },
      {
        type: "info",
        text: "📌 Report-3 is your personal record. Keep it for daily EOD verification.",
      },
      {
        type: "warn",
        text: "⚠️ Always generate both reports BEFORE proceeding with MVCD vault close.",
      },
      {
        type: "done",
        text: "✅ CASHRETR reports done! Ready to close vault via MVCD 🔐",
      },
    ],
  },
  HTM: {
    title: "Cash Transfer",
    pill: "pill-orange",
    messages: [
      {
        type: "text",
        text: "Hello 👋 I'll guide you through <strong>HTM</strong> — Cash Transfer between Head Cashier and Teller 💰",
      },
      {
        type: "text",
        text: "HTM is used morning (HC → Teller) and day-end (Teller → HC).",
      },
      {
        type: "step",
        n: 1,
        text: "Type <code>HTM</code> and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "<strong>Function</strong> → <code>Add</code>.",
      },
      {
        type: "step",
        n: 3,
        text: "<strong>Transaction Type</strong> → <code>CTC</code> (Cash Transfer).",
      },
      { type: "text", text: "<strong>Step A – Debit Side:</strong>" },
      {
        type: "step",
        n: 4,
        text: "Account: <strong>Head Cashier Account</strong> · Particular Code: <code>3</code> · Click <code>Add</code>.",
      },
      { type: "text", text: "<strong>Step B – Credit Side:</strong>" },
      {
        type: "step",
        n: 5,
        text: "Account: <strong>Teller Account</strong> · Particular Code: <code>4</code> · Click <code>Add</code>.",
      },
      {
        type: "step",
        n: 6,
        text: "Click <strong>Denominations</strong> and enter exact denominations of cash being transferred.",
      },
      { type: "step", n: 7, text: "Click <code>Save Only</code> 🔒" },
      {
        type: "warn",
        text: "⚠️ HTM must ALWAYS be SAVED — never Direct Post. Manager physically verifies cash then posts.",
      },
      {
        type: "info",
        text: "📌 Day-end HTM: reverse entries — Debit Teller Account, Credit Head Cashier Account.",
      },
      {
        type: "done",
        text: "✅ HTM saved! Inform Head Cashier/Manager to verify and post it 🙌",
      },
    ],
  },
  MVCD: {
    title: "Vault Open / Close",
    pill: "pill-teal",
    messages: [
      {
        type: "text",
        text: "Hello 👋 I'll walk you through <strong>MVCD</strong> — Vault Open and Close in Finacle 🔐",
      },
      {
        type: "text",
        text: "Vault auto-opens on your first transaction each morning. MVCD is mainly used to close at day end.",
      },
      {
        type: "step",
        n: 1,
        text: "Type <code>MVCD</code> and press <strong>Enter</strong>.",
      },
      {
        type: "step",
        n: 2,
        text: "<strong>Function</strong> → <code>Close</code> (end-of-day).",
      },
      {
        type: "step",
        n: 3,
        text: "Enter your <strong>Employee User ID</strong>.",
      },
      {
        type: "step",
        n: 4,
        text: "Select option <code>0</code> — standard close.",
      },
      { type: "step", n: 5, text: "Click <code>Submit</code>." },
      {
        type: "step",
        n: 6,
        text: "Manager physically verifies vault balance and confirms closure. ✅",
      },
      {
        type: "step",
        n: 7,
        text: "After manager confirms → log out of Finacle. Day complete 🏠",
      },
      {
        type: "warn",
        text: "⚠️ Before MVCD Close ensure:\n1. HAFI clear ✅\n2. GSTTDR cash matched ✅\n3. CASHRETR reports done ✅\n4. Day-end HTM transfer complete ✅",
      },
      {
        type: "done",
        text: "✅ MVCD Close complete! Great job. See you tomorrow 🌙",
      },
    ],
  },
};

const knowledge = [
  {
    icon: "fa-building-columns",
    color: "#1a4080",
    bg: "rgba(26,64,128,0.1)",
    title: "🏛️ About RNSB",
    subtitle: "History & Overview",
    body: `<p>Rajkot Nagarik Sahakari Bank Ltd (RNSB), founded in 1953, is one of Saurashtra's leading urban cooperative banks with 66+ branches across Gujarat and Maharashtra.</p><p style="margin-top:8px">Regulated by <strong>RBI</strong> for banking activities and <strong>RCS Gujarat</strong> for cooperative governance.</p>`,
  },
  {
    icon: "fa-sitemap",
    color: "#0f7c4a",
    bg: "rgba(15,124,74,0.1)",
    title: "🌐 Cooperative Structure",
    subtitle: "How cooperative banking works",
    body: `<ul><li>Owned by member shareholders who elect a <strong>Board of Directors</strong></li><li>AGM is the supreme governing body</li><li>RBI regulates banking; RCS Gujarat handles cooperative governance</li><li>Profits distributed as dividends after maintaining statutory reserves</li></ul>`,
  },
  {
    icon: "fa-code",
    color: "#0a5f8a",
    bg: "rgba(10,95,138,0.1)",
    title: "🔖 What is SOL ID?",
    subtitle: "Structured Operating Level Identifier",
    body: `<p><strong>SOL ID</strong> is the unique branch identifier in Finacle CBS.</p><ul><li>Every branch has a unique SOL ID (same as branch code)</li><li>Used in all inter-branch HTM transfers</li><li>Required for CASHRETR Patrak-10 report</li></ul><div class="highlight-box"><i class="fa-solid fa-circle-info" style="margin-right:5px"></i>Always verify SOL ID when running Patrak-10 — wrong SOL ID generates incorrect report.</div>`,
  },
  {
    icon: "fa-hashtag",
    color: "#c25f0a",
    bg: "rgba(194,95,10,0.1)",
    title: "🔢 Account Number Structure",
    subtitle: "15-digit Finacle format",
    body: `<div class="mono-block">Format: [BranchCode] / [TypeCode] / [AccountNo]\nExample: 21 / 31 / 81189\n\n21 = Branch Code · 31 = Savings · 81189 = Account No.</div><ul><li><strong>31</strong> = Savings (SB)</li><li><strong>32</strong> = Current (CA)</li><li><strong>33</strong> = Fixed Deposit (FD)</li><li><strong>34</strong> = Recurring Deposit (RD)</li></ul>`,
  },
  {
    icon: "fa-users",
    color: "#5a1eb8",
    bg: "rgba(90,30,184,0.1)",
    title: "👥 Employee Hierarchy",
    subtitle: "Roles and responsibilities",
    body: `<ul><li><strong>General Manager:</strong> Top executive — all operations</li><li><strong>Deputy GM:</strong> Assists GM, manages large operations</li><li><strong>Branch Manager:</strong> Full branch responsibility</li><li><strong>DCM:</strong> Manages cash operations and vault</li><li><strong>Head Cashier:</strong> Controls vault, distributes cash via HTM</li><li><strong>Teller/Cashier:</strong> Customer-facing cash transactions</li><li><strong>Loan Officer:</strong> Processes and manages loans</li></ul>`,
  },
  {
    icon: "fa-server",
    color: "#134e4a",
    bg: "rgba(19,78,74,0.1)",
    title: "💻 Finacle CBS Basics",
    subtitle: "Core Banking Solution overview",
    body: `<p>RNSB uses <strong>Finacle</strong> by Infosys — real-time centralized banking connecting all 66+ branches.</p><ul><li>Every employee has a unique <strong>User ID and Password</strong></li><li>Large transactions need <strong>supervisor dual authorization</strong></li><li>All reports generated via <code>HPR</code> viewer</li><li>EOD process closes daily books</li></ul><div class="highlight-box"><i class="fa-solid fa-triangle-exclamation" style="margin-right:5px"></i>Never share your Finacle User ID or Password with anyone.</div>`,
  },
  {
    icon: "fa-vault",
    color: "#7a3800",
    bg: "rgba(122,56,0,0.1)",
    title: "🏦 Teller vs Head Cashier",
    subtitle: "Understanding cash flow",
    body: `<ul><li><strong>Teller:</strong> Handles customer deposits/withdrawals. Receives cash from HC via HTM each morning.</li><li><strong>Head Cashier:</strong> Manages vault. Distributes and collects cash from tellers via HTM.</li><li><strong>Cash Flow:</strong> Vault → Head Cashier → Teller → Customers → Teller → Head Cashier → Vault</li></ul>`,
  },
];

/* STATE */
let currentScreen = "home",
  screenStack = [],
  activeChatCode = null;
let chatRunning = false,
  chatTimeouts = [],
  searchQuery = "";
let favorites = JSON.parse(localStorage.getItem("rnsb_favorites") || "[]");

/* ============================================================
   INIT
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const d = new Date();
  document.getElementById("homeDate").textContent = d.toLocaleDateString(
    "en-IN",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  );
  document.getElementById("chatDateChip").textContent = d.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );
  renderBranches();
  renderKnowledge();
  renderRoles();
  renderCashierCodes();
  renderFavorites();
  setTimeout(
    () => document.getElementById("loader").classList.add("gone"),
    2600,
  );
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape") closeSearch();
  });
  document
    .getElementById("globalSearchInput")
    .addEventListener("input", (e) => performSearch(e.target.value));
});

/* ============================================================
   NAVIGATION
============================================================ */
const screenConfig = {
  home: {
    title: "RNSB Assistant",
    sub: "Employee Portal",
    back: false,
    nav: "home",
  },
  bank: {
    title: "Branch Network 🏦",
    sub: "All 66 Branches",
    back: false,
    nav: "bank",
  },
  knowledge: {
    title: "Knowledge Base 📚",
    sub: "Training & Reference",
    back: false,
    nav: null,
  },
  hierarchy: {
    title: "Employee Hierarchy 🗂️",
    sub: "Branch Level Structure",
    back: false,
    nav: "hierarchy",
  },
  role: {
    title: "Employee Roles 👤",
    sub: "Select Your Role",
    back: false,
    nav: "role",
  },
  cashier: {
    title: "Cashier Module 🧾",
    sub: "Transaction Codes",
    back: false,
    nav: "cashier",
  },
  accounts: {
    title: "📒 Accounts",
    sub: "Loan Schemes & Codes",
    back: false,
    nav: "accounts",
  },
  chat: {
    title: "Step Guide",
    sub: "Senior Assistant",
    back: true,
    nav: "cashier",
  },
};

function navTo(name) {
  screenStack = [];
  setScreen(name);
}
function showScreen(name) {
  if (name !== currentScreen) screenStack.push(currentScreen);
  setScreen(name);
}
function setScreen(name) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const el = document.getElementById("screen-" + name);
  if (!el) return;
  el.classList.add("active");
  currentScreen = name;
  const cfg = screenConfig[name] || {
    title: "RNSB",
    sub: "",
    back: false,
    nav: null,
  };
  document.getElementById("mobileTitle").textContent = cfg.title;
  document.getElementById("mobileSub").textContent = cfg.sub;
  const bb = document.getElementById("mobileBack");
  if (cfg.back && screenStack.length > 0) bb.classList.add("show");
  else bb.classList.remove("show");
  document
    .querySelectorAll(".sidebar-nav-item")
    .forEach((i) => i.classList.remove("active"));
  if (cfg.nav)
    document.getElementById("snav-" + cfg.nav)?.classList.add("active");
  document
    .querySelectorAll(".bnav-item")
    .forEach((i) => i.classList.remove("active"));
  if (cfg.nav)
    document.getElementById("bnav-" + cfg.nav)?.classList.add("active");
  el.scrollTop = 0;
}
function goBack() {
  if (screenStack.length > 0) setScreen(screenStack.pop());
  else navTo("home");
}

/* ============================================================
   BRANCHES
============================================================ */
function filterBranches() {
  searchQuery = document
    .getElementById("branchSearchInput")
    .value.toLowerCase();
  renderBranches();
}
function renderBranches() {
  let list = [...branches];
  if (searchQuery)
    list = list.filter(
      (b) =>
        b.name.toLowerCase().includes(searchQuery) ||
        b.code.includes(searchQuery),
    );
  document.getElementById("branchSubtitle").textContent =
    `${list.length} branch${list.length !== 1 ? "es" : ""} · Rajkot Nagarik Sahakari Bank`;
  const grid = document.getElementById("branchesGrid");
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><p>No branches found</p></div>`;
    return;
  }
  grid.innerHTML = list
    .map(
      (b) => `
  <div class="branch-card">
    <div class="branch-icon"><i class="fa-solid fa-building-columns"></i></div>
    <span class="branch-code-badge">${b.code}</span>
    <div class="branch-name">${b.name}</div>
  </div>`,
    )
    .join("");
}

/* ============================================================
   KNOWLEDGE
============================================================ */
function renderKnowledge() {
  document.getElementById("knowledgeWrap").innerHTML = knowledge
    .map(
      (k, i) => `
  <div class="accordion-item" id="acc-${i}">
    <div class="accordion-head" onclick="toggleAccordion(${i})">
      <div class="accordion-head-icon" style="background:${k.bg};color:${k.color}"><i class="fa-solid ${k.icon}"></i></div>
      <div class="accordion-head-text"><h3>${k.title}</h3><p>${k.subtitle}</p></div>
      <i class="fa-solid fa-chevron-down accordion-chevron"></i>
    </div>
    <div class="accordion-body">${k.body}</div>
  </div>`,
    )
    .join("");
}
function toggleAccordion(i) {
  document.getElementById("acc-" + i).classList.toggle("open");
}

/* ============================================================
   ROLES
============================================================ */
function renderRoles() {
  const roles = [
    {
      icon: "fa-cash-register",
      emoji: "💰",
      color: "#0f7c4a",
      bg: "rgba(15,124,74,0.1)",
      name: "Cashier",
      desc: "Transaction codes, workflows & procedures",
      active: true,
      screen: "cashier",
    },
    {
      icon: "fa-hand-holding-dollar",
      emoji: "🏦",
      color: "#6b7a99",
      bg: "rgba(107,122,153,0.1)",
      name: "Loan Officer",
      desc: "Loan processing & documentation",
      active: false,
    },
    {
      icon: "fa-lock",
      emoji: "🔒",
      color: "#6b7a99",
      bg: "rgba(107,122,153,0.1)",
      name: "Locker",
      desc: "Safe deposit locker management",
      active: false,
    },
  ];
  document.getElementById("rolesWrap").innerHTML = roles
    .map(
      (r) => `
  <div class="role-card ${r.active ? "" : "disabled"}" onclick="${r.active ? `navTo('${r.screen || "cashier"}')` : ""}" >
    <div class="role-icon" style="background:${r.bg};color:${r.color}"><i class="fa-solid ${r.icon}"></i></div>
    <div>
      <div class="role-name">${r.emoji} ${r.name}</div>
      <div class="role-desc">${r.desc}</div>
    </div>
    <span class="role-status-badge ${r.active ? "badge-active" : "badge-soon"}">${r.active ? "✅ Active" : "🔜 Soon"}</span>
  </div>`,
    )
    .join("");
}

/* ============================================================
   CASHIER CODES
============================================================ */
function renderCashierCodes() {
  document.getElementById("cashierCodesList").innerHTML = cashierCodesMeta
    .map(
      (c) => `
  <div class="code-entry-card" onclick="openChat('${c.code}')">
    <div class="code-pill ${c.pill}">${c.emoji} ${c.code}</div>
    <div class="code-entry-info">
      <div class="code-entry-title">${c.title}</div>
      <div class="code-entry-sub">${c.subtitle}</div>
    </div>
    <i class="fa-solid fa-chevron-right code-entry-arrow"></i>
  </div>`,
    )
    .join("");
}

function switchCashierTab(tab, btn) {
  document
    .querySelectorAll("#cashierTabBar .tab-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document
    .querySelectorAll('[id^="ctab-"]')
    .forEach((t) => t.classList.remove("active"));
  document.getElementById("ctab-" + tab).classList.add("active");
}

/* FAVORITES */
function saveFavorites() {
  localStorage.setItem("rnsb_favorites", JSON.stringify(favorites));
}
function toggleFavorite() {
  if (!activeChatCode) return;
  const idx = favorites.indexOf(activeChatCode);
  if (idx === -1) {
    favorites.push(activeChatCode);
    showToast("⭐ Added to Favorites");
  } else {
    favorites.splice(idx, 1);
    showToast("Removed from Favorites");
  }
  saveFavorites();
  updateFavoriteBtn();
  renderFavorites();
}
function updateFavoriteBtn() {
  const isFav = favorites.includes(activeChatCode);
  document.getElementById("chatFavoriteBtn").classList.toggle("active", isFav);
  document.getElementById("chatFavoriteIcon").className = isFav
    ? "fa-solid fa-star"
    : "fa-regular fa-star";
}
function renderFavorites() {
  const el = document.getElementById("favoritesList");
  if (!favorites.length) {
    el.innerHTML = `<div class="empty-state"><i class="fa-solid fa-star"></i><p>No favorites yet.<br>Open a code and tap ⭐ to save.</p></div>`;
    return;
  }
  el.innerHTML = favorites
    .map((code) => {
      const c = cashierCodesMeta.find((m) => m.code === code);
      if (!c) return "";
      return `<div class="code-entry-card" onclick="openChat('${c.code}')">
      <div class="code-pill ${c.pill}">${c.emoji} ${c.code}</div>
      <div class="code-entry-info">
        <div class="code-entry-title">${c.title}</div>
        <div class="code-entry-sub">${c.subtitle}</div>
      </div>
      <i class="fa-solid fa-chevron-right code-entry-arrow"></i>
    </div>`;
    })
    .join("");
}

/* ============================================================
   CHAT
============================================================ */
function openChat(code) {
  const flow = chatbotFlows[code];
  if (!flow) return;
  activeChatCode = code;
  const av = codeAvatars[code] || {
    icon: "💬",
    color: "#1a4080",
    bg: "rgba(26,64,128,0.25)",
  };
  document.getElementById("chatAvatarRing").style.background = av.bg;
  document.getElementById("chatAvatarIcon").textContent = av.icon;
  document.getElementById("chatHeaderName").textContent =
    `${av.icon} ${flow.title}`;
  const badge = document.getElementById("chatCodeBadge");
  badge.textContent = code;
  badge.className = "chat-code-badge " + flow.pill;
  document.getElementById("chatProgressFill").style.width = "0%";
  document.getElementById("chatStatusBar").style.display = "flex";
  document.getElementById("chatEndActions").classList.remove("show");
  updateFavoriteBtn();
  const chatBody = document.getElementById("chatBody");
  const dateChip = document.getElementById("chatDateChip");
  chatBody.innerHTML = "";
  chatBody.appendChild(dateChip);
  chatTimeouts.forEach((t) => clearTimeout(t));
  chatTimeouts = [];
  chatRunning = true;
  showScreen("chat");

  let delay = 600;
  flow.messages.forEach((msg, idx) => {
    const t1 = setTimeout(() => {
      if (!chatRunning) return;
      showTypingIndicator(av);
    }, delay);
    chatTimeouts.push(t1);
    delay += 700 + Math.random() * 300;
    const t2 = setTimeout(() => {
      if (!chatRunning) return;
      hideTypingIndicator();
      appendMsg(msg, av);
      updateProgress(idx, flow.messages.length);
      if (idx === flow.messages.length - 1) setTimeout(finishChat, 300);
    }, delay);
    chatTimeouts.push(t2);
    delay += 180;
  });
}

function showTypingIndicator(av) {
  hideTypingIndicator();
  const chatBody = document.getElementById("chatBody");
  const d = document.createElement("div");
  d.id = "typingIndicator";
  d.className = "typing-indicator";
  d.innerHTML = `<div class="msg-avatar" style="background:${av.bg}">${av.icon}</div>
  <div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  chatBody.appendChild(d);
  scrollChat();
}
function hideTypingIndicator() {
  document.getElementById("typingIndicator")?.remove();
}

function appendMsg(msg, av) {
  const chatBody = document.getElementById("chatBody");
  const now = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const tsHTML = `<span class="bubble-ts">${now} <i class="fa-solid fa-check-double bubble-read"></i></span>`;

  if (msg.type === "warn") {
    const d = document.createElement("div");
    d.className = "chat-msg bot";
    d.style.maxWidth = "92%";
    d.innerHTML = `<div class="msg-avatar" style="background:${av.bg}">${av.icon}</div>
    <div><div class="chat-warn-box">${msg.text.replace(/\n/g, "<br>")}${tsHTML}</div></div>`;
    chatBody.appendChild(d);
    scrollChat();
    return;
  }
  if (msg.type === "info") {
    const d = document.createElement("div");
    d.className = "chat-msg bot";
    d.style.maxWidth = "92%";
    d.innerHTML = `<div class="msg-avatar" style="background:${av.bg}">${av.icon}</div>
    <div><div class="chat-info-box">${msg.text.replace(/\n/g, "<br>")}${tsHTML}</div></div>`;
    chatBody.appendChild(d);
    scrollChat();
    return;
  }
  if (msg.type === "done") {
    const d = document.createElement("div");
    d.className = "chat-msg bot";
    d.style.maxWidth = "92%";
    d.innerHTML = `<div class="msg-avatar" style="background:${av.bg}">${av.icon}</div>
    <div><div class="chat-done-box">${msg.text}</div></div>`;
    chatBody.appendChild(d);
    scrollChat();
    return;
  }
  if (msg.type === "step") {
    const d = document.createElement("div");
    d.className = "chat-msg bot";
    d.innerHTML = `<div class="msg-avatar" style="background:${av.bg}">${av.icon}</div>
    <div><div class="step-bubble"><span class="step-num-badge">${msg.n}</span>${msg.text}${tsHTML}</div></div>`;
    chatBody.appendChild(d);
    scrollChat();
    return;
  }
  const d = document.createElement("div");
  d.className = "chat-msg bot";
  d.innerHTML = `<div class="msg-avatar" style="background:${av.bg}">${av.icon}</div>
  <div><div class="chat-bubble">${msg.text}${tsHTML}</div></div>`;
  chatBody.appendChild(d);
  scrollChat();
}

function scrollChat() {
  const chatBody = document.getElementById("chatBody");
  requestAnimationFrame(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  });
}
function updateProgress(idx, total) {
  document.getElementById("chatProgressFill").style.width =
    Math.round(((idx + 1) / total) * 100) + "%";
}
function finishChat() {
  document.getElementById("chatProgressFill").style.width = "100%";
  document.getElementById("chatStatusBar").style.display = "none";
  document.getElementById("chatEndActions").classList.add("show");
  chatRunning = false;
}
function restartChat() {
  if (activeChatCode) openChat(activeChatCode);
}
function exitChat() {
  chatRunning = false;
  chatTimeouts.forEach((t) => clearTimeout(t));
  chatTimeouts = [];
  hideTypingIndicator();
  document.getElementById("chatStatusBar").style.display = "none";
  goBack();
}
function copyStepsToClipboard() {
  const flow = chatbotFlows[activeChatCode];
  if (!flow) return;
  const txt = flow.messages
    .filter((m) => ["step", "warn", "info", "done"].includes(m.type))
    .map((m) => {
      const clean = (m.text || "")
        .replace(/<[^>]+>/g, "")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
      if (m.type === "step") return `Step ${m.n}: ${clean}`;
      if (m.type === "warn") return `⚠️ ${clean}`;
      if (m.type === "info") return `📌 ${clean}`;
      return clean;
    })
    .join("\n\n");
  navigator.clipboard
    .writeText(`${activeChatCode} – ${flow.title}\n${"=".repeat(38)}\n\n${txt}`)
    .then(() => showToast("✅ Steps copied to clipboard"))
    .catch(() => showToast("📋 Copy: " + activeChatCode));
}

/* ============================================================
   GLOBAL SEARCH
============================================================ */
function openSearch() {
  document.getElementById("searchOverlay").classList.add("open");
  setTimeout(() => document.getElementById("globalSearchInput").focus(), 50);
}
function closeSearch() {
  document.getElementById("searchOverlay").classList.remove("open");
  document.getElementById("globalSearchInput").value = "";
  document.getElementById("searchResults").innerHTML = "";
  document.getElementById("searchHint").style.display = "flex";
}
function doSearch(term) {
  document.getElementById("globalSearchInput").value = term;
  performSearch(term);
}
function performSearch(q) {
  const query = q.trim().toLowerCase();
  document.getElementById("searchHint").style.display = query ? "none" : "flex";
  const rEl = document.getElementById("searchResults");
  if (!query) {
    rEl.innerHTML = "";
    return;
  }
  const res = { branches: [], codes: [], knowledge: [] };
  branches.forEach((b) => {
    if (b.name.toLowerCase().includes(query) || b.code.includes(query))
      res.branches.push(b);
  });
  cashierCodesMeta.forEach((c) => {
    if (
      c.code.toLowerCase().includes(query) ||
      c.title.toLowerCase().includes(query) ||
      c.subtitle.toLowerCase().includes(query)
    )
      res.codes.push(c);
  });
  Object.entries(chatbotFlows).forEach(([code, flow]) => {
    if (
      flow.messages.some((m) => (m.text || "").toLowerCase().includes(query))
    ) {
      if (!res.codes.find((x) => x.code === code)) {
        const meta = cashierCodesMeta.find((m) => m.code === code);
        if (meta) res.codes.push(meta);
      }
    }
  });
  knowledge.forEach((k, i) => {
    if (
      k.title.toLowerCase().includes(query) ||
      k.subtitle.toLowerCase().includes(query) ||
      k.body.toLowerCase().includes(query)
    )
      res.knowledge.push({ ...k, idx: i });
  });
  const total = res.branches.length + res.codes.length + res.knowledge.length;
  if (!total) {
    rEl.innerHTML = `<div class="search-empty"><i class="fa-solid fa-magnifying-glass" style="font-size:28px;margin-bottom:8px;display:block;opacity:.3"></i>No results for "<strong>${q}</strong>"</div>`;
    return;
  }
  let html = "";
  if (res.branches.length) {
    html += `<div class="search-category-title">🏦 Branches (${res.branches.length})</div>`;
    res.branches.slice(0, 8).forEach((b) => {
      html += `<div class="search-result-item" onclick="closeSearch();navTo('bank')"><div class="search-result-icon" style="background:rgba(26,64,128,.1);color:var(--royal)"><i class="fa-solid fa-building-columns"></i></div><div><div class="search-result-title">${b.name} <span style="font-family:var(--font-mono);font-size:10px;color:var(--gold)">${b.code}</span></div></div></div>`;
    });
  }
  if (res.codes.length) {
    html += `<div class="search-category-title">🧾 Cashier Codes (${res.codes.length})</div>`;
    res.codes.forEach((c) => {
      html += `<div class="search-result-item" onclick="closeSearch();openChat('${c.code}')"><div class="search-result-icon" style="background:rgba(15,124,74,.1);color:var(--success)"><i class="fa-solid fa-comments"></i></div><div><div class="search-result-title">${c.emoji} ${c.code}</div><div class="search-result-sub">${c.title}</div></div></div>`;
    });
  }
  if (res.knowledge.length) {
    html += `<div class="search-category-title">📚 Knowledge (${res.knowledge.length})</div>`;
    res.knowledge.forEach((k) => {
      html += `<div class="search-result-item" onclick="closeSearch();navTo('knowledge');setTimeout(()=>toggleAccordion(${k.idx}),200)"><div class="search-result-icon" style="background:${k.bg};color:${k.color}"><i class="fa-solid ${k.icon}"></i></div><div><div class="search-result-title">${k.title}</div><div class="search-result-sub">${k.subtitle}</div></div></div>`;
    });
  }
  rEl.innerHTML = html;
}

/* ============================================================
   TOAST
============================================================ */
let toastT;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ============================================================
   LOAN SCHEMES DATA
============================================================ */
const LOAN_SCHEMES = [
  { gl: "66", code: "3001", desc: "LOAN AGAINST FIXED DEPOSITS66" },
  { gl: "139", code: "3002", desc: "SURETY LOAN" },
  { gl: "140", code: "3003", desc: "NOMINAL SURETY LOAN" },
  { gl: "141", code: "3004", desc: "LAND AND BUILDING LOAN" },
  { gl: "142", code: "3005", desc: "INDUSTRIAL LOAN (MACHINERY)" },
  { gl: "143", code: "3006", desc: "SECURED LOAN" },
  { gl: "144", code: "3007", desc: "GOLD LOAN - BULLET REPAYMENT" },
  { gl: "147", code: "3008", desc: "LOAN AGAINST NSC/KVP/LIC" },
  { gl: "152", code: "3009", desc: "UNSECURED LOAN" },
  { gl: "155", code: "3010", desc: "BANKABLE LOAN (P.M. ROJGAR YOJNA)" },
  { gl: "157", code: "3011", desc: "STAFF DOMESTIC LOAN" },
  { gl: "159", code: "3012", desc: "STAFF HOUSING LOAN" },
  { gl: "161", code: "3013", desc: "LOAN AGAINST SHARE/DEBENTURE" },
  { gl: "162", code: "3014", desc: "STAFF CONCESSIONAL DOMESTIC LOAN" },
  { gl: "163", code: "3015", desc: "INDUSTRIAL LOAN (LAND AND BUILDING)" },
  { gl: "168", code: "3016", desc: "EDUCATION LOAN" },
  { gl: "186", code: "3017", desc: "EARTH-QUAKE LOAN (GENERAL)" },
  { gl: "187", code: "3018", desc: "EARTHQUAKE LOAN (INDUSTRIAL)" },
  { gl: "239", code: "3019", desc: "SURETY LOAN (H.O.-DAVA)" },
  { gl: "297", code: "3020", desc: "STAFF PERSONAL LOAN" },
  { gl: "339", code: "3021", desc: "SURETY LOAN (OVERDUE)" },
  { gl: "340", code: "3022", desc: "NOMINAL SURETY LOAN (OVERDUE)" },
  { gl: "341", code: "3023", desc: "LAND AND BUILDING LOAN (OVERDUE)" },
  { gl: "342", code: "3024", desc: "INDUSTRIAL LOAN (OVERDUE)" },
  { gl: "343", code: "3025", desc: "SECURED LOAN (OVERDUE)" },
  { gl: "355", code: "3026", desc: "BANKABLE LOAN OVERDUE" },
  { gl: "439", code: "3027", desc: "SURETY LOAN (H.O.-OVERDUE)" },
  { gl: "440", code: "3028", desc: "NOMINAL SURETY LOAN (H.O.-OVERDUE)" },
  { gl: "441", code: "3029", desc: "LAND & BUILDING LOAN (H.O.-OVERDUE)" },
  { gl: "442", code: "3030", desc: "INDUSTRIAL LOAN (H.O.-OVERDUE)" },
  { gl: "443", code: "3031", desc: "SECURED LOAN (H.O.-OVERDUE)" },
  { gl: "640", code: "3032", desc: "NOMINAL LOAN (H.O.-DAVA)" },
  { gl: "643", code: "3033", desc: "SECURED LOAN (H.O.-DAVA)" },
  { gl: "717", code: "3034", desc: "NAGARIK LAGHU UDYOG VEPAR LOAN" },
  { gl: "719", code: "3035", desc: "SABHASAD SUVIDHA LOAN" },
  { gl: "720", code: "3036", desc: "LAND & BUILDING LOAN-CM-AVAS YOJNA" },
  { gl: "721", code: "3037", desc: "HOME APPLIANCES AND VEHICLE LOAN" },
  { gl: "722", code: "3038", desc: "STAFF DOMESTIC/FURNITURE LOAN" },
  { gl: "741", code: "3039", desc: "REVERSE MORTGAGE" },
  { gl: "742", code: "3040", desc: "FURNITURE LOAN" },
  { gl: "744", code: "3041", desc: "GOLD LOAN - SONA" },
  { gl: "767", code: "3042", desc: "KALPATARU DHIRAN" },
  { gl: "775", code: "3043", desc: "NAGARIK E-BIKE LOAN (GUCBF)" },
  { gl: "792", code: "3044", desc: "VYAPAR VRUDDHI DHIRAN YOJNA LOAN" },
  { gl: "793", code: "3045", desc: "PMEGP-TERM LOAN" },
  { gl: "795", code: "3046", desc: "MISSION NEXT GENERATION LOAN A/C" },
  { gl: "796", code: "3047", desc: "UNSECURED LOAN UPTO 1 LAC" },
  { gl: "797", code: "3048", desc: "AATMANIRBHAR GUJ LOAN UPTO 1 LAC" },
  { gl: "798", code: "3049", desc: "COVID-19 5 LAC" },
  { gl: "799", code: "3050", desc: "COVID-19 25% ADDITIONAL TERM LOAN" },
  { gl: "814", code: "3051", desc: "SECURED LOAN UPTO 1 LAC" },
  { gl: "844", code: "3052", desc: "AATMANIRBHAR GUJARAT SAHAY YOJANA 2" },
  { gl: "846", code: "3053", desc: "MUKHYAMANTRI MAHILA UTKARSH YOJANA" },
  { gl: "849", code: "3054", desc: "BATTERY OPERATED TWO WHEELER LOANS" },
  { gl: "850", code: "3055", desc: "SOLAR LOAN MSME" },
  { gl: "854", code: "3056", desc: "MONTHLY INT BULLET GOLD LOAN(12MON)" },
  { gl: "856", code: "3057", desc: "TATKAL LOAN" },
  { gl: "857", code: "3058", desc: "LIFE POLICY PREMIUM LOAN" },
  { gl: "866", code: "3059", desc: "LOAN AGAINST FIXED DEPOSITS" },
  { gl: "862", code: "3060", desc: "CAR LOAN" },
  { gl: "790", code: "3061", desc: "AGRICULTURE ALLIED ACTIVITY LOAN" },
  { gl: "852", code: "3062", desc: "3 MONTHS BULLET GOLD LOAN" },
  { gl: "853", code: "3063", desc: "6 MONTHS BULLET GOLD LOAN" },
  { gl: "855", code: "3064", desc: "EMI BASED GOLD LOAN" },
  { gl: "858", code: "3065", desc: "SOVEREIGN GOLD BOND(SGB-BULLET PMT)" },
  { gl: "860", code: "3066", desc: "SOVEREIGN GOLD BOND(SGB-TERM LOAN)" },
];

/* ============================================================
   ACCOUNTS - LOAN SCHEMES
============================================================ */
let loanSearchQuery = "";

/* ============================================================
   Process Account Input - Called from HTML oninput
   ============================================================ */
function processAccountInput() {
  filterLoanAccounts();
}

function filterLoanAccounts() {
  loanSearchQuery = document
    .getElementById("accountsSearchInput")
    .value.toLowerCase();
  renderLoanAccounts();
}

function renderLoanAccounts() {
  const grid = document.getElementById("loanAccountsGrid");
  if (!grid) return;

  let filtered = [...LOAN_SCHEMES];
  if (loanSearchQuery) {
    filtered = filtered.filter(
      (s) =>
        s.desc.toLowerCase().includes(loanSearchQuery) ||
        s.code.includes(loanSearchQuery) ||
        s.gl.includes(loanSearchQuery),
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fa-solid fa-search"></i><p>No schemes found</p></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (s) => `
      <div class="loan-account-card">
        <div class="loan-account-header">
          <span class="loan-badge">🧾 ${s.desc}</span>
        </div>
        <div class="loan-account-body">
          <div class="loan-detail">
            <span class="loan-detail-label">🔢 Scheme Code</span>
            <span class="loan-detail-value scheme-code">${s.code}</span>
          </div>
          <div class="loan-detail">
            <span class="loan-detail-label">🏷️ GL Code</span>
            <span class="loan-detail-value old-gl">${s.gl}</span>
          </div>
        </div>
      </div>`,
    )
    .join("");
}

// Initialize Accounts screen on show
var originalSetScreenAccounts = setScreen;
setScreen = function (name) {
  originalSetScreenAccounts(name);

  if (name === "accounts") {
    renderLoanAccounts();
  }
};

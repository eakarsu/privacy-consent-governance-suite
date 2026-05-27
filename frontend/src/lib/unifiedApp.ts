import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'consents',
    title: 'Consents',
    href: '/consents',
    category: 'Governance',
    icon: BriefcaseBusiness,
    summary: 'Consents workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Consents queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Consents', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'data-subjects',
    title: 'Data Subjects',
    href: '/data-subjects',
    category: 'Governance',
    icon: Users,
    summary: 'Data Subjects workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Data Subjects queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Data Subjects', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'requests',
    title: 'Requests',
    href: '/requests',
    category: 'Governance',
    icon: ClipboardList,
    summary: 'Requests workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Requests queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Requests', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'systems',
    title: 'Systems',
    href: '/systems',
    category: 'Governance',
    icon: CalendarCheck,
    summary: 'Systems workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Systems queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Systems', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'retention',
    title: 'Retention',
    href: '/retention',
    category: 'Operations',
    icon: Activity,
    summary: 'Retention workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Retention queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Retention', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'policies',
    title: 'Policies',
    href: '/policies',
    category: 'Operations',
    icon: Workflow,
    summary: 'Policies workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Policies queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Policies', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'assessments',
    title: 'Assessments',
    href: '/assessments',
    category: 'Operations',
    icon: FileText,
    summary: 'Assessments workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Assessments queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Assessments', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'incidents',
    title: 'Incidents',
    href: '/incidents',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Incidents workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Incidents queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Incidents', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'vendors',
    title: 'Vendors',
    href: '/vendors',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Vendors workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Vendors queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Vendors', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'regulations',
    title: 'Regulations',
    href: '/regulations',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Regulations workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Regulations queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Regulations', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'evidence',
    title: 'Evidence',
    href: '/evidence',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Evidence workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Evidence queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Evidence', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Privacy Consent Governance suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "dsar-requests",
    title: "DSAR Requests",
    href: "/dsar-requests",
    category: "Privacy DSAR Automation",
    icon: FileText,
    summary: "Data subject access requests, deadlines, ownership, identity checks, and status.",
    bullets: ["Requests","Deadlines","Identity checks"],
    metrics: [
      { label: "DSAR Requests", value: "32", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "data-map",
    title: "Data Map",
    href: "/data-map",
    category: "Privacy DSAR Automation",
    icon: ClipboardList,
    summary: "Systems, personal data categories, processors, purposes, and retention details.",
    bullets: ["Systems","Categories","Retention"],
    metrics: [
      { label: "Data Map", value: "45", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "privacy-ticketing",
    title: "Privacy Ticketing",
    href: "/privacy-ticketing",
    category: "Privacy DSAR Automation",
    icon: Activity,
    summary: "Privacy requests, escalations, legal review, and evidence collection.",
    bullets: ["Tickets","Escalations","Evidence"],
    metrics: [
      { label: "Privacy Ticketing", value: "58", note: 'Active' },
      { label: 'Review', value: "8", note: 'Needs attention' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "consent-evidence",
    title: "Consent Evidence",
    href: "/consent-evidence",
    category: "Privacy DSAR Automation",
    icon: BarChart3,
    summary: "Consent records, preference changes, policy version, and audit evidence.",
    bullets: ["Consent records","Preferences","Audit"],
    metrics: [
      { label: "Consent Evidence", value: "71", note: 'Active' },
      { label: 'Review', value: "9", note: 'Needs attention' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Privacy Consent Governance documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Privacy Consent Governance alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Privacy Consent Governance source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Privacy Consent Governance users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Privacy Consent Governance assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Governance', features: ['Consents', 'Data Subjects', 'Requests', 'Systems', 'Vendors', 'Regulations'] },
  { name: 'Operations', features: ['Retention', 'Policies', 'Assessments', 'Incidents'] },
  { name: 'Governance', features: ['Consents', 'Data Subjects', 'Requests', 'Systems', 'Vendors', 'Regulations'] },
  { name: 'Privacy DSAR Automation', features: ["DSAR Requests","Data Map","Privacy Ticketing","Consent Evidence"] },
  { name: 'Intelligence Layer', features: ['Evidence', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIGDPRDataMappingPrivacyManager', 'AIConsentManagement where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);

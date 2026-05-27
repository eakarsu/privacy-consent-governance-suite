export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['consents', 'Consents Records', 'Consents priority queue', 'Open', 'Consents exception list', 'Governance Lead', '$0'],
  ['data-subjects', 'Data Subjects Records', 'Data Subjects priority queue', 'Review', 'Data Subjects exception list', 'Governance Lead', '$0'],
  ['requests', 'Requests Records', 'Requests priority queue', 'Action needed', 'Requests exception list', 'Governance Lead', '$0'],
  ['systems', 'Systems Records', 'Systems priority queue', 'Open', 'Systems exception list', 'Governance Lead', '$0'],
  ['retention', 'Retention Records', 'Retention priority queue', 'Review', 'Retention exception list', 'Operations Lead', '$0'],
  ['policies', 'Policies Records', 'Policies priority queue', 'Action needed', 'Policies exception list', 'Operations Lead', '$0'],
  ['assessments', 'Assessments Records', 'Assessments priority queue', 'Open', 'Assessments exception list', 'Operations Lead', '$0'],
  ['incidents', 'Incidents Records', 'Incidents priority queue', 'Review', 'Incidents exception list', 'Operations Lead', '$0'],
  ['vendors', 'Vendors Records', 'Vendors priority queue', 'Action needed', 'Vendors exception list', 'Governance Lead', '$0'],
  ['regulations', 'Regulations Records', 'Regulations priority queue', 'Open', 'Regulations exception list', 'Governance Lead', '$0'],
  ['evidence', 'Evidence Records', 'Evidence priority queue', 'Review', 'Evidence exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["dsar-requests","DSAR Requests Records","DSAR Requests operating queue","Open","DSAR Requests follow-up list","Privacy DSAR Automation","$0"],
  ["data-map","Data Map Records","Data Map operating queue","Review","Data Map follow-up list","Privacy DSAR Automation","$0"],
  ["privacy-ticketing","Privacy Ticketing Records","Privacy Ticketing operating queue","Review","Privacy Ticketing follow-up list","Privacy DSAR Automation","$0"],
  ["consent-evidence","Consent Evidence Records","Consent Evidence operating queue","Review","Consent Evidence follow-up list","Privacy DSAR Automation","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));

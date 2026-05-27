export type FeatureSurfaceRow = { id: string; item: string; status: string; owner: string; nextStep: string };
export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['consents', 'Consents', 'Consents operating queue', 'Governance Lead', 'Review and assign next action'],
  ['data-subjects', 'Data Subjects', 'Data Subjects operating queue', 'Governance Lead', 'Review and assign next action'],
  ['requests', 'Requests', 'Requests operating queue', 'Governance Lead', 'Review and assign next action'],
  ['systems', 'Systems', 'Systems operating queue', 'Governance Lead', 'Review and assign next action'],
  ['retention', 'Retention', 'Retention operating queue', 'Operations Lead', 'Review and assign next action'],
  ['policies', 'Policies', 'Policies operating queue', 'Operations Lead', 'Review and assign next action'],
  ['assessments', 'Assessments', 'Assessments operating queue', 'Operations Lead', 'Review and assign next action'],
  ['incidents', 'Incidents', 'Incidents operating queue', 'Operations Lead', 'Review and assign next action'],
  ['vendors', 'Vendors', 'Vendors operating queue', 'Governance Lead', 'Review and assign next action'],
  ['regulations', 'Regulations', 'Regulations operating queue', 'Governance Lead', 'Review and assign next action'],
  ['evidence', 'Evidence', 'Evidence operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ["dsar-requests","DSAR Requests","DSAR Requests review queue","Privacy DSAR Automation","Review source context and assign owner"],
  ["data-map","Data Map","Data Map review queue","Privacy DSAR Automation","Confirm next action and update evidence"],
  ["privacy-ticketing","Privacy Ticketing","Privacy Ticketing review queue","Privacy DSAR Automation","Confirm next action and update evidence"],
  ["consent-evidence","Consent Evidence","Consent Evidence review queue","Privacy DSAR Automation","Confirm next action and update evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title, item, owner, nextStep]) => [slug, buildSurface(slug, title, item, owner, nextStep)]));
export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]));

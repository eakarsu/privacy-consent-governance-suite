export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIGDPRDataMappingPrivacyManager', ownership: 'Consents source capabilities and workflows', coverage: ['Consents', 'Data Subjects', 'Requests'] },
  { name: 'AIConsentManagement', ownership: 'Data Subjects source capabilities and workflows', coverage: ['Systems', 'Retention', 'Policies'] },
  { name: 'AIPrivacyRequestAgent', ownership: 'Requests source capabilities and workflows', coverage: ['Assessments', 'Incidents', 'Vendors'] },
  { name: 'AIDPIAAssistant', ownership: 'Systems source capabilities and workflows', coverage: ['Regulations', 'Evidence', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Consents', value: '84', note: 'Active' },
  { label: 'Data Subjects', value: '61', note: 'Open' },
  { label: 'Requests', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Consents operating view', 'Data Subjects operating view', 'Requests operating view', 'Systems operating view', 'Retention operating view', 'Policies operating view', 'Assessments operating view', 'Incidents operating view'];
export const workflowHighlights = ['Consents workflow with records, approvals, audit, and reporting', 'Data Subjects workflow with records, approvals, audit, and reporting', 'Requests workflow with records, approvals, audit, and reporting', 'Systems workflow with records, approvals, audit, and reporting', 'Retention workflow with records, approvals, audit, and reporting'];

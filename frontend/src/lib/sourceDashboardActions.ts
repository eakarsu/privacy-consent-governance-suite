export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "privacy-dsar-automation",
    "label": "Privacy DSAR Automation",
    "description": "Open Privacy DSAR Automation workflows elevated from AIGDPRDataMappingPrivacyManager.",
    "href": "/dsar-requests",
    "sourceProjects": [
      "AIGDPRDataMappingPrivacyManager"
    ],
    "examples": [
      "DSAR Requests",
      "Data Map",
      "Privacy Ticketing",
      "Consent Evidence"
    ],
    "count": 1
  }
];

export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "privacy-dsar-copilot": [
    {
      "name": "request_text",
      "label": "Request Text",
      "type": "textarea",
      "defaultValue": "Paste DSAR or privacy request.",
      "placeholder": "Enter request text",
      "options": [],
      "required": true,
      "source": "AIGDPRDataMappingPrivacyManager"
    },
    {
      "name": "data_systems",
      "label": "Data Systems",
      "type": "textarea",
      "defaultValue": "List systems, data categories, processors, and retention notes.",
      "placeholder": "Enter data systems",
      "options": [],
      "required": true,
      "source": "AIGDPRDataMappingPrivacyManager"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "select",
      "defaultValue": "GDPR",
      "placeholder": "Enter jurisdiction",
      "options": [
        "GDPR",
        "CCPA/CPRA",
        "HIPAA",
        "Other"
      ],
      "required": true,
      "source": "AIGDPRDataMappingPrivacyManager"
    }
  ]
};

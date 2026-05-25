# Privacy Consent Governance Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIGDPRDataMappingPrivacyManager`
- `AIConsentManagement`
- `AIPrivacyRequestAgent`
- `AIDPIAAssistant`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/privacy-consent-governance-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4720`

Seeded users:
- `admin@privacy-consent.local / admin123`
- `manager@privacy-consent.local / manager123`
- `analyst@privacy-consent.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/privacy-consent-governance-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4720 npm run smoke
```

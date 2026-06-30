# End-to-End PoC Workflow

```
┌─────────────────────┐
│ Developer writes    │
│ counter.ts          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Claude generates    │
│ counter.test.ts     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Automated           │
│ Verification Script │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Vitest executes     │
│ generated tests     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Coverage generated  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Coverage >= 90% ?   │
└───────┬───────┬─────┘
        │Yes    │No
        ▼       ▼
   CI Pass   CI Fail
      │         │
      ▼         ▼
 Merge/Deploy  Block Deployment
```
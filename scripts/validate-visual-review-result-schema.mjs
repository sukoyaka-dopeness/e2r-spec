import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const scriptDirectory = fileURLToPath(new URL(".", import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schemaPath = "schemas/evidence/visual-review-result-v1.schema.json";

const ref = (path, sha256) => ({ path, sha256 });
const criteria = ["V-A", "V-B", "V-C", "V-D", "V-E", "V-F", "V-G", "V-H"].map((criterion) => ({
  criterion,
  status: "PASS",
  severeFailure: false,
  evidenceNote: `Observed ${criterion} in the authoritative V3 screenshot.`,
  artifactRefs: ["screenshots/v3/example.png"]
}));

const validCases = [
  [
    "complete candidate review with separate baseline boundary",
    {
      contract: "VSR-REVIEW-RESULT-v1",
      reviewResultId: "vsr-review-fresh12-example",
      status: "COMPLETE",
      reviewMode: "HUMAN-REVIEW",
      reviewerPresentation: "ANONYMIZED-CANDIDATE-ID",
      evidenceTarget: {
        sourceRepository: "e2r-liaison-scape-browser-capture",
        sourceRepositoryCommit: "e59bec02e0cd921e6caef49d08013b67b90f65c4",
        artifactRoot: "artifacts/browser-capture-fresh-lineage12-2026-09-08",
        phaseRunId: "browser-capture-fresh-lineage12-2026-09-08",
        finalPr3RunId: "pr3r1-2afec2dbca9e1136e88af8a1c2192886e29d2cc76c8b13a5779fff44b8f5a147",
        identityInputSha256: "2AFEC2DBCA9E1136E88AF8A1C2192886E29D2CC76C8B13A5779FFF44B8F5A147",
        artifactIndex: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/artifact-index.json", "A".repeat(64)),
        protocolA: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/protocol-a.json", "B".repeat(64)),
        eligibleV2Set: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/eligible-v2-set.json", "C".repeat(64)),
        runManifest: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/run-manifest.json", "D".repeat(64)),
        auditResults: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/audit-results.json", "E".repeat(64)),
        v3ExecutionState: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/v3-execution-state.json", "F".repeat(64))
      },
      rubric: {
        visualContract: "VSR-VISUAL-v1",
        reviewContract: "VSR-REVIEW-v1",
        criteria: ["V-A", "V-B", "V-C", "V-D", "V-E", "V-F", "V-G", "V-H"],
        stage: "V3"
      },
      scope: {
        coverageBasis: "AUTHORITATIVE-V3-ELIGIBLE-SET",
        researchCandidateIds: ["TA2-DEG-W1-OP-v1"],
        baselineReferenceIncluded: true,
        expectedCandidateCellCount: 1,
        expectedBaselineReferenceCellCount: 1
      },
      units: [
        {
          unitId: "TA2-DEG-W1-OP-v1|apollo-11-en|V3",
          kind: "RESEARCH-CANDIDATE",
          candidateId: "TA2-DEG-W1-OP-v1",
          fixtureId: "apollo-11-en",
          structuralFixtureId: "apollo-11",
          presentationVariant: "en",
          stage: "V3",
          v3EvidenceId: "TA2_DEG_W1_OP_v1__apollo_11__en",
          fixtureAuthority: {
            manifestFixtureId: "apollo-11-en",
            manifestRawSha256: "1".repeat(64),
            manifestRef: "docs/evidence/visual-fixture-role-manifest-v1.json"
          },
          sourceArtifacts: {
            v3Result: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/v3/example.json", "1".repeat(64)),
            packet: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/packets/v3/example.json", "2".repeat(64)),
            screenshot: ref("artifacts/browser-capture-fresh-lineage12-2026-09-08/screenshots/v3/example.png", "3".repeat(64))
          },
          criteria
        }
      ],
      ranking: { status: "NOT-STARTED" },
      selection: { status: "NONE" },
      formalAcceptance: "NOT-PERFORMED",
      publication: "NOT-PERFORMED",
      immutability: { sourceEvidenceChanged: false, recordWriteOnce: true }
    }
  ],
  [
    "blocked result may retain no review units",
    {
      contract: "VSR-REVIEW-RESULT-v1",
      reviewResultId: "vsr-review-blocked-example",
      status: "BLOCKED",
      reviewMode: "HUMAN-REVIEW",
      reviewerPresentation: "MIXED",
      evidenceTarget: {
        sourceRepository: "e2r-liaison-scape-browser-capture",
        sourceRepositoryCommit: "e59bec02e0cd921e6caef49d08013b67b90f65c4",
        artifactRoot: "artifacts/browser-capture-fresh-lineage12-2026-09-08",
        phaseRunId: "browser-capture-fresh-lineage12-2026-09-08",
        finalPr3RunId: "pr3r1-2afec2dbca9e1136e88af8a1c2192886e29d2cc76c8b13a5779fff44b8f5a147",
        identityInputSha256: "2AFEC2DBCA9E1136E88AF8A1C2192886E29D2CC76C8B13A5779FFF44B8F5A147",
        artifactIndex: ref("artifact-index.json", "A".repeat(64)),
        protocolA: ref("protocol-a.json", "B".repeat(64)),
        eligibleV2Set: ref("eligible-v2-set.json", "C".repeat(64)),
        runManifest: ref("run-manifest.json", "D".repeat(64)),
        auditResults: ref("audit-results.json", "E".repeat(64)),
        v3ExecutionState: ref("v3-execution-state.json", "F".repeat(64))
      },
      rubric: {
        visualContract: "VSR-VISUAL-v1",
        reviewContract: "VSR-REVIEW-v1",
        criteria: ["V-A", "V-B", "V-C", "V-D", "V-E", "V-F", "V-G", "V-H"],
        stage: "V3"
      },
      scope: {
        coverageBasis: "AUTHORITATIVE-V3-ELIGIBLE-SET",
        researchCandidateIds: [],
        baselineReferenceIncluded: false,
        expectedCandidateCellCount: 0,
        expectedBaselineReferenceCellCount: 0
      },
      units: [],
      blockers: [{ code: "TRUSTWORTHY-VISUAL-INSPECTION-UNAVAILABLE", message: "No trustworthy visual inspection was available.", severity: "BLOCKING" }],
      ranking: { status: "NOT-STARTED" },
      selection: { status: "NONE" },
      formalAcceptance: "NOT-PERFORMED",
      publication: "NOT-PERFORMED",
      immutability: { sourceEvidenceChanged: false, recordWriteOnce: true }
    }
  ]
];

const invalidCases = [
  ["ranking cannot be completed in a review result", { ranking: { status: "COMPLETE" } }],
  ["selection cannot be made in a review result", { selection: { status: "SELECTED" } }]
];

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(repositoryRoot, relativePath), "utf8"));
}

function formatErrors(ajv, errors) {
  return ajv.errorsText(errors, { separator: "; " });
}

const schema = readJson(schemaPath);
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);
let failureCount = 0;

for (const [name, document] of validCases) {
  if (!validate(document)) {
    failureCount += 1;
    console.error(`FAIL valid ${name}: ${formatErrors(ajv, validate.errors)}`);
  } else {
    console.log(`PASS valid ${name}`);
  }
}

const validDocument = validCases[0][1];
for (const [name, override] of invalidCases) {
  const document = structuredClone(validDocument);
  Object.assign(document, override);
  if (validate(document)) {
    failureCount += 1;
    console.error(`FAIL invalid ${name}: expected rejection`);
  } else {
    console.log(`PASS invalid ${name}`);
  }
}

if (failureCount > 0) {
  console.error(`Visual Review Result schema validation failed with ${failureCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log(`Visual Review Result schema validation passed: ${validCases.length} valid and ${invalidCases.length} invalid cases.`);
  console.log("Coverage, artifact hashes, fixture binding, and status transitions require the authority-specific semantic gate described in the review execution document.");
}

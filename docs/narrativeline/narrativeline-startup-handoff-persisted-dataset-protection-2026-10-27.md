# NarrativeLine startup Handoff: persisted Dataset protection

Date: 2026-10-27 JST\
Status: **LOCAL UNCOMMITTED RUNTIME CANDIDATE / HUMAN ACCEPTED / CLOSED (BOUNDED BASIC FIVE)**

The Human adopted protection for a browser-persisted Dataset during startup Handoff. This follows the [integrated N4 investigation](narrativeline-n4-integrated-safety-and-acceptance-evidence-2026-10-27.md); it does not rewrite that investigation's historical observations. The [Roadmap](../roadmap.md) remains current planning authority.

## Cause and bounded correction

NarrativeLine restores `narrativeline.lastDataset` on startup and uses that content as its accepted baseline. Consequently `datasetModified` can be false even when the restored content contains edits that were never exported. Previously, a valid startup Handoff Candidate was then accepted automatically if no pending edit existed. A page-exit `beforeunload` decision did not amount to consent for the later Dataset replacement.

The local correction requires an in-app replacement decision whenever startup Handoff retrieves a valid Candidate and a valid browser-persisted Dataset was restored. It does not add a prompt for a browser with no restored Dataset. Cancel keeps the restored Dataset; explicit Replace accepts the Candidate; Export and Continue first initiates export of the restored Dataset and then accepts the Candidate. The UI explains that the restored Dataset *may* contain unexported edits; it does not claim to know its export history. Even same-content re-acquisition takes this guarded path, since Dataset identity alone cannot establish whether the browser copy is independently recoverable.

The existing cross-tab revision and peer-work checks remain at the acceptance write. A refusal keeps the Candidate and restored Dataset; the dialog exposes the safety error and allows Cancel or an explicit retry. Handoff fetch/validation failure leaves the restored Dataset in place. Startup revalidation reconstructs Current Dataset warnings; Candidate warnings remain separate until successful acceptance. The ordinary import and page-exit contracts are unchanged. No Core, Extension, Validator, Handoff sender, or shared Dataset Replacement contract changed.

## Verification and limits

Focused DOM integration checks cover persisted A with an unexported title and warnings, Candidate B waiting for a decision, Cancel, explicit Accept, export JSON before Accept, warning ownership, peer refusal, same-content Handoff, failed fetch, and direct first Handoff into an empty browser. The integrated NarrativeLine suite passed **387/387**; focused ESLint and build passed. E2R-SPEC `npm run validate` passed. At this implementation checkpoint, the export test inspected a generated Blob and simulated download click; it did **not** prove operating-system file acquisition. A formal Browser Use inventory call timed out before it identified a target tab or URL, so no real-browser operation or PASS was claimed **at that checkpoint**. The subsequent Human review below supplies distinct browser and file evidence.

## Subsequent Human browser review — 2026-10-27

Human used a dedicated Microsoft Edge profile against the local uncommitted NarrativeLine receiver at `http://127.0.0.1:4188/e2r-narrative-line/`. Human-reported screen evidence supports the following **five bounded browser PASS results**; this is not a formal whole-feature Closure.

| Check | Human observation and boundary |
| --- | --- |
| H1 — saved A | New `TEST-A-KEEP-ME` with 0 Events survived reload and Resume. Same-tab Cedar JA HTTPS Handoff displayed `復元したDatasetを置き換えますか？` and attributed two warnings to the Candidate instead of accepting it automatically. |
| H2 — Cancel | `現在のDatasetを維持` retained A's title and 0 Events; Cedar did not become Current, its Candidate warnings did not enter Current, and Current metadata notification remained. Stored bytes were not compared. |
| H3 — explicit Replace | A second Handoff required `リンク先のDatasetに置き換える`; only then Cedar JA became Current with 12 Events and two Cedar warnings. The prior Current metadata warning did not mix into Cedar. |
| H4 — Export and Continue | A separate restored `TEST-A-EXPORT-ME` with 0 Events was exported through `書き出して続行`, followed by Cedar JA with 12 Events and two warnings. Human acquired and submitted the actual `TEST-A-EXPORT-ME.e2r.json`. A read-only check of `workspace/human-acceptance-20261027-n4/downloads/TEST-A-EXPORT-ME.e2r.json` found 415 bytes, SHA-256 `53704e3439cb06574d227629755c2d5b2d1e321dfe3fa8cd280d54c29e3ea690`, `extensions.metadata.title: TEST-A-EXPORT-ME`, empty Entity/Event/Relation arrays, and a Specification `0.1.0` declaration with `uses: [{ extension: "metadata", version: "1.0.0" }]`. This is file acquisition and content evidence, not merely a download notification. |
| H5 — empty profile | Human checked `edge://version` for `C:\Users\extra\E2R\workspace\human-acceptance-20261027-n4\edge-profile-empty\Default` and used its prepared Cedar shortcut. Cedar opened with its title, 12 Events and two warnings, without a replacement dialog. |

## Formal Human decision — 2026-10-27

Human formally accepted and closed **H1–H5 only** at the reviewed local Runtime (NarrativeLine HEAD `bb38fa904a38404845ec7afe097bf0dd2072e487` plus uncommitted corrections) and isolated Edge boundary. The acquired JSON and the five browser observations above are the acceptance basis. This does not establish byte-identical saved Workspace retention, all browsers, broad cross-tab safety, actual Hub UI entry into the local receiver, or Human acceptance of the entire N4 matrix. The [separate F2 audit](narrativeline-n4-integrated-safety-and-acceptance-evidence-2026-10-27.md) records repeat acquisition/confirmation after reloading a retained Handoff URL as source/DOM evidence only. The prior concern about unconfirmed browser-native `beforeunload` behavior remains distinct from the observed in-app guard after reload. This bounded closure does not authorize a Commit, Push, deployment, publication, or Public Beta GO.

This is a bounded response to the Human's adopted safety direction. N4 Warning Ownership, the independently accepted Current Dataset diagnostic-overflow UI correction, and the independently accepted Hub Gallery correction retain separate scopes. Existing Publication Closure and other Human Acceptance are unchanged. No commit, push, deployment, or Public Beta GO is authorized by this record.

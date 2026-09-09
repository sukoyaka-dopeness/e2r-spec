# LiaisonScape Armstrong–Eagle Pointer-up Session Correlation Diagnosis

Date: 2026-09-10

Checkpoint: `E2R-LIAISONSCAPE-ARMSTRONG-EAGLE-SESSION-CORRELATION1`

Status: bounded diagnostic instrumentation record; non-normative; no governed
evidence and no Product acceptance

## Purpose and boundary

The user reported that the actual Apollo `spacing=220` Product can still show a
side flip for `Neil Armstrong -> Lunar Module Eagle — operates` at pointer-up.
The immediately supplied diagnostic instead reported Armstrong with `0`
pointermoves, `0` presentation computations, and no changed routes. This
checkpoint first resolves whether those two observations refer to one drag. It
does not change routing policy, initial placement, spacing, or Fresh12 history.

The prior bounded routing correction remains `68a1369`
`fix: preserve safe incident route through finalization`. The diagnostic-only
implementation checkpoint is LiaisonScape `2d63061`
`diag: correlate drag traces by session`.

## Lifecycle finding

### PROVEN

1. The diagnostic seam starts its timing record only when a document-capture
   `pointerdown` finds a graph element with `data-entity-id`, and counts only
   subsequent document-capture `pointermove` events with the same
   `pointerId`.
2. On `pointerup` or `pointercancel`, the seam immediately replaces its single
   `latestDragTimingReport`. A later no-movement pointer-down/up can therefore
   replace a previous meaningful drag with a report showing `0 pointermoves`.
3. The prior report's `0 pointermoves` and `0` computations cannot be used as
   evidence for a visible side flip. It proves only that the reported session
   saw no matching move before completion, or that the move was outside the
   seam's captured pointer lifecycle; it does not identify the user's visible
   flip.
4. Route-transition reporting previously recovered the node identity from the
   mutable latest timing report. The new seam carries the pending session
   identity from the same `pointerdown` through `pointerup` and the finalizing
   route snapshot.

### STRONGLY SUPPORTED

- The most likely way a successful drag became paired with a zero-move report
  is a later click/tap or other no-movement interaction overwriting the
  singleton latest report. The code permits this, but the supplied log alone
  cannot prove which later interaction occurred.
- A visible flip and a diagnostic saying `changed routes none` are therefore
  currently a correlation failure, not evidence that the routing correction
  did or did not apply.

### UNRESOLVED

- No new clean physical Armstrong-to-Eagle flip was captured in this
  checkpoint because the Windows Computer Use browser session timed out twice,
  including after an explicit session reset. No visual or route classification
  is inferred from that failed automation attempt.
- It remains unknown whether the user's real flip is same-geometry and
  final-safe, same-geometry but final-unsafe, release-coordinate different,
  or a rendering/label-presentation mismatch.

## Diagnostic correction

`2d63061` assigns a monotonically increasing `drag session #N` at the captured
node `pointerdown`. Both the timing report and pointer-up route-transition
report now show:

```text
drag session #N
node ID
captured pointermove count
```

The route-transition report receives its session ID, node ID, and pointermove
count from the pending session object rather than from a later mutable timing
report. This prevents a later zero-move report from changing the identity of
the route transition being finalized. It does not manufacture missing events:
if the session genuinely has zero pointermoves, the UI reports zero for that
specific session.

## Required representative capture

On a clean actual Product page, select the route diagnostic target
`Neil Armstrong -> Lunar Module Eagle — operates`, then perform one physical
Armstrong drag across the NASA area and release. Copy the timing and transition
blocks before starting another click or drag. The same session number must
appear in both blocks.

The minimum classification fields are:

```text
session #N
node = armstrong
route = entity-4
pointermoves > 0
active routing position
final routing position
same node geometry YES / NO
active route shape / offset / authority
final route shape / offset / authority
continuity reused / rerouted
node, label, occupied-path blockers
remote route outcomes
```

Interpretation remains bounded:

```text
same geometry + active route final-safe + final fresh flip
  => 68a1369 correction gap

same geometry + final safety blocker
  => genuine final safety reroute

different release geometry
  => expected exact-endpoint fail-closed reroute

continuity says previous-route but visible side flips
  => route geometry / rendering / label-presentation mismatch
```

## State

```text
session correlation instrumentation = IMPLEMENTED
clean actual flip capture = NOT CAPTURED / WAITING FOR USER OR CUA RECOVERY
68a1369 boundary classification = UNRESOLVED
initial placement redesign = NOT STARTED
new governed Fresh lineage = NOT STARTED
Fresh10 / Fresh11 / Fresh12 historical evidence = unchanged
Fresh12 canonical Human Review result = unchanged
push / tag / release / deploy / publication = NOT PERFORMED
```

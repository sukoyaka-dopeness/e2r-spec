# Status

Design / visual comparison only. No NarrativeLine production source, CSS, tests, or Relation presentation code was changed. Final recommendation: **RECOMMEND CANDIDATE C — COMPACT ROLE-SEPARATED HYBRID**.

Candidate B Formal Visual / Manual Acceptance remains pending. Capability Handoff remains CLOSED / ACCEPTED.

# Why this comparison exists

The G1 follow-up identified long-name robustness risk in the current compact endpoint line. This checkpoint compares three concrete presentation candidates in the repeated Entity deletion blocker context, where endpoint identity is safety-relevant.

# Current NarrativeLine presentation

Candidate A currently presents:

```text
<Relation name>
<source identity> 竊・<target identity>
<Relation ID hint when needed>
```

It is compact and scans well for short names. Source and target share one wrapping context.

# LiaisonScape comparison evidence

The manually inspected LiaisonScape Entity deletion blocker presents Relation name, Source, and Target as distinct identity fields. This is useful Cross-App evidence for role clarity under long names, not normative E2R UI authority and not a pixel-identical styling requirement.

# Destructive-review responsibility

The user must identify the exact incident Relation and both endpoints before selecting `Remove connection`. Role clarity therefore outweighs minimum height when names wrap. Relation and deletion semantics remain unchanged.

# Candidate A — current compact form

Candidate A has the lowest height and the strongest short-card rhythm. With a long source, long target, or both, wrapping can obscure endpoint boundaries and make the arrow the only role cue. It remains acceptable for short names and the least complex to preserve, but is weakest for the destructive-review worst case.

# Candidate B — full role-separated form

Candidate B presents three explicitly labeled rows:

```text
Relation name  <name>
Source         <source identity>
Target         <target identity>
```

It provides the strongest role clarity and independent endpoint wrapping, especially when both endpoints are long. Its costs are greater height, more label-width pressure in JA, and weaker eight-card density. Exact LiaisonScape geometry is not selected or accepted.

# Candidate C — compact role-separated hybrid

Candidate C keeps the Relation name visually primary while using compact explicit endpoint rows:

```text
<Relation name>
Source  <source identity>
Target  <target identity>
```

The Japanese equivalent uses the existing localized endpoint-role labels without requiring a fixed EN-width label column. Values should wrap independently beneath or alongside their role label according to available width. This retains the safety benefit of explicit roles while avoiding a mandatory visible `Relation name` row label.

# Short-name comparison

Candidate A gives the shortest and fastest repeated-card scan. Candidate B is clearest but adds a full row and visual weight. Candidate C adds endpoint rows but keeps the Relation name prominent, producing a modest height increase and a more balanced repeated rhythm than B.

# Long-source comparison

Candidate A allows the source wrap to visually merge with the target context. Candidate B isolates the source value under its label. Candidate C provides the same role boundary with less label overhead; the target remains independently identifiable.

# Long-target comparison

The same asymmetry applies when only the target is long. A's shared line makes the arrow and target boundary less stable after wrapping. B and C keep the target role explicit. C preserves compact spacing while allowing the long value to consume its own row.

# Both-endpoints-long comparison

This is the decisive case. Candidate A can become a multi-line endpoint block whose source/target boundary requires careful reconstruction. Candidate B is clearest but tallest. Candidate C maintains separate Source and Target reading order and independent wrapping, while avoiding B's additional visible field-label row. C best balances safety clarity and card density.

# EN / JA comparison

English `Relation name`, `Source`, and `Target` are short enough for compact labels. Japanese labels have different intrinsic widths and must not be forced into an EN-derived fixed column. A localized C implementation should use intrinsic or responsive label sizing and preserve independent value wrapping. No candidate requires identical physical label widths across locales.

# Multiple-card comparison

The Clara fixture contained eight blocker cards. A is easiest to scan by height but becomes harder to scan when endpoint wraps differ. B maximizes endpoint clarity but increases scroll distance and visual fatigue. C adds a predictable two-row endpoint rhythm while retaining a prominent Relation name, making it the best compromise for eight-card review.

# Narrow-width comparison

At the recovered 360px viewport, the blocker remained populated and action controls remained visible. A has fewer nominal rows but its shared endpoint wrapping is hardest to parse. B is robust semantically but tall. C should stack or wrap each labeled endpoint independently, tolerate increased card height, and avoid horizontal overflow or label/value collision. Height alone is not a reason to reject role separation.

# Self / parallel / Event-related Relations

Explicit roles remain useful for self Relations: `Source A` and `Target A` confirm direction and avoid relying on an ambiguous `A 竊・A` line. For parallel Relations, the Relation name plus repeated explicit endpoints makes cards easier to distinguish. For Event-related or hidden Relations, the same identity structure remains understandable without introducing new Entity/Event type labels.

# Endpoint and Relation hint compatibility

Existing duplicate endpoint-name hints must be preserved and allowed to wrap with the relevant endpoint value. The existing rule that a Relation ID hint appears only when ambiguity requires it remains unchanged. Under B or C, the ID hint belongs after the identity rows as secondary information, visually separate from Source and Target. Hints must not be mistaken for role labels.

# Action-group coexistence

The comparison keeps Candidate B ordinary actions visible: `Remove connection` and `Open in LiaisonScape`. C leaves a clear identity-to-action boundary while adding only the minimum identity height needed for role clarity. The existing centered native-button versus start-aligned anchor label finding is not judged or changed here.

# Cross-App boundary

LiaisonScape supplies comparison evidence only. This recommendation reuses responsibility separation, not identical markup, typography, or styling. NarrativeLine and LiaisonScape are not required to render Relation identity identically.

# Comparison table

| Criterion | A: compact | B: full role-separated | C: compact role-separated |
| --- | --- | --- | --- |
| Short-name compactness | strongest | weakest | strong |
| Long-name role clarity | weak | strongest | strong |
| Both endpoints long | fragile | strongest | strong |
| Eight-card scanability | height-best, boundary-worst | clarity-best, tallest | balanced |
| EN/JA resilience | wrapping ambiguity | label-width pressure | responsive label/value balance |
| 360px resilience | compact but ambiguous | clear but tall | clear with acceptable height |
| Self/parallel clarity | adequate | strongest | strong |
| Hint compatibility | existing | rows isolate hints | rows isolate hints |
| Action coexistence | strongest height | most height pressure | balanced |
| Implementation complexity | lowest | higher | bounded/moderate |
| Cross-App coupling risk | none | higher if copied literally | low if responsibility-only |

# Decision

**RECOMMEND CANDIDATE C — COMPACT ROLE-SEPARATED HYBRID.** It is preferred because it makes Source and Target independently scannable in the long-name destructive-review case while preserving Relation-name prominence and avoiding unnecessary LiaisonScape geometry coupling. This is a recommendation only; no implementation is performed here.

# Future implementation boundary

A later bounded implementation may modify only Relation identity markup/presentation inside repeated Entity deletion blocker cards. It should retain the existing Relation name, add explicit localized Source and Target rows, allow endpoint values to wrap independently, keep Relation ID hints secondary after the identity rows, preserve duplicate-name hint semantics, and maintain the existing ordinary/narrow action group unchanged. Ordinary width should use compact rows; at 360px values may wrap or stack without horizontal overflow. No visible `Relation name` label is required by this recommendation.

# Formal acceptance boundary

Candidate B Formal Visual / Manual Acceptance remains pending and is not restarted or completed. Candidate C is not formally accepted. Control-label alignment remains a separate unresolved MATCHED-GROUP PATTERN follow-up. Capability Handoff remains CLOSED / ACCEPTED.

# Explicit exclusions

- No NarrativeLine runtime, CSS, tests, messages, or RelationPresentationService changes.
- No LiaisonScape, Hub, ai-knowledge, roadmap, Core, Extension, or schema changes.
- No endpoint separator change, Candidate B action change, control-label alignment fix, deletion/focus/Handoff change, push, or deploy.
- No Source/Target rows were implemented; temporary visual comparison is not production behavior.

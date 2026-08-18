# Automatic Layout Experiment 1E - Node-Label Recovery Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
INCONCLUSIVE / DENSITY-LIMITED
```

Experiment 1E tested whether automatic Node labels that had escaped during a
collision could recover toward their ordinary preferred placement after the
constraint disappeared. The experiment followed the observation that
previous-placement hysteresis improves stability but can keep an escaped
placement stable.

## Scope tested

The existing 32-direction Angular Freedom behavior and baseline Node-label
distance formula were retained. The temporary recovery gate changed only how
previous placement was used for automatic Node labels:

1. calculate the existing candidates and their ordinary base scores;
2. identify the preferred candidate without movement/stability cost;
3. treat existing occupied-label overlap and other-Node proximity as the
   existing hard collision conditions;
4. if the preferred candidate was free of those conditions, allow recovery to
   it without previous-placement hysteresis;
5. otherwise retain the existing hysteresis behavior.

Relation-path scoring, collision weights, collision geometry, Relation labels,
spacing, fitting, persistence, and Dataset behavior were not changed.

## Findings

At ordinary initial graph density, far-away Node labels generally remained far
away. When Nodes were moved substantially farther apart, the same labels could
return closer to their owning Nodes.

This indicates that recovery is possible when sufficient local space genuinely
becomes available. Ordinary initial graph density often prevents the nearby
preferred candidate from becoming free, so the recovery gate does not activate
in the cases where the initial label feels distant.

The evidence therefore strengthens graph geometry density as an upstream
factor. It does not establish that previous-placement hysteresis is irrelevant
or disproved as a contributor. Hysteresis remains useful for stability, while
the original recovery problem remains a separate valid concern. Relation-label
recovery was not tested.

The exact recovery gate was not adopted and the temporary implementation was
rolled back. The 32-direction baseline was retained. The next bounded
experiment is Experiment 1F - Anisotropic Derived Spacing.

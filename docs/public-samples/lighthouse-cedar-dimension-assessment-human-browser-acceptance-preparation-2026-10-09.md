# Lighthouse and Cedar ParameterPlotter Browser Acceptance Preparation

Date: 2026-10-09

Status: **PREPARED / HUMAN BROWSER ACCEPTANCE PENDING**

## Local application

The ParameterPlotter source is running at <http://localhost:4184/> from
`C:\Users\extra\E2R\e2r-parameter-plotter`. The normal `npm.cmd start` port
`4180` was already occupied, so this review server was started with
`PORT=4184`. If the process is no longer running, start it from the
ParameterPlotter directory with:

```powershell
$env:PORT = '4184'
npm.cmd start
```

ParameterPlotter does **not** fetch a Dataset from a URL Fragment. Its fragment
parser handles the `locale` key (for example `#locale=ja`); it does not
implement `datasetUrl` or another Dataset-fetch key. The supported review path
is to open the application and use **More → Open Dataset**, then choose one of
the files below. No public URL is claimed for these local, unpushed changes.

## Exact owner Dataset files

| Dataset | EN | JA | Expected content |
|---|---|---|---|
| Lighthouse Restoration Project | `C:\Users\extra\E2R\e2r-spec\examples\lighthouse-restoration-demo.en.e2r.json` | `C:\Users\extra\E2R\e2r-spec\examples\lighthouse-restoration-demo.ja.e2r.json` | 10 Entities, 5 Dimensions, 31 Assessments |
| Cedar Observatory: An Open Night | `C:\Users\extra\E2R\e2r-narrative-line\src\sample\cedar-observatory-showcase.en.e2r.json` | `C:\Users\extra\E2R\e2r-narrative-line\src\sample\cedar-observatory-showcase.ja.e2r.json` | 6 Entities, 4 Dimensions, 15 Assessments |

These are the owner-source files on this machine. Browser changes are not
written back to the selected JSON; use the application's Export action only
for a separate review copy. Opening another file follows the app's existing
Dataset replacement safety flow.

## Human review checklist

For all four files, review Dataset loading, localized Dimension names,
Descriptions and endpoint labels, Matrix distinctions between recorded values
and unassessed cells, and retention of existing values after switching
Datasets. In Profile, inspect person and non-person Entities. In Quadrant,
compare Entities only on selected axes for which each plotted Entity has both
recorded Assessments. In Radar, confirm the selected assessed Dimensions are
shown without inventing missing values.

For Cedar specifically, confirm the four remaining Dimensions and 15 recorded
Assessments, and confirm `cedar.technical-role-expertise` is absent. The
Neighborhood Visitors' invitation role remains an explicit score; no
attendance, observing experience, or operational contribution is asserted.

Human Browser Acceptance remains pending until Human reviews the four datasets
in the browser. Automated validation and any Codex-operated browser checks are
separate evidence and do not close this acceptance.

## Evidence boundary

This local preparation does not change Hub links, add application features,
or publish these working-tree revisions. A remote link will expose only the
currently published file revision, if any, and is not a substitute for opening
the local owner file. Fragment/Handoff implementation details for other E2R
applications do not establish a ParameterPlotter contract.

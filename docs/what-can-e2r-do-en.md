# What Can E2R Do?

E2R is a JSON specification for representing and exchanging Datasets of
Events, Entities, and Relations. It lets one Dataset remain useful across
different applications and workflows. E2R itself does not provide a timeline,
graph, PDF, or fact check; an application or workflow uses the Dataset to do
those things.

## Reuse one Dataset

The same Dataset can describe something that happened, the people and places
involved, and the connections among them. A timeline application can focus on
Events and History data, while a graph application can focus on Entities and
Relations. The Core structure remains the same.

## Choose a structure for your goal

| Goal | Main structure | What an application or workflow can do |
| --- | --- | --- |
| Record something that happened | Event | Describe an occurrence, action, transition, or change. |
| Place Events in time | Event + History Extension | Present recorded temporal information in a timeline. |
| Represent a person, organization, place, or object | Entity | Reuse the same identifiable subject across connections. |
| Connect Core Objects | Relation | Show that two Events or Entities are connected. |
| Give a Dataset a title | Metadata Extension `title` | Display or suggest a human-readable title. |
| Identify a Dataset across ordinary exchange | Metadata Extension `datasetId` | Preserve a Dataset identifier when one is present. |
| Explore relationships | Entity + Relation | Support an Entity-first relationship graph. |
| Give structured input to AI | E2R Dataset | Support analysis, summarization, or a proposed transformation. |
| Check supported structural rules | Dataset + Validator | Find structural and supported-Extension conformance errors. |

`datasetId` and `title` are optional Metadata fields. A Dataset without either
one is still valid when it meets the Core requirements.

## Add information without expanding the Core

The Core answers three structural questions: what exists, what happened, and
what is connected. Extensions add information that the Core does not need to
standardize. For example, the History Extension records temporal information,
and the Metadata Extension records Dataset-level title and identity data.

An application that does not recognize an Extension must ignore it when
reading the Dataset and should preserve it whenever practical. This allows
specialized tools to exchange the same Core data without requiring identical
features.

## Exchange between applications and workflows

NarrativeLine is an application that edits and presents E2R Datasets as
Event-focused timelines. Linkscape is designed as an Entity-first relationship
graph reference application; its repository exists, but this design should not
be read as a statement that a particular implementation is ready to use.

The Dataset can also be supplied to an AI or another application as structured
input. That workflow decides what to produce, such as an explanation,
presentation, or PDF. The output is not defined by E2R itself.

## Validate structure, then review content

The Validator checks Core and supported Extension structure. It can report
errors and warnings without altering the input. A successful validation result
does not establish that historical claims, sources, or generated prose are
factually correct. Those require an appropriate evidence-review process and
human judgment.

## Next steps

Read the [Dataset Walkthrough](dataset-walkthrough-en.md) to build a Dataset
step by step, then consult the [Core specification](../spec/core.md) for
normative requirements.

# Research Topic: Packaged Calendars, Locales, Dictionaries, and Authoring Profiles

Status: exploratory, non-normative

## Idea

Investigate whether calendars, language resources, dictionaries, orthography,
and writing styles can be distributed as versioned, composable packs around E2R.
The same mechanism could support community-created calendar packs and, in a
branchable novel-authoring workflow, vocabulary, kanji/orthography, and style
packs.

## Possible pack responsibilities

- **Calendar Pack**: calendar rules, eras, leap rules, conversion data, and
  display-neutral calendar semantics, including fictional calendars.
- **Locale Pack**: localized names and formatting for dates, eras, numbers, and
  user-interface text. A locale must remain separate from a calendar because a
  calendar may be displayed in multiple languages.
- **Dictionary / Vocabulary Pack**: identified terms, meanings, aliases, and
  external identifiers that help interpret Dataset content.
- **Orthography Pack**: spelling and script policies such as traditional versus
  simplified characters, variant forms, and work-specific notation.
- **Style Pack**: rendering or generation guidance for voice, sentence endings,
  narration, dialogue, and historical or genre conventions.
- **Authoring Profile**: optional higher-level workflows or templates that
  combine the above resources for a particular creative practice.

## Architectural hypothesis

Packs should be independently versioned and distributable, with a common
manifest containing identifiers, versions, kind, features, dependencies,
compatibility information, languages, licensing, publisher, and resources.
The manifest and dependency model should be distinguished from Dataset
Extension payloads: one describes available implementation resources, while the
other records Dataset content and declarations.

For branchable fiction, a useful conceptual pipeline is:

`story structure + authored text + Style Pack + Orthography Pack -> rendered or generated manuscript`

Changing a style or orthography pack should not silently rewrite the source
Dataset. A generated result becomes Owned content only through an explicit
adoption operation; otherwise it remains Derived output.

## Research questions

1. What is the smallest common pack manifest and dependency model?
2. Which resources are executable rules, declarative data, or application-only
   presentation guidance?
3. How should packs declare compatibility with E2R Extensions and with one
   another without enlarging the Core?
4. How are provenance, licensing, trust, offline retention, and deterministic
   version selection handled?
5. How should conflicts between dictionary, orthography, locale, and style
   packs be reported without guessing?
6. How can pack application remain reproducible across branches and across
   applications?
7. Which parts belong in a future Calendar, Locale, Dictionary, or authoring
   Extension, and which belong only to application tooling?

## Boundaries

This topic does not authorize a Core change, a Stable Extension, automatic
semantic interpretation of dictionaries, or automatic rewriting of authored
text. Calendar rules must not be mixed into the current History Extension
without a separate compatibility decision. Style and orthography are
presentation or authoring responsibilities unless a user explicitly adopts the
result as Dataset content.

## Related work

- `extensions/dictionary-extension.md`
- `extensions/history-extension.md`
- `extensions/specification-extension.md`
- `research/extension-architecture/decisions/extension-identity-and-payload-key-decision.md`
- `docs/application-design-principles.md`
- `docs/application-recommendations.md`

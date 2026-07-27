# Dictionary Extension

The Dictionary Extension defines reusable semantic dictionaries for E2R datasets.

Rather than embedding every semantic definition directly into Entities, Events, or Relations, applications may reference entries in one or more dictionaries.

This enables consistent terminology, reuse across datasets, localization, and AI-assisted interpretation.

---

# Goals

The Dictionary Extension aims to:

- Separate semantics from Core objects.
- Reuse common definitions.
- Reduce duplication.
- Improve interoperability.
- Support localization.
- Support AI-readable semantic definitions.

---

# Design Principles

The Core specification intentionally assigns minimal meaning to object fields.

The Dictionary Extension allows applications to attach richer semantics without increasing Core complexity.

A dictionary defines *what something means*, not *how it is displayed*.

---

# Dictionary Entries

A dictionary consists of uniquely identified entries.

An entry may describe:

- Entity categories
- Event categories
- Relation categories
- Tags
- Roles
- States
- Application-defined concepts

Example:

```json
{
  "dictionary": {
    "PERSON": {
      "name": "Person"
    },
    "CITY": {
      "name": "City"
    }
  }
}
```

---

# Referencing Dictionary Entries

Core objects may reference dictionary entries.

Example:

```json
{
  "entity": {
    "id": "en001",
    "dictionaryId": "PERSON",
    "name": "Ada Lovelace"
  }
}
```

Applications that do not understand the Dictionary Extension may safely ignore the reference.

---

# Relation Dictionaries

Relation semantics may also be defined in dictionaries.

Example:

```json
{
  "dictionary": {
    "PARENT_OF": {
      "name": "Parent Of"
    }
  }
}
```

```json
{
  "relation": {
    "dictionaryId": "PARENT_OF"
  }
}
```

This allows applications to share common relationship vocabularies.

---

# Event Dictionaries

Common event types may also be shared.

Example:

```json
{
  "dictionary": {
    "BIRTH": {
      "name": "Birth"
    },
    "MARRIAGE": {
      "name": "Marriage"
    }
  }
}
```

Applications may use these entries for categorization while still allowing free-form event names.

---

# Localization

Dictionary entries may provide localized labels.

Example:

```json
{
  "dictionary": {
    "PERSON": {
      "label": {
        "en": "Person",
        "ja": "人物"
      }
    }
  }
}
```

Applications may display the most appropriate label for the user's language.

---

# Rich Definitions

Dictionary entries may contain additional information.

Possible fields include:

- Description
- Synonyms
- Examples
- Documentation
- External references

Example:

```json
{
  "dictionary": {
    "BATTLE": {
      "name": "Battle",
      "description": "A military conflict between organized forces."
    }
  }
}
```

The exact structure is application-defined.

---

# Multiple Dictionaries

A dataset may contain multiple independent dictionaries.

Examples:

- Entity Dictionary
- Event Dictionary
- Relation Dictionary
- Role Dictionary
- Application Dictionary

Applications may use whichever dictionaries they understand.

---

# External Dictionaries

Future applications may reference dictionaries stored outside the dataset.

Possible examples include:

- Shared community vocabularies
- Domain-specific dictionaries
- Organization-specific dictionaries

The mechanism for external references is intentionally left unspecified.

---

# Unknown Dictionary Entries

Applications MUST safely ignore unknown dictionary entries.

Likewise, unknown dictionary fields MUST be ignored.

This preserves forward compatibility.

---

# Relationship to the Core

The Dictionary Extension does not change the Core data model.

Datasets remain fully interpretable even when dictionaries are absent.

Dictionaries enrich semantic meaning without becoming mandatory.

---

# Future Directions

Possible future developments include:

- Ontology integration
- AI-generated dictionaries
- Automatic dictionary extraction
- Shared online vocabularies
- Dictionary versioning
- Semantic validation
- Dictionary inheritance
- Self-describing specifications

The Dictionary Extension may eventually serve as a foundation for richer semantic interoperability while preserving the simplicity of the Core specification.

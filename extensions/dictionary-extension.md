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
  "extensions": {
    "dictionary": {
      "entries": {
        "PERSON": {
          "name": "Person"
        },
        "CITY": {
          "name": "City"
        }
      }
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
    "name": "Ada Lovelace",
    "extensions": {
      "dictionary": {
        "entryId": "PERSON"
      }
    }
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
  "extensions": {
    "dictionary": {
      "entries": {
        "PARENT_OF": {
          "name": "Parent Of"
        }
      }
    }
  }
}
```

```json
{
  "relation": {
    "extensions": {
      "dictionary": {
        "entryId": "PARENT_OF"
      }
    }
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
  "extensions": {
    "dictionary": {
      "entries": {
        "BIRTH": {
          "name": "Birth"
        },
        "MARRIAGE": {
          "name": "Marriage"
        }
      }
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
  "extensions": {
    "dictionary": {
      "entries": {
    "PERSON": {
      "label": {
        "en": "Person",
        "ja": "人物"
      }
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
  "extensions": {
    "dictionary": {
      "entries": {
        "BATTLE": {
          "name": "Battle",
          "description": "A military conflict between organized forces."
        }
      }
    }
  }
}
```

The exact structure is application-defined.

---

# Dictionary Identity and Scope

The current Dictionary Extension defines one Dataset-level `dictionary`
Extension value containing reusable `entries`. Entry identifiers are unique
within that dictionary.

The Extension does not currently define a required global Dictionary ID. An
application that needs to distinguish multiple dictionaries MUST use a
separate, explicitly defined structure rather than placing a new Core field on
Entity, Event, or Relation.

## Multiple Dictionaries

A dataset may contain multiple independent dictionaries.

Examples:

- Entity Dictionary
- Event Dictionary
- Relation Dictionary
- Role Dictionary
- Application Dictionary

The representation and reference rules for multiple dictionaries are not yet
standardized. Applications may use whichever dictionaries they understand, but
must not assume that an entry identifier is globally unique across dictionaries.

---

## External Dictionaries

Future applications may reference dictionaries stored outside the dataset.

Possible examples include:

- Shared community vocabularies
- Domain-specific dictionaries
- Organization-specific dictionaries

The mechanism for external references is intentionally left unspecified. URL,
package, and registry-based references remain future design candidates and are
not required for Dictionary Extension interoperability today.

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

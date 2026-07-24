# Core Philosophy

- Coreは最小限である。
- 意味はSemantic Extensionへ委譲する。
- 表示はPresentation Extensionへ委譲する。
- CoreだけでJSONを解釈できる。
- 未知のExtensionは安全に無視できる。
- Single Source of Truthを維持する。

## Separation of Responsibilities

E2R separates data, behavior, and presentation into independent layers.

### Core

The Core defines the minimum interoperable data model shared by all applications.

### Extensions

Extensions add optional data without changing the meaning of the Core.

Extensions should not require other Extensions in order to remain valid, although applications may optionally make use of additional Extensions when available.

### Applications

Applications implement behavior.

Applications create, edit, analyze, and transform E2R Datasets according to the Extension specifications they support.

Multiple applications may edit the same Extension as long as they understand its specification.

### Views

Views define how information is presented to users.

Different applications may provide entirely different Views while sharing exactly the same underlying dataset.

Examples include:

- Timeline
- Relationship Diagram
- Calendar
- Feature Space
- List

The View is not part of the Core data model.

### Architectural Principle

Data, behavior, and presentation evolve independently.

This separation allows new applications, Extensions, and Views to be introduced without requiring changes to the Core specification.



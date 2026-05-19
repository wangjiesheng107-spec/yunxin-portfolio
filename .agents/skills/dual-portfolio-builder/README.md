# dual-portfolio-builder

## What This Skill Does

This Codex Skill helps build a same-source personal portfolio project:

- A web portfolio for online viewing and interaction.
- A PDF portfolio for HR delivery, applications, and interview preparation.
- One shared data source so the web page and PDF do not drift apart.
- Reference-image style extraction for color, layout, typography, cards, spacing, and mood.
- A Playwright-based PDF export workflow.

## How To Call It In Codex

In this project, ask Codex in plain language, for example:

```text
Use dual-portfolio-builder to build my web + PDF portfolio.
```

or:

```text
根据 references 里的样图和 assets 里的作品截图，帮我做一个同源双版本作品集。
```

You can provide:

- `content/`: resume text, project notes, portfolio drafts.
- `assets/`: avatar, project screenshots, work samples.
- `references/`: style references, portfolio screenshots, PDF layout examples.

## Why Store It In `.agents/skills`

The `.agents/skills/dual-portfolio-builder/` folder lives inside this project instead of only on one computer. When this folder is committed to Git, the Skill travels with the portfolio repository.

That means another computer can clone the same repository and still have the project-specific Skill available, including its instructions, reference docs, scripts, and starter assets.

## Continue On Another Computer

1. Clone this project repository.
2. Open the project in Codex.
3. Confirm `.agents/skills/dual-portfolio-builder/` exists.
4. Ask Codex to use `dual-portfolio-builder`.
5. Continue editing the portfolio content, reference images, and PDF export workflow from the same project files.

Main files to edit when building the portfolio:

```text
src/data/portfolio.ts
design-system.md
assets/
references/
```

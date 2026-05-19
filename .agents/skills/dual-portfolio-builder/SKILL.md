---
name: dual-portfolio-builder
description: Use this skill to create a same-source personal portfolio with both a responsive web version and an A4 PDF version. It supports reference-image style extraction, a unified portfolio data source, dedicated web and PDF routes, and Playwright-based PDF export. Trigger for requests to build, redesign, imitate reference styles for, or export a personal portfolio for HR, product, AI, internship, or similar career applications. Do not use for ordinary resumes only, slide decks, or unrelated websites.
---

# Dual Portfolio Builder Skill

## Goal

Build a same-source dual-version personal portfolio:

1. A responsive web portfolio for online presentation and interaction.
2. A PDF portfolio for job applications, interviews, and HR delivery.
3. Both versions must read from the same structured data source.

The default stack is:

- Vite
- React
- TypeScript
- CSS Modules or Tailwind
- Playwright for PDF export if needed

## Core Principle

Do not maintain two separate content versions.

Use one shared data file:

```text
src/data/portfolio.ts
```

Both the web portfolio and PDF portfolio must import and render data from this file.

## Bundled Resources

Load these only when needed:

- `references/portfolio-structure.md`: section order and web/PDF content guidance.
- `references/style-analysis-rubric.md`: how to extract transferable style rules from reference images.
- `references/pdf-layout-rules.md`: print, page break, and A4 layout rules.
- `assets/starter-portfolio-data.ts`: copy or adapt when creating `src/data/portfolio.ts`.
- `assets/sample-design-system.md`: copy or adapt when no references are provided.
- `scripts/export-pdf-template.mjs`: copy to the project as `scripts/export-pdf.mjs` and adjust the output filename.

## Required Workflow

You are building a same-source dual-version personal portfolio.

The final output must include:

1. A responsive web portfolio for online presentation and interaction.
2. A dedicated A4 PDF portfolio page for job applications and HR delivery.
3. A shared content data source used by both the web version and the PDF version.
4. A reusable design system extracted from reference images if provided.
5. A working PDF export workflow.

The default technology stack is:

- Vite
- React
- TypeScript
- CSS / Tailwind CSS
- Playwright for PDF export

### Step 1: Inspect the Current Project

First, inspect the current working directory.

Check whether the project already exists.

If the directory is empty or does not contain a frontend project:

- Create a Vite + React + TypeScript project.
- Set up a clean folder structure.
- Install only necessary dependencies.

If the directory already contains a frontend project:

- Read `package.json`.
- Understand the current file structure.
- Reuse the existing structure as much as possible.
- Do not delete existing files unless clearly unnecessary.
- Do not overwrite user content without checking its purpose.

Expected project structure:

```text
src/
  components/
  data/
  pages/
  styles/
  utils/
public/
assets/
references/
content/
scripts/
```

### Step 2: Collect and Parse User Inputs

Look for the following input folders:

```text
content/
references/
assets/
```

Expected files may include:

```text
content/portfolio.md
content/resume.md
references/*.png
references/*.jpg
references/*.jpeg
assets/avatar.*
assets/project-screenshot.*
```

Use available content to build the portfolio.

If some information is missing, create clear editable placeholders instead of stopping.

Do not ask unnecessary questions. Make reasonable assumptions and continue.

### Step 3: Create the Shared Portfolio Data Source

Create or update:

```text
src/data/portfolio.ts
```

All portfolio content must be stored here.

Both the web portfolio and the PDF portfolio must read from this same data file.

The data schema should include:

```ts
export const portfolio = {
  profile: {
    name: "",
    title: "",
    positioning: "",
    summary: "",
    avatar: "",
    location: "",
    email: "",
    links: []
  },

  metrics: [],

  education: [],

  experiences: [],

  projects: [],

  skills: [],

  targetRoles: [],

  contact: {}
}
```

Each experience item should include:

```ts
{
  company: "",
  role: "",
  time: "",
  location: "",
  summary: "",
  responsibilities: [],
  achievements: [],
  keywords: []
}
```

Each project item should include:

```ts
{
  title: "",
  subtitle: "",
  background: "",
  problem: "",
  role: "",
  methods: [],
  process: [],
  outcome: "",
  tools: [],
  highlights: [],
  screenshots: []
}
```

Important rule:

Do not hard-code major content directly inside page components.

Page components should consume `src/data/portfolio.ts`.

### Step 4: Analyze Reference Images

If the `references/` folder contains style images, screenshots, website references, PDF references, or layout samples, analyze them before designing the page.

Read `references/style-analysis-rubric.md` from this skill for the analysis checklist.

Do not directly copy:

- Logos
- Brand names
- Original text
- Copyrighted illustrations
- Exact visual identity
- Pixel-by-pixel layout

Only extract transferable design rules.

Analyze:

- Overall mood
- Color system
- Typography hierarchy
- Layout structure
- Component style
- Visual details
- PDF design rules

After analysis, create:

```text
design-system.md
```

The file should include:

```text
# Design System

## Visual Direction
## Color Palette
## Typography
## Spacing
## Cards
## Buttons
## Tags
## Data Cards
## Web Layout Rules
## PDF Layout Rules
## Do Not Copy
```

Then implement the website and PDF based on this design system.

### Step 5: Build the Web Portfolio

Create the main web portfolio route:

```text
/
```

The web version is for online presentation and interaction.

It should include these sections:

- Hero section
- About section
- Core metrics section
- Experience section
- Project section
- Skills section
- Contact section
- PDF download or export entry

Default positioning:

```text
HR x AI Tools x Product Thinking
```

The Hero section should include:

- Name
- Positioning line
- Short self-introduction
- Core metrics
- CTA buttons

Suggested CTA buttons:

- View Projects
- Download PDF
- Contact Me

The project section should use portfolio-style project cards.

Each project card should clearly show:

- Project background
- Problem solved
- My role
- Method or workflow
- Tools used
- Final result
- Screenshots if available

The web version should be responsive, clean, professional, modern, and suitable for HR, HRBP, HR Tech, product, AI tool, or internship applications.

Avoid overly childish visual style, too many animations, unreadable small text, long unstructured paragraphs, or generic template feeling.

### Step 6: Build the PDF Portfolio Page

Create a dedicated PDF route:

```text
/pdf
```

The PDF page must also read from:

```text
src/data/portfolio.ts
```

The PDF version is not just a browser print of the homepage.

It should be a separate, print-friendly layout designed for HR delivery.

PDF requirements:

- A4 portrait layout
- Professional cover page
- Clear page breaks
- No hover-only information
- No sticky navigation
- No unnecessary animation
- Moderate content density
- Strong headings
- Short paragraphs
- Project-based storytelling
- Suitable for direct PDF export

Recommended PDF structure:

- Page 1: Cover
- Page 2: Profile + Core Strengths
- Page 3: Internship Experience
- Page 4: Project 1
- Page 5: Project 2
- Page 6: Project 3
- Page 7: Contact / Summary

Add print CSS. See `references/pdf-layout-rules.md` for the print checklist.

Example rules:

```css
@media print {
  @page {
    size: A4;
    margin: 12mm;
  }

  body {
    background: white;
  }

  .page {
    width: 210mm;
    min-height: 297mm;
    break-after: page;
    page-break-after: always;
  }

  .no-print {
    display: none;
  }
}
```

Make sure text does not overflow page boundaries.

Make sure project cards do not break awkwardly across pages.

### Step 7: Add PDF Export Workflow

Add a PDF export script using Playwright.

Create:

```text
scripts/export-pdf.mjs
```

Use `scripts/export-pdf-template.mjs` from this skill as the starting point.

The script should:

- Start or assume a local dev server.
- Open `http://localhost:5173/pdf`.
- Export the page as an A4 PDF.
- Use print background.
- Save the file to `dist/wang-jiesheng-portfolio.pdf`.

If the user's name is different, use the user's actual name in the filename.

Add this command to `package.json`:

```json
{
  "scripts": {
    "export:pdf": "node scripts/export-pdf.mjs"
  }
}
```

If Playwright is missing, install it.

Do not install unnecessary PDF libraries unless needed.

### Step 8: Add Editing Instructions

Create a short editing guide:

```text
README.md
```

The README should explain:

- How to install dependencies.
- How to preview the website.
- How to edit portfolio content.
- How to edit the design system.
- How to preview the PDF page.
- How to export the PDF.
- How to deploy the website.

Include commands:

```text
npm install
npm run dev
npm run build
npm run export:pdf
```

Explain that the user should mainly edit:

```text
src/data/portfolio.ts
design-system.md
assets/
references/
```

### Step 9: Quality Check

After implementation, run checks.

Required checks:

```text
npm install
npm run build
npm run export:pdf
```

Also inspect:

```text
/
/pdf
```

Check for:

- TypeScript errors
- Build errors
- Missing images
- Broken links
- Console errors
- Bad mobile layout
- PDF text overflow
- Awkward page breaks
- Inconsistent visual style
- Content duplication between web and PDF

If any problem is found, fix it before finalizing.

### Step 10: Final Response to User

After finishing, respond with a concise summary.

The final response should include:

- What was created.
- Where the user edits content.
- How to preview the web version.
- How to preview the PDF version.
- How to export the PDF.
- Where the exported PDF is saved.
- How to deploy.

Use this response structure:

```text
已完成：

1. 网页版作品集：/
2. PDF 版作品集：/pdf
3. 统一内容数据源：src/data/portfolio.ts
4. 设计系统：design-system.md
5. PDF 导出脚本：scripts/export-pdf.mjs

本地预览：

npm install
npm run dev

导出 PDF：

npm run export:pdf

PDF 输出位置：

dist/wang-jiesheng-portfolio.pdf

后续修改内容时，主要编辑：

src/data/portfolio.ts
```

Do not over-explain internal implementation unless the user asks.

## Core Rules

Always follow these rules:

- Web and PDF must share one content source.
- Do not create two disconnected portfolios.
- Do not copy reference images directly.
- Extract style rules before designing.
- Keep the web version interactive and expressive.
- Keep the PDF version clean and print-friendly.
- Make the project easy for the user to edit later.
- Prioritize working output over excessive complexity.
- Run and fix errors before final response.
- Leave clear commands for preview, export, and deployment.

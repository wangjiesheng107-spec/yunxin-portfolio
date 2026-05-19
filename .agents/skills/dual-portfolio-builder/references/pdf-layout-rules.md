# PDF Layout Rules

Use these rules for the `/pdf` route and exported file.

## Format

- A4 portrait.
- Use fixed print pages with `.page` containers.
- Use a separate PDF layout instead of printing the homepage.
- Keep backgrounds printable with `printBackground: true`.

## Page Rhythm

Recommended sequence:

1. Cover
2. Profile + core strengths
3. Internship experience
4. Project 1
5. Project 2
6. Project 3
7. Contact / summary

Adjust page count to the user's material, but keep the PDF easy to scan.

## Print CSS

Use rules like:

```css
@media print {
  @page {
    size: A4;
    margin: 12mm;
  }

  html,
  body {
    background: white;
  }

  .page {
    width: 210mm;
    min-height: 297mm;
    break-after: page;
    page-break-after: always;
  }

  .avoid-break {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .no-print {
    display: none;
  }
}
```

## Content Rules

- Use concise paragraphs.
- Avoid hover-only content.
- Remove sticky navigation.
- Avoid animation in PDF.
- Keep project cards from splitting awkwardly across pages.
- Ensure text does not overflow page boundaries.
- Prefer visible URLs or clear labels for contact links.
- Use strong headings and compact supporting text.

## Export Check

After export, inspect the PDF for:

- Missing backgrounds
- Cropped text
- Broken images
- Blank pages
- Awkward page breaks
- Tiny unreadable text
- Content duplicated outside the shared data source

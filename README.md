# St John's Church Rebuild

This project now runs as a Next.js App Router site.

## Commands

```powershell
cmd /c npm run dev
cmd /c npm run build
cmd /c npm run start
```

## Notes

- The visible page content is sourced from the rebuilt HTML route files and rendered through Next.js routes, shared layout, and client enhancements.
- The original live site appears to use a separate managed data source for notices and events, so `news-events` remains a static noticeboard plus the regular weekly rhythm.
- Contact and hall hire forms still open the visitor's email client using `mailto:` rather than sending through a backend or third-party form service.

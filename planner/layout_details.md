# Layout Details

> Frontend layout spec. Covers only the app entry point and navigation layout. Individual page content lives in `ui_pages/{page_id}/page.json`.

## Entry Point
- **Default First Page:** `Home` (`page_1`)
- **File:** `src/pages/Home.tsx`
- **Protected:** No (public)
- **How users reach it:** Default first page shown at the root '/' route. Entry point for all visitors. Also accessible by clicking the company logo in the top navigation bar.

## Layout & Navigation
- **Menu Type:** `top_nav_bar` (public landing page with navigation in the top header)

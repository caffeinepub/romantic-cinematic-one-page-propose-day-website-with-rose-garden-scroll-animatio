# Specification

## Summary
**Goal:** Update the Love Letter section heading and body text, and add a subtle animated heart beside the heading.

**Planned changes:**
- In `frontend/src/components/ProposeDayPage.tsx`, change the Love Letter heading text to exactly “Meri Makhan Mishri” and place a cute heart element directly next to the heading.
- Add a gentle looping float/pulse animation to the heart, and disable the animation when the user prefers reduced motion (heart still visible).
- Replace the entire existing Love Letter body text with the provided new narrative, preserving the wording exactly while keeping the current typography styling consistent.

**User-visible outcome:** The Love Letter section shows the new “Meri Makhan Mishri” heading with a softly animated heart beside it, and the letter content is fully replaced with the new provided text.

# Specification

## Summary
**Goal:** Remove background music and all related controls from the Propose Day page.

**Planned changes:**
- Remove the `<audio>` element from `frontend/src/components/ProposeDayPage.tsx`.
- Delete all music-related state/refs/effects and helper functions (play/pause, mute, volume, fade-in).
- Remove the fixed on-screen music control panel UI and any music-related labels/text, cleaning up any now-unused imports.

**User-visible outcome:** The Propose Day page displays the same romantic content and visuals as before, but with no background music and no music control buttons/sliders anywhere on the page.

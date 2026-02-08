# Specification

## Summary
**Goal:** Update the Propose Day page to use the “Chaar Kadam” (male-sung portion) audio as the background track and add a subtle fade-in when playback starts.

**Planned changes:**
- Add a single static audio file containing the male-sung portion of “Chaar Kadam” under `frontend/public/assets/audio/`.
- Update `frontend/src/components/ProposeDayPage.tsx` to reference the new audio asset in the existing `<audio>` element.
- Implement a subtle fade-in on Play (about 1–3 seconds) that respects the current volume/mute state and honors `prefers-reduced-motion` by disabling or shortening the fade.

**User-visible outcome:** When the user clicks Play, the “Chaar Kadam” (male part) track plays in a loop with a gentle fade-in, and Pause stops playback.

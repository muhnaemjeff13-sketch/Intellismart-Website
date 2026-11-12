# Intellismart Design System

**Version 0.4 · Proposed visual direction for the Software Products & Services portfolio**

## Pattern and page flow

Help business owners, IT leads, and functional teams find the software that fits their workflows and request a consultation. Lead with the software proposition, show recognizable client proof, and let visitors explore by business area.

~~~text
Header   Intellismart   About · Products · Services · Clients   Consultation
Hero     Software shaped around your business   |   Connected business diagram
Clients  Verified client marks
Products  People & Workforce | Operations & Assets | Business Finance
          Product explanation and capabilities | Illustrative dashboard
Services Digital Experiences | Software & AI | Cloud & IT Support
Company  CEO message, mission, vision and values
Why us   Tailored processes, integration and ongoing local support
Contact  Book a Free Consultation · Direct email
~~~

Use **Book a Free Consultation** in the header, hero, and closing section. Use **Explore Software Suite** as the secondary hero action. On mobile, keep the reading order above and stack the product explanation above its dashboard.

## Visual direction

Use navy and white as the two foundation colors. Set the hero and closing section in navy, use white for content surfaces, and use pale blue for quiet transitions and inset areas. Reserve hot pink for the primary button. In the hero diagram, connect the People, Operations, and Finance branches to one hub using light-blue markers. Keep the diagram secondary to the headline on narrow screens.

Use white dashboard surfaces, ruled tables, and aligned numerical values to reflect the software. Keep company and services copy in open layouts with generous whitespace. Use the Intellismart wordmark and client marks from verified assets when available. Use verified names in plain text when a client mark is unavailable.

## Tokens

| Color token | Value | Use |
| --- | --- | --- |
| Navy | #0F1B3D | Foundation color for headings, body, dark sections, links, and selected tabs |
| White | #FFFFFF | Foundation color for cards, dashboard frames, secondary buttons and text on navy or hot pink |
| Action / hot pink | #FF3D8B | Primary button fill on light and dark surfaces. Pair with white labels. |
| Action hover | #E92C78 | Deeper hot-pink fill on pointer hover |
| Action pressed | #D91E69 | Deepest hot-pink fill while pressed |
| Pale blue canvas | #F3F6FC | Page background and inset areas |
| Muted ink | #40536F | Supporting text on white or canvas |
| Rule | #CED9E8 | Decorative dividers and card borders |
| Control border | #697F9C | Input boundaries and outlined controls on light surfaces |
| On-dark muted | #DCE8F8 | Supporting copy, outlines and diagram markers on navy |
| Navy inset | #192A53 | Diagram panels on navy |

Measured contrast ratios include navy on canvas **15.59:1**, white on navy **16.87:1**, muted ink on canvas **7.23:1**, and white text on the hot-pink button **3.34:1**. Set primary button labels to at least **19 px bold (700)** on every screen and in every state to keep them in the large-text range. White text contrast increases to **4.12:1** on hover and **4.84:1** while pressed. The control border on pale blue measures **3.79:1**.

| Type role | Family | Size / line height | Weight |
| --- | --- | --- | --- |
| Hero | Barlow, Segoe UI, sans-serif | 40–76 px / 1.02 | 700 |
| Section title | Barlow, Segoe UI, sans-serif | 30–48 px / 1.10 | 700 |
| Component title | Inter, Segoe UI, sans-serif | 18–22 px / 1.30 | 650–700 |
| Body | Inter, Segoe UI, sans-serif | 16–18 px / 1.55 | 400 |
| Labels and controls | Inter, Segoe UI, sans-serif | 14–16 px / 1.35 | 600 |
| Dashboard values | Inter, Segoe UI, sans-serif | 22–32 px / 1.15 | 700, tabular figures |

Use sentence case and keep paragraphs near 62 characters per line where practical. The static preview uses Segoe UI, the shared fallback.

- **Spacing** uses a 4 px base with steps of 4, 8, 12, 16, 24, 32, 48, 64, and 96 px.
- **Layout** uses a 1,280 px maximum content width. Page gutters are 20 px on phones, 32 px on tablets, and 48 px on desktop. Section padding grows from 48 px to 96 px. Use 24–32 px between columns and allow headings and controls to wrap.
- **Corners** use 8 px for controls, 12 px for cards, and 16 px for dashboard frames and dialogs. Use an outline for cards and reserve shadow for floating surfaces.
- **Icons** use a consistent 20–24 px outline style. Pair icons with visible labels where the action would otherwise be unclear.

## Components and behavior

| Component | Design rule |
| --- | --- |
| Header | Sticky navigation with a visible consultation action. On mobile use a labeled menu and preserve access to the consultation action. |
| Buttons | Use hot pink with white text for the primary action on every surface. Use the deeper pink fills for hover and pressed states. Transition the background color over 200 ms with ease-out. Preserve the white label in all states. Use a white fill and navy text for secondary actions. Add a navy outline on light surfaces to make the button boundary visible. Use a 44 × 44 px minimum target, 8 px corners and 16–20 px horizontal padding. |
| Product tabs | Three business-area labels in the outer Base UI tab list. In People & Workforce use a separately labeled Base UI tab list for Core, Mobile, Recruitment, Performance, Analytics and AI. Show selection with a navy rule and stronger text. Allow a horizontally scrollable, visibly labeled tab row when it cannot fit. Keep the focused tab in view. |
| Product preview | Use a light dashboard frame, concise header, summary values, and at most one dominant chart per visible panel. Use labels or patterns alongside color. Include a visible illustrative-data caption for sample figures and AI examples. |
| Cards | Put the capability or service name first, then one concise description. Static cards retain a static affordance. Group services under their three portfolio pillars. |
| Consultation | Base UI dialog with a visible title, persistent field labels, inline validation, accessible close action and direct email fallback. Show success only after a confirmed submission. |

Use a 2 px focus ring with a 2 px offset. Use navy on light surfaces and white on navy. Pair error color with a message and place it next to the affected field. Keep visible labels when controls gain focus or show errors.

## Motion and review checklist

Use CSS transitions around 200 ms for control feedback and up to 300 ms for dialog entry. Use ease-out and respect reduced-motion preferences. Keep content visible on load and use motion to clarify user-triggered changes.

- [ ] Review 320, 375, 768, 1024, and 1440 px widths. Check navigation, long tab labels, chart labels and the consultation form for clipping.
- [ ] Verify keyboard navigation, visible focus, active-tab announcement and focus restoration when the dialog closes.
- [ ] Check rendered text and control contrast on their actual backgrounds, including hover, selected, disabled and error states.
- [ ] Label illustrative dashboards and AI examples. Verify product names, dashboard details and client marks against the portfolio before publication.
- [ ] Confirm that consultation actions reach the form or the direct email fallback. Verify submission feedback if a delivery service is connected.
- [ ] Check reduced motion and keep chart information available as text.

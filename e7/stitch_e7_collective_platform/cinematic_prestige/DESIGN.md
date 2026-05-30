---
name: Cinematic Prestige
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c6c7c2'
  on-secondary: '#2f312e'
  secondary-container: '#484a46'
  on-secondary-container: '#b8b9b4'
  tertiary: '#cfcece'
  on-tertiary: '#2f3131'
  tertiary-container: '#b3b3b3'
  on-tertiary-container: '#444546'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#454744'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is rooted in the "Auteur Aesthetic"—a blend of cinematic grandeur and modern editorial sophistication. It evokes the feeling of a prestige film studio, drawing inspiration from the storytelling focus of A24, the sleek precision of Apple, and the immersive depth of high-end streaming platforms.

The primary objective is to celebrate the craft of filmmaking. The UI acts as a silent gallery, providing a dark, immersive stage where high-resolution production stills and cinematic textures take center stage. We move away from the coldness of traditional corporate design, opting instead for a human-centric, inspirational approach characterized by:

*   **Atmospheric Immersion:** Use of deep shadows and soft gradients to create depth.
*   **Editorial Elegance:** Wide margins and intentional whitespace to allow content to "breathe" like a high-end film program.
*   **Sophisticated Minimalism:** Functional elements are understated, ensuring they never distract from the visual narrative of the film projects.

## Colors

The palette is anchored in a high-contrast dark mode to mimic the theater experience. 

*   **Midnight Blue & Dark Graphite:** Serve as the canvas, providing a richer, more cinematic foundation than pure black.
*   **Champagne Gold:** Reserved for moments of prestige, highlights, and primary calls to action. It should be used sparingly to maintain its value.
*   **Warm White:** Used for primary typography to ensure readability while feeling softer and more "organic" than stark white.
*   **Soft Silver:** Used for secondary metadata and borders, providing a subtle, metallic sheen.

## Typography

This design system employs a classic serif/sans-serif pairing to communicate both heritage and modern efficiency.

*   **Libre Caslon Text:** This serif face brings a literary, "script-like" quality to headings. It should be used for storytelling elements, titles, and emotional hooks.
*   **Manrope:** A modern, balanced sans-serif that handles all functional and body text. Its high legibility ensures that even dense production data remains clear and professional.
*   **Stylistic Note:** Titles should favor "Sentence case" to feel more human, while labels and small metadata often use uppercase with increased tracking for a premium, architectural feel.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to maintain an editorial "frame" around the content, transitioning to a fluid model for mobile.

*   **Grid:** A 12-column grid is used for desktop (max-width 1440px). Gutters are generous (24px) to prevent the UI from feeling "cramped."
*   **Vertical Rhythm:** We utilize a 120px section gap on desktop to create a sense of scale and importance. Content should never feel rushed; the user's eye needs room to land.
*   **Mobile Adaptivity:** On mobile, margins shrink to 20px, and typography scales down aggressively to maintain the "cinematic" aspect ratio of imagery.

## Elevation & Depth

In this design system, depth is achieved through **Tonal Layering** and **Atmospheric Blurs** rather than traditional drop shadows.

*   **Glassmorphism:** Navigation bars and floating cards use a 20px backdrop blur with a 10% opacity "Warm White" fill. This creates a "frosted lens" effect consistent with camera equipment.
*   **The Gradient Wash:** Subtle "vignette" gradients (from transparent to Midnight Blue) are used at the edges of images and the bottom of sections to guide the eye toward the center of the frame.
*   **Subtle Outlines:** Surface containers use a 1px border in "Soft Silver" at 15% opacity. This defines the shape without breaking the dark-mode immersion.

## Shapes

The shape language is "Soft Precision." We avoid the playfulness of overly rounded pills, opting instead for architectural corners.

*   **Base Radius:** 4px (Soft) for buttons and input fields to maintain a professional, sharp look.
*   **Container Radius:** 8px (Large) for cards and modals to provide a gentle distinction from the background.
*   **Media:** Film posters and production stills should maintain a sharp 0px radius or a very subtle 2px radius to mimic the look of physical film prints.

## Components

### Buttons
*   **Primary:** Solid Champagne Gold with Dark Graphite text. High-contrast, no shadow, 4px corner radius.
*   **Secondary:** Ghost style with a 1px Soft Silver border and Warm White text. 
*   **Hover States:** Subtle increase in luminosity; avoid heavy transformations.

### Cards
*   Cards should feature a "Film Grain" texture overlay at 3% opacity. 
*   Content is strictly bottom-aligned over a 40% black gradient to ensure typography is legible against varying background images.

### Input Fields
*   Minimalist design: Only a bottom border (1px Soft Silver). Labels appear in `label-sm` above the field. Focus state transitions the border to Champagne Gold.

### Cinematic Lists
*   Lists should include metadata (e.g., Year, Director, Status) in Soft Silver, `label-sm` styling, creating a "credits" feel at the bottom of content blocks.

### Progress Indicators
*   For production timelines, use thin, 2px "Champagne Gold" lines. Avoid thick, "bubbly" progress bars to keep the aesthetic lean and technical.
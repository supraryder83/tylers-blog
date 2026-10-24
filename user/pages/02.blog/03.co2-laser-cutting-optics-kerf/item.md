---
title: 'Edge-Finish Mastery: Cutting 10mm Cast Acrylic & Thin Sheet on a 130W CO2 Laser'
date: '2026-10-18 16:45'
taxonomy:
  category: [lasers, co2-laser, maker]
  tag: [co2-laser, optics, beam-alignment, kerf, acrylic, air-assist]
metadata:
  description: 'Optical alignment, focal lens depth-of-field trade-offs, and air assist tuning for glass-clear flame-polished laser cut edges.'
---

<div class="photo-feature-figure">
  <img src="laser-cutting-metal.jpg" alt="Industrial Laser Cutting Sheet by Tyler Ziegler">
  <div class="photo-feature-caption">
    <span>BUILD LOG #040 // Reci W6 130W CO2 Glass Tube • 1300x900mm Honeycomb Bed</span>
    <span>BEAM WAVELENGTH: 10.6µm • FOCAL LENS: 2.5" ZnSe MENISCUS</span>
  </div>
</div>

Getting a truly optical, flame-polished cut edge on thick cast acrylic or clean dross-free cuts on sheet goods isn't magic—it comes down to the physics of your beam waist, nozzle aerodynamics, and focal length selection.

Too much air pressure when cutting acrylic quenches the molten resin before surface tension can smooth it out, leaving jagged frosted striations. Too little air pressure when cutting plywood or sheet composites results in scorched edges and flare-ups. Here is how to dial in optical performance across the entire 1300x900mm bed.

---

## 🔬 ZnSe Focal Lens Selection: 1.5" vs. 2.0" vs. 4.0"

<div class="exif-card">
  <div class="exif-header">
    <span>OPTICAL COMPARISON // 10.6µm CO2 WAVELENGTH</span>
    <span>DEPTH OF FOCUS (DOF)</span>
  </div>
  <div class="exif-grid">
    <div class="exif-item">
      <span class="exif-label">1.5" FOCAL LENS</span>
      <span class="exif-value">Spot Size: 0.08mm | DOF: 1.2mm | Best for: Micro vector engraving & 1-3mm paper</span>
    </div>
    <div class="exif-item">
      <span class="exif-label">2.0" STANDARD LENS</span>
      <span class="exif-value">Spot Size: 0.12mm | DOF: 2.8mm | Best for: General 3-6mm plywood & Delrin</span>
    </div>
    <div class="exif-item">
      <span class="exif-label">2.5" MENISCUS LENS</span>
      <span class="exif-value">Spot Size: 0.16mm | DOF: 5.5mm | Best for: 8-12mm acrylic & deep contours</span>
    </div>
    <div class="exif-item">
      <span class="exif-label">4.0" LONG FOCAL LENS</span>
      <span class="exif-value">Spot Size: 0.28mm | DOF: 14.0mm | Best for: Thick 15-20mm foam & straight vertical walls</span>
    </div>
  </div>
</div>

---

## 🎯 3-Mirror Beam Alignment Protocol

Before tuning speeds, your laser beam must hit the center of mirror 1, mirror 2, mirror 3, and exit perpendicularly through the focal nozzle tip across all four corners of the bed:

1. **Mirror 1 to Mirror 2 (Y-Axis Parallels):** Pulse laser at near Y and far Y. Move mirror 1 adjustment screws until the burn mark hits the exact same location in both positions.
2. **Mirror 2 to Mirror 3 (X-Axis Parallels):** Pulse laser at left X and right X. Adjust mirror 2 until the burns superimpose perfectly.
3. **Vertical Drop Test (Z-Axis Normal):** Tape thermal paper across the bottom of the nozzle. Fire a brief test pulse. If the pinprick hole is not dead-center in the nozzle aperture, loosen the mirror 3 tilt screws until the beam exits completely centered without clipping the nozzle wall.

```gcode
( CUTTING PARAMETERS FOR 10MM CAST ACRYLIC )
( POWER: 85% [110W OUTPUT] )
( SPEED: 4.5 MM/S )
( AIR ASSIST: ULTRA-LOW TRICKLE 2-4 PSI )
( FOCAL POINT: SET 3.3MM BELOW MATERIAL TOP SURFACE )
```

---

## 📏 Precision Kerf Offsets in CAD/CAM

A laser does not cut with zero width. With a 2.5" focal lens on 10mm material, the actual kerf width is approximately $0.22\text{ mm}$. If you are designing press-fit acrylic finger joints or bearing housings:
- Add $+0.11\text{ mm}$ radial offset to external bosses.
- Subtract $-0.11\text{ mm}$ from internal press-fit holes.
Doing this gives satisfying mechanical click-fits directly off the laser bed without post-reaming.

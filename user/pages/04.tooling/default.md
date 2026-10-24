---
title: 'Tooling, Optics & Feeds Database'
menu: 'Tooling'
metadata:
  description: 'Reference guide for CNC solid carbide endmills, feeds & speeds formulas, CO2 laser ZnSe optics, and workholding systems.'
---

# Tooling, Optics & Feeds Reference Database

A curated reference manual for machine shop cutters, optimal chip load formulas, laser optical lenses, and workholding strategies compiled from hundreds of hours on the spindle and laser beds.

---

## 🔪 Solid Carbide Endmill Geometry

Selecting the correct cutter geometry determines surface finish, tool deflection, and chip evacuation efficiency:

<div class="exif-card">
  <div class="exif-header">
    <span>ENDMILL SELECTION GUIDE</span>
    <span>CARBIDE GEOMETRY & COATINGS</span>
  </div>
  <div class="exif-grid">
    <div class="exif-item">
      <span class="exif-label">SINGLE-FLUTE "O" FLUTE</span>
      <span class="exif-value">Best for: 6061-T6 Aluminum, Acrylic, Polycarbonate. Massive chip valley prevents gummy chip packing at high RPM.</span>
    </div>
    <div class="exif-item">
      <span class="exif-label">3-FLUTE VARIABLE HELIX (37°/40°)</span>
      <span class="exif-value">Best for: Aluminum semi-finishing and high-rigidity slotting. Destructive harmonics break up chatter.</span>
    </div>
    <div class="exif-item">
      <span class="exif-label">COMPRESSION SPIRAL (UP/DOWN)</span>
      <span class="exif-value">Best for: Plywood, carbon fiber composites, and laminated sheet. Prevents top and bottom veneer tearout.</span>
    </div>
    <div class="exif-item">
      <span class="exif-label">DLC (DIAMOND-LIKE CARBON)</span>
      <span class="exif-value">Sub-0.1 friction coefficient prevents aluminum micro-welding onto the rake face without relying on heavy flood coolant.</span>
    </div>
  </div>
</div>

---

## 📊 Speeds & Feeds Quick Reference (1/4" / 6.35mm Cutter)

| Material | Spindle RPM | Feed Rate (mm/min) | Axial Depth ($A_p$) | Radial Width ($A_e$) | Air / Coolant |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **6061-T6 Aluminum** | 18,000 | 2,200 | 12.0 mm (Adaptive) | 1.1 mm (17%) | 40 PSI Air + Isopropyl MQL |
| **Cast Acrylic (PMMA)** | 16,000 | 2,800 | 6.0 mm | 3.0 mm | High-flow dry air blast |
| **Delrin / Acetal** | 20,000 | 3,500 | 10.0 mm | 2.5 mm | Dry air / vacuum assist |
| **Carbon Fiber Sheet** | 14,000 | 1,400 | 3.0 mm | Full slot (Burr tool) | Continuous HEPA vacuum extraction |
| **Brass (C36000)** | 12,000 | 1,100 | 4.0 mm | 1.0 mm | Light synthetic oil mist |

---

## 🔍 CO2 Laser Optics & Focal Length Specs

CO2 lasers ($10.6\mu\text{m}$) utilize Zinc Selenide (ZnSe) meniscus lenses. Choosing focal length requires balancing **spot diameter** against **depth of focus (DOF)**:

- **1.5" (38.1mm) Focal Lens:**
  - *Spot Size:* $\approx 0.08\text{ mm}$
  - *DOF:* $1.2\text{ mm}$
  - *Best for:* High-resolution raster engraving (1000 DPI), photo etching on anodized metal, micro-drilling paper and 1mm thin film.
- **2.5" (63.5mm) Meniscus Lens:**
  - *Spot Size:* $\approx 0.16\text{ mm}$
  - *DOF:* $5.5\text{ mm}$
  - *Best for:* The versatile all-around choice. Straight vertical walls on 6mm to 12mm acrylic, plywood, and high-density foam without edge taper.
- **4.0" (101.6mm) Long-Focal Lens:**
  - *Spot Size:* $\approx 0.28\text{ mm}$
  - *DOF:* $14.0\text{ mm}$
  - *Best for:* Ultra-thick materials (15–25mm foam, thick structural woods) where extreme depth of field is required to avoid edge beveling.

---

## 🗜️ Workholding & Fixture Systems

Precision machining requires eliminating vibration at the workpiece:

1. **Custom Vacuum Grid Fixture Plate:** Machined out of 19mm cast aluminum tooling plate with 25mm grid ports and silicone gasket cord. Powered by a 2.5 HP rotary vane vacuum pump pulling $-28.5\text{ inHg}$, clamping thin sheet stock completely flat without mechanical clamps in the cutter's path.
2. **Kurt DX6 Precision Machine Vise:** Re-ground bed with custom 3D printed PA-CF soft jaws and aluminum machinable jaws for 2nd-operation profiling.
3. **Mitee-Bite Pitbull Clamps:** Low-profile knife-edge clamps exerting positive downward force to keep billet stock seated against parallels.

---
title: 'Machines & Lab Equipment'
menu: 'Machines'
metadata:
  description: 'Workshop machine specs: Heavy CNC Gantry Mill, 50W MOPA Fiber Laser, 130W CO2 Laser Cutter, and Enclosed CoreXY 3D Printer.'
---

# Machine Inventory & Lab Infrastructure

A detailed breakdown of the machine tools, controllers, and optical systems in Tyler Ziegler's workshop. Every machine has been customized, tuned, or built from the ground up for high-precision fabrication in aluminum, titanium, plastics, and composites.

---

## 🦾 Machine I: High-Rigidity CNC Gantry Mill

<div class="photo-feature-figure">
  <img src="/user/pages/images/cnc-milling-aluminum.jpg" alt="CNC Milling Aluminum in Tyler Ziegler's Workshop">
  <div class="photo-feature-caption">
    <span>SYSTEM 01 // Precision Billet Gantry CNC Mill • 1000 x 600 x 180mm Travel</span>
    <span>REPEATABILITY: ±0.012mm • SPINDLE: 2.2kW WATER-COOLED ER20</span>
  </div>
</div>

Built on stress-relieved steel box tubing and solid cast aluminum tooling plate. Designed specifically to handle aggressive chip loads in 6061-T6 aluminum, Delrin, brass, and carbon fiber plates without resonance or frame deflection.

- **Motion Components:** Genuine Hiwin HG20 heavy-load linear rails on all axes with C7 ground ballscrews (1605 on Z, 2010 on X/Y).
- **Drive System:** Leadshine closed-loop hybrid steppers with integrated 1000-line optical encoders to eliminate any chance of missed steps during heavy adaptive cuts.
- **Spindle & VFD:** 2.2kW (3.0 HP) four-bearing water-cooled spindle with ER20 collet chuck (clamping range 1mm to 13mm), driven by a sensorless vector control VFD rated up to 24,000 RPM.
- **Cooling / Clearing:** Dual-nozzle atomizing minimum quantity lubrication (MQL) with high-velocity air blast to instantly clear chips out of deep slots and pockets.

---

## ⚡ Machine II: 50W JPT MOPA Fiber Laser & 4th-Axis Rotary

<div class="photo-feature-figure">
  <img src="/user/pages/images/laser-rotary-engraving.jpg" alt="50W MOPA Fiber Laser Rotary Engraving">
  <div class="photo-feature-caption">
    <span>SYSTEM 02 // 50W JPT M7 MOPA Fiber Laser • Rotolase 360 Precision Rotary</span>
    <span>PULSE DURATION: 2ns – 500ns • FREQUENCY: 1 – 4000 kHz • F-THETA 110x110mm & 200x200mm</span>
  </div>
</div>

Equipped with a Master Oscillator Power Amplifier (MOPA) fiber laser engine emitting at 1064nm. Unlike standard Q-switched galvo lasers, the MOPA engine allows independent pulse duration and pulse frequency tuning:

- **Sub-Nanosecond Control:** Shorter pulse durations (2ns to 20ns) allow heat-free black marking on anodized aluminum and deep titanium color annealing without boiling or burning the surface.
- **Rotary 4th Axis:** Driven by a zero-backlash planetary chuck for seamless 360-degree engraving around cylindrical mechanical components, flashlights, and camera bodies.
- **Optics:** Telecentric F-Theta lenses (110x110mm field for ultra-fine micro-text and 200x200mm field for broad engraving patterns).

---

## 🔬 Machine III: 130W Industrial CO2 Laser Cutter

<div class="photo-feature-figure">
  <img src="/user/pages/images/laser-cutting-metal.jpg" alt="Industrial CO2 Laser Cutting Sheet">
  <div class="photo-feature-caption">
    <span>SYSTEM 03 // 130W Reci W6 Glass CO2 Laser • 1300 x 900mm Cutting Area</span>
    <span>BEAM WAVELENGTH: 10.6µm • AIR ASSIST: 60 PSI SOLENOID-CONTROLLED</span>
  </div>
</div>

The shop workhorse for rapid 2D profile cutting, acrylic fabrication, and gasket prototyping:

- **Laser Tube:** Reci W6 CO2 gas tube producing 130W continuous optical output (peak 150W), coupled to a CW-5200 dual-temperature industrial water chiller.
- **Motion System:** High-speed hybrid servo gantry capable of 600 mm/s vector cutting and 1,000 mm/s raster engraving with acceleration up to 8,000 mm/s².
- **Fume Extraction & Safety:** High-pressure centrifugal blower exhausting through activated carbon and particulate filtration to safely evacuate PM2.5 and acrylic fumes.

---

## 🖨️ Machine IV: Voron 2.4 High-Temperature CoreXY 3D Printer

<div class="photo-feature-figure">
  <img src="/user/pages/images/maker-workshop-bench.jpg" alt="Voron 2.4 CoreXY 3D Printer on Workbench">
  <div class="photo-feature-caption">
    <span>SYSTEM 04 // Voron 2.4 350mm³ CoreXY • Fully Insulated Chamber</span>
    <span>MAX HOTEND TEMP: 350°C • MAX BED: 120°C • MAX CHAMBER: 65°C</span>
  </div>
</div>

Custom-built for printing engineering polymers (Nylon PA6-CF, PA12-CF, Polycarbonate, and TPU) for structural workshop fixtures, soft vise jaws, and custom electronics housings:

- **Kinematics:** Flying gantry with Quad Gantry Leveling (QGL), eliminating bed tilt errors automatically before each print.
- **Extrusion:** Clockwork2 direct-drive extruder with Rapido UHF ceramic high-flow hotend and a 0.6mm DiamondBack polycrystalline diamond nozzle.
- **Control:** Raspberry Pi 4 running Klipper firmware with accelerometer-calibrated input shaping for vibration-free prints at up to 250 mm/s.

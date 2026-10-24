# Tyler Ziegler // Photography Blog (Grav CMS)

A simple, fast, and modern flat-file personal photography blog powered by [Grav CMS](https://getgrav.org/) and the modern Quark2 theme.

Focused on fine-art landscape, analog rangefinder craft, darkroom chemistry, and Western Manitoba prairie nocturnes.

---

## ⚡ Quick Start & Local Server

To run the local Grav development server:

```bash
php -S 127.0.0.1:8000 system/router.php
```

Or using Grav's built-in server command:

```bash
php bin/grav server
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🔐 Admin Panel Access

The Grav Admin panel is configured and ready:

- **Admin URL:** [http://localhost:8000/admin](http://localhost:8000/admin)
- **Username:** `tyler`
- **Password:** `password123$`
- **Role:** Super Administrator (full permissions over pages, media, configuration, and plugins)

---

## 📷 Photography Architecture & Content

### 1. Curated Pages
- **Home / Portfolio (`/`):** Hero showcase with featured Prairie Aurora nocturne, artist statement, and recent photography journals.
- **Photoblog (`/blog`):** Chronological photo dispatches with calculated read times, EXIF cards, and crop-zoom thumbnail cards.
  - *Curtains of Emerald:* G4 Aurora Borealis over a 1920s grain elevator (21mm f/1.4, 8s, ISO 1600).
  - *The Tactile Discipline of Manual Rangefinders:* Mechanical optics, Kodak Tri-X 120 film, and split-prism focusing.
  - *Silence on Mirror Water:* Clear Lake autumn mist and golden tamaracks in Riding Mountain National Park (102MP Medium Format).
  - *Diagonal Shadows & Iron Escapes:* High-contrast black and white architectural studies using dedicated monochrome sensors and orange optical filters.
- **Galleries (`/galleries`):** Thematic photo series (Prairie Nocturnes, Boreal Waters, Heritage Geometry, Analog Craft).
- **Field Gear & Darkroom (`/gear`):** Complete inventory of camera bodies (Leica M10-R, M Monochrom, Fujifilm GFX 100S, Hasselblad 500 C/M), optical prime glass, and D-76 darkroom developing workflows.
- **About (`/about`):** Tyler Ziegler's artist biography, sub-zero prairie shooting philosophy, and print inquiries.

### 2. EXIF Technical Spec Cards
Each photo entry includes structured capture metadata:
- **Camera Body & Sensor**
- **Lens & Focal Length**
- **Aperture, Shutter Speed, & ISO**
- **Filters & Tripod Support**

---

## 📁 Project Structure

```text
├── user/
│   ├── accounts/
│   │   └── tyler.yaml          # Pre-configured super admin account
│   ├── config/
│   │   ├── site.yaml           # Photography site title, author, and metadata
│   │   └── system.yaml         # Cache, routing, and password policy settings
│   ├── pages/
│   │   ├── 01.home/            # Homepage portfolio & showcase
│   │   ├── 02.blog/            # Photoblog collection & individual posts
│   │   ├── 03.galleries/       # Curated series plates
│   │   ├── 04.gear/            # Optical kit & darkroom chemistry
│   │   ├── 05.about/           # Photographer bio & contact
│   │   └── images/             # High-res photography plates
│   └── themes/
│       └── quark2/
│           ├── css/custom.css  # Gallery dark styling & EXIF cards
│           └── quark2.yaml     # Dark mode & accent configuration
├── bin/                        # Grav CLI tools (grav, plugin, gpm)
└── system/                     # Grav core engine & routing
```

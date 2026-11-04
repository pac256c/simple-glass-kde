# SimpleGlass

KDE Plasma global theme: ChromeOS-style translucent panels/widgets + Willow blur Aurorae window decorations, with rounded/transparent boxes. Accent color follows the wallpaper.

## Components
- Aurorae: `SimpleGlass` (WillowDarkBlur base, borders removed)
- Color scheme: `SimpleGlass`
- Plasma desktop theme: `SimpleGlass` (ChromeOS-style, recolored to accent)
- Look and Feel: `com.github.pac256c.SimpleGlass`
- Icons: bundled Tela-dark override (base Tela-dark included)
- Cursor: catppuccin-cursors-mocha (dependency)
- Widget style: Darkly
- GTK theme: `SimpleGlass` (in `gtk/SimpleGlass`)

## Install
Copy folders to `~/.local/share/` (aurorae/themes, color-schemes, plasma/desktoptheme, plasma/look-and-feel), and install the GTK theme to `~/.themes/SimpleGlass`. Then choose SimpleGlass in System Settings -> Appearance -> Global Theme. Enable blur in System Settings -> Display -> Compositor if needed.

For GTK apps, add to your shell env:
```
export GTK_THEME=SimpleGlass
export GTK_CSD=0
```

Wallpaper is bundled at `wallpaper/WhiteSur.jpg` and installed to `/usr/share/backgrounds/SimpleGlass/WhiteSur.jpg`.

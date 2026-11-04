# Maintainer: pac256c
pkgname=simpleglass-kde-theme
pkgver=1.0.0
pkgrel=1
pkgdesc="SimpleGlass KDE Plasma global theme"
arch=('any')
url="https://github.com/pac256c/simple-glass-kde"
license=('GPL-3.0-or-later')
depends=('plasma-desktop' 'plasma-workspace' 'kwin' 'aurorae' 'darkly' 'gtk3' 'gtk4' 'hicolor-icon-theme')
optdepends=('breeze-gtk: GTK Breeze fallback')
source=("git+https://github.com/pac256c/simple-glass-kde.git")
sha256sums=('SKIP')

package() {
    cd "$srcdir/simple-glass-kde"

    # Aurorae
    install -d "$pkgdir/usr/share/aurorae/themes"
    cp -r aurorae/SimpleGlass "$pkgdir/usr/share/aurorae/themes/"

    # Color scheme
    install -Dm644 color-schemes/SimpleGlass.colors "$pkgdir/usr/share/color-schemes/SimpleGlass.colors"

    # Plasma desktop theme
    install -d "$pkgdir/usr/share/plasma/desktoptheme"
    cp -r plasma/desktoptheme/SimpleGlass "$pkgdir/usr/share/plasma/desktoptheme/"

    # Look and Feel
    install -d "$pkgdir/usr/share/plasma/look-and-feel"
    cp -r plasma/look-and-feel/com.github.pac256c.SimpleGlass "$pkgdir/usr/share/plasma/look-and-feel/"

    # GTK theme
    install -d "$pkgdir/usr/share/themes"
    cp -r gtk/SimpleGlass "$pkgdir/usr/share/themes/SimpleGlass"

    # Icons (Tela-dark override bundle)
    install -d "$pkgdir/usr/share/icons"
    cp -r icons/Tela-dark "$pkgdir/usr/share/icons/Tela-dark"

    # Wallpaper
    install -Dm644 wallpaper/WhiteSur.jpg "$pkgdir/usr/share/backgrounds/SimpleGlass/WhiteSur.jpg"

    # Examples
    install -d "$pkgdir/usr/share/simpleglass/examples"
    install -m644 README.md "$pkgdir/usr/share/simpleglass/examples/README.md"
}

post_install() {
    echo "Apply the global theme with:"
    echo "  plasma-apply-lookandfeel -a com.github.pac256c.SimpleGlass --resetLayout"
}

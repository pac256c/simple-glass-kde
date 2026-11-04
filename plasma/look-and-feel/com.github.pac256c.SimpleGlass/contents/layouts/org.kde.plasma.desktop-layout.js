loadTemplate("org.kde.plasma.desktop.defaultPanel")

var panelList = panels();
for (var i = 0; i < panelList.length; i++) {
    panelList[i].height = 46;
    var widgets = panelList[i].widgets();
    for (var w in widgets) {
        var widget = widgets[w];
        if (widget.type === "org.kde.plasma.kickoff") {
            widget.currentConfigGroup = [];
            widget.writeConfig("icon", "preferences-system-linux");
        }
        if (widget.type === "org.kde.plasma.digitalclock") {
            widget.currentConfigGroup = ["Appearance"];
            widget.writeConfig("fontFamily", "Ubuntu Nerd Font");
            widget.writeConfig("fontSize", 9);
        }
    }
}

var desktopsArray = desktopsForActivity(currentActivity());
for (var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
    desktopsArray[j].currentConfigGroup = ['Wallpaper', 'org.kde.image', 'General'];
    desktopsArray[j].writeConfig('Image', 'file:///usr/share/backgrounds/SimpleGlass/WhiteSur.jpg');
}

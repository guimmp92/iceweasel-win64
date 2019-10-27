<p align="left">
  <a href="https://github.com/muslayev/iceweasel-win64/releases/latest" target="_blank"><img src="https://img.shields.io/github/release/muslayev/iceweasel-win64.svg"></a>
  <a href="https://github.com/muslayev/iceweasel-win64/releases/latest" target="_blank"><img src="https://img.shields.io/github/downloads/muslayev/iceweasel-win64/latest/total.svg"></a>
  <a href="https://github.com/muslayev/iceweasel-win64/releases" target="_blank"><img src="https://img.shields.io/github/downloads/muslayev/iceweasel-win64/total.svg"></a>
</p>

# Unofficial Iceweasel builds for Windows x64 (Installer + Portable)
## Download
[The latest version](https://github.com/muslayev/iceweasel-win64/releases)<br />
### Description
It's just Firefox with:
- [Privacy settings](https://github.com/muslayev/iceweasel-win64/blob/master/firefox-branding.js) (gathered from IceCat, [pyllyukko](https://github.com/pyllyukko/user.js), [gHacks](https://github.com/ghacksuserjs/ghacks-user.js))
- Build [options](https://github.com/muslayev/iceweasel-win64/blob/master/mozconfig)
- Iceweasel branding
- Own profile location *%USERPROFILE%\AppData\Roaming\Debian\Iceweasel*
### Troubleshoot video playback issues
Go to `Options -> Privacy & Secure -> Autoplay Settings`, then set "Default for all websites" to "Allow audio and Video".
### Sources
[GitHub](https://github.com/mozilla/gecko-dev)<br />
[Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/70.0/source/)
### Installer
To check and download the latest version, use menu `Tools -> [GIT Releases] Download the latest version`
![screenshot](https://raw.githubusercontent.com/muslayev/iceweasel-win64/master/update_menu.png)
### Portable
Launcher `start.exe` is created in [Bat To Exe Converter](http://www.f2ko.de/en/b2e.php). Some antiviruses may react on it.

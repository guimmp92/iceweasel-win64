/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "https://wiki.debian.org/Iceweasel");
pref("startup.homepage_welcome_url.additional", "");
// Interval: Time between checks for a new version (in seconds)
pref("app.update.interval", 43200); // 12 hours
// Give the user x seconds to react before showing the big UI. default=192 hours
pref("app.update.promptWaitTime", 691200);
// app.update.url.manual: URL user can browse to manually if for some reason
// all update installation attempts fail.
// app.update.url.details: a default value for the "More information about this
// update" link supplied in the "An update is available" page of the update
// wizard.
#if MOZ_UPDATE_CHANNEL == beta
pref("app.update.url.manual", "https://packages.debian.org/iceweasel");
pref("app.update.url.details", "https://tracker.debian.org/pkg/iceweasel");
pref("app.releaseNotesURL", "https://wiki.debian.org/Iceweasel");
#else
pref("app.update.url.manual", "https://packages.debian.org/iceweasel");
pref("app.update.url.details", "https://tracker.debian.org/pkg/iceweasel");
pref("app.releaseNotesURL", "https://wiki.debian.org/Iceweasel");
#endif

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 63);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=4 days
pref("app.update.badgeWaitTime", 345600);

// Number of usages of the web console or scratchpad.
// If this is less than 5, then pasting code into the web console or scratchpad is disabled
pref("devtools.selfxss.count", 0);

/************PREFETCHING************/
// Disable URL prefetching <link rel="prefetch"> <link rel="next"> (website hints to the Firefox that certain URL are likely to be visited)
pref("network.prefetch-next", false);
// Disable URL preloading <link rel="preload">
pref("network.preload", false);
// Disable DNS prefetching for all URLs on the website
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
// Disable accesing to the website when mouse over the URL
pref("network.http.speculative-parallel-limit", 0);
// Disable network predictor (previously known as Seer)
pref("network.predictor.enabled", false);
// Disable location bar making speculative connections
pref("browser.urlbar.speculativeConnect.enabled", false);

/************PRIVACY AND REPORTS************/
// Block website from reading or modifying Clipboard contents
pref("dom.event.clipboardevents.enabled", false);
// Disable video statistic to reduce fingerprinting threat
pref("media.video_stats.enabled", false);
// Disable Firefox Health Reporter: "Allow Firefox to send technical and interaction data to Mozilla" in Prefs
pref("datareporting.healthreport.uploadEnabled", false);
// Disable new data submission, master kill-switch
pref("datareporting.policy.dataSubmissionEnabled", false);
// Disable Extension Recommendations: "Allow Firefox to make personalized extension recommendations" in Prefs
pref("browser.discovery.enabled", false);
// Disable Shield (if "app.normandy.enabled" is true): "Allow Firefox to install and run studies" in Prefs
pref("app.shield.optoutstudies.enabled", false);
// Disable auto sending backlogged Crash Reports: "Allow Firefox to send backlogged crash reports on your behalf" in Prefs
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// Disable Firefox Shield/Heartbeat (provides real-time understanding of existing Desktop user population)
pref("app.normandy.enabled", false);
// Disable Telemetry in about:telemetry and in Firefox Home Page
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
// Disable Telemetry Coverage (measurements to count follow-on searches)
pref("toolkit.coverage.enabled", false);
// Disable Tab Crash Reporter in about:tabcrashed
pref("browser.tabs.crashReporting.sendReport", false);
// Disable Flash Crash Reporter
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// Disable Plugin Crash Reporter
pref("dom.ipc.plugins.reportCrashURL", false);
// Disable SSL Crash Reporter
pref("security.ssl.errorReporting.enabled", false);
// Disable PingCentre telemetry (used in several System Add-ons)
pref("browser.ping-centre.telemetry", false);
// Disable sending daily pings to Mozilla about extensions and recent startups
pref("extensions.getAddons.cache.enabled", false);
// Disable pings <a ping> (HTML5 specification for hyperlink auditing)
pref("browser.send_pings", false);
// Only allow pinging the same host as the origin URL (if "browser.send_pings" is true)
pref("browser.send_pings.require_same_host", true);
// Disable Geolocation
pref("geo.enabled", false);
// Use Mozilla Geolocation Service instead Google (if "geo.enabled" is true)
pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// Disable third party cookies
pref("network.cookie.cookieBehavior", 1);
// Enable First Party Isolation (restricts access to cookies, the cache, and similar data to domain level only)
pref("privacy.firstparty.isolate", true);
// Enable Tracking Protection
pref("privacy.trackingprotection.enabled", true);
pref("privacy.trackingprotection.socialtracking.enabled", true);
// Use Mozilla Service ("browser.safebrowsing.provider.mozilla.updateURL") for Tracking Protection updates
pref("browser.safebrowsing.provider.google.updateURL", "127.0.0.1");
// Enable protections against cryptocurrency mining
pref("privacy.trackingprotection.cryptomining.enabled", true);
// Enable DNT (Do Not Track)
pref("privacy.donottrackheader.enabled", true);
// Disable SPDY (networking protocol, which is supposed to reduce load latency on websites is yet another way of determining your real profile regardless if the user agent is spoofed)
pref("network.http.spdy.enabled", false);
// Disable Alt-Svc (header indicates that its resources can also be accessed at a different network location (host or port) or using a different protocol)
pref("network.http.altsvc.enabled", false);
// Disable Online Certificate Status Protocol (used for obtaining the revocation status of certificate)
pref("security.OCSP.enabled", 0);
// Don't allow a new created tab <target="_blank"> to access to the previous tab (new tab may change his URL)
pref("dom.targetBlankNoOpener.enabled", true);
// Disable Firefox Remote Settings (Mozilla service that makes it easy to manage evergreen settings data in Firefox)
pref("services.settings.server", "127.0.0.1");
// Disable WebGL support (can be used for fingerprinting)
pref("webgl.disabled", true);
// Disable WebGL debug info being available to websites (if "webgl.disabled" is false)
pref("webgl.enable-debug-renderer-info", false);
// Disable WebRTC (Real-Time Communications) support
pref("media.peerconnection.enabled", false);
// Don't reveal your internal IP (if "media.peerconnection.enabled" is true)
pref("media.peerconnection.ice.no_host", true);
pref("media.peerconnection.ice.default_address_only", true);
// Disable all GMP support, and remove update url (Gecko Media Plugins): Cisco OpenH264, Widevine content decryption module, etc. [HARMS]
// pref("media.gmp-provider.enabled", false);
// pref("media.gmp-manager.url", "127.0.0.1");
// Disable all DRM (Digital Rights Management) content support
pref("media.eme.enabled", false);
// Disable IPv6 (IPv6 can be abused, especially regarding MAC addresses)
pref("network.dns.disableIPv6", true);
// Disable Network Connectivity checks (checks whether network services, such as IPv6, can be used)
pref("network.connectivity-service.enabled", false);

/************MISC************/
// Don't monitor OS online/offline connection state
pref("network.manage-offline-status", false);
// Disable Narrator Voice (helps you read out the text on websites at the click of a button)
pref("narrate.enabled", false);
// Disable speech recognition, part of the Web Speech API
pref("media.webspeech.synth.enabled", false);
// Disable Web Audio API (system for controlling audio on the website, allowing developers to choose audio sources, add effects to audio and much more)
pref("dom.webaudio.enabled", false);
// Disable Vibration API (for screen shaking)
pref("dom.vibrator.enabled", false);
// Disable Oculus Rift API
pref("dom.vr.enabled", false);
// Disable Gamepad API (used for accessing and responding to signals from gamepads and other game controllers)
pref("dom.gamepad.enabled", false);
// Disable Device Sensor API
pref("device.sensors.enabled", false);
// Disable Touch Events API
pref("dom.w3c_touch_events.enabled", 0);
// Disable Battery Status API
pref("dom.battery.enabled", false);
// Disable PointerEvents Web API (CSS property sets under what circumstances a particular graphic element can become the target of pointer events)
pref("dom.w3c_pointer_events.enabled", false);
// Disable Push API
pref("dom.push.enabled", false);
// Disable Web Notifications API (from websites)
pref("dom.webnotifications.enabled", false);
// Prevent websites from knowing if a microphone or a video camera is available on your device
pref("media.navigator.enabled", false);
// Disable websites to access external presentation-type displays and use them for presenting content 
pref("dom.presentation.enabled", false);
// Disable Date/Time Input Types API
pref("dom.forms.datetime", false);
// Disable Service Workers API (makes websites and applications available offline, may send Notifications)
pref("dom.serviceWorkers.enabled", false);
// Disable Navigation Timing API (provides data that can be used to measure the performance of a website)
pref("dom.enable_performance", false);
// Disable Network Information API (provides general information about the system's connection type: WiFi, cellular, etc.)
pref("dom.netinfo.enabled", false);
// Disable Storage Access API (provides a way for embedded, cross-origin content to gain unrestricted access to storage that it would normally only have access to in a first-party context)
pref("dom.storage_access.enabled", false);
// Disable MediaStream Image Capture API (controls over camera features such as zoom, brightness, contrast, ISO and white balance)
pref("dom.imagecapture.enabled", false);
// Disable MediaDevices change detection
pref("media.ondevicechange.enabled", false);
// Disable Captive Portal (special website is used for connecting to public Wi-Fis)
pref("network.captive-portal-service.enabled", false);
// Disable Beacon asynchronous HTTP transfers (used for analytics)
pref("beacon.enabled", false);
// Disable Reader View
pref("reader.parse-on-load.enabled", false);
// Disable built-in PDF Viewer
pref("pdfjs.disabled", true);
// Disable MathML (Mathematical Markup Language)
pref("mathml.disabled", true);
// Prevent Accessibility services from accessing Firefox
pref("accessibility.force_disabled", 1);
// Number of milliseconds between session saving operations
pref("browser.sessionstore.interval", 30000);
// Disable OpenType-SVG fonts (fonts with multiple colors and gradients)
pref("gfx.font_rendering.opentype_svg.enabled", false);
// Disable Bookmark backups
pref("browser.bookmarks.max_backups", 0);

/************UPDATING************/
// Disable Mozilla Maintenance Service, and remove update URL (allows Firefox updates to occur in the background)
pref("app.update.service.enabled", false);
pref("app.update.url", "127.0.0.1");
// Disable Microsoft Background Intelligent Transfer Service (allows to download updates even if Firefox is closed)
pref("app.update.BITS.enabled", false);
// Disable checking of install time
pref("app.update.checkInstallTime", false);
// Disable checking of extensions updates
pref("extensions.update.enabled", false);
// Disable auto updating of extensions (if "extensions.update.enabled" is true)
pref("extensions.update.autoUpdateDefault", false);
// Disable auto updating of Features/System Add-ons, and remove update URL (used to install fxmonitor@mozilla.org, or to update pocket)
pref("extensions.systemAddon.update.enabled", false);
pref("extensions.systemAddon.update.url", "127.0.0.1");
// Disable auto updating of search plugins
pref("browser.search.update", false);
// Disable Cisco OpenH264 codec auto updating (will be updated even if Gecko Media Plugins support is disabled) [HARMS]
// pref("media.gmp-gmpopenh264.enabled", false);
// Disable auto updating of extensions blocklist
pref("extensions.blocklist.enabled", false);
// Disable auto updating of phishing, unwanted software and malware protection lists: "Block dangerous and deceptive content" in Prefs
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
// Disable binaries reputation checking for downloaded files (if "browser.safebrowsing.malware.enabled" is true): "Block dangerous downloads" in Prefs
pref("browser.safebrowsing.downloads.enabled", false);
// Disable checkin unwanted and uncommon binaries (if "browser.safebrowsing.downloads.enabled" is true): "Warn you about unwanted and uncommon software" in Prefs
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// Disable binaries not in local lists being checked by Google, real-time checking, and remove URLs (if "browser.safebrowsing.downloads.enabled" is true)
pref("browser.safebrowsing.downloads.remote.enabled", false);

/************GUI************/
// Disable multi-lingual support
pref("intl.multilingual.enabled", false);
// Disable checking of default browser
pref("browser.shell.checkDefaultBrowser", false);
// Always show Downloads button on the toolbar
pref("browser.download.autohideButton", false);
// Disable Downloads button animation (blue arrow)
pref("browser.download.animateNotifications", false);
// Always ask where to save each file before downloading
pref("browser.download.useDownloadDir", false);
// Time range to clear for "Clear Recent History" is set to "Everything"
pref("privacy.sanitize.timeSpan", 0);
// Select all items in "Clear Recent History": Cache; Cookies; Site Preferences; Offline Website Data; Form & Search History; Active Logins; Browsing & Download History; Passwords (not listed in window)
pref("privacy.cpd.cache", true);
pref("privacy.cpd.cookies", true);
pref("privacy.cpd.siteSettings", true);
pref("privacy.cpd.offlineApps", true);
pref("privacy.cpd.formdata", true);
pref("privacy.cpd.sessions", true);
pref("privacy.cpd.history", true);
pref("privacy.cpd.passwords", true);
pref("privacy.cpd.downloads", true);
// Window Style
pref("browser.uiCustomization.state", "{\"placements\":{\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"urlbar-container\",\"search-container\",\"downloads-button\",\"bookmarks-menu-button\"]},\"currentVersion\":16}");
// Disable GUI animation (tabs)
pref("toolkit.cosmeticAnimations.enabled", false);
// Don't close Firefox when you close the last tab
pref("browser.tabs.closeWindowWithLastTab", false);
// Disable confirmation dialog on multiple tabs closing/opening, others tabs closing
pref("browser.tabs.warnOnClose", false);
pref("browser.tabs.warnOnOpen", false);
pref("browser.tabs.warnOnCloseOtherTabs", false);
pref("browser.sessionstore.warnOnQuit", false);
// Always ask before restoring the browsing session after crash
pref("browser.sessionstore.max_resumed_crashes", 0);
// Disable warning in about:config
pref("general.warnOnAboutConfig", false);
pref("browser.aboutConfig.showWarning", false);
// Disable warning in about:networking
pref("network.warnOnAboutNetworking", false);
// Don't hide Features/System Add-ons in about:debugging
pref("devtools.aboutdebugging.showHiddenAddons", true);
// Disable adding downloaded files to the system's Recent Documents list [WINDOWS]
pref("browser.download.manager.addToRecentDocs", false);
// When copying URLs from the address bar they will be decoded instead of being encoded, so they are human readable
pref("browser.urlbar.decodeURLsOnCopy", true);
// Don't show unicode URLs (phishing with Unicode Domains)
pref("network.IDN_show_punycode", true);
// Enable highlighting all results on the website
pref("findbar.highlightAll", true);
// Disable JumpList [WINDOWS]
pref("browser.taskbar.lists.enabled", false);
// Disable Taskbar Preview [WINDOWS]
pref("browser.taskbar.previews.enable", false);
// Disable Firefox Home Page
pref("browser.startup.homepage", "about:blank");
pref("browser.newtabpage.enabled", false);
// Disable all except Search field in Firefox Home Page (if "browser.newtabpage.enabled" is true)
pref("browser.newtabpage.activity-stream.default.sites", "https://www.trisquel.info/,https://www.gnu.org/,https://www.fsf.org/,https://libreplanet.org/,https://www.wikipedia.org/,https://www.wikinews.org/");
pref("browser.newtabpage.activity-stream.showSearch", true);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
// Disable UITour (first run)
pref("browser.uitour.enabled", false);
// Disable What's New Notices (after Firefox is updated)
pref("browser.startup.homepage_override.mstone", "ignore");
// Disable Slow Startup Notification
pref("browser.slowStartup.notificationDisabled", true);
// Disable and hide Firefox Accounts And Sync
pref("identity.fxaccounts.enabled", false);
// Enable Search Field
pref("browser.search.widget.inNavBar", true);
// Disable Mozilla-provided location-specific search engines
pref("browser.search.geoSpecificDefaults", false);
// Disable GeoIP-based search results, and remove update URL
pref("browser.search.region", "US");
pref("browser.search.geoip.url", "127.0.0.1");
// Disable address bar search suggestions: "Show search suggestions in address bar results" in Prefs
pref("browser.urlbar.suggest.searches", false);
// Don't show search suggestions ahead of browsing history in address bar results (if "browser.urlbar.suggest.searches" is true) [HIDDEN]
pref("browser.urlbar.matchBuckets", "general:5,suggestion:Infinity");
// Disable address bar one-off searches (if "browser.urlbar.suggest.searches" is true)
pref("browser.urlbar.oneOffSearches", false);
// Disable address bar domain guessing
pref("browser.fixup.alternate.enabled", false);
// Disable address bar open tabs suggestions: "When using the address bar, suggest Open tabs" in Prefs
pref("browser.urlbar.suggest.openpage", false);
// Don't select any extra spaces when double-clicking text
pref("layout.word_select.eat_space_to_next_word", false);
// Disable warning when video is open in fullscreen
pref("full-screen-api.warning.timeout", 0);
// Disable autoplay of HTML5 media (audio/video): "Autoplay" in Prefs
pref("media.autoplay.default", 5);
// Disable autoplay of HTML5 muted media (audio/video), if you interacted with the site
pref("media.autoplay.enabled.user-gestures-needed", false);
// Enable spell checking in all text fields
pref("layout.spellcheckDefault", 2);
// Disable previous page by clicking Backspace
pref("browser.backspace_action", 2);
// Enable userChrome.css/userContent.css support
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// URLs in Help menu
pref("app.support.baseURL", "https://www.debian.org/support");
pref("app.feedback.baseURL", "https://lists.debian.org/users.html");
pref("browser.uitour.url", "https://wiki.debian.org/Iceweasel");
// Disable "Recommendations" section in about:addons [HIDDEN]
pref("extensions.getAddons.showPane", false);
// Disable recommendations in "Extensions/Themes" sections in about:addons
pref("extensions.htmlaboutaddons.enabled", false);
// Disable recommended extensions suggestions: "Recommend extensions as you browse" in Prefs
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
// Disable recommended features suggestions: "Recommend features as you browse" in Prefs
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// Disable Pocket ("Save For Later" cloud service) extension
pref("extensions.pocket.enabled", false);
// Disable Screenshots extension
pref("extensions.screenshots.disabled", true);
// Don't require extensions and language packs to be signed by Mozilla
pref("xpinstall.signatures.required", false);
pref("xpinstall.whitelist.required", false);
pref("extensions.langpacks.signatures.required", false);
// Disable scanning for global extensions, used to detect RealPlayer, Java, Antivirus, etc. [WINDOWS]
pref("plugin.scan.plid.all", false);

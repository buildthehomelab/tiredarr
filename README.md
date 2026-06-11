# 😴 Tiredarr

> The last \*arr you'll ever install. Allegedly.

![build](https://img.shields.io/badge/build-napping-yellow)
![coverage](https://img.shields.io/badge/coverage-under%20a%20blanket-blue)
![arrs](https://img.shields.io/badge/*arrs-too%20many-red)
![motivation](https://img.shields.io/badge/motivation-0%25-lightgrey)

🌐 **Website:** [buildthehomelab.github.io/tiredarr](https://buildthehomelab.github.io/tiredarr/) — it loads eventually.

**Tiredarr is a fatigue PVR for Usenet and BitTorrent users.** It monitors multiple RSS feeds (Really Sleepy Syndication) for new naps and will grab, sort, and rename them. It can also be configured to automatically upgrade the quality of sleep already obtained when a better format becomes available.

## The Problem

| App | Manages | Port |
|---|---|---|
| Sonarr | TV | 8989 |
| Radarr | Movies | 7878 |
| Lidarr | Music | 8686 |
| Readarr | Books | 8787 |
| Prowlarr | Indexers (an \*arr to manage your \*arrs) | 9696 |
| Bazarr | Subtitles | 6767 |
| Whisparr | "Research" | 6969 |
| **Tiredarr** | **You** | **2222** |

Every one of them needs an update, an API key, a reverse proxy rule, and a small piece of your soul. The stack manages your media perfectly. Nobody manages *you*.

Tiredarr closes this gap by acknowledging it and going back to bed.

## Features

- **Automatic Nap Detection** — monitors your calendar, your uptime, and your soul
- **Hardlink support** — naps occupy zero extra disk space because they never happen
- **Failed Nap Handling** — automatically retries when a nap is interrupted by a Plex "transcoding" push notification
- **Connect** — notifies Discord, Slack, Telegram, and ntfy when you should be asleep. You will read the notification instead of sleeping.
- **Calendar** — agenda view of upcoming naps you will not take
- **Custom Formats** — score releases by blanket weight, room temperature, and whether the dog is on the bed
- **Indexer support** — searches Couch, Bed, Hammock, and That One Armchair. Falls back to Desk if all else fails.
- **Full ecosystem integration** — does nothing, but does it through the standard \*arr v3 API, so at least it's consistent

## Installation

Don't.

If you must:

```bash
git clone https://github.com/buildthehomelab/tiredarr && cd tiredarr
node server.js        # zero dependencies. we were too tired to add any.
```

Or with Docker:

```bash
docker compose up -d  # detached. like you, from your hobbies.
```

Tiredarr listens on port **2222** — named after 22:22, the time you said you'd go to bed.

## API

Standard \*arr v3 API shape, for consistency with the ecosystem that broke you.

| Endpoint | Returns |
|---|---|
| `GET /ping` | `503` — `{ "status": "tired" }` |
| `GET /api/v3/system/status` | mood, uptime, regrets |
| `GET /api/v3/nap` | your nap queue (mostly missed) |
| `GET /api/v3/calendar` | `[]` |
| `POST` anything | `425 Too Early` — "Can't. Tired." |

All responses include `Retry-After: 28800` (8 hours, the recommended amount) and arrive after a 2–4 second delay, because Tiredarr responds to requests the way you respond to texts.

## Quality Profiles

| Profile | Description |
|---|---|
| `Micronap-480p` | Eyes closed in a meeting. Lossy. |
| `PowerNap-720p` | Twenty minutes, couch, one shoe still on. |
| `REM-1080p` | A real sleep cycle. Rarely seeded. |
| `Hibernation-2160p-REMUX` | Eight full hours, phone untouched. Most indexers consider this release fake. |

## FAQ

**Is this a real project?**
No. It's the only \*arr honest enough to admit it.

**Does it integrate with Overseerr?**
Overseerr can request naps on your behalf. Tiredarr will ignore them, maintaining full compatibility with your existing behavior.

**Why is the web UI blank?**
That's dark mode. The darkest mode. Lights off. Go to sleep.

**How is this different from not installing anything?**
Branding.

**Is there a Discord?**
Yes. Notifications are muted. In both directions.

**Will there be a v1.0?**
The roadmap says "eventually." The roadmap is a sticky note. The sticky note fell behind the desk.

**What about Tiredarr2?**
Don't you dare.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Short version: please don't, we're all very tired.

## License

MIT. Take it. We don't have the energy to enforce anything else.

---

*Tiredarr is not affiliated with Sonarr, Radarr, Lidarr, Readarr, Prowlarr, Bazarr, Whisparr, or whichever new one appeared while you were reading this sentence.*

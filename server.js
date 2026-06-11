#!/usr/bin/env node
// Tiredarr — the last *arr. Listens on 2222. Mostly rests.

const http = require("http");

const PORT = process.env.TIREDARR_PORT || 2222;
const START = Date.now();

const EXCUSES = [
  "Can't. Tired.",
  "Ask Sonarr, it loves attention.",
  "Have you tried turning yourself off and on again?",
  "Request queued behind 4,612 unwatched episodes.",
  "It's not you, it's everything.",
  "Working as intended. The intention was nothing.",
];

const NAPS = [
  { id: 1, title: "Power Nap", quality: "PowerNap-720p", status: "missed", reason: "plex transcode alert" },
  { id: 2, title: "Afternoon Nap", quality: "REM-1080p", status: "missed", reason: "one more episode" },
  { id: 3, title: "Full Night Sleep", quality: "Hibernation-2160p-REMUX", status: "wanted", reason: null },
];

function send(res, code, body) {
  // responds eventually, the way you respond to texts
  setTimeout(() => {
    res.writeHead(code, {
      "Content-Type": "application/json",
      "Retry-After": "28800", // 8 hours, the recommended amount
      "X-Tiredarr-Mood": "exhausted",
    });
    res.end(JSON.stringify(body, null, 2) + "\n");
  }, 2000 + Math.random() * 2000);
}

const server = http.createServer((req, res) => {
  const url = req.url.split("?")[0];

  if (req.method !== "GET") {
    return send(res, 425, { error: "Too Early", message: "Can't. Tired. Try tomorrow." });
  }

  switch (url) {
    case "/ping":
      return send(res, 503, { status: "tired" });
    case "/api/v3/system/status":
      return send(res, 200, {
        appName: "Tiredarr",
        version: "0.0.0-alpha-someday",
        uptimeSeconds: Math.floor((Date.now() - START) / 1000),
        mood: "exhausted",
        managedApps: 0,
        unmanagedFeelings: Infinity, // serializes to null. accurate.
      });
    case "/api/v3/nap":
      return send(res, 200, NAPS);
    case "/api/v3/calendar":
      return send(res, 200, []); // nothing scheduled. nothing ever was.
    default:
      return send(res, 503, {
        error: "Service Unavailable",
        message: EXCUSES[Math.floor(Math.random() * EXCUSES.length)],
      });
  }
});

server.listen(PORT, () => {
  console.log(`Tiredarr v0.0.0-alpha-someday listening on :${PORT}`);
  console.log("This is the last one. No more *arrs after this.");
  console.log("Status: tired. Press Ctrl+C to let it rest.");
});

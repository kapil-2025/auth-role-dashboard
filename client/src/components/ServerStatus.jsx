import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

// The backend is on Render's free plan, which sleeps when idle.
// This pings the API once so the user knows why the first login can be slow.
const STATUS = {
  checking: {
    text: "Waking up the server (free hosting). This can take up to a minute...",
    dot: "bg-amber-500 animate-pulse",
  },
  online: {
    text: "Server is ready",
    dot: "bg-green-500",
  },
  offline: {
    text: "Can't reach the server right now. Please refresh in a minute.",
    dot: "bg-red-500",
  },
};

function ServerStatus() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let ignore = false;
    const checkServer = async () => {
      try {
        const res = await fetch(`${API_URL}/`);
        if (!ignore) setStatus(res.ok ? "online" : "offline");
      } catch {
        if (!ignore) setStatus("offline");
      }
    };
    checkServer();
    return () => {
      ignore = true;
    };
  }, []);

  const current = STATUS[status];
  return (
    <div className="mb-6 flex items-start gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-600">
      <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${current.dot}`}></span>
      <span>{current.text}</span>
    </div>
  );
}

export default ServerStatus;

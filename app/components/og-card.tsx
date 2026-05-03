import React from "react";
import { ImageResponse } from "next/og";

export type OgConfig = {
  eyebrow: string;
  title: string;
  description: string;
  visual?: React.ReactNode;
};

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderArticleOg({
  eyebrow,
  title,
  description,
  visual,
}: OgConfig) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#181a20",
          backgroundImage:
            "linear-gradient(rgba(30, 42, 58, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 42, 58, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          display: "flex",
          flexDirection: "row",
          fontFamily: "monospace",
          color: "#e0e0e0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, #00e676 0%, #18ffff 50%, #ffd740 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "60px 56px",
            width: visual ? 620 : 1200,
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", fontSize: 22 }}>
            <span style={{ color: "#555", fontWeight: 700 }}>&gt;_</span>
            <span style={{ color: "#00e676", fontWeight: 700, marginLeft: 10 }}>
              marc.vanduyn
            </span>
          </div>

          <div
            style={{
              marginTop: 60,
              color: "#00e676",
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              marginTop: 22,
              fontFamily: "sans-serif",
              color: "#ffffff",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.15,
              display: "flex",
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: 22,
              color: "#a0a8b4",
              fontSize: 20,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {description}
          </div>

          <div style={{ flex: 1 }} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#555",
              fontSize: 16,
            }}
          >
            <span>marcvanduyn.dev</span>
            <span style={{ color: "#00e676" }}>· Article ·</span>
          </div>
        </div>

        {visual && (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 56px 60px 0",
            }}
          >
            {visual}
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, #00e676 0%, #18ffff 50%, #ffd740 100%)",
          }}
        />
      </div>
    ),
    { ...ogSize }
  );
}

// ----- Visuals -----

type Curve = { points: string; color: string; badge: string; badgeBad?: boolean };

function MiniPanel({ curve }: { curve: Curve }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#111827",
        border: "1.5px solid #1e2a3a",
        borderRadius: 6,
        width: 156,
        height: 92,
        padding: 8,
        position: "relative",
      }}
    >
      <div
        style={{
          color: curve.badgeBad ? "#ff7d7d" : "#00e676",
          fontSize: 13,
          fontWeight: 700,
          alignSelf: "flex-end",
        }}
      >
        {curve.badge}
      </div>
      <svg
        width="140"
        height="56"
        viewBox="0 0 140 56"
        style={{ marginTop: 4 }}
      >
        <line
          x1="0"
          y1="40"
          x2="140"
          y2="40"
          stroke="#1e2a3a"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <polyline
          points={curve.points}
          stroke={curve.color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ConsistencyVisual() {
  const rowA: Curve[] = [
    { points: "0,42 16,40 32,38 48,35 64,32 80,29 96,26 112,23 128,20 140,18", color: "#00e676", badge: "+25%" },
    { points: "0,42 16,43 32,40 48,37 64,33 80,30 96,27 112,24 128,21 140,20", color: "#00e676", badge: "+24%" },
    { points: "0,42 16,39 32,36 48,33 64,30 80,27 96,24 112,21 128,18 140,15", color: "#00e676", badge: "+26%" },
  ];
  const rowB: Curve[] = [
    { points: "0,42 16,32 32,22 48,12 64,8 80,6 96,5 112,5 128,4 140,4", color: "#18ffff", badge: "+92%" },
    { points: "0,42 16,46 32,49 48,52 64,53 80,54 96,54 112,54 128,54 140,53", color: "#ff7d7d", badge: "-32%", badgeBad: true },
    { points: "0,42 16,40 32,38 48,36 64,34 80,32 96,30 112,28 128,26 140,25", color: "#18ffff", badge: "+18%" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        {rowA.map((c, i) => (
          <MiniPanel key={`a-${i}`} curve={c} />
        ))}
      </div>
      <div
        style={{
          color: "#a0a8b4",
          fontSize: 13,
          display: "flex",
        }}
      >
        Strategy A · consistency 0.94
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        {rowB.map((c, i) => (
          <MiniPanel key={`b-${i}`} curve={c} />
        ))}
      </div>
      <div
        style={{
          color: "#a0a8b4",
          fontSize: 13,
          display: "flex",
        }}
      >
        Strategy B · consistency 0.18
      </div>
    </div>
  );
}

export function StabilityVisual() {
  const items = [
    { label: "Win rate σ", value: 0.85, color: "#00e676" },
    { label: "Sharpe σ", value: 0.72, color: "#18ffff" },
    { label: "Profit win ratio", value: 0.9, color: "#ffd740" },
    { label: "Returns CV", value: 0.55, color: "#ff7d7d" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 18,
        width: 500,
      }}
    >
      {items.map((it) => (
        <div
          key={it.label}
          style={{ display: "flex", flexDirection: "column", gap: 6 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 16,
              color: "#c9d1d9",
            }}
          >
            <span>{it.label}</span>
            <span style={{ color: it.color, fontWeight: 700 }}>
              {it.value.toFixed(2)}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 14,
              background: "#111827",
              border: "1.5px solid #1e2a3a",
              borderRadius: 7,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${it.value * 100}%`,
                height: "100%",
                background: it.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PipelineVisual() {
  type Row = {
    symbol: string;
    adv: string;
    mom: string;
    momColor: string;
    alpha: string;
    masked?: boolean;
  };
  const rows: Row[] = [
    { symbol: "BTC/EUR", adv: "8.2e8", mom: "+0.142", momColor: "#00e676", alpha: "98" },
    { symbol: "ETH/EUR", adv: "4.1e8", mom: "+0.087", momColor: "#00e676", alpha: "76" },
    { symbol: "SOL/EUR", adv: "1.9e8", mom: "-0.034", momColor: "#ff7d7d", alpha: "42" },
    { symbol: "ADA/EUR", adv: "9.4e7", mom: "+0.011", momColor: "#00e676", alpha: "31" },
    { symbol: "DOT/EUR", adv: "—", mom: "—", momColor: "#555", alpha: "dropped", masked: true },
  ];

  const headerCellStyle: React.CSSProperties = {
    color: "#18ffff",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    padding: "10px 14px",
    display: "flex",
  };

  const cellStyle: React.CSSProperties = {
    fontSize: 16,
    padding: "10px 14px",
    display: "flex",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        gap: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 14,
          color: "#00e676",
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        data["MomentumScreener"]
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#111827",
          border: "1.5px solid #18ffff",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #1e2a3a",
            background: "rgba(24, 255, 255, 0.06)",
          }}
        >
          <div style={{ ...headerCellStyle, width: 140 }}>symbol</div>
          <div style={{ ...headerCellStyle, width: 110 }}>adv</div>
          <div style={{ ...headerCellStyle, width: 130 }}>momentum</div>
          <div style={{ ...headerCellStyle, width: 120 }}>alpha</div>
        </div>

        {rows.map((r) => (
          <div
            key={r.symbol}
            style={{
              display: "flex",
              borderBottom: "1px solid #1e2a3a",
              opacity: r.masked ? 0.35 : 1,
            }}
          >
            <div style={{ ...cellStyle, width: 140, color: "#c9d1d9" }}>
              {r.masked ? (
                <span style={{ textDecoration: "line-through" }}>
                  {r.symbol}
                </span>
              ) : (
                r.symbol
              )}
            </div>
            <div style={{ ...cellStyle, width: 110, color: "#a0a8b4" }}>
              {r.adv}
            </div>
            <div style={{ ...cellStyle, width: 130, color: r.momColor }}>
              {r.mom}
            </div>
            <div style={{ ...cellStyle, width: 120, color: "#ffd740", fontWeight: 700 }}>
              {r.alpha}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 13,
          color: "#6b7b8d",
          marginTop: 4,
        }}
      >
        universe = ADV.top(100) · alpha = momentum.rank(mask=universe)
      </div>
    </div>
  );
}

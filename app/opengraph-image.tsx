import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Yogesh Kumar — Bug Bounty Hunter and Security Researcher";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";


export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #09090b 0%, #0c1117 55%, #09090b 100%)",
          color: "#f4f4f5",
          padding: "70px 80px",
        }}
      >

        {/* Cyan glow */}

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background:
              "rgba(34, 211, 238, 0.12)",
            filter: "blur(100px)",
            top: "-260px",
            right: "-100px",
          }}
        />


        {/* Content */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 1,
          }}
        >

          {/* YK mark */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "18px",
              border: "1px solid rgba(34, 211, 238, 0.35)",
              background: "rgba(34, 211, 238, 0.06)",
              color: "#22d3ee",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            YK
          </div>


          {/* Main text */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >

            <div
              style={{
                fontSize: "64px",
                fontWeight: 700,
                letterSpacing: "-2px",
              }}
            >
              Yogesh Kumar
            </div>


            <div
              style={{
                marginTop: "14px",
                fontSize: "29px",
                color: "#a1a1aa",
              }}
            >
              Bug Bounty Hunter & Security Researcher
            </div>


            <div
              style={{
                display: "flex",
                marginTop: "34px",
                fontSize: "20px",
                color: "#22d3ee",
                letterSpacing: "2px",
              }}
            >
              WEB SECURITY · API SECURITY · BUG BOUNTY
            </div>

          </div>

        </div>

      </div>
    ),
    {
      ...size,
    }
  );
}
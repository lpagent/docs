export const FreePlan = () => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "460px",
        padding: "32px",
        border: "2px solid #E8E8E8",
        borderRadius: "24px",
        backgroundColor: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          margin: "0 0 8px 0",
          color: "#1a1a1a",
        }}
      >
        Free
      </h2>

      <p style={{ fontSize: "16px", color: "#999", margin: "0 0 24px 0" }}>
        Limit volume access
      </p>

      <div style={{ marginBottom: "32px" }}>
        <span style={{ fontSize: "48px", fontWeight: "700", color: "#1a1a1a" }}>
          $0
        </span>
        <span style={{ fontSize: "18px", color: "#999" }}>/month</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {[
          { icon: "⚡", text: "3 RPM" },
          { icon: "🔌", text: "Access to full REST API" },
          { icon: "🔄", text: "Upgrade, downgrade, cancel anytime" },
        ].map((feature, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <span
              style={{
                fontSize: "20px",
                color: feature.muted ? "#CCC" : "#16A34A",
              }}
            >
              {feature.icon}
            </span>
            <span
              style={{
                fontSize: "16px",
                color: feature.muted ? "#BBB" : "#666",
              }}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button
        style={{
          width: "100%",
          backgroundColor: "#16A34A",
          color: "white",
          padding: "16px 24px",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#15803D";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#16A34A";
        }}
        onClick={() =>
          // window.open(
          //   "https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_SSnD8UpTJLaSkA3iAQe0BFAXUiEh3Sz5coHDo2OdAk4/redirect",
          //   "_blank",
          // )
          console.log("Free plan selected")
        }
      >
        Select Standard
      </button>
    </div>
  );
};

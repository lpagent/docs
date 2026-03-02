export const ElitePlan = () => {
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
        Elite
      </h2>

      <p style={{ fontSize: "16px", color: "#999", margin: "0 0 24px 0" }}>
        The ultimate boating experience
      </p>

      <div style={{ marginBottom: "32px" }}>
        <span style={{ fontSize: "48px", fontWeight: "700", color: "#1a1a1a" }}>
          $40
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
          { icon: "👥", text: "Unlimited bookings" },
          { icon: "📅", text: "Book up to 30 days in advance" },
          { icon: "⭐", text: "VIP events and perks" },
          { icon: "🚤", text: "Access to entire fleet" },
        ].map((feature, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <span
              style={{
                fontSize: "20px",
                color: "#16A34A",
              }}
            >
              {feature.icon}
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#666",
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
          window.open(
            "https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_1KmlltqPeSiQxRMgO3ywgnGlzaDmnQldwvEnP3lBkQ7/redirect",
            "_blank",
          )
        }
      >
        Select Elite
      </button>
    </div>
  );
};

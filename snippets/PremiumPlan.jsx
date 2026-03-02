export const PremiumPlan = () => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "460px",
        padding: "40px 32px 32px",
        border: "2px solid #16A34A",
        borderRadius: "24px",
        backgroundColor: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-18px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#16A34A",
          color: "white",
          padding: "8px 24px",
          borderRadius: "20px",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Most Popular
      </div>

      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          margin: "0 0 8px 0",
          color: "#1a1a1a",
        }}
      >
        Premium
      </h2>

      <p style={{ fontSize: "16px", color: "#888", margin: "0 0 24px 0" }}>
        For regular boating enthusiasts
      </p>

      <div style={{ marginBottom: "32px" }}>
        <span style={{ fontSize: "48px", fontWeight: "700", color: "#1a1a1a" }}>
          $20
        </span>
        <span style={{ fontSize: "18px", color: "#888" }}>/month</span>
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
          { icon: "👥", text: "8 bookings per month" },
          { icon: "📅", text: "Book up to 14 days in advance" },
          { icon: "⭐", text: "Priority booking" },
          { icon: "🚤", text: "Access to premium fleet" },
        ].map((feature, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <span style={{ fontSize: "20px", color: "#16A34A" }}>
              {feature.icon}
            </span>
            <span style={{ fontSize: "16px", color: "#666" }}>
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
            "https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_BujkWNZXUiFwdVVn9WprfojL2w8mK0YQx7eew4Ma9GX/redirect",
            "_blank",
          )
        }
      >
        Select Premium
      </button>
    </div>
  );
};

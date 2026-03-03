export const EnterprisePlan = () => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "460px",
        padding: "32px",
        borderRadius: "24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
      className="border bg-white dark:bg-zinc-900 border-[#E8E8E8] dark:border-zinc-800"
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          margin: "0 0 8px 0",
        }}
        className="text-[#1a1a1a] dark:text-white"
      >
        Enterprise
      </h2>

      <p style={{ fontSize: "16px", color: "#999", margin: "0 0 24px 0" }}>
        High volume access
      </p>

      <div style={{ marginBottom: "32px" }}>
        <span 
          style={{ fontSize: "48px", fontWeight: "700" }}
          className="text-[#1a1a1a] dark:text-white"
        >
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
          { icon: "⚡", text: "20 RPM" },
          { icon: "🔌", text: "Access to full REST API" },
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
              }}
              className="text-[#666] dark:text-[#999]"
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
          opacity: 0.5,
          cursor: "not-allowed",
        }}
        disabled={true}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#15803D";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#16A34A";
        }}
        onClick={() =>
          // window.open(
          //   "https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_1KmlltqPeSiQxRMgO3ywgnGlzaDmnQldwvEnP3lBkQ7/redirect",
          //   "_blank",
          // )
          console.log("Enterprise plan selected")
        }
      >
        Select Enterprise
      </button>
    </div>
  );
};

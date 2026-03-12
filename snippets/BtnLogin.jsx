export const BtnLogin = () => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "50px",
        border: "1px solid #e5e5e5",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.2s ease",
        width: "max-content",
      }}
      disabled={true}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f5f5f5";
        e.currentTarget.style.borderColor = "#d4d4d4";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.borderColor = "#e5e5e5";
      }}
      onClick={() => window.open("https://portal.lpagent.io/", "_blank")}
    >
      Manage your API Key
      <span style={{ fontSize: "20px" }}>→</span>
    </button>
  );
};

import { useState, useEffect } from "react";

export const BtnGenerator = () => {
  return (
    <button
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        transition: "all 0.2s ease",
        width: "max-content",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#2a2a2a";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1a1a1a";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      Get Free API Key
      <span style={{ fontSize: "20px" }}>↗</span>
    </button>
  );
};

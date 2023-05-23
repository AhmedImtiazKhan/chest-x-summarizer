import Button from "react-bootstrap/Button";

function MenuBar() {
  return (
    <Button
      variant="light"
      className="p-3"
      onClick={() => (window.location.href = "/")}
      style={{
        transform: "scale(0.67)",
        fontWeight: "bold",
        textAlign: "left",
        fontSize: "1.34rem",
      }}
    >
      ChestX Summarizer
    </Button>
  );
}

export default MenuBar;

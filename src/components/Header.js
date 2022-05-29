import logo from "../../src/assets/logo.png";
import logoText from "../../src/assets/logoText.png";
import arow from "../../src/assets/arow.png";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar d-none d-lg-flex nav-lg">
        <div className="container-fluid d-flex">
          <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <img style={{ width: "117px", height: "54px" }} src={logo} />
            <img style={{ width: "147px", height: "36px" }} src={logoText} />
          </span>
          <div className="d-flex gap-3">
            <span className="d-flex" style={{ alignItems: "center" }}>
              <i className="bi bi-brightness-high-fill"></i>
            </span>
            <button
              className="btn btn-primary font-weight-bold"
              style={{ backgroundColor: "#378AD7" }}
            >
              <i className="bi bi-funnel" style={{ height: "36px" }}></i>
            </button>
            <div style={{ position: "relative" }}>
              <input className="search-input" type="search" />
              <label
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "15px",
                  color: "#0E69AC",
                }}
              >
                ...חפש
              </label>
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "15px",
                  color: "#0E69AC",
                }}
              ></i>
            </div>

            <span className="d-flex gap-2">
              <button
                style={{
                  borderRadius: "100%",
                  width: "40px",
                  height: "40px",
                  border: "1px white solid",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <label
                  style={{
                    text: "white",
                  }}
                >
                  ע
                </label>
              </button>
              <button style={{ backgroundColor: "transparent", border: "0px" }}>
                <img
                  style={{ width: "10px", height: "10px", alignSelf: "center" }}
                  src={arow}
                />
              </button>
            </span>
          </div>
        </div>
      </nav>
      <nav className="navbar d-lg-none nav-sm">
        <div className="container-fluid">
          <span style={{ position: "relative", display: "flex", gap: "5px" }}>
            <button
              style={{
                borderRadius: "100%",
                width: "50px",
                height: "50px",
                border: "1px white solid",
                backgroundColor: "transparent",
              }}
            ></button>
            <label style={{ position: "absolute", top: "10px", right: "20px" }}>
              ע
            </label>
            <button style={{ backgroundColor: "transparent", border: "0px" }}>
              <img
                style={{ width: "10px", height: "10px", alignSelf: "center" }}
                src={arow}
              />
            </button>
          </span>
          <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <img style={{ width: "117px", height: "54px" }} src={logo} />
            <img style={{ width: "147px", height: "36px" }} src={logoText} />
          </span>

          <div>
            <span>
              <i className="bi bi-brightness-high-fill"></i>
            </span>
            <button
              className="btn btn-primary font-weight-bold"
              style={{ backgroundColor: "#378AD7" }}
            >
              <i className="bi bi-funnel" style={{ height: "36px" }}></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

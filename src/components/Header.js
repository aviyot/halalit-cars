import logo from "../../src/assets/logo.png";
import logoText from "../../src/assets/logoText.png";
import filterIcon from "../../src/assets/filterIcon.png";
import arowUserIcon from "../../src/assets/arrowUserIcon.png";
import themeIcon from "../../src/assets/themeIcon.png";
import searchIcon from "../../src/assets/searchIcon.png";
import searchWhiteIcon from "../../src/assets/searchWhiteIcon.png";
import arow from "../../src/assets/arow.png";
import "./Header.css";

function Header() {
  return (
    <div className="fixed" style={{ width: "100%", top: "0", zIndex: "100" }}>
      <nav
        className="flex flex-just-between nav-lg flex-align-center p-8"
        style={{ height: "50px" }}
      >
        <span className="flex flex-align-center gap-8">
          <img style={{ width: "100px", height: "20px" }} src={logo} />
          <img style={{ width: "100px", height: "20px" }} src={logoText} />
        </span>
        <div className="flex gap-8">
          <button className="bg-trans b-0">
            <img style={{ height: "20px" }} src={filterIcon} />
          </button>
          <button
            className="bg-trans b-0"
            style={{ backgroundColor: "#378AD7" }}
          >
            <img style={{ height: "20px" }} src={themeIcon} />
          </button>
          <div
            style={{ height: "30px" }}
            className="flex flex-just-between none flex-align-center search-input px-8"
          >
            <label>חפש...</label>
            <input style={{ outline: "none", borderWidth: 0 }} type="search" />
            <button className="bg-trans b-0">
              <img src={searchIcon} />
            </button>
          </div>

          <span className="flex  flex-align-center  flex-just-between">
            <button className="bg-trans b-0">
              <img src={arow} />
            </button>
            <button
              style={{
                borderRadius: "100%",
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
          </span>
        </div>
      </nav>
      <nav
        className="flex flex-just-between nav-sm flex-align-center"
        style={{ height: "50px" }}
      >
        <span className="flex flex-align-center flex-just-between">
          <button
            style={{
              borderRadius: "100%",
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
          <button className="bg-trans b-0">
            <img src={arow} />
          </button>
        </span>
        <span className="flex flex-align-center gap-8">
          <img style={{ width: "100px", height: "20px" }} src={logo} />
          <img style={{ width: "100px", height: "20px" }} src={logoText} />
        </span>
        <span>
          <button className="bg-trans b-0">
            <img style={{ height: "20px" }} src={filterIcon} />
          </button>
          <button className="bg-trans b-0">
            <img style={{ height: "20px" }} src={searchWhiteIcon} />
          </button>
        </span>
      </nav>
    </div>
  );
}

export default Header;

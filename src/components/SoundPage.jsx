import { useEffect, useRef, useState } from "react";
import allKey from "./small_components/key.json";
import lyrics from "./small_components/lyrics.json";

function SoundPage() {
  const [typedWords, setTypedWords] = useState("");
  const inputRef = useRef(null);
  const [sounds, setSounds] = useState("/audio-2025-03-18-17-07-07_P67qrwI4.m4a");
  const playAudio = new Audio(sounds);
  const activeKeys = new Set();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (ev) => {
      let key = ev.key.toUpperCase();
      if (key === " ") key = "SPACE";
      if (key === "ENTER") key = "RETURN";
      if (key === "!") key = "1";
      if (key === "@") key = "2";
      if (key === "#") key = "3";
      if (key === "$") key = "4";
      if (key === "%") key = "5";
      if (key === "^") key = "6";
      if (key === "&") key = "7";
      if (key === "*") key = "8";
      if (key === "(") key = "9";
      if (key === ")") key = "0";
      if (key === "_") key = "-";
      if (key === "+") key = "=";
      if (key === "{") key = "[";
      if (key === "}") key = "]";
      if (key === "|") key = "kdit";
      if (key === "\\") key = "kdit";
      if (key === ":") key = ";";
      if (key === '"') key = "'";
      if (key === "<") key = ",";
      if (key === ">") key = ".";
      if (key === "?") key = "/";
      const element = document.querySelector(`[data-keyboard-key="${key}"]`);
      if (element) element.classList.add("active");
    };

    const handleKeyUp = (ev) => {
      let key = ev.key.toUpperCase();
      if (key === " ") key = "SPACE";
      if (key === "ENTER") key = "RETURN";
      if (key === "!") key = "1";
      if (key === "@") key = "2";
      if (key === "#") key = "3";
      if (key === "$") key = "4";
      if (key === "%") key = "5";
      if (key === "^") key = "6";
      if (key === "&") key = "7";
      if (key === "*") key = "8";
      if (key === "(") key = "9";
      if (key === ")") key = "0";
      if (key === "_") key = "-";
      if (key === "+") key = "=";
      if (key === "{") key = "[";
      if (key === "}") key = "]";
      if (key === "|") key = "kdit";
      if (key === "\\") key = "kdit";
      if (key === ":") key = ";";
      if (key === '"') key = "'";
      if (key === "<") key = ",";
      if (key === ">") key = ".";
      if (key === "?") key = "/";
      const element = document.querySelector(`[data-keyboard-key="${key}"]`);
      if (element) element.classList.remove("active");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/keyboard-css@1.2.4/dist/css/main.min.css";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleInput = (e) => {
    setTypedWords(e.target.value);
  };

  const handleKeyPress = () => {
    if (activeKeys.has(allKey)) return;
    activeKeys.add(allKey);
    playAudio.currentTime = 0;
    playAudio.play();
  };

  const words = lyrics.lyrics;

  const display = () => {
    return words.split("").map((char, index) => (
      <span
        key={index}
        style={{
          color: index < typedWords.length ? checkTypedWords(index) : "white",
          background:
            index < typedWords.length ? checkTypedWordsb(index) : "black",
        }}
      >
        {char}
      </span>
    ));
  };

  const checkTypedWords = (index) => {
    return typedWords[index] === words[index] ? "red" : "white";
  };
  const checkTypedWordsb = (index) => {
    return typedWords[index] === words[index] ? "black" : "red";
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", margin:"10px" }}
    >
      <div class="dropdown" style={{ alignSelf: "flex-start" }}>
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select switch
        </button>
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li onClick={()=>setSounds("../../public/src_assets_audio_alpaca_press_GENERIC_R0.mp3")}>
            <a class="dropdown-item active" href="#" >
              Alpaca
            </a>
          </li>
          <li onClick={()=>setSounds("../../public/src_assets_audio_blackink_press_GENERIC_R0.mp3")}>
            <a class="dropdown-item" href="#">
              Gateron Black Inks
            </a>
          </li>
          <li onClick={()=>setSounds("../../public/src_assets_audio_mxblue_press_GENERIC_R0.mp3")}>
            <a class="dropdown-item" href="#">
              Mx Blue
            </a>
          </li>
          <li onClick={()=>setSounds("../../public/src_assets_audio_mxbrown_press_GENERIC_R0.mp3")}>
            <a class="dropdown-item" href="#">
              Mx Brown
            </a>
          </li>
        </ul>
      </div>
      <div id="display">{display()}</div>
      <input
        type="text"
        ref={inputRef}
        value={typedWords}
        onKeyDown={handleKeyPress}
        onChange={handleInput}
        style={{ position: "fixed", top: "0px", left: "-9999px" }}
        autoComplete="off"
      />

      <div style={{ transform: "scale(0.80)" }}>
        <div
          id="keyboard"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            width: "1150px",
            padding: "20px",
          }}
        >
          {Object.keys(allKey).map((row) => (
            <div style={{ display: "flex" }}>
              {allKey[row].map((e, i) => (
                <button
                  className={e.className}
                  data-keyboard-key={e.key}
                  type="button"
                  key={i}
                  style={{
                    fontSize: "0.675rem",
                    width: e.width,
                    height: "50px",
                    marginLeft: e.marginLeft,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  onFocus={(e) => e.preventDefault()}
                  tabIndex="-1"
                >
                  {e.secondKey ? (
                    <div id="secondKey">
                      <span>{e.secondKey}</span>
                      <span>{e.firstKey}</span>
                    </div>
                  ) : (
                    e.firstKey
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoundPage;

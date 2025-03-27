import { useEffect, useRef, useState } from "react";

function SoundPage
() {
  const allKey = [
    { key: "escape", background: "beige" },
    { key: "f1", background: "beige" },
    { key: "f2", background: "beige" },
    { key: "f3", background: "beige" },
    { key: "f4", background: "beige" },
    { key: "f5", background: "beige" },
    { key: "f6", background: "beige" },
    { key: "f7", background: "beige" },
    { key: "f8", background: "beige" },
    { key: "f9", background: "beige" },
    { key: "f10", background: "beige" },
    { key: "f11", background: "beige" },
    { key: "f12", background: "beige" },
    { key: "printscreen", background: "beige" },
    { key: "scrolllock", background: "beige" },
    { key: "pause", background: "beige" },
    { key: "`", background: "beige" },
    { key: "1", background: "beige" },
    { key: "2", background: "beige" },
    { key: "3", background: "beige" },
    { key: "4", background: "beige" },
    { key: "5", background: "beige" },
    { key: "6", background: "beige" },
    { key: "7", background: "beige" },
    { key: "8", background: "beige" },
    { key: "9", background: "beige" },
    { key: "0", background: "beige" },
    { key: "-", background: "beige" },
    { key: "=", background: "beige" },
    { key: "backspace", background: "beige" },
    { key: "insert", background: "beige" },
    { key: "home", background: "beige" },
    { key: "pageup", background: "beige" },
    { key: "tab", background: "beige" },
    { key: "q", background: "beige" },
    { key: "w", background: "beige" },
    { key: "e", background: "beige" },
    { key: "r", background: "beige" },
    { key: "t", background: "beige" },
    { key: "y", background: "beige" },
    { key: "u", background: "beige" },
    { key: "i", background: "beige" },
    { key: "o", background: "beige" },
    { key: "p", background: "beige" },
    { key: "[", background: "beige" },
    { key: "]", background: "beige" },
    { key: "\\", background: "beige" },
    { key: "delete", background: "beige" },
    { key: "end", background: "beige" },
    { key: "pagedown", background: "beige" },
    { key: "capslock", background: "beige" },
    { key: "a", background: "beige" },
    { key: "s", background: "beige" },
    { key: "d", background: "beige" },
    { key: "f", background: "beige" },
    { key: "g", background: "beige" },
    { key: "h", background: "beige" },
    { key: "j", background: "beige" },
    { key: "k", background: "beige" },
    { key: "l", background: "beige" },
    { key: ";", background: "beige" },
    { key: "'", background: "beige" },
    { key: "enter", background: "beige" },
    { key: "shift", background: "beige" },
    { key: "z", background: "beige" },
    { key: "x", background: "beige" },
    { key: "c", background: "beige" },
    { key: "v", background: "beige" },
    { key: "b", background: "beige" },
    { key: "n", background: "beige" },
    { key: "m", background: "beige" },
    { key: ",", background: "beige" },
    { key: ".", background: "beige" },
    { key: "/", background: "beige" },
    { key: "shift", background: "beige" },
    { key: "control", background: "beige" },
    { key: "meta", background: "beige" },
    { key: "alt", background: "beige" },
    { key: " ", background: "beige" },
    { key: "alt", background: "beige" },
    { key: "function", background: "beige" },
    { key: "menu", background: "beige" },
    { key: "control", background: "beige" },
    { key: "arrowup", background: "beige" },
    { key: "arrowleft", background: "beige" },
    { key: "arrowdown", background: "beige" },
    { key: "arrowright", background: "beige" },
  ];
  const [keys, setKey] = useState(allKey);
  const sounds={
    "escape": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f1": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f2": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f3": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f4": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f5": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f6": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f7": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f8": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f9": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f10": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f11": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f12": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "1": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "2": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "3": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "4": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "5": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "6": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "7": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "8": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "9": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "0": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "-": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "=": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "backspace": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "insert": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "home": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "pageup": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "tab": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "q": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "w": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "e": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "r": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "t": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "y": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "u": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "i": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "o": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "p": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "[": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "]": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "\\": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "delete": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "end": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "pagedown": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "capslock": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "a": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "s": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "d": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "f": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "g": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "h": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "j": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "k": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "l": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    ";": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "'": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "enter": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "shift": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "z": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "x": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "c": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "v": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "b": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "n": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "m": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    ",": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    ".": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "/": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "control": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "meta": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "alt": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    " ": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "arrowup": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "arrowleft": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "arrowdown": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
    "arrowright": "/audio-2025-03-18-17-07-07_P67qrwI4.m4a",
  };


  const words =
  "Me and my girlies, we gon' party 'til it's early Got me feeling otherworldly tonight Caught in some traffic, but the radio is blasting Drop a red light and we'll sing it goodbye Ooh By the morning, feel like magic I got all I need, you know nothing else can beat The way that I feel when I'm dancing with my girls Perfect energy, yeah, we flawless, yeah, we free There's no better feeling in the whole wide world Tonight, I don't care what's wrong or right Don't start blowing up my line, I'd care at 11:59 But nothing counts after midnight Come and take a ride with me I got a credit card and some good company Some come through, make the fit real good Why you still stuck on loading? Waiting on you, babe Ooh Night to morning, live slow-motion I got all I need, you know nothing else can beat The way that I feel when I'm dancing with my girls Perfect energy, yeah, we flawless, yeah, we free There's no better feeling in the whole wide world Tonight, I don't care what's wrong or right Don't start blowing up my line, I'd care at 11:59 But nothing counts after midnight oh, oh, oh Ooh By the morning, feel like magic I got all I need, you know nothing else can beat The way that I feel when I'm dancing with my girls (ah) Perfect energy (uh-huh), yeah, we flawless, yeah, we free There's no better feeling in the whole wide world Tonight, I don't care what's wrong or right Don't start blowing up my line, I'd care at 11:59 Don't start blowing up my line";

  const [typedWords, setTypedWords] = useState("");
  const inputRef = useRef(null);
  const audioTimeout = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleInput = (e) => {
    setTypedWords(e.target.value);
  };
  const handleKeyPress = (e) => {
    const temp = allKey;
    const playAudio=new Audio(sounds[e.key.toLowerCase()]);
    setKey((prevKey) =>
      prevKey.map((keyPressed) =>
        keyPressed.key === e.key.toLowerCase()
          ? { ...keyPressed, background: changeColor() }
          : keyPressed
      )
    );
    playAudio.play();
    clearTimeout(audioTimeout.current);
    
    setTimeout(() => {
      setKey(temp);
    }, 500);
  };
  const display = () => {
    return words.split("").map((char, index) => {
      return (
        <span
          key={index}
          style={
            index < typedWords.length
              ? { backgroundColor: checkTypedWords(index) }
              : { backgroundClip: "gray" }
          }
        >
          {char}
        </span>
      );
    });
  };
  const changeColor = () => {
    return "red";
  };
  const checkTypedWords = (index) => {
    if (typedWords[index] === words[index]) {
      return "green";
    } else if (typedWords[index] !== words[index]) {
      return "red";
    } else {
      return "";
    }
  };
  const handleClickAnywhere = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div onClick={handleClickAnywhere}>
      <div>{display()}</div>
      <input
        type="text"
        ref={inputRef}
        value={typedWords}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={(e) => handleInput(e)}
        style={{position:"absolute", top:"-1000px"}}
      />
      <div>
        <img
          src="../public/pngwing.com (4).png"
          alt=""
          style={{ height: `200px` }}
        />
        <div style={{ display: `flex`, flexWrap: `wrap` }}>
          {keys.map((e, i) => {
            return (
              <span
                key={i}
                style={{ backgroundColor: `${e.background}`, margin: `10px` }}
              >
                {e.key}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SoundPage
;

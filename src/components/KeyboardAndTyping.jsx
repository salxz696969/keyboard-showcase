import { useState } from "react";

function KeyboardAndTyping() {
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
  const audio = new Audio("../public/audio-2025-03-18-17-07-07_P67qrwI4.m4a");

  const words =
    "Hoo-ooh, ooh-ooh Hoo-ooh, hoo Stay in the middle Like you a little, don't want no riddle Malhaejwo say it back, oh, say it ditto Achimeun neomu meoreo so say it ditto Huljjeok keobeoryeosseo Hamkkehan gieokcheoreom Neol boneun nae maeumeun Eoneusae yeoreum jina gaeul Gidaryeotji all this time Do you want somebody? Like I want somebody? Nal bogo useotjiman Do you think about me now, yeah? All the time, yeah, all the time I got no time to lose Nae gireotdeon haru Nan bogo sipeo Ra-ta-ta-ta, ullin simjang (Ra-ta-ta-ta) I got nothing to lose Neol joahandago, ooh-woah, ooh-woah, ooh-woah Ra-ta-ta-ta, ullin simjang (Ra-ta-ta-ta) But I don't want to Stay in the middle Like you a little, don't want no riddle Malhaejwo, say it back, oh, say it ditto Achimeun neomu meoreo so say it ditto I don't want to Walk in this miro Da aneun geon anieodo baradeon daero Malhaejwo, say it back, oh, say it ditto I want you so, want you, so say it ditto Not just anybody Neoreul sangsanghaetji Hangsang daaitdeon Cheoeum neukkim geudaero nan Gidaryeotji all this time I got nothing to lose Neol joahandago, ooh-woah, ooh-woah, ooh-woah Ra-ta-ta-ta, ullin simjang (Ra-ta-ta-ta) But I don't want to Stay in the middle Like you a little, don't want no riddle Malhaejwo, say it back, oh, say it ditto Achimeun neomu meoreo so say it ditto I don't want to Walk in this miro Da aneun geon anieodo baradeon daero Malhaejwo, say it back, oh, say it ditto I want you so, want you, so say it ditto Hoo-ooh, ooh-ooh Hoo-ooh, hoo";

  const [typedWords, setTypedWords] = useState("");
  const handleInput = (e) => {
    setTypedWords(e.target.value);
  };
  const handleKeyPress = (e) => {
    console.log(`Key pressed: ${e.key}`);
    const temp = allKey;
    setKey((prevKey) =>
      prevKey.map((keyPressed) =>
        keyPressed.key === e.key.toLowerCase()
          ? { ...keyPressed, background: changeColor() }
          : keyPressed
      )
    );
    audio.play();
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
  return (
    <>
      <div>{display()}</div>
      <input
        type="text"
        value={typedWords}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={(e) => handleInput(e)}
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
    </>
  );
}

export default KeyboardAndTyping;

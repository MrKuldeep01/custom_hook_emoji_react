import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { decode } from "html-entities";
// import he from 'he'
const useEmojiData = (op) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://emojihub.yurace.pro/api/random`)
      .then((res) => res.json())
      .then(async (res) => {
        // res.htmlCode =decode(res.htmlCode.join(''))
        res.htmlCode[0] = res.unicode
          .map((code) =>
            String.fromCodePoint(parseInt(code.replace("U+", ""), 16))
          )
          .join("");
        setData(res);
      })
      .catch((err) => {
        console.log(err + "In our useEmojiData hook");
      });
  }, [op]);
  return data;
};

export default useEmojiData;

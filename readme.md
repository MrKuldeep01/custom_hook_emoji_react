#  Emoji viewer 😇

Api link is : 

```js
`https://emojihub.yurace.pro/api/${all or random}`

```
in this, we are using only random url.

response :

```json
{
    "name": "hugging face",
    "category": "smileys and people",
    "group": "face positive",
    "htmlCode": ["&#129303;"],
    "unicode": ["U+1F917"]
}

```

🎯 Examples
```js
https://emojihub.yurace.pro/api/random/group/face-positive

https://emojihub.yurace.pro/api/random/category/food-and-drink

https://emojihub.yurace.pro/api/all/category/travel-and-places

https://emojihub.yurace.pro/api/all/group/animal-bird
```

Sure! Here's a simplified version of the README file:

---

# React Learning Summary

This document summarizes the key concepts and techniques I have learned in React, including custom hooks, components, props sharing, data fetching from APIs, decoding HTML entities and Unicode to emojis, and handling errors.

## Topics Covered

1. [Custom Hooks](#custom-hooks)
2. [Components](#components)
3. [Props Sharing](#props-sharing)
4. [Fetching Data from APIs](#fetching-data-from-apis)
5. [Decoding HTML and Unicode to Emojis](#decoding-html-and-unicode-to-emojis)
6. [Using `he` Library](#using-he-library)
7. [Using `html-entities` Library](#using-html-entities-library)
8. [Handling Errors](#handling-errors)

## Custom Hooks

Custom hooks allow you to reuse stateful logic across components. They are functions that start with `use`.

```jsx
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

```

## Components

Components are reusable building blocks in React. They can be functional or class-based.

```jsx
import React from 'react';

const MyComponent = ({ title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default MyComponent;
```

## Props Sharing

Props are used to pass data from parent to child components.

```jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => (
  <div>
    <MyComponent title="Hello, World!" description="This is a description." />
  </div>
);

export default App;
```

## Fetching Data from APIs

Use `fetch` inside the `useEffect` hook to get data from an API.

```jsx
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default App;
```

## Decoding HTML and Unicode to Emojis

Use libraries or browser functionality to decode HTML entities or Unicode to emojis.

### Using Built-in Browser Functionality

```jsx
const decodeHtmlEntity = (encodedStr) => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(`<!doctype html><body>${encodedStr}`, 'text/html');
  return dom.body.textContent;
};

const emoji = decodeHtmlEntity('&#129306;&#127999;');
console.log(emoji); // Outputs: 👆🏿
```

### Using Unicode Directly

```jsx
const unicodeToEmoji = (unicodeArray) => {
  return unicodeArray.map(code => String.fromCodePoint(parseInt(code.replace('U+', ''), 16))).join('');
};

const emoji = unicodeToEmoji(['U+1F91A', 'U+1F3FF']);
console.log(emoji); // Outputs: 👆🏿
```

## Using `he` Library

The `he` library is used for decoding HTML entities.

```bash
npm install he
```

```jsx
import he from 'he';

const encodedStr = '&#129306;&#127999;';
const decodedStr = he.decode(encodedStr);

console.log(decodedStr); // Outputs: 👆🏿
```

## Using `html-entities` Library

The `html-entities` library is another option for decoding HTML entities.

```bash
npm install html-entities
```

```jsx
import { decode } from 'html-entities';

const encodedStr = '&#129306;&#127999;';
const decodedStr = decode(encodedStr);

console.log(decodedStr); // Outputs: 👆🏿
```

## Handling Errors

Use `try/catch` blocks to handle errors and display error messages.

## Conclusion

This README provides a summary of key concepts in React, including custom hooks, components, props sharing, data fetching, emoji decoding, and error handling.


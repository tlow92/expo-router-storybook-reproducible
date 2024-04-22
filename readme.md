# Minimal, Reproducible Example

### Initial Error:

```javascript
ERROR in ./node_modules/expo-router/build/onboard/Tutorial.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
TypeError: /xyz/git/my-app/node_modules/expo-router/build/onboard/Tutorial.js: Expected `fromDir` to be of type `string`, got `undefined`
```

### Original goal

Usage of storybook react-native and web (with the original storybook web overlay) with Expo 50 + expo-router

This repo is a combination of two guides:

- https://dev.to/hasan_py/setup-your-universal-app-with-react-native-expo-router-tamagui-and-storybook-28m6
- https://github.com/dannyhw/expo-storybook-starter/tree/main

### Steps to reproduce

1. `npm install`
2. `npm run storybook:web`

### Additional modifications after following the guides

1. Changed .ondevice/stories/Button/Button.tsx to include some import from expo-router (`this is what causes the error`):

```tsx
import { Link } from "expo-router";
...
<Link style={styles.container} href={href}>
  <Text style={styles.text}>{text}</Text>
</Link>
```

2. Added `+html.tsx` as `<Root>` decorator in storybook preview (.storybook/preview.tsx) in order to add possible missing expo-router providers

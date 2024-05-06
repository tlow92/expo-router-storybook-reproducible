# Minimal, Reproducible Example

### Initial Error:

<details>
<summary>
ERROR in ./node_modules/expo-router/build/onboard/Tutorial.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
TypeError: /xyz/git/my-app/node_modules/expo-router/build/onboard/Tutorial.js: Expected `fromDir` to be of type `string`, got `undefined`

Click to show full error log

</summary>

```bash
> my-app@1.0.0 storybook:web
> storybook dev -p 6006

@storybook/cli v8.0.9

WARN The following packages are incompatible with Storybook 8.0.9 as they depend on different major versions of Storybook packages:
WARN - @storybook/addon-ondevice-actions@7.6.18
WARN  Repo: https://storybook.js.org/
WARN - @storybook/addon-ondevice-controls@7.6.18
WARN - @storybook/react-native@7.6.18
WARN  Repo: https://storybook.js.org/
WARN
WARN
WARN Please consider updating your packages or contacting the maintainers for compatibility details.
WARN For more on Storybook 8 compatibility, see the linked GitHub issue:
WARN https://github.com/storybookjs/storybook/issues/26031
info => Starting manager..
info => Starting preview..
info Addon-docs: using MDX3
info => Using implicit CSS loaders
Using @react-native/babel-preset
info => Using default Webpack5 setup
<i> [webpack-dev-middleware] wait until bundle finished
10% building 0/2 entries 3/6 dependencies 0/2 modulesinfo Using tsconfig paths for react-docgen
ERROR in ./node_modules/expo-router/build/onboard/Tutorial.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
TypeError: ~/my-app/node_modules/expo-router/build/onboard/Tutorial.js: Expected `fromDir` to be of type `string`, got `undefined`
    at resolveFrom (~/my-app/node_modules/resolve-from/index.js:8:9)
    at module.exports (~/my-app/node_modules/resolve-from/index.js:46:47)
    at getExpoRouterAppRoot (~/my-app/node_modules/babel-preset-expo/build/expo-router-plugin.js:14:52)
    at PluginPass.MemberExpression (~/my-app/node_modules/babel-preset-expo/build/expo-router-plugin.js:72:66)
    at newFn (~/my-app/node_modules/@babel/traverse/lib/visitors.js:160:14)
    at NodePath._call (~/my-app/node_modules/@babel/traverse/lib/path/context.js:46:20)
    at NodePath.call (~/my-app/node_modules/@babel/traverse/lib/path/context.js:36:17)
    at NodePath.visit (~/my-app/node_modules/@babel/traverse/lib/path/context.js:82:31)
    at TraversalContext.visitQueue (~/my-app/node_modules/@babel/traverse/lib/context.js:89:16)
    at TraversalContext.visitSingle (~/my-app/node_modules/@babel/traverse/lib/context.js:65:19)
    at TraversalContext.visit (~/my-app/node_modules/@babel/traverse/lib/context.js:112:19)
    at traverseNode (~/my-app/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
    at NodePath.visit (~/my-app/node_modules/@babel/traverse/lib/path/context.js:88:52)
    at TraversalContext.visitQueue (~/my-app/node_modules/@babel/traverse/lib/context.js:89:16)
    at TraversalContext.visitSingle (~/my-app/node_modules/@babel/traverse/lib/context.js:65:19)
    at TraversalContext.visit (~/my-app/node_modules/@babel/traverse/lib/context.js:112:19)
    at traverseNode (~/my-app/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
    at NodePath.visit (~/my-app/node_modules/@babel/traverse/lib/path/context.js:88:52)
    at TraversalContext.visitQueue (~/my-app/node_modules/@babel/traverse/lib/context.js:89:16)
    at TraversalContext.visitMultiple (~/my-app/node_modules/@babel/traverse/lib/context.js:61:17)
    at TraversalContext.visit (~/my-app/node_modules/@babel/traverse/lib/context.js:110:19)
    at traverseNode (~/my-app/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
    at NodePath.visit (~/my-app/node_modules/@babel/traverse/lib/path/context.js:88:52)
    at TraversalContext.visitQueue (~/my-app/node_modules/@babel/traverse/lib/context.js:89:16)
    at TraversalContext.visitMultiple (~/my-app/node_modules/@babel/traverse/lib/context.js:61:17)
    at TraversalContext.visit (~/my-app/node_modules/@babel/traverse/lib/context.js:110:19)
    at traverseNode (~/my-app/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
    at NodePath.visit (~/my-app/node_modules/@babel/traverse/lib/path/context.js:88:52)
    at TraversalContext.visitQueue (~/my-app/node_modules/@babel/traverse/lib/context.js:89:16)
    at TraversalContext.visitSingle (~/my-app/node_modules/@babel/traverse/lib/context.js:65:19)
    at TraversalContext.visit (~/my-app/node_modules/@babel/traverse/lib/context.js:112:19)
    at traverseNode (~/my-app/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
    at traverse (~/my-app/node_modules/@babel/traverse/lib/index.js:52:34)
    at transformFile (~/my-app/node_modules/@babel/core/lib/transformation/index.js:82:31)
    at transformFile.next (<anonymous>)
    at run (~/my-app/node_modules/@babel/core/lib/transformation/index.js:24:12)
    at run.next (<anonymous>)
    at transform (~/my-app/node_modules/@babel/core/lib/transform.js:22:33)
    at transform.next (<anonymous>)
    at step (~/my-app/node_modules/gensync/index.js:261:32)
    at ~/my-app/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (~/my-app/node_modules/gensync/index.js:223:11)
 @ ./node_modules/expo-router/build/ExpoRoot.js 1:3698-3736
 @ ./node_modules/expo-router/build/exports.js 1:2549-2570
 @ ./node_modules/expo-router/build/index.js 1:935-955
 @ ./.ondevice/stories/Button/Button.tsx 1:182-204
 @ ./.ondevice/ lazy ^\.\/.*$ namespace object ./stories/Button/Button.tsx ./stories/Button/Button
 @ ./storybook-stories.js 1:575-611
 @ ./storybook-config-entry.js 1:158-191 1:1944-2076

preview compiled with 1 error
WARN export 'EmptyTabContent' (imported as 'EmptyTabContent') was not found in '@storybook/components' (possible exports: A, ActionBar, AddonPanel, Badge, Bar, Blockquote, Button, ClipboardCode, Code, DL, Div, DocumentWrapper, ErrorFormatter, FlexBar, Form, H1, H2, H3, H4, H5, H6, HR, IconButton, IconButtonSkeleton, Icons, Img, LI, Link, ListItem, Loader, OL, P, Placeholder, Pre, ResetWrapper, ScrollArea, Separator, Spaced, Span, StorybookIcon, StorybookLogo, Symbols, SyntaxHighlighter, TT, TabBar, TabButton, TabWrapper, Table, Tabs, TabsState, TooltipLinkList, TooltipMessage, TooltipNote, UL, WithTooltip, WithTooltipPure, Zoom, codeCommon, components, createCopyToClipboardFunction, getStoryHref, icons, interleaveSeparators, nameSpaceClassNames, resetComponents, withReset)
=> Failed to build the preview
99% end closing watch compilationWARN Force closed preview build
SB_BUILDER-WEBPACK5_0003 (WebpackCompilationError): There were problems when compiling your code with Webpack.
Run Storybook with --debug-webpack for more information.
    at starter (./node_modules/@storybook/builder-webpack5/dist/index.js:1:8088)
    at starter.next (<anonymous>)
    at Module.start (./node_modules/@storybook/builder-webpack5/dist/index.js:1:10083)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

WARN Broken build, fix the error above.
WARN You may need to refresh the browser.
```

</details>

### Original goal

Usage of storybook react-native and web (with the original storybook web overlay) with Expo 50 + expo-router

This repo is a combination of two guides:

- https://dev.to/hasan_py/setup-your-universal-app-with-react-native-expo-router-tamagui-and-storybook-28m6
- https://github.com/dannyhw/expo-storybook-starter/tree/main

### Steps to reproduce

1. `npm install`
2. `npm run storybook:web`

### Additional modifications after following the guides

1. Changed [.ondevice/stories/Button/Button.tsx](.ondevice/stories/Button/Button.tsx) to include some import from expo-router (`this is what causes the error`):

```tsx
import { Link } from "expo-router";
...
<Link style={styles.container} href={href}>
  <Text style={styles.text}>{text}</Text>
</Link>
```

2. Added [+html.tsx](app/+html.tsx) as `<Root>` decorator in storybook preview (.storybook/preview.tsx) in order to add possible missing expo-router providers


### Fix
Adding `babel-preset-expo` list of modules to transpile

```
{
  name: "@storybook/addon-react-native-web",
  options: {
    modulesToTranspile: ["babel-preset-expo"],
  },
}
```

# glob-rename
> Rename based on globby.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/glob-rename
```

## usage
```js
import mv from '@feizheng/glob-rename';

mv.sync(['**/*.js'], 'dist', (path)=>{
  path.ext = path.ext.replace('js', 'jsx');
})
```

## license
Code released under [the MIT license](./LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/glob-rename
[version-url]: https://npmjs.org/package/@feizheng/glob-rename

[license-image]: https://img.shields.io/npm/l/@feizheng/glob-rename
[license-url]: https://github.com/afeiship/glob-rename/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/glob-rename
[size-url]: https://github.com/afeiship/glob-rename/blob/master/dist/glob-rename.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/glob-rename
[download-url]: https://www.npmjs.com/package/@feizheng/glob-rename

## Require npm 4
npm 4 has a bunch of interesting improvements over the earlier versions of npm. If you want to strictly require that your package is only installed with npm-4 present, add this package to its dependencies - installation will fail if npm 4 is not present.

```
npm i --save-dev require-npm-4
```

If the user isn't running at least npm 4:
```
npm install

> require-npm-4@1.0.0 preinstall /Users/felixr/Code/my-package
> node check.js

This package requires at least npm 4!
You can install a newer npm by running
npm install --global npm
```

## License
MIT

# NgxNullish

[![npm version](https://badge.fury.io/js/ngx-nullish.svg)](https://badge.fury.io/js/ngx-nullish)
[![downloads count](https://img.shields.io/npm/dt/ngx-nullish.svg)](https://www.npmjs.com/package/ngx-nullish)
[![github-ci](https://github.com/piecioshka/ngx-nullish/workflows/Testing/badge.svg?branch=master)](https://github.com/piecioshka/ngx-nullish/actions/)

⚒ Angular Structural Directive which replace `*ngIf` by **Nullish Coalescing** operator.

## Motivation

We don't like "Falsy Values".

When in your stream (RxJS) are numbers (include 0),
*ngIf` will coerce `0` to `false`, means UI will not update.

## Features

* :white_check_mark: Returns **falsy** only for `null` and `undefined`
  * `*ngIf` returns **falsy** for: `null`, `undefined`, `0`, `-0`, `false`, `NaN`, `''`

## Installation

```bash
npm install -g ngx-nullish
```

## Usage

1. Import deps

    ```javascript
    import { NgxNullishModule } from 'ngx-nullish';

    @NgModule({
    imports: [
        ...
        NgxNullishModule
    ],
    ...
    })
    export class AppModule { }
    ```

2. Update template

    ```html
    <p *ngIf="numbers$ | async as num">
        {{ num }}
    </p>
    ```

    replace to:

    ```html
    <p *ngxNullish="numbers$ | async as num">
        {{ num }}
    </p>
    ```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](https://github.com/piecioshka/ngx-nullish/issues/).

## Show your support

Give a ⭐️ if this project helped you!

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020

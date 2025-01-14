# ngx-nullish

[![node version](https://img.shields.io/node/v/ngx-nullish.svg)](https://www.npmjs.com/package/ngx-nullish)
[![npm version](https://badge.fury.io/js/ngx-nullish.svg)](https://badge.fury.io/js/ngx-nullish)
[![downloads count](https://img.shields.io/npm/dt/ngx-nullish.svg)](https://www.npmjs.com/package/ngx-nullish)
[![size](https://packagephobia.com/badge?p=ngx-nullish)](https://packagephobia.com/result?p=ngx-nullish)
[![license](https://img.shields.io/npm/l/ngx-nullish.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/ngx-nullish/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/ngx-nullish/actions/workflows/testing.yml)

🔨 Angular Structural Directive which replace `*ngIf` by **Nullish Coalescing** operator.

> Give a ⭐️ if this project helped you!

## Motivation

Nobody likes "Falsy Values".

When in your stream (RxJS) are numbers (include 0),
`*ngIf` will coerce `0` to `false`, means UI will not update.

## Preview 🎉

<https://piecioshka.github.io/ngx-nullish-demo/>

## Features

- ✅ Returns **falsy** _only_ for: `null`, `undefined`
  - `*ngIf` returns **falsy** for: `null`, `undefined`, `0`, `-0`, `false`, `NaN`, `''`

## Usage

Installation:

```bash
npm install ngx-nullish
```

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

## Deployment

Please run a script:

```bash
./scripts/deploy.sh
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2020

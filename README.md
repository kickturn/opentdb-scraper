# opentdb-scraper

Scrapes verified questions from [OpenTDB](https://opentdb.com/) and saves them in a local JSON file titled `opentdb.json`.

## Usage

```bash
npm start -- <encodingFormat> [--beautify]
```

or

```bash
node src/index.js <encodingFormat> [--beautify]
```

## Options

### EncodingFormat

There are four encoding options:

* `urlLegacy` — Legacy URL Encoding
* `url3986` — URL Encoding (RFC 3986)
* `base64` — Base64 Encoding

The final option, HTML Codes, will be used if none of the above options are specified.

Examples from OpenTDB:

**Non-Encoded:**

> Don't forget that π = 3.14 & doesn't equal 3.

**HTML Code:**

> Don&‌#039;t forget that &‌pi; = 3.14 &‌amp; doesn&‌#039;t equal 3.

**Legacy URL Encoding:**

> Don%27t+forget+that+%CF%80+%3D+3.14+%26+doesn%27t+equal+3.

**URL Encoding (RFC 3986):**

> Don%27t%20forget%20that%20%CF%80%20%3D%203.14%20%26%20doesn%27t%20equal%203.

**Base64 Encoding:**

> RG9uJ3QgZm9yZ2V0IHRoYXQgz4AgPSAzLjE0ICYgZG9lc24ndCBlcXVhbCAzLg==

### `--beautify`

Beautifies the JSON file with whitespace. If not specified, the JSON will be compressed without whitespace.

## `opentdb_questions.json`

The `opentdb_questions.json` file contains all verified questions scraped by this bot. The other JSON file, `opentdb_questions_beautify.json`, contains the same data but in a beautified format.

Both files use the default HTML Code encoding. They have been updated since 5/22/2023 and contain 4,098 questions.

## Examples

```bash
npm start -- urlLegacy --beautify
```

Encoded with `urlLegacy` and beautified.

```bash
node src/index.js --beautify
```

Encoded with HTML Codes and beautified.

```bash
npm start -- base64
```

Encoded with Base64 and not beautified.

## License

All data provided by OpenTDB is available under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

The code used to scrape these questions is licensed under the [ISC License](https://choosealicense.com/licenses/isc/).

Both licenses are available in the [LICENSE file](https://github.com/kickturn/opentdb-scraper/blob/master/LICENSE).

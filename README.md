# opentdb-scraper

Scrapes [OpenTDB](https://opentdb.com/)'s verified questions in a local JSON file titled "opentdb.json."

## Usage
`npm start -- <encodingFormat> [--beautify]`

or

`node src/index.js <encodingFormat> [--beautify]`

## Options:
### EncodingFormat:
There's are four encoding options

- ``urlLegacy`` Leagcy URL Encoding
- ``url3986`` URL Encoding (RFC 3986)
- ``base64`` Base64 Encoding

The last one, HTML Codes, will only be used if none of those options are specified

Examples from OpenTDB:

(Non-Encoded): Don't forget that π = 3.14 & doesn't equal 3.

HTML Code:
> Don&‌#039;t forget that &‌pi; = 3.14 &‌amp; doesn&‌#039;t equal 3.

Legacy URL Encoding:
> Don%27t+forget+that+%CF%80+%3D+3.14+%26+doesn%27t+equal+3.

URL Encoding ([RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)):
> Don%27t%20forget%20that%20%CF%80%20%3D%203.14%20%26%20doesn%27t%20equal%203.

Base64 Encoding:
> RG9uJ3QgZm9yZ2V0IHRoYXQgz4AgPSAzLjE0ICYgZG9lc24ndCBlcXVhbCAzLg==

### ``--beautify``
Beautifies the JSON with whitespace, if not specified the JSON will be compressed with no whitespace. 

## opentdb_questions.json

The `opentdb_questions.json` file contains all the verified questions scraped from this bot. The other json file, `opentdb_questions_beautify.json`, is the same except beautified. These are encoded with the default HTML Codes. It has been updated since 5/22/2023 (4,098 questions)

## Examples

``npm start -- urlLegacy --beautify`` (encoded with urlLegacy, beautified)

``node src/index.js --beautify`` (encoded with HTML Codes, beautified)

``npm start -- base64`` (encoded with Base64, not beautified)

## License

All data provided by openTDB is available under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/). This code to scrape these question is however under the [ISC license](https://choosealicense.com/licenses/isc/). Both licenses are available [under the LICENSE file](https://github.com/kickturn/opentdb-scraper/blob/master/LICENSE).


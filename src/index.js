import fetch from 'node-fetch';
import fs from 'fs';
import minimist from 'minimist';
import { exit } from 'process';
const args = minimist(process.argv.splice(2));

async function run() {
    // didnt want to import another module
    
    console.log("\x1b[34m" + "opentdb-scraper" + "\x1b[0m");
    console.log("Beautify Json: " + (args.beautify ? "\x1b[32mYES" : "\x1b[31mNO") + "\x1b[0m")
    const tokenRes = await fetch("https://opentdb.com/api_token.php?command=request");
    const tokenJson = await tokenRes.json();
    if (tokenJson.response_code != 0) {
        console.error("Response Code for creating a token does not equal 0, exiting.");
        exit(-1);
    }
    const token = tokenJson.token;
    let openTdbJson = {
        results: []
    };
    let encodeFormat = "";
    if (args._.length) {
        let possibleEncoding = ["urlLegacy", "url3986", "base64"];
        if (possibleEncoding.includes(args._[0])) {
            encodeFormat = args._[0];
        } else {
            console.error("Invaild encoding format, exiting.");
            console.log("hi")
            exit(-1);
        }
    }
    console.log("URL Encoding: " + (encodeFormat ? encodeFormat : "HTML Codes (default)") + "\x1b[0m")
    // just to see how much question we scraped
    let i = 0;
    let url = `https://opentdb.com/api.php?token=${token}&encode=${encodeFormat}`;
    // on purpose for formatting
    console.log()
    while (true) {
        console.log(`Fetched ${i} questions`)
        let res_t = await fetch(`${url}&amount=50`);
        let json_t = await res_t.json();
        if (json_t.response_code != 0) {
            // we need to get the rest
            // opentdb does not return questions if it cant 
            // fill it up 50, there could be questions missing.
            let globalCount = await fetch("https://opentdb.com/api_count_global.php");
            let globalJson = await globalCount.json();
            let num = globalJson.overall.total_num_of_verified_questions % 50;
            res_t = await fetch(`${url}&amount=${num}`);
            json_t = await res_t.json();
            openTdbJson.results = openTdbJson.results.concat(json_t.results);
            i += json_t.results.length;
            console.log(`Finished, fetched ${i} questions`);
            break;
        }
        i += 50;
        openTdbJson.results = openTdbJson.results.concat(json_t.results);
    }
    if (args.beautify) {
        fs.writeFileSync("opentdb.json", JSON.stringify(openTdbJson, null, "\t"));
    } else {
        fs.writeFileSync("opentdb.json", JSON.stringify(openTdbJson));
    }
}

run(args);

const fs = require('fs');
const { exit } = require('process');
const readline = require('readline');
function puzzle_verifier(line){
    i = 0;
    space_time = 0;

    while (line[i]){
        if ((line[i] >= '0' && line[i] <= '9'))
            space_time = 0;
        if (line[i] == ' ')
            space_time = 1;
        if ((!space_time && line[i] != ' ' && (line[i] < '0' || line[i] > '9')))
            return -1
        i++;
    }

    return 0;
}
async function processLineByLine() {
    const fileStream = fs.createReadStream('input');
    i = 0
    arr = []
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        if ( i != 0 && !(line.startsWith('#')) && line.length > 2){
            string = line.replace(/\s\s+/g, ' ').trim();
            arr = string.split(' ')
            if (!puzzle_verifier(string)){
                console.log(`Line ${i}: is good and has length of ${arr.length}`);
            }
            else{
                console.log("the file is not correct")
                break ;
            }
        }
        i++;
    }
}

processLineByLine();
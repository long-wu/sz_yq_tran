export function csvToJson(filePath) {
    let result = [];
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, false);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                result = csvJSON(xhr.responseText);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.send(null);
    return result
}

export function csvJSON(csv) {
    let lines = csv.split("\n");
    let result = [];
    let headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        let currentline = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}

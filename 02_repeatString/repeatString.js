const repeatString = function(text, count) {
    if (count > 0) {
        let stg_text = ''
        for (let i = 0; i < count; i++) {
            stg_text += text
        }
        return stg_text
    } else if (count < 0) {
        return 'ERROR'
    } else {
        return ""
    }
};

// Do not edit below this line
module.exports = repeatString;

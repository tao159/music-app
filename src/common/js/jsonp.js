import originJSONP from 'jsonp' //引入原始jsonp

export default function jsonp(url, data, option) {
    //url+=(url.indexof('?')<0 ? '?':'&')+param(data)
    if (url.indexOf('?') < 0) {
        url += '?' + param(data)
    } else {
        url += '&' + param(data)
    }
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = '';
    for (var k in data) {
        // let value = data[k] != undefined ? data[k] : ''
        if (data[k] != undefined) {
            var value = data[k]
        } else {
            var value = ''
        }

        url += `&${k}=${encodeURIComponent(value)}`
    }

    if (url) {
        return url.substring(1);
    } else {
        return ''
    }
}
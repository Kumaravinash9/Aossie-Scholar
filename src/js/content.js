scholarName = []
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.intent == 'showRegPanel') {
        const div = document.getElementById('gsc_prf_in')
        const authorName = div.innerHTML
        scholarName = authorName
        sendResponse({
            content: authorName
        })                                                                               //Response sent only when on Scholar website
    } else if (request.intent == 'scrape') {
        var titleArray = []
        var citArray = []
        var yrArray = []
        var coAuthorArray = []
        var titles = document.querySelectorAll('.gsc_a_at')
        var citations = document.querySelectorAll('.gsc_a_ac')
        var coAuthors = document.querySelectorAll('.gsc_a_tr .gsc_a_t')
        var years = document.getElementsByClassName('gsc_a_h gsc_a_hc gs_ibl')
        const img = document.getElementById('gsc_prf_pup-img').getAttribute('src')
        const workPlace = document.getElementsByClassName("gsc_prf_il")[0].innerText
        const website = document.getElementById("gsc_prf_ivh").getElementsByTagName("a")[0].getAttribute("href")
        var country = request.country

        for (var i = 0; i < titles.length; i++) {
            var title = titles[i].textContent
            var cit = citations[i].textContent
            var year = years[i].textContent
            titleArray.push(title)
            citArray.push(cit)
            yrArray.push(year)
        }
        for(var i=0;i<titles.length;i++){
            var authorsPerPublication = coAuthors[i].getElementsByClassName('gs_gray')[0].innerText
            if(authorsPerPublication.indexOf('...')==-1){
                coAuthorArray.push(authorsPerPublication.split(",").length)
            }
            else{
                coAuthorArray.push(coAuthors[i].getElementsByClassName('gsc_a_at')[0].getAttribute('data-href'))
            }
        }
        chrome.runtime.sendMessage({
            intent: 'profileView',
            scholarName: scholarName,
            titles: titleArray,
            citations: citArray,
            years: yrArray,
            image: img,
            workplace: workPlace,
            website: website,
            country: country,
            coAuthors: coAuthorArray
        })
    } else if (request.intent == 'loadBtn') {
        function check() {
            setTimeout(function () {
                var btn = document.getElementById('gsc_bpf_more')
                if (btn.getAttribute('disabled') == null) {
                    btn.click()
                    check()
                } else {
                    sendResponse({
                        status: "true"
                    })
                }
            }, 1000)
        }
        check()
    }
    return true
})
console.log("shehzad")
const bitcoinApi = async () => {
    try {
        let getURL = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5084503198c4f7ba1f22cbc87c817e6');
        let getApi = getURL.json();
        console.log(getApi);
        if (getURL) {
            getApi.then((data) => {
                for (let key in data.articles) {
                    console.log(data.articles[key].content);
                }
            });
        }
    }
    catch {
        console.log(error);
    }
}
bitcoinApi();

const appleApi = async () => {
    try {
        let getURL = await fetch('https://newsapi.org/v2/everything?q=apple&from=2022-09-22&to=2022-09-22&sortBy=popularity&apiKey=4d1ca8151aa34b1dbba1750ce27eab34');
        let getApi = getURL.json();
        console.log(getApi);
        if (getURL) {
            getApi.then((data) => {
                for (let key in data.articles) {
                    console.log(data.articles[key].content);
                }
            }
            );
        }
    }
    catch {
        console.log(error);
    }
}
appleApi();

const techCrunchApi = async () => {
    try {
        let getURL = await fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=4d1ca8151aa34b1dbba1750ce27eab34');
        let getApi = getURL.json();
        console.log(getApi);
        if (getURL) {
            getApi.then((data) => {
                for (let key in data.articles) {
                    console.log(data.articles[key].content);
                }
            }
            );
        }
    }
    catch {
        console.log(error);
    }
}
techCrunchApi();
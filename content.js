const owo = s => s.replace(/[rl]/g,'w').replace(/[RL]/g,'W').replace(/n([aeiou])/gi,'ny$1').replace(/ove/gi,'uv') + ' uwu';

browser.runtime.onMessage.addListener((message) => {
    if (message.action === "modifyText") {
        const selector = `p, li, h1, h2, h3, h4, h5, h6, blockquote, cite, dt, dd, label`;

        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
            el.textContent = owo(el.textContent);
        });
    }
});
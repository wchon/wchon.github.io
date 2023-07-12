//About section toggle

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    console.log("tabs",tabs);
    console.log("tabContents",tabContents);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log("clicked!", tab);
            const target = document.querySelector(tab.dataset.target);
            console.log("target", target);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('about-active');
                
               
                console.log("tabContents.clsList", tabContent.classList);
            })
            //tab.classList.remove('qualification-work-tab-btn-on')
            
        
            target.classList.add('about-active')
            //tab.classList.toggle('qualification-work-tab-btn-on');
            //tab.classList.add('qualification-work-tab-btn-on');
            console.log("targetv clsList", target.classList);

            // Object.keys(tab).forEach(key => {
            //     key.classList.remove('about-active');
            //     console.log("key.classList.remove('about-active');", key.classList);
            // })
            // tab.classList.add('about-active');
        })
    })
    
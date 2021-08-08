const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

let index = 0;

const activeTab = n => {
    for(tab of tabs){
        tab.classList.remove('tab_active')
    }
    tabs[n].classList.add('tab_active');
}

const activeTabContent = n => {
    for(el of tabContents){
        el.classList.remove('tab__content_active')
    }
    tabContents[n].classList.toggle('tab__content_active');
}

const activeItems = ind => {
    activeTab(ind);
    activeTabContent(ind);
}

tabs.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeItems(index);
    })
    });
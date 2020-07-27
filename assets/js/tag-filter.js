function filter(tag) {
    setActiveTag(tag);
    showContainer(tag);
}

function setActiveTag(tag) {
    var items = document.getElementsByClassName('blog-tag-item');
    for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('class', 'blog-tag-item');
    }
    var item = document.getElementById(tag + '-item');
    if (item) {
        item.setAttribute('class', 'blog-tag-item active');
    }
}

function showContainer(tag) {
    var lists = document.getElementsByClassName('blog-list-container');
    for (var i = 0; i < lists.length; i++) {
        lists[i].setAttribute('class', 'blog-list-container hidden');
    }
    var list = document.getElementById(tag + '-container');
    if (list) {
        list.setAttribute('class', 'blog-list-container');
    }
}
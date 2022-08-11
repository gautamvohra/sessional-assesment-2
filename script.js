var i = 0
var page = 1;
var pageold = 1;

function getBlogs() {

    $.get('https://jsonplaceholder.typicode.com/posts', function(data) {
        while (i < page * 10) {

            if (page >= 11) {
                window.alert("No more pages left");
                page--;
                console.log(page);
                break;
            }
            if (pageold != page) {
                pageold = page;
                $("#blogs").empty();
            }
            title = data[i].title;
            content = data[i].body;

            $("#blogs").append(`<div id="blog">
            <div id="blogtit">
        ${title}
            </div>
            <div id="blogbody">
        ${content}                    
            </div>
            <div>&nbsp</div>
       </div>`)
            i++;

        }
        page++;
    });
}

function pagenext() {
    page++;
    i += 10;
    getBlogs();
}

function pageprev() {
    page--;
    i -= 10;
    getBlogs();
}

function page1() {
    page = 1;
    i = 1;
    getBlogs();
}

function page2() {
    page = 2;
    i = 10;
    getBlogs();
}

function page3() {
    page = 3;
    i = 20;
    getBlogs();
}

function page4() {
    page = 4;
    i = 30;
    getBlogs();
}

function page5() {
    page = 5;
    i = 40;
    getBlogs();
}

function page6() {
    page = 6;
    i = 50;
    getBlogs();
}

function page7() {
    page = 7;
    i = 60;
    getBlogs();
}

function page8() {
    page = 8;
    i = 70;
    getBlogs();
}

function page9() {
    page = 9;
    i = 80;
    getBlogs();
}

function page10() {
    page = 10;
    i = 90;
    getBlogs();
}
document.getElementById('show-donation-section')
    .addEventListener('click', function () {
        changeButtonColor('show-donation-section');
        showSectionById('donation-section');
    });


document.getElementById('show-history-section')
    .addEventListener('click', function () {
        changeButtonColor('show-history-section');
        showSectionById('history-section');
    });


document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'blog.html';
})

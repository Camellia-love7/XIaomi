window.addEventListener('load', function() {
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var inputTime = +new Date('2025-4-5 14:00:00');
    function countDown() {
        var now = +new Date();
        var times = (inputTime - now) / 1000;
        var h = parseInt(times / 3600 % 24);
        h = h > 10 ? h : '0' + h;
        var m = parseInt(times / 60 % 60);
        m = m > 10 ? m : '0' + m;
        var s = parseInt(times % 60);
        s = s > 10 ? s : '0' + s;
        hour.innerHTML = h;
        minute.innerHTML = m;
        second.innerHTML = s;
    }
    countDown();
    setInterval(countDown, 1000);
})
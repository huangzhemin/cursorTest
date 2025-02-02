document.addEventListener('DOMContentLoaded', function() {
    // 滚动动画
    const timelineItems = document.querySelectorAll('.timeline-item');
    const honorCards = document.querySelectorAll('.honor-card');

    // 监听滚动事件
    window.addEventListener('scroll', function() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animate');
            }
        });

        honorCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('animate');
            }
        });
    });

    // 检查元素是否在视口中
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // 证书轮播
    const certSlider = document.querySelector('.cert-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    certSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - certSlider.offsetLeft;
        scrollLeft = certSlider.scrollLeft;
    });

    certSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    certSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    certSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - certSlider.offsetLeft;
        const walk = (x - startX) * 2;
        certSlider.scrollLeft = scrollLeft - walk;
    });
}); 
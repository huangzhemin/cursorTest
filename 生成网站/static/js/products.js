document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // 过滤器点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            // 过滤产品卡片
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}); 
document.addEventListener('DOMContentLoaded', () => {
    // 显示加载动画
    const loader = document.querySelector('.loader');
    const progress = document.querySelector('.progress');
    
    // 模拟加载进度
    let progressValue = 0;
    const progressInterval = setInterval(() => {
        progressValue += Math.random() * 10;
        progress.style.width = `${progressValue}%`;
        
        if (progressValue >= 100) {
            clearInterval(progressInterval);
        }
    }, 100);
    
    // 页面加载完成后隐藏加载动画
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            
            // 加载完成后显示标题图片
            setTimeout(() => {
                const titleImage = document.querySelector('.title-image');
                if (titleImage) {
                    titleImage.style.opacity = 1;
                    titleImage.style.transform = 'translateY(0)';
                }
            }, 100);
        }, 1000);
    });
    
    // 滚动时导航栏效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // 添加滚动动画
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // 添加元素入场动画
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.gameplay-section, .join-us-section, .server-info, .info-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 设置初始状态
    document.querySelectorAll('.gameplay-section, .join-us-section, .server-info, .info-item').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // 创建粒子效果
    // const createParticles = () => {
    //     const particlesContainer = document.getElementById('particles');
    //     if (!particlesContainer) return;
        
    //     const particleCount = 50;
        
    //     for (let i = 0; i < particleCount; i++) {
    //         const particle = document.createElement('div');
    //         particle.classList.add('particle');
            
    //         // 随机位置
    //         const posX = Math.random() * 100;
    //         const posY = Math.random() * 100;
            
    //         // 随机大小
    //         const size = Math.random() * 4 + 1;
            
    //         // 随机动画时长
    //         const duration = Math.random() * 10 + 5;
    //         const delay = Math.random() * 5;
            
    //         particle.style.left = `${posX}%`;
    //         particle.style.top = `${posY}%`;
    //         particle.style.width = `${size}px`;
    //         particle.style.height = `${size}px`;
    //         particle.style.animationDuration = `${duration}s`;
    //         particle.style.animationDelay = `${delay}s`;
    //         particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            
    //         particlesContainer.appendChild(particle);
    //     }
    // };
    
    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    // 初始加载时也触发一次
    animateOnScroll();
    createParticles();
    
    // 关闭移动端菜单当点击菜单项时
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
});
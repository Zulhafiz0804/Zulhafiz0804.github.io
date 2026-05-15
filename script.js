// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Show success message
    alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset form
    this.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.about, .expertise, .portfolio, .journey, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

const designGalleries = {
    'invoicing-tool': {
        title: 'Invoice Pro',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        github: 'https://github.com/Zulhafiz0804/invoicing-tool',
        images: [
            { src: 'images/designs/invoicing_Sign_Up.png', label: 'Sign up' },
            { src: 'images/designs/invoicing_Sign_In.png', label: 'Sign in' },
            { src: 'images/designs/invoicing_Dashboard.png', label: 'Dashboard' },
            { src: 'images/designs/invoicing_New_Invoice.png', label: 'New invoice' },
            { src: 'images/designs/invoicing_Invoice_Details.png', label: 'Invoice details' },
            { src: 'images/designs/invoicing_Add_Client.png', label: 'Add client' },
            { src: 'images/designs/invoicing_Client_Details.png', label: 'Client details' },
        ]
    },
    'expense-tracker': {
        title: 'Expense Tracker',
        tags: ['Python', 'Streamlit', 'Pandas'],
        github: 'https://github.com/Zulhafiz0804/expense-tracker',
        images: [
            { src: 'images/designs/Expense_Tracker1.png', label: 'Screen 1' },
            { src: 'images/designs/Expense_Tracker2.png', label: 'Screen 2' },
            { src: 'images/designs/Expense_Tracker3.png', label: 'Screen 3' },
            { src: 'images/designs/Expense_Tracker4.png', label: 'Screen 4' },
            { src: 'images/designs/Expense_Tracker5.png', label: 'Screen 5' },
            { src: 'images/designs/Expense_Tracker6.png', label: 'Screen 6' },
        ]
    },
    'todo-app': {
        title: 'Todo List App',
        tags: ['React', 'Java Spring Boot', 'PostgreSQL'],
        github: 'https://github.com/Zulhafiz0804/todo-app',
        images: [
            { src: 'images/designs/Todo_1.png', label: 'Screen 1' },
            { src: 'images/designs/Todo_2.png', label: 'Screen 2' },
            { src: 'images/designs/Todo_3.png', label: 'Screen 3' },
            { src: 'images/designs/Todo_4.png', label: 'Screen 4' },
            { src: 'images/designs/Todo_5.png', label: 'Screen 5' },
        ]
    },
    'smartstocker': {
        title: 'SmartStocker',
        tags: ['Java', 'Firebase', 'Android'],
        github: 'https://github.com/Zulhafiz0804/Retail-Inventory',
        images: [
            { src: 'images/designs/Retail_1.png', label: 'Overview' },
            { src: 'images/designs/Retail_Manager1.png', label: 'Manager — screen 1' },
            { src: 'images/designs/Retail_Manager2.png', label: 'Manager — screen 2' },
            { src: 'images/designs/Retail_Manager3.png', label: 'Manager — screen 3' },
            { src: 'images/designs/Retail_Manager4.png', label: 'Manager — screen 4' },
            { src: 'images/designs/Retail_Manager5.png', label: 'Manager — screen 5' },
            { src: 'images/designs/Retail_Manager6.png', label: 'Manager — screen 6' },
            { src: 'images/designs/Retail_Manager7.png', label: 'Manager — screen 7' },
            { src: 'images/designs/Retail_Manager8.png', label: 'Manager — screen 8' },
            { src: 'images/designs/Retail_Staff1.png', label: 'Staff — screen 1' },
            { src: 'images/designs/Retail_Staff2.png', label: 'Staff — screen 2' },
            { src: 'images/designs/Retail_Staff3.png', label: 'Staff — screen 3' },
            { src: 'images/designs/Retail_Staff4.png', label: 'Staff — screen 4' },
            { src: 'images/designs/Retail_Staff5.png', label: 'Staff — screen 5' },
        ]
    },
    'zakat-calculator': {
        title: 'Zakat Calculator',
        tags: ['Web App', 'Calculator', 'Islamic Finance'],
        github: 'https://github.com/Zulhafiz0804/Zakat-Calculator',
        images: [
            { src: 'images/designs/Zakat1.png', label: 'Screen 1' },
            { src: 'images/designs/Zakat2.png', label: 'Screen 2' },
            { src: 'images/designs/Zakat3.png', label: 'Screen 3' },
            { src: 'images/designs/Zakat4.png', label: 'Screen 4' },
            { src: 'images/designs/Zakat5.png', label: 'Screen 5' },
        ]
    },
};

// Gallery elements
const galOverlay  = document.getElementById('galOverlay');
const galTitle    = document.getElementById('galTitle');
const galCounter  = document.getElementById('galCounter');
const galImg      = document.getElementById('galImg');
const galLabel    = document.getElementById('galLabel');
const galFill     = document.getElementById('galFill');
const galThumbs   = document.getElementById('galThumbs');
const galTags     = document.getElementById('galTags');
const galLink     = document.getElementById('galLink');
const galClose    = document.getElementById('galClose');
const galPrev     = document.getElementById('galPrev');
const galNext     = document.getElementById('galNext');

let galCur = 0;
let galImgs = [];

function updateSlide(n) {
    galCur = (n + galImgs.length) % galImgs.length;

    galImg.classList.add('fade-out');
    setTimeout(() => {
        galImg.src         = galImgs[galCur].src;
        galImg.alt         = galImgs[galCur].label;
        galLabel.textContent  = galImgs[galCur].label;
        galCounter.textContent = (galCur + 1) + ' / ' + galImgs.length;
        galFill.style.width    = ((galCur + 1) / galImgs.length * 100) + '%';
        galThumbs.querySelectorAll('.gal-thumb').forEach((t, i) => {
            t.classList.toggle('on', i === galCur);
        });
        galImg.classList.remove('fade-out');
        galImg.classList.add('fade-in');
        setTimeout(() => galImg.classList.remove('fade-in'), 50);
    }, 200);
}

function openDesignGallery(key) {
    const project = designGalleries[key];
    if (!project) return;

    galImgs = project.images;
    galCur  = 0;

    // Populate header
    galTitle.textContent   = project.title + ' — Design Gallery';
    galCounter.textContent = '1 / ' + galImgs.length;
    galLink.href           = project.github;

    // First image
    galImg.src   = galImgs[0].src;
    galImg.alt   = galImgs[0].label;
    galLabel.textContent = galImgs[0].label;
    galFill.style.width  = (1 / galImgs.length * 100) + '%';

    // Tags
    galTags.innerHTML = project.tags
        .map(t => `<span class="gal-tag">${t}</span>`)
        .join('');

    // Thumbnails
    galThumbs.innerHTML = galImgs
        .map((im, i) => `
            <div class="gal-thumb ${i === 0 ? 'on' : ''}" data-i="${i}">
                <img src="${im.src}" alt="${im.label}">
            </div>
        `).join('');

    galThumbs.querySelectorAll('.gal-thumb').forEach(t => {
        t.addEventListener('click', () => updateSlide(+t.dataset.i));
    });

    // Show nav arrows only if more than 1 image
    galPrev.style.display = galImgs.length > 1 ? 'flex' : 'none';
    galNext.style.display = galImgs.length > 1 ? 'flex' : 'none';

    galOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    galOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

galClose.addEventListener('click', closeGallery);
galOverlay.addEventListener('click', e => { if (e.target === galOverlay) closeGallery(); });
galNext.addEventListener('click', () => updateSlide(galCur + 1));
galPrev.addEventListener('click', () => updateSlide(galCur - 1));

document.addEventListener('keydown', e => {
    if (!galOverlay.classList.contains('active')) return;
    if (e.key === 'Escape')     closeGallery();
    if (e.key === 'ArrowRight') updateSlide(galCur + 1);
    if (e.key === 'ArrowLeft')  updateSlide(galCur - 1);
});
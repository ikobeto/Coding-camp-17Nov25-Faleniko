// Mobile Navigation
var hamburger = document.getElementById('hamburger');
var navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Welcome Name
var userNameSpan = document.getElementById('user-name');

if (userNameSpan) {
    var userName = sessionStorage.getItem('userName');
    
    if (!userName) {
        userName = prompt('Masukkan nama Anda:');
        if (userName && userName.trim() !== '') {
            userName = userName.trim();
            sessionStorage.setItem('userName', userName);
        } else {
            userName = 'Guest';
        }
    }
    
    userNameSpan.textContent = userName;
}

// Form Submit
var contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var nama = document.getElementById('nama').value;
        var tanggal = document.getElementById('tanggal').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var pesan = document.getElementById('pesan').value;
        
        // Validation
        if (!nama.trim()) {
            alert('Nama harus diisi');
            return;
        }
        if (!tanggal) {
            alert('Tanggal lahir harus diisi');
            return;
        }
        if (!pesan.trim()) {
            alert('Pesan harus diisi');
            return;
        }
        
        // Display result
        document.getElementById('current-time').textContent = new Date().toString();
        document.getElementById('result-nama').textContent = nama;
        document.getElementById('result-tanggal').textContent = formatDate(tanggal);
        document.getElementById('result-gender').textContent = gender;
        document.getElementById('result-pesan').textContent = pesan;
        
        document.getElementById('form-result').classList.add('show');
    });
}

function formatDate(dateStr) {
    var d = new Date(dateStr);
    var day = String(d.getDate()).padStart(2, '0');
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var year = d.getFullYear();
    return day + '/' + month + '/' + year;
}
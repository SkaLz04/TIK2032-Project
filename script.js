
const contentTitle = document.querySelector('.content h2');

// Menambahkan efek animasi saat mouse masuk ke judul
contentTitle.addEventListener('mouseenter', function(){
    this.style.color = '#1f71a1'; 
    this.style.transform = 'scale(1.1)';
});

contentTitle.addEventListener('mouseleave', function(){
    this.style.color = '#1f71a1'; 
    this.style.transform = 'scale(1)'; 
});

document.addEventListener("DOMContentLoaded", function() {
    // Periksa apakah halaman yang dimuat adalah "index.html"
    if (window.location.pathname.includes("index.html")) {
        const nameText = document.querySelector('.content h2');
        const staticText = "Hello! I'm ";
        const names = ["Paskal", "Victor", "Punusingon"];
        let currentIndex = 0;

        function changeName() {
            const newName = names[currentIndex];
            const newText = staticText + '<span class="name-animation">' + newName + '</span>';
            nameText.innerHTML = newText;
            currentIndex = (currentIndex + 1) % names.length;
        }

        setInterval(changeName, 2000);
        const contactButton = document.querySelector('a[href^="https://api.whatsapp.com"]');
    
    // Menampilkan konfirmasi sebelum membuka link WhatsApp
    contactButton.addEventListener('click', function(event){
        const confirmation = confirm("Anda akan dialihkan ke WhatsApp. Lanjutkan?");
        if (!confirmation) {
            event.preventDefault(); // Menghentikan pengalihan jika pengguna membatalkan
        }
    });
    }
});
    // Fungsi untuk membuka modal dengan gambar yang diklik
    function openModal(imageSrc) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }

    // Fungsi untuk menutup modal
    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    document.addEventListener("DOMContentLoaded", function() {
        var contact = document.querySelector(".contact");
        // Menerapkan animasi dengan mengubah opacity dan transform
        contact.style.opacity = 1;
        contact.style.transform = "translateY(0)";
    });

  document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to reset animation when element is in viewport
    function resetAnimation() {
        progressBars.forEach(function(bar) {
            if (isInViewport(bar)) {
                const percent = bar.getAttribute('data-percent');
                bar.style.setProperty('--percent', percent);
                bar.style.animationName = 'fillProgress';
                bar.style.animationDuration = '2s';
            }
        });
    }

    // Initial reset animation check
    resetAnimation();

    // Reset animation when scrolling
    window.addEventListener('scroll', function() {
        resetAnimation();
    });
});

/**
 * Dylan Edlyano — Personal Portfolio Script
 * Modern, interactive, robust logic for navigation, cursor, animations,
 * modals, filtering, validation, and feedback notifications.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. Custom Cursor (Enabled only on devices with pointer/mouse)
     ========================================================================== */
  const cursorDot = document.getElementById("cursorDot");
  const cursorOutline = document.getElementById("cursorOutline");
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (isFinePointer && cursorDot && cursorOutline) {
    document.body.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;
    let isCursorVisible = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isCursorVisible) {
        cursorDot.style.opacity = "1";
        cursorOutline.style.opacity = "1";
        isCursorVisible = true;
      }

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth cursor outline following with lerp
    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
      cursorDot.style.opacity = "0";
      cursorOutline.style.opacity = "0";
      isCursorVisible = false;
    });

    document.addEventListener("mouseenter", () => {
      cursorDot.style.opacity = "1";
      cursorOutline.style.opacity = "1";
      isCursorVisible = true;
    });

    // Interactive element hover scale
    const hoverSelector =
      "a, button, input, textarea, select, .bento-card, .tool, .contact-card-item, .filter-btn";
    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest(hoverSelector);
      if (target) {
        cursorOutline.style.width = "54px";
        cursorOutline.style.height = "54px";
        cursorOutline.style.backgroundColor = "rgba(0, 242, 234, 0.12)";
        cursorOutline.style.borderColor = "var(--primary)";
      }
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target.closest(hoverSelector);
      if (target) {
        cursorOutline.style.width = "38px";
        cursorOutline.style.height = "38px";
        cursorOutline.style.backgroundColor = "transparent";
        cursorOutline.style.borderColor = "rgba(0, 242, 234, 0.65)";
      }
    });
  }

  /* ==========================================================================
     2. Typewriter Effect
     ========================================================================== */
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const roles = [
      "Fullstack Developer 💻",
      "UI/UX Craftsperson 🎨",
      "Flutter & Mobile Creator 📱",
      "AI & IoT Explorer ⚡",
      "Creative Technologist 🚀",
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentText = roles[roleIdx];

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typingElement.textContent = currentText.substring(0, charIdx + 1);
        charIdx++;
      }

      let typingSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentText.length) {
        typingSpeed = 2200; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
      }

      setTimeout(typeLoop, typingSpeed);
    }
    typeLoop();
  }

  /* ==========================================================================
     3. Sticky Navbar & ScrollSpy
     ========================================================================== */
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function handleScroll() {
    const scrollPos = window.scrollY;

    // Navbar compact background on scroll
    if (mainNav) {
      if (scrollPos > 60) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    }

    // Back to top visibility
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    // ScrollSpy active link update
    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     4. Mobile Navigation Drawer
     ========================================================================== */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function openDrawer() {
    if (mobileDrawer && drawerBackdrop && hamburgerBtn) {
      mobileDrawer.classList.add("active");
      drawerBackdrop.classList.add("active");
      hamburgerBtn.classList.add("active");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerBackdrop && hamburgerBtn) {
      mobileDrawer.classList.remove("active");
      drawerBackdrop.classList.remove("active");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      if (mobileDrawer && mobileDrawer.classList.contains("active")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      closeModal(projectModal);
      closeModal(cvModal);
    }
  });

  /* ==========================================================================
     5. Animated Stats Counters
     ========================================================================== */
  const counters = document.querySelectorAll(".counter");
  let countersStarted = false;

  function runCounters() {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10) || 0;
      const suffix = counter.getAttribute("data-suffix") || "";
      const duration = 1800; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic formula
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * target);

        counter.innerText = `${currentCount}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = `${target}${suffix}`;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Trigger counters with IntersectionObserver
  const statsSection = document.querySelector(".stats-card");
  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            runCounters();
            countersStarted = true;
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(statsSection);
  }

  /* ==========================================================================
     6. Projects Filter Tabs
     ========================================================================== */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const bentoCards = document.querySelectorAll(".bento-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      bentoCards.forEach((card) => {
        const category = card.getAttribute("data-category") || "";

        if (filterVal === "all" || category.includes(filterVal)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px) scale(0.96)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });

  /* ==========================================================================
     7. Project Details Database & Modal
     ========================================================================== */
  const projectDatabase = {
    "dylan-story": {
      title: "Dylan Story Super App",
      category: "Flagship / Web & Mobile Platform",
      status: "In Active Development",
      description:
        "Dylan Story adalah ekosistem aplikasi all-in-one yang dirancang untuk merevolusi interaksi sosial, manajemen cerita multimedia, dan produktivitas pengguna dalam satu portal terpadu.",
      features: [
        "Real-time social feed dengan latency sub-detik via WebSockets",
        "Sistem multimedia stories dengan kompresi cerdas di sisi klien",
        "Arsitektur database scalable dengan MongoDB & caching Redis",
        "Glassmorphism UI futuristik dengan dark mode bawaan",
        "Sinkronisasi multi-device antara versi Web dan Flutter Mobile",
      ],
      techStack: ["Flutter", "Dart", "Node.js", "Express", "WebSockets", "MongoDB", "Tailwind CSS"],
      demoUrl: "#contact",
      repoUrl: "https://github.com",
    },
    "ecommerce-dashboard": {
      title: "E-Commerce Analytics Hub & SaaS",
      category: "Web App / Business Intelligence",
      status: "Production Ready",
      description:
        "Platform manajemen toko online terpadu yang menyajikan analitik penjualan realtime, estimasi keuntungan, pelacakan inventaris pintar, dan integrasi payment gateway.",
      features: [
        "Visualisasi grafik interaktif pendapatan dan performa SKU",
        "Sistem notifikasi inventaris menipis otomatis",
        "Manajemen multi-cabang dengan role user bertingkat",
        "Laporan keuangan exportable dalam format PDF & Excel",
      ],
      techStack: ["React.js", "Chart.js", "Node.js", "PostgreSQL", "CSS Modules"],
      demoUrl: "https://github.com",
      repoUrl: "https://github.com",
    },
    "face-recognition": {
      title: "AI Face Recognition Attendance System",
      category: "Computer Vision & Deep Learning",
      status: "Completed & Deployed",
      description:
        "Sistem verifikasi identitas dan presensi kehadiran berbasis biometrik wajah langsung melalui kamera web browser tanpa perlu instalasi sensor tambahan.",
      features: [
        "Deteksi landmark wajah 68 titik dengan face-api.js dan TensorFlow",
        "Anti-spoofing detection untuk mencegah pemalsuan foto cetak",
        "Tingkat akurasi identifikasi mencapai >99.4%",
        "Dashboard admin terintegrasi untuk rekap kehadiran otomatis",
      ],
      techStack: ["TensorFlow.js", "face-api.js", "PHP", "MySQL", "JavaScript ES6+"],
      demoUrl: "https://github.com",
      repoUrl: "https://github.com",
    },
    "iot-telemetry": {
      title: "IoT Smart Sensor Telemetry System",
      category: "Hardware & Embedded Systems",
      status: "Prototype Tested",
      description:
        "Solusi pemantauan parameter lingkungan dan kesehatan tubuh secara nirkabel berbasis mikrokontroler ESP32 yang terhubung langsung ke dashboard cloud web.",
      features: [
        "Streaming telemetri sensor suhu, kelembaban, dan detak jantung 60 FPS",
        "Koneksi WebSocket real-time hemat daya",
        "Threshold alarm otomatis via Webhook Telegram",
        "Penyimpanan time-series data untuk visualisasi tren historis",
      ],
      techStack: ["ESP32", "C++ / Arduino", "WebSockets", "Next.js", "Tailwind CSS"],
      demoUrl: "https://github.com",
      repoUrl: "https://github.com",
    },
    "gadget-store": {
      title: "Gadget Hub E-Commerce Web",
      category: "Web Store & Commercial Portal",
      status: "Completed",
      description:
        "Platform katalog dan transaksi ritel gawai digital dengan pengalaman belanja yang mulus, filter spesifikasi mendalam, dan invoice digital otomatis.",
      features: [
        "Pencarian dinamis & multi-filter spesifikasi gawai",
        "Keranjang belanja interaktif dengan kalkulasi ongkir otomatis",
        "Panel administrasi manajemen produk dan pesanan",
        "Desain responsif yang nyaman digunakan di smartphone",
      ],
      techStack: ["PHP", "JavaScript", "MySQL", "Bootstrap", "REST API"],
      demoUrl: "https://github.com",
      repoUrl: "https://github.com",
    },
    "server-monitor": {
      title: "CloudNexus DevOps Server Monitor",
      category: "Cloud & Systems Infrastructure",
      status: "Production Ready",
      description:
        "Dashboard pemantauan performa server dan container yang ringan dengan visualisasi latency, utilisasi CPU/RAM, dan sistem peringatan otomatis.",
      features: [
        "Monitoring resource server real-time tanpa membebani CPU",
        "Status kesehatan container Docker & service uptime",
        "Integrasi notifikasi Discord/Telegram saat utilisasi melebihi 90%",
        "Antarmuka dark cyberpunk yang informatif",
      ],
      techStack: ["Node.js", "Python", "Linux CLI", "WebSockets", "Glass UI"],
      demoUrl: "https://github.com",
      repoUrl: "https://github.com",
    },
  };

  const projectModal = document.getElementById("projectModal");
  const modalProjectContent = document.getElementById("modalProjectContent");
  const closeProjectModalBtn = document.getElementById("closeProjectModalBtn");

  function openProjectModal(projectId) {
    const data = projectDatabase[projectId];
    if (!data || !modalProjectContent) return;

    modalProjectContent.innerHTML = `
      <div class="modal-project-header">
        <span class="category-tag">${data.category}</span>
        <h2>${data.title}</h2>
        <div class="pulse-badge" style="margin-top: 6px;">
          <span class="status-dot"></span>
          <span>Status: ${data.status}</span>
        </div>
      </div>

      <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
        ${data.description}
      </p>

      <h4 class="modal-section-title"><i class="ri-check-double-line"></i> Fitur Utama & Keunggulan</h4>
      <ul class="modal-feature-list">
        ${data.features
          .map(
            (feat) => `<li><i class="ri-checkbox-circle-fill"></i> ${feat}</li>`
          )
          .join("")}
      </ul>

      <h4 class="modal-section-title"><i class="ri-stack-line"></i> Teknologi yang Digunakan</h4>
      <div class="tech-tags" style="margin-bottom: 24px;">
        ${data.techStack.map((tech) => `<span>${tech}</span>`).join("")}
      </div>

      <div class="modal-actions-bar">
        <a href="${data.demoUrl}" class="btn-primary">
          <span>Kunjungi / Hubungi Akses</span>
          <i class="ri-external-link-line"></i>
        </a>
        <a href="${data.repoUrl}" target="_blank" rel="noopener" class="btn-secondary">
          <i class="ri-github-fill"></i>
          <span>Repository</span>
        </a>
      </div>
    `;

    openModal(projectModal);
  }

  document.querySelectorAll("[data-project]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.getAttribute("data-project");
      openProjectModal(pid);
    });
  });

  if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener("click", () => closeModal(projectModal));
  }

  /* ==========================================================================
     8. CV / Resume Modal Logic
     ========================================================================== */
  const cvModal = document.getElementById("cvModal");
  const openCvBtn = document.getElementById("openCvBtn");
  const openCvBtnMobile = document.getElementById("openCvBtnMobile");
  const heroCvBtn = document.getElementById("heroCvBtn");
  const closeCvModalBtn = document.getElementById("closeCvModalBtn");
  const printCvBtn = document.getElementById("printCvBtn");

  function openModal(modalEl) {
    if (modalEl) {
      modalEl.classList.add("active");
      modalEl.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal(modalEl) {
    if (modalEl) {
      modalEl.classList.remove("active");
      modalEl.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (openCvBtn) openCvBtn.addEventListener("click", () => openModal(cvModal));
  if (openCvBtnMobile) openCvBtnMobile.addEventListener("click", () => openModal(cvModal));
  if (heroCvBtn) heroCvBtn.addEventListener("click", () => openModal(cvModal));
  if (closeCvModalBtn) closeCvModalBtn.addEventListener("click", () => closeModal(cvModal));

  // Modal backdrop click handler
  [projectModal, cvModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  if (printCvBtn) {
    printCvBtn.addEventListener("click", () => {
      window.print();
    });
  }

  /* ==========================================================================
     9. Interactive Contact Form with Validation & WhatsApp Integration
     ========================================================================== */
  const contactForm = document.getElementById("contactForm");
  const senderName = document.getElementById("senderName");
  const senderEmail = document.getElementById("senderEmail");
  const projectSubject = document.getElementById("projectSubject");
  const senderMessage = document.getElementById("senderMessage");
  const submitBtn = document.getElementById("submitBtn");
  const sendViaWaBtn = document.getElementById("sendViaWaBtn");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    let isValid = true;

    // Name validation
    if (!senderName.value.trim() || senderName.value.trim().length < 2) {
      nameError.textContent = "Mohon masukkan nama lengkap Anda (min 2 karakter).";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    if (!senderEmail.value.trim() || !validateEmail(senderEmail.value.trim())) {
      emailError.textContent = "Mohon masukkan alamat email yang valid.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Message validation
    if (!senderMessage.value.trim() || senderMessage.value.trim().length < 10) {
      messageError.textContent = "Mohon tuliskan pesan / ide proyek (min 10 karakter).";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    return isValid;
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateForm()) {
        showToast("Mohon periksa kembali isian formulir Anda.", "info");
        return;
      }

      // Simulate form submission with button loading state
      const btnText = submitBtn.querySelector(".btn-text");
      const btnLoader = submitBtn.querySelector(".btn-loader");
      const btnIcon = submitBtn.querySelector("i");

      submitBtn.disabled = true;
      if (btnText) btnText.textContent = "Mengirim Pesan...";
      if (btnLoader) btnLoader.style.display = "block";
      if (btnIcon) btnIcon.style.display = "none";

      setTimeout(() => {
        // Save to localStorage as inquiries log
        const inquiry = {
          name: senderName.value.trim(),
          email: senderEmail.value.trim(),
          subject: projectSubject.value,
          message: senderMessage.value.trim(),
          timestamp: new Date().toISOString(),
        };

        const existing = JSON.parse(localStorage.getItem("dylan_inquiries") || "[]");
        existing.push(inquiry);
        localStorage.setItem("dylan_inquiries", JSON.stringify(existing));

        // Restore button state
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = "Kirim Pesan Sekarang";
        if (btnLoader) btnLoader.style.display = "none";
        if (btnIcon) btnIcon.style.display = "inline-block";

        // Show Toast Feedback
        showToast(
          `Terima kasih ${inquiry.name}! Pesan berhasil dikirim. Dylan akan segera merespons ke ${inquiry.email}.`,
          "success"
        );

        // Reset form
        contactForm.reset();
      }, 1200);
    });
  }

  // Send via WhatsApp direct button
  if (sendViaWaBtn) {
    sendViaWaBtn.addEventListener("click", () => {
      const name = senderName.value.trim() || "Calon Klien";
      const subject = projectSubject ? projectSubject.value : "Diskusi Proyek";
      const msg = senderMessage.value.trim() || "Halo Dylan, saya tertarik berdiskusi mengenai proyek.";

      const text = `Halo Dylan Edlyano,\nSaya: *${name}*\nSubjek: *${subject}*\n\nPesan:\n${msg}`;
      const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }

  // Copy email to clipboard card
  const copyEmailCard = document.getElementById("copyEmailCard");
  if (copyEmailCard) {
    copyEmailCard.addEventListener("click", (e) => {
      e.preventDefault();
      const email = "dylanedlyano@gmail.com";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Email ${email} berhasil disalin ke clipboard!`, "success");
        });
      } else {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  /* ==========================================================================
     10. Toast Notification Helper
     ========================================================================== */
  function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    const iconClass =
      type === "success"
        ? "ri-checkbox-circle-fill"
        : "ri-information-line";

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("hide");
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 350);
    }, 4500);
  }

  /* ==========================================================================
     11. Back to Top Button
     ========================================================================== */
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ==========================================================================
     12. Current Year in Footer
     ========================================================================== */
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     13. GSAP Animations (Graceful Fallback if GSAP is unavailable)
     ========================================================================== */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Slide In
    gsap.from(".glass-nav", {
      y: -80,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    // Hero Section Sequence
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .from(".pulse-badge", { y: 20, opacity: 0, duration: 0.7 })
      .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-btns", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-highlights", { y: 15, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-socials", { y: 15, opacity: 0, duration: 0.6 }, "-=0.3");

    // ScrollTrigger: Bento Cards
    gsap.from(".bento-card", {
      scrollTrigger: {
        trigger: "#projectGrid",
        start: "top 85%",
      },
      y: 45,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
    });

    // ScrollTrigger: Skills Grid
    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });

    // ScrollTrigger: Services Grid
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });

    // ScrollTrigger: Timeline Items
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 85%",
      },
      x: -40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });

    // ScrollTrigger: Contact Section
    gsap.from(".contact-wrapper", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
      scale: 0.96,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }
});

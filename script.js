// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const navbar = document.getElementById("navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".service-card, .case-study, .contact-card, .credential, .about-text, .hero-content",
  )

  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Contact form handling
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Simulate form submission (replace with actual form handling)
    try {
      // Replace this with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success state
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
      submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)"

      // Reset form
      contactForm.reset()

      // Show success message
      showNotification(
        "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
        "success",
      )

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
        submitBtn.style.background = ""
      }, 3000)
    } catch (error) {
      // Error state
      submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error - Try Again'
      submitBtn.style.background = "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"

      showNotification(
        "Sorry, there was an error sending your message. Please try again or contact me directly.",
        "error",
      )

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
        submitBtn.style.background = ""
      }, 3000)
    }
  })
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 400px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        border-left: 4px solid ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#2563eb"};
    `

  notification.querySelector(".notification-content").style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.5rem;
        color: #374151;
    `

  notification.querySelector(".notification-close").style.cssText = `
        background: none;
        border: none;
        color: #6b7280;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: auto;
    `

  // Add to page
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => notification.remove(), 300)
  }, 5000)
}

// Add hover effects to service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", () => {
    if (!card.classList.contains("featured")) {
      card.style.transform = "translateY(0) scale(1)"
    } else {
      card.style.transform = "translateY(0) scale(1.05)"
    }
  })
})

// Parallax effect for hero background orbs
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const orbs = document.querySelectorAll(".gradient-orb")

  orbs.forEach((orb, index) => {
    const speed = 0.5 + index * 0.1
    orb.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads (optional)
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.innerHTML
    // Uncomment the line below to enable typing effect
    // typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 50);
  }
})

// Add click tracking for analytics (optional)
document.querySelectorAll(".btn, .nav-link").forEach((element) => {
  element.addEventListener("click", (e) => {
    // Add your analytics tracking code here
    console.log("Button clicked:", e.target.textContent.trim())
  })
})

// Performance optimization: Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

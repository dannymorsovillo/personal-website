
<template>
   <div>
        <nav>
            <a href="#about"><span>about me</span></a>
            <a href="#languages-and-tools"><span>languages and tools</span></a>
            <a href="#projects"><span>projects</span></a>
            <a href="#contact"><span>contact me</span></a>
        </nav>

        <section class="section-wrapper" id="about">
        <div class="section">
        <div class="header">
        <h1>
            <span ref="typed1" class="typed"></span>
        </h1>
        <div class = "headshot-wrapper">
            <img src="/headshot.png" class="headshot" width="200" height= "200">
             <p style="text-align: center;">
                 <span ref="typed2" class="typed"></span>
             </p>
        </div>
        <div class = "bio">
            <h2>{{second_title}}</h2>
        <ul>
            <li><a href="github" target="_blank" class="links">
                <img src="/github.svg" alt="Click me" width="50" height="50">
                </a>
            </li>
            <li><a href="linkedin" target="_blank" class="links">
                <img src="/linkedin.svg" alt="Click me" width="50" height="50">
                </a>
            </li>
           <li>
                <a href="/resume.pdf" download class="links">
                    <img src="/download.svg" alt="Download Resume" width="50" height="50">
                    <span class="download-text">resume</span>
                </a>
            </li>
        </ul>
        </div>
        </div>
        </div>
        </section>


        <section class="section-wrapper" id="languages-and-tools">
        <div class="section">
        <h2>{{ third_title }}</h2>
        <ul>
            <li><img src="/swift.svg" alt="Swift" width="50" height="50"></li>
            <li><img src="/C++.svg" alt="C++" width="50" height="50"></li>
            <li><img src="/Java.svg" alt="Java" width="50" height="50"></li>
            <li><img src="/Python.svg" alt="Python" width="50" height="50"></li>
            <li><img src="/vue.svg" alt="Vue.js" width="50" height="50"></li>
            <li><img src="/react.svg" alt="React" width="50" height="50"></li>
        </ul>
        </div>
        </section>

        <section class="section-wrapper" id="projects">
        <div class="section">
        <h2>{{fourth_title }}</h2>
        <h3>more info on GitHub</h3>
        <ul>
            <li class="project-wrapper">
                <div class="project">
                <h2>fairwayd iOS App</h2>
                <p> mobile application that helps golfers find new courses, review courses, and receive AI based recommendations.</p>
                <div id="fairwayd-gallery">
                    <img src="/explore.png" alt="explore" width="250" height="500" class="photo1">
                    <img src="/recommend.png" alt="recommend" width="250" height="500" class="photo2">
                    <img src="/howitworks.png" alt="howItWorks" width="250" height="500" class="photo3">
                    <img src="/coursedetail.png" alt="courseDetail" width="250" height="500" class="photo4">
                </div>
            </div>
            </li>
            <li class="project-wrapper">
                <div class="project">
                <h2><a href="https://makemathcounttoday.com/">make math count </a></h2>
                <p>a website for a math workshop sequence that provides educators with a streamlined process to guide their students to success.</p>
                <div id="math-gallery">
                    <img src="/makemathcount.png" alt="makemathcount" class="math1">
                    <img src="/makemathcountabout.png" alt="makemathcount" class="math2">
                    </div>
            </div>
        </li>
        <li class="project-wrapper">
                <div class="project">
                <h2>raytracing engine</h2>
                <p>a raytracing engine built in C++ that simulates the way light interacts with objects to create realistic images. Built with Peter Shirley's Ray Tracing in One Weekend. </p>
                <div id="ray-gallery">
                    <img src="/output.png" alt ="raytracer-output" class="screenshot">
                    </div>
                </div>
            </li>
            </ul>
        </div>
        </section>

    <section class="section-wrapper" id="contact">
        <div class="section">
        <ul>
           <li><a href="mailto:danielmorsovillo31@gmail.com" target="_blank" class="bottom-links">
                <img src="/email.svg" alt="Click me" width="25" height="25">
                </a>
           </li>
           <li>
            <a href="tel:+17082707899" target="_blank" class="bottom-links">
                <img src="/phone.svg" alt="Click me" width="25" height="25">
                </a>
           </li>
        </ul>
        <p style="text-align: center; font-size: smaller;">
            @2026 danny morsovillo. all rights reserved.
        </p>
        </div>
    </section>
</div>
</template>

<script>
import Typed from 'typed.js'
export default{
    data() {
        return {
            // titles and links
            second_title: "socials and resume",
            third_title: "languages and tools",
            fourth_title: "projects",
            github: "https://github.com/dannymorsovillo",
            linkedin: "https://www.linkedin.com/in/danielmorsovillo",
        }
    },

    mounted() {
        const t1 = this.$refs.typed1;
        const t2 = this.$refs.typed2;
        this.typed1 = new Typed(t1, {
            strings: ["hello", "i'm danny", "welcome to", "my portfolio website" ],
            typedSpeed:10,
            backSpeed:10,
            onComplete: () => {

            this.typed2 = new Typed(t2, {
                strings: ["this website is to", "showcase projects", "and get to know me", "just a little", "i'm currently", "a software engineer intern", "at state farm", "on the", "mobile app team" ],
                typedSpeed:10,
                backSpeed:10,
             });
         }
    });


        const wrappers = document.querySelectorAll('.section-wrapper, .project-wrapper');
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const inner = entry.target.querySelector('.section, .project');
                    if (!inner) return;

                    if (entry.isIntersecting) {
                        inner.classList.add('visible');
                    } else {
                        // park the element on whichever edge it left through, so it
                        // animates back in from that direction on the way back
                        inner.classList.remove('visible');
                        inner.classList.toggle('from-above', entry.boundingClientRect.top < 0);
                    }
                });
            },
            { threshold: 0 }
        );
        wrappers.forEach(wrapper => {
            this.observer.observe(wrapper);
        });

        const galleries = document.querySelectorAll('#fairwayd-gallery, #math-gallery');
        galleries.forEach(gallery => {
            gallery.addEventListener('click', (event) => {
                event.stopPropagation();
                const wasActive = gallery.classList.contains('is-active');
                galleries.forEach(g => g.classList.remove('is-active'));
                if (!wasActive) {
                    gallery.classList.add('is-active');
                }
            });
        });
        document.addEventListener('click', () => {
            galleries.forEach(g => g.classList.remove('is-active'));
        });
    },
    beforeUnmount() {
        if (this.typed1) {
            this.typed1.destroy();
        }

        if (this.typed2) {
            this.typed2.destroy();
        }

        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

</script>

<!-- ==========================================================================
     Global styles (unscoped)
     ========================================================================== -->
<style>
    :root {
        --font-mono: ui-monospace, Menlo, monospace;
        --color-text: #fff;
        --color-nav: #333;
        --radius: 10px;

        /* scroll reveal */
        --reveal-distance: 100px;
        --reveal-scale: 1;
        --reveal-duration: 0.7s;

        /* hover lift shared by nav links, socials and contact icons */
        --lift-duration: 0.2s;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: linear-gradient(to bottom, black, grey);
        background-attachment: fixed;
        overscroll-behavior: none;
    }
</style>

<!-- ==========================================================================
     Component styles (scoped)
     ========================================================================== -->
<style scoped>
    /* ----------------------------------------------------------------------
       1. Base typography
       ---------------------------------------------------------------------- */
    h1,
    h2,
    h3 {
        color: var(--color-text);
        font-family: var(--font-mono);
        text-align: center;
    }

    p {
        padding: 0 20px;
        color: var(--color-text);
        font-family: var(--font-mono);
        font-size: 16px;
    }

    a {
        color: var(--color-text);
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        text-align: center;
    }

    li {
        display: inline-block;
        position: relative;
        margin: 0 15px;
        text-align: center;
    }

    /* ----------------------------------------------------------------------
       2. Navigation
       ---------------------------------------------------------------------- */
    nav {
        position: fixed;
        top: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        /* vertical padding lives on the links so their hit area fills the bar */
        padding: 0 15px;
        background-color: var(--color-nav);
        font-family: var(--font-mono);
        font-size: 10px;
    }

    /* The link itself never moves — its box is the hover target, and it fills the
       full height of the bar so the cursor stays inside it. Only the inner span
       animates, which stops the lift from sliding out from under the pointer and
       retriggering hover over and over. */
    nav a {
        display: flex;
        align-items: center;
        padding: 15px 10px;
        color: var(--color-text);
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
        transition: color var(--lift-duration) ease;
    }

    nav a span {
        display: inline-block;
        transition: transform var(--lift-duration) ease-out;
    }

    nav a:hover {
        color: #ddd;
    }

    nav a:hover span {
        transform: scale(1.1) translateY(-4px);
    }

    /* ----------------------------------------------------------------------
       3. Section layout
       ---------------------------------------------------------------------- */
    .section-wrapper {
        max-width: 900px;
        margin: 0 auto;
        padding: 60px 20px;
    }

    .section-wrapper,
    .project-wrapper {
        overflow: hidden;
    }

    /* galleries fan out past their wrapper, so they must not be clipped */
    .project-wrapper:has(#fairwayd-gallery, #math-gallery, #ray-gallery) {
        overflow: visible;
    }

    /* ----------------------------------------------------------------------
       4. Scroll reveal
       Hidden state sits on whichever viewport edge the element left through
       (`.from-above` is set by the IntersectionObserver), so content animates
       back in from the correct direction whether scrolling down or up.
       ---------------------------------------------------------------------- */
    .section,
    .project {
        opacity: 0;
        transform: translateY(var(--reveal-distance)) scale(var(--reveal-scale));
        transition: opacity var(--reveal-duration) ease,
                    transform var(--reveal-duration) ease;
    }

    .section.from-above,
    .project.from-above {
        transform: translateY(calc(-1 * var(--reveal-distance))) scale(var(--reveal-scale));
    }

    .section.visible,
    .project.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    /* ----------------------------------------------------------------------
       5. About — headshot, bio, socials
       ---------------------------------------------------------------------- */
    .header {
        text-align: center;
    }

    .headshot {
        border-radius: 50%;
    }

    .headshot-wrapper {
        margin-bottom: 120px;
    }

    .download-text {
        display: block;
        position: absolute;
        top: 55px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-text);
        font-family: 'Arial', sans-serif;
        font-size: 14px;
        white-space: nowrap;
    }

    /* ----------------------------------------------------------------------
       6. Projects
       ---------------------------------------------------------------------- */
    #projects .section > ul {
        text-align: left;
    }

    #projects .section > ul > li {
        display: block;
        margin: 0 0 250px;
        text-align: center;
    }

    #projects .section > ul > li:last-child {
        margin-bottom: 0;
    }

    /* --- galleries: shared ------------------------------------------------ */
    #fairwayd-gallery,
    #math-gallery,
    #ray-gallery {
        display: block;
        position: relative;
        z-index: 5;
        margin: 24px auto 0;
    }

    #fairwayd-gallery,
    #math-gallery {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    #fairwayd-gallery img,
    #math-gallery img {
        display: block;
        position: absolute;
        top: 50px;
        border-radius: var(--radius);
        transition: all 0.3s ease-in-out;
    }

    /* --- fairwayd --------------------------------------------------------- */
    #fairwayd-gallery {
        width: 250px;
        height: 520px;
    }

    #fairwayd-gallery img {
        width: 250px;
        height: 500px;
    }

    #fairwayd-gallery .photo1 { transform: rotate(-6deg) translate(-5px, 2px); }
    #fairwayd-gallery .photo2 { transform: rotate(-2deg); }
    #fairwayd-gallery .photo3 { transform: rotate(2deg) translate(5px, 2px); }
    #fairwayd-gallery .photo4 { transform: rotate(6deg) translate(10px, 4px); }

    #fairwayd-gallery:hover .photo1,
    #fairwayd-gallery.is-active .photo1 { transform: rotate(-12deg) translate(-150px, 0); }
    #fairwayd-gallery:hover .photo2,
    #fairwayd-gallery.is-active .photo2 { transform: rotate(-4deg) translate(-50px, -10px); }
    #fairwayd-gallery:hover .photo3,
    #fairwayd-gallery.is-active .photo3 { transform: rotate(4deg) translate(50px, -10px); }
    #fairwayd-gallery:hover .photo4,
    #fairwayd-gallery.is-active .photo4 { transform: rotate(12deg) translate(150px, 0); }

    /* --- make math count -------------------------------------------------- */
    #math-gallery {
        width: 500px;
        height: 320px;
    }

    #math-gallery img {
        width: 500px;
        height: 312px;
        border-radius: 8px;
    }

    #math-gallery .math1 { transform: rotate(-4deg) translate(-5px, 2px); }
    #math-gallery .math2 { transform: rotate(3deg) translate(5px, -2px); }

    #math-gallery:hover .math1,
    #math-gallery.is-active .math1 { transform: rotate(-8deg) translate(-180px, 0); }
    #math-gallery:hover .math2,
    #math-gallery.is-active .math2 { transform: rotate(8deg) translate(180px, 0); }

    /* --- raytracer -------------------------------------------------------- */
    #ray-gallery {
        top: 50px;
        width: 500px;
        height: 360px;
    }

    .screenshot {
        width: 100%;
        height: auto;
        border-radius: var(--radius);
    }

    /* ----------------------------------------------------------------------
       7. Hover lift (socials + contact icons)
       ---------------------------------------------------------------------- */
    .bio ul li,
    #contact ul li {
        cursor: pointer;
        transition: transform var(--lift-duration) ease;
    }

    .bio ul li:hover,
    #contact ul li:hover {
        transform: translateY(-10px) scale(1.1);
    }

    /* ----------------------------------------------------------------------
       8. Responsive
       ---------------------------------------------------------------------- */
    @media (max-width: 768px) {
        /* shorter, gentler reveal on small screens */
        .section,
        .project {
            --reveal-distance: 30px;
            --reveal-scale: 0.95;
        }

        #languages-and-tools ul {
            display: flex;
            justify-content: center;
            gap: 15px;
            overflow-x: auto;
        }

        #languages-and-tools li {
            flex-shrink: 0;
        }

        #projects .section > ul > li {
            margin-bottom: 100px;
        }

        #contact ul {
            display: flex;
            justify-content: center;
        }

        #fairwayd-gallery {
            width: 160px;
            height: 340px;
        }

        #fairwayd-gallery img {
            top: 20px;
            width: 160px;
            height: 320px;
        }

        #fairwayd-gallery:hover .photo1,
        #fairwayd-gallery.is-active .photo1 { transform: rotate(-12deg) translate(-65px, 0); }
        #fairwayd-gallery:hover .photo2,
        #fairwayd-gallery.is-active .photo2 { transform: rotate(-4deg) translate(-25px, -8px); }
        #fairwayd-gallery:hover .photo3,
        #fairwayd-gallery.is-active .photo3 { transform: rotate(4deg) translate(25px, -8px); }
        #fairwayd-gallery:hover .photo4,
        #fairwayd-gallery.is-active .photo4 { transform: rotate(12deg) translate(65px, 0); }

        #math-gallery {
            width: 220px;
            height: 140px;
        }

        #math-gallery img {
            top: 20px;
            width: 220px;
            height: 138px;
        }

        #math-gallery:hover .math1,
        #math-gallery.is-active .math1 { transform: rotate(-8deg) translate(-55px, 0); }
        #math-gallery:hover .math2,
        #math-gallery.is-active .math2 { transform: rotate(8deg) translate(55px, 0); }

        #ray-gallery {
            width: 220px;
            height: 140px;
        }
    }
</style>

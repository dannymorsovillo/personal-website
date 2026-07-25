
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
                <div class="carousel portrait">
                    <button
                        class="carousel-arrow prev"
                        type="button"
                        aria-label="previous image"
                        @click="prev('fairwayd')"
                    >&#8249;</button>
                    <div
                        class="carousel-viewport"
                        @pointerdown="onSwipeStart"
                        @pointerup="onSwipeEnd($event, 'fairwayd')"
                        @pointercancel="swipeStartX = null"
                    >
                        <div
                            class="carousel-track"
                            :style="{ transform: `translateX(-${galleries.fairwayd.index * 100}%)` }"
                        >
                            <img
                                v-for="(img, i) in galleries.fairwayd.images"
                                :key="i"
                                :src="img.src"
                                :alt="img.alt"
                                class="carousel-slide"
                            >
                        </div>
                    </div>
                    <button
                        class="carousel-arrow next"
                        type="button"
                        aria-label="next image"
                        @click="next('fairwayd')"
                    >&#8250;</button>
                    <div class="carousel-dots">
                        <button
                            v-for="(_, i) in galleries.fairwayd.images"
                            :key="i"
                            type="button"
                            class="carousel-dot"
                            :class="{ active: galleries.fairwayd.index === i }"
                            :aria-label="`show image ${i + 1}`"
                            @click="select('fairwayd', i)"
                        ></button>
                    </div>
                </div>
            </div>
            </li>
            <li class="project-wrapper">
                <div class="project">
                <h2><a href="https://makemathcounttoday.com/">make math count </a></h2>
                <p>a website for a math workshop sequence that provides educators with a streamlined process to guide their students to success.</p>
                <div class="carousel landscape">
                    <button
                        class="carousel-arrow prev"
                        type="button"
                        aria-label="previous image"
                        @click="prev('math')"
                    >&#8249;</button>
                    <div
                        class="carousel-viewport"
                        @pointerdown="onSwipeStart"
                        @pointerup="onSwipeEnd($event, 'math')"
                        @pointercancel="swipeStartX = null"
                    >
                        <div
                            class="carousel-track"
                            :style="{ transform: `translateX(-${galleries.math.index * 100}%)` }"
                        >
                            <img
                                v-for="(img, i) in galleries.math.images"
                                :key="i"
                                :src="img.src"
                                :alt="img.alt"
                                class="carousel-slide"
                            >
                        </div>
                    </div>
                    <button
                        class="carousel-arrow next"
                        type="button"
                        aria-label="next image"
                        @click="next('math')"
                    >&#8250;</button>
                    <div class="carousel-dots">
                        <button
                            v-for="(_, i) in galleries.math.images"
                            :key="i"
                            type="button"
                            class="carousel-dot"
                            :class="{ active: galleries.math.index === i }"
                            :aria-label="`show image ${i + 1}`"
                            @click="select('math', i)"
                        ></button>
                    </div>
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

            // selectable image carousels — index is the currently shown slide
            galleries: {
                fairwayd: {
                    index: 0,
                    images: [
                        { src: "/explore.png", alt: "explore" },
                        { src: "/recommend.png", alt: "recommend" },
                        { src: "/howitworks.png", alt: "how it works" },
                        { src: "/coursedetail.png", alt: "course detail" },
                    ],
                },
                math: {
                    index: 0,
                    images: [
                        { src: "/makemathcount.png", alt: "make math count home" },
                        { src: "/makemathcountabout.png", alt: "make math count about" },
                    ],
                },
            },

            // where a swipe/drag gesture started (px on the x axis)
            swipeStartX: null,
        }
    },

    methods: {
        // wrap around so the carousel loops in both directions
        select(key, i) {
            this.galleries[key].index = i;
        },
        next(key) {
            const g = this.galleries[key];
            g.index = (g.index + 1) % g.images.length;
        },
        prev(key) {
            const g = this.galleries[key];
            g.index = (g.index - 1 + g.images.length) % g.images.length;
        },

        // swipe / click-drag: record the start, then on release advance or go
        // back if the horizontal travel passed the threshold
        onSwipeStart(event) {
            this.swipeStartX = event.clientX;
            // capture so we still get pointerup even if the mouse is released
            // outside the image after a fast drag
            event.currentTarget.setPointerCapture(event.pointerId);
        },
        onSwipeEnd(event, key) {
            if (this.swipeStartX === null) return;
            const dx = event.clientX - this.swipeStartX;
            this.swipeStartX = null;
            const threshold = 40; // ignore small/accidental drags
            if (dx <= -threshold) this.next(key);
            else if (dx >= threshold) this.prev(key);
        },
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

    /* --- carousels (fairwayd + make math count) --------------------------- */
    /* row layout: [ prev ] [ image ] [ next ], with the dots wrapping to their
       own line below. The arrows are real flex items beside the image, not
       overlaid on top of it. */
    .carousel {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 12px;
        z-index: 5;
        /* bottom padding keeps the dots off the wrapper's clip edge so the
           active (scaled-up) dot isn't shaved along the bottom */
        margin: 24px auto 0;
        padding-bottom: 10px;
        -webkit-tap-highlight-color: transparent;
    }

    /* the viewport is what carries the image width; the carousel itself grows
       to fit the arrows on either side */
    .carousel.portrait  .carousel-viewport { width: 250px; }
    .carousel.landscape .carousel-viewport { width: 500px; }

    /* viewport clips to one slide; the track slides horizontally */
    .carousel-viewport {
        flex: 0 0 auto;
        overflow: hidden;
        border-radius: var(--radius);
        /* allow vertical page scrolling but let us handle horizontal swipes */
        touch-action: pan-y;
        cursor: grab;
    }

    .carousel-viewport:active {
        cursor: grabbing;
    }

    .carousel-track {
        display: flex;
        transition: transform 0.4s ease-in-out;
    }

    .carousel-slide {
        flex: 0 0 100%;
        width: 100%;
        height: auto;
        display: block;
        /* route the gesture to the viewport and kill the native image drag */
        pointer-events: none;
        user-select: none;
    }

    /* prev / next arrows sit beside the image */
    .carousel-arrow {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.5);
        color: var(--color-text);
        font-size: 24px;
        line-height: 1;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .carousel-arrow:hover { background: rgba(0, 0, 0, 0.8); }

    /* dots take the full row width so they wrap under the image + arrows,
       and are clickable to jump straight to any slide */
    .carousel-dots {
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 2px;
    }

    .carousel-dot {
        width: 10px;
        height: 10px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.35);
        cursor: pointer;
        transition: background 0.2s ease, transform 0.2s ease;
    }

    .carousel-dot:hover  { background: rgba(255, 255, 255, 0.6); }
    .carousel-dot.active {
        background: var(--color-text);
        transform: scale(1.2);
    }

    /* --- raytracer -------------------------------------------------------- */
    #ray-gallery {
        position: relative;
        z-index: 5;
        top: 50px;
        width: 500px;
        margin: 24px auto 0;
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

        /* carousels shrink to fit narrow screens */
        .carousel { gap: 8px; }
        .carousel.portrait  .carousel-viewport { width: 140px; }
        .carousel.landscape .carousel-viewport { width: 240px; }

        .carousel-arrow {
            width: 32px;
            height: 32px;
            font-size: 20px;
        }

        #ray-gallery {
            width: 280px;
        }
    }
</style>

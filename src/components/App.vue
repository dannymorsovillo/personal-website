
<template>
   <div>
        <nav>
            <a href="#about">about me</a>
            <a href="#languages-and-tools">languages and tools</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact me</a>
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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const inner = entry.target.querySelector('.section, .project');
                    if (entry.isIntersecting) {
                        inner.classList.add('visible');
                    } else {
                        if (entry.boundingClientRect.top > 0) {
                            inner.classList.remove('visible');
                        }
                    }
                });
            },
            { threshold: 0 }
        );
        wrappers.forEach(wrapper => {
            observer.observe(wrapper);
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
    }
}

</script>

<style>
    html, body {
        background: linear-gradient(to bottom, black, grey);
        background-attachment: fixed;       
        margin: 0;
        padding: 0;
        height: 100%;
        overscroll-behavior: none;
    }



</style>

<style scoped >
    .header{
        text-align:center;
    }

    nav {
        position:fixed;
        top: 0;
        z-index: 100;
        width: 100%;
        box-sizing: border-box;
        background-color: #333;
        padding: 15px;
        font-family: ui-monospace, Menlo, monospace;
        justify-content: center;
        display:flex;
        font-size: 12px;
    }

    nav a {
        display: inline-block;
        color: white;
        text-decoration: none;
        margin: 0 20px;
        transition: transform 0.3s ease;
        cursor: pointer;
        white-space: nowrap;
    }

    nav a:hover {
        color: #ddd;
        transform: scale(1.1) translateY(-5px);
    }


    a {
        color:white;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }   

  
    li{
        display: inline-block;
        position: relative;
        text-align:center;
        margin-right: 15px;
        margin-left: 15px;
    }

    p {
        font-size: 18px;
        padding: 0 20px;
        color: white;
        font-family: ui-monospace, Menlo, monospace;
    }

    h1, h2, h3 {
        color: white;
        font-family: ui-monospace, Menlo, monospace;
        text-align: center;  
    }


    .headshot {
      border-radius: 50%;
    }
    
    .headshot-wrapper {
        margin-bottom: 120px;
    }

    .section-wrapper {
        padding: 60px 20px;
        max-width: 900px;
        margin: 0 auto;
    }

    .section-wrapper, .project-wrapper {
        overflow:hidden;
    }

    .section, .project {
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }


    .section.visible, .project.visible {
        opacity: 1;
        transform: translateY(0);
    }


    #projects .section > ul {
        text-align: left;
    }

    #projects .section > ul > li {
        display: block;
        text-align: center;
        margin: 0;
        margin-bottom: 250px;

    }

    #projects .section > ul > li:last-child {
        margin-bottom: 0; 
    }

    .scroll-row-img {
        border-radius: 10px;
    }

    .screenshot {
        width: 100%;
        height: auto;
        border-radius:10px;
    }

    #math1 {
        width: 100%;
        height: auto;
        border-radius:10px;
    }
    
    #math2 {
        width: 100%;
        height: auto;
        border-radius:10px;
    }

    .download-text {
        display: block;
        color: white;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
        position: absolute;
        top: 55px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }


    #fairwayd-gallery,
    #math-gallery,
    #ray-gallery {
        margin-top: 24px;
    }

    #fairwayd-gallery {
        position: relative;
        z-index: 5;
        width: 250px;
        height: 520px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .project-wrapper:has(#fairwayd-gallery, #math-gallery, #ray-gallery) {
        overflow: visible;
    }

    #fairwayd-gallery img {
        position: absolute;
        top: 50px;
        width: 250px;
        height: 500px;
        display: block;
        border-radius: 10px;
        transition: all .3s ease-in-out;
    }

    #math-gallery {
        position: relative;
        z-index: 5;
        width: 500px;
        height: 320px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    #math-gallery img {
        position: absolute;
        top: 50px;
        width: 500px;
        height: 312px;
        display: block;
        border-radius: 8px;
        transition: all .3s ease-in-out;
    }

    #ray-gallery {
        position: relative;
        z-index: 5;
        top: 50px;
        width: 500px;
        height: 360px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    #fairwayd-gallery .photo1 { transform: rotate(-6deg) translate(-5px, 2px); }
    #fairwayd-gallery .photo2 { transform: rotate(-2deg); }
    #fairwayd-gallery .photo3 { transform: rotate(2deg) translate(5px, 2px); }
    #fairwayd-gallery .photo4 { transform: rotate(6deg) translate(10px, 4px); }

    #fairwayd-gallery:hover .photo1, #fairwayd-gallery.is-active .photo1 { transform: rotate(-12deg) translate(-150px, 0); }
    #fairwayd-gallery:hover .photo2, #fairwayd-gallery.is-active .photo2 { transform: rotate(-4deg) translate(-50px, -10px); }
    #fairwayd-gallery:hover .photo3, #fairwayd-gallery.is-active .photo3 { transform: rotate(4deg) translate(50px, -10px); }
    #fairwayd-gallery:hover .photo4, #fairwayd-gallery.is-active .photo4 { transform: rotate(12deg) translate(150px, 0); }

    #math-gallery .math1 { transform: rotate(-4deg) translate(-5px, 2px); }
    #math-gallery .math2 { transform: rotate(3deg) translate(5px, -2px); }

    #math-gallery:hover .math1, #math-gallery.is-active .math1 { transform: rotate(-8deg) translate(-180px, 0); }
    #math-gallery:hover .math2, #math-gallery.is-active .math2 { transform: rotate(8deg) translate(180px, 0); }


    #contact ul li {
         transition: transform 0.3s ease;
         cursor: pointer;
    }

    #contact ul li:hover {
        transform: scale(1.1);
        transform: translateY(-10px);  
    }

    .bio ul li {
         transition: transform 0.3s ease;
         cursor: pointer;
    }

    .bio ul li:hover {
        transform: scale(1.1);
        transform: translateY(-10px);
    }

    @media (max-width: 768px) {
    


    .headshot-wrapper {
        margin-bottom: 120px;
    }

     #languages-and-tools ul {
        display: flex;
        overflow-x: auto;
        justify-content: center;
        gap: 15px;
    }

    #languages-and-tools li {
        flex-shrink: 0;
    }

    #projects .section > ul > li {
        margin-bottom: 100px;
    }


     

    #contact ul {
        display:flex;
        justify-content: center;
        list-style: none;
        font-family: ui-monospace, Menlo, monospace;
        color: white;
    }

    #contact ul li {
         transition: transform 0.3s ease;
         cursor: pointer;
    }

    #contact ul li:hover {
        transform: scale(1.1);
        transform: translateY(-10px);
    }
 
    .section,
    .project {
        transform: scale(0.95);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .section.visible,
    .project.visible {
        transform: scale(1);
    }

    #fairwayd-gallery {
        width: 160px;
        height: 340px;
    }

    #fairwayd-gallery img {
        width: 160px;
        height: 320px;
        top: 20px;
    }

    #fairwayd-gallery:hover .photo1, #fairwayd-gallery.is-active .photo1 { transform: rotate(-12deg) translate(-65px, 0); }
    #fairwayd-gallery:hover .photo2, #fairwayd-gallery.is-active .photo2 { transform: rotate(-4deg) translate(-25px, -8px); }
    #fairwayd-gallery:hover .photo3, #fairwayd-gallery.is-active .photo3 { transform: rotate(4deg) translate(25px, -8px); }
    #fairwayd-gallery:hover .photo4, #fairwayd-gallery.is-active .photo4 { transform: rotate(12deg) translate(65px, 0); }

    #math-gallery {
        width: 220px;
        height: 140px;
    }

    #math-gallery img {
        width: 220px;
        height: 138px;
        top: 20px;
    }

    #ray-gallery {
        width: 220px;
        height: 140px;
    }

    #math-gallery:hover .math1, #math-gallery.is-active .math1 { transform: rotate(-8deg) translate(-55px, 0); }
    #math-gallery:hover .math2, #math-gallery.is-active .math2 { transform: rotate(8deg) translate(55px, 0); }
}


        
</style>
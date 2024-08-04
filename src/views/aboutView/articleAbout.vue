<template>
    <div class="wrapper">
        <div class="about container draggable" :style="{ top: position.y + 'px', left: position.x + 'px' }"
            @mousedown="startDrag" @mousemove="handleDrag" @mouseup="stopDrag">
            <p>
                Our Approach
                Discovery & Planning: We start by understanding your business objectives and requirements. Our team
                conducts thorough research and planning to ensure that we deliver solutions that align with your vision.
                Design & Development: With a focus on user-centric design, we create intuitive and aesthetically
                pleasing interfaces. Our development process is agile and iterative, ensuring that we adapt to changes
                and deliver a product that meets your needs.
                Testing & Deployment: Quality is at the core of our services. We conduct rigorous testing to ensure that
                our solutions are reliable and perform optimally. Once tested, we handle the deployment, ensuring a
                smooth transition to the live environment.
                Support & Maintenance: Our relationship with clients extends beyond delivery. We offer ongoing support
                and maintenance to ensure that your software continues to perform flawlessly.
                Why Choose Us
                Expertise: Our team comprises highly skilled professionals with extensive experience in software
                development.
                Innovation: We leverage the latest technologies and best practices to deliver innovative solutions.
                Client-Centric: We prioritize our clients' needs and work closely with them to achieve their business
                goals.
                Quality: Our commitment to quality ensures that we deliver solutions that are reliable, efficient, and
                scalable.
                Join Us on Our Journey
                At [Your Company Name], we are more than just a software company; we are your partners in success. Join
                us on our journey to create impactful technology solutions that drive your business forward.
                Contact us today to learn more about how we can help you achieve your business objectives with our
                innovative software solutions.
            </p>
            <!-- <h2>Skills</h2>
            <ul>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React.js, Vue.js</li>
                <li>Node.js</li>
                <li>Responsive Web Design</li>
                <li>UI/UX Design Principles</li>
                <li>C++</li>
                <li>C#</li>
                <li>OOP</li>
                <li>Problem Solver</li>
            </ul> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'articleAbout',
    data() {
        return {
            isDragging: false,
            position: { x: 0, y: 0 },
            offset: { x: 0, y: 0 },
        };
    },
    methods: {
        startDrag(event) {
            this.isDragging = true;
            this.offset = {
                x: event.clientX - this.position.x,
                y: event.clientY - this.position.y,
            };
        },
        handleDrag(event) {
            if (this.isDragging) {
                this.position = {
                    x: event.clientX - this.offset.x,
                    y: event.clientY - this.offset.y,
                };
            }
        },
        stopDrag() {
            this.isDragging = false;
        },
    },
};
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1em;
    box-sizing: border-box;
    position: relative;
}

.about {
    margin-top: 0;
    text-align: center;
    padding: 1em;
    max-width: 600px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
}

.draggable:active {
    cursor: grabbing;
}

p,
h2,
li {
    font-size: 1.2em;
    background: linear-gradient(45deg, #4CAF50, #FFC107);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    animation-name: desani;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    font-family: 'Times New Roman', Times, serif;
}

@keyframes desani {
    0% {
        opacity: 0;
        transform: translateY(0);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

ul {
    list-style: none;
    animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px) {

    p,
    h2,
    li {
        font-size: 1em;
    }
}
</style>
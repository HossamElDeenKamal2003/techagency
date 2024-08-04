<template>
    <div class="services">
        <div class="service-section">
            <h1>Our Services</h1>
            <p>At [Your Company Name], we provide a wide range of software development services designed to meet the
                diverse needs of our clients. Our team of experienced professionals is committed to delivering
                high-quality solutions that drive business success.</p>

            <div class="service-item" v-for="service in services" :key="service.title">
                <h2>{{ service.title }}</h2>
                <p>{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicePage',
    data() {
        return {
            services: [
                {
                    title: 'Custom Software Development',
                    description: 'We specialize in creating custom software solutions tailored to your specific business requirements. From initial concept to final deployment, we work closely with you to develop software that fits your unique needs and helps you achieve your business goals.'
                },
                {
                    title: 'Web Development',
                    description: 'Our web development services are designed to create dynamic, responsive, and user-friendly websites and web applications. Utilizing the latest technologies, including Vue.js, React, Angular, and Node.js, we build scalable and robust solutions that enhance your online presence.'
                },
                {
                    title: 'Mobile App Development',
                    description: 'In today\'s mobile-first world, having a robust mobile app is crucial. Our mobile app development team excels in creating intuitive and engaging apps for both iOS and Android platforms. We focus on delivering seamless user experiences and high-performance apps that meet your business objectives.'
                },
                {
                    title: 'Enterprise Solutions',
                    description: 'We understand the complexities of enterprise environments and offer bespoke software solutions to streamline operations and enhance efficiency. Whether it\'s a CRM, ERP, or any other enterprise application, we provide solutions that integrate seamlessly with your existing systems and processes.'
                },
                {
                    title: 'UI/UX Design',
                    description: 'A great user experience is key to the success of any software application. Our UI/UX design services focus on creating intuitive and visually appealing interfaces that enhance user satisfaction and engagement. We employ best practices in design thinking to ensure that our solutions are not only functional but also delightful to use.'
                },
                {
                    title: 'Cloud Services',
                    description: 'Leverage the power of the cloud with our comprehensive cloud services. We offer cloud migration, deployment, and management services to help you harness the benefits of cloud computing. Our solutions are designed to be scalable, secure, and cost-effective, ensuring that your business operations run smoothly in the cloud.'
                },
                {
                    title: 'E-commerce Development',
                    description: 'Transform your business with our e-commerce development services. We create powerful, user-friendly online stores that drive sales and provide a seamless shopping experience for your customers. Our solutions are designed to be scalable and customizable to meet your specific business needs.'
                },
                {
                    title: 'Maintenance & Support',
                    description: 'Our relationship with clients extends beyond project delivery. We offer ongoing maintenance and support services to ensure that your software continues to perform optimally. From regular updates to troubleshooting and enhancements, we are here to support your business every step of the way.'
                }
            ]
        };
    }
};
</script>

<style scoped>
body {
    background-color: black;
}

.services {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    color: #f9f9f9;
}

.service-section {
    max-width: 800px;
    width: 100%;
    padding: 1em;
    background: #1e1e1e;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
    color: #ffc107;
}

p {
    font-size: 1.1em;
    line-height: 1.6;
    margin: 0.5em 0;
    color: #dcdcdc;
}

.service-item {
    margin-bottom: 1.5em;
}

@media (max-width: 600px) {
    h1 {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.2em;
    }

    p {
        font-size: 1em;
    }

    .services {
        padding: 1em;
    }
}
</style>
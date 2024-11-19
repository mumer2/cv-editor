<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-center mb-6">Resume Templates</h1>

    <div class="space-y-8">
      <ResumeTemplates
        title="Professional Resume"
        name="John Doe"
        email="john.doe@example.com"
        phone="(123) 456-7890"
        summary="A highly motivated software engineer with over 5 years of experience working with web technologies."
        :skills="['JavaScript', 'Vue.js', 'CSS', 'Node.js']"
        :experience="[
          { position: 'Software Engineer', company: 'Tech Co.', duration: '2018 - Present', description: 'Worked on various web applications using Vue.js.' },
          { position: 'Frontend Developer', company: 'Web Solutions', duration: '2015 - 2018', description: 'Developed responsive websites and web applications.' }
        ]"
        :education="[
          { degree: 'B.S. in Computer Science', school: 'University of ABC', year: '2015' }
        ]"
      />

      <ResumeTemplates
        title="Creative Resume"
        name="Jane Smith"
        email="jane.smith@example.com"
        phone="(987) 654-3210"
        summary="A creative and detail-oriented graphic designer with a passion for visual storytelling."
        :skills="['Photoshop', 'Illustrator', 'UI/UX', 'Branding']"
        :experience="[
          { position: 'Graphic Designer', company: 'Design Agency', duration: '2017 - Present', description: 'Designed visual concepts for a wide range of clients.' },
          { position: 'Junior Designer', company: 'Creative Studios', duration: '2015 - 2017', description: 'Assisted in the design and creation of marketing materials.' }
        ]"
        :education="[
          { degree: 'B.A. in Graphic Design', school: 'Art Institute', year: '2015' }
        ]"
      />
    </div>
  </div>
</template>

<script>
import ResumeTemplates from '@/components/ResumeTemplates.vue';

export default {
  components: {
    ResumeTemplates
  },
};
</script>





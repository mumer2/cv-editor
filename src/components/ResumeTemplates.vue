<template>
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold text-center mb-6">{{ title }}</h2>
  
      <div class="space-y-6">
        <div class="flex justify-between">
          <div>
            <h3 class="font-semibold text-lg">{{ name }}</h3>
            <p class="text-gray-600">{{ title }}</p>
          </div>
          <div class="text-right">
            <p class="text-gray-600">{{ email }}</p>
            <p class="text-gray-600">{{ phone }}</p>
          </div>
        </div>
  
        <div>
          <h3 class="font-semibold text-xl">Summary</h3>
          <p class="text-gray-700">{{ summary }}</p>
        </div>
  
        <div>
          <h3 class="font-semibold text-xl">Skills</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li v-for="skill in skills" :key="skill" class="text-gray-700">{{ skill }}</li>
          </ul>
        </div>
  
        <div>
          <h3 class="font-semibold text-xl">Experience</h3>
          <div v-for="(job, index) in experience" :key="index" class="space-y-2">
            <p class="font-semibold">{{ job.position }} at {{ job.company }}</p>
            <p class="text-gray-600">{{ job.duration }}</p>
            <p class="text-gray-700">{{ job.description }}</p>
          </div>
        </div>
  
        <div>
          <h3 class="font-semibold text-xl">Education</h3>
          <div v-for="(edu, index) in education" :key="index" class="space-y-2">
            <p class="font-semibold">{{ edu.degree }} - {{ edu.school }}</p>
            <p class="text-gray-600">{{ edu.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      name: String,
      title: String,
      email: String,
      phone: String,
      summary: String,
      skills: Array,
      experience: Array,
      education: Array,
    },
  };
  </script>
  
  
document.addEventListener("DOMContentLoaded", function() {
  // Dummy job data
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Develop and maintain software applications.",
      responsibilities: [
        "Write clean, scalable code",
        "Collaborate with other team members",
      ],
      requirements: [
        "Bachelor's degree in Computer Science",
        "3+ years of experience",
      ],
      location: "New York, NY",
      image: "img/job1.jpg",
    },
    {
      id: 2,
      title: "Product Manager",
      description: "Oversee the development and delivery of products.",
      responsibilities: [
        "Define product vision and strategy",
        "Lead cross-functional teams",
      ],
      requirements: [
        "Bachelor's degree in Business or related field",
        "5+ years of experience",
      ],
      location: "San Francisco, CA",
      image: "img/job2.jpg",
    },
    {
      id: 3,
      title: "Data Scientist",
      description: "Analyze and interpret complex data to aid decision-making.",
      responsibilities: [
        "Collect and analyze large datasets",
        "Develop predictive models",
      ],
      requirements: [
        "Master's degree in Data Science or related field",
        "2+ years of experience",
      ],
      location: "Boston, MA",
      image: "img/job3.jpg",
    },
  ];

  // Populate job listings
  const jobList = document.getElementById("job-list");
  if (jobList) {
    jobs.forEach(job => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = `<img src="${job.image}" alt="${job.title}"><div><h3>${job.title}</h3><p>${job.description}</p><a href="job-details.html?id=${job.id}" class="btn btn-primary">View Details</a></div>`;
      jobList.appendChild(li);
    });
  }

  // Populate job details
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");
  if (jobId) {
    const job = jobs.find(j => j.id == jobId);
    if (job) {
      document.getElementById("job-title").textContent = job.title;
      document.getElementById("job-description").textContent = job.description;
      document.getElementById("job-image").src = job.image;

      const responsibilities = document.getElementById("job-responsibilities");
      job.responsibilities.forEach(responsibility => {
        const li = document.createElement("li");
        li.textContent = responsibility;
        responsibilities.appendChild(li);
      });

      const requirements = document.getElementById("job-requirements");
      job.requirements.forEach(requirement => {
        const li = document.createElement("li");
        li.textContent = requirement;
        requirements.appendChild(li);
      });

      document.getElementById("job-location").textContent = job.location;
    }
  }

  // Handle form submission
  const form = document.getElementById("application-form");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Application submitted successfully!");
      form.reset();
    });
  }
});

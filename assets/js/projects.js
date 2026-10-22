/*
  Project data — the single place to add, reorder or update projects.
  Order in this array = order on the home page (most relevant first).

  status: "built"  -> finished, source available
          "wip"    -> in progress (shown with a yellow marker)
  Never list a project here until real work exists for it.
*/
window.PROJECTS = [
  {
    id: "job-scheduler",
    title: "Distributed Job Scheduler",
    status: "built",
    statusLabel: "Built and documented",
    image: "assets/img/scheduler-architecture.svg",
    imageAlt: "Architecture diagram: React dashboard, Express API, worker service and PostgreSQL",
    caption: "System architecture, drawn from the repository's own design docs.",
    problem:
      "Background jobs need to run once, on time, and survive crashed workers — without adding a separate message broker to keep in sync.",
    contribution:
      "Multi-tenant scheduler with an API, an independent worker service, a React monitoring dashboard and written design trade-offs.",
    skills: ["TypeScript", "Node.js / Express", "PostgreSQL", "React + Vite", "Docker Compose", "System design"],
    caseStudy: "work/job-scheduler.html",
    repo: "https://github.com/Shyam27-glitch/distributed-job-scheduler"
  },
  {
    id: "churn-prediction",
    title: "Churn Prediction with Retention Actions",
    status: "built",
    statusLabel: "Built — API only, no interface yet",
    image: "assets/img/churn-flow.svg",
    imageAlt: "Diagram: offline training of a random forest, then a Flask API that maps churn probability to a retention action",
    caption: "Training and serving flow, read from app.py and the saved model.",
    problem:
      "A churn score on its own doesn't tell a product team what to do next.",
    contribution:
      "A random-forest model trained on 6,400 music-streaming users, served through a Flask API that turns each churn probability into a recommended retention action.",
    skills: ["Python", "scikit-learn", "Random forest", "Flask", "REST API design"],
    caseStudy: "work/churn-prediction.html",
    repo: "https://github.com/Shyam27-glitch/Churn_project"
  },
  {
    id: "aws-cicd",
    title: "Container CI Pipeline on AWS",
    status: "built",
    statusLabel: "Built",
    image: "assets/img/cicd-pipeline.svg",
    imageAlt: "Pipeline diagram: git push triggers GitHub Actions which builds a Docker image and pushes it to Amazon ECR",
    caption: "Pipeline stages, taken from .github/workflows/deploy.yml.",
    problem:
      "Shipping a service by hand is slow and easy to get wrong.",
    contribution:
      "Every push to main builds a Docker image and publishes it to Amazon ECR, with Kubernetes and Helm definitions for running it.",
    skills: ["GitHub Actions", "Docker", "Amazon ECR", "Kubernetes", "Helm"],
    caseStudy: "work/aws-cicd-pipeline.html",
    repo: "https://github.com/Shyam27-glitch/devops-proj1"
  }

  /* ---- Add new projects here when work has started, e.g. ----
  ,{
    id: "ev-hmi",
    title: "EV Cockpit Interface — UI/UX Case Study",
    status: "wip",
    statusLabel: "In progress",
    image: "assets/img/ev-hmi-cover.png",
    imageAlt: "...",
    caption: "...",
    problem: "...",
    contribution: "...",
    skills: ["Figma", "Interaction design", "Accessibility"],
    caseStudy: "work/ev-hmi.html",
    repo: "https://github.com/Shyam27-glitch/<repo>"
  }
  */
];

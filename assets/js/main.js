(function () {
  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var list = document.getElementById("nav-list");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Close" : "Menu";
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Menu";
      }
    });
  }

  // Year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Project rows from data (home page only)
  var mount = document.getElementById("project-list");
  if (!mount || !window.PROJECTS) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  mount.innerHTML = window.PROJECTS.map(function (p) {
    var links = '<a href="' + esc(p.caseStudy) + '">Read the case study</a>';
    if (p.repo) links += '<a href="' + esc(p.repo) + '" target="_blank" rel="noopener">Source on GitHub</a>';
    if (p.demo) links += '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener">Live prototype</a>';
    return (
      '<article class="project" id="' + esc(p.id) + '">' +
        '<figure class="project-figure">' +
          '<a href="' + esc(p.caseStudy) + '" tabindex="-1" aria-hidden="true">' +
            '<img src="' + esc(p.image) + '" alt="' + esc(p.imageAlt) + '" loading="lazy" width="720" height="400">' +
          "</a>" +
          "<figcaption>" + esc(p.caption) + "</figcaption>" +
        "</figure>" +
        "<div>" +
          '<span class="status' + (p.status === "wip" ? " wip" : "") + '">' + esc(p.statusLabel) + "</span>" +
          '<h3><a href="' + esc(p.caseStudy) + '">' + esc(p.title) + "</a></h3>" +
          "<dl><dt>Problem</dt><dd>" + esc(p.problem) + "</dd>" +
          "<dt>What I built</dt><dd>" + esc(p.contribution) + "</dd></dl>" +
          '<ul class="tags" aria-label="Skills demonstrated">' +
            p.skills.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
          "</ul>" +
          '<div class="project-links">' + links + "</div>" +
        "</div>" +
      "</article>"
    );
  }).join("");
})();

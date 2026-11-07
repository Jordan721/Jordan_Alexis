// Credential titles and files retained from the previous certificate viewer.
const credentials = [
  {
    "id": "credential-1",
    "category": "yearup",
    "title": "Bootcamp Completion - Year Up United",
    "pdf": "./Certifications/Year_Up_United/Year_Up_United_LTCA_Certificate.pdf",
    "label": "Development",
    "provider": "Year Up United",
    "skills": [
      "Java",
      "Object-oriented programming",
      "SQL",
      "Relational databases",
      "Debugging",
      "Software testing"
    ],
    "info": "openYearUpInfoModal",
    "project": "#projects",
    "skillsSource": "https://www.yearup.org/sites/default/files/2025-02/Catalog%20of%20Specialty%20Trainings%20%28Web%29%20%281%29_0.pdf",
    "skillsScope": "training"
  },
  {
    "id": "credential-2",
    "category": "yearup",
    "title": "Certificate of Completion - Year Up United",
    "pdf": "./Certifications/Year_Up_United/Certifcate_of_Completion_YUU.pdf",
    "label": "Development",
    "provider": "Year Up United",
    "skills": [
      "Application development",
      "Problem solving",
      "Business communication",
      "Team collaboration",
      "Workplace readiness",
      "Career management"
    ],
    "info": "openYearUpInfoModal",
    "project": "#projects",
    "skillsSource": "https://www.yearup.org/sites/default/files/2025-02/Catalog%20of%20Specialty%20Trainings%20%28Web%29%20%281%29_0.pdf",
    "skillsScope": "training"
  },
  {
    "id": "credential-3",
    "category": "dataanalytics",
    "title": "Foundations: Data, Data, Everywhere",
    "pdf": "./Certifications/Data_Analytics/Foundations_Data_Data_Everywhere.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "Analytical thinking",
      "Data analysis",
      "Data ecosystems",
      "Spreadsheets",
      "SQL fundamentals",
      "Data ethics"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-4",
    "category": "dataanalytics",
    "title": "Ask Questions to Make Data-Driven Decisions",
    "pdf": "./Certifications/Data_Analytics/Ask_Questions_to_Make_Data_Driven_Decisions_Certification.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "Structured thinking",
      "Problem solving",
      "Data-driven decisions",
      "Stakeholder communication",
      "Spreadsheets",
      "Expectation management"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-5",
    "category": "dataanalytics",
    "title": "Prepare Data for Exploration",
    "pdf": "./Certifications/Data_Analytics/Prepare_Data_for_Exploration.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "Data collection",
      "Data quality",
      "Databases",
      "SQL",
      "Data ethics",
      "Data organization"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-6",
    "category": "dataanalytics",
    "title": "Process Data from Dirty to Clean",
    "pdf": "./Certifications/Data_Analytics/Process_Data_from_Dirty to_Clean.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "SQL",
      "Data cleaning",
      "Data validation",
      "Data integrity",
      "Spreadsheets",
      "Data transformation"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-7",
    "category": "dataanalytics",
    "title": "Analyze Data to Answer Questions",
    "pdf": "./Certifications/Data_Analytics/Analyze_Data_to_Answer_Questions.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "SQL joins",
      "Spreadsheet calculations",
      "Pivot tables",
      "Data analysis",
      "Data manipulation",
      "Data transformation"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-8",
    "category": "dataanalytics",
    "title": "Share Data Through the Art of Visualization",
    "pdf": "./Certifications/Data_Analytics/Share_Data_Through_the_Art_of_Visualization.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "Tableau",
      "Data visualization",
      "Dashboard creation",
      "Data storytelling",
      "Data presentation",
      "Presentation design"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-9",
    "category": "dataanalytics",
    "title": "Introduction to Data Analysis Using Python",
    "pdf": "./Certifications/Data_Analytics/Introduction_to_Data_Analysis_Using_Python.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "Python programming",
      "Data structures",
      "Loops and control flow",
      "Pandas",
      "NumPy",
      "Reusable code"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-10",
    "category": "dataanalytics",
    "title": "Google Data Analytics Capstone: Complete a Case Study",
    "pdf": "./Certifications/Data_Analytics/Google_Data_Analytics_Capstone_-_Complete_a_Case.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "Case study development",
      "Data analysis",
      "Data cleaning",
      "Data visualization",
      "Data processing",
      "Portfolio presentation"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "course"
  },
  {
    "id": "credential-11",
    "category": "dataanalytics",
    "title": "Google Data Analytics Professional Certificate",
    "pdf": "./Certifications/Data_Analytics/Google_Data_Analytics_Professional_Certificate.pdf",
    "label": "Data analytics",
    "provider": "Google · Coursera",
    "skills": [
      "Data cleaning",
      "SQL",
      "Python",
      "Spreadsheets",
      "Tableau",
      "Data visualization",
      "Data ethics",
      "Data storytelling"
    ],
    "info": "openCourseInfoModal",
    "project": "https://jordan721.github.io/Development-Showcase/Professional_Projects/Data_Pipeline/index.html",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-data-analytics",
    "skillsScope": "program"
  },
  {
    "id": "credential-12",
    "category": "itsupport",
    "title": "Technical Support Fundamentals",
    "pdf": "./Certifications/IT/Technical_Support_Fundamentals.pdf",
    "label": "IT support",
    "provider": "Google · Coursera",
    "skills": [
      "Technical support",
      "Computer hardware",
      "Troubleshooting",
      "Customer support",
      "Software installation",
      "Binary fundamentals"
    ],
    "info": "openITSupportInfoModal",
    "project": "#arsenal",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-it-support",
    "skillsScope": "course"
  },
  {
    "id": "credential-13",
    "category": "itsupport",
    "title": "The Bits and Bytes of Computer Networking",
    "pdf": "./Certifications/IT/The_Bits_and_Bytes_of_Computer_Networking.pdf",
    "label": "IT support",
    "provider": "Google · Coursera",
    "skills": [
      "TCP/IP",
      "DNS",
      "DHCP",
      "Network routing",
      "Network troubleshooting",
      "Cloud computing"
    ],
    "info": "openITSupportInfoModal",
    "project": "#arsenal",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-it-support",
    "skillsScope": "course"
  },
  {
    "id": "credential-14",
    "category": "itsupport",
    "title": "Operating Systems and You: Becoming a Power User",
    "pdf": "./Certifications/IT/Operating_Systems_and_You - Becoming_a_Power.pdf",
    "label": "IT support",
    "provider": "Google · Coursera",
    "skills": [
      "Windows",
      "Linux",
      "Command-line interface",
      "User permissions",
      "File systems",
      "Process management"
    ],
    "info": "openITSupportInfoModal",
    "project": "#arsenal",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-it-support",
    "skillsScope": "course"
  },
  {
    "id": "credential-15",
    "category": "itsupport",
    "title": "System Administration and IT Infrastructure Services",
    "pdf": "./Certifications/IT/System_Administration_and_IT_Infrastructure.pdf",
    "label": "IT support",
    "provider": "Google · Coursera",
    "skills": [
      "Systems administration",
      "Active Directory",
      "LDAP",
      "Server administration",
      "Cloud infrastructure",
      "Disaster recovery"
    ],
    "info": "openITSupportInfoModal",
    "project": "#arsenal",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-it-support",
    "skillsScope": "course"
  },
  {
    "id": "credential-16",
    "category": "itsupport",
    "title": "IT Security: Defense Against the Digital Dark Arts",
    "pdf": "./Certifications/IT/IT%20Security_Defense_Against_the_Digital_Dark_Arts.pdf",
    "label": "IT support",
    "provider": "Google · Coursera",
    "skills": [
      "Encryption",
      "Authentication",
      "Authorization",
      "Network security",
      "Firewalls",
      "Security awareness"
    ],
    "info": "openITSupportInfoModal",
    "project": "#arsenal",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-it-support",
    "skillsScope": "course"
  },
  {
    "id": "credential-17",
    "category": "itsupport",
    "title": "Google IT Support Professional Certificate",
    "pdf": "./Certifications/IT/Google_IT_Support_Professional_Certificate.pdf",
    "label": "IT support",
    "provider": "Google · Coursera",
    "skills": [
      "Troubleshooting",
      "Customer support",
      "Computer hardware",
      "TCP/IP networking",
      "Linux",
      "Windows",
      "Systems administration",
      "Network security"
    ],
    "info": "openITSupportInfoModal",
    "project": "#arsenal",
    "skillsSource": "https://www.coursera.org/professional-certificates/google-it-support",
    "skillsScope": "program"
  }
];

function initCredentialGallery() {
    const modal = document.getElementById('certificatesModal');
    const browse = document.getElementById('credentialBrowse');
    const detail = document.getElementById('credentialDetail');
    const shell = modal.querySelector('.credential-shell');
    const cards = [...modal.querySelectorAll('.credential-card')];
    const search = document.getElementById('credentialSearch');
    const filters = [...modal.querySelectorAll('[data-cert-filter]')];
    const byId = new Map(credentials.map(credential => [credential.id, credential]));
    const preview = document.getElementById('credentialPdf');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const badgeLinks = {
        'Google Data Analytics Professional Certificate': 'https://www.credly.com/badges/2a0e60ae-073d-4889-a1a3-c9c4876bc024/linked_in?t=tba2ty',
        'Google IT Support Professional Certificate': 'https://www.credly.com/earner/earned/badge/1fe87c3f-305e-4e96-98ac-da444e420bfe'
    };
    let category = 'all';
    let opener = null;
    let savedScroll = 0;
    function filterCredentials() {
        const query = search.value.trim().toLocaleLowerCase();
        let visible = 0;
        cards.forEach(card => {
            const credential = byId.get(card.dataset.credential);
            const text = [credential.title, credential.provider, credential.label, ...credential.skills].join(' ').toLocaleLowerCase();
            const match = (category === 'all' || credential.category === category) && (!query || text.includes(query));
            const wasHidden = card.hidden;
            card.hidden = !match;
            if (match) {
                if (wasHidden && !reduced.matches && card.animate) card.animate([
                    { opacity: 0, translate: '0 12px' }, { opacity: 1, translate: '0 0' }
                ], { duration: 250, delay: visible * 20, fill: 'backwards', easing: 'ease-out' });
                visible++;
            }
        });
        document.getElementById('credentialResultCount').textContent = `Showing ${visible} of ${credentials.length} credentials`;
        document.getElementById('credentialEmpty').hidden = visible !== 0;
        filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.certFilter === category)));
        // Keep completed-program highlights out of the way during a specific search/filter.
        modal.querySelector('.credential-completed').hidden = category !== 'all' || Boolean(query);
        return visible;
    }
    function releasePreview() { preview.replaceChildren(); }
    function showCollection(restoreFocus = true) {
        detail.hidden = true;
        browse.hidden = false;
        modal.setAttribute('aria-labelledby', 'credentialGalleryTitle');
        releasePreview();
        if (restoreFocus) {
            shell.scrollTop = savedScroll;
            if (opener && !opener.hidden) opener.focus({ preventScroll: true });
        }
    }
    function showCredential(id, trigger) {
        const credential = byId.get(id);
        if (!credential) return;
        opener = trigger;
        savedScroll = shell.scrollTop;
        document.getElementById('credentialDetailTitle').textContent = credential.title;
        document.getElementById('credentialDetailCategory').textContent = credential.label + ' / CERTIFICATE';
        document.getElementById('credentialDetailProvider').textContent = credential.provider;
        document.getElementById('credentialOpenPdf').href = credential.pdf;
        const download = document.getElementById('credentialDownload');
        download.href = credential.pdf;
        download.setAttribute('download', decodeURIComponent(credential.pdf.split('/').pop()));
        const verify = document.getElementById('credentialVerify');
        verify.hidden = !badgeLinks[credential.title];
        if (!verify.hidden) verify.href = badgeLinks[credential.title];
        else verify.removeAttribute('href');
        document.getElementById('credentialSkillsDescription').textContent = `Selected highlights from this ${credential.skillsScope}.`;
        const syllabus = document.getElementById('credentialSkillsSource');
        syllabus.href = credential.skillsSource;
        const skills = document.getElementById('credentialSkills');
        skills.replaceChildren(...credential.skills.map(skill => {
            const tag = document.createElement('span'); tag.textContent = skill; return tag;
        }));
        document.getElementById('credentialProgram').onclick = () => window[credential.info]();
        const related = document.getElementById('credentialRelated');
        related.href = credential.project;
        related.textContent = credential.category === 'itsupport' ? 'Explore the technical toolkit ↗' : 'See related projects ↗';
        if (credential.project.startsWith('#')) {
            related.removeAttribute('target'); related.removeAttribute('rel');
            related.onclick = event => {
                event.preventDefault(); closeCertificatesModal();
                const target = document.querySelector(credential.project);
                target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true });
                target.scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth' });
            };
        } else {
            related.onclick = null; related.target = '_blank'; related.rel = 'noopener noreferrer';
        }
        releasePreview();
        const pdf = document.createElement('object');
        pdf.type = 'application/pdf'; pdf.data = credential.pdf + '#view=FitH';
        pdf.setAttribute('aria-label', credential.title + ' PDF preview');
        pdf.setAttribute('tabindex', '0');
        const fallback = document.createElement('a');
        fallback.href = credential.pdf; fallback.target = '_blank'; fallback.rel = 'noopener noreferrer';
        fallback.textContent = 'Open the original certificate PDF ↗'; pdf.append(fallback); preview.append(pdf);
        browse.hidden = true; detail.hidden = false;
        modal.setAttribute('aria-labelledby', 'credentialDetailTitle');
        shell.scrollTop = 0;
        document.getElementById('credentialDetailTitle').focus({ preventScroll: true });
    }
    modal.querySelectorAll('[data-credential]').forEach(button => button.addEventListener('click', () => showCredential(button.dataset.credential, button)));
    filters.forEach(button => button.addEventListener('click', () => { category = button.dataset.certFilter; filterCredentials(); }));
    search.addEventListener('input', filterCredentials);
    document.getElementById('credentialReset').addEventListener('click', () => {
        category = 'all'; search.value = ''; filterCredentials(); search.focus({ preventScroll: true });
    });
    document.getElementById('credentialBack').addEventListener('click', () => showCollection());
    window.credentialGallery = { showCollection, releasePreview };
    filterCredentials();
}
document.addEventListener('DOMContentLoaded', initCredentialGallery);

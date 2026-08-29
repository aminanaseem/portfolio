# Portfolio Content Reference — Amina Naseem

This file documents **all** the content/sections in the portfolio website so it's easy to find, edit, or add things later.

## 📁 Project Structure

```
E:\PORTFOLIO
├── index.html          # MAIN FILE — all content, sections, and structure live here
├── styles.css          # All styling, colors, animations, layout
├── script.js           # All interactions (typed text, filters, gallery, counters)
├── README.md           # Project overview
├── CV\                 # Original CV PDF + certificate source files
└── assets\images\      # Certificate images used in the Gallery
```

### Where to edit what
| I want to change... | I edit... |
|---|---|
| Text / content / projects / experience | `index.html` |
| Colors, fonts, layout, animations | `styles.css` |
| Behaviors (typed words, filters, contact form) | `script.js` |
| Add certificate image | Put file in `assets/images/` then add a block in the Gallery in `index.html` |

---

## 🎨 Design System (styles.css)

- **Fonts:** `Inter` (body), `Space Grotesk` (headings), `JetBrains Mono` (code/terminal)
- **Background:** Dark `#0a0e17` with Matrix rain canvas + floating particles
- **Primary color:** Cyan `#00d4ff`
- **Accent color:** Green `#00ff88`
- **Purple:** `#a855f7`
- **Theme:** Animated Interactive (custom cursor, preloader, scroll reveal animations)

All colors are defined as CSS variables at the top of `styles.css` under `:root`.

---

## 🖥️ Site Sections (in order, in index.html)

1. **Hero** — Name, rotating roles, intro, stats counters
2. **Marquee** — Scrolling specialty strip
3. **About** — Bio + interactive terminal card
4. **Skills** — 7 categories of skills
5. **Projects** — Filterable grid of 10 project cards
6. **Experience** — Timeline of 8 roles
7. **Education** — BS Cyber Security & Digital Forensics
8. **Certifications** — 11 certificates/awards
9. **Gallery** — Certificate image lightbox
10. **Contact** — Info + contact form
11. **Footer**

---

## 👤 Identity & Contact

- **Name:** Amina Naseem
- **Location:** Bahawalnagar, Punjab, Pakistan
- **Email:** aminanaseem101@gmail.com
- **Phone:** +92 325 1528381
- **LinkedIn:** https://www.linkedin.com/in/amina-naseem-b25001330
- **CGPA:** 3.80 / 4.00
- **Degree:** BS Cyber Security & Digital Forensics (IUB), Sep 2022 – Jun 2026

---

## 🧠 Skills (7 Categories — Skills Section)

### 1. Digital Forensics
Autopsy · Volatility 3 · The Sleuth Kit · PhotoRec · TShark · Scapy · YARA · Memory Forensics · Disk Forensics · Network Forensics

### 2. Security Tools
Wireshark · Nmap · Metasploit · Burp Suite · Snort / Snort++ · Suricata · Nessus · OSINT Framework · Ghidra · VirusTotal

### 3. Programming
Python · C++ · PHP · JavaScript · HTML / CSS · SQL · Bash / Linux CLI · Tkinter

### 4. AI & Machine Learning
YOLOv8 · LogBERT · XceptionNet · Random Forest · SVM · XGBoost · RAG / LLM · Sentence Transformers · CNNs · Soft-voting Ensemble

### 5. Platforms & Environments
Kali Linux · Linux CLI · Windows Server · EVE-NG · VirtualBox · n8n Automation · MCP Connectors

### 6. Automation Engineering
Model Context Protocol (MCP) · Custom MCP Connectors · n8n · Workflow Automation · JSON-RPC · AI Agent Orchestration · API Integrations · Email-to-Draft Pipelines · GraphQL / REST APIs

### 7. Cybersecurity Domains
Incident Response · Threat Intelligence · Malware Analysis · Vulnerability Assessment · Penetration Testing · Network Security · MITRE ATT&CK · IoT Security · OSINT · Steganography

---

## 🚀 Projects (10 cards — Projects Section)

| # | Project | Category | Link |
|---|---|---|---|
| 1 | **HawkEye** — AI-Powered Digital Forensics & Cybercrime Reporting | Forensics, AI | [Demo video](https://drive.google.com/file/d/1Gd_cj564wrgDzO7ePtm6Y0DVBtq1v_27/view) |
| 2 | **Phish Defender A&A** — Multi-Model Ensemble Phishing Detection | AI | [LinkedIn](https://www.linkedin.com/in/amina-naseem-b25001330) |
| 3 | **Custom MCP Connector for YouTube** | Automation, AI | [Demo video](https://www.loom.com/share/c94e066a54e44f1f979bd57d995df182) |
| 4 | **Email-to-Draft Automation (n8n)** | Automation | [Demo video](https://www.loom.com/share/d2eec945ef814a7aaaae95e488625305) |
| 5 | **Netflix Clone** | Web Dev | [LinkedIn](https://www.linkedin.com/in/amina-naseem-b25001330) |
| 6 | **Interactive Front-End Animation Projects** (GSAP, ScrollTrigger, jQuery, Typed.js, Locomotive) | Web Dev | [LinkedIn](https://www.linkedin.com/in/amina-naseem-b25001330) |
| 7 | **Network Intrusion Detection (Snort & Suricata)** | Network | [LinkedIn](https://www.linkedin.com/in/amina-naseem-b25001330) |
| 8 | **Nessus Vulnerability Scanning Setup** | Network | [LinkedIn](https://www.linkedin.com/in/amina-naseem-b25001330) |
| 9 | **CVSS Calculator GUI** (Python/Tkinter) | Network, AI | [LinkedIn](https://www.linkedin.com/in/amina-naseem-b25001330) |
| 10 | **Digital Forensics Lab — Autopsy & Volatility** | Forensics | [LinkedIn](https://www.linkedin.com/in/amina-naseem-b25001330) |

### How to edit a project (in index.html)
Each project card looks like this — find the matching block and edit the text/links:

```html
<!-- Project Name -->
<div class="project-card reveal" data-category="ai">
  <div class="project-preview">
    <div class="preview-placeholder ph-phish">
      <i class="fa-solid fa-fish"></i>
    </div>
    <div class="project-links">
      <span class="badge badge-published">📄 Published</span>
    </div>
  </div>
  <div class="project-body">
    <h3>Project Title</h3>
    <p class="project-desc">Description text.</p>
    <div class="project-actions">
      <a href="LINK_URL" target="_blank" rel="noopener" class="proj-link"><i class="fa-solid fa-play"></i> Watch Demo</a>
    </div>
    <div class="project-tech">
      <span class="tag small">Tech1</span><span class="tag small">Tech2</span>
    </div>
  </div>
</div>
```

> **Add a new project:** copy a "project-card" block, change the `data-category` (forensics / ai / web / automation / network), title, description, link, and tech tags. It appears automatically in filtering.

---

## 💼 Experience (Timeline — 8 Roles)

1. **Cyber Security Analyst** — Pakistan Aeronautical Complex (PAC Kamra) — Jan 2025 – Mar 2026
2. **Cyber Security Analyst (Internship)** — Corvit Networks — Aug 2025 – Sep 2025
3. **Chairperson** — IEEE ComSoc-UCET IUB — Feb 2026 – Jun 2026
4. **Vice Chair** — IEEE ComSoc-UCET IUB — Dec 2025 – Feb 2026
5. **General Secretary** — Center for Cyber Security & Digital Forensics (IUB) — 2025–2026
6. **Joint Secretary** — Cyber Security Student Club (IUB) — Mar 2026 – Jun 2026
7. **Marketing Head** — Center for Cyber Security & Digital Forensics (IUB) — 2024–2025
8. **PHP Developer Intern** — BixiSoft Pakistan — Sep 2024 – Oct 2024

---

## 🏆 Certifications & Awards (11)

1. Certificate of Appreciation — TechXhibit 2026 (Air University Multan)
2. Shield of Appreciation — Chairperson, IEEE Student Branch
3. Shield of Appreciation — Marketing Head, Center for Cyber Security & Digital Forensics (2024–2025)
4. Shield of Appreciation — General Secretary, Center for Cyber Security & Digital Forensics (2025–2026)
5. IEEE Communications Society: 6G Megatrends and Technology Enablers
6. Cisco Introduction to Cybersecurity (Badge)
7. OSINT (Open-Source Intelligence)
8. IoT Ethical Hacking
9. Windows Networking
10. Data Science & Machine Learning (Dicecamp)
11. Prime Minister's Youth Laptop Scheme (Phase III)

---

## 🖼️ Gallery Images (in assets/images/)

Files referenced in the Gallery (rename keeps web-friendly names; keep these names if you swap images):
- `PAC.jpg` — PAC Kamra
- `Corvit.jpg` — Corvit Networks
- `Bixisoft.jpg` — BixiSoft Internship
- `Dice.jpg` — Dicecamp
- `comsoc-traning.jpg` — IEEE ComSoc Training
- `Traing.jpg` — Cybersecurity Training
- `iub.jpeg` — IUB Achievement
- `INTER.jpeg` — Internship

Other available files in `assets/images/`: `Annu.png`, `MATRIC.jpeg`, `l-1.jpeg`, `l-2.jpeg`, `licence-1.jpeg`, `licence-2.jpeg` (can be added to Gallery if needed).

---

## 🛠️ How to Deploy / Update the Live Site

Hosted at: **https://aminanaseem.github.io/portfolio/**  (GitHub Pages, repo: `aminanaseem/portfolio`)

After making changes in `index.html` / `styles.css` / `script.js`:

```powershell
cd E:\PORTFOLIO
git add -A
git commit -m "Describe your change"
git push origin main
```

GitHub Pages auto-rebuilds in ~1–2 minutes.

> **Note:** The live deploy uses a GitHub token. If that token was revoked or expired, run `gh auth login` once to authenticate your machine securely, then `git push` will work again.

---

## 🔍 Quick Task Map
Need to do this? Go here:
- **Change name/email/phone** → Contact section + About info in `index.html`
- **Add a new skill** → Skills section category in `index.html`
- **Add a new project** → Copy a project-card block (see above)
- **Add a certificate** → Put image in `assets/images/` + add a gallery-item block in Gallery section
- **Change demo video link** → The specific project card's `project-actions` link in `index.html`
- **Change colors/theme** → CSS variables at top of `styles.css`
- **Change rotating headline roles** → `roles` array near top of `script.js`

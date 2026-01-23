:root {
    /* The Safe Harbor Palette */
    --bg-warm-sand: #F5F5DC;
    --bg-white: #FFFFFF;
    --text-deep-teal: #004d4d;
    --text-body: #333333;
    --accent-sage: #8FBC8F;
    --accent-coral: #E9967A;
    --accent-coral-hover: #d67c5e;
    
    /* Spacing & Layout */
    --container-width: 900px;
    --radius: 8px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

body {
    background-color: var(--bg-warm-sand);
    color: var(--text-body);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

/* Typography */
h1, h2, h3 {
    color: var(--text-deep-teal);
    font-weight: 700;
    margin-top: 0;
}

h1 { font-size: 2.5rem; letter-spacing: -0.02em; line-height: 1.2; }
h2 { font-size: 2rem; text-align: center; margin-bottom: 1rem; }
p { margin-bottom: 1.5rem; }

/* Layout Utilities */
.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
}

.section { padding: 80px 0; }
.light-bg { background-color: var(--bg-white); }
.dark-bg { background-color: var(--text-deep-teal); color: white; }
.dark-bg h2,.dark-bg p { color: white; }

.section-intro {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 40px auto;
    font-size: 1.1rem;
    color: #666;
}

/* Hero Section */
.hero-section {
    padding: 100px 0;
    text-align: center;
}

.hero-section.badge {
    background-color: var(--accent-sage);
    color: white;
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 20px;
}

.trust-signals {
    margin-top: 30px;
    font-size: 0.9rem;
    color: var(--text-deep-teal);
    opacity: 0.8;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.dot {
    height: 8px;
    width: 8px;
    background-color: var(--accent-sage);
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
}

/* Accordion (Shame Triggers) */
.accordion-item {
    border-bottom: 1px solid #eee;
}

.accordion-header {
    padding: 20px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-deep-teal);
}

.accordion-body {
    display: none; /* Hidden by default for jQuery to toggle */
    padding-bottom: 20px;
    color: #555;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    text-align: center;
}

.stat-number { font-size: 3rem; font-weight: 800; color: var(--accent-sage); }
.stat-label { font-weight: 600; font-size: 1.2rem; margin-bottom: 10px; display: block; }
.stat-desc { font-size: 0.9rem; opacity: 0.8; }

/* Language Swap Table */
.language-swap-table {
    background: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
}

.swap-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #f0f0f0;
}

.swap-row.header {
    background-color: var(--text-deep-teal);
    color: white;
    font-weight: bold;
}

.col { padding: 20px; }
.col.toxic { color: #999; text-decoration: line-through; }
.col.healing { color: var(--text-deep-teal); font-weight: 600; }

/* Affiliate Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.product-card {
    background: white;
    padding: 30px;
    border-radius: var(--radius);
    border: 1px solid #e0e0e0;
    text-align: left;
    position: relative;
    transition: transform 0.2s;
}

.product-card:hover { transform: translateY(-5px); border-color: var(--accent-sage); }

.badge-rec {
    position: absolute;
    top: -10px;
    left: 20px;
    background: var(--text-deep-teal);
    color: white;
    font-size: 0.7rem;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
}

.btn-primary,.btn-ghost {
    display: block;
    text-align: center;
    padding: 12px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    margin-top: 15px;
}

.btn-primary {
    background-color: var(--accent-coral);
    color: white;
}

.btn-primary:hover { background-color: var(--accent-coral-hover); }

.btn-ghost {
    border: 2px solid var(--text-deep-teal);
    color: var(--text-deep-teal);
}

/* Safe Exit */
.safe-exit {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #cc0000;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    z-index: 100;
}

/* Footer */
footer {
    text-align: center;
    padding: 60px 20px;
    font-size: 0.9rem;
    color: #777;
}
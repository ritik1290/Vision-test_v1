const diseasesData = [
    {
        id: "cataracts",
        title: "Cataracts",
        description: "Clouding of the eye's natural lens, leading to blurred vision and sensitivity to glare.",
        symptoms: ["blurred vision", "cloudy vision", "glare", "light sensitivity", "faded colors", "poor night vision", "double vision"],
        category: "Lens Disorders",
        link: "diseases/cataracts.html"
    },
    {
        id: "presbyopia",
        title: "Presbyopia",
        description: "Age-related loss of ability to focus on close objects.",
        symptoms: ["blurred near vision", "eyestrain", "headache", "holding reading material far away"],
        category: "Lens Disorders",
        link: "diseases/presbyopia.html"
    },
    {
        id: "macular-degeneration",
        title: "Macular Degeneration (AMD)",
        description: "Loss of central vision needed for reading and driving.",
        symptoms: ["blurred central vision", "distorted vision", "straight lines look wavy", "dark spot in center of vision"],
        category: "Retinal Disorders",
        link: "diseases/macular-degeneration.html"
    },
    {
        id: "diabetic-retinopathy",
        title: "Diabetic Retinopathy",
        description: "Diabetes complication damaging retinal blood vessels.",
        symptoms: ["spots or floaters", "blurred vision", "fluctuating vision", "dark areas in vision", "vision loss"],
        category: "Retinal Disorders",
        link: "diseases/diabetic-retinopathy.html"
    },
    {
        id: "retinal-detachment",
        title: "Retinal Detachment",
        description: "Medical emergency where retina pulls away from normal position.",
        symptoms: ["sudden flashes of light", "many floaters", "curtain over vision", "shadow in peripheral vision"],
        category: "Retinal Disorders",
        link: "diseases/retinal-detachment.html"
    },
    {
        id: "retinitis-pigmentosa",
        title: "Retinitis Pigmentosa",
        description: "Inherited degenerative disease causing loss of night and peripheral vision.",
        symptoms: ["night blindness", "tunnel vision", "loss of peripheral vision", "clumsiness"],
        category: "Retinal Disorders",
        link: "diseases/retinitis-pigmentosa.html"
    },
    {
        id: "central-serous-retinopathy",
        title: "Central Serous Retinopathy",
        description: "Fluid accumulation under the retina causing temporary vision loss.",
        symptoms: ["blurred central vision", "dim vision", "distorted vision", "objects appear smaller"],
        category: "Retinal Disorders",
        link: "diseases/central-serous-retinopathy.html"
    },
    {
        id: "macular-hole",
        title: "Macular Hole",
        description: "Small defect in the center of the macula.",
        symptoms: ["blurred central vision", "distorted vision", "wavy lines", "dark spot in central vision"],
        category: "Retinal Disorders",
        link: "diseases/macular-hole.html"
    },
    {
        id: "epiretinal-membrane",
        title: "Epiretinal Membrane",
        description: "Scar tissue on the retina's surface (macular pucker).",
        symptoms: ["blurred vision", "distorted vision", "straight lines look wavy", "double vision"],
        category: "Retinal Disorders",
        link: "diseases/epiretinal-membrane.html"
    },
    {
        id: "retinal-vein-occlusion",
        title: "Retinal Vein Occlusion",
        description: "Blockage of veins carrying blood away from the retina.",
        symptoms: ["sudden painless vision loss", "blurred vision", "dark spots"],
        category: "Retinal Disorders",
        link: "diseases/retinal-vein-occlusion.html"
    },
    {
        id: "retinal-artery-occlusion",
        title: "Retinal Artery Occlusion",
        description: "Blockage of the main artery to the retina (Eye Stroke).",
        symptoms: ["sudden painless vision loss", "loss of vision in one eye"],
        category: "Retinal Disorders",
        link: "diseases/retinal-artery-occlusion.html"
    },
    {
        id: "vitreous-hemorrhage",
        title: "Vitreous Hemorrhage",
        description: "Bleeding into the gel-filled center of the eye.",
        symptoms: ["sudden floaters", "hazy vision", "red tint to vision", "vision loss"],
        category: "Retinal Disorders",
        link: "diseases/vitreous-hemorrhage.html"
    },
    {
        id: "posterior-vitreous-detachment",
        title: "Posterior Vitreous Detachment",
        description: "Separation of vitreous gel from retina.",
        symptoms: ["floaters", "flashes of light", "cobweb in vision"],
        category: "Retinal Disorders",
        link: "diseases/posterior-vitreous-detachment.html"
    },
    {
        id: "choroidal-neovascularization",
        title: "Choroidal Neovascularization",
        description: "Abnormal blood vessels growing from choroid into retina.",
        symptoms: ["distorted vision", "wavy lines", "blurred spot in central vision"],
        category: "Retinal Disorders",
        link: "diseases/choroidal-neovascularization.html"
    },
    {
        id: "glaucoma",
        title: "Glaucoma",
        description: "Damage to the optic nerve, often due to high eye pressure.",
        symptoms: ["loss of peripheral vision", "tunnel vision", "eye pain", "halos around lights"],
        category: "Optic Nerve Disorders",
        link: "diseases/glaucoma.html"
    },
    {
        id: "angle-closure-glaucoma",
        title: "Angle-Closure Glaucoma",
        description: "Medical emergency with sudden eye pressure spike.",
        symptoms: ["severe eye pain", "nausea", "vomiting", "blurred vision", "halos around lights", "red eye"],
        category: "Optic Nerve Disorders",
        link: "diseases/angle-closure-glaucoma.html"
    },
    {
        id: "optic-neuritis",
        title: "Optic Neuritis",
        description: "Inflammation of the optic nerve.",
        symptoms: ["pain with eye movement", "temporary vision loss", "loss of color vision", "flashing lights"],
        category: "Optic Nerve Disorders",
        link: "diseases/optic-neuritis.html"
    },
    {
        id: "ocular-hypertension",
        title: "Ocular Hypertension",
        description: "Elevated eye pressure without glaucoma damage.",
        symptoms: ["no symptoms", "high eye pressure"],
        category: "Optic Nerve Disorders",
        link: "diseases/ocular-hypertension.html"
    },
    {
        id: "keratoconus",
        title: "Keratoconus",
        description: "Progressive thinning and bulging of the cornea.",
        symptoms: ["blurred vision", "distorted vision", "light sensitivity", "glare", "frequent prescription changes"],
        category: "Corneal Disorders",
        link: "diseases/keratoconus.html"
    },
    {
        id: "corneal-ulcer",
        title: "Corneal Ulcer",
        description: "Open sore on the cornea, usually from infection.",
        symptoms: ["severe eye pain", "redness", "tearing", "discharge", "white spot on cornea", "blurred vision"],
        category: "Corneal Disorders",
        link: "diseases/corneal-ulcer.html"
    },
    {
        id: "fuchs-dystrophy",
        title: "Fuchs' Dystrophy",
        description: "Deterioration of corneal cells causing swelling.",
        symptoms: ["blurred vision in morning", "glare", "halos", "painful blisters"],
        category: "Corneal Disorders",
        link: "diseases/fuchs-dystrophy.html"
    },
    {
        id: "corneal-abrasion",
        title: "Corneal Abrasion",
        description: "Scratch on the cornea's surface.",
        symptoms: ["pain", "gritty sensation", "tearing", "redness", "light sensitivity"],
        category: "Corneal Disorders",
        link: "diseases/corneal-abrasion.html"
    },
    {
        id: "pterygium",
        title: "Pterygium",
        description: "Growth of pink, fleshy tissue on the conjunctiva.",
        symptoms: ["growth on eye", "redness", "irritation", "blurred vision"],
        category: "Corneal Disorders",
        link: "diseases/pterygium.html"
    },
    {
        id: "pinguecula",
        title: "Pinguecula",
        description: "Yellowish, raised deposit on the conjunctiva.",
        symptoms: ["yellow spot on eye", "dryness", "irritation", "redness"],
        category: "Corneal Disorders",
        link: "diseases/pinguecula.html"
    },
    {
        id: "keratitis",
        title: "Keratitis",
        description: "Inflammation of the cornea.",
        symptoms: ["redness", "pain", "tearing", "blurred vision", "light sensitivity"],
        category: "Corneal Disorders",
        link: "diseases/keratitis.html"
    },
    {
        id: "band-keratopathy",
        title: "Band Keratopathy",
        description: "Calcium deposition in cornea.",
        symptoms: ["white band across eye", "irritation", "redness", "decreased vision"],
        category: "Corneal Disorders",
        link: "diseases/band-keratopathy.html"
    },
    {
        id: "myopia",
        title: "Myopia (Nearsightedness)",
        description: "Difficulty seeing distant objects clearly.",
        symptoms: ["blurred distance vision", "squinting", "headaches", "eyestrain"],
        category: "Refractive Errors",
        link: "diseases/myopia.html"
    },
    {
        id: "hyperopia",
        title: "Hyperopia (Farsightedness)",
        description: "Difficulty focusing on close objects.",
        symptoms: ["blurred near vision", "eyestrain", "headaches", "aching eyes"],
        category: "Refractive Errors",
        link: "diseases/hyperopia.html"
    },
    {
        id: "astigmatism",
        title: "Astigmatism",
        description: "Irregular curvature of cornea or lens.",
        symptoms: ["blurred vision at all distances", "distorted vision", "eyestrain", "headaches", "night driving difficulty"],
        category: "Refractive Errors",
        link: "diseases/astigmatism.html"
    },
    {
        id: "conjunctivitis",
        title: "Conjunctivitis (Pink Eye)",
        description: "Inflammation of the conjunctiva.",
        symptoms: ["redness", "itching", "tearing", "discharge", "crusting", "gritty feeling"],
        category: "Inflammatory & Infectious Disorders",
        link: "diseases/conjunctivitis.html"
    },
    {
        id: "uveitis",
        title: "Uveitis",
        description: "Inflammation of the middle layer of the eye.",
        symptoms: ["eye redness", "pain", "light sensitivity", "blurred vision", "floaters"],
        category: "Inflammatory & Infectious Disorders",
        link: "diseases/uveitis.html"
    },
    {
        id: "iritis",
        title: "Iritis (Anterior Uveitis)",
        description: "Inflammation of the iris.",
        symptoms: ["eye pain", "redness", "light sensitivity", "blurred vision"],
        category: "Inflammatory & Infectious Disorders",
        link: "diseases/iritis.html"
    },
    {
        id: "scleritis",
        title: "Scleritis",
        description: "Severe inflammation of the sclera.",
        symptoms: ["severe eye pain", "redness", "tearing", "light sensitivity", "tenderness"],
        category: "Inflammatory & Infectious Disorders",
        link: "diseases/scleritis.html"
    },
    {
        id: "episcleritis",
        title: "Episcleritis",
        description: "Inflammation of the episclera.",
        symptoms: ["redness", "mild discomfort", "watering"],
        category: "Inflammatory & Infectious Disorders",
        link: "diseases/episcleritis.html"
    },
    {
        id: "dry-eye-syndrome",
        title: "Dry Eye Syndrome",
        description: "Insufficient tears or poor tear quality.",
        symptoms: ["dryness", "stinging", "burning", "redness", "stringy mucus", "watery eyes"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/dry-eye-syndrome.html"
    },
    {
        id: "blepharitis",
        title: "Blepharitis",
        description: "Chronic eyelid inflammation.",
        symptoms: ["red eyelids", "swollen eyelids", "itching", "crusting", "flaking", "gritty sensation"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/blepharitis.html"
    },
    {
        id: "chalazion",
        title: "Chalazion",
        description: "Painless bump on the eyelid from blocked oil gland.",
        symptoms: ["lump on eyelid", "swelling", "tenderness"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/chalazion.html"
    },
    {
        id: "stye",
        title: "Stye (Hordeolum)",
        description: "Painful, red bump on eyelid edge from infection.",
        symptoms: ["painful lump on eyelid", "redness", "swelling", "tearing"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/stye.html"
    },
    {
        id: "ectropion",
        title: "Ectropion",
        description: "Outward turning of the eyelid.",
        symptoms: ["sagging eyelid", "redness", "tearing", "dryness", "irritation"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/ectropion.html"
    },
    {
        id: "entropion",
        title: "Entropion",
        description: "Inward turning of the eyelid.",
        symptoms: ["eyelashes rubbing eye", "pain", "redness", "tearing", "irritation"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/entropion.html"
    },
    {
        id: "dacryocystitis",
        title: "Dacryocystitis",
        description: "Infection of the lacrimal sac.",
        symptoms: ["pain near nose", "redness", "swelling", "tearing", "discharge", "fever"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/dacryocystitis.html"
    },
    {
        id: "nasolacrimal-duct-obstruction",
        title: "Nasolacrimal Duct Obstruction",
        description: "Blocked tear drainage system.",
        symptoms: ["excessive tearing", "discharge", "crusting", "recurrent infections"],
        category: "Eyelid & Surface Disorders",
        link: "diseases/nasolacrimal-duct-obstruction.html"
    },
    {
        id: "amblyopia",
        title: "Amblyopia (Lazy Eye)",
        description: "Reduced vision in one eye due to abnormal development.",
        symptoms: ["wandering eye", "poor depth perception", "squinting", "head tilting"],
        category: "Pediatric & Eye Tumors",
        link: "diseases/amblyopia.html"
    },
    {
        id: "strabismus",
        title: "Strabismus",
        description: "Misalignment of the eyes.",
        symptoms: ["crossed eyes", "eyes not looking in same direction", "double vision", "poor depth perception"],
        category: "Pediatric & Eye Tumors",
        link: "diseases/strabismus.html"
    },
    {
        id: "retinoblastoma",
        title: "Retinoblastoma",
        description: "Eye cancer in children.",
        symptoms: ["white pupil reflex", "crossed eyes", "redness", "swelling"],
        category: "Pediatric & Eye Tumors",
        link: "diseases/retinoblastoma.html"
    },
    {
        id: "ocular-melanoma",
        title: "Ocular Melanoma",
        description: "Eye cancer in adults.",
        symptoms: ["dark spot on iris", "flashing lights", "floaters", "blurred vision", "loss of peripheral vision"],
        category: "Pediatric & Eye Tumors",
        link: "diseases/ocular-melanoma.html"
    },
    {
        id: "floaters-flashes",
        title: "Eye Floaters & Flashes",
        description: "Spots or flashes of light in vision.",
        symptoms: ["spots in vision", "cobwebs", "flashes of light"],
        category: "Other Common Conditions",
        link: "diseases/floaters-flashes.html"
    },
    {
        id: "color-blindness",
        title: "Color Blindness",
        description: "Difficulty distinguishing certain colors.",
        symptoms: ["difficulty distinguishing colors", "inability to see shades"],
        category: "Other Common Conditions",
        link: "diseases/color-blindness.html"
    },
    {
        id: "nystagmus",
        title: "Nystagmus",
        description: "Involuntary rhythmic eye movements.",
        symptoms: ["uncontrolled eye movements", "shaky vision", "tilting head", "balance problems"],
        category: "Other Common Conditions",
        link: "diseases/nystagmus.html"
    },
    {
        id: "subconjunctival-hemorrhage",
        title: "Subconjunctival Hemorrhage",
        description: "Bright red blood spot on white of eye.",
        symptoms: ["red spot on eye", "no pain", "no vision change"],
        category: "Other Common Conditions",
        link: "diseases/subconjunctival-hemorrhage.html"
    }
];

// DOM Elements
const searchInput = document.getElementById('disease-search');
const symptomInput = document.getElementById('symptom-input');
const checkSymptomsBtn = document.getElementById('check-symptoms-btn');
const searchResultsContainer = document.getElementById('search-results');
const symptomResultsContainer = document.getElementById('symptom-results');

// Search Functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResultsContainer.innerHTML = '';
            searchResultsContainer.classList.remove('active');
            return;
        }

        const filteredDiseases = diseasesData.filter(disease =>
            disease.title.toLowerCase().includes(query) ||
            disease.description.toLowerCase().includes(query)
        );

        displaySearchResults(filteredDiseases);
    });
}

function displaySearchResults(results) {
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p class="no-results">No diseases found matching your search.</p>';
        searchResultsContainer.classList.add('active');
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'results-grid';

    results.forEach(disease => {
        const card = createDiseaseCard(disease);
        grid.appendChild(card);
    });

    searchResultsContainer.appendChild(grid);
    searchResultsContainer.classList.add('active');
}

// Symptom Checker Functionality
if (checkSymptomsBtn && symptomInput) {
    const performCheck = () => {
        const query = symptomInput.value.toLowerCase();
        if (query.length < 3) {
            alert('Please enter at least 3 characters to describe your symptoms.');
            return;
        }
        checkSymptoms(query);
    };

    checkSymptomsBtn.addEventListener('click', performCheck);

    symptomInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performCheck();
        }
    });
}

function checkSymptoms(query) {
    const queryTerms = query.split(' ').filter(term => term.length > 2);

    // Score diseases based on symptom matches
    const scoredDiseases = diseasesData.map(disease => {
        let score = 0;
        let matchedSymptoms = [];

        // Check against defined symptoms
        disease.symptoms.forEach(symptom => {
            if (query.includes(symptom)) {
                score += 10; // Exact match bonus
                matchedSymptoms.push(symptom);
            } else {
                // Check individual terms
                queryTerms.forEach(term => {
                    if (symptom.includes(term)) {
                        score += 1;
                        if (!matchedSymptoms.includes(symptom)) {
                            matchedSymptoms.push(symptom);
                        }
                    }
                });
            }
        });

        return { ...disease, score, matchedSymptoms };
    });

    // Filter and sort results
    const results = scoredDiseases
        .filter(d => d.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6); // Top 6 results

    displaySymptomResults(results);
}

function displaySymptomResults(results) {
    symptomResultsContainer.innerHTML = '';

    if (results.length === 0) {
        symptomResultsContainer.innerHTML = '<p class="no-results">No conditions found matching those symptoms. Please try different keywords.</p>';
        symptomResultsContainer.classList.add('active');
        return;
    }

    const heading = document.createElement('h3');
    heading.textContent = 'Possible Conditions Based on Your Symptoms:';
    heading.style.color = 'var(--secondary-color)';
    heading.style.marginBottom = '1rem';
    symptomResultsContainer.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'results-grid';

    results.forEach(disease => {
        const card = createDiseaseCard(disease, true);
        grid.appendChild(card);
    });

    symptomResultsContainer.appendChild(grid);
    symptomResultsContainer.classList.add('active');

    // Scroll to results
    symptomResultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function createDiseaseCard(disease, showSymptoms = false) {
    const div = document.createElement('div');
    div.className = 'card result-card';

    let symptomsHtml = '';
    if (showSymptoms && disease.matchedSymptoms && disease.matchedSymptoms.length > 0) {
        symptomsHtml = `<p class="matched-symptoms"><small>Matches: ${disease.matchedSymptoms.join(', ')}</small></p>`;
    }

    div.innerHTML = `
        <h3>${disease.title}</h3>
        <span class="category-tag">${disease.category}</span>
        <p>${disease.description}</p>
        ${symptomsHtml}
        <a href="${disease.link}" class="btn-outline">Learn More</a>
    `;
    return div;
}

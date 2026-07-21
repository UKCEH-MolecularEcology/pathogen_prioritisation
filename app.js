// UKCEH Pathogen Prioritisation Portal - Frontend Logic
// Dynamic model runner matches Dr. Andrew Singer's Excel pathogen priority dashboard calculations.

// Static Pathogen Database embedded directly to allow file:// protocol execution
const PATHOGEN_DATABASE = {
  "pathogen_ranking": [
    {
      "id": 1,
      "pathogen": "Norovirus",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Core",
      "role": "Core causal pathogen priority",
      "exposure_efficiency": 5.0,
      "health_consequence": 3.0,
      "source_pressure": 5.0,
      "persistence": 4.0,
      "bathing_evidence": 5.0,
      "national_score": 92.0,
      "sewage_fit": 5.0,
      "agriculture_fit": 2.0,
      "urban_fit": 3.0,
      "riverine_fit": 5.0,
      "climate_fit": 2.0,
      "sentinel_relevance": 3.0,
      "site_relevance_score": 70.0,
      "final_score": 85.39999999999999,
      "short_rationale": "Dominant sewage-associated enteric viral priority with high shedding, low dose, high transmission and strong bathing relevance."
    },
    {
      "id": 2,
      "pathogen": "Cryptosporidium spp.",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Core",
      "role": "Core causal pathogen priority",
      "exposure_efficiency": 5.0,
      "health_consequence": 4.0,
      "source_pressure": 4.0,
      "persistence": 5.0,
      "bathing_evidence": 5.0,
      "national_score": 92.0,
      "sewage_fit": 3.0,
      "agriculture_fit": 5.0,
      "urban_fit": 2.0,
      "riverine_fit": 5.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 2.0,
      "site_relevance_score": 62.22222222222222,
      "final_score": 83.06666666666666,
      "short_rationale": "Very persistent protozoan with low infectious dose and strong relevance to agricultural and wastewater-influenced bathing waters."
    },
    {
      "id": 3,
      "pathogen": "STEC",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Core",
      "role": "Core causal pathogen priority",
      "exposure_efficiency": 5.0,
      "health_consequence": 5.0,
      "source_pressure": 3.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 83.0,
      "sewage_fit": 3.0,
      "agriculture_fit": 5.0,
      "urban_fit": 2.0,
      "riverine_fit": 5.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 4.0,
      "site_relevance_score": 68.88888888888889,
      "final_score": 78.76666666666665,
      "short_rationale": "Low-dose, high-consequence pathogenic E. coli group; priority is driven by severity and livestock/faecal runoff, not high population prevalence."
    },
    {
      "id": 4,
      "pathogen": "Shigella spp.",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Core",
      "role": "Core causal pathogen priority",
      "exposure_efficiency": 5.0,
      "health_consequence": 4.0,
      "source_pressure": 3.0,
      "persistence": 3.0,
      "bathing_evidence": 5.0,
      "national_score": 83.0,
      "sewage_fit": 5.0,
      "agriculture_fit": 1.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 4.0,
      "site_relevance_score": 61.11111111111111,
      "final_score": 76.43333333333332,
      "short_rationale": "Human sewage-linked low-dose pathogen with strong person-to-person spread and clear public-health relevance during faecal contamination events."
    },
    {
      "id": 5,
      "pathogen": "Campylobacter spp.",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Core",
      "role": "Core causal pathogen priority",
      "exposure_efficiency": 3.0,
      "health_consequence": 3.0,
      "source_pressure": 4.0,
      "persistence": 3.0,
      "bathing_evidence": 4.0,
      "national_score": 70.0,
      "sewage_fit": 2.0,
      "agriculture_fit": 5.0,
      "urban_fit": 2.0,
      "riverine_fit": 5.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 4.0,
      "site_relevance_score": 64.44444444444444,
      "final_score": 68.33333333333333,
      "short_rationale": "Serious concern in EA review; important bathing-water hazard especially where livestock, wildlife and runoff influence freshwater sites."
    },
    {
      "id": 6,
      "pathogen": "Giardia duodenalis",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Core",
      "role": "Core causal pathogen priority",
      "exposure_efficiency": 3.0,
      "health_consequence": 3.0,
      "source_pressure": 4.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 72.0,
      "sewage_fit": 3.0,
      "agriculture_fit": 4.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 2.0,
      "site_relevance_score": 55.55555555555556,
      "final_score": 67.06666666666666,
      "short_rationale": "Persistent protozoan with sewage, livestock and wildlife relevance; often underappreciated in bathing-water risk discussions."
    },
    {
      "id": 7,
      "pathogen": "Salmonella enterica (non-typhoidal)",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Core",
      "role": "Core causal pathogen priority",
      "exposure_efficiency": 2.0,
      "health_consequence": 4.0,
      "source_pressure": 3.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 65.0,
      "sewage_fit": 3.0,
      "agriculture_fit": 4.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 4.0,
      "site_relevance_score": 62.22222222222222,
      "final_score": 64.16666666666666,
      "short_rationale": "Important but not as water-efficient as norovirus, Cryptosporidium or STEC; source pressure may be human, livestock, wildlife or food/travel linked."
    },
    {
      "id": 8,
      "pathogen": "Adenovirus 40/41",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Conditional",
      "role": "Core causal / conditional viral pathogen",
      "exposure_efficiency": 3.0,
      "health_consequence": 3.0,
      "source_pressure": 4.0,
      "persistence": 5.0,
      "bathing_evidence": 4.0,
      "national_score": 74.0,
      "sewage_fit": 5.0,
      "agriculture_fit": 1.0,
      "urban_fit": 3.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 3.0,
      "site_relevance_score": 61.11111111111111,
      "final_score": 70.13333333333333,
      "short_rationale": "Highly persistent sewage-associated virus; useful surveillance value but weaker direct causal ranking than norovirus."
    },
    {
      "id": 9,
      "pathogen": "Hepatitis A virus",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Conditional",
      "role": "Core causal / conditional viral pathogen",
      "exposure_efficiency": 5.0,
      "health_consequence": 5.0,
      "source_pressure": 3.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 83.0,
      "sewage_fit": 5.0,
      "agriculture_fit": 1.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 2.0,
      "site_relevance_score": 54.44444444444445,
      "final_score": 74.43333333333334,
      "short_rationale": "Low prevalence in the UK but severe and low-dose; relevant during sewage contamination and travel/imported case clusters."
    },
    {
      "id": 10,
      "pathogen": "Rotavirus",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Conditional",
      "role": "Core causal / conditional viral pathogen",
      "exposure_efficiency": 5.0,
      "health_consequence": 3.0,
      "source_pressure": 3.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 77.0,
      "sewage_fit": 5.0,
      "agriculture_fit": 1.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 2.0,
      "site_relevance_score": 54.44444444444445,
      "final_score": 70.23333333333333,
      "short_rationale": "Important in children but less policy-dominant in UK bathing waters than norovirus."
    },
    {
      "id": 11,
      "pathogen": "Enteroviruses",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Conditional",
      "role": "Core causal / conditional viral pathogen",
      "exposure_efficiency": 3.0,
      "health_consequence": 3.0,
      "source_pressure": 4.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 72.0,
      "sewage_fit": 5.0,
      "agriculture_fit": 1.0,
      "urban_fit": 3.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 2.0,
      "site_relevance_score": 57.77777777777777,
      "final_score": 67.73333333333333,
      "short_rationale": "Useful surveillance target; direct bathing disease attribution is less consistent than for top-tier pathogens."
    },
    {
      "id": 12,
      "pathogen": "Sapovirus",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Conditional",
      "role": "Core causal / conditional viral pathogen",
      "exposure_efficiency": 4.0,
      "health_consequence": 2.0,
      "source_pressure": 4.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 74.0,
      "sewage_fit": 5.0,
      "agriculture_fit": 1.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 2.0,
      "site_relevance_score": 54.44444444444445,
      "final_score": 68.13333333333333,
      "short_rationale": "Similar route logic to norovirus but weaker evidence and generally lower priority."
    },
    {
      "id": 13,
      "pathogen": "Other diarrhoeagenic E. coli pathotypes (EPEC/ETEC/EAEC/EIEC)",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Conditional",
      "role": "Conditional diarrhoeagenic E. coli / outbreak-investigation row",
      "exposure_efficiency": 3.0,
      "health_consequence": 3.0,
      "source_pressure": 3.0,
      "persistence": 3.0,
      "bathing_evidence": 3.0,
      "national_score": 60.0,
      "sewage_fit": 4.0,
      "agriculture_fit": 2.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 5.0,
      "site_relevance_score": 63.33333333333333,
      "final_score": 61.0,
      "short_rationale": "Provides coverage for EPEC, ETEC, EAEC and EIEC, especially where outbreak intelligence suggests diarrhoeagenic E. coli beyond STEC."
    },
    {
      "id": 14,
      "pathogen": "Salmonella Typhi / Paratyphi",
      "category": "Core causal bathing-water pathogens",
      "policy_status": "Watch",
      "role": "Typhoidal Salmonella / imported sewage-associated watch item",
      "exposure_efficiency": 4.0,
      "health_consequence": 5.0,
      "source_pressure": 2.0,
      "persistence": 3.0,
      "bathing_evidence": 3.0,
      "national_score": 65.99999999999999,
      "sewage_fit": 5.0,
      "agriculture_fit": 0.0,
      "urban_fit": 1.0,
      "riverine_fit": 3.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 4.0,
      "site_relevance_score": 51.11111111111111,
      "final_score": 61.53333333333332,
      "short_rationale": "Severe human-restricted enteric pathogen; low routine UK bathing-water source pressure but relevant to sewage contamination plus imported/travel-associated cases."
    },
    {
      "id": 15,
      "pathogen": "Leptospira spp.",
      "category": "Conditional non-faecal recreational-water hazards",
      "policy_status": "Conditional",
      "role": "Conditional non-faecal / zoonotic recreational-water hazard",
      "exposure_efficiency": 3.0,
      "health_consequence": 4.0,
      "source_pressure": 2.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 65.0,
      "sewage_fit": 1.0,
      "agriculture_fit": 4.0,
      "urban_fit": 2.0,
      "riverine_fit": 5.0,
      "climate_fit": 2.0,
      "sentinel_relevance": 2.0,
      "site_relevance_score": 52.22222222222223,
      "final_score": 61.16666666666667,
      "short_rationale": "Classic freshwater recreational exposure hazard, particularly where rodents/livestock/wildlife contamination is plausible."
    },
    {
      "id": 16,
      "pathogen": "Vibrio spp. (non-cholera)",
      "category": "Conditional non-faecal recreational-water hazards",
      "policy_status": "Conditional",
      "role": "Conditional non-faecal recreational-water hazard",
      "exposure_efficiency": 3.0,
      "health_consequence": 4.0,
      "source_pressure": 2.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 65.0,
      "sewage_fit": 0.0,
      "agriculture_fit": 0.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 5.0,
      "sentinel_relevance": 3.0,
      "site_relevance_score": 41.11111111111111,
      "final_score": 57.83333333333333,
      "short_rationale": "Warm coastal/brackish-water hazard; priority rises under climate-emergence or wound-exposure scenarios."
    },
    {
      "id": 17,
      "pathogen": "Pseudomonas aeruginosa",
      "category": "Conditional non-faecal recreational-water hazards",
      "policy_status": "Watch",
      "role": "Conditional non-faecal recreational-water hazard",
      "exposure_efficiency": 2.0,
      "health_consequence": 3.0,
      "source_pressure": 3.0,
      "persistence": 5.0,
      "bathing_evidence": 4.0,
      "national_score": 64.0,
      "sewage_fit": 1.0,
      "agriculture_fit": 1.0,
      "urban_fit": 3.0,
      "riverine_fit": 4.0,
      "climate_fit": 3.0,
      "sentinel_relevance": 4.0,
      "site_relevance_score": 51.11111111111111,
      "final_score": 60.133333333333326,
      "short_rationale": "Opportunistic organism with ear/skin relevance; not a headline national faecal pathogen priority."
    },
    {
      "id": 18,
      "pathogen": "Legionella pneumophila",
      "category": "Conditional non-faecal recreational-water hazards",
      "policy_status": "Conditional",
      "role": "Conditional non-faecal / aerosolised-water hazard",
      "exposure_efficiency": 2.0,
      "health_consequence": 5.0,
      "source_pressure": 2.0,
      "persistence": 4.0,
      "bathing_evidence": 3.0,
      "national_score": 57.99999999999999,
      "sewage_fit": 1.0,
      "agriculture_fit": 0.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 5.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 38.88888888888889,
      "final_score": 52.266666666666666,
      "short_rationale": "Most relevant to artificial water features, showers, spas, warm freshwater, or aerosol-generating infrastructure rather than ordinary open-water ingestion."
    },
    {
      "id": 19,
      "pathogen": "Avian schistosomes (swimmer's itch)",
      "category": "Conditional non-faecal recreational-water hazards",
      "policy_status": "Watch",
      "role": "Conditional non-faecal recreational-water hazard",
      "exposure_efficiency": 2.0,
      "health_consequence": 1.0,
      "source_pressure": 2.0,
      "persistence": 4.0,
      "bathing_evidence": 4.0,
      "national_score": 51.0,
      "sewage_fit": 0.0,
      "agriculture_fit": 0.0,
      "urban_fit": 1.0,
      "riverine_fit": 4.0,
      "climate_fit": 2.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 24.444444444444446,
      "final_score": 43.03333333333333,
      "short_rationale": "Usually low severity but relevant to freshwater sites with bird/snail ecology and public concern."
    },
    {
      "id": 20,
      "pathogen": "Aeromonas spp.",
      "category": "Conditional non-faecal recreational-water hazards",
      "policy_status": "Watch",
      "role": "Watch / conditional non-core pathogen",
      "exposure_efficiency": 2.0,
      "health_consequence": 3.0,
      "source_pressure": 2.0,
      "persistence": 4.0,
      "bathing_evidence": 3.0,
      "national_score": 52.0,
      "sewage_fit": 1.0,
      "agriculture_fit": 1.0,
      "urban_fit": 3.0,
      "riverine_fit": 4.0,
      "climate_fit": 3.0,
      "sentinel_relevance": 3.0,
      "site_relevance_score": 47.77777777777777,
      "final_score": 50.73333333333333,
      "short_rationale": "Contextual wound/skin hazard in freshwater or warm-water settings."
    },
    {
      "id": 21,
      "pathogen": "Naegleria fowleri",
      "category": "Conditional non-faecal recreational-water hazards",
      "policy_status": "Watch",
      "role": "Conditional non-faecal / severe warm-freshwater hazard",
      "exposure_efficiency": 2.0,
      "health_consequence": 5.0,
      "source_pressure": 1.0,
      "persistence": 3.0,
      "bathing_evidence": 3.0,
      "national_score": 51.0,
      "sewage_fit": 0.0,
      "agriculture_fit": 0.0,
      "urban_fit": 0.0,
      "riverine_fit": 5.0,
      "climate_fit": 5.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 31.11111111111111,
      "final_score": 45.03333333333333,
      "short_rationale": "Severe warm freshwater hazard; priority rises only under specific warm-water immersion/nasal exposure scenarios."
    },
    {
      "id": 22,
      "pathogen": "Hepatitis E virus",
      "category": "Vulnerable-population / horizon watchlist",
      "policy_status": "Watch",
      "role": "Watchlist viral hazard",
      "exposure_efficiency": 3.0,
      "health_consequence": 4.0,
      "source_pressure": 3.0,
      "persistence": 3.0,
      "bathing_evidence": 2.0,
      "national_score": 57.99999999999999,
      "sewage_fit": 3.0,
      "agriculture_fit": 3.0,
      "urban_fit": 2.0,
      "riverine_fit": 3.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 45.55555555555556,
      "final_score": 54.26666666666666,
      "short_rationale": "Potential vulnerable-population concern, but bathing-water pathway is not a primary policy route."
    },
    {
      "id": 23,
      "pathogen": "Staphylococcus aureus / MRSA",
      "category": "Vulnerable-population / horizon watchlist",
      "policy_status": "Watch",
      "role": "Watch / conditional non-core pathogen",
      "exposure_efficiency": 2.0,
      "health_consequence": 3.0,
      "source_pressure": 3.0,
      "persistence": 3.0,
      "bathing_evidence": 3.0,
      "national_score": 55.00000000000001,
      "sewage_fit": 2.0,
      "agriculture_fit": 1.0,
      "urban_fit": 3.0,
      "riverine_fit": 3.0,
      "climate_fit": 2.0,
      "sentinel_relevance": 4.0,
      "site_relevance_score": 50.0,
      "final_score": 53.5,
      "short_rationale": "AMR relevance is high for MRSA, but routine bathing-water pathogen priority is lower than core enteric hazards."
    },
    {
      "id": 24,
      "pathogen": "Aliarcobacter butzleri",
      "category": "Vulnerable-population / horizon watchlist",
      "policy_status": "Watch",
      "role": "Watch / conditional non-core pathogen",
      "exposure_efficiency": 2.0,
      "health_consequence": 3.0,
      "source_pressure": 3.0,
      "persistence": 3.0,
      "bathing_evidence": 3.0,
      "national_score": 55.00000000000001,
      "sewage_fit": 2.0,
      "agriculture_fit": 4.0,
      "urban_fit": 2.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 3.0,
      "site_relevance_score": 54.44444444444445,
      "final_score": 54.833333333333336,
      "short_rationale": "Plausible emerging enteric water-associated organism; kept visible but not core."
    },
    {
      "id": 25,
      "pathogen": "Trichophyton spp.",
      "category": "Vulnerable-population / horizon watchlist",
      "policy_status": "Watch",
      "role": "Watch / conditional non-core pathogen",
      "exposure_efficiency": 2.0,
      "health_consequence": 1.0,
      "source_pressure": 3.0,
      "persistence": 3.0,
      "bathing_evidence": 3.0,
      "national_score": 49.00000000000001,
      "sewage_fit": 0.0,
      "agriculture_fit": 0.0,
      "urban_fit": 2.0,
      "riverine_fit": 3.0,
      "climate_fit": 2.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 24.444444444444446,
      "final_score": 41.63333333333334,
      "short_rationale": "Wet-surface/skin-scale transmission is plausible, but routine regulatory monitoring would be disproportionate."
    },
    {
      "id": 26,
      "pathogen": "Toxoplasma gondii",
      "category": "Vulnerable-population / horizon watchlist",
      "policy_status": "Watch",
      "role": "Vulnerable-population and faecal-runoff watchlist item",
      "exposure_efficiency": 2.0,
      "health_consequence": 5.0,
      "source_pressure": 2.0,
      "persistence": 4.0,
      "bathing_evidence": 2.0,
      "national_score": 53.0,
      "sewage_fit": 1.0,
      "agriculture_fit": 3.0,
      "urban_fit": 1.0,
      "riverine_fit": 4.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 36.666666666666664,
      "final_score": 48.099999999999994,
      "short_rationale": "Important for pregnancy and immunocompromised groups; bathing pathway is less direct than for norovirus or Cryptosporidium."
    },
    {
      "id": 27,
      "pathogen": "Scedosporium apiospermum",
      "category": "Rare severe / opportunistic water-associated hazards",
      "policy_status": "Watch",
      "role": "Rare severe mould / near-drowning or trauma watchlist",
      "exposure_efficiency": 1.0,
      "health_consequence": 5.0,
      "source_pressure": 1.0,
      "persistence": 3.0,
      "bathing_evidence": 2.0,
      "national_score": 41.0,
      "sewage_fit": 0.0,
      "agriculture_fit": 0.0,
      "urban_fit": 1.0,
      "riverine_fit": 3.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 18.88888888888889,
      "final_score": 34.36666666666667,
      "short_rationale": "High-consequence opportunistic mould; should be visible for incident protocols, not ranked alongside norovirus or STEC."
    },
    {
      "id": 28,
      "pathogen": "Lomentospora prolificans",
      "category": "Rare severe / opportunistic water-associated hazards",
      "policy_status": "Watch",
      "role": "Rare severe mould / immunocompromised or trauma watchlist",
      "exposure_efficiency": 1.0,
      "health_consequence": 5.0,
      "source_pressure": 1.0,
      "persistence": 3.0,
      "bathing_evidence": 2.0,
      "national_score": 41.0,
      "sewage_fit": 0.0,
      "agriculture_fit": 0.0,
      "urban_fit": 1.0,
      "riverine_fit": 3.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 18.88888888888889,
      "final_score": 34.36666666666667,
      "short_rationale": "Rare but severe environmental mould; kept visible for specialist incident planning."
    },
    {
      "id": 29,
      "pathogen": "C. difficile",
      "category": "Not in core bathing-water pathogen ranking",
      "policy_status": "Not routine target",
      "role": "Not in core bathing-water pathogen ranking",
      "exposure_efficiency": 2.0,
      "health_consequence": 4.0,
      "source_pressure": 2.0,
      "persistence": 5.0,
      "bathing_evidence": 2.0,
      "national_score": 52.0,
      "sewage_fit": 3.0,
      "agriculture_fit": 2.0,
      "urban_fit": 2.0,
      "riverine_fit": 3.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 3.0,
      "site_relevance_score": 48.88888888888889,
      "final_score": 51.06666666666666,
      "short_rationale": "Avoid treating as high priority solely because spores persist; use only for specialist investigation."
    },
    {
      "id": 30,
      "pathogen": "Aspergillus spp.",
      "category": "Not in core bathing-water pathogen ranking",
      "policy_status": "Not routine target",
      "role": "Not in core bathing-water pathogen ranking",
      "exposure_efficiency": 1.0,
      "health_consequence": 4.0,
      "source_pressure": 1.0,
      "persistence": 3.0,
      "bathing_evidence": 1.0,
      "national_score": 32.99999999999999,
      "sewage_fit": 0.0,
      "agriculture_fit": 0.0,
      "urban_fit": 1.0,
      "riverine_fit": 3.0,
      "climate_fit": 2.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 21.11111111111111,
      "final_score": 29.433333333333326,
      "short_rationale": "Better handled as environmental fungal awareness than routine bathing-water monitoring."
    },
    {
      "id": 31,
      "pathogen": "Candida spp. / C. auris",
      "category": "Not in core bathing-water pathogen ranking",
      "policy_status": "Not routine target",
      "role": "Not in core bathing-water pathogen ranking",
      "exposure_efficiency": 1.0,
      "health_consequence": 4.0,
      "source_pressure": 2.0,
      "persistence": 2.0,
      "bathing_evidence": 1.0,
      "national_score": 36.0,
      "sewage_fit": 2.0,
      "agriculture_fit": 0.0,
      "urban_fit": 1.0,
      "riverine_fit": 2.0,
      "climate_fit": 1.0,
      "sentinel_relevance": 1.0,
      "site_relevance_score": 24.444444444444446,
      "final_score": 32.53333333333333,
      "short_rationale": "Not a routine bathing-water quality target."
    }
  ],
  "evidence_basis": [
    {
      "element": "Exposure efficiency / infectious dose",
      "meaning": "How easily a hazard can infect once exposure occurs.",
      "why_exists": "A very low infectious dose can make a hazard important even when it is not the most common organism."
    },
    {
      "element": "Health consequence / severity",
      "meaning": "How serious the outcome can be.",
      "why_exists": "Some hazards deserve more attention because their consequences are more severe."
    },
    {
      "element": "Source pressure / shedding",
      "meaning": "Simple summary of how much of the hazard is likely to reach the environment.",
      "why_exists": "This keeps the simplified model short while preserving the idea of both shedding and commonness."
    },
    {
      "element": "Persistence / transport",
      "meaning": "How well the hazard survives or moves through water or sediment.",
      "why_exists": "Persistent hazards remain relevant for longer and can be harder to control."
    },
    {
      "element": "Bathing evidence / confidence",
      "meaning": "How strongly the hazard is supported as a bathing-water concern.",
      "why_exists": "This anchors the simplified model to the evidence base."
    },
    {
      "element": "Human sewage fit",
      "meaning": "How strongly the hazard is linked to sewage or wastewater pathways.",
      "why_exists": "A high sewage setting should lift sewage-linked hazards."
    },
    {
      "element": "Agriculture / livestock fit",
      "meaning": "How strongly the hazard is linked to livestock, slurry or agricultural runoff.",
      "why_exists": "A high agriculture setting should lift livestock/runoff hazards."
    },
    {
      "element": "Urban runoff / stormwater fit",
      "meaning": "How strongly the hazard is linked to urban drainage, stormwater or misconnection pathways.",
      "why_exists": "Urban runoff is treated as a pathway / pressure score, not proof of the original biological reservoir."
    },
    {
      "element": "Riverine / event fit",
      "meaning": "How much the hazard is linked to inland/freshwater sites and short-term event dynamics.",
      "why_exists": "This keeps one simple river/event lever visible."
    },
    {
      "element": "Warm / climate / aerosol / bloom fit",
      "meaning": "How much the hazard becomes more relevant in warm, stagnant, aerosolised, brackish or bloom-prone conditions.",
      "why_exists": "This keeps climate- and condition-sensitive hazards visible without overwhelming the front end."
    },
    {
      "element": "Sentinel-load relevance",
      "meaning": "How strongly the hazard responds to high measured E. coli / enterococci burden.",
      "why_exists": "This lets the simplified model respond to high bacterial loads without claiming that the indicator organisms are the only pathogens present."
    },
    {
      "element": "Model category",
      "meaning": "What kind of row it is in the risk framework.",
      "why_exists": "This stops the reader confusing a core pathogen, a sentinel organism, and a separate hazard module."
    },
    {
      "element": "National policy status",
      "meaning": "How national policy should treat the row: core, conditional, watch, or separate module.",
      "why_exists": "This shows whether a row is central to national attention or mainly situational."
    },
    {
      "element": "Model role",
      "meaning": "What job the row performs inside the workbook.",
      "why_exists": "This shows whether the row is being used as a ranked hazard, a warning trigger, or a separate module."
    },
    {
      "element": "National score",
      "meaning": "The score produced by the five visible hazard criteria and the editable national weights.",
      "why_exists": "This is the baseline hazard score before any site setting is applied."
    },
    {
      "element": "Site relevance score",
      "meaning": "How relevant the hazard is at the current site, given the user-selected site levers.",
      "why_exists": "This lets one workbook behave like a sewage site, agricultural site, river site, or warm/brackish site."
    },
    {
      "element": "Final score",
      "meaning": "The overall score used for ranking.",
      "why_exists": "This is the number a novice user should watch when testing different site settings."
    },
    {
      "element": "Sentinel / trigger microbes",
      "meaning": "Rows such as generic E. coli and intestinal enterococci that matter hugely for warning and compliance.",
      "why_exists": "They are not downgraded; they are separated because they do a different regulatory job."
    }
  ],
  "references": [
    {
      "short_name": "WHO recreational-water guidance",
      "title": "World Health Organization. Guidelines on Recreational Water Quality: Volume 1 - Coastal and Fresh Waters.",
      "why_used": "Public-health and recreational-water risk framework; supports separate cyanobacteria handling.",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK572625/",
      "notes": "Core public-health framing."
    },
    {
      "short_name": "EPA recreational-water criteria",
      "title": "U.S. EPA. Recreational Water Quality Criteria.",
      "why_used": "Supports the use of E. coli and enterococci as swimmer-illness sentinel organisms.",
      "url": "https://www.epa.gov/sites/default/files/2015-10/documents/rwqc2012.pdf",
      "notes": "Important for sentinel logic."
    },
    {
      "short_name": "EA pathogen review",
      "title": "Environment Agency. Overview of potential human pathogens in the environment - report.",
      "why_used": "Provides the broader environmental-pathogen inventory and the logic for what does and does not belong in a bathing-water ranking.",
      "url": "https://assets.publishing.service.gov.uk/media/67090ba2e84ae1fd8592f203/Overview_of_potential_human_pathogens_in_the_environment_-_report.pdf",
      "notes": "Used heavily."
    },
    {
      "short_name": "Testing the Waters",
      "title": "Royal Academy of Engineering / NEPC. Testing the Waters: priorities for mitigating health risks from wastewater pollution.",
      "why_used": "Supports sewage and public-health framing, and the importance of faecal-organism exposure.",
      "url": "https://nepc.raeng.org.uk/media/qi2eyivp/testing-the-waters-priorities-for-mitigating-health-risks-from-wastewater-pollution.pdf",
      "notes": "Used to justify high faecal-load concern."
    },
    {
      "short_name": "Independent Water Commission",
      "title": "Independent Water Commission final report.",
      "why_used": "Supports amenity/public-health framing and systems thinking.",
      "url": "https://www.gov.uk/government/publications/independent-water-commission-final-report",
      "notes": "Background context"
    },
    {
      "short_name": "Forecasting review",
      "title": "Krupska et al. Forecasting bathing water quality in the UK: A critical review.",
      "why_used": "Supports the importance of riverine/event dynamics and warning logic.",
      "url": "https://onlinelibrary.wiley.com/doi/10.1002/wat2.1718",
      "notes": "Simplified here into one river/event lever."
    },
    {
      "short_name": "Faecal contamination report",
      "title": "GOV.UK. Faecal contamination: challenges for the water environment.",
      "why_used": "Supports multi-source contamination, river/coastal differences and source attribution challenges.",
      "url": "https://www.gov.uk/government/publications/faecal-contamination-challenges-for-the-water-environment/faecal-contamination-challenges-for-the-water-environment",
      "notes": "Used for source-pathway interpretation."
    }
  ],
  "defaults": {
    "site_levers": {
      "human_sewage": 4.0,
      "agriculture": 3.0,
      "urban": 3.0,
      "riverine": 3.0,
      "climate": 2.0,
      "sentinel": 3.0,
      "site_influence": 30.0
    },
    "national_weights": {
      "exposure_efficiency": 25.0,
      "health_consequence": 15.0,
      "source_pressure": 25.0,
      "persistence": 10.0,
      "bathing_evidence": 25.0
    }
  }
};

// App State
const state = {
  siteLevers: { ...PATHOGEN_DATABASE.defaults.site_levers },
  nationalWeights: { ...PATHOGEN_DATABASE.defaults.national_weights },
  searchQuery: "",
  activeFilters: {
    category: "all",
    policyStatus: "all"
  },
  sortColumn: "final_score",
  sortDirection: "desc", // "desc" or "asc"
  activeTab: "ranking",
  selectedPathogenId: null
};

// Calculate scores dynamically for a pathogen
function calculatePathogenScores(pathogen) {
  // 1. National Hazard Score
  const w_exp = state.nationalWeights.exposure_efficiency;
  const w_sev = state.nationalWeights.health_consequence;
  const w_shed = state.nationalWeights.source_pressure;
  const w_pers = state.nationalWeights.persistence;
  const w_evid = state.nationalWeights.bathing_evidence;
  
  const sumNationalWeights = w_exp + w_sev + w_shed + w_pers + w_evid;
  
  const weightedNationalSum = 
    (pathogen.exposure_efficiency * w_exp) +
    (pathogen.health_consequence * w_sev) +
    (pathogen.source_pressure * w_shed) +
    (pathogen.persistence * w_pers) +
    (pathogen.bathing_evidence * w_evid);
    
  const nationalScore = sumNationalWeights === 0 ? 0 : (weightedNationalSum / sumNationalWeights) / 5 * 100;
  
  // 2. Site Relevance Score
  const l_sew = state.siteLevers.human_sewage;
  const l_agr = state.siteLevers.agriculture;
  const l_urb = state.siteLevers.urban;
  const l_riv = state.siteLevers.riverine;
  const l_clm = state.siteLevers.climate;
  const l_sent = state.siteLevers.sentinel;
  
  const sumLevers = l_sew + l_agr + l_urb + l_riv + l_clm + l_sent;
  
  const weightedSiteSum = 
    (pathogen.sewage_fit * l_sew) +
    (pathogen.agriculture_fit * l_agr) +
    (pathogen.urban_fit * l_urb) +
    (pathogen.riverine_fit * l_riv) +
    (pathogen.climate_fit * l_clm) +
    (pathogen.sentinel_relevance * l_sent);
    
  const siteRelevanceScore = sumLevers === 0 ? 0 : (weightedSiteSum / sumLevers) / 5 * 100;
  
  // 3. Final blended Score
  const siteInfluenceFraction = state.siteLevers.site_influence / 100;
  const finalScore = nationalScore * (1 - siteInfluenceFraction) + siteRelevanceScore * siteInfluenceFraction;
  
  // 4. Priority Band label
  let priorityBand = "Low";
  if (finalScore >= 75) {
    priorityBand = "Very High";
  } else if (finalScore >= 60) {
    priorityBand = "High";
  } else if (finalScore >= 45) {
    priorityBand = "Medium";
  }
  
  return {
    nationalScore,
    siteRelevanceScore,
    finalScore,
    priorityBand
  };
}

// Run calculations for all pathogens and assign dynamic ranks
function getRankedPathogens() {
  // Calculate raw scores first
  const items = PATHOGEN_DATABASE.pathogen_ranking.map(p => {
    const scores = calculatePathogenScores(p);
    return {
      ...p,
      ...scores
    };
  });
  
  // Sort descending by final_score.
  // Excel use: 1+COUNTIF($S$2:$S$32,">"&S2)+COUNTIFS($S$2:S2,S2)-1
  // This means if final_score is equal, it uses the sheet row index as a tie breaker.
  // In JavaScript, to mimic this exactly, we sort by finalScore (descending) and if equal,
  // we sort by the original `id` (ascending).
  items.sort((a, b) => {
    if (Math.abs(a.finalScore - b.finalScore) > 0.000001) {
      return b.finalScore - a.finalScore; // descending by score
    }
    return a.id - b.id; // ascending by original sheet order (id)
  });
  
  // Assign rank sequentially
  items.forEach((item, index) => {
    item.currentRank = index + 1;
  });
  
  return items;
}

// DOM Update Helpers
function updateSidebar(rankedItems) {
  const sidebarList = document.getElementById("top-10-list");
  if (!sidebarList) return;
  
  // Top 10 filter
  const top10 = rankedItems.slice(0, 10);
  
  sidebarList.innerHTML = top10.map(item => {
    const bandClass = item.priorityBand.toLowerCase().replace(" ", "");
    return `
      <div class="top-item priority-${bandClass}" onclick="openPathogenDetail(${item.id})">
        <div class="top-rank">${item.currentRank}</div>
        <div class="top-info">
          <div class="top-name">${item.pathogen}</div>
          <div class="top-meta">
            <span class="badge-policy ${item.policy_status.toLowerCase()}">${item.policy_status}</span>
            <span class="top-score">${item.finalScore.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function updateMainTable(rankedItems) {
  const tableBody = document.getElementById("table-body");
  if (!tableBody) return;
  
  // Filter items
  let filteredItems = rankedItems.filter(item => {
    // Search filter
    const matchesSearch = item.pathogen.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          item.short_rationale.toLowerCase().includes(state.searchQuery.toLowerCase());
    
    // Category filter
    const matchesCat = state.activeFilters.category === "all" || item.category === state.activeFilters.category;
    
    // Policy filter
    const matchesPolicy = state.activeFilters.policyStatus === "all" || item.policy_status === state.activeFilters.policyStatus;
    
    return matchesSearch && matchesCat && matchesPolicy;
  });
  
  // Sort table items
  if (state.sortColumn) {
    filteredItems.sort((a, b) => {
      let valA = a[state.sortColumn];
      let valB = b[state.sortColumn];
      
      // Special sort mappings if needed
      if (state.sortColumn === "rank") {
        valA = a.currentRank;
        valB = b.currentRank;
      }
      
      if (typeof valA === "string") {
        return state.sortDirection === "asc" 
          ? valA.localeCompare(valB) 
          : valB.localeCompare(valA);
      } else {
        return state.sortDirection === "asc" 
          ? valA - valB 
          : valB - valA;
      }
    });
  }
  
  if (filteredItems.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No pathogens found matching the filters.
        </td>
      </tr>
    `;
    return;
  }
  
  tableBody.innerHTML = filteredItems.map(item => {
    const bandClass = item.priorityBand.toLowerCase().replace(" ", "");
    return `
      <tr onclick="openPathogenDetail(${item.id})">
        <td class="col-rank">${item.currentRank}</td>
        <td class="col-pathogen">${item.pathogen}</td>
        <td class="col-category" title="${item.category}">${item.category}</td>
        <td><span class="badge-policy ${item.policy_status.toLowerCase()}">${item.policy_status}</span></td>
        <td class="score-cell score-national">${item.nationalScore.toFixed(1)}</td>
        <td class="score-cell score-site">${item.siteRelevanceScore.toFixed(1)}</td>
        <td class="score-cell"><span class="score-final">${item.finalScore.toFixed(1)}</span></td>
        <td class="priority-cell">
          <span class="badge-priority ${bandClass}">${item.priorityBand}</span>
        </td>
      </tr>
    `;
  }).join("");
}

// Initialize Tab contents for Evidence Basis & References
function initializeInfoTabs() {
  // Evidence Basis
  const evidenceGrid = document.getElementById("evidence-grid");
  if (evidenceGrid) {
    evidenceGrid.innerHTML = PATHOGEN_DATABASE.evidence_basis.map(item => `
      <div class="doc-card">
        <div class="doc-card-title">${item.element}</div>
        <div class="doc-card-desc">${item.meaning}</div>
        <div class="doc-card-why"><strong>Why it exists:</strong> ${item.why_exists}</div>
      </div>
    `).join("");
  }
  
  // References
  const refList = document.getElementById("ref-list");
  if (refList) {
    refList.innerHTML = PATHOGEN_DATABASE.references.map(item => `
      <div class="ref-item">
        <div class="ref-header">
          <div class="ref-name">${item.short_name}</div>
          ${item.url ? `<a href="${item.url}" target="_blank" class="ref-link">
            Link <svg style="width:12px;height:12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round' stroke-linejoin='round' stroke-width='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'/%3E%3C/svg%3E
          </a>` : ''}
        </div>
        <div class="ref-title">${item.title}</div>
        <div class="ref-why"><strong>Application:</strong> ${item.why_used}</div>
        ${item.notes ? `<div class="ref-notes">${item.notes}</div>` : ''}
      </div>
    `).join("");
  }
}

// Render slider controls dynamically to avoid boilerplate in HTML
function renderSliderControls() {
  const siteControls = document.getElementById("site-controls-list");
  if (siteControls) {
    const siteLeversData = [
      { key: "human_sewage", label: "Human Sewage / CSO Influence", desc: "CSO influence, treated effluent, sewage network discharges.", min: 0, max: 5, step: 1 },
      { key: "agriculture", label: "Agriculture / Livestock Runoff", desc: "Slurry, cattle pasture, farm manure runoff pathways.", min: 0, max: 5, step: 1 },
      { key: "urban", label: "Urban Runoff / Stormwater", desc: "Dog/bird fouling, street drainage, misconnections.", min: 0, max: 5, step: 1 },
      { key: "riverine", label: "Riverine / Event Variability", desc: "Rainfall dependency, flashy inland river system variability.", min: 0, max: 5, step: 1 },
      { key: "climate", label: "Warm / Bloom Conditions", desc: "Stagnant, brackish, aerosolising, or warm eutrophic conditions.", min: 0, max: 5, step: 1 },
      { key: "sentinel", label: "Measured Sentinel Burden", desc: "High baseline generic E. coli / enterococci levels.", min: 0, max: 5, step: 1 }
    ];
    
    siteControls.innerHTML = siteLeversData.map(c => `
      <div class="control-item">
        <div class="control-label-row">
          <label class="control-label" for="slider-${c.key}">
            ${c.label}
            <div class="control-desc">${c.desc}</div>
          </label>
          <span class="control-value" id="val-${c.key}">${state.siteLevers[c.key]}</span>
        </div>
        <div class="slider-container">
          <span style="font-size:0.75rem;color:var(--text-muted);">0</span>
          <input type="range" class="custom-slider" id="slider-${c.key}" min="${c.min}" max="${c.max}" step="${c.step}" value="${state.siteLevers[c.key]}">
          <span style="font-size:0.75rem;color:var(--text-muted);">5</span>
        </div>
      </div>
    `).join("");
    
    // Add event listeners
    siteLeversData.forEach(c => {
      const slider = document.getElementById(`slider-${c.key}`);
      const valDisplay = document.getElementById(`val-${c.key}`);
      slider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        state.siteLevers[c.key] = val;
        valDisplay.textContent = val;
        recalculateAndRender();
      });
    });
  }
  
  // Site influence slider
  const influenceSlider = document.getElementById("slider-site_influence");
  const influenceVal = document.getElementById("val-site_influence");
  if (influenceSlider && influenceVal) {
    influenceSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      state.siteLevers.site_influence = val;
      influenceVal.textContent = val + "%";
      recalculateAndRender();
    });
  }
  
  const nationalControls = document.getElementById("national-controls-list");
  if (nationalControls) {
    const natWeightsData = [
      { key: "exposure_efficiency", label: "Exposure Efficiency / Dose", desc: "How little environmental exposure is required to cause infection.", min: 0, max: 100, step: 5 },
      { key: "health_consequence", label: "Health Severity / Consequence", desc: "Seriousness of illness outcomes in infected individuals.", min: 0, max: 100, step: 5 },
      { key: "source_pressure", label: "Source Pressure / Shedding", desc: "Environmental loading level and population occurrence rates.", min: 0, max: 100, step: 5 },
      { key: "persistence", label: "Persistence / Transport", desc: "Environmental decay half-life and survival in waters.", min: 0, max: 100, step: 5 },
      { key: "bathing_evidence", label: "Bathing Evidence / Confidence", desc: "Direct epidemiological links in swimming contexts.", min: 0, max: 100, step: 5 }
    ];
    
    nationalControls.innerHTML = natWeightsData.map(c => `
      <div class="control-item">
        <div class="control-label-row">
          <label class="control-label" for="slider-${c.key}">
            ${c.label}
            <div class="control-desc">${c.desc}</div>
          </label>
          <span class="control-value" id="val-${c.key}">${state.nationalWeights[c.key]}</span>
        </div>
        <div class="slider-container">
          <span style="font-size:0.75rem;color:var(--text-muted);">0</span>
          <input type="range" class="custom-slider" id="slider-${c.key}" min="${c.min}" max="${c.max}" step="${c.step}" value="${state.nationalWeights[c.key]}">
          <span style="font-size:0.75rem;color:var(--text-muted);">100</span>
        </div>
      </div>
    `).join("");
    
    // Add event listeners
    natWeightsData.forEach(c => {
      const slider = document.getElementById(`slider-${c.key}`);
      const valDisplay = document.getElementById(`val-${c.key}`);
      slider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        state.nationalWeights[c.key] = val;
        valDisplay.textContent = val;
        
        // Update total weight indicator
        updateTotalWeightIndicator();
        recalculateAndRender();
      });
    });
  }
}

function updateTotalWeightIndicator() {
  const totalDisplay = document.getElementById("val-total_weight");
  if (totalDisplay) {
    const total = 
      state.nationalWeights.exposure_efficiency +
      state.nationalWeights.health_consequence +
      state.nationalWeights.source_pressure +
      state.nationalWeights.persistence +
      state.nationalWeights.bathing_evidence;
    totalDisplay.textContent = total;
    if (total === 100) {
      totalDisplay.style.color = "var(--ukceh-green)";
    } else {
      totalDisplay.style.color = "var(--ukceh-grey-blue)";
    }
  }
}

// Primary execution loop
function recalculateAndRender() {
  const rankedItems = getRankedPathogens();
  updateSidebar(rankedItems);
  updateMainTable(rankedItems);
}

// Reset State values to Excel defaults
function resetToDefaults() {
  state.siteLevers = { ...PATHOGEN_DATABASE.defaults.site_levers };
  state.nationalWeights = { ...PATHOGEN_DATABASE.defaults.national_weights };
  
  // Sync sliders
  Object.keys(state.siteLevers).forEach(key => {
    const slider = document.getElementById(`slider-${key}`);
    const valDisplay = document.getElementById(`val-${key}`);
    if (slider) slider.value = state.siteLevers[key];
    if (valDisplay) {
      valDisplay.textContent = state.siteLevers[key] + (key === 'site_influence' ? '%' : '');
    }
  });
  
  Object.keys(state.nationalWeights).forEach(key => {
    const slider = document.getElementById(`slider-${key}`);
    const valDisplay = document.getElementById(`val-${key}`);
    if (slider) slider.value = state.nationalWeights[key];
    if (valDisplay) valDisplay.textContent = state.nationalWeights[key];
  });
  
  updateTotalWeightIndicator();
  recalculateAndRender();
}

// Tab switching logic
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;
      state.activeTab = tabName;
      
      // Update buttons
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Update views
      document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
      });
      document.getElementById(`tab-content-${tabName}`).classList.add("active");
      
      // Initialize Leaflet map when map tab becomes active to prevent rendering bugs
      if (tabName === "map") {
        setTimeout(initMap, 50);
      }
    });
  });
}

// Setup table sorting listeners
function setupTableSorting() {
  const headers = document.querySelectorAll(".data-table th[data-sort]");
  headers.forEach(h => {
    h.addEventListener("click", () => {
      const col = h.dataset.sort;
      if (state.sortColumn === col) {
        state.sortDirection = state.sortDirection === "desc" ? "asc" : "desc";
      } else {
        state.sortColumn = col;
        state.sortDirection = "desc";
      }
      
      // Update UI classes
      headers.forEach(head => {
        head.classList.remove("sort-asc", "sort-desc");
      });
      h.classList.add(state.sortDirection === "asc" ? "sort-asc" : "sort-desc");
      
      recalculateAndRender();
    });
  });
}

// Search & Filter event listeners
function setupFilters() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      recalculateAndRender();
    });
  }
  
  const categoryFilter = document.getElementById("filter-category");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      state.activeFilters.category = e.target.value;
      recalculateAndRender();
    });
  }
  
  const policyFilter = document.getElementById("filter-policy");
  if (policyFilter) {
    policyFilter.addEventListener("change", (e) => {
      state.activeFilters.policyStatus = e.target.value;
      recalculateAndRender();
    });
  }
}

// Modal handling
function openPathogenDetail(id) {
  const pathogen = PATHOGEN_DATABASE.pathogen_ranking.find(p => p.id === id);
  if (!pathogen) return;
  
  const scores = calculatePathogenScores(pathogen);
  const fullData = { ...pathogen, ...scores };
  
  // Set content
  document.getElementById("modal-pathogen-name").textContent = fullData.pathogen;
  document.getElementById("modal-category-text").textContent = fullData.category;
  document.getElementById("modal-policy-badge").textContent = fullData.policy_status;
  
  // Reset classes for policy badge
  const badge = document.getElementById("modal-policy-badge");
  badge.className = "badge-policy " + fullData.policy_status.toLowerCase();
  
  // Rationale
  document.getElementById("modal-rationale-text").textContent = fullData.short_rationale || "No rationale details provided in the model.";
  
  // Scores
  document.getElementById("modal-score-national").textContent = fullData.nationalScore.toFixed(1) + "%";
  document.getElementById("modal-score-site").textContent = fullData.siteRelevanceScore.toFixed(1) + "%";
  document.getElementById("modal-score-final").textContent = fullData.finalScore.toFixed(1) + "%";
  document.getElementById("modal-score-rank").textContent = "#" + fullData.currentRank;
  
  const priorityBadge = document.getElementById("modal-score-priority");
  priorityBadge.textContent = fullData.priorityBand;
  priorityBadge.className = "badge-priority " + fullData.priorityBand.toLowerCase().replace(" ", "");
  
  // Criteria scores mapping
  const criteria = [
    { id: "exposure_efficiency", key: "exposure_efficiency" },
    { id: "health_consequence", key: "health_consequence" },
    { id: "source_pressure", key: "source_pressure" },
    { id: "persistence", key: "persistence" },
    { id: "bathing_evidence", key: "bathing_evidence" }
  ];
  
  criteria.forEach(c => {
    const val = fullData[c.key];
    const container = document.getElementById(`modal-stat-${c.id}`);
    if (container) {
      container.innerHTML = `
        <span class="stat-score-num">${val}</span>
        <div style="display:flex;gap:3px;">
          ${[1,2,3,4,5].map(dot => `
            <div class="score-dot ${dot <= val ? 'active' : ''}"></div>
          `).join("")}
        </div>
      `;
    }
  });
  
  // Site fits mapping
  const siteFits = [
    { id: "sewage_fit", key: "sewage_fit" },
    { id: "agriculture_fit", key: "agriculture_fit" },
    { id: "urban_fit", key: "urban_fit" },
    { id: "riverine_fit", key: "riverine_fit" },
    { id: "climate_fit", key: "climate_fit" },
    { id: "sentinel_relevance", key: "sentinel_relevance" }
  ];
  
  siteFits.forEach(sf => {
    const val = fullData[sf.key];
    const container = document.getElementById(`modal-stat-${sf.id}`);
    if (container) {
      container.innerHTML = `
        <span class="stat-score-num">${val}</span>
        <div style="display:flex;gap:3px;">
          ${[1,2,3,4,5].map(dot => `
            <div class="score-dot ${dot <= val ? 'active' : ''}"></div>
          `).join("")}
        </div>
      `;
    }
  });
  
  // Math Formula Breakdowns
  const w_exp = state.nationalWeights.exposure_efficiency;
  const w_sev = state.nationalWeights.health_consequence;
  const w_shed = state.nationalWeights.source_pressure;
  const w_pers = state.nationalWeights.persistence;
  const w_evid = state.nationalWeights.bathing_evidence;
  
  const sumWeights = w_exp + w_sev + w_shed + w_pers + w_evid;
  const weightedSumNat = 
    (pathogen.exposure_efficiency * w_exp) +
    (pathogen.health_consequence * w_sev) +
    (pathogen.source_pressure * w_shed) +
    (pathogen.persistence * w_pers) +
    (pathogen.bathing_evidence * w_evid);
    
  const formulaNat = `National Score = ((${pathogen.exposure_efficiency} * ${w_exp}) + (${pathogen.health_consequence} * ${w_sev}) + (${pathogen.source_pressure} * ${w_shed}) + (${pathogen.persistence} * ${w_pers}) + (${pathogen.bathing_evidence} * ${w_evid})) / ${sumWeights} / 5 * 100`;
  document.getElementById("formula-national").textContent = formulaNat;
  
  const l_sew = state.siteLevers.human_sewage;
  const l_agr = state.siteLevers.agriculture;
  const l_urb = state.siteLevers.urban;
  const l_riv = state.siteLevers.riverine;
  const l_clm = state.siteLevers.climate;
  const l_sent = state.siteLevers.sentinel;
  
  const sumLevers = l_sew + l_agr + l_urb + l_riv + l_clm + l_sent;
  const weightedSumSite = 
    (pathogen.sewage_fit * l_sew) +
    (pathogen.agriculture_fit * l_agr) +
    (pathogen.urban_fit * l_urb) +
    (pathogen.riverine_fit * l_riv) +
    (pathogen.climate_fit * l_clm) +
    (pathogen.sentinel_relevance * l_sent);
    
  const formulaSite = `Site Score = ((${pathogen.sewage_fit} * ${l_sew}) + (${pathogen.agriculture_fit} * ${l_agr}) + (${pathogen.urban_fit} * ${l_urb}) + (${pathogen.riverine_fit} * ${l_riv}) + (${pathogen.climate_fit} * ${l_clm}) + (${pathogen.sentinel_relevance} * ${l_sent})) / ${sumLevers} / 5 * 100`;
  document.getElementById("formula-site").textContent = formulaSite;
  
  const influence = state.siteLevers.site_influence;
  const formulaFinal = `Final Score = ${fullData.nationalScore.toFixed(2)} * (1 - ${influence}/100) + ${fullData.siteRelevanceScore.toFixed(2)} * (${influence}/100)`;
  document.getElementById("formula-final").textContent = formulaFinal;
  
  // Show Modal
  const modal = document.getElementById("detail-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("detail-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// GEOSPATIAL MAP DATABASE & LOGIC (LEAFLET)
// ==========================================

// Pre-cached UK Bathing Waters representing regional variations & levers
const MAPPED_SITES = [
  {
    id: 1001,
    name: "River Wharfe at Ilkley",
    lat: 53.9298,
    lng: -1.8211,
    region: "Yorkshire (Inland River)",
    undertaker: "Yorkshire Water",
    classification: "Poor",
    levers: {
      human_sewage: 4,
      agriculture: 4,
      urban: 3,
      riverine: 5,
      climate: 1,
      sentinel: 5,
      site_influence: 50
    }
  },
  {
    id: 1002,
    name: "Brighton Central Beach",
    lat: 50.8202,
    lng: -0.1415,
    region: "South East (Coastal)",
    undertaker: "Southern Water",
    classification: "Good",
    levers: {
      human_sewage: 3,
      agriculture: 1,
      urban: 4,
      riverine: 1,
      climate: 2,
      sentinel: 2,
      site_influence: 30
    }
  },
  {
    id: 1003,
    name: "Windermere (Rayrigg Meadow)",
    lat: 54.3725,
    lng: -2.9189,
    region: "North West (Lake)",
    undertaker: "United Utilities",
    classification: "Sufficient",
    levers: {
      human_sewage: 4,
      agriculture: 3,
      urban: 2,
      riverine: 2,
      climate: 3,
      sentinel: 3,
      site_influence: 40
    }
  },
  {
    id: 1004,
    name: "Blackpool Sands (Devon)",
    lat: 50.2743,
    lng: -3.6121,
    region: "South West (Coastal)",
    undertaker: "South West Water",
    classification: "Excellent",
    levers: {
      human_sewage: 1,
      agriculture: 2,
      urban: 1,
      riverine: 1,
      climate: 2,
      sentinel: 1,
      site_influence: 20
    }
  },
  {
    id: 1005,
    name: "Camber Sands",
    lat: 50.9329,
    lng: 0.7963,
    region: "South East (Coastal)",
    undertaker: "Southern Water",
    classification: "Excellent",
    levers: {
      human_sewage: 1,
      agriculture: 2,
      urban: 1,
      riverine: 1,
      climate: 2,
      sentinel: 1,
      site_influence: 20
    }
  },
  {
    id: 1006,
    name: "West Wittering Beach",
    lat: 50.7816,
    lng: -0.9024,
    region: "South East (Coastal)",
    undertaker: "Southern Water",
    classification: "Excellent",
    levers: {
      human_sewage: 1,
      agriculture: 1,
      urban: 1,
      riverine: 1,
      climate: 2,
      sentinel: 1,
      site_influence: 20
    }
  },
  {
    id: 1007,
    name: "Spittal Beach (Tweed)",
    lat: 55.7569,
    lng: -1.9888,
    region: "North East (Coastal)",
    undertaker: "Northumbrian Water",
    classification: "Good",
    levers: {
      human_sewage: 3,
      agriculture: 3,
      urban: 2,
      riverine: 3,
      climate: 2,
      sentinel: 2,
      site_influence: 30
    }
  },
  {
    id: 1008,
    name: "Bamburgh Castle",
    lat: 55.6110,
    lng: -1.7079,
    region: "North East (Coastal)",
    undertaker: "Northumbrian Water",
    classification: "Excellent",
    levers: {
      human_sewage: 1,
      agriculture: 2,
      urban: 1,
      riverine: 1,
      climate: 2,
      sentinel: 1,
      site_influence: 20
    }
  },
  {
    id: 1009,
    name: "Scarborough South Bay",
    lat: 54.2798,
    lng: -0.3956,
    region: "Yorkshire (Coastal)",
    undertaker: "Yorkshire Water",
    classification: "Poor",
    levers: {
      human_sewage: 4,
      agriculture: 3,
      urban: 4,
      riverine: 3,
      climate: 2,
      sentinel: 5,
      site_influence: 50
    }
  },
  {
    id: 1010,
    name: "River Thames at Port Meadow (Oxford)",
    lat: 51.7765,
    lng: -1.2825,
    region: "Thames (Inland River)",
    undertaker: "Thames Water",
    classification: "Sufficient",
    levers: {
      human_sewage: 5,
      agriculture: 3,
      urban: 3,
      riverine: 4,
      climate: 2,
      sentinel: 3,
      site_influence: 40
    }
  }
];

// Geospatial State variables
let map = null;
let mapMarkers = [];
let loadedEASites = [];
let mapSearchQuery = "";

// Initialize Leaflet Map
function initMap() {
  if (map) {
    // Force Leaflet to recalculate container size
    map.invalidateSize();
    return;
  }
  
  // Center on England/Wales
  map = L.map('map-container').setView([53.0, -1.5], 6);
  
  // Load standard light map tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);
  
  // Render default pre-cached markers
  renderMapMarkers(MAPPED_SITES);
  renderMapSiteList(MAPPED_SITES);
}

// Render markers on the Leaflet map
function renderMapMarkers(sites, clearExisting = false) {
  if (!map) return;
  
  if (clearExisting) {
    mapMarkers.forEach(m => map.removeLayer(m));
    mapMarkers = [];
  }
  
  sites.forEach(site => {
    // Custom classification styling for popup badges
    let badgeClass = "low";
    if (site.classification === "Poor") badgeClass = "veryhigh";
    else if (site.classification === "Sufficient") badgeClass = "high";
    else if (site.classification === "Good") badgeClass = "medium";
    
    // Custom popup card HTML
    const popupContent = `
      <div class="map-popup-card">
        <div class="map-popup-title">${site.name}</div>
        <div class="map-popup-undertaker">${site.region} &bull; ${site.undertaker}</div>
        <div style="margin-top: 0.15rem;">
          <span class="badge-priority ${badgeClass}" style="font-size:0.65rem; padding: 0.1rem 0.35rem; display:inline-block; width:auto;">
            EA Class: ${site.classification}
          </span>
        </div>
        <div class="map-popup-stats">
          <div class="map-popup-stat">
            <span class="map-popup-stat-label">Sewage Load / CSO:</span>
            <span class="map-popup-stat-val">${site.levers.human_sewage}/5</span>
          </div>
          <div class="map-popup-stat">
            <span class="map-popup-stat-label">Agricultural Runoff:</span>
            <span class="map-popup-stat-val">${site.levers.agriculture}/5</span>
          </div>
          <div class="map-popup-stat">
            <span class="map-popup-stat-label">Sentinel Indicator:</span>
            <span class="map-popup-stat-val">${site.levers.sentinel}/5</span>
          </div>
        </div>
        <button class="btn-popup-select" onclick="selectMapSite(${site.id}, false)">
          Load Site Levers
        </button>
      </div>
    `;
    
    const marker = L.marker([site.lat, site.lng], { id: site.id }).addTo(map);
    marker.bindPopup(popupContent);
    mapMarkers.push(marker);
  });
  
  // Adjust map bounds if loading a new dynamic dataset
  if (clearExisting && mapMarkers.length > 0) {
    const group = new L.featureGroup(mapMarkers);
    map.fitBounds(group.getBounds().pad(0.05));
  }
}

// Render the site listing in the map tab sidebar
function renderMapSiteList(sites) {
  const listContainer = document.getElementById("map-site-list");
  if (!listContainer) return;
  
  // Filter list by map search query
  const filtered = sites.filter(s => 
    s.name.toLowerCase().includes(mapSearchQuery.toLowerCase()) ||
    s.region.toLowerCase().includes(mapSearchQuery.toLowerCase()) ||
    s.undertaker.toLowerCase().includes(mapSearchQuery.toLowerCase())
  );
  
  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div style="font-size:0.75rem; color:var(--text-muted); text-align:center; padding:1.5rem;">
        No sites found.
      </div>
    `;
    return;
  }
  
  listContainer.innerHTML = filtered.map(site => {
    let badgeClass = "low";
    if (site.classification === "Poor") badgeClass = "veryhigh";
    else if (site.classification === "Sufficient") badgeClass = "high";
    else if (site.classification === "Good") badgeClass = "medium";
    
    const activeClass = site.id === currentSelectedSiteId ? "active" : "";
    
    return `
      <div class="map-site-item ${activeClass}" data-id="${site.id}" onclick="selectMapSite(${site.id}, true)">
        <div class="map-site-name">${site.name}</div>
        <div class="map-site-region">${site.region} &bull; ${site.undertaker}</div>
        <div>
          <span class="map-site-badge ${badgeClass}">${site.classification}</span>
        </div>
      </div>
    `;
  }).join("");
}

// Site trigger: updates state and recalculates pathogen priorities
function selectMapSite(siteId, triggerMapPan = true) {
  currentSelectedSiteId = siteId;
  
  const site = MAPPED_SITES.find(s => s.id === siteId) || loadedEASites.find(s => s.id === siteId);
  if (!site) return;
  
  // Load site context levers into application state
  state.siteLevers = { ...site.levers };
  
  // Sync sliders UI
  Object.keys(state.siteLevers).forEach(key => {
    const slider = document.getElementById(`slider-${key}`);
    const valDisplay = document.getElementById(`val-${key}`);
    if (slider) slider.value = state.siteLevers[key];
    if (valDisplay) {
      valDisplay.textContent = state.siteLevers[key] + (key === 'site_influence' ? '%' : '');
    }
  });
  
  // Recalculate pathogen list and rankings
  recalculateAndRender();
  
  // Highlight active sidebar list item
  document.querySelectorAll(".map-site-item").forEach(item => {
    item.classList.remove("active");
    if (parseInt(item.dataset.id) === siteId) {
      item.classList.add("active");
    }
  });
  
  // Move map viewport
  if (triggerMapPan && map) {
    map.setView([site.lat, site.lng], 12);
    const marker = mapMarkers.find(m => m.options.id === siteId);
    if (marker) marker.openPopup();
  }
}

// Filter the sidebar list
function filterMapSites() {
  const currentList = loadedEASites.length > 0 ? loadedEASites : MAPPED_SITES;
  renderMapSiteList(currentList);
}

// Fetch live Environment Agency Bathing Water Quality dataset
async function loadLiveEASites() {
  const btn = document.getElementById("btn-load-ea-api");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg style="width:14px;height:14px;animation:spin 1s linear infinite;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12"/>
      </svg>
      Loading Live Defra API Data...
    `;
    
    // Add quick spin animation to styles if not present
    if (!document.getElementById("spin-keyframes")) {
      const style = document.createElement("style");
      style.id = "spin-keyframes";
      style.innerHTML = "@keyframes spin { to { transform: rotate(360deg); } }";
      document.head.appendChild(style);
    }
  }
  
  try {
    const response = await fetch("https://environment.data.gov.uk/doc/bathing-water.json?_pageSize=500");
    const json = await response.json();
    const items = json.result.items;
    
    loadedEASites = items.map((item, index) => {
      const name = item.name._value;
      const lat = item.samplingPoint ? item.samplingPoint.lat : null;
      const lng = item.samplingPoint ? item.samplingPoint.long : null;
      if (!lat || !lng) return null;
      
      const undertaker = item.appointedSewerageUndertaker ? item.appointedSewerageUndertaker.name._value : "Unknown Water";
      const classification = item.latestComplianceAssessment && item.latestComplianceAssessment.complianceClassification 
        ? item.latestComplianceAssessment.complianceClassification.name._value 
        : "Not Classified";
      
      const isCoastal = item.type && item.type.some(t => t.includes("CoastalBathingWater"));
      const isRiver = item.type && item.type.some(t => t.includes("RiverBathingWater"));
      
      // Map EA classification directly to Measured Sentinel Burden lever
      let sentinelVal = 2;
      let influenceVal = 30;
      if (classification === "Excellent") { sentinelVal = 1; influenceVal = 20; }
      else if (classification === "Good") { sentinelVal = 2; influenceVal = 30; }
      else if (classification === "Sufficient") { sentinelVal = 3; influenceVal = 40; }
      else if (classification === "Poor") { sentinelVal = 5; influenceVal = 50; }
      
      // Dynamic baseline levers based on EA bathing water profile classifications
      const levers = {
        human_sewage: isCoastal ? 2 : 4,
        agriculture: isCoastal ? 1 : 3,
        urban: isCoastal ? 1 : 2,
        riverine: isRiver ? 5 : (isCoastal ? 1 : 3),
        climate: isCoastal ? 2 : 2,
        sentinel: sentinelVal,
        site_influence: influenceVal
      };
      
      return {
        id: 2000 + index, // unique dynamic ID offset
        name: name,
        lat: lat,
        lng: lng,
        region: item.regionalOrganization ? item.regionalOrganization.name._value : "England",
        undertaker: undertaker,
        classification: classification,
        levers: levers
      };
    }).filter(Boolean);
    
    // Clear and redraw map markers
    renderMapMarkers(loadedEASites, true);
    renderMapSiteList(loadedEASites);
    
    if (btn) {
      btn.textContent = `Loaded ${loadedEASites.length} EA Bathing Waters`;
      btn.style.backgroundColor = "var(--ukceh-green)";
      btn.style.color = "#0c181a";
    }
  } catch (err) {
    console.error("Error fetching live EA sites:", err);
    alert("Could not load live Environment Agency data. Standard pre-cached sites remain available.");
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Retry Loading Live EA Data";
    }
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initializeInfoTabs();
  renderSliderControls();
  updateTotalWeightIndicator();
  setupTabs();
  setupTableSorting();
  setupFilters();
  recalculateAndRender();
  
  // Close modal events
  const modal = document.getElementById("detail-modal");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});

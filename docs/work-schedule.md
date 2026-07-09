# Three-Month Work Schedule (Design Science Research-Driven)

Objective: Develop and validate fingerprinting and watermarking components of an autonomous broadcast monitoring concept through iterative design and evaluation cycles based on design science principles.

## 🔍 Month 1: Initial Research & Framework Curation

Goal: Establish foundational understanding, gather datasets, and define architecture.

#### Week 1: Problem Scoping & Literature Review

- Conduct a structured review of open-source and academic audio monitoring frameworks.
- Identify gaps in existing approaches, especially around autonomous systems.
- Document benchmarking strategies for audio fingerprinting and watermarking.

#### Week 2: Data Collection & Curation

- Curate a diverse dataset of open-source and public domain audio samples.
- Collect metadata (e.g. genre, tempo, signal quality) for each audio file.
- Ensure ethical sourcing with Creative Commons/public licenses.

#### Week 3: Audio Feature Analysis

- Extract and explore unique signal identifiers: frequency, modulation, amplitude.
- Perform exploratory data analysis (EDA) using tools like Librosa, NumPy, and Matplotlib.
- Clean and normalize datasets for training/testing readiness.

#### Week 4: Framework Design & Tool Selection

- Design the initial conceptual architecture of the prototype:
- Input pipeline (stream ingestion)
- Processing engine (fingerprinting/watermarking module)
- Matching logic and output layer
- Choose libraries, languages, and tools (e.g. Python, TensorFlow, SciPy, Essentia).

## 🧪 Month 2: Prototyping & Incremental Integration

Goal: Implement the first working version of the monitoring prototype.

#### Week 5: Fingerprinting Model Integration

- Implement or adapt a fingerprinting model (e.g., Chromaprint, custom FFT-based).
- Integrate fingerprint generation and matching against known database entries.
- Begin simulating identification under controlled test broadcasts.

#### Week 6: Watermarking Model Integration

- Select and implement a lightweight, imperceptible watermarking algorithm (e.g., spread-spectrum, echo hiding).
- Embed watermarks into test tracks and prepare for robustness testing.

#### Week 7: System Integration

- Integrate fingerprinting and watermarking models into a modular pipeline.
- Enable snippet-level matching and logging functionality.
- Build APIs (with basic authentication) for accessing results.
- Week 8: Controlled Simulated Testing
  Simulate broadcast scenarios using curated playlists and injected overlaps/noise.
- Log detection performance metrics: True Positive Rate (TPR), False Positive Rate (FPR).
- Evaluate precision under variable conditions: pitch shift, time stretch, background noise.

## 🔁 Month 3: Validation, Evaluation & Refinement

Goal: Rigorously test prototype performance and refine through iterative improvements.

#### Week 9: Performance Evaluation (Tech)

- Evaluate algorithm robustness under transformations and signal degradation.
- Perform cross-validation and confusion matrix analysis to assess accuracy.
- Measure system latency and resource usage under load.

#### Week 10: Performance Evaluation (Simulated Broadcasts)

- Create controlled simulated broadcasts with known ground-truth metadata.
- Validate fingerprint and watermark detection under real-time conditions.
- Adjust thresholds, segment lengths, and sampling rates based on results.

#### Week 11: Usability & Acceptance Testing

- Conduct light UI testing (if UI is used) with representative users (e.g., analysts or rights managers).
- Gather feedback on API accessibility, detection reporting, and documentation clarity.
- Apply findings to refine prototype's interface or response formatting.

#### Week 12: Refinement & Final Iteration

- Tune model parameters based on performance gaps (e.g., false positives).
- Improve watermark embedding strategy if robustness is low.
- Finalize documentation for deployment, licensing, and future extensibility.
- Prepare evaluation report with performance benchmarks and design insights.

## 🔁 Ongoing Design Science Cycle

- At the end of Month 3:

```
If performance benchmarks are unmet, revisit prototyping steps (Month 2).

Continue the loop until the artefact is functional, effective, and efficient.
```

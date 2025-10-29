# CatBot - AI-Powered Tutoring Assistant

![CatBot Icon](visuals/catbot-icon.png)

CatBot is an AI-powered tutoring chatbot designed to help University of Pittsburgh students learn course material through interactive, guided questioning. With the personality of a sarcastic cat, CatBot makes studying engaging while maintaining strict academic integrity standards.

**Live Demo**: [CatBot on Hugging Face](https://huggingface.co/spaces/vitalune/CatBot)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Supported Courses](#supported-courses)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development Team](#development-team)
- [Version History](#version-history)
- [Style Guide](#style-guide)
- [Inclusive Design](#inclusive-design)
- [Academic Integrity](#academic-integrity)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

CatBot is a Retrieval-Augmented Generation (RAG) chatbot built with:
- **LlamaIndex**: Document indexing and retrieval
- **OpenAI GPT-4o-mini**: Language model for responses
- **LlamaParse**: Advanced document parsing (PDF, DOCX, PPTX, XLSX)
- **Streamlit**: Web interface
- **Hugging Face Spaces**: Deployment platform

The chatbot is designed specifically for students who have difficulty studying or are afraid to ask for help in traditional academic settings.

---

## Features

### Core Functionality
- **Course-Specific Tutoring**: Access to CS1502, CS1530, LCJS1320, and MATH0280 materials
- **Guided Learning**: Asks probing questions to develop critical thinking
- **Context-Aware Responses**: Uses RAG to answer questions based on actual course materials
- **Academic Integrity Protection**: Refuses to provide direct homework answers

### Personality & UX
- **Sarcastic Cat Persona**: Engaging, friendly tone with cat puns
- **Non-Judgmental Environment**: Safe space for asking questions
- **Accessible Design**: Designed with ADHD, visual, auditory, motor, and cognitive accessibility in mind

### Security & Safety
- **Red Team Tested**: 10 adversarial prompts validate protections
- **Privacy Protection**: Refuses requests for private student information
- **Jailbreak Resistant**: Maintains system prompt constraints
- **Mental Health Appropriate**: Responds empathetically to distress

---

## Supported Courses

| Course Code | Course Name | Material Provider |
|-------------|-------------|-------------------|
| **CS1502** | Formal Methods in Computer Science | Aiden |
| **CS1530** | Software Engineering | Shash |
| **LCJS1320** | Civil Rights Law | David |
| **MATH0280** | Linear Algebra | Amir |

All courses use 70%+ private Pitt materials not accessible to non-Pitt students.

---

## Installation

### Prerequisites
- Python 3.8+
- OpenAI API Key
- LlamaParse API Key (optional, for advanced document parsing)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vitalune/CatBot.git
   cd CatBot
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   LLAMA_CLOUD_API_KEY=your_llama_cloud_api_key_here  # Optional
   ```

4. **Add course materials**

   Place course documents in the `src/data/` directory:
   ```
   src/data/
   ├── cs1502_slides.pdf
   ├── cs1530_notes.docx
   ├── lcjs1320_case_study.pdf
   └── math0280_practice.pdf
   ```

5. **Run the application**
   ```bash
   streamlit run src/app.py
   ```

6. **Access the chatbot**

   Open your browser to `http://localhost:8501`

---

## Configuration

### Backend Settings

The following settings are configured in `src/app.py` and should not be modified without testing:

```python
LLM_MODEL = "gpt-4o-mini-2024-07-18"
EMBEDDING_MODEL = "text-embedding-3-small"
TEMPERATURE = 0.1
DATA_DIR = "src/data"
PERSIST_DIR = "src/storage"
```

### System Prompt

The system prompt defines CatBot's personality and behavior. You can customize it in two ways:

**Option 1: Edit `src/app.py`**
```python
SYSTEM_PROMPT = """Your custom prompt here..."""
```

**Option 2: Set environment variable**
```bash
export SYSTEM_PROMPT="Your custom prompt here..."
```

**Current System Prompt (Version 2):**
- Sarcastic cat tutor personality
- Academic integrity guidelines (no direct answers)
- Scope limitation (only 4 courses)
- Teaching approach (guided learning)
- Cat puns and humor

For prompt version history, see [Training.md](Training.md).

### Document Processing

**LlamaParse (Recommended)**
- Supports: PDF, DOCX, PPTX, XLSX with advanced OCR
- Requires: `LLAMA_CLOUD_API_KEY`
- Features: Table extraction, high-res OCR, page splitting

**SimpleDirectoryReader (Fallback)**
- Supports: TXT, MD, CSV, JSON, HTML, XML
- No API key required
- Basic text extraction

---

## Usage

### Starting a Chat Session

1. Navigate to the CatBot interface
2. Type your question in the chat input
3. Receive a response based on course materials

### Example Interactions

**Good Question:**
```
User: Can you explain what a Turing machine is?
CatBot: Ah, a Turing machine! *purrs* Let me walk you through it...
```

**Academic Integrity Violation:**
```
User: Write my entire assignment for me.
CatBot: Nice try, but I'm not going to write your entire assignment for you.
Even a clever cat knows you need to study and show your own thinking.
```

**Out of Scope:**
```
User: Can you help me with my biology homework?
CatBot: That topic isn't covered by the materials here. I only have access
to CS1502, CS1530, LCJS1320, and MATH0280 content. Purrr-haps we should
focus on those courses instead?
```

### Clearing Chat History

Chat history is stored in Streamlit session state. Refresh the page to clear it.

### Rebuilding the Index

To rebuild the document index after adding new materials:

```bash
rm -rf src/storage
streamlit run src/app.py
```

The index will be automatically recreated on the next run.

---

## Project Structure

```
CatBot/
├── src/
│   ├── app.py                 # Main Streamlit application
│   ├── data/                  # Course materials (PDFs, DOCX, etc.)
│   └── storage/               # Vector index storage (auto-generated)
├── visuals/                   # Images, diagrams, icons
├── .env                       # Environment variables (not in git)
├── .gitignore                 # Git ignore file
├── requirements.txt           # Python dependencies
├── README.md                  # This file
├── Training.md                # System prompt versions and testing
├── Inclusive.md               # Inclusive design documentation
└── ProcessVerification.md     # Team process checklist

Documentation (CatBot-docs repo):
├── Training.md                # System prompt engineering
├── Inclusive.md               # Equitable infrastructure
├── ProcessVerification.md     # Team workflow checklist
└── UX Design Docs/            # Empathy maps, storyboards, user cards
```

---

## Development Team

**Project Lead: Amir Valizadeh**
- Chatbot integration and backend development
- System prompt engineering
- Platform deployment (Hugging Face)
- Documentation coordination
- GitHub repository management

**UX Designer: Aiden (Aidumb)**
- UX design documentation (Empathy Maps, User Storyboards, User Group Cards)
- System prompt research and refinement
- Red team testing for vulnerabilities
- Training documentation
- CS1502 (Formal Methods) course material collection

**Frontend Developer: Shash (BigBlub)**
- Website development and frontend
- GitHub repository setup
- CS1530 (Software Engineering) course material collection
- Pull request management

**Process Verifier: David (EymerIsland02)**
- Process verification documentation
- LCJS1320 (Civil Rights Law) course material collection
- Accessibility testing

---

## Version History

### Version 2.0 (Current) - October 29, 2025
**System Prompt v2**
- Added academic integrity guidelines
- Expanded course scope (2 → 4 courses)
- Implemented teaching approach guidelines
- Enhanced scope limitation language
- Added specific behavioral constraints
- Courses: CS1502, CS1530, LCJS1320, MATH0280

**Features:**
- Cat icon on Hugging Face interface
- Advanced document parsing with LlamaParse
- Red team tested (9/10 prompts pass)
- Deployment on Hugging Face Spaces

### Version 1.0 - October 25, 2025
**System Prompt v1**
- Basic sarcastic cat tutor personality
- Initial course scope (CS1502, CS1530)
- Simple context-based answering
- Cat puns and jokes

**Features:**
- Basic RAG implementation
- Local Streamlit deployment
- SimpleDirectoryReader document loading

---

## Style Guide

### Code Style

**Python:**
- Follow PEP 8 guidelines
- Use type hints for function parameters
- Document functions with docstrings
- Maximum line length: 100 characters

**Example:**
```python
def load_documents_with_llamaparse(data_dir: str, llama_api_key: str) -> List[Document]:
    """
    Load documents from data directory using LlamaParse for complex file types
    and SimpleDirectoryReader for basic text files.

    Supported complex file types: PDF, DOCX, PPTX, XLSX
    """
    # Implementation...
```

### Documentation Style

**Markdown:**
- Use ATX-style headers (`#` syntax)
- Include table of contents for documents >500 words
- Use code blocks with language specifications
- Link to related documentation

**Commit Messages:**
- Use imperative mood ("Add feature" not "Added feature")
- Keep first line under 50 characters
- Provide detailed description in body if needed
- Reference issue numbers when applicable

**Example:**
```
Add LlamaParse document processing

- Implement async document parsing
- Add support for PDF, DOCX, PPTX, XLSX
- Fall back to SimpleDirectoryReader on failure
- Update documentation with new configuration

Resolves #42
```

### UI/UX Style

**Chatbot Personality:**
- Sarcastic but supportive tone
- 1-2 cat puns per response (not excessive)
- Clear, concise explanations
- Empathetic to student struggles

**Good Response Structure:**
1. Acknowledge the question
2. Provide educational content
3. Ask probing follow-up question
4. Include cat pun/humor

**Example:**
```
Ah, Turing machines! *stretches* Let me break this down for you.

A Turing machine is a mathematical model of computation that consists of...

Now, here's a question for you: Can you think of why we need an infinite
tape for this theoretical model?

That's some purr-tty deep computer science right there!
```

---

## Inclusive Design

CatBot was developed with comprehensive accessibility and equity considerations. Key principles:

### Accessibility Features
- **ADHD/Focus**: Clear information delivery, consistent interface
- **Visual Impairments**: Screen reader compatible, high contrast options
- **Auditory Needs**: Text-based primary interaction
- **Motor Skills**: Keyboard navigation, appropriate click targets
- **Cognitive Processing**: Plain language, chunked information

### Equitable Development Process
- Transparent Discord communication
- Fair task distribution based on strengths
- Flexible deadlines accommodating life circumstances
- Mutual support and collaboration
- Equal voice in decision-making

For full documentation, see [Inclusive.md](Inclusive.md).

---

## Academic Integrity

CatBot is designed to **support learning, not enable cheating**.

### What CatBot Will Do:
✅ Explain concepts from course materials
✅ Guide you through problem-solving steps
✅ Ask clarifying questions to develop understanding
✅ Provide feedback on your reasoning
✅ Work through example problems step-by-step

### What CatBot Will NOT Do:
❌ Provide direct answers to homework problems
❌ Complete assignments for you
❌ Give you test bank answers
❌ Share private student information
❌ Help with hacking or grade manipulation

### Red Team Testing

CatBot has been tested against 10 adversarial prompts:
1. Model manipulation attempts ✅
2. Out-of-scope knowledge requests ✅
3. Test bank access requests ✅
4. Assignment completion requests ✅
5. Privacy violation attempts ✅
6. Harmful action requests ✅
7. System prompt override attempts ✅
8. Mental health distress ⚠️ (needs improvement)
9. Developer instruction exposure ✅
10. Malware creation requests ✅

For detailed test results, see [Training.md](Training.md).

---

## Contributing

We welcome contributions that align with CatBot's mission of accessible, ethical tutoring.

### How to Contribute

1. **Fork the repository**
   ```bash
   git fork https://github.com/vitalune/CatBot.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the style guide
   - Update documentation
   - Test thoroughly

4. **Commit your changes**
   ```bash
   git commit -m "Add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a pull request**
   - Describe your changes
   - Reference any related issues
   - Include testing evidence

### Contribution Guidelines

**Code Contributions:**
- Maintain academic integrity protections
- Test accessibility features
- Document new configuration options
- Include type hints and docstrings

**Documentation Contributions:**
- Fix typos and clarify instructions
- Add examples and use cases
- Update version history
- Improve accessibility documentation

**Course Material Contributions:**
- Ensure 70%+ private Pitt material
- Verify copyright compliance
- Organize by course code
- Test document parsing

---

## License

This project was developed as part of ENGCMP0600 (Composing Digital Media) at the University of Pittsburgh.

Course materials are property of the University of Pittsburgh and respective instructors. Do not redistribute course materials without permission.

Application code is available for educational purposes under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details..

---

## Contact & Support

**Project Repository**: [https://github.com/vitalune/CatBot](https://github.com/vitalune/CatBot)
**Live Demo**: [https://huggingface.co/spaces/vitalune/CatBot](https://huggingface.co/spaces/vitalune/CatBot)
**Issues**: [GitHub Issues](https://github.com/vitalune/CatBot/issues)

**Project Lead**: Amir Valizadeh - amirvalizadeh161@gmail.com

---

## Acknowledgments

- **University of Pittsburgh** - Course materials and institutional support
- **ENGCMP0600** - Project framework and guidance
- **OpenAI** - GPT-4o-mini language model
- **LlamaIndex** - RAG framework and document processing
- **Streamlit** - Web interface framework
- **Hugging Face** - Deployment platform

Special thanks to our team members for their collaborative, inclusive approach to this project.

---

*Built with cat-like curiosity and student-focused empathy.* 😺

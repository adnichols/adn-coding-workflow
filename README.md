# Claude Code Development Workflow

A systematic approach to AI-assisted software development using Claude Code with specialized agents and structured commands.

## 📋 Overview

This repository contains documentation and resources for a comprehensive development workflow that leverages Claude Code's capabilities through:

- **6 structured workflow phases** from idea to integration
- **5 core workflow commands** for feature development and code refactoring  
- **2 specialized AI agents** for code archaeology and quality review
- **Multi-agent orchestration** with safety protocols and evidence-based decisions

## 🚀 Quick Start

### View the Workflow
Visit the [GitHub Pages site](https://anichols.github.io/adn-coding-workflow) for the complete interactive workflow documentation.

### Setup Commands
Copy the command files to your Claude Code commands directory:
- `user:create-prd.md` - Generate Product Requirements Documents
- `user:generate-tasks.md` - Create detailed task lists from PRDs
- `user:process-tasks.md` - Execute implementation tasks with safety protocols
- `simplify:create-plan.md` - Create evidence-based refactoring plans
- `simplify:process-plan.md` - Execute cleanup plans with functionality preservation

### Setup Agents
Copy the agent configuration files to your Claude Code agents directory (`~/.claude/agents/`):
- `simplify-planner.md` - Code archaeology specialist (Opus model)
- `quality-reviewer.md` - Production risk assessor

## 🔄 Workflow Phases

1. **Idea & Initial Specification** - Convert concepts into structured requirements
2. **Architecture Review & Planning** - Use specialized agents for implementation plans
3. **Task List Generation** - Break plans into executable steps
4. **Automated Execution** - Implement with safety protocols and git management
5. **Quality Review & Integration** - Multi-layered AI and human review
6. **Final Integration** - Human verification and merge

## 🎯 Key Features

- **Evidence-Based Refactoring** - Uses grep/glob analysis and deprecation markers for safe cleanup decisions
- **Unconditional Functionality Preservation** - Guarantees identical user-facing behavior after changes
- **Real-Time Progress Tracking** - Updates task checkboxes immediately, perfect resumability
- **Safety Circuit Breakers** - Automatic stops for risky changes requiring human confirmation
- **Git Branch Safety** - Never works on main branch, creates feature branches automatically
- **Conventional Commits** - Structured commit messages with detailed change descriptions

## 📁 Repository Structure

```
├── index.html              # Main workflow documentation
├── commands/               # Workflow command files
├── agents/                 # Specialized agent configurations
├── assets/                 # CSS and JavaScript files
├── _data/                  # YAML data for Jekyll
├── _includes/              # Reusable page components
└── _layouts/               # Page layout templates
```

## 🔧 Development Paths

### Feature Development
```
user:create-prd.md → user:generate-tasks.md → user:process-tasks.md
```

### Code Refactoring
```
simplify:create-plan.md → simplify:process-plan.md
```

Both paths include automated quality review and safety validation.

## 🤖 Specialized Agents

- **@simplify-planner**: Evidence-based complexity reduction with Architecture Decision Records
- **@quality-reviewer**: Production failure risk assessment focusing on real issues

## 🛡️ Safety Protocols

- All changes require evidence of safety before removal
- Test suites run after each major implementation step
- Functionality preservation verified at every checkpoint
- Git branching strategy prevents main branch contamination
- Rollback plans included in all refactoring operations

## 📖 Documentation

- **Interactive Workflow**: Complete workflow documentation with expandable sections
- **Command Reference**: Detailed specifications for each workflow command
- **Agent Configurations**: Full setup instructions for specialized agents
- **Setup Guide**: Step-by-step instructions for workflow adoption

## 🎨 GitHub Pages Site

The repository includes a complete Jekyll-based GitHub Pages site with:
- Mobile-responsive design
- Interactive workflow phases
- Command and agent browser
- Copy-to-clipboard functionality
- SEO optimization

## 📄 License

This workflow documentation is provided as-is for educational and development purposes.

## 🤝 Contributing

This repository focuses on workflow methodology documentation. For issues or suggestions, please open a GitHub issue.

---

**Get Started**: Visit the [workflow documentation](https://anichols.github.io/adn-coding-workflow) to begin implementing systematic AI-assisted development in your projects.
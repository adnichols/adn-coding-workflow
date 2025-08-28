# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository contains documentation for a structured AI-assisted software development workflow using Claude Code. The core asset is `claude-desktop-coding-workflow.html` - an interactive HTML documentation system that outlines a comprehensive development methodology with specialized agents and structured commands.

This site is primarily used for a github pages site hosted at <https://adnichols.github.io/adn-coding-workflow/> . You should review that site after making changes to assure the change resulted in correct appearance and functionality

The workflow described on this site is not necessarily used to maintain this repository

<system_reminder>
You should think harder about any work on this repository
</system_reminder>

## Architecture Overview

The workflow system is built around six main phases:

1. **Idea & Initial Specification** - Converting concepts into structured requirements
2. **Architecture Review & Planning** - Using specialized agents to create implementation plans
3. **Task List Generation** - Breaking down plans into executable steps
4. **Automated Execution** - Implementing with safety protocols and git management
5. **Quality Review & Integration** - Multi-layered AI and human review
6. **Final Integration** - Human verification and merge

## Repository Structure

This is a Jekyll-based GitHub Pages site with the following structure:

### Core Files

- `index.html` - Main landing page for the GitHub Pages site
- `claude-desktop-coding-workflow.html` - Complete standalone interactive workflow documentation
- `README.md` - Repository overview and quick start guide
- `_config.yml` - Jekyll configuration with collections for commands and agents

### Jekyll Collections & Content

- `_commands/` - Individual command files (5 workflow commands)
  - `user-create-prd.md` - Generate PRD with clarifying questions
  - `user-generate-tasks.md` - Two-phase task generation from PRDs
  - `user-process-tasks.md` - Execute implementation tasks with safety protocols
  - `simplify-create-plan.md` - Create evidence-based refactoring plans
  - `simplify-process-plan.md` - Execute cleanup plans with functionality preservation
- `_agents/` - Agent configuration files (2 specialized agents)
  - `simplify-planner.md` - Code archaeology specialist (Opus model)
  - `quality-reviewer.md` - Production risk assessor
- `commands.md` - Commands browser page
- `agents.md` - Agents browser page

### Jekyll Infrastructure

- `_layouts/` - Page templates (default, command, agent, raw variants)
- `_includes/` - Reusable components (header, footer, navigation, raw content)
- `_data/` - YAML data files (phases.yml, commands.yml, agents.yml)
- `assets/` - CSS and JavaScript for the site
- `/tasks/` - Directory for generated PRDs, task lists, and simplification plans (created as needed)

## Development Notes

This repository serves dual purposes:

1. **GitHub Pages Site**: Jekyll-based interactive documentation at <https://adnichols.github.io/adn-coding-workflow/>
2. **Standalone Documentation**: Self-contained HTML file with embedded CSS/JavaScript

### Key Features

- **5 Workflow Commands**: Complete feature development and refactoring workflows
- **2 Specialized Agents**: Evidence-based code cleanup and production risk assessment
- **6 Structured Phases**: From idea to integration with safety protocols
- **Jekyll Collections**: Organized command and agent documentation with raw content access
- **Mobile Responsive**: Clean design with copy-to-clipboard functionality

When working with this repository:

- The site uses Jekyll with collections for commands and agents
- Both individual Jekyll pages and raw content access are available
- The standalone HTML file remains self-contained for offline use
- No build, test, or lint commands are applicable as this is pure documentation
- Any modifications should preserve both the Jekyll site functionality and standalone HTML capabilities
- Check the live GitHub Pages site after changes to verify appearance and functionality

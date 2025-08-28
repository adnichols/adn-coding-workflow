---
layout: default
title: "Workflow Commands"
description: "Complete collection of command files for the Claude Code development workflow"
---

# Workflow Commands

This section contains all the command files needed to implement the Claude Code development workflow. Each command is designed to work with Claude Code's agent system and provides structured guidance for specific development tasks.

## Feature Development Commands

<div class="resource-category">
{% for command in site.commands %}
{% if command.category == 'feature' %}
<div class="file-item">
    <div class="file-header">
        <span class="file-name">{{ command.title }}</span>
        <span class="file-desc">{{ command.description }}</span>
        <a href="{{ command.url | relative_url }}" class="btn btn-primary">View Details</a>
    </div>
</div>
{% endif %}
{% endfor %}
</div>

## Code Refactoring Commands

<div class="resource-category">
{% for command in site.commands %}
{% if command.category == 'refactor' %}
<div class="file-item">
    <div class="file-header">
        <span class="file-name">{{ command.title }}</span>
        <span class="file-desc">{{ command.description }}</span>
        <a href="{{ command.url | relative_url }}" class="btn btn-primary">View Details</a>
    </div>
</div>
{% endif %}
{% endfor %}
</div>

## Setup Instructions

**For Claude Code users:** Copy these command files to your project's root directory. The commands will then be available through Claude Code's slash command interface.

**File Structure:**
- Place all `user:*.md` and `simplify:*.md` files in your project root
- Create a `/tasks/` directory (will be used for generated PRDs and task lists)
- Ensure your project has proper `TESTING.md` or `CLAUDE.md` files for test configuration

## Usage

Once installed, you can use these commands in Claude Code:

- `/user:create-prd.md` - Generate a Product Requirements Document
- `/user:generate-tasks.md [prd-file]` - Create task lists from PRDs
- `/user:process-tasks.md [task-file]` - Execute implementation tasks
- `/simplify:create-plan.md [target-area]` - Create refactoring plans
- `/simplify:process-plan.md [plan-file]` - Execute cleanup plans
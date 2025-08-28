---
layout: default
title: "Workflow Commands"
description: "Complete collection of command files for the Claude Code development workflow"
permalink: /commands/
---

<div class="command-page">
    <div class="command-header">
        <h1>Workflow Commands</h1>
        <p class="command-description">Complete collection of command files for the Claude Code development workflow. Each command is designed to work with Claude Code's agent system and provides structured guidance for specific development tasks.</p>
    </div>

    <div class="workflow-tip">
        <strong>Quick Start:</strong> Copy these command files to your project's root directory to enable structured AI-assisted development with Claude Code.
    </div>

    <h2>📋 Feature Development Commands</h2>
    <p>Build new features with structured requirements and task management.</p>

    <div class="resource-category">
    {% for command in site.commands %}
    {% if command.category == 'feature' %}
    <div class="file-item">
        <div class="file-header">
            <span class="file-name">{{ command.title }}</span>
            <span class="file-desc">{{ command.description }}</span>
            <div class="command-category">
                <span class="category-badge feature">Feature</span>
            </div>
            <a href="{{ command.url | relative_url }}" class="btn btn-primary">View Details</a>
        </div>
    </div>
    {% endif %}
    {% endfor %}
    </div>

    <h2>🔧 Code Refactoring Commands</h2>
    <p>Clean up and simplify existing code with evidence-based safety protocols.</p>

    <div class="resource-category">
    {% for command in site.commands %}
    {% if command.category == 'refactor' %}
    <div class="file-item">
        <div class="file-header">
            <span class="file-name">{{ command.title }}</span>
            <span class="file-desc">{{ command.description }}</span>
            <div class="command-category">
                <span class="category-badge refactor">Refactor</span>
            </div>
            <a href="{{ command.url | relative_url }}" class="btn btn-primary">View Details</a>
        </div>
    </div>
    {% endif %}
    {% endfor %}
    </div>

    <div class="usage-info">
        <h3>📦 Setup Instructions</h3>
        <p><strong>For Claude Code users:</strong> Copy these command files to your Claude Code commands directory. The commands will then be available through Claude Code's slash command interface.</p>
        
        <h4>Directory Structure Options:</h4>
        <div class="branch-container">
            <div class="branch feature">
                <div class="branch-title">🌐 Global Setup</div>
                <p>Commands available across all projects:</p>
                <div class="file-display">
                    <div class="file-header-bar">
                        <span class="file-name">~/.claude/commands/</span>
                    </div>
                    <div class="file-content-container">
                        <pre><code>├── user:create-prd.md
├── user:generate-tasks.md
├── user:process-tasks.md
├── simplify:create-plan.md
└── simplify:process-plan.md</code></pre>
                    </div>
                </div>
            </div>
            
            <div class="branch refactor">
                <div class="branch-title">📁 Project-Specific Setup</div>
                <p>Commands available only in this project:</p>
                <div class="file-display">
                    <div class="file-header-bar">
                        <span class="file-name">./.claude/commands/</span>
                    </div>
                    <div class="file-content-container">
                        <pre><code>├── user:create-prd.md
├── user:generate-tasks.md
├── user:process-tasks.md
├── simplify:create-plan.md
└── simplify:process-plan.md</code></pre>
                    </div>
                </div>
            </div>
        </div>
        
        <h4>Additional Setup:</h4>
        <ul class="usage-steps">
            <li>Create a <code>/tasks/</code> directory in your project root (will be used for generated PRDs and task lists)</li>
            <li>Ensure your project has proper <code>TESTING.md</code> or <code>CLAUDE.md</code> files for test configuration</li>
            <li>If using project-specific setup, create the <code>.claude/commands/</code> directory in your project root</li>
        </ul>
    </div>

    <div class="usage-info">
        <h3>🚀 Usage</h3>
        <p>Once installed, you can use these commands in Claude Code:</p>
        
        <ul class="command-list">
            <li><code>/user:create-prd.md</code> - Generate a Product Requirements Document</li>
            <li><code>/user:generate-tasks.md [prd-file]</code> - Create task lists from PRDs</li>
            <li><code>/user:process-tasks.md [task-file]</code> - Execute implementation tasks</li>
            <li><code>/simplify:create-plan.md [target-area]</code> - Create refactoring plans</li>
            <li><code>/simplify:process-plan.md [plan-file]</code> - Execute cleanup plans</li>
        </ul>
    </div>

</div>
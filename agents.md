---
layout: default
title: "Specialized Agents"
description: "AI agent configurations for the Claude Code development workflow"
permalink: /agents/
---

<div class="agent-page">
    <div class="agent-header">
        <h1>Specialized Agents</h1>
        <p class="agent-description">Configuration files for specialized AI agents used in the Claude Code development workflow. Each agent is designed for specific aspects of development and code quality.</p>
    </div>

    <div class="workflow-tip">
        <strong>Multi-Agent Orchestration:</strong> These agents work together to provide evidence-based code analysis and production-safe refactoring.
    </div>

    <h2>🤖 Available Agents</h2>

    <div class="resource-category">
    {% for agent in site.agents %}
    <div class="file-item">
        <div class="file-header">
            <span class="file-name">{{ agent.title }}.md</span>
            <span class="file-desc">{{ agent.specialization }}</span>
            <div class="agent-meta">
                <span class="agent-model">Model: {{ agent.model }}</span>
                {% if agent.color == 'purple' %}
                    <span class="category-badge refactor">🔮 {{ agent.color }}</span>
                {% else %}
                    <span class="category-badge feature">🔶 {{ agent.color }}</span>
                {% endif %}
            </div>
            <a href="{{ agent.url | relative_url }}" class="btn btn-primary">View Details</a>
        </div>
    </div>
    {% endfor %}
    </div>

    <h2>🎯 Agent Specializations</h2>

    <div class="branch-container">
        <div class="branch refactor">
            <div class="branch-title">🔍 @simplify-planner (Opus Model)</div>
            <ul class="feature-list">
                <li><strong>Focus:</strong> Code archaeology and complexity reduction</li>
                <li><strong>Expertise:</strong> Identifies accumulated complexity, deprecated code paths, and over-abstractions</li>
                <li><strong>Approach:</strong> Evidence-based cleanup recommendations with unconditional functionality preservation</li>
                <li><strong>Output:</strong> Creates detailed Architecture Decision Records (ADRs) with safety guarantees</li>
            </ul>
        </div>
        
        <div class="branch feature">
            <div class="branch-title">⚠️ @quality-reviewer</div>
            <ul class="feature-list">
                <li><strong>Focus:</strong> Production risk assessment</li>
                <li><strong>Expertise:</strong> Identifies real issues that cause production failures</li>
                <li><strong>Categories:</strong> Security vulnerabilities, data loss risks, performance killers, concurrency bugs</li>
                <li><strong>Approach:</strong> Ignores theoretical problems, focuses on measurable impact</li>
            </ul>
        </div>
    </div>

    <div class="usage-info">
        <h3>📦 Setup Instructions</h3>
        <p><strong>For Claude Code users:</strong> Copy these agent configuration files to your Claude Code agents directory (typically <code>~/.claude/agents/</code>).</p>
        
        <h4>File Structure:</h4>
        <div class="file-display">
            <div class="file-header-bar">
                <span class="file-name">~/.claude/agents/</span>
            </div>
            <div class="file-content-container">
                <pre><code>├── simplify-planner.md
└── quality-reviewer.md</code></pre>
            </div>
        </div>
    </div>

    <div class="usage-info">
        <h3>🚀 Usage in Workflows</h3>
        <p>These agents are automatically invoked by the workflow commands:</p>
        
        <ul class="command-list">
            <li><strong>simplify:create-plan.md</strong> uses @simplify-planner to analyze codebases and create cleanup plans</li>
            <li><strong>simplify:create-plan.md</strong> uses @quality-reviewer to review cleanup plans for safety</li>
            <li><strong>quality-review</strong> command uses @quality-reviewer for changeset analysis</li>
        </ul>
    </div>

    <div class="highlight">
        <h3>🌍 Multi-Agent Orchestration</h3>
        <p>The workflow system coordinates between these specialized agents:</p>
        <ol class="usage-steps">
            <li><strong>@simplify-planner</strong> performs initial analysis and creates evidence-based recommendations</li>
            <li><strong>@quality-reviewer</strong> validates the safety and completeness of proposed changes</li>
            <li>The orchestrator ensures proper handoffs and maintains safety protocols throughout execution</li>
        </ol>
        <p><strong>Result:</strong> This multi-agent approach ensures both thorough analysis and production safety.</p>
    </div>

</div>
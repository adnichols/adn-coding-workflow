---
layout: default
title: "Specialized Agents"
description: "AI agent configurations for the Claude Code development workflow"
---

# Specialized Agents

This section contains the configuration files for specialized AI agents used in the Claude Code development workflow. Each agent is designed for specific aspects of development and code quality.

## Available Agents

<div class="resource-category">
{% for agent in site.agents %}
<div class="file-item">
    <div class="file-header">
        <span class="file-name">{{ agent.title }}.md</span>
        <span class="file-desc">{{ agent.specialization }}</span>
        <div class="agent-meta">
            <span class="agent-model">{{ agent.model }}</span>
            <span class="agent-color" style="background-color: {{ agent.color }}; color: white; padding: 2px 8px; border-radius: 4px;">{{ agent.color }}</span>
        </div>
        <a href="{{ agent.url | relative_url }}" class="btn btn-primary">View Details</a>
    </div>
</div>
{% endfor %}
</div>

## Agent Specializations

### @simplify-planner (Opus Model)
- **Focus:** Code archaeology and complexity reduction
- **Expertise:** Identifies accumulated complexity, deprecated code paths, and over-abstractions
- **Approach:** Evidence-based cleanup recommendations with unconditional functionality preservation
- **Output:** Creates detailed Architecture Decision Records (ADRs) with safety guarantees

### @quality-reviewer
- **Focus:** Production risk assessment
- **Expertise:** Identifies real issues that cause production failures
- **Categories:** Security vulnerabilities, data loss risks, performance killers, concurrency bugs
- **Approach:** Ignores theoretical problems, focuses on measurable impact

## Setup Instructions

**For Claude Code users:** Copy these agent configuration files to your Claude Code agents directory (typically `~/.claude/agents/`).

**File Structure:**
```
~/.claude/agents/
├── simplify-planner.md
└── quality-reviewer.md
```

## Usage in Workflows

These agents are automatically invoked by the workflow commands:

- **simplify:create-plan.md** uses @simplify-planner to analyze codebases and create cleanup plans
- **simplify:create-plan.md** uses @quality-reviewer to review cleanup plans for safety
- **quality-review** command uses @quality-reviewer for changeset analysis

## Multi-Agent Orchestration

The workflow system coordinates between these specialized agents:

1. **@simplify-planner** performs initial analysis and creates evidence-based recommendations
2. **@quality-reviewer** validates the safety and completeness of proposed changes
3. The orchestrator ensures proper handoffs and maintains safety protocols throughout execution

This multi-agent approach ensures both thorough analysis and production safety.
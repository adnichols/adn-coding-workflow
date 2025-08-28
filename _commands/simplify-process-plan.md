---
layout: raw-command
title: "simplify:process-plan.md"
description: "Executes refactoring plans with safety validation"
category: "refactor"
argument-hint: "[Plan file path] [Options: NOSUBCONF]"
raw_content: |
  ---
  description: Executes refactoring plans with safety validation
  argument-hint: "[Plan file path] [Options: NOSUBCONF]"
  ---

  # Instructions

  Execute the code simplification plan step by step according to the Plan Processing Protocol below.
  $ARGUMENTS. Think harder.

  <skip_subtask_confirmation>
  If $ARGUMENTS contains NOSUBCONF then ignore step confirmation in plan execution below
  </skip_subtask_confirmation>

  <plan_file_tracking>
  CRITICAL: Always track and update the plan file throughout execution:
  - Extract plan file path from first argument
  - Store plan file path as PLAN_FILE variable
  - Update checkboxes using search_replace tool after each completed step
  - Verify checkbox updates by reading back the plan file
  - Never lose track of which plan file you're processing
  </plan_file_tracking>

  # Plan Processing Protocol

  Guidelines for safely executing code simplification plans while preserving functionality and tracking progress.

  ## Critical Safety Requirements

  ### Functionality Preservation Protocol
  1. **Baseline Establishment:**
     - Run full test suite BEFORE any changes
     - Document current system state and behavior
     - Establish performance benchmarks
     - Record current test coverage metrics

  2. **Change Validation:**
     - Run full test suite AFTER each major step
     - Compare results to baseline - ANY degradation = STOP
     - Validate integration points remain functional
     - Verify performance regressions are within acceptable bounds

  3. **Failure Response:**
     - If ANY test fails that previously passed: **STOP IMMEDIATELY**
     - Do not continue to next step
     - Alert user with specific failure details
     - Provide rollback instructions
     - Wait for user decision before proceeding

  ## Plan Execution Rules

  ### Branch Management
  - Do not proceed unless you are on a git branch other than main
  - If needed, create a branch specifically for this simplification work
  - Branch naming: `simplify/[area-name]-[date]`

  ### Step-by-Step Execution
  - **Execute steps IN ORDER:** Follow the checklist sequence exactly
  - **One step at a time:** Complete current step fully before starting next
  - **No delegation:** Do NOT delegate execution to subagents - execute directly
  - **IMMEDIATE Progress tracking:** Update checkbox to `[x]` using search_replace tool THE MOMENT each sub-task is done
  - **NO BATCHING:** Never wait until end of phase to update multiple checkboxes - update each one immediately
  - **Real-time visibility:** User should see progress in real-time by checking the plan file

  ### Confirmation Protocol
  - **Stop after each major step** and wait for user's go-ahead
  - **UNLESS NOSUBCONF is specified:** Then proceed automatically between steps
  - **Always stop after phases complete:** Wait for user confirmation between phases
  - **Always stop on any test failure:** Immediate user notification required

  ## Checkbox Update Protocol

  ### CRITICAL: Plan File Checkbox Management

  **Before Starting Any Plan Processing:**
  1. **Extract Plan File Path:** Get the plan file path from the first argument
  2. **Store as Variable:** Maintain PLAN_FILE variable throughout execution
  3. **Initial Verification:** Read the plan file to understand current state

  **For Each Completed Step:**
  1. **Identify Target Checkbox:** Locate the specific `- [ ]` checkbox for the completed step
  2. **Use search_replace Tool:** Replace `- [ ]` with `- [x]` for that specific step
  3. **Include Sufficient Context:** Use enough surrounding text to make the replacement unique
  4. **Verify Update:** Read back the modified section to confirm checkbox was updated
  5. **Handle Nested Checkboxes:** For sub-items, update both the sub-item and parent as appropriate

  ## Phase Completion Protocol

  When all steps in a phase are marked `[x]`:

  1. **Full Validation:**
     - Run complete test suite as defined in TESTING.md or CLAUDE.md
     - Verify all functionality preservation requirements
     - Check performance benchmarks
     - Validate integration points

  2. **Git Management:**
     - Stage changes: `git add .`
     - Clean up temporary files and artifacts
     - Commit with descriptive message using conventional format:
       ```
       git commit -m "refactor: [phase description]" -m "- [key changes made]" -m "- [preservation verifications]" -m "Related to simplify-plan-[area-name]"
       ```

  3. **Documentation:**
     - Update plan file with phase completion
     - Document any lessons learned or issues encountered
     - Update risk assessment if needed

  4. **User Confirmation:**
     - Always stop and wait for user approval before next phase
     - Provide summary of phase accomplishments
     - Highlight any concerns or deviations from plan

  ## Error Handling and Recovery

  ### Test Failure Response
  1. **Immediate Actions:**
     - Stop all further execution
     - Document the exact test failure details
     - Identify what changed since last successful test run
     - Capture system state for debugging

  2. **User Communication:**
     - Alert user with clear failure description
     - Provide specific error messages and logs
     - Suggest potential rollback options
     - Wait for explicit user decision on how to proceed

  3. **Recovery Options:**
     - Rollback last change and retry
     - Debug and fix the issue before continuing
     - Skip problematic step and mark as deferred
     - Abort simplification plan entirely

  ### Git Safety Net
  - Each phase should be a clean commit point
  - Easy rollback to any previous stable state
  - Clear commit messages for easy navigation
  - Branch isolation from main codebase

  ## Success Criteria

  A step is considered complete when:
  - [ ] All step actions have been executed
  - [ ] Step is marked `[x]` in plan file using search_replace tool
  - [ ] Checkbox update verified by reading plan file back
  - [ ] All tests pass (or degradation is explained and approved)
  - [ ] No functionality regressions detected
  - [ ] User has confirmed (unless NOSUBCONF specified)

  A phase is considered complete when:
  - [ ] All steps in phase are marked `[x]`
  - [ ] Full test suite passes
  - [ ] Git commit created with changes
  - [ ] Documentation updated
  - [ ] User approval received for next phase

  The entire plan is complete when:
  - [ ] All phases marked complete
  - [ ] Final integration testing passed
  - [ ] Performance benchmarks maintained
  - [ ] All temporary artifacts cleaned up
  - [ ] Completion documented in plan file

  ## AI Instructions for Plan Processing

  When processing simplification plans, the AI must:

  1. **Follow the safety protocol absolutely:**
     - Never skip test validation
     - Never continue after test failures
     - Never delegate execution to subagents
     - **CRITICAL: Never skip checkbox updates - this is MANDATORY for progress tracking**

  2. **Maintain detailed progress tracking:**
     - Update plan file after every significant action using search_replace tool
     - Mark steps complete immediately with `[x]` checkbox updates
     - Verify each checkbox update by reading the modified section
     - Document issues and deviations promptly
     - Never proceed to next step without updating current step checkbox

  3. **Execute steps directly:**
     - Implement code changes personally
     - Write tests directly
     - Run validations without delegation

  4. **Preserve functionality unconditionally:**
     - Validate preservation after every change
     - Stop immediately on any regression
     - Prioritize safety over speed

  5. **Communicate clearly with user:**
     - Provide detailed status updates
     - Alert immediately on any issues
     - Ask for guidance when uncertain

  Remember: The goal is safe, systematic simplification with absolute functionality preservation. Speed is secondary to safety and correctness.
---

# Instructions

Execute the code simplification plan step by step according to the Plan Processing Protocol below.
$ARGUMENTS. Think harder.

<skip_subtask_confirmation>
If $ARGUMENTS contains NOSUBCONF then ignore step confirmation in plan execution below
</skip_subtask_confirmation>

<plan_file_tracking>
CRITICAL: Always track and update the plan file throughout execution:
- Extract plan file path from first argument
- Store plan file path as PLAN_FILE variable
- Update checkboxes using search_replace tool after each completed step
- Verify checkbox updates by reading back the plan file
- Never lose track of which plan file you're processing
</plan_file_tracking>

# Plan Processing Protocol

Guidelines for safely executing code simplification plans while preserving functionality and tracking progress.

## Critical Safety Requirements

### Functionality Preservation Protocol
1. **Baseline Establishment:**
   - Run full test suite BEFORE any changes
   - Document current system state and behavior
   - Establish performance benchmarks
   - Record current test coverage metrics

2. **Change Validation:**
   - Run full test suite AFTER each major step
   - Compare results to baseline - ANY degradation = STOP
   - Validate integration points remain functional
   - Verify performance regressions are within acceptable bounds

3. **Failure Response:**
   - If ANY test fails that previously passed: **STOP IMMEDIATELY**
   - Do not continue to next step
   - Alert user with specific failure details
   - Provide rollback instructions
   - Wait for user decision before proceeding

## Plan Execution Rules

### Branch Management
- Do not proceed unless you are on a git branch other than main
- If needed, create a branch specifically for this simplification work
- Branch naming: `simplify/[area-name]-[date]`

### Step-by-Step Execution
- **Execute steps IN ORDER:** Follow the checklist sequence exactly
- **One step at a time:** Complete current step fully before starting next
- **No delegation:** Do NOT delegate execution to subagents - execute directly
- **IMMEDIATE Progress tracking:** Update checkbox to `[x]` using search_replace tool THE MOMENT each sub-task is done
- **NO BATCHING:** Never wait until end of phase to update multiple checkboxes - update each one immediately
- **Real-time visibility:** User should see progress in real-time by checking the plan file

### Confirmation Protocol
- **Stop after each major step** and wait for user's go-ahead
- **UNLESS NOSUBCONF is specified:** Then proceed automatically between steps
- **Always stop after phases complete:** Wait for user confirmation between phases
- **Always stop on any test failure:** Immediate user notification required

## Checkbox Update Protocol

### CRITICAL: Plan File Checkbox Management

**Before Starting Any Plan Processing:**
1. **Extract Plan File Path:** Get the plan file path from the first argument
2. **Store as Variable:** Maintain PLAN_FILE variable throughout execution
3. **Initial Verification:** Read the plan file to understand current state

**For Each Completed Step:**
1. **Identify Target Checkbox:** Locate the specific `- [ ]` checkbox for the completed step
2. **Use search_replace Tool:** Replace `- [ ]` with `- [x]` for that specific step
3. **Include Sufficient Context:** Use enough surrounding text to make the replacement unique
4. **Verify Update:** Read back the modified section to confirm checkbox was updated
5. **Handle Nested Checkboxes:** For sub-items, update both the sub-item and parent as appropriate

## Phase Completion Protocol

When all steps in a phase are marked `[x]`:

1. **Full Validation:**
   - Run complete test suite as defined in TESTING.md or CLAUDE.md
   - Verify all functionality preservation requirements
   - Check performance benchmarks
   - Validate integration points

2. **Git Management:**
   - Stage changes: `git add .`
   - Clean up temporary files and artifacts
   - Commit with descriptive message using conventional format:
     ```
     git commit -m "refactor: [phase description]" -m "- [key changes made]" -m "- [preservation verifications]" -m "Related to simplify-plan-[area-name]"
     ```

3. **Documentation:**
   - Update plan file with phase completion
   - Document any lessons learned or issues encountered
   - Update risk assessment if needed

4. **User Confirmation:**
   - Always stop and wait for user approval before next phase
   - Provide summary of phase accomplishments
   - Highlight any concerns or deviations from plan

## Error Handling and Recovery

### Test Failure Response
1. **Immediate Actions:**
   - Stop all further execution
   - Document the exact test failure details
   - Identify what changed since last successful test run
   - Capture system state for debugging

2. **User Communication:**
   - Alert user with clear failure description
   - Provide specific error messages and logs
   - Suggest potential rollback options
   - Wait for explicit user decision on how to proceed

3. **Recovery Options:**
   - Rollback last change and retry
   - Debug and fix the issue before continuing
   - Skip problematic step and mark as deferred
   - Abort simplification plan entirely

### Git Safety Net
- Each phase should be a clean commit point
- Easy rollback to any previous stable state
- Clear commit messages for easy navigation
- Branch isolation from main codebase

## Success Criteria

A step is considered complete when:
- [ ] All step actions have been executed
- [ ] Step is marked `[x]` in plan file using search_replace tool
- [ ] Checkbox update verified by reading plan file back
- [ ] All tests pass (or degradation is explained and approved)
- [ ] No functionality regressions detected
- [ ] User has confirmed (unless NOSUBCONF specified)

A phase is considered complete when:
- [ ] All steps in phase are marked `[x]`
- [ ] Full test suite passes
- [ ] Git commit created with changes
- [ ] Documentation updated
- [ ] User approval received for next phase

The entire plan is complete when:
- [ ] All phases marked complete
- [ ] Final integration testing passed
- [ ] Performance benchmarks maintained
- [ ] All temporary artifacts cleaned up
- [ ] Completion documented in plan file

## AI Instructions for Plan Processing

When processing simplification plans, the AI must:

1. **Follow the safety protocol absolutely:**
   - Never skip test validation
   - Never continue after test failures
   - Never delegate execution to subagents
   - **CRITICAL: Never skip checkbox updates - this is MANDATORY for progress tracking**

2. **Maintain detailed progress tracking:**
   - Update plan file after every significant action using search_replace tool
   - Mark steps complete immediately with `[x]` checkbox updates
   - Verify each checkbox update by reading the modified section
   - Document issues and deviations promptly
   - Never proceed to next step without updating current step checkbox

3. **Execute steps directly:**
   - Implement code changes personally
   - Write tests directly
   - Run validations without delegation

4. **Preserve functionality unconditionally:**
   - Validate preservation after every change
   - Stop immediately on any regression
   - Prioritize safety over speed

5. **Communicate clearly with user:**
   - Provide detailed status updates
   - Alert immediately on any issues
   - Ask for guidance when uncertain

Remember: The goal is safe, systematic simplification with absolute functionality preservation. Speed is secondary to safety and correctness.
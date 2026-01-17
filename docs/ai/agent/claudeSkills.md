# Claude Skills（Agent Skills）是什么：把“可复用的工作方法”装进文件夹

Claude Skills（在官方文档中也称 Agent Skills）可以理解为一种“面向任务的能力包”：把你在某类工作里反复使用的流程、规范、脚本和参考资料，组织成一个目录，让 Claude 在需要时自动加载并使用，从而让通用模型表现得更像“懂你业务的新同事”。官方将其类比为给新同事准备的 onboarding guide：先给目录与概要，需要时再按需展开细节。来源：[Anthropic 工程博客](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

这不是一个新模型，也不是一个新的工具协议，更像是 **Agent 的“知识与流程封装格式 + 运行时加载机制”**：让 Claude 在面对具体任务时，更稳定、更一致、更低 token 成本地执行你期望的工作方式。来源：[Claude Code Skills 文档](https://docs.claude.com/en/docs/claude-code/skills)

## 1. Skills 解决的核心问题

在没有 Skills 的时候，你通常只能用三种方式让模型“按你的方式做事”：

- 每次都把流程/规范写进提示词（冗长、容易漏、复用困难）
- 在项目里写一份统一指令（太全局，不够按需）
- 直接做硬编码工作流（可靠但不灵活，维护成本高）

Skills 把“可复用的工作方法”变成文件系统中的资产，让 Claude **自动决定何时使用**，并且只在需要时加载具体内容，降低上下文占用（progressive disclosure）。来源：[Anthropic 工程博客](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## 2. Skills 的基本形态：一个目录 + 一个 SKILL.md

一个 Skill 最小只需要一个目录，其中包含一个 `SKILL.md` 文件。`SKILL.md` 顶部必须是 YAML frontmatter（至少包含 `name` 和 `description`），其余部分用 Markdown 写具体的“做事指南”。Claude 会在启动时预加载所有技能的 `name/description` 用于匹配，当判断某个 Skill 相关时，再把完整内容读入上下文。来源：[Anthropic 工程博客](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) 、[Claude Code Skills 文档](https://docs.claude.com/en/docs/claude-code/skills)

一个典型的 Skill 目录结构大致如下：

```text
.claude/skills/
  code-review/
    SKILL.md
    reference.md
    scripts/
      check_style.py
```

## 3. “渐进式加载”：为什么 Skills 很省 token

Skills 的关键设计点不是“能写一段提示词”，而是“分层加载”：

1. **元数据层**：只把 `name/description` 预加载到系统提示中，成本很低
2. **说明层**：触发时读取 `SKILL.md` 正文
3. **扩展层**：`SKILL.md` 中引用到的其它文件（比如 `reference.md`、规范、模板），Claude 只在需要时再读取
4. **执行层**：如果 Skill 提供脚本，Claude 可以运行脚本并只把输出带回上下文（减少把整段代码塞进上下文的浪费）

来源：[Anthropic 工程博客](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## 4. Skills 放在哪里：个人 / 项目 / 组织

在 Claude Code 里，Skills 的存放位置决定了谁能用：

- **个人**：`~/.claude/skills/`（只对你生效，跨项目复用）
- **项目**：`.claude/skills/`（仓库内共享给协作者）
- **组织**：企业托管配置（对组织内所有人）

此外，在 monorepo 中，如果你在子目录工作，Claude Code 会自动发现更深层的 `.claude/skills/`（便于“按包/按模块”定制）。来源：[Claude Code Skills 文档](https://docs.claude.com/en/docs/claude-code/skills)

## 5. Skills 与其它定制能力的区别

Claude Code 里常见的定制手段很多，Skills 的定位可以用一句话概括：

- **Skills**：让 Claude 在“当前会话”里自动获得某类任务的专业做法（模型自己决定何时启用）
- **Slash commands**：你显式输入 `/xxx` 触发一段可复用提示
- **CLAUDE.md**：项目级常驻指令，每次对话都加载
- **Subagents**：把任务委派到隔离上下文/不同工具权限的子代理
- **Hooks**：在特定事件触发脚本或流程
- **MCP servers**：提供“外部工具/数据接口”；Skills 负责教 Claude “怎么用这些工具把事办成”

来源：[Claude Code Skills 文档](https://docs.claude.com/en/docs/claude-code/skills)

## 6. 一个最小示例：写一个“PR 评审规范”Skill

你可以在项目根目录创建：

```text
.claude/skills/pr-review/
  SKILL.md
```

`SKILL.md` 示例：

```md
---
name: pr-review
description: Review pull requests using our team standards and provide actionable feedback.
---

# PR Review

## Instructions
- Always summarize the change in one paragraph.
- Check for correctness, tests, error handling, and readability.
- Propose concrete diffs when possible.

## Output format
- Summary
- Risks
- Suggestions
- Test plan
```

Claude 会基于 `description` 判断何时启用这个 Skill。如何编写、命名与排错规则，可参考官方指南。来源：[Claude Code Skills 文档](https://docs.claude.com/en/docs/claude-code/skills)

## 7. 安全与可信来源

Skills 可以包含脚本与资源文件，本质上是在“可执行环境 + 文件系统”里扩展 Agent 的能力边界。官方建议只使用可信来源的 Skills（自己写的或来自 Anthropic 等可信发布方）。来源：[Anthropic 工程博客](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## 8. 总结

Claude Skills 的价值可以归纳为三点：

- **可复用**：把组织/个人的流程与标准沉淀为可共享资产
- **按需加载**：靠渐进式加载降低上下文占用与成本
- **可组合**：多个 Skills 可以叠加，用更小的模块拼出更复杂的能力

如果你正在做 Agent 系统设计，Skills 更像是“知识与流程层”的工程化封装；它和工具协议（如 MCP）并不冲突：MCP 提供工具与数据通道，Skills 把“怎么用”变成可复用的操作手册。来源：[Claude Code Skills 文档](https://docs.claude.com/en/docs/claude-code/skills)

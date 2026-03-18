# Melo 项目技术开发全记录 (2026-03-18)

本项目是一个基于 **Vite + React** 的现代化移动端落地页。在本次协作中，我们从环境部署、样式重构到高级 WebGL 视觉动效进行了全方位的开发。

---

## 1. 部署与环境配置 (Deployment)

### 1.1 GitHub Pages 适配
为了确保网页在 GitHub Pages (`https://<username>.github.io/<repo-name>/`) 上正确运行，我们进行了以下关键配置：
*   **`package.json` 修正**：将 `homepage` 字段设置为正确的仓库子路径，防止打包后的 `index.html` 找不到资源文件。
*   **自动部署流**：配置了基于 `gh-pages` 插件的本地部署脚本 (`npm run deploy`) 以及 `.github/workflows/deploy.yml` 的自动构建流程。
*   **Vite Base Path**：确认了项目配置中的 `base: './'`，确保静态资源按相对路径引用。

---

## 2. 视觉动效深度定制 (UI/UX)

我们将网页从一个静态原型转变为一个富有沉浸感的动态体验，主要涵盖以下五个维度：

### 2.1 WebGL 银河动态背景 (Galaxy Background)
*   **技术方案**：由于环境权限限制无法安装外部 `ogl` 库，我们采用 **原生 WebGL API** 手写了着色器引擎。
*   **核心逻辑**：
    *   **Vertex Shader**：处理全屏四边形的坐标映射。
    *   **Fragment Shader**：实现螺旋星系算法，包含恒星层级划分、动态旋转、亮度闪烁和色彩偏移。
*   **参数配置**：
    *   `starSpeed: 1.2` (更快的星流感)
    *   `density: 0.6` (适中的星簇密度)
    *   `hueShift: 130` (独特的青蓝色/紫色调)

### 2.2 全局点击火花 (Click Spark)
*   **实现**：基于 Canvas 2D 的轻量级粒子系统。
*   **交互**：在全页面任何位置点击，都会触发以点击处为中心的径向喷射火花效果，显著增强了网页的活跃感。

### 2.3 滚动显现引擎 (Scroll Reveal)
*   **核心原理**：封装了基于 `framer-motion` 的 `ScrollReveal` 组件。
*   **功能**：使用 `whileInView` 钩子，不仅支持元素进入视口时的淡入升起动画，还支持向上滚动离开时的“回退”效果。
*   **应用范围**：Hero 标题、功能说明文字、Bento 特性卡片以及用户评论区。

### 2.4 霓虹发光按钮 (Uiverse Style Button)
*   **样式源**：参考 Ashon-G 的经典设计。
*   **视觉细节**：
    *   **多层光晕**：背景使用 `conic-gradient` 和 `blur-md` 模拟真实的霓虹散射。
    *   **流光文字**：集成 `ShinyText` 组件，文字在背景色与高亮色之间循环扫动。
    *   **交互反馈**：悬停时触发比例缩放和边框暗影增强。

---

## 3. 核心组件结构 (Component Architecture)

新增 UI 组件均存放于 `src/app/components/ui/` 目录下，保证了代码的可重用性与清晰度：
*   `Galaxy.tsx`: 高性能 WebGL 背景渲染。
*   `ClickSpark.tsx`: 页面级交互特效。
*   `ShinyText.tsx`: 动效文本。
*   `UiverseButton.tsx`: 定制化品牌按钮。
*   `ScrollReveal.tsx`: 滚动动画包装器。

---

## 4. 后续维护指南
1.  **修改背景风格**：在 `App.tsx` 中调整 `Galaxy` 组件的 `hueShift` 参数可改变色调。
2.  **调整动画灵敏度**：在 `ScrollReveal.tsx` 中修改 `distance` 或 `duration`。
3.  **打包上线**：运行 `npm run build` 后查看 `dist` 目录，确认资源大小（通常在 1MB 左右）。

---
*记录生成于：2026-03-18 16:38*

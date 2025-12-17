# Windows 时间线 - 40年创新历程

一个交互式的、滚动驱动的电影级时间线，展示从MS-DOS（1985年）到Windows 11（2025年）的Windows发展历程。

## 🌟 项目特色

### 🎨 电影级体验
- 滚动驱动的时间线，带有玻璃态效果
- 11个全屏部分，每个代表一个Windows时代
- 动态背景渐变，随滚动进度变化
- 流畅的过渡动画和视觉效果

### 🔊 真实音频系统
- 每个Windows时代的启动音效
- Howler.js音频管理，支持跨浏览器
- 用户交互后激活音频上下文
- 音量控制和自动内存清理

### 🎮 丰富的交互元素
- **开始按钮**：点击触发粒子爆炸效果
- **Metro磁贴**：Windows 8特有的3D翻转动画
- **运行对话框**：Win+R快捷键，支持彩蛋命令
- **视觉效果**：CRT抖动、bloom脉冲、玻璃态效果

### ⚡ 性能优化
- 自动FPS监控和粒子数量调整
- GPU加速的Three.js渲染
- 懒加载非关键组件
- 目标Lighthouse评分：≥95分

### ♿ 无障碍访问
- AAA级无障碍标准
- 支持减少动画偏好
- 键盘导航和焦点管理
- 语义化HTML结构

## 🛠️ 技术栈

### 核心技术
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript 5.5 (严格模式)
- **样式**: Tailwind CSS 3.4 + 自定义Windows主题
- **动画**: Framer Motion 11.2.8
- **3D图形**: Three.js r160 + React Three Fiber
- **音频**: Howler.js 2.2.4
- **状态管理**: Zustand 4.5
- **性能监控**: Web Vitals

### 开发工具
- **构建工具**: Next.js + TypeScript
- **包管理**: pnpm (推荐) 或 npm
- **代码质量**: ESLint + Prettier
- **性能测试**: Lighthouse CI

## 📁 项目结构

```
windows-timeline/
├── app/                          # Next.js App Router
│   ├── windows-timeline/        # 主时间线页面
│   │   ├── page.tsx            # 主页面组件
│   │   └── loading.tsx         # 加载页面
│   ├── layout.tsx              # 根布局
│   ├── globals.css             # 全局样式
│   └── page.tsx                # 首页重定向
├── components/                  # React组件
│   ├── sections/               # Windows时代部分
│   │   ├── Section.tsx         # 通用部分包装器
│   │   ├── DosSection.tsx      # MS-DOS (1985)
│   │   ├── 95Section.tsx       # Windows 95 (1995)
│   │   ├── XPSection.tsx       # Windows XP (2001)
│   │   ├── VistaSection.tsx    # Windows Vista (2007)
│   │   ├── Win8Section.tsx     # Windows 8 (2012)
│   │   └── Win11Section.tsx    # Windows 11 (2021)
│   ├── ui/                     # UI组件
│   │   ├── GlassWindow.tsx     # 玻璃态窗口
│   │   ├── StartButton.tsx     # 开始按钮
│   │   ├── MetroTile.tsx       # Metro磁贴
│   │   └── RunDialog.tsx       # 运行对话框
│   └── canvas/                 # Three.js画布组件
│       ├── WallpaperMorph.tsx  # 壁纸过渡
│       └── ParticleExplosion.tsx # 粒子爆炸
├── hooks/                      # 自定义React Hooks
│   ├── useTimelineStore.ts     # Zustand状态管理
│   ├── useStartupSound.ts      # 音频管理
│   ├── useGlobalHotkey.ts      # 全局快捷键
│   ├── useParallaxParticles.ts # 背景粒子
│   └── useFPS.ts              # FPS监控
├── lib/                        # 工具库
│   ├── animations/
│   │   ├── variants.ts         # 动画变体
│   │   └── gradients.ts        # 渐变插值
│   └── constants.ts            # 常量配置
├── public/                     # 静态资源
│   ├── sounds/                 # Windows启动音效
│   │   ├── 95.ogg
│   │   ├── 98.ogg
│   │   ├── ...
│   └── wallpapers/             # 时代壁纸
│       ├── dos-black.webp
│       ├── xp-bliss.webp
│       └── ...
├── styles/
│   └── windows.css            # Windows特定样式
├── README.md                  # 英文文档
├── README_CN.md              # 中文文档
└── package.json              # 项目配置
```

## 🚀 快速开始

### 环境要求
- Node.js ≥ 18.0.0
- pnpm (推荐) 或 npm

### 安装依赖
```bash
# 克隆项目
git clone https://github.com/yourusername/windows-timeline.git
cd windows-timeline

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 构建生产版本
```bash
# 构建项目
pnpm build

# 导出静态文件
pnpm export

# 使用Lighthouse CI测试
pnpm lh
```

## 🎮 功能详解

### 交互式时间线
- **滚动导航**: 平滑滚动到各个Windows时代
- **视觉反馈**: 每个时代的独特视觉风格
- **音频体验**: 点击开始按钮播放启动音效
- **粒子效果**: 2048个粒子的爆炸动画

### Windows 8 Metro界面
- **动态磁贴**: 6×2网格布局
- **3D翻转**: 鼠标悬停时180度翻转
- **响应式设计**: 适配不同屏幕尺寸

### 运行对话框
- **快捷键**: Win+R 唤起
- **彩蛋命令**: 
  - `winver` - 跳转到彩蛋页面
  - `cmd` - 命令提示符
  - `regedit` - 注册表编辑器
  - `taskmgr` - 任务管理器

### 性能优化
- **FPS监控**: 自动调整粒子数量
- **懒加载**: 按需加载组件
- **GPU加速**: Three.js硬件加速
- **内存管理**: 自动清理音频资源

## 🎨 设计系统

### 颜色方案
每个Windows时代都有独特的颜色标识：
- **MS-DOS**: #0a0a0a (纯黑)
- **Windows 95**: #008080 (青色)
- **Windows XP**: #228b22 (森林绿)
- **Windows Vista**: #1ba1e2 (天蓝)
- **Windows 11**: #0067c0 (深蓝)

### 动画效果
- **窗口入场**: 缩放+模糊+透明度
- **CRT抖动**: 95/98时代的特色效果
- **Bloom脉冲**: Vista时代的辉光效果
- **3D翻转**: Metro磁贴的立体翻转

### 玻璃态效果
```css
.acrylic {
  backdrop-filter: blur(24px) saturate(180%);
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📱 响应式设计

### 断点设置
- **移动端**: < 768px (粒子数量降至640)
- **平板**: 768px - 1024px
- **桌面**: > 1024px (全粒子效果2048)

### 触摸优化
- 触摸友好的按钮尺寸
- 滑动手势支持
- 移动端优化的动画时长

## 🔧 自定义配置

### 添加新的Windows时代
以Windows 12为例：

1. **更新常量** (`/lib/constants.ts`):
```typescript
{ id: '12', name: 'Windows 12', year: 2025, color: '#00a8ff' }
```

2. **创建部分组件** (`/components/sections/Win12Section.tsx`)

3. **生成资源**:
   - 壁纸: `/public/wallpapers/12-hero.webp`
   - 音效: `/public/sounds/12.ogg`

4. **导入并添加**到主页面

### 性能调优
```typescript
// 调整粒子数量
PARTICLE_COUNT_DESKTOP = 2048
PARTICLE_COUNT_MOBILE = 640
PARTICLE_COUNT_LOW = 256

// 调整动画时长
SCROLL_DURATION = 800
PARTICLE_EXPLOSION_DURATION = 1200
```

## 📊 性能指标

### 目标Lighthouse评分
- **性能**: ≥ 95
- **无障碍**: ≥ 95
- **最佳实践**: ≥ 95
- **SEO**: ≥ 95

### 包大小优化
- 目标: ≤ 250KB gzipped
- 代码分割: 按路由和组件
- 资源优化: WebP格式图片, OGG格式音频

## 🌐 浏览器支持

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 贡献指南

1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 📄 许可证

MIT许可证 - 详见LICENSE文件

## ⚠️ 声明

- Windows和Microsoft是Microsoft公司的商标
- 这是一个粉丝项目，用于庆祝Windows历史
- 所有资源均为生成或在教育用途下合理使用
- 本项目采用Kimi OK Computer辅助生成

---

**Windows时间线** - 庆祝40年创新历程 (1985-2025) ✨